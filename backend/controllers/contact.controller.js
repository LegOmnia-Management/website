import { Contact } from "../models/index.js";
import { Resend } from "resend";

/********** CREATE **********/
const createContact = async (req, res) => {

    try {
        const contact = await Contact.create(req.body);

        // Email notif
        const resend = new Resend(process.env.RESEND_API_KEY);
        try {
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: process.env.CONTACT_EMAIL,
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
        } catch (emailError) {
            if (process.env.NODE_ENV === "development") {
                console.error("Erreur envoi email :", emailError);
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
        return res.status(500).json({ message: "Erreur serveur" });
    }
};

/********** READ **********/
const readContacts = async (req, res) => {

    console.log("GET /api/contact HIT");
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
    
        // retour de l'API
        return res.status(200).json({
        success: true,
        message: `Les demandes de contact ont bien été récupérées`,
        data: contacts
        });
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error("Erreur serveur :", error);
        }
        return res.status(500).json({ message: "Erreur serveur" });
    }
};
    
export { 
    createContact,
    readContacts
};