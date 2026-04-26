'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ProtectedRoute } from '@/middleware/authGuard';
import { useAuthStore } from '@/store/authStore';

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('auth_token');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-[var(--bg-card)] border-r border-[var(--border)] overflow-y-auto">
        <div className="p-6 border-b border-[var(--border)]">
          <Link href="/admin" className="text-xl font-bold text-vi">
            legOmnia Admin
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            href="/admin"
            className="block px-4 py-2 rounded-lg hover:bg-[var(--bg-card-2)] transition text-[var(--text-1)]"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/articles"
            className="block px-4 py-2 rounded-lg hover:bg-[var(--bg-card-2)] transition text-[var(--text-1)]"
          >
            Articles
          </Link>
          <Link
            href="/admin/articles/new"
            className="block px-4 py-2 rounded-lg hover:bg-[var(--bg-card-2)] transition text-vi font-semibold"
          >
            + Nouvel article
          </Link>
          <Link
            href="/admin/videos"
            className="block px-4 py-2 rounded-lg hover:bg-[var(--bg-card-2)] transition text-[var(--text-1)]"
          >
            Vidéos
          </Link>
          <Link
            href="/admin/videos/new"
            className="block px-4 py-2 rounded-lg hover:bg-[var(--bg-card-2)] transition text-vi font-semibold"
          >
            + Nouvelle vidéo
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-[var(--border)]">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-900/20 text-red-400 rounded-lg hover:bg-red-900/30 transition text-sm"
          >
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </ProtectedRoute>
  );
}
