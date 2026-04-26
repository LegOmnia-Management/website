'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { Video, CreateVideoInput } from '@/types';

const createVideoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  slug: z.string().min(1, 'Slug is required').max(100).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  description: z.string().min(1, 'Description is required').max(1000),
  video_url: z.string().url('Invalid video URL'),
  thumbnail_url: z.string().url('Invalid thumbnail URL').optional().or(z.literal('')),
  author: z.string().min(1, 'Author is required').max(100),
  category: z.string().min(1, 'Category is required').max(50),
  tags: z.array(z.string().max(50)).max(10).default([]),
  status: z.enum(['draft', 'published']).default('draft'),
  duration_seconds: z.number().int().positive().optional(),
});

interface VideoFormProps {
  initialData?: Video;
  onSubmit: (data: CreateVideoInput) => Promise<void>;
  isLoading?: boolean;
}

export function VideoForm({ initialData, onSubmit, isLoading = false }: VideoFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.id.replace('video_', '').split('_').slice(0, 2).join('_') || '',
    description: initialData?.description || '',
    video_url: initialData?.video_url || '',
    thumbnail_url: initialData?.thumbnail_url || '',
    author: initialData?.id || '',
    category: initialData?.category || '',
    tags: initialData?.tags?.join(', ') || '',
    status: (initialData?.status || 'draft') as const,
    duration_seconds: initialData?.duration_seconds || 0,
  });

  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'duration_seconds' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const validated = createVideoSchema.parse({
        ...formData,
        tags: formData.tags
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
        thumbnail_url: formData.thumbnail_url || undefined,
        duration_seconds: formData.duration_seconds || undefined,
      });

      await onSubmit(validated);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Video title"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Slug *</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="video-slug"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Video description"
          rows={4}
          className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Video URL *</label>
          <input
            type="url"
            name="video_url"
            value={formData.video_url}
            onChange={handleChange}
            placeholder="https://example.com/video.mp4"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Thumbnail URL</label>
          <input
            type="url"
            name="thumbnail_url"
            value={formData.thumbnail_url}
            onChange={handleChange}
            placeholder="https://example.com/thumbnail.jpg"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author name"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="tag1, tag2, tag3"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Duration (seconds)</label>
          <input
            type="number"
            name="duration_seconds"
            value={formData.duration_seconds}
            onChange={handleChange}
            placeholder="300"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isLoading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
