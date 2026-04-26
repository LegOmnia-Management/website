'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { videosApi } from '@/lib/api';
import { Video } from '@/types';

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const response = await videosApi.getAll(page, 10);
        setVideos(response.data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch videos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [page]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return;

    try {
      await videosApi.delete(id);
      setVideos(videos.filter((v) => v.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete video');
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Vidéos</h1>
        <Link href="/admin/videos/new" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + Nouvelle vidéo
        </Link>
      </div>

      {error && <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200 mb-4">{error}</div>}

      <div className="grid gap-4">
        {videos.map((video) => (
          <div key={video.id} className="p-4 border border-var(--border) rounded-lg hover:bg-var(--bg-card-2) transition">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <p className="text-sm text-var(--text-2)">{video.description}</p>
                <div className="mt-2 flex gap-2">
                  <span className="text-xs px-2 py-1 bg-var(--bg-card-2) rounded">
                    {video.status === 'published' ? 'Publié' : 'Brouillon'}
                  </span>
                  <span className="text-xs px-2 py-1 bg-var(--bg-card-2) rounded">{video.category}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/videos/${video.id}`} className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Éditer
                </Link>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
