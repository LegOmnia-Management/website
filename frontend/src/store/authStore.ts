import { create } from 'zustand';
import { User, LoginInput } from '@/types';

interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const { token, user } = await response.json();
    set({ isAuthenticated: true, token, user });
  },

  logout: () => {
    set({ isAuthenticated: false, user: null, token: null });
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: user !== null });
  },

  setToken: (token: string | null) => {
    set({ token });
  },

  checkSession: async () => {
    try {
      const response = await fetch('/api/auth/session', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
        },
      });

      if (response.ok) {
        const { user } = await response.json();
        set({ isAuthenticated: true, user });
      } else {
        set({ isAuthenticated: false, user: null, token: null });
      }
    } catch (error) {
      set({ isAuthenticated: false, user: null, token: null });
    }
  },
}));
