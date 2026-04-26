# Setup Scaleway pour legOmnia CMS

Guide complet pour configurer legOmnia avec Scaleway PostgreSQL et Object Storage.

## 1. Créer une base de données PostgreSQL (5 min)

### Étape 1: Créer la DB
1. Aller sur https://console.scaleway.com
2. **Databases > PostgreSQL** 
3. Cliquer sur **Create database**
4. Configurer:
   - **Name**: `legomnia-db`
   - **Version**: PostgreSQL 15 ou plus récent
   - **Node type**: DEV1-S (gratuit et suffisant au démarrage)
   - **Region**: France (fr-par recommandé)
5. Cliquer **Create database**
6. Attendre que la DB soit créée (2-3 min)

### Étape 2: Récupérer les credentials
1. Cliquer sur votre base créée
2. Aller dans l'onglet **Connection**
3. Copier les informations:
   - **Host**: `xxxxx.pg.scw.cloud`
   - **Port**: `5432`
   - **User**: `default`
   - **Password**: Votre mot de passe
   - **Database**: `postgres`

## 2. Créer le Object Storage (2 min)

### Étape 1: Créer un bucket
1. Aller sur https://console.scaleway.com
2. **Object Storage** (dans le menu)
3. Cliquer **Create bucket**
4. Configurer:
   - **Name**: `legomnia-media`
   - **Region**: `fr-par` (Paris)
   - **Visibility**: Private (recommandé)
5. Cliquer **Create bucket**

### Étape 2: Créer des credentials API
1. Aller dans **Object Storage > Credentials**
2. Cliquer **Generate new credentials**
3. Configurer:
   - **Name**: `legomnia-api`
   - **Permissions**: Read + Write
4. Cliquer **Generate**
5. Copier:
   - **Access Key**
   - **Secret Key**

## 3. Configurer les variables d'environnement

### Backend - `backend/.env.local`

```env
# Server
PORT=3001
NODE_ENV=development

# Database - Scaleway PostgreSQL
DB_HOST=xxxxx.pg.scw.cloud
DB_PORT=5432
DB_USER=default
DB_PASSWORD=votre_password_ici
DB_NAME=postgres
DB_SSL=true

# Object Storage - Scaleway S3
SCALEWAY_ENDPOINT=https://s3.fr-par.scw.cloud
SCALEWAY_REGION=fr-par
SCALEWAY_BUCKET=legomnia-media
SCALEWAY_ACCESS_KEY=votre_access_key
SCALEWAY_SECRET_KEY=votre_secret_key
```

### Frontend - `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 4. Créer les tables

### Option A: Exécuter les migrations locales

1. Installer PostgreSQL CLI (psql) sur votre machine
2. Se connecter à la base:
```bash
psql -h xxxxx.pg.scw.cloud -U default -d postgres
```

3. Copier-coller le contenu de `database/migrations/001_create_articles.sql`
4. Appuyer sur Enter, puis coller `002_create_videos.sql`

### Option B: Via pgAdmin Scaleway

1. Dans la console Scaleway, aller dans votre DB
2. Onglet **Tools > pgAdmin**
3. Se connecter
4. Exécuter les migrations SQL là

## 5. Installer et tester

```bash
# Installer les dépendances
npm install

# Démarrer les serveurs
npm run dev

# Vérifier que ça marche:
# Frontend: http://localhost:3000
# Health check API: http://localhost:3001/health
# Articles API: http://localhost:3001/api/articles
```

## 6. Créer votre premier article

1. Aller sur http://localhost:3000/admin/articles/new
2. Remplir les champs
3. Cliquer **Sauvegarder**
4. Voir votre article sur http://localhost:3000/blog

## Dépannage

### "Cannot connect to database"
- Vérifier que `DB_HOST`, `DB_USER`, `DB_PASSWORD` sont corrects
- Vérifier que la DB Scaleway est en statut "READY"
- Vérifier que `DB_SSL=true` est défini

### "SCALEWAY_ACCESS_KEY is undefined"
- Vérifier que les credentials S3 sont bien copiées
- S'assurer que les variables sont dans `backend/.env.local`

### "Bucket not found"
- Vérifier que le bucket `legomnia-media` existe
- Vérifier que `SCALEWAY_BUCKET=legomnia-media` est exact

## Coûts Scaleway

- **PostgreSQL DEV1-S**: ~€4/mois
- **Object Storage**: ~€0.01/mois (au début, très peu)
- **Bande passante**: Gratuit (jusqu'à certaines limites)

**Total**: Très économique pour un blog! 💰

## Scaleway CLI (optionnel)

Pour les utilisateurs avancés:

```bash
# Installer CLI Scaleway
npm install -g @scaleway/cli

# Configurer
scw config init

# Créer une DB
scw database instance create \
  name=legomnia-db \
  engine=PostgreSQL-15 \
  node-type=DEV1-S \
  region=fr-par
```

## Support Scaleway

- Documentation: https://www.scaleway.com/en/docs/
- Console: https://console.scaleway.com
- Support: support@scaleway.com

## Migration depuis Supabase vers Scaleway

Si tu viens de Supabase, les migrations SQL sont identiques!

Seules les variables d'environnement changent:
- Base de données: `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- Storage: `SCALEWAY_ACCESS_KEY`, `SCALEWAY_SECRET_KEY`, `SCALEWAY_BUCKET`

Les routes API restent 100% compatibles! ✅

## Prochaines étapes

1. ✅ Setup Scaleway DB
2. ✅ Setup Object Storage
3. ✅ Configurer `.env.local`
4. ✅ Créer les tables
5. ⏭️ Lancer le dev server
6. ⏭️ Créer un article
7. ⏭️ Déployer en production

Besoin d'aide? Consulte le [GUIDE_UTILISATION.md](./GUIDE_UTILISATION.md) et [ARCHITECTURE.md](./ARCHITECTURE.md).

Bon blogging! 🚀
