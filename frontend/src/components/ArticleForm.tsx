'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { Article, CreateArticleInput } from '@/types';
import MarkdownEditor from './MarkdownEditor';

const createArticleSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  slug: z.string().min(1, 'Slug is required').max(100).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  excerpt: z.string().min(1, 'Excerpt is required').max(500),
  content: z.string().min(1, 'Content is required').max(100000),
  author: z.string().min(1, 'Author is required').max(100),
  category: z.string().min(1, 'Category is required').max(50),
  tags: z.array(z.string().max(50)).max(10).default([]),
  status: z.enum(['draft', 'published']).default('draft'),
  featured_image_url: z.string().url().optional().or(z.literal('')),
});

interface ArticleFormProps {
  initialData?: Article;
  onSubmit: (data: CreateArticleInput) => Promise<void>;
  isLoading?: boolean;
}

export function ArticleForm({ initialData, onSubmit, isLoading = false }: ArticleFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    author: initialData?.author || '',
    category: initialData?.category || '',
    tags: initialData?.tags?.join(', ') || '',
    status: initialData?.status || 'draft' as const,
    featured_image_url: initialData?.featured_image_url || '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const validated = createArticleSchema.parse({
        ...formData,
        tags: formData.tags
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
        featured_image_url: formData.featured_image_url || undefined,
      });

      await onSubmit(validated);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Titre *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre de l'article"
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
            placeholder="article-slug"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Auteur</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Nom de l'auteur"
          className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Catégorie</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Catégorie"
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Statut</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
          >
            <option value="draft">Brouillon</option>
            <option value="published">Publié</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Excerpt (résumé)</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          placeholder="Résumé court de l'article"
          rows={3}
          className="w-full px-4 py-2 bg-var(--bg-card-2) border border-var(--border) rounded-lg focus:outline-none focus:border-var(--vi)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tags (séparés par des virgules)</label>
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
        <label className="block text-sm font-medium mb-2">Contenu (Markdown) *</label>
        <MarkdownEditor value={formData.content} onChange={handleContentChange} height={600} />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-vi text-white rounded-lg hover:bg-vi-light disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </div>
    </form>
  );
}
