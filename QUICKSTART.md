# Quick Start - legOmnia CMS avec Scaleway

## 5 minutes pour démarrer

⚠️ **Version complète**: Lire [SCALEWAY_SETUP.md](./SCALEWAY_SETUP.md) avec screenshots détaillés!

### 1. Créer une DB PostgreSQL Scaleway (2 min)

1. Aller sur https://console.scaleway.com/databases
2. Cliquer **Create database > PostgreSQL**
3. Configurer:
   - Name: `legomnia-db`
   - Region: `fr-par` (France)
   - Node type: `DEV1-S`
4. Cliquer **Create**
5. Attendre la création (2-3 min)
6. Copier les credentials (Host, User, Password)

### 2. Créer un Object Storage (1 min)

1. Aller sur https://console.scaleway.com/object-storage
2. Cliquer **Create bucket**
3. Name: `legomnia-media`, Region: `fr-par`
4. Créer des **Credentials** (Access Key + Secret Key)

### 3. Configurer les variables d'environnement (1 min)

**Backend** - Créer `backend/.env.local`:
```env
DB_HOST=xxxxx.pg.scw.cloud
DB_PORT=5432
DB_USER=default
DB_PASSWORD=your_password
DB_NAME=postgres
DB_SSL=true

SCALEWAY_ENDPOINT=https://s3.fr-par.scw.cloud
SCALEWAY_REGION=fr-par
SCALEWAY_BUCKET=legomnia-media
SCALEWAY_ACCESS_KEY=your_key
SCALEWAY_SECRET_KEY=your_secret
PORT=3001
```

**Frontend** - Créer `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### 4. Créer les tables (1 min)

Exécuter les migrations SQL:
```bash
# Avec psql
psql -h xxxxx.pg.scw.cloud -U default -d postgres < database/migrations/001_create_articles.sql
psql -h xxxxx.pg.scw.cloud -U default -d postgres < database/migrations/002_create_videos.sql

# Ou copier-coller dans pgAdmin (console Scaleway)
```

### 4. Installer et démarrer (1 min)

```bash
# À la racine du projet
npm install

# Démarrer les deux serveurs
npm run dev

# Ou séparément dans deux terminaux:
# Terminal 1:
npm run dev:frontend

# Terminal 2:
npm run dev:backend
```

### 5. Vérifier que ça marche

- Frontend: http://localhost:3000
- Blog: http://localhost:3000/blog
- Admin: http://localhost:3000/admin
- API Health: http://localhost:3001/health

## Créer votre premier article

1. Aller sur http://localhost:3000/admin/articles/new
2. Remplir les informations:
   ```
   Titre: Mon premier article
   Slug: mon-premier-article
   Auteur: Votre nom
   Catégorie: Juridique
   Contenu: Tapez votre contenu en Markdown
   Statut: Publié
   ```
3. Cliquer **Sauvegarder**
4. Vérifier sur http://localhost:3000/blog

## Commandes utiles

```bash
# Développement
npm run dev              # Frontend + Backend
npm run dev:frontend    # Seulement frontend
npm run dev:backend     # Seulement backend

# Production
npm run build           # Compiler tout
npm run build:frontend  # Compiler frontend
npm run build:backend   # Compiler backend

# Démarrage production
npm run start           # Frontend
npm run start:backend   # Backend
```

## Problèmes courants

### "Cannot find module '@supabase/supabase-js'"
```bash
npm install -w frontend -w backend
```

### "SUPABASE_URL is missing"
Vérifiez que `.env.local` existe et contient les bonnes variables

### Port 3000 ou 3001 déjà utilisé
```bash
# Changer le port dans package.json ou tuer le processus:
# Windows: taskkill /F /IM node.exe
# Mac/Linux: lsof -ti:3000 | xargs kill -9
```

### Les tables ne sont pas créées
Assurez-vous d'avoir exécuté les migrations SQL dans Supabase

## Prochaines étapes

1. Lire le [Guide d'utilisation](./GUIDE_UTILISATION.md)
2. Lire l'[Architecture technique](./ARCHITECTURE.md)
3. Personnaliser le design selon vos couleurs
4. Ajouter l'authentification
5. Déployer sur Vercel + Railway

## Besoin d'aide?

Consultez:
- [README.md](./README.md) - Configuration complète
- [GUIDE_UTILISATION.md](./GUIDE_UTILISATION.md) - Comment utiliser le CMS
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture technique détaillée

Happy blogging! 🚀
