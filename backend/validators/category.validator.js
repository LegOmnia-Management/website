import { body } from "express-validator";
import { returnErrors } from "./index.js";

const validateCategory = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Le nom est obligatoire"),

    body("color")
        .matches(/^#[0-9A-Fa-f]{6}$/)
        .withMessage("La couleur doit être un code hexadécimal valide (#rrggbb)"),

    returnErrors
];

export { validateCategory };