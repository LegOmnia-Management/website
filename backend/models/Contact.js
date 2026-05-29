import mongoose from 'mongoose'; 
    
const contactSchema = new mongoose.Schema(
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
            trim: true,
            lowercase: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex côté front
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            match: /^\+?[0-9 ]{7,20}$/ // regex côté front
        },
        company: {
            type: String,
            trim: true,
            maxlength: 100,
            default: null
        },
        subject: {
            type: String,
            required: true,
            enum: [   // options du select
                "Demande d'information",
                "Demande de démo",
                "Partenariat",
                "Support technique",
                "Autre"
            ]
        },
        message: {
            type: String,
            required: true,
            minlength: 10,
            trim: true
        },
        cguAccepted: { 
            type: String, 
            required: true
        },
        cguAcceptedAt: { 
            type: Date, 
            default: Date.now
        }
    },
    {
        timestamps: true  // ajout "createdAt" + "updateAt"
    }
);

export default mongoose.model("Contact", contactSchema);