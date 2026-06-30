import { body } from 'express-validator';
import { returnErrors } from './index.js';

const validateArticle = [

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Le titre est obligatoire'),

    body('illustration.url')
        .trim()
        .notEmpty()
        .withMessage("L'URL de l'illustration est obligatoire"),

    body('illustration.alt')
        .trim()
        .notEmpty()
        .withMessage("L'alt de l'illustration est obligatoire"),

    body('categories')
        .isArray({ min: 1 })
        .withMessage('Au moins une catégorie est obligatoire'),
    
    body('categories.*')
        .isMongoId()
        .withMessage('Les catégories doivent être des IDs valides'),

    body('intro')
        .trim()
        .notEmpty()
        .withMessage("L'introduction est obligatoire"),
    
    body('author')
        .trim()
        .notEmpty()
        .withMessage("L'auteur est obligatoire"),
    
    body('publishedAt')
        .optional()
        .isISO8601()
        .withMessage('La date doit être au format ISO 8601'),
    
    body('readingTime')
        .notEmpty()
        .withMessage('La durée de lecture est obligatoire')
        .isInt({ min: 1 })
        .withMessage('La durée de lecture doit être un entier supérieur à 0'),
    
      body('content')
        .notEmpty()
        .withMessage('Le contenu est obligatoire'),

    returnErrors
];

export { validateArticle };