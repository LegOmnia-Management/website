import { Contact } from "../models/index.js";

/********** CREATE **********/
const createContact = async (req, res) => {

    try {
        const contact = await Contact.create(req.body);
    
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