import { body } from "express-validator";
import { returnErrors } from "./index.js";
import { WAITLIST_PROFILES, WAITLIST_PRODUCTS } from "../models/Waitlist.js";

const validateWaitlist = [
    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("Le prénom est obligatoire")
        .bail()
        .isLength({ min: 2, max: 50 })
        .withMessage("Le prénom doit contenir entre 2 et 50 caractères"),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Le nom est obligatoire")
        .bail()
        .isLength({ min: 2, max: 50 })
        .withMessage("Le nom doit contenir entre 2 et 50 caractères"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("L'email est obligatoire")
        .bail()
        .isEmail()
        .withMessage("L'email est invalide"),

    body("organization")
        .optional({ values: 'falsy' })
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("L'organisation doit contenir entre 2 et 100 caractères"),

    body("profile")
        .isIn(WAITLIST_PROFILES)
        .withMessage("Veuillez choisir votre profil parmi la liste proposée"),

    body("country")
        .trim()
        .notEmpty()
        .withMessage("Le pays est obligatoire")
        .bail()
        .isLength({ max: 60 })
        .withMessage("Le pays est invalide"),

    body("products")
        .optional()
        .customSanitizer(value => [].concat(value).filter(Boolean))
        .custom(value => value.every(p => WAITLIST_PRODUCTS.includes(p)))
        .withMessage("Produit inconnu"),

    body("consentAccepted")
        .equals("on")
        .withMessage("Vous devez accepter la politique de confidentialité"),

    returnErrors
];

export { validateWaitlist };
