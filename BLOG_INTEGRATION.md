# Intégration du Blog au site HTML existant

Guide pour intégrer le blog Next.js au site legOmnia (main.html, omnia.html, geode.html, omniscan.html).

## Architecture

```
main.html (site statique HTML)
    ↓
Lien vers /blog (Next.js)
    ↓
Blog Next.js (http://localhost:3000/blog)
```

## 2 approches possibles

### Approche 1: Lien direct (Recommandée - Simple)

Ajouter un simple lien dans le menu navigation:

```html
<!-- Dans main.html, section <nav> -->
<a href="/blog" class="nav-link">Blog</a>
```

**Avantages:**
- ✅ Simple et rapide
- ✅ Blog entièrement dans Next.js
- ✅ Responsive et moderne
- ✅ Admin intégré

**URL résultante:**
- Site: http://localhost:3000 (main.html)
- Blog: http://localhost:3000/blog (Next.js)

### Approche 2: Intégration dans main.html (Avancée)

Charger les articles dynamiquement dans main.html avec JavaScript.

```html
<!-- Ajouter dans main.html, section blog-preview -->
<div id="blog-articles-container" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
  <!-- Les articles seront chargés ici par blog-integration.js -->
</div>

<script src="/blog-integration.js"></script>
```

**Avantages:**
- ✅ Blog dans main.html
- ✅ Design cohérent
- ✅ Données en temps réel
- ❌ Complexe à maintenir

**Recommandation:** Utiliser l'Approche 1 (lien direct vers /blog)

## Implémentation - Approche 1 (Recommandée)

### Étape 1: Ajouter le lien au menu

Modifier `main.html`:

```html
<nav class="navbar">
  <a href="/" class="logo">legOmnia</a>
  <ul class="nav-links">
    <li><a href="#accueil" class="nav-link">Accueil</a></li>
    <li><a href="#omnia" class="nav-link">OMNIA</a></li>
    <li><a href="#omniscan" class="nav-link">OmniScan</a></li>
    <li><a href="/blog" class="nav-link">📰 Blog</a></li>  <!-- ← Ajouter cette ligne -->
    <li><a href="#contact" class="nav-link">Contact</a></li>
  </ul>
</nav>
```

### Étape 2: Style CSS (optionnel)

Si tu veux un style customisé pour le blog dans le menu:

```css
a.nav-link[href="/blog"] {
  color: var(--vi);
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.2s;
}

a.nav-link[href="/blog"]:hover {
  background: var(--vi-dim);
}
```

### Étape 3: Vérifier que ça marche

1. Démarrer le backend: `npm run dev:backend`
2. Démarrer le frontend: `npm run dev:frontend`
3. Aller sur http://localhost:3000
4. Cliquer sur "Blog" dans le menu
5. Voir la liste des articles

## Structure des pages

### Site HTML existant
```
http://localhost:3000/
├── main.html (accueil)
├── omnia.html
├── omniscan.html
└── geode.html
```

### Blog Next.js
```
http://localhost:3000/
├── /blog (liste des articles)
├── /blog/[slug] (détail d'un article)
├── /admin (dashboard admin)
├── /admin/articles (gestion articles)
└── /admin/articles/new (créer article)
```

## Routing - Comment ça marche?

Next.js détecte les routes automatiquement:

```
frontend/src/app/
├── page.tsx              → http://localhost:3000/
├── blog/
│   ├── page.tsx          → http://localhost:3000/blog
│   └── [slug]/
│       └── page.tsx      → http://localhost:3000/blog/mon-article
└── admin/
    ├── page.tsx          → http://localhost:3000/admin
    ├── articles/
    │   ├── page.tsx      → http://localhost:3000/admin/articles
    │   ├── new/
    │   │   └── page.tsx  → http://localhost:3000/admin/articles/new
    │   └── [id]/
    │       └── page.tsx  → http://localhost:3000/admin/articles/123
```

## Intégration avancée - Approche 2

Si tu veux afficher les articles dans main.html (optionnel):

### Étape 1: Modifier main.html

Remplacer la section `blog-preview` par:

```html
<!-- ─── BLOG PREVIEW ─── -->
<section id="blog-preview" style="padding:80px 0;">
  <div class="container">
    <div style="text-align:center;margin-bottom:48px;">
      <div class="badge pulse" style="justify-content:center;margin-bottom:24px;">
        <span style="width:8px;height:8px;background:var(--vi);border-radius:50%;display:inline-block;"></span>
        Blog · Actualité juridique
      </div>
      <h2>Actualités et insights juridiques</h2>
    </div>

    <!-- Container pour les articles -->
    <div id="blog-articles-container" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:40px;">
      <div class="bento-card reveal" style="opacity:0.5;text-align:center;padding:40px;">
        <p>Chargement des articles...</p>
      </div>
    </div>

    <!-- Voir tous les articles -->
    <div style="text-align:center;">
      <a href="/blog" class="btn btn-outline btn-lg">
        Voir tous les articles →
      </a>
    </div>
  </div>
</section>

<!-- Charger les articles via API -->
<script src="/blog-integration.js"></script>
```

### Étape 2: Comment ça marche

Le script `blog-integration.js`:
1. Appelle l'API: `GET /api/articles?limit=6`
2. Reçoit les 6 derniers articles
3. Génère les cartes HTML
4. Les affiche dans `#blog-articles-container`

## Design des cartes

Les articles utilisent le style `bento-card` du site existant:

```html
<a href="/blog/mon-article" class="bento-card reveal">
  <div style="font-size:12px;color:var(--text-2);margin-bottom:12px;">
    <span style="background:var(--vi);color:white;padding:4px 8px;border-radius:4px;font-size:10px;">Juridique</span>
    <span style="margin-left:8px;">15 mars 2026</span>
  </div>
  <h4>Titre de l'article</h4>
  <p>Résumé court...</p>
  <div style="display:flex;justify-content:space-between;font-size:12px;">
    <span>Auteur</span>
    <span>5 min</span>
  </div>
</a>
```

## Déploiement

### Frontend (Vercel)
```bash
# Déployer le dossier frontend/
npm run build:frontend
# Push vers Vercel (via GitHub)
```

### Backend (Railway/Render)
```bash
# Déployer le dossier backend/
npm run build:backend
# Push vers Railway/Render
```

## Variables d'environnement en production

**Frontend (.env.production):**
```env
NEXT_PUBLIC_API_URL=https://api.legomnia.com/api
```

**Backend (.env.production):**
```env
DB_HOST=xxxxx.pg.scw.cloud
DB_USER=default
DB_PASSWORD=xxxxx
DB_NAME=postgres
SCALEWAY_ENDPOINT=https://s3.fr-par.scw.cloud
SCALEWAY_BUCKET=legomnia-media
SCALEWAY_ACCESS_KEY=xxxxx
SCALEWAY_SECRET_KEY=xxxxx
PORT=3001
```

## URLs finales en production

```
Blog public:      https://legomnia.com/blog
Article détail:   https://legomnia.com/blog/mon-article
Admin:            https://legomnia.com/admin
API:              https://api.legomnia.com/api
```

## Troubleshooting

### "Blog articles not loading"

**Vérifier:**
1. Backend est démarré: `curl http://localhost:3001/health`
2. API articles fonctionne: `curl http://localhost:3001/api/articles`
3. Base de données est configurée (.env.local)
4. Migrations SQL exécutées

### "Blog page shows 404"

**Vérifier:**
1. Frontend est démarré: `npm run dev:frontend`
2. Port 3000 est correct
3. Fichier `/frontend/src/app/blog/page.tsx` existe

### "Styling ne marche pas"

**Vérifier:**
1. Tailwind CSS est configuré (`frontend/tailwind.config.js`)
2. Fichier `frontend/src/globals.css` existe
3. Layout principal charge les styles

## Prochaines étapes

1. ✅ Backend Scaleway configuré
2. ✅ Pages blog créées
3. ⏭️ Ajouter lien Blog au menu (main.html)
4. ⏭️ Tester localement
5. ⏭️ Créer premier article
6. ⏭️ Déployer en production

## Support

- Documentation compète: [README.md](./README.md)
- Setup Scaleway: [SCALEWAY_SETUP.md](./SCALEWAY_SETUP.md)
- Guide utilisateur: [GUIDE_UTILISATION.md](./GUIDE_UTILISATION.md)
