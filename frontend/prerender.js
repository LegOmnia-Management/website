/**
 * prerender.js
 *
 * Génère une version HTML statique de chaque route (contenu + meta tags
 * injectés par react-helmet-async) à partir du build Vite déjà buildé.
 *
 * Usage (projet en "type": "module") :
 *   1. npm run build          (génère le dossier dist/)
 *   2. node prerender.js      (lance ce script, ou npm run build:prerender)
 *
 * Ce script :
 *   - démarre un petit serveur statique local qui sert dist/
 *   - ouvre chaque route avec Puppeteer (Chrome headless)
 *   - attend que React + Helmet aient fini de rendre
 *   - sauvegarde le HTML final dans dist/<route>/index.html
 *
 * Express n'a ensuite qu'à servir dist/ tel quel : pour une requête sur
 * /contact, il trouvera dist/contact/index.html au lieu de retomber sur
 * le dist/index.html vide (SPA fallback).
 */

import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DIST_DIR = path.resolve(__dirname, 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const PRISTINE_INDEX = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

// Routes statiques connues à l'avance (y compris le blog, pour l'instant
// composé uniquement de pages statiques — pas besoin de fetch API tant
// que ce n'est pas dynamique)
const STATIC_ROUTES = [
    '/',                                                  // Home.jsx
    '/contact',                                           // Contact.jsx
    '/faq',                                                // Faq.jsx
    '/juridictions',                                       // Juridictions.jsx
    '/produits/omnia',                                     // Omnia.jsx
    '/produits/transformation-digitale/geode',             // Geode.jsx
    '/produits/transformation-digitale/omniscan',          // Omniscan.jsx
    '/produits/transformation-digitale/presentation',      // Transformation.jsx
    '/produits/use-cases',                                 // UseCases.jsx
    '/blog/articles',                                      // blog/Articles.jsx
    '/blog/ressources',                                    // blog/Ressources.jsx
    '/blog/webinaires',                                    // blog/Webinaires.jsx
    // MentionsLegales.jsx volontairement exclue (noIndex={true})

    // Pages détail articles (à ajouter manuellement à chaque nouvel article
    // tant que ArticlesList.jsx contient du JSX non importable côté Node)
    '/blog/articles/intellectual-property-and-data-protection',
    '/blog/articles/quand-l-intelligence-artificielle-met-le-droit-au-service-du-developpement-durable-en-afrique-francophone',
    '/blog/articles/gestion-electronique-des-documents',
    '/blog/articles/the-ai-platform-revolutionizing-access-to-lawlin-francophone-africa',
];

function startStaticServer() {
    return new Promise((resolve) => {
        const app = express();
        app.use(express.static(DIST_DIR));
        // Fallback SPA pour que Puppeteer puisse charger n'importe quelle route
        app.get('/*splat', (req, res) => {
            res.send(PRISTINE_INDEX);
        });
        const server = app.listen(PORT, () => resolve(server));
    });
}

async function prerenderRoute(browser, route) {
    const page = await browser.newPage();
    const url = `${BASE_URL}${route}`;

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Laisse une marge pour que react-helmet-async ait fini d'écrire le <head>
    await page.waitForSelector('title');

    const html = await page.content();
    await page.close();

    const outDir = route === '/' ? path.join(DIST_DIR, '__home_tmp') : path.join(DIST_DIR, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');

    console.log(`✅ ${route} → ${path.join(outDir, 'index.html')}`);
}

async function main() {
    if (!fs.existsSync(DIST_DIR)) {
        console.error('❌ dist/ introuvable. Lance "npm run build" avant ce script.');
        process.exit(1);
    }

    const server = await startStaticServer();
    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const routes = STATIC_ROUTES;

    console.log(`🔧 Prerendering de ${routes.length} route(s)...`);

    for (const route of routes) {
        try {
            await prerenderRoute(browser, route);
        } catch (err) {
            console.error(`❌ Échec sur ${route} :`, err.message);
        }
    }

    fs.copyFileSync(
        path.join(DIST_DIR, '__home_tmp', 'index.html'),
        path.join(DIST_DIR, 'index.html')
    );

    fs.rmSync(path.join(DIST_DIR, '__home_tmp'), {
        recursive: true,
        force: true,
    });

    await browser.close();
    server.close();

    console.log('🎉 Prerendering terminé.');
}

main();