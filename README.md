# Legomnia — Site Web

Site vitrine de **Legomnia**, présentant les produits Omnia, Géode, Omniscan et la transformation digitale. Inclut un formulaire de contact avec validation, protection anti-spam (Cloudflare Turnstile) et notifications e-mail.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React 19, Vite, React Router v7, Swiper |
| Backend | Node.js, Express 5, Mongoose |
| Base de données | MongoDB |
| E-mail | Resend |
| Anti-spam | Cloudflare Turnstile |
| Déploiement | Vercel |

---

## Structure du projet

```
website/
├── frontend/               # Application React (Vite)
│   ├── public/
│   ├── src/
│   │   ├── api/            # Appels API (contact)
│   │   ├── assets/         # Images, vidéos, styles CSS
│   │   ├── components/     # Header, Footer, composants réutilisables
│   │   └── pages/          # Pages du site (Home, Omnia, Géode, Contact…)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                # API Node.js / Express
│   ├── config/             # Connexion MongoDB (db.js)
│   ├── controllers/        # Logique métier (contact.controller.js)
│   ├── models/             # Schémas Mongoose (Contact.js)
│   ├── routes/             # Définition des routes (contact.route.js)
│   ├── validators/         # Validation des données (express-validator)
│   ├── index.js            # Point d'entrée Express
│   └── package.json
│
├── api/
│   └── index.js            # Adaptateur Vercel Serverless → Express
│
└── vercel.json             # Configuration de déploiement Vercel
```

---

## Variables d'environnement

### Backend — `backend/.env`

```env
# Environnement
NODE_ENV=development

# Serveur (dev uniquement, ignoré en prod Vercel)
PORT=5171

# Base de données
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>

# URL du frontend (pour CORS)
CLIENT_URL=http://localhost:3000

# Cloudflare Turnstile (anti-spam)
TURNSTILE_SECRET=<votre_clé_secrète_turnstile>

# Resend (envoi d'e-mails)
RESEND_API_KEY=<votre_clé_api_resend>
CONTACT_EMAIL=<email_destinataire_des_demandes_de_contact>
```

### Frontend — `frontend/.env.local`

```env
# URL de l'API backend
VITE_API_URL=http://localhost:5171

# Cloudflare Turnstile (clé publique côté client)
VITE_TURNSTILE_SITE_KEY=<votre_clé_publique_turnstile>
```

> **Important :** ne jamais committer ces fichiers. Ils sont déjà dans le `.gitignore`.

---

## Installation & démarrage en développement

### Prérequis

- Node.js ≥ 18
- Un compte MongoDB Atlas (ou instance MongoDB locale)
- Un compte [Resend](https://resend.com) pour l'envoi d'e-mails
- Un compte [Cloudflare](https://dash.cloudflare.com) pour Turnstile

### 1. Cloner le dépôt

```bash
git clone <url-du-repo>
cd website
```

### 2. Installer les dépendances

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configurer les variables d'environnement

Créer `backend/.env` et `frontend/.env.local` en suivant les modèles ci-dessus.

### 4. Lancer les serveurs

Dans deux terminaux séparés :

```bash
# Terminal 1 — Backend (port 5171)
cd backend
node index.js

# Terminal 2 — Frontend (port 3000)
cd frontend
npm run dev
```

L'application est accessible sur **http://localhost:3000**.

---

## Routes de l'API

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/hello` | Health check |
| `GET` | `/api/contact` | Liste toutes les demandes de contact |
| `POST` | `/api/contact` | Crée une nouvelle demande de contact |

La route `POST /api/contact` effectue dans l'ordre :
1. Vérification du token Cloudflare Turnstile
2. Validation des champs (express-validator)
3. Sauvegarde en base MongoDB
4. Envoi d'un e-mail de notification via Resend

---

## Pages du site

| URL | Page |
|-----|------|
| `/` | Accueil |
| `/produits/omnia` | Omnia |
| `/produits/transformation-digitale/presentation` | Transformation digitale |
| `/produits/transformation-digitale/geode` | Géode |
| `/produits/transformation-digitale/omniscan` | Omniscan |
| `/produits/use-cases` | Cas d'usage |
| `/contact` | Formulaire de contact |
| `/faq` | FAQ |
| `/juridictions` | Juridictions |
| `/blog/articles` | Articles |
| `/blog/ressources` | Ressources |
| `/blog/webinaires` | Webinaires |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |
| `/cgu` | CGU |
| `/cookies` | Politique cookies |

---

## Déploiement sur Vercel

Le projet est configuré pour un déploiement **full-stack sur Vercel** via `vercel.json`.

- Le **frontend** est buildé (`vite build`) et servi depuis `frontend/dist/`
- Le **backend** tourne en **Serverless Function** via `api/index.js`
- Les requêtes `/api/*` sont routées automatiquement vers la Serverless Function
- Toutes les autres routes renvoient vers `index.html` (SPA)

### Variables d'environnement sur Vercel

Dans le dashboard Vercel → Settings → Environment Variables, ajouter :

```
MONGO_URI
CLIENT_URL           # URL de production du frontend (ex: https://legomnia.com)
TURNSTILE_SECRET
RESEND_API_KEY
CONTACT_EMAIL
NODE_ENV             # production
VITE_API_URL         # laisser vide ou mettre l'URL Vercel (les appels /api/* sont relatifs)
VITE_TURNSTILE_SITE_KEY
```

### Déployer

```bash
# Via CLI Vercel (depuis la racine du projet)
vercel --prod

# Ou pousser sur la branche principale si le projet est connecté à GitHub
git push origin main
```

---

## Notes pour la mise en ligne

- En production, le `CLIENT_URL` dans le backend doit correspondre exactement au domaine du frontend (ex: `https://legomnia.com`) pour que le CORS fonctionne.
- L'adresse e-mail expéditrice Resend (`from`) utilise actuellement `onboarding@resend.dev` (domaine de test). Pour la production, configurer un domaine vérifié sur Resend et mettre à jour le champ `from` dans `contact.controller.js`.
- Les clés Turnstile de test (domaine `localhost`) ne fonctionnent pas en production. Bien créer deux sites distincts sur Cloudflare (un pour le dev, un pour la prod).