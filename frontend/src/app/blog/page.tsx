'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { articlesApi } from '@/lib/api';
import { Article } from '@/types';

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Set theme from document
    const htmlTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(htmlTheme);

    const fetchArticles = async () => {
      try {
        const response = await articlesApi.getAll(1, 50);
        setArticles(response.data.data || []);
      } catch (err: any) {
        // API not available, show empty state
        console.log('API not available:', err.message);
        setArticles([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();

    // Reveal animation on scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(articles.map((a) => a.category).filter(Boolean)));
  const filteredArticles = selectedCategory
    ? articles.filter((a) => a.category === selectedCategory)
    : articles;

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text-1)', minHeight: '100vh' }}>
      {/* Header avec lien retour */}
      <div style={{ paddingTop: 'var(--nav-h)', paddingBottom: '48px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Link href="/#blog-preview" style={{ color: 'var(--vi)', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
            ← Retour au site
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div className="badge pulse" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--vi)', borderRadius: '50%', display: 'inline-block' }}></span>
            Blog · Actualité juridique
          </div>
          <h2 style={{ marginBottom: '24px' }}>Actualités et insights juridiques</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-2)', maxWidth: '600px', margin: '0 auto' }}>
            Découvrez les derniers articles sur le droit africain, l'IA juridique, la digitalisation et l'innovation légale.
          </p>
        </div>
      </section>

      {/* Filters */}
      {categories.length > 0 && (
        <section style={{ padding: '0 20px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setSelectedCategory('')}
              style={{
                padding: '8px 16px',
                borderRadius: '14px',
                fontWeight: '600',
                fontSize: '14px',
                border: selectedCategory === '' ? 'none' : '1px solid var(--border)',
                background: selectedCategory === '' ? 'var(--vi)' : 'transparent',
                color: selectedCategory === '' ? '#fff' : 'var(--text-1)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              Tous les articles
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '14px',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: selectedCategory === cat ? 'none' : '1px solid var(--border)',
                  background: selectedCategory === cat ? 'var(--vi)' : 'transparent',
                  color: selectedCategory === cat ? '#fff' : 'var(--text-1)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {isLoading && (
            <div style={{ textAlign: 'center', padding: '48px 20px' }}>
              <p style={{ color: 'var(--text-2)', marginBottom: '16px' }}>Chargement des articles...</p>
              <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '4px solid var(--vi)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            </div>
          )}

          {!isLoading && filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 20px' }}>
              <p style={{ color: 'var(--text-2)', fontSize: '18px' }}>
                {selectedCategory ? 'Aucun article dans cette catégorie.' : 'Aucun article disponible pour le moment.'}
              </p>
            </div>
          )}

          {filteredArticles.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {filteredArticles.map((article, idx) => {
                const publishDate = article.published_at
                  ? new Date(article.published_at).toLocaleDateString('fr-FR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })
                  : '';

                return (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div
                      className="bento-card reveal"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div style={{ fontSize: '12px', color: 'var(--text-2)', marginBottom: '12px' }}>
                        <span style={{ background: 'var(--vi)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '600' }}>
                          {article.category}
                        </span>
                        <span style={{ marginLeft: '8px' }}>{publishDate}</span>
                      </div>
                      <h4 style={{ marginBottom: '12px', fontSize: '20px', fontWeight: '600' }}>{article.title}</h4>
                      <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.6' }}>{article.excerpt}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-3)', marginBottom: '12px' }}>
                        <span>{article.author || 'legOmnia'}</span>
                        <span>{article.reading_time_minutes} min</span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '600', display: 'inline-flex', gap: '6px', color: 'var(--vi)' }}>
                        Lire l'article →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
