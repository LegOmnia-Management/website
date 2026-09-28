import express from 'express';
import { createArticle, readArticles, updateArticle, deleteArticle, getArticleBySlug } from '../controllers/article.controller.js';
import { validateArticle } from '../validators/article.validator.js';
import requireAdmin from '../middlewares/requireAdmin.js';

const router = express.Router();

router.get('/', readArticles);
router.get('/:slug', getArticleBySlug);
router.post('/', requireAdmin, validateArticle, createArticle);
router.patch('/:id', requireAdmin, validateArticle, updateArticle);
router.delete('/', requireAdmin, deleteArticle);

export default router;