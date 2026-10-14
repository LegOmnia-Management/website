// Fonction Scaleway Serverless : inscription à la liste d'attente.
// Pas de base de données : chaque inscription est envoyée par e-mail à
// WAITLIST_EMAIL (qui sert de registre) et l'inscrit reçoit une confirmation.
//
// Routes (même contrat que l'ancienne API) :
//   POST /api/waitlist        formulaire complet
//   POST /api/waitlist/quick  pop-up (e-mail seul)
const nodemailer = require("nodemailer");

const WAITLIST_EMAIL = process.env.WAITLIST_EMAIL || "contact@legomnia.com";
const MAIL_FROM = process.env.MAIL_FROM || "LegOmnia <notifications@legomnia.com>";
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "https://www.legomnia.com,https://legomnia.com")
    .split(",").map((o) => o.trim()).filter(Boolean);

const SUCCESS_MESSAGE = "Votre inscription sur la liste d'attente a bien été prise en compte";

const escapeHtml = (value = "") => String(value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.infomaniak.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: (Number(process.env.SMTP_PORT) || 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

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

const send = async (message) => {
    try {
        await transport.sendMail({ from: MAIL_FROM, ...message });
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
    if (!isEmail(email)) return reply(400, { success: false, message: "L'email est invalide" }, origin);

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
    if (errors.length) return reply(400, { success: false, message: errors[0], errors }, origin);

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
