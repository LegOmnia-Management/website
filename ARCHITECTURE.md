# Architecture du CMS legOmnia

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                         UTILISATEUR                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
        ┌───────▼────────┐         ┌───────▼────────┐
        │   FRONT-END    │         │   BACK-END     │
        │   (Next.js)    │         │   (Express)    │
        └────────────────┘         └────────────────┘
                │                           │
                └───────────────┬───────────┘
                                │
                        ┌───────▼────────┐
                        │   SUPABASE     │
                        │  (PostgreSQL)  │
                        └────────────────┘
```

## Frontend (Next.js)

### Structure
```
frontend/
├── public/                 # Fichiers statiques
├── src/
│   ├── app/               # App Router (Next.js 14)
│   │   ├── (public)/      # Pages publiques
│   │   │   ├── page.tsx   # Accueil
│   │   │   └── blog/      # Section blog
│   │   └── admin/         # Zone admin protégée
│   │       ├── articles/
│   │       └── videos/
│   ├── components/        # Composants réutilisables
│   │   ├── MarkdownEditor.tsx
│   │   └── ArticleForm.tsx
│   ├── lib/              # Utilities et clients API
│   │   ├── api.ts        # Client API axios
│   │   └── supabase.ts   # Client Supabase
│   └── types/            # Types TypeScript partagés
└── tailwind.config.js
```

### Technologies
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS + CSS personnalisé
- **Client API**: Axios avec interceptors
- **Éditeur**: MD Editor RT
- **State Management**: React hooks + Zustand (optionnel)

### Points clés

1. **App Router**: Navigation côté client efficace
2. **Server Components**: Optimisation des performances
3. **Intercepteurs API**: Gestion automatique de l'authentification
4. **Éditeur Markdown**: Preview en temps réel

## Backend (Express.js)

### Structure
```
backend/
├── src/
│   ├── index.ts          # Serveur principal
│   ├── routes/           # Endpoints API
│   │   ├── articles.ts
│   │   └── videos.ts
│   ├── middleware/       # Middleware Express
│   │   └── errorHandler.ts
│   └── lib/             # Utilities
│       └── supabase.ts   # Client Supabase
└── tsconfig.json
```

### Technologies
- **Framework**: Express.js
- **Validation**: Zod
- **Client DB**: Supabase JS
- **Sécurité**: Helmet, CORS
- **Gestion d'erreurs**: Custom middleware

### API Endpoints

#### Articles
```
GET    /api/articles              # Liste paginée
GET    /api/articles/:id          # Détail
GET    /api/articles/slug/:slug   # Par slug
POST   /api/articles              # Créer (admin)
PUT    /api/articles/:id          # Mettre à jour (admin)
DELETE /api/articles/:id          # Supprimer (admin)
PATCH  /api/articles/:id/publish  # Publier (admin)
```

#### Vidéos
```
GET    /api/videos        # Liste paginée
GET    /api/videos/:id    # Détail
POST   /api/videos        # Créer (admin)
PUT    /api/videos/:id    # Mettre à jour (admin)
DELETE /api/videos/:id    # Supprimer (admin)
PATCH  /api/videos/:id/publish  # Publier (admin)
```

## Base de données (Supabase/PostgreSQL)

### Schéma

#### Table: articles
```sql
id (UUID PK)
title (VARCHAR)
slug (VARCHAR UNIQUE)
excerpt (TEXT)
content (TEXT)
author (VARCHAR)
featured_image_url (VARCHAR)
category (VARCHAR)
tags (TEXT[])
status (VARCHAR: draft|published|archived)
reading_time_minutes (INTEGER)
views_count (INTEGER)
published_at (TIMESTAMPTZ)
created_at (TIMESTAMPTZ)
updated_at (TIMESTAMPTZ)
```

#### Table: videos
```sql
id (UUID PK)
title (VARCHAR)
description (TEXT)
video_url (VARCHAR)
thumbnail_url (VARCHAR)
duration_seconds (INTEGER)
category (VARCHAR)
tags (TEXT[])
status (VARCHAR: draft|published|archived)
views_count (INTEGER)
published_at (TIMESTAMPTZ)
created_at (TIMESTAMPTZ)
updated_at (TIMESTAMPTZ)
```

### Indexes
- Status (pour filtrer brouillons/publiés)
- Slug (pour recherche)
- Published_at (pour tri chronologique)
- Category (pour filtrage)

## Flux de données

### 1. Créer un article
```
Frontend (Formulaire)
    ↓
API POST /api/articles
    ↓
Validation (Zod)
    ↓
Calcul temps lecture
    ↓
INSERT en BD
    ↓
Return article créé
    ↓
Frontend (Redirection)
```

### 2. Afficher un article publié
```
Frontend GET /blog/:slug
    ↓
API GET /api/articles/slug/:slug
    ↓
SELECT BD (status = published)
    ↓
Return article
    ↓
Frontend (Render Markdown → HTML)
```

## Stack technologique

### Frontend
- Node.js 18+
- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS 3
- MD Editor RT
- Axios
- Zod (validation)

### Backend
- Node.js 18+
- Express.js 4
- TypeScript 5
- Supabase JS
- Zod (validation)
- Helmet
- CORS

### Base de données
- PostgreSQL (Supabase)
- Stockage: Supabase Storage
- Auth: Supabase Auth

## Déploiement

### Frontend → Vercel
- Déploiement automatique depuis GitHub
- Environment variables via dashboard Vercel
- Built-in CDN et caching

### Backend → Railway/Render/Heroku
- Docker container
- Environment variables
- Base de données Supabase (externe)

## Performance et optimisations

### Frontend
- Image optimization (Next.js Image component)
- Code splitting automatique
- Static generation pour contenu public
- ISR (Incremental Static Regeneration)

### Backend
- Pagination automatique
- Indexes BD pour requêtes fréquentes
- Compression gzip
- Cache headers appropriés

### CDN & Caching
- Supabase Storage avec CDN
- Vercel CDN pour frontend
- Cache-Control headers

## Sécurité

1. **Authentication**
   - Supabase Auth pour future intégration
   - Tokens JWT

2. **Validation**
   - Zod schema validation côté backend
   - Validation HTML côté frontend

3. **Protections**
   - CORS whitelist
   - Helmet.js headers
   - Rate limiting (à ajouter)
   - CSRF protection (à ajouter)

## Monitoring et Logs

- Logs serveur Express
- Supabase logs (via dashboard)
- Client-side error tracking (à ajouter)

## Roadmap futures améliorations

1. **Authentification complète**
   - Intégration Supabase Auth
   - Rôles et permissions (admin, editor, viewer)

2. **Upload d'images**
   - Intégration Supabase Storage
   - Compression et optimisation

3. **Analytics**
   - Tracking des vues
   - Temps passé par article
   - Statistiques par auteur/catégorie

4. **Commentaires**
   - Système de commentaires
   - Modération

5. **Notifications**
   - Email pour nouveaux articles
   - Webhooks

6. **Cache**
   - Redis pour cache couche

7. **Tests**
   - Unit tests (Jest)
   - Integration tests
   - E2E tests (Playwright)

8. **Internationalization**
   - Support multi-langue
   - Traductions articles

## Contribution

Pour modifier l'architecture:
1. Discutez des changements
2. Documentez les décisions
3. Mettez à jour ce fichier
4. Testez en développement d'abord
