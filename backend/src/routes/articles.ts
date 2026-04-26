import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { query } from '../lib/db.js';
import { Article, PaginatedResponse } from '../types/index.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

const createArticleSchema = z.object({
  title: z.string().min(1).max(255),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  excerpt: z.string().min(1).max(500),
  content: z.string().min(1).max(100000),
  author: z.string().min(1).max(100),
  category: z.string().min(1).max(50),
  tags: z.array(z.string().max(50)).max(10).default([]),
  status: z.enum(['draft', 'published']).default('draft'),
  featured_image_url: z.string().url().optional(),
});

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
    const category = req.query.category as string;

    const conditions = ["status = 'published'"];
    const params: any[] = [];

    if (category) {
      conditions.push(`category = $${conditions.length}`);
      params.push(category);
    }

    const whereClause = conditions.join(' AND ');

    const countResult = await query(
      `SELECT COUNT(*) FROM articles WHERE ${whereClause}`,
      params
    );
    const total = parseInt(countResult.rows[0].count);

    const result = await query(
      `SELECT * FROM articles WHERE ${whereClause} ORDER BY published_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, limit, offset]
    );

    const response: PaginatedResponse<Article> = {
      data: result.rows,
      total,
      page,
      limit,
    };

    res.json({ success: true, data: response });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch articles' });
  }
});

router.get('/slug/:slug', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const result = await query(
      "SELECT * FROM articles WHERE slug = $1 AND status = 'published'",
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }

    const article = result.rows[0];

    await query('UPDATE articles SET views_count = views_count + 1 WHERE id = $1', [
      article.id,
    ]);

    res.json({ success: true, data: article });
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch article' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('SELECT * FROM articles WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch article' });
  }
});

router.post('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const validatedData = createArticleSchema.parse(req.body);

    const readingTime = calculateReadingTime(validatedData.content);
    const id = `article_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const result = await query(
      `INSERT INTO articles (
        id, title, slug, excerpt, content, author, category, tags, status, 
        featured_image_url, reading_time_minutes, published_at, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW(), NOW())
      RETURNING *`,
      [
        id,
        validatedData.title,
        validatedData.slug,
        validatedData.excerpt,
        validatedData.content,
        validatedData.author,
        validatedData.category,
        JSON.stringify(validatedData.tags),
        validatedData.status,
        validatedData.featured_image_url || null,
        readingTime,
        validatedData.status === 'published' ? new Date().toISOString() : null,
      ]
    );

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error creating article:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, error: error.errors });
    }
    res.status(500).json({ success: false, error: 'Failed to create article' });
  }
});

router.put('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (data.title !== undefined) {
      updates.push(`title = $${paramIndex++}`);
      values.push(data.title);
    }
    if (data.slug !== undefined) {
      updates.push(`slug = $${paramIndex++}`);
      values.push(data.slug);
    }
    if (data.content !== undefined) {
      updates.push(`content = $${paramIndex++}`);
      values.push(data.content);
      const readingTime = calculateReadingTime(data.content);
      updates.push(`reading_time_minutes = $${paramIndex++}`);
      values.push(readingTime);
    }
    if (data.status !== undefined) {
      updates.push(`status = $${paramIndex++}`);
      values.push(data.status);
      if (data.status === 'published') {
        updates.push(`published_at = $${paramIndex++}`);
        values.push(new Date().toISOString());
      }
    }

    updates.push(`updated_at = NOW()`);
    values.push(id);

    if (updates.length === 1) {
      return res.status(400).json({ success: false, error: 'No fields to update' });
    }

    const result = await query(
      `UPDATE articles SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ success: false, error: 'Failed to update article' });
  }
});

router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('DELETE FROM articles WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ success: false, error: 'Failed to delete article' });
  }
});

export default router;
