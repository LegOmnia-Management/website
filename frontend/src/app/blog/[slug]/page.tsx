'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { articlesApi } from '@/lib/api';
import { Article } from '@/types';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await articlesApi.getBySlug(params.slug);
        setArticle(response.data.data);

        // Fetch related articles
        const allResponse = await articlesApi.getAll(1, 50);
        const related = (allResponse.data.data || [])
          .filter(
            (a) =>
              a.id !== response.data.data.id &&
              (a.category === response.data.data.category || a.tags.some((tag) => response.data.data.tags.includes(tag)))
          )
          .slice(0, 3);
        setRelatedArticles(related);
      } catch (err: any) {
        setError(err.message || 'Article non trouvé');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [params.slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen pt-20 px-6 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto py-12 text-center text-[var(--text-2)]">
          Chargement...
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="min-h-screen pt-20 px-6 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto py-12 text-center">
          <h1 className="mb-4">Article non trouvé</h1>
          <p className="text-[var(--text-2)] mb-8">{error}</p>
          <Link href="/blog" className="text-vi hover:text-vi-light font-semibold">
            ← Retour au blog
          </Link>
        </div>
      </main>
    );
  }

  const publishDate = article.published_at ? new Date(article.published_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : '';

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full h-[var(--nav-h)] bg-[var(--nav-bg)] border-b border-[var(--border)] z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-vi">
            legOmnia
          </Link>
          <div className="flex gap-8">
            <Link href="/blog" className="hover:text-vi transition">
              Blog
            </Link>
            <Link href="/admin" className="hover:text-vi transition">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Hero */}
      <section className="pt-[calc(var(--nav-h)+60px)] pb-12 px-6 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          {article.featured_image_url && (
            <img
              src={article.featured_image_url}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          <div className="mb-6 flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-vi/10 text-vi rounded-full text-sm font-semibold">
              {article.category}
            </span>
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[var(--bg-card-2)] text-[var(--text-2)] rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4">{article.title}</h1>

          <div className="flex items-center gap-6 text-[var(--text-2)] text-sm mb-8">
            <span>{article.author || 'legOmnia'}</span>
            <span>•</span>
            <span>{publishDate}</span>
            <span>•</span>
            <span>{article.reading_time_minutes} min de lecture</span>
            <span>•</span>
            <span>{article.views_count} vues</span>
          </div>

          {article.excerpt && (
            <p className="text-xl text-[var(--text-2)] italic font-light">"{article.excerpt}"</p>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-6 mb-3" {...props} />,
              h3: ({ node, ...props }) => <h4 className="text-xl font-bold mt-4 mb-2" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="pl-6 border-l-4 border-vi my-6 italic text-[var(--text-2)]"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }: any) =>
                inline ? (
                  <code className="bg-[var(--bg-card-2)] px-2 py-1 rounded text-sm" {...props} />
                ) : (
                  <code className="block bg-[var(--bg-card-2)] p-4 rounded-lg overflow-x-auto my-4" {...props} />
                ),
              pre: ({ node, ...props }) => <pre className="my-4" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              a: ({ node, href, ...props }) => (
                <a href={href} className="text-vi hover:text-vi-light underline" {...props} />
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </section>

      {/* Author Card */}
      <section className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg flex gap-6">
            <div className="w-24 h-24 rounded-full bg-vi/20 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">✍️</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">À propos de l'auteur</h3>
              <p className="text-[var(--text-2)] mb-4">{article.author || 'L\'équipe legOmnia'}</p>
              <p className="text-sm text-[var(--text-3)]">
                Découvrez plus d'articles et d'insights du droit africain sur notre blog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 px-6 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <article
                  key={related.id}
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:shadow-lg transition"
                >
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-vi uppercase">{related.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{related.title}</h3>
                  <p className="text-[var(--text-2)] text-sm mb-4 line-clamp-3">{related.excerpt}</p>
                  <Link href={`/blog/${related.slug}`} className="text-vi hover:text-vi-light font-semibold text-sm">
                    Lire l'article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Lire plus d'articles</h2>
          <p className="text-[var(--text-2)] mb-8">
            Découvrez des insights sur l'actualité juridique de l'Afrique francophone
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-vi text-white rounded-lg hover:bg-vi-light transition font-semibold"
          >
            Voir tous les articles
          </Link>
        </div>
      </section>
    </main>
  );
}
