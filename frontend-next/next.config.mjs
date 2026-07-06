/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive l'optimisation d'images pour garder la compatibilité avec les imports SVG/PNG existants
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Permet d'importer SVG, PNG, JPG, MP4 comme URLs (comportement identique à Vite)
    config.module.rules.unshift({
      test: /\.(svg|png|jpg|jpeg|gif|webp|mp4|mov)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },
};

export default nextConfig;
