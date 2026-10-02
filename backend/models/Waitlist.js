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

const waitlistSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50
        },
        lastName: {
            type: String,
            required: true,
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
            required: true,
            enum: WAITLIST_PROFILES
        },
        country: {
            type: String,
            required: true,
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
        }
    },
    {
        timestamps: true  // ajout "createdAt" + "updateAt"
    }
);

export default mongoose.model("Waitlist", waitlistSchema);
