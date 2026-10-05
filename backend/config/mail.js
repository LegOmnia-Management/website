// Configuration des e-mails de notification (formulaires contact et liste d'attente)

// Expéditeur : doit appartenir à un domaine vérifié dans Resend (legomnia.com)
const MAIL_FROM = process.env.MAIL_FROM || "LegOmnia <contact@legomnia.com>";

// Destinataires des notifications, séparés par des virgules dans NOTIFICATION_EMAILS
const DEFAULT_RECIPIENTS = [
    "contact@legomnia.com",
    "jp.bertaud@legomnia.com",
    "alexandra.esmel@legomnia.com"
];

const NOTIFICATION_RECIPIENTS = process.env.NOTIFICATION_EMAILS
    ? process.env.NOTIFICATION_EMAILS.split(",").map(email => email.trim()).filter(Boolean)
    : DEFAULT_RECIPIENTS;

export { MAIL_FROM, NOTIFICATION_RECIPIENTS };
