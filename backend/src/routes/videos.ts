import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { query } from '../lib/db.js';
import { Video, PaginatedResponse } from '../types/index.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

const ALLOWED_COLUMNS = [
  'title',
  'slug',
  'description',
  'video_url',
  'thumbnail_url',
  'author',
  'category',
  'tags',
  'status',
  'duration_seconds',
];

const createVideoSchema = z.object({
  title: z.string().min(1).max(255),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  description: z.string().min(1).max(1000),
  video_url: z.string().url(),
  thumbnail_url: z.string().url().optional(),
  author: z.string().min(1).max(100),
  category: z.string().min(1).max(50),
  tags: z.array(z.string().max(50)).max(10).default([]),
  status: z.enum(['draft', 'published']).default('draft'),
  duration_seconds: z.number().int().positive().optional(),
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const countResult = await query("SELECT COUNT(*) FROM videos WHERE status = 'published'");
    const total = parseInt(countResult.rows[0].count);

    const result = await query(
      "SELECT * FROM videos WHERE status = 'published' ORDER BY published_at DESC LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    const response: PaginatedResponse<Video> = {
      data: result.rows,
      total,
      page,
      limit,
    };

    res.json({ success: true, data: response });
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch videos' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('SELECT * FROM videos WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Video not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching video:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch video' });
  }
});

router.post('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const validatedData = createVideoSchema.parse(req.body);

    const id = `video_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const result = await query(
      `INSERT INTO videos (
        id, title, slug, description, video_url, thumbnail_url, author, 
        category, status, published_at, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())
      RETURNING *`,
      [
        id,
        validatedData.title,
        validatedData.slug,
        validatedData.description,
        validatedData.video_url,
        validatedData.thumbnail_url || null,
        validatedData.author,
        validatedData.category,
        validatedData.status,
        validatedData.status === 'published' ? new Date().toISOString() : null,
      ]
    );

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error creating video:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, error: error.errors });
    }
    res.status(500).json({ success: false, error: 'Failed to create video' });
  }
});

router.put('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    Object.entries(data).forEach(([key, value]) => {
      if (!ALLOWED_COLUMNS.includes(key) || value === undefined) {
        return;
      }
      updates.push(`${key} = $${paramIndex++}`);
      values.push(value);
    });

    updates.push(`updated_at = NOW()`);
    values.push(id);

    if (updates.length === 1) {
      return res.status(400).json({ success: false, error: 'No fields to update' });
    }

    const result = await query(
      `UPDATE videos SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Video not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating video:', error);
    res.status(500).json({ success: false, error: 'Failed to update video' });
  }
});

router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await query('DELETE FROM videos WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Video not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error deleting video:', error);
    res.status(500).json({ success: false, error: 'Failed to delete video' });
  }
});

export default router;
