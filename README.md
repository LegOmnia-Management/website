# Legomnia — Site Web

Site vitrine de **Legomnia**, présentant les produits Omnia, Géode, Omniscan et la transformation digitale. Inclut un blog et formulaire de contact avec validation, protection anti-spam (honeypot) et notifications e-mail.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React 19, Vite, React Router v7, Swiper |
| Backend | Node.js, Express 5, Mongoose |
| Base de données | MongoDB |
| E-mail | Resend |
| Anti-spam | Honeypot (champ caché) |
| Déploiement | VPS (Docker Compose + Caddy), Vercel pour la préprod |

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

# Resend (envoi d'e-mails)
RESEND_API_KEY=<votre_clé_api_resend>
MAIL_FROM=LegOmnia <contact@legomnia.com>
NOTIFICATION_EMAILS=contact@legomnia.com,jp.bertaud@legomnia.com,alexandra.esmel@legomnia.com
```

### Frontend — `frontend/.env.local`

```env
# URL de l'API backend
VITE_API_URL=http://localhost:5171
```

> **Important :** ne jamais committer ces fichiers. Ils sont déjà dans le `.gitignore`.

---

## Installation & démarrage en développement

### Prérequis

- Node.js ≥ 18
- Un compte MongoDB Atlas (ou instance MongoDB locale)
- Un compte [Resend](https://resend.com) pour l'envoi d'e-mails

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
| `POST` | `/api/contact` | Crée une nouvelle demande de contact |
| `POST` | `/api/waitlist` | Inscrit un utilisateur sur la liste d'attente |

La route `POST /api/contact` effectue dans l'ordre :
1. Honeypot : si le champ caché `website` est rempli (bot), réponse 201 factice, rien n'est enregistré
2. Validation des champs (express-validator)
3. Sauvegarde en base MongoDB
4. Envoi d'un e-mail de notification via Resend (optionnel : ignoré si `RESEND_API_KEY` est absent ; une erreur d'envoi ne fait pas échouer la demande)

Les notifications (contact et liste d'attente) partent de `MAIL_FROM` (défaut
`LegOmnia <contact@legomnia.com>`) vers `NOTIFICATION_EMAILS` (défaut
`contact@legomnia.com`, `jp.bertaud@legomnia.com`, `alexandra.esmel@legomnia.com`),
voir `backend/config/mail.js`. Le domaine `legomnia.com` doit être vérifié dans
Resend (Domains → Add domain, puis ajout des enregistrements DNS SPF/DKIM),
sinon Resend refuse l'envoi.

La route `POST /api/waitlist` (formulaire de la page `/liste-attente`, accessible
via le bouton « Inscription sur liste d'attente » du header) suit le même principe :
honeypot, validation, sauvegarde (collection `waitlists`, une seule inscription par
e-mail ; un doublon reçoit la même réponse de succès) puis notification Resend à
`NOTIFICATION_EMAILS`.

Les demandes de contact ne sont pas exposées par l'API : elles se consultent
directement dans MongoDB (collection `contacts`).

Les routes d'écriture du blog
(`POST`/`PATCH`/`DELETE` sur `/api/blog/article` et `/api/blog/category`)
exigent le header `Authorization: Bearer <ADMIN_API_KEY>`. Sans `ADMIN_API_KEY`
défini côté serveur, elles sont fermées (403).

```bash
curl -X DELETE -H "Authorization: Bearer $ADMIN_API_KEY" https://www.legomnia.com/api/blog/category/<id>
```

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

Chaque page existe aussi en anglais sous `/en` avec un chemin traduit
(ex. `/produits/omnia` → `/en/products/omnia`) : voir la section suivante.

---

## Version anglaise (FR / EN)

Le français reste la langue par défaut (URL sans préfixe). La version anglaise
est servie sous `/en`, et les boutons **FR / EN** du header basculent vers la
même page dans l'autre langue.

- **Correspondance des URL** : `frontend/src/i18n/routes.js` (`ROUTES`). Les
  routes de `App.jsx` sont générées dans les deux langues à partir de ce fichier.
- **Langue courante** : hook `useLang()` (`frontend/src/i18n/useLang.js`),
  déduite de l'URL. Il fournit :
  - `tr('texte FR', 'English text')` : texte (ou JSX) dans la langue courante,
    utilisé directement dans les pages ;
  - `lp('/contact')` : lien interne dans la langue courante (`/en/contact` en anglais).
    **Tous les liens internes doivent passer par `lp()`.**
  - `t({ fr, en })` : dictionnaire de la langue courante (header, footer et
    accueil, dont les textes sont dans `frontend/src/locales/{fr,en}/`).
- **SEO** : `SEOHead` génère le canonical dans la langue courante, les liens
  `hreflang` (fr / en / x-default) et `og:locale`. Les pages anglaises sont
  prérendues automatiquement et listées dans `public/sitemap.xml`.
- **Formulaires** : les valeurs envoyées à l'API restent en français (seuls les
  libellés sont traduits) ; les messages d'erreur de l'API sont traduits côté
  front via `frontend/src/i18n/apiErrors.js` (à compléter si un message est
  ajouté dans `backend/validators`).
- **Blog** : un article peut avoir une version anglaise via les champs
  `titleEn`, `recapEn`, `altEn`, `dateEn`, `nameEn` (catégories) et `htmlEn`
  dans `ArticlesList.jsx` ; sinon l'article d'origine est affiché.
- **Pages légales** : traduites à titre informatif, avec une mention indiquant
  que la version française prévaut.

Pour ajouter ou modifier un texte : écrire les deux versions côte à côte,
`{tr("…", "…")}`.

---

## SEO — Prerendering

Le site étant en React/Vite (CSR), le HTML brut envoyé aux robots ne contient
pas le contenu de la page (`<div id="root"></div>` vide) tant que le JS n'a
pas été exécuté. Un script de prerendering génère donc une version HTML
statique de chaque page publique au moment du build.

### Comment ça marche

`frontend/prerender.js` s'exécute après `vite build` :
1. Sert `dist/` en local via un serveur temporaire
2. Visite chaque route listée dans `STATIC_ROUTES` avec Puppeteer
3. Sauvegarde le HTML final (contenu + title/meta rendus par `SEOHead`)
   dans `dist/<route>/index.html`

nginx sert ensuite ces fichiers nativement, sans configuration additionnelle.

### Ajouter une nouvelle page indexable

Toute nouvelle page utilisant le composant `SEOHead` (sans `noIndex`) doit
être ajoutée manuellement à `STATIC_ROUTES` dans `frontend/prerender.js`,
sous peine de ne pas être prérendue.
La version anglaise de chaque route est ajoutée automatiquement (à condition
que la page soit déclarée dans `frontend/src/i18n/routes.js`).

### Tester en local

```bash
cd frontend
npm run build:prerender
npx serve dist
```

Puis vérifier `dist/<route>/index.html` (ou `curl localhost:<port>/<route>`) :
le contenu et les meta tags doivent être présents en dur, pas seulement
`<div id="root">` vide.

---

## Déploiement

Le projet utilise deux environnements distincts :

- **Vercel** : environnement de test/préproduction avec une URL stable,
  utilisé pour prévisualiser les pages et les partager avec les équipes
  externes avant leur mise en ligne définitive.

- **VPS** : environnement de **production**. Le site réel
  (`www.legomnia.com`) tourne sur un VPS via Docker Compose
  (Caddy pour le HTTPS → frontend nginx → backend Express), déployé
  automatiquement via GitHub Actions à chaque push sur `main`.

### Tester sur Vercel

```bash
# Via CLI Vercel (depuis la racine du projet)
vercel --prod
```

Ceci déploie l'état actuel du code sur l'URL de test Vercel, indépendamment
de Git — pratique pour prévisualiser des changements avant de les pousser.

### Déployer en production (VPS)

```bash
git push origin main
```

Le pipeline `.github/workflows/deploy.yml` :
1. build les images `frontend` et `backend` et les pousse sur GHCR
   (`ghcr.io/legomnia-management/website-*`)
2. copie `deploy/docker-compose.yml` et `deploy/Caddyfile` dans `/opt/legomnia`
   sur le VPS
3. lance `docker compose pull && docker compose up -d` en SSH

Il peut aussi être lancé à la main (onglet Actions → Deploy to VPS → Run workflow).

### Mise en place initiale du VPS (une seule fois)

1. Créer un VPS Ubuntu (1 vCPU / 1–2 Go RAM suffisent : le build se fait sur GitHub).
2. En root : `bash deploy/setup-vps.sh` (installe Docker, crée l'utilisateur
   `deploy`, `/opt/legomnia` et le pare-feu).
3. Générer une clé SSH dédiée (`ssh-keygen -t ed25519 -f legomnia_deploy`),
   mettre la clé publique dans `/home/deploy/.ssh/authorized_keys`.
4. Créer `/opt/legomnia/.env` à partir de `deploy/env.example` (`chmod 600`).
5. DNS : enregistrements `A` pour `legomnia.com` et `www.legomnia.com` → IP du VPS.
6. Secrets GitHub (Settings → Secrets → Actions) :
   `VPS_HOST`, `VPS_USER` (= `deploy`), `VPS_SSH_KEY` (clé privée).
7. Lancer le workflow. Caddy obtient le certificat HTTPS au premier démarrage.

Logs : `cd /opt/legomnia && docker compose logs -f backend`

### Variables d'environnement sur Vercel

Dans le dashboard Vercel → Settings → Environment Variables, ajouter :

```
MONGO_URI
CLIENT_URL           # URL de production du frontend (ex: https://legomnia.com)
RESEND_API_KEY
MAIL_FROM            # optionnel, défaut : LegOmnia <contact@legomnia.com>
NOTIFICATION_EMAILS  # optionnel, défaut : contact@, jp.bertaud@, alexandra.esmel@legomnia.com
ADMIN_API_KEY
NODE_ENV             # production
VITE_API_URL         # laisser vide ou mettre l'URL Vercel (les appels /api/* sont relatifs)
```

---

## Notes pour la mise en ligne

- En production, le `CLIENT_URL` dans le backend doit correspondre exactement au domaine du frontend (ex: `https://legomnia.com`) pour que le CORS fonctionne.
- L'adresse expéditrice Resend (`MAIL_FROM`, défaut `LegOmnia <contact@legomnia.com>`) exige que le domaine `legomnia.com` soit vérifié sur Resend ; tant que ce n'est pas fait, les notifications sont refusées (la demande est quand même enregistrée).
