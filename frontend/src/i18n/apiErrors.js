/**
 * Messages d'erreur renvoyés par l'API (backend/validators, en français)
 * et leur traduction anglaise. À compléter si un message est ajouté côté backend.
 */
const API_ERRORS_EN = {
    // contact + liste d'attente
    "Le prénom est obligatoire": "First name is required",
    "Le prénom doit contenir 2 caractères minimum": "First name must be at least 2 characters long",
    "Le prénom doit contenir entre 2 et 50 caractères": "First name must be between 2 and 50 characters long",
    "Le nom est obligatoire": "Last name is required",
    "Le nom doit contenir 2 caractères minimum": "Last name must be at least 2 characters long",
    "Le nom doit contenir entre 2 et 50 caractères": "Last name must be between 2 and 50 characters long",
    "L'email est obligatoire": "Email is required",
    "L'email est invalide": "Email is invalid",
    "Le numéro de téléphone est invalide": "Phone number is invalid",
    "Le numéro de téléphone obligatoire": "Phone number is required",
    "L'entreprise doit contenir 2 caractères minimum": "Company must be at least 2 characters long",
    "Veuillez choisir le sujet parmi la liste proposée": "Please choose a subject from the list",
    "Le sujet est obligatoire": "Subject is required",
    "Le message doit contenir 10 caractères minimum": "Message must be at least 10 characters long",
    "Le message est obligatoire": "Message is required",
    "Vous devez accepter les CGU": "You must accept the terms of use",
    "L'organisation doit contenir entre 2 et 100 caractères": "Organization must be between 2 and 100 characters long",
    "Veuillez choisir votre profil parmi la liste proposée": "Please choose your profile from the list",
    "Le pays est obligatoire": "Country is required",
    "Le pays est invalide": "Country is invalid",
    "Produit inconnu": "Unknown product",
    "Vous devez accepter la politique de confidentialité": "You must accept the privacy policy",
};

/** Traduit l'objet { champ: message } renvoyé par l'API dans la langue courante. */
export const translateApiErrors = (errors, lang) => {
    if (lang !== 'en' || !errors) return errors;
    return Object.fromEntries(
        Object.entries(errors).map(([field, msg]) => [field, API_ERRORS_EN[msg] || msg])
    );
};
