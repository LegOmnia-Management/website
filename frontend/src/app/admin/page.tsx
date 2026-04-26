'use client';

import { useEffect, useState } from 'react';
import { articlesApi, videosApi } from '@/lib/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    articlesCount: 0,
    videosCount: 0,
    totalViews: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const articlesRes = await articlesApi.getAll(1, 1);
        const videosRes = await videosApi.getAll(1, 1);

        setStats({
          articlesCount: articlesRes.data.total || 0,
          videosCount: videosRes.data.total || 0,
          totalViews: 0,
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon }: { title: string; value: number; icon: string }) => (
    <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-[var(--text-2)] text-sm font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold">{isLoading ? '-' : value}</p>
    </div>
  );

  return (
    <div>
      <h1 className="mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard title="Articles publiés" value={stats.articlesCount} icon="📄" />
        <StatCard title="Vidéos publiées" value={stats.videosCount} icon="🎥" />
        <StatCard title="Vues totales" value={stats.totalViews} icon="👁️" />
      </div>

      {/* Quick Actions */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-6">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/admin/articles/new"
            className="p-4 bg-vi/10 border border-vi rounded-lg hover:bg-vi/20 transition text-center"
          >
            <p className="font-semibold text-vi mb-2">+ Nouvel article</p>
            <p className="text-sm text-[var(--text-2)]">Créer et publier un nouvel article avec l'éditeur markdown</p>
          </a>
          <a
            href="/admin/videos/new"
            className="p-4 bg-gold/10 border border-gold rounded-lg hover:bg-gold/20 transition text-center"
          >
            <p className="font-semibold text-gold mb-2">+ Nouvelle vidéo</p>
            <p className="text-sm text-[var(--text-2)]">Ajouter une nouvelle vidéo avec thumbnail et description</p>
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-12 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-6">Activité récente</h2>
        <p className="text-[var(--text-2)]">Aucune activité récente pour le moment.</p>
      </div>
    </div>
  );
}
