import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import pool from './lib/db.js';
import articlesRouter from './routes/articles.js';
import videosRouter from './routes/videos.js';
import { errorHandler } from './middleware/errorHandler.js';
import { authMiddleware } from './middleware/auth.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'],
  })
);

app.use(express.json({ limit: '1mb' }));

app.get('/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'ok',
      database: 'connected',
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    res.status(503).json({
      status: 'error',
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

app.use('/api/articles', articlesRouter);
app.use('/api/videos', videosRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Database: ${process.env.DB_HOST}`);
});
