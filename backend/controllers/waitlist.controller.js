import { Waitlist } from "../models/index.js";
import { Resend } from "resend";

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

/********** CREATE **********/
const createWaitlist = async (req, res) => {

    try {
        const { firstName, lastName, email, organization, profile, country, products, newsletter } = req.body;

        // déjà inscrit : même réponse, pour ne pas révéler qui est sur la liste
        const existing = await Waitlist.findOne({ email: email.toLowerCase() });
        if (existing) {
            return res.status(201).json({
                success: true,
                message: SUCCESS_MESSAGE
            });
        }

        const entry = await Waitlist.create({
            firstName,
            lastName,
            email,
            organization: organization || null,
            profile,
            country,
            products: products || [],
            consentAccepted: true,
            newsletter: newsletter === "on"
        });

        // Email notif (optionnel : ignoré si Resend n'est pas configuré,
        // et une erreur d'envoi ne fait jamais échouer l'inscription)
        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                const { error: emailError } = await resend.emails.send({
                    from: "onboarding@resend.dev",
                    to: WAITLIST_EMAIL,
                    replyTo: entry.email,
                    subject: `Liste d'attente : ${entry.firstName} ${entry.lastName}`,
                    html: `
                        <p><strong>Nouvelle inscription sur la liste d'attente</strong></p>
                        <hr/>
                        <p><strong>Nom :</strong> ${escapeHtml(entry.firstName)} ${escapeHtml(entry.lastName)}</p>
                        <p><strong>Email :</strong> ${escapeHtml(entry.email)}</p>
                        <p><strong>Organisation :</strong> ${escapeHtml(entry.organization || "-")}</p>
                        <p><strong>Profil :</strong> ${escapeHtml(entry.profile)}</p>
                        <p><strong>Pays :</strong> ${escapeHtml(entry.country)}</p>
                        <p><strong>Produits :</strong> ${escapeHtml(entry.products.join(", ") || "-")}</p>
                        <p><strong>Newsletter :</strong> ${entry.newsletter ? "Oui" : "Non"}</p>
                    `,
                });
                if (emailError) {
                    console.error("Erreur envoi email :", emailError.message);
                }
            } catch (emailError) {
                console.error("Erreur envoi email :", emailError.message);
            }
        }

        // retour de l'API (sans renvoyer les données personnelles)
        return res.status(201).json({
            success: true,
            message: SUCCESS_MESSAGE
        });
    } catch (error) {
        // inscription simultanée avec la même adresse (index unique)
        if (error?.code === 11000) {
            return res.status(201).json({
                success: true,
                message: SUCCESS_MESSAGE
            });
        }
        if (process.env.NODE_ENV === "development") {
            console.error("Erreur serveur :", error);
        }
        return res.status(500).json({ 
            success: false,
            message: "Erreur serveur" 
        });
    }
};

export { 
    honeypot,
    createWaitlist
};
