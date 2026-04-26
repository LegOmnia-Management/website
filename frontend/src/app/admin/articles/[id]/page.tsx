'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArticleForm } from '@/components/ArticleForm';
import { articlesApi } from '@/lib/api';
import { Article, CreateArticleInput } from '@/types';

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await articlesApi.getById(params.id);
        setArticle(response.data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch article');
      } finally {
        setIsFetching(false);
      }
    };

    fetchArticle();
  }, [params.id]);

  const handleSubmit = async (data: CreateArticleInput) => {
    setIsLoading(true);
    try {
      await articlesApi.update(params.id, data);
      router.push('/admin/articles');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update article');
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Éditer l'article</h1>
      {article && <ArticleForm initialData={article} onSubmit={handleSubmit} isLoading={isLoading} />}
    </div>
  );
}
