import { Contact } from "../models/index.js";
import { Resend } from "resend";

/********** VERIFY TURNSTILE **********/
const verifyTurnstile = async (token) => {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.TURNSTILE_SECRET}&response=${token}`
    });
    const data = await response.json();
    return data.success;
};

/********** CREATE **********/
const createContact = async (req, res) => {

    try {
        // vérification Turnstile
        const { captchaToken, ...formData } = req.body;

        if (!captchaToken) {
            return res.status(400).json({ message: "Captcha manquant" });
        }

        const isCaptchaValid = await verifyTurnstile(captchaToken);
        if (!isCaptchaValid) {
            return res.status(400).json({ message: "Captcha invalide" });
        }

        // utilise formData pour ne pas sauvegarder le token
        const contact = await Contact.create(formData);

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
        return res.status(500).json({ 
            success: false,
            message: "Erreur serveur" 
        });
    }
};

/********** READ **********/
const readContacts = async (req, res) => {

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
        return res.status(500).json({ 
            success: false,
            message: "Erreur serveur" 
        });
    }
};
    
export { 
    createContact,
    readContacts
};