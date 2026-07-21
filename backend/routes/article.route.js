import express from 'express';
import { createArticle, readArticles, updateArticle, deleteArticle, getArticleBySlug } from '../controllers/article.controller.js';
import { validateArticle } from '../validators/article.validator.js';

const router = express.Router();

router.get('/', readArticles);
router.get('/:slug', getArticleBySlug);
router.post('/', validateArticle, createArticle);
router.patch('/:id', validateArticle, updateArticle);
router.delete('/', deleteArticle);

export default router;