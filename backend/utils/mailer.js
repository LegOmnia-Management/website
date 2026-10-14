import nodemailer from "nodemailer";

// Expéditeur affiché dans les e-mails (boîte SMTP, ex. Infomaniak)
const MAIL_FROM = process.env.MAIL_FROM || "LegOmnia <notifications@legomnia.com>";

let transport = null;
const getTransport = () => {
    if (!process.env.SMTP_HOST) return null;
    if (!transport) {
        const port = Number(process.env.SMTP_PORT) || 465;
        transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port,
            secure: port === 465,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
    }
    return transport;
};

// Envoi d'e-mail (optionnel : ignoré si SMTP n'est pas configuré,
// et une erreur d'envoi ne fait jamais échouer la requête)
export const sendMail = async (message) => {
    const smtp = getTransport();
    if (!smtp) {
        console.warn("SMTP_HOST absent : e-mail non envoyé");
        return;
    }
    try {
        await smtp.sendMail({ from: MAIL_FROM, ...message });
    } catch (error) {
        console.error("Erreur envoi email :", error.message);
    }
};
