export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featured_image_url?: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  updated_at: string;
  created_at: string;
  reading_time_minutes: number;
  views_count: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  video_url: string;
  thumbnail_url?: string;
  duration_seconds: number;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  updated_at: string;
  created_at: string;
  views_count: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface CreateArticleInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  featured_image_url?: string;
}

export interface UpdateArticleInput extends Partial<CreateArticleInput> {
  id: string;
}

export interface CreateVideoInput {
  title: string;
  description: string;
  video_url: string;
  thumbnail_url?: string;
  duration_seconds: number;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
}

export interface UpdateVideoInput extends Partial<CreateVideoInput> {
  id: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}
