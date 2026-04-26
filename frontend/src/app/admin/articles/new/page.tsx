'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { articlesApi } from '@/lib/api';
import { ArticleForm } from '@/components/ArticleForm';

export default function NewArticlePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await articlesApi.create(data);
      router.push('/admin/articles');
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Erreur lors de la création');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="mb-8">Créer un nouvel article</h1>
      <div className="max-w-4xl">
        <ArticleForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
