import { Contact } from "../models/index.js";
import { Resend } from "resend";

// Adresse qui reçoit les demandes de contact
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@legomnia.com";

// Expéditeur des e-mails : doit appartenir à un domaine vérifié sur Resend
// (avec "onboarding@resend.dev", Resend n'envoie qu'à l'adresse du compte Resend)
const RESEND_FROM = process.env.RESEND_FROM || "onboarding@resend.dev";

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
            message: `La demande de contact a bien été créée`
        });
    }
    next();
};

/********** CREATE **********/
const createContact = async (req, res) => {

    try {
        // retire le champ honeypot avant l'enregistrement
        const { website, ...formData } = req.body;

        const contact = await Contact.create(formData);

        // Email notif (optionnel : ignoré si Resend n'est pas configuré,
        // et une erreur d'envoi ne fait jamais échouer la demande)
        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                const { error: emailError } = await resend.emails.send({
                    from: RESEND_FROM,
                    to: CONTACT_EMAIL,
                    replyTo: contact.email,
                    subject: `Nouveau message : ${contact.subject}`,
                    html: `
                        <p><strong>Sujet :</strong> ${escapeHtml(contact.subject)}</p>
                        <hr/>
                        <p><strong>Expéditeur :</strong> ${escapeHtml(contact.firstName)} ${escapeHtml(contact.lastName)}</p>
                        <p><strong>Email :</strong> ${escapeHtml(contact.email)}</p>
                        <p><strong>Téléphone :</strong> ${escapeHtml(contact.phone)}</p>
                        <p><strong>Entreprise :</strong> ${escapeHtml(contact.company || "-")}</p>
                        <p><strong>Message :</strong> ${escapeHtml(contact.message)}</p>
                    `,
                });
                if (emailError) {
                    console.error("Erreur envoi email :", emailError.message);
                }
            } catch (emailError) {
                console.error("Erreur envoi email :", emailError.message);
            }
        }

        // retour de l'API
        return res.status(201).json({
            success: true,
            message: `La demande de contact a bien été créée`,
            data: contact
        });
    } catch (error) {
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
    createContact
};