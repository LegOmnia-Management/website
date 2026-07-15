import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROUTES = [
    '/',
    '/produits/omnia',
    '/produits/transformation-digitale/presentation',
    '/produits/transformation-digitale/geode',
    '/produits/transformation-digitale/omniscan',
    '/produits/use-cases',
    '/cgu',
    '/confidentialite',
    '/cookies',
    '/contact',
    '/faq',
    '/juridictions',
    '/mentions-legales',
    '/blog/articles',
    '/blog/ressources',
    '/blog/webinaires',
];

// Tags rendered by react-helmet-async / React 19 inside the body that belong in <head>
const HEAD_TAG_RE = /<(?:title|meta|link(?!\s+rel="stylesheet"))([^>]*)(?:\/>|>(?:.*?)<\/(?:title|meta|link)>)/gs;

function extractHeadTags(html) {
    const tags = [];
    const cleaned = html.replace(HEAD_TAG_RE, (match) => {
        tags.push(match);
        return '';
    });
    return { cleaned, tags };
}

async function prerender() {
    const distDir = path.resolve(__dirname, 'dist');
    const serverDir = path.resolve(__dirname, 'dist-server');

    const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

    // Strip default title and meta description from template — pages supply their own via Helmet
    const baseTemplate = template
        .replace(/<title>[^<]*<\/title>/, '')
        .replace(/<meta name="description"[^>]*\/?>/, '');

    const { render } = await import(path.join(serverDir, 'entry-server.js'));

    for (const route of ROUTES) {
        const { html: appHtml } = render(route);

        // Extract head-level tags React/Helmet rendered inside the app body
        const { cleaned: bodyHtml, tags: headTags } = extractHeadTags(appHtml);

        const injectedHead = headTags.join('\n        ');

        let pageHtml = baseTemplate
            .replace('<!--app-html-->', bodyHtml)
            .replace('</head>', `        ${injectedHead}\n    </head>`);

        const filePath = route === '/'
            ? path.join(distDir, 'index.html')
            : path.join(distDir, route.slice(1), 'index.html');

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, pageHtml);
        console.log(`Prerendered: ${route} → ${path.relative(distDir, filePath)}`);
    }

    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log('\nPrerendering complete.');
}

prerender().catch((err) => {
    console.error('Prerender failed:', err);
    process.exit(1);
});
