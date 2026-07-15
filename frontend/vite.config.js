import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: isSsrBuild
        ? {
              ssr: true,
              outDir: 'dist-server',
              rollupOptions: {
                  input: 'src/entry-server.jsx',
              },
          }
        : {
              outDir: 'dist',
          },
}));

