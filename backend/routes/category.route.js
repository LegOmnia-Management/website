import express from 'express';
import { createCategory, readCategories, updateCategory, deleteCategory, getCategoryBySlug } from '../controllers/category.controller.js';
import { validateCategory } from '../validators/category.validator.js';

const router = express.Router();

router.get('/', readCategories);
router.get('/:slug', getCategoryBySlug);;
router.post('/', validateCategory, createCategory);
router.patch('/:id', validateCategory, updateCategory);
router.delete('/:id', deleteCategory);

export default router;