import { Waitlist } from "../models/index.js";
import { sendMail } from "../utils/mailer.js";

// Adresse qui reçoit les nouvelles inscriptions
const WAITLIST_EMAIL = process.env.WAITLIST_EMAIL || "contact@legomnia.com";

const SUCCESS_MESSAGE = "Votre inscription sur la liste d'attente a bien été prise en compte";

// échappe les valeurs saisies avant de les injecter dans l'e-mail HTML
const escapeHtml = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/********** HONEYPOT **********/
// Le champ "website" est invisible pour un humain : s'il est rempli, c'est un bot.
// On répond comme si tout s'était bien passé, sans rien enregistrer ni envoyer.

const honeypot = (req, res, next) => {
    if (req.body?.website) {
        return res.status(201).json({
            success: true,
            message: SUCCESS_MESSAGE
        });
    }
    next();
};

// Accusé de réception pour l'administrateur
const notify = (subject, rows) => sendMail({
    to: WAITLIST_EMAIL,
    replyTo: rows.Email,
    subject,
    html: `
        <p><strong>Nouvelle inscription sur la liste d'attente</strong></p>
        <hr/>
        ${Object.entries(rows).map(([label, value]) =>
            `<p><strong>${label} :</strong> ${escapeHtml(value || "-")}</p>`
        ).join("")}
    `,
});

// Confirmation d'inscription pour l'utilisateur
const confirmToUser = (email, firstName) => sendMail({
    to: email,
    replyTo: WAITLIST_EMAIL,
    subject: "Votre inscription sur la liste d'attente LegOmnia",
    html: `
        <p>Bonjour${firstName ? ` ${escapeHtml(firstName)}` : ""},</p>
        <p>Nous confirmons que votre inscription sur la liste d'attente LegOmnia a bien été prise en compte.</p>
        <p>Nous vous contacterons dès que l'accès sera disponible.</p>
        <p>À bientôt,<br/>L'équipe LegOmnia</p>
    `,
});

const success = (res) => res.status(201).json({
    success: true,
    message: SUCCESS_MESSAGE
});

const serverError = (res, error) => {
    if (process.env.NODE_ENV === "development") {
        console.error("Erreur serveur :", error);
    }
    return res.status(500).json({ 
        success: false,
        message: "Erreur serveur" 
    });
};

/********** CREATE (formulaire complet) **********/
const createWaitlist = async (req, res) => {

    try {
        const { firstName, lastName, email, organization, profile, country, products, newsletter } = req.body;

        const details = {
            firstName,
            lastName,
            organization: organization || null,
            profile,
            country,
            products: products || [],
            consentAccepted: true,
            consentAcceptedAt: Date.now(),
            newsletter: newsletter === "on",
            source: "page"
        };

        const existing = await Waitlist.findOne({ email: email.toLowerCase() });
        let entry;

        if (existing?.source === "popup") {
            // inscrit via la pop-up (e-mail seul) : on complète sa fiche
            entry = await Waitlist.findByIdAndUpdate(existing._id, details, { new: true, runValidators: true });
        } else if (existing) {
            // déjà inscrit : même réponse, pour ne pas révéler qui est sur la liste
            return success(res);
        } else {
            entry = await Waitlist.create({ email, ...details });
        }

        await notify(`Liste d'attente : ${entry.firstName} ${entry.lastName}`, {
            "Nom": `${entry.firstName} ${entry.lastName}`,
            "Email": entry.email,
            "Organisation": entry.organization,
            "Profil": entry.profile,
            "Pays": entry.country,
            "Produits": entry.products.join(", "),
            "Newsletter": entry.newsletter ? "Oui" : "Non",
            "Source": existing ? "Formulaire complet (complète une inscription pop-up)" : "Formulaire complet",
        });

        await confirmToUser(entry.email, entry.firstName);

        // retour de l'API (sans renvoyer les données personnelles)
        return success(res);
    } catch (error) {
        // inscription simultanée avec la même adresse (index unique)
        if (error?.code === 11000) return success(res);
        return serverError(res, error);
    }
};

/********** CREATE (pop-up, e-mail seul) **********/
const createWaitlistQuick = async (req, res) => {

    try {
        const { email } = req.body;

        // déjà inscrit : même réponse, pour ne pas révéler qui est sur la liste
        const existing = await Waitlist.findOne({ email: email.toLowerCase() });
        if (existing) return success(res);

        const entry = await Waitlist.create({
            email,
            consentAccepted: true,
            source: "popup"
        });

        await notify(`Liste d'attente (pop-up) : ${entry.email}`, {
            "Email": entry.email,
            "Source": "Pop-up (e-mail seul)",
        });

        await confirmToUser(entry.email);

        return success(res);
    } catch (error) {
        if (error?.code === 11000) return success(res);
        return serverError(res, error);
    }
};

export { 
    honeypot,
    createWaitlist,
    createWaitlistQuick
};
