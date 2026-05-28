import { body } from "express-validator";
import { returnErrors } from "./index.js";

const validateContact = [
    body("firstName")
        .trim()
        .isLength({ min: 2 })
        .withMessage("Le prénom doit contenir 2 caractères minimum")
        .notEmpty()
        .withMessage("Le prénom est obligatoire"),

    body("lastName")
        .trim()
        .isLength({ min: 2 })
        .withMessage("Le nom doit contenir 2 caractères minimum")
        .notEmpty()
        .withMessage("Le nom est obligatoire"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("L'email est invalide")
        .notEmpty()
        .withMessage("L'email est obligatoire"),

    body("phone")
        .trim()
        .matches(/^\+?[0-9 ]{7,20}$/)
        .withMessage("Le numéro de téléphone est invalide")
        .notEmpty()
        .withMessage("Le numéro de téléphone obligatoire"),

    body("company")
        .optional({ values: 'falsy' })
        .trim()
        .isLength({ min: 2 })
        .withMessage("L'entreprise doit contenir 2 caractères minimum"),

    body("subject")
        .isIn([
            "Demande d'information",
            "Demande de démo",
            "Partenariat",
            "Support technique",
            "Autre"
        ])
        .withMessage("Veuillez choisir le sujet parmi la liste proposée")
        .notEmpty()
        .withMessage("Le sujet est obligatoire"),

    body("message")
        .trim()
        .isLength({ min: 10 })
        .withMessage("Le message doit contenir 10 caractères minimum")
        .notEmpty()
        .withMessage("Le message est obligatoire"),
    
    body("cguAccepted")
        .equals("on")
        .withMessage("Vous devez accepter les CGU"),

    returnErrors
];

export { validateContact };