import axios, { AxiosError } from 'axios';
import {
  ApiResponse,
  PaginatedResponse,
  Article,
  CreateArticleInput,
  UpdateArticleInput,
  Video,
  CreateVideoInput,
  UpdateVideoInput,
} from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Articles
export const articlesApi = {
  getAll: (page = 1, limit = 10) =>
    api.get<ApiResponse<PaginatedResponse<Article>>>(`/articles?page=${page}&limit=${limit}`),
  getById: (id: string) => api.get<ApiResponse<Article>>(`/articles/${id}`),
  getBySlug: (slug: string) => api.get<ApiResponse<Article>>(`/articles/slug/${slug}`),
  create: (data: CreateArticleInput) =>
    api.post<ApiResponse<Article>>('/articles', data),
  update: (id: string, data: UpdateArticleInput) =>
    api.put<ApiResponse<Article>>(`/articles/${id}`, data),
  delete: (id: string) => api.delete<ApiResponse<null>>(`/articles/${id}`),
};

// Videos
export const videosApi = {
  getAll: (page = 1, limit = 10) =>
    api.get<ApiResponse<PaginatedResponse<Video>>>(`/videos?page=${page}&limit=${limit}`),
  getById: (id: string) => api.get<ApiResponse<Video>>(`/videos/${id}`),
  create: (data: CreateVideoInput) => api.post<ApiResponse<Video>>('/videos', data),
  update: (id: string, data: UpdateVideoInput) =>
    api.put<ApiResponse<Video>>(`/videos/${id}`, data),
  delete: (id: string) => api.delete<ApiResponse<null>>(`/videos/${id}`),
};

// File upload
export const uploadFile = (file: File, bucket: string, path: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('bucket', bucket);
  formData.append('path', path);
  return api.post<ApiResponse<{ url: string }>>('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
