import { Contact } from "../models/index.js";
import { sendMail } from "../utils/mailer.js";

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

        // Email notif (optionnel : ignoré si SENDGRID_API_KEY ou CONTACT_EMAIL est absent,
        // et une erreur d'envoi ne fait jamais échouer la demande)
        if (process.env.CONTACT_EMAIL) {
            await sendMail({
                to: process.env.CONTACT_EMAIL,
                replyTo: contact.email,
                subject: `Nouveau message :  ${contact.subject}`,
                html: `
                    <p><strong>Sujet :</strong> ${contact.subject}</p>
                    <hr/>
                    <p><strong>Expéditeur :</strong> ${contact.firstName} ${contact.lastName}</p>
                    <p><strong>Email :</strong> ${contact.email}</p>
                    <p><strong>Téléphone :</strong> ${contact.phone}</p>
                    <p><strong>Entreprise :</strong> ${contact.company}</p>
                    <p><strong>Message :</strong> ${contact.message}</p>
                `,
            });
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