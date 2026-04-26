export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  featured_image_url?: string;
  reading_time_minutes: number;
  views_count: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: string;
  title: string;
  slug: string;
  description: string;
  video_url: string;
  thumbnail_url?: string;
  author: string;
  category: string;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
