'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { VideoForm } from '@/components/VideoForm';
import { videosApi } from '@/lib/api';
import { Video, CreateVideoInput } from '@/types';

export default function EditVideoPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [video, setVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await videosApi.getById(params.id);
        setVideo(response.data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch video');
      } finally {
        setIsFetching(false);
      }
    };

    fetchVideo();
  }, [params.id]);

  const handleSubmit = async (data: CreateVideoInput) => {
    setIsLoading(true);
    try {
      await videosApi.update(params.id, data);
      router.push('/admin/videos');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update video');
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
      <h1 className="text-3xl font-bold mb-8">Edit Video</h1>
      {video && <VideoForm initialData={video} onSubmit={handleSubmit} isLoading={isLoading} />}
    </div>
  );
}
