import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://legomnia.com';

const ROUTES = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/produits/omnia', priority: '0.9', changefreq: 'monthly' },
    { path: '/produits/transformation-digitale/presentation', priority: '0.8', changefreq: 'monthly' },
    { path: '/produits/transformation-digitale/geode', priority: '0.8', changefreq: 'monthly' },
    { path: '/produits/transformation-digitale/omniscan', priority: '0.8', changefreq: 'monthly' },
    { path: '/produits/use-cases', priority: '0.9', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/faq', priority: '0.6', changefreq: 'monthly' },
    { path: '/juridictions', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/articles', priority: '0.7', changefreq: 'weekly' },
    { path: '/blog/ressources', priority: '0.7', changefreq: 'weekly' },
    { path: '/blog/webinaires', priority: '0.7', changefreq: 'weekly' },
    { path: '/cgu', priority: '0.3', changefreq: 'yearly' },
    { path: '/confidentialite', priority: '0.3', changefreq: 'yearly' },
    { path: '/cookies', priority: '0.3', changefreq: 'yearly' },
    { path: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(({ path: p, priority, changefreq }) => `  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const distDir = path.resolve(__dirname, 'dist');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Generated sitemap.xml');
