'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { VideoForm } from '@/components/VideoForm';
import { videosApi } from '@/lib/api';
import { CreateVideoInput } from '@/types';

export default function NewVideoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (data: CreateVideoInput) => {
    setIsLoading(true);
    setError('');
    try {
      await videosApi.create(data);
      router.push('/admin/videos');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create video');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200 mb-4">{error}</div>}
      <h1 className="text-3xl font-bold mb-8">Create New Video</h1>
      <VideoForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
