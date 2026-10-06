import mongoose from 'mongoose';

// listes partagées avec le validateur (options des select)
export const WAITLIST_PROFILES = [
    "Avocat",
    "Juriste d'entreprise",
    "Magistrat",
    "Notaire / Huissier",
    "Administration publique",
    "Enseignant / Chercheur",
    "Étudiant",
    "Autre"
];

export const WAITLIST_PRODUCTS = [
    "Omnia",
    "Géode",
    "Omniscan"
];

// origine de l'inscription : formulaire complet (/liste-attente) ou pop-up (e-mail seul)
export const WAITLIST_SOURCES = ["page", "popup"];

// champs obligatoires uniquement pour le formulaire complet
const requiredOnPage = function () {
    return this.source !== "popup";
};

const waitlistSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: requiredOnPage,
            trim: true,
            minlength: 2,
            maxlength: 50
        },
        lastName: {
            type: String,
            required: requiredOnPage,
            trim: true,
            minlength: 2,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true, // une seule inscription par adresse
            trim: true,
            lowercase: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex côté front
        },
        organization: {
            type: String,
            trim: true,
            maxlength: 100,
            default: null
        },
        profile: {
            type: String,
            required: requiredOnPage,
            enum: WAITLIST_PROFILES
        },
        country: {
            type: String,
            required: requiredOnPage,
            trim: true,
            maxlength: 60
        },
        products: {
            type: [String],
            enum: WAITLIST_PRODUCTS,
            default: []
        },
        consentAccepted: {
            type: Boolean,
            required: true
        },
        consentAcceptedAt: {
            type: Date,
            default: Date.now
        },
        newsletter: {
            type: Boolean,
            default: false
        },
        source: {
            type: String,
            enum: WAITLIST_SOURCES,
            default: "page"
        }
    },
    {
        timestamps: true  // ajout "createdAt" + "updateAt"
    }
);

export default mongoose.model("Waitlist", waitlistSchema);
