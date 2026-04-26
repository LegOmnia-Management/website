# legOmnia - Website & Blog CMS

Infrastructure juridique de l'Afrique francophone avec un système complet de gestion de contenu (CMS).

## Architecture

- **Frontend**: Next.js 14 + React + TypeScript
- **Backend**: Express.js + TypeScript
- **Base de données**: Scaleway PostgreSQL managé
- **Éditeur**: Markdown Editor avec preview en temps réel
- **Stockage**: Scaleway Object Storage (S3-compatible)

## Setup initial - Scaleway

### ⚡ Quick Start (5 minutes)

👉 **Lire d'abord**: [SCALEWAY_SETUP.md](./SCALEWAY_SETUP.md) - Guide complet avec screenshots

### 1. Configuration Scaleway

1. **PostgreSQL managé**: Créer une DB sur https://console.scaleway.com/databases
2. **Object Storage**: Créer un bucket S3 sur https://console.scaleway.com/object-storage
3. **Récupérer les credentials**:
   - Database: Host, Port, User, Password
   - Storage: Access Key, Secret Key

### 2. Variables d'environnement

Créer deux fichiers `.env.local`:

**Backend** (`backend/.env.local`):
```env
# Database Scaleway PostgreSQL
DB_HOST=xxxxx.pg.scw.cloud
DB_PORT=5432
DB_USER=default
DB_PASSWORD=votre_password
DB_NAME=postgres
DB_SSL=true

# Object Storage Scaleway S3
SCALEWAY_ENDPOINT=https://s3.fr-par.scw.cloud
SCALEWAY_REGION=fr-par
SCALEWAY_BUCKET=legomnia-media
SCALEWAY_ACCESS_KEY=your_key
SCALEWAY_SECRET_KEY=your_secret

PORT=3001
```

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### 3. Créer les tables

Exécuter les migrations SQL dans votre base Scaleway:

```bash
# Avec psql (PostgreSQL CLI)
psql -h xxxxx.pg.scw.cloud -U default -d postgres < database/migrations/001_create_articles.sql
psql -h xxxxx.pg.scw.cloud -U default -d postgres < database/migrations/002_create_videos.sql

# Ou via pgAdmin Scaleway (console web)
```

### 4. Installation des dépendances

```bash
npm install
```

### 5. Démarrer le développement

```bash
# Démarrer frontend + backend ensemble
npm run dev

# Ou séparément:
npm run dev:frontend  # http://localhost:3000
npm run dev:backend   # http://localhost:3001
```

Vérifier que ça marche: http://localhost:3001/health

## Fonctionnalités

### Blog & Articles

- ✅ Éditeur markdown avec preview en temps réel
- ✅ Gestion complète des articles (CRUD)
- ✅ Système de brouillons et publication
- ✅ Catégories et tags
- ✅ Estimation du temps de lecture
- ✅ Vue publique des articles

### Gestion Vidéos

- ✅ Gestion des vidéos (CRUD)
- ✅ Support des thumbnails
- ✅ Catégories et tags
- ✅ Système de brouillons et publication

### Admin Dashboard

- ✅ Dashboard avec statistiques
- ✅ Gestion complète des articles
- ✅ Gestion complète des vidéos
- ✅ Interface responsive
- ✅ Design cohérent avec la marque

## Routes API

### Articles
- `GET /api/articles` - Récupérer tous les articles publiés (avec pagination)
- `GET /api/articles/:id` - Récupérer un article par ID
- `GET /api/articles/slug/:slug` - Récupérer un article par slug
- `POST /api/articles` - Créer un article (admin)
- `PUT /api/articles/:id` - Mettre à jour un article (admin)
- `DELETE /api/articles/:id` - Supprimer un article (admin)
- `PATCH /api/articles/:id/publish` - Publier un article (admin)

### Vidéos
- `GET /api/videos` - Récupérer tous les vidéos publiées (avec pagination)
- `GET /api/videos/:id` - Récupérer une vidéo par ID
- `POST /api/videos` - Créer une vidéo (admin)
- `PUT /api/videos/:id` - Mettre à jour une vidéo (admin)
- `DELETE /api/videos/:id` - Supprimer une vidéo (admin)
- `PATCH /api/videos/:id/publish` - Publier une vidéo (admin)

## Structure des données

### Article
```typescript
{
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featured_image_url?: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  reading_time_minutes: number;
  views_count: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
}
```

### Video
```typescript
{
  id: string;
  title: string;
  description: string;
  video_url: string;
  thumbnail_url?: string;
  duration_seconds: number;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  views_count: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
}
```

## Pages principales

- `/` - Accueil
- `/blog` - Liste des articles publiés
- `/blog/[slug]` - Détail d'un article
- `/admin` - Dashboard admin
- `/admin/articles` - Gestion des articles
- `/admin/articles/new` - Créer un nouvel article
- `/admin/articles/[id]` - Éditer un article
- `/admin/videos` - Gestion des vidéos
- `/admin/videos/new` - Créer une nouvelle vidéo

## Déploiement

### Frontend (Vercel)
```bash
npm run build:frontend
# Déployer le répertoire `frontend` sur Vercel
```

### Backend (Railway, Render, Heroku)
```bash
npm run build:backend
# Déployer le répertoire `backend`
```

## Prochaines étapes

- [ ] Système d'authentification complet pour l'admin
- [ ] Upload d'images intégré
- [ ] Compression et optimisation des images
- [ ] Système de commentaires
- [ ] Notifications par email
- [ ] Analytics et statistiques avancées
- [ ] Système de newsletter
- [ ] Export articles (PDF, etc.)
- [ ] Multi-langue support
- [ ] Progressive Web App (PWA)

## Support

Pour les questions ou problèmes, veuillez créer une issue dans le repo.
