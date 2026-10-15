// Fonction Scaleway Serverless : inscription à la liste d'attente.
// Pas de base de données : chaque inscription est envoyée par e-mail à
// WAITLIST_EMAIL (qui sert de registre) et l'inscrit reçoit une confirmation.
//
// Routes (même contrat que l'ancienne API) :
//   POST /api/waitlist        formulaire complet
//   POST /api/waitlist/quick  pop-up (e-mail seul)
const dns = require("dns").promises;
const DISPOSABLE_DOMAINS = require("./disposable-domains");

const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const WAITLIST_EMAIL = process.env.WAITLIST_EMAIL || "contact@legomnia.com";
const MAIL_FROM = process.env.MAIL_FROM || "LegOmnia <notifications@legomnia.com>";
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "https://www.legomnia.com,https://legomnia.com")
    .split(",").map((o) => o.trim()).filter(Boolean);

const SUCCESS_MESSAGE = "Votre inscription sur la liste d'attente a bien été prise en compte";

const escapeHtml = (value = "") => String(value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// "LegOmnia <notifications@legomnia.com>" → { name, email }
const parseAddress = (value) => {
    const match = String(value).trim().match(/^(?:"?([^"<]*)"?\s*)?<([^>]+)>$/);
    if (match) return { name: match[1]?.trim() || undefined, email: match[2].trim() };
    return { email: String(value).trim() };
};

const corsHeaders = (origin) => ({
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
});

const reply = (statusCode, body, origin) => ({
    statusCode,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    body: JSON.stringify(body),
});

const isEmail = (v) => typeof v === "string" && v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const text = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");


/********** ANTI-ABUS **********/

// TLD gratuits / très utilisés pour les inscriptions frauduleuses
const SUSPICIOUS_TLDS = new Set(["tk", "ml", "ga", "cf", "gq", "top", "click", "work", "loan", "xyz"]);

// Limites en mémoire : la fonction est sans état, ces compteurs ne valent que
// pour une instance « chaude » (protection au mieux, pas une garantie absolue).
const RATE = { windowMs: 60 * 60 * 1000, perEmail: 1, perIp: 5 };
const hits = new Map();

const tooMany = (key, max) => {
    const now = Date.now();
    const list = (hits.get(key) || []).filter((t) => now - t < RATE.windowMs);
    if (list.length >= max) {
        hits.set(key, list);
        return true;
    }
    list.push(now);
    hits.set(key, list);
    if (hits.size > 5000) hits.clear();
    return false;
};

// forme canonique : jean.dupont+test@gmail.com == jeandupont@gmail.com
const canonicalEmail = (email) => {
    let [local, domain] = email.split("@");
    local = local.split("+")[0];
    if (domain === "gmail.com" || domain === "googlemail.com") {
        local = local.replace(/\./g, "");
        domain = "gmail.com";
    }
    return `${local}@${domain}`;
};

const hasMailServer = async (domain) => {
    const withTimeout = (p) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 3000))]);
    try {
        const mx = await withTimeout(dns.resolveMx(domain));
        return mx.length > 0;
    } catch (error) {
        if (error.code === "ENOTFOUND" || error.code === "ENODATA") {
            // pas de MX : un enregistrement A est toléré (RFC 5321)
            try { return (await withTimeout(dns.resolve4(domain))).length > 0; } catch { return false; }
        }
        return true; // erreur DNS transitoire : on ne bloque pas un vrai utilisateur
    }
};

// renvoie un message d'erreur, ou null si l'adresse est acceptable
const checkEmail = async (email) => {
    const [local, domain] = email.split("@");
    const tld = domain.split(".").pop();
    if (DISPOSABLE_DOMAINS.has(domain) || [...DISPOSABLE_DOMAINS].some((d) => domain.endsWith(`.${d}`))) {
        return "Les adresses e-mail temporaires ne sont pas acceptées";
    }
    if (SUSPICIOUS_TLDS.has(tld)) return "Cette adresse e-mail n'est pas acceptée";
    // locaux suspects : suite de chiffres/aléatoire très longue, trop de points
    if (/^\d{9,}$/.test(local) || /[a-z0-9]{25,}/.test(local) || (local.match(/\./g) || []).length > 4) {
        return "Cette adresse e-mail n'est pas acceptée";
    }
    if (!(await hasMailServer(domain))) return "Le domaine de cette adresse e-mail est introuvable";
    return null;
};

// Version texte brut dérivée du HTML (un e-mail HTML seul est un signal de spam courant)
const htmlToText = (html = "") => String(html)
    .replace(/<\/(p|div|h[1-6]|li|tr)>/gi, "\n").replace(/<br\s*\/?>/gi, "\n").replace(/<hr\s*\/?>/gi, "\n---\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

// Envoi via l'API SendGrid (v3 /mail/send) avec le fetch natif de Node ≥ 18.
const send = async ({ to, replyTo, subject, html }) => {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
        console.warn("SENDGRID_API_KEY absente : e-mail non envoyé");
        return;
    }
    const payload = {
        personalizations: [{ to: [parseAddress(to)] }],
        from: parseAddress(MAIL_FROM),
        subject,
        content: [{ type: "text/plain", value: htmlToText(html) }, { type: "text/html", value: html }],
    };
    if (replyTo) payload.reply_to = parseAddress(replyTo);
    try {
        const response = await fetch(SENDGRID_API_URL, {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            console.error(`Erreur envoi email (SendGrid ${response.status}) :`, await response.text().catch(() => ""));
        }
    } catch (error) {
        console.error("Erreur envoi email :", error.message);
    }
};

const notify = (subject, rows) => send({
    to: WAITLIST_EMAIL,
    replyTo: rows.Email,
    subject,
    html: `<p><strong>Nouvelle inscription sur la liste d'attente</strong></p><hr/>${
        Object.entries(rows).map(([label, value]) =>
            `<p><strong>${label} :</strong> ${escapeHtml(value || "-")}</p>`).join("")}`,
});

const confirmToUser = (email, firstName) => send({
    to: email,
    replyTo: WAITLIST_EMAIL,
    subject: "Votre inscription sur la liste d'attente LegOmnia",
    html: `<p>Bonjour${firstName ? ` ${escapeHtml(firstName)}` : ""},</p>
        <p>Nous confirmons que votre inscription sur la liste d'attente LegOmnia a bien été prise en compte.</p>
        <p>Nous vous contacterons dès que l'accès sera disponible.</p>
        <p>À bientôt,<br/>L'équipe LegOmnia</p>`,
});

exports.handle = async (event) => {
    const headers = event.headers || {};
    const origin = headers.origin || headers.Origin || "";
    const method = (event.httpMethod || "").toUpperCase();
    const path = (event.path || "").replace(/\/+$/, "");

    if (method === "OPTIONS") return { statusCode: 204, headers: corsHeaders(origin), body: "" };
    if (method !== "POST") return reply(405, { success: false, message: "Méthode non autorisée" }, origin);

    let data;
    try {
        data = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});
    } catch {
        return reply(400, { success: false, message: "Requête invalide" }, origin);
    }

    // honeypot : un bot remplit le champ caché, on fait semblant d'accepter
    if (data.website) return reply(201, { success: true, message: SUCCESS_MESSAGE }, origin);

    const email = text(data.email, 254).toLowerCase();
    if (!isEmail(email)) {
        return reply(400, { success: false, message: "L'email est invalide", errors: { email: "L'email est invalide" } }, origin);
    }

    const ip = (headers["x-forwarded-for"] || headers["X-Forwarded-For"] || "").split(",")[0].trim() || "inconnue";
    const emailError = await checkEmail(email);
    if (emailError) return reply(400, { success: false, message: emailError, errors: { email: emailError } }, origin);

    // limite par IP : réponse d'erreur explicite
    if (tooMany(`ip:${ip}`, RATE.perIp)) {
        return reply(429, { success: false, message: "Trop de demandes, veuillez réessayer plus tard", errors: { email: "Trop de demandes, veuillez réessayer plus tard" } }, origin);
    }
    // limite par adresse : réponse de succès identique, sans renvoyer d'e-mail
    // (ne révèle pas si l'adresse est déjà inscrite et évite l'envoi en rafale vers une même personne)
    if (tooMany(`email:${canonicalEmail(email)}`, RATE.perEmail)) {
        return reply(201, { success: true, message: SUCCESS_MESSAGE }, origin);
    }

    if (path.endsWith("/quick")) {
        await notify(`Liste d'attente (pop-up) : ${email}`, { "Email": email, "Source": "Pop-up (e-mail seul)" });
        await confirmToUser(email);
        return reply(201, { success: true, message: SUCCESS_MESSAGE }, origin);
    }

    const firstName = text(data.firstName, 50);
    const lastName = text(data.lastName, 50);
    const country = text(data.country, 60);
    const organization = text(data.organization, 100);
    const profile = text(data.profile, 60);
    const products = [].concat(data.products || []).filter(Boolean).map((p) => text(p, 40));

    const errors = [];
    if (firstName.length < 2) errors.push("Le prénom est obligatoire");
    if (lastName.length < 2) errors.push("Le nom est obligatoire");
    if (!country) errors.push("Le pays est obligatoire");
    if (!profile) errors.push("Veuillez choisir votre profil parmi la liste proposée");
    if (data.consentAccepted !== "on") errors.push("Vous devez accepter la politique de confidentialité");
    if (errors.length) return reply(400, { success: false, message: errors[0], errors: Object.fromEntries(errors.map((e, i) => [`field${i}`, e])) }, origin);

    await notify(`Liste d'attente : ${firstName} ${lastName}`, {
        "Nom": `${firstName} ${lastName}`,
        "Email": email,
        "Organisation": organization,
        "Profil": profile,
        "Pays": country,
        "Produits": products.join(", "),
        "Newsletter": data.newsletter === "on" ? "Oui" : "Non",
        "Source": "Formulaire complet",
    });
    await confirmToUser(email, firstName);
    return reply(201, { success: true, message: SUCCESS_MESSAGE }, origin);
};
