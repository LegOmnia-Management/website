import express from 'express';
import { createCategory, readCategories, updateCategory, deleteCategory, getCategoryBySlug } from '../controllers/category.controller.js';
import { validateCategory } from '../validators/category.validator.js';
import requireAdmin from '../middlewares/requireAdmin.js';

const router = express.Router();

router.get('/', readCategories);
router.get('/:slug', getCategoryBySlug);
router.post('/', requireAdmin, validateCategory, createCategory);
router.patch('/:id', requireAdmin, validateCategory, updateCategory);
router.delete('/:id', requireAdmin, deleteCategory);

export default router;