'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { articlesApi } from '@/lib/api';
import { Article } from '@/types';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await articlesApi.getAll(1, 50);
        setArticles(response.data.data || []);
      } catch (err: any) {
        setError(err.message || 'Erreur lors du chargement');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;

    try {
      await articlesApi.delete(id);
      setArticles((prev) => prev.filter((a) => a.id !== id));
    } catch (err: any) {
      setError(err.message || 'Erreur lors de la suppression');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1>Articles</h1>
        <Link
          href="/admin/articles/new"
          className="px-6 py-2 bg-vi text-white rounded-lg hover:bg-vi-light transition font-semibold"
        >
          + Nouvel article
        </Link>
      </div>

      {error && <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200 mb-6">{error}</div>}

      {isLoading ? (
        <p className="text-center text-[var(--text-2)]">Chargement...</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-[var(--text-2)]">Aucun article pour le moment.</p>
      ) : (
        <div className="overflow-x-auto bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
          <table className="w-full">
            <thead className="border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Titre</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Auteur</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Vues</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-[var(--bg-card-2)] transition">
                  <td className="px-6 py-4 font-medium">{article.title}</td>
                  <td className="px-6 py-4 text-[var(--text-2)]">{article.author}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        article.status === 'published'
                          ? 'bg-green-900/20 text-green-300'
                          : 'bg-amber-900/20 text-amber-300'
                      }`}
                    >
                      {article.status === 'published' ? 'Publié' : 'Brouillon'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[var(--text-2)]">{article.views_count}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <Link href={`/admin/articles/${article.id}`} className="text-vi hover:text-vi-light text-sm">
                      Éditer
                    </Link>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
