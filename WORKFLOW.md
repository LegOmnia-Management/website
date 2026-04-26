# Workflow legOmnia CMS

## Cycle de vie d'un article

```
┌─────────────────────────────────────────────────────────────────┐
│                    CRÉER NOUVEL ARTICLE                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Admin > Articles > +Nouveau
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────────────────┐
                │  Remplir le formulaire                │
                │  - Titre (obligatoire)                │
                │  - Slug (obligatoire)                 │
                │  - Contenu Markdown (obligatoire)     │
                │  - Autres infos (optionnel)           │
                └─────────────┬──────────────────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  ÉDITEUR MARKDOWN          │
                │  ┌──────────┬──────────┐  │
                │  │  TEXTE   │ PREVIEW  │  │
                │  │          │          │  │
                │  │ Écrire   │ Voir le  │  │
                │  │          │ résultat │  │
                │  └──────────┴──────────┘  │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────────┐
                │  Statut: Brouillon / Publié   │
                │  (peut changer après)         │
                └─────────────┬──────────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Cliquer "Sauvegarder"     │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Envoyer à l'API           │
                │  POST /api/articles        │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Valider et sauvegarder    │
                │  en base de données        │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Redirection vers liste    │
                │  des articles              │
                └─────────────┬──────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    (Brouillon)        (Publié)          (Éditer ou Supprimer)
        │                     │                     │
        ▼                     ▼                     ▼
   Caché              Visible sur          Retour à l'éditeur
   Admin              /blog               ou suppression
```

## Cycle de vie d'une vidéo

```
┌─────────────────────────────────────────────────────────────────┐
│                    AJOUTER NOUVELLE VIDÉO                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Admin > Vidéos > +Nouvelle
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────────────────┐
                │  Remplir le formulaire                │
                │  - Titre (obligatoire)                │
                │  - URL vidéo (obligatoire)            │
                │  - Durée en secondes (obligatoire)    │
                │  - Description, miniature (optionnel) │
                └─────────────┬──────────────────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Copier URL d'intégration  │
                │  YouTube/Vimeo/autre       │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Statut: Brouillon/Publié │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Cliquer "Créer vidéo"     │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Envoyer à l'API           │
                │  POST /api/videos          │
                └─────────────┬──────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Sauvegarder en BD         │
                └─────────────┬──────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    (Brouillon)        (Publié)          (Gérer)
        │                     │              │
        ▼                     ▼              ▼
   Non visible        Visible sur      Éditer ou
   (Admin)            le site          supprimer
```

## Anatomie d'un article

### Vue Admin (Éditeur)
```
┌─────────────────────────────────────────────────────────────────┐
│  Mon nouvel article                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Titre * ┌─────────────────────────────────────────────────┐  │
│          │ Titre de l'article                              │  │
│          └─────────────────────────────────────────────────┘  │
│                                                                 │
│  Contenu (Markdown) *                                          │
│  ┌──────────────────────────────┬──────────────────────────┐  │
│  │ # Titre 1                    │  # Titre 1               │  │
│  │ Écrivez votre contenu...     │  Voir le résultat...    │  │
│  │                              │                          │  │
│  │ ## Titre 2                   │  ## Titre 2              │  │
│  │ Plus de texte                │  Plus de texte           │  │
│  │                              │                          │  │
│  └──────────────────────────────┴──────────────────────────┘  │
│                                                                 │
│  Autres champs: Auteur, Catégorie, Tags, Statut, etc.        │
│                                                                 │
│  [Sauvegarder]  [Annuler]                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Vue Publique (Blog)
```
┌─────────────────────────────────────────────────────────────────┐
│  legOmnia                                Blog  Admin            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Mon nouvel article                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Par: Votre nom | 10 min de lecture | Juridique               │
│                                                                 │
│  Titre 1                                                        │
│  ──────────                                                     │
│  Contenu rendu en HTML avec tous les styles...                │
│                                                                 │
│  Titre 2                                                        │
│  ──────────                                                     │
│  Plus de contenu avec images, citations, code, etc.           │
│                                                                 │
│  [Partagez cet article]                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Flux de données - Créer et publier

```
                         UTILISATEUR
                            │
                            ▼
                    ┌──────────────────┐
                    │   Interface      │
                    │    Admin Web      │
                    │   (Next.js)       │
                    └────────┬─────────┘
                             │
                    Validation + Sérialisation
                             │
                             ▼
                    ┌──────────────────┐
                    │  API Backend     │
                    │  (Express)       │
                    │                  │
                    │  - Validation    │
                    │  - Calculs       │
                    │  - Sécurité      │
                    └────────┬─────────┘
                             │
                    Insertion/Mise à jour
                             │
                             ▼
                    ┌──────────────────┐
                    │   Supabase       │
                    │   PostgreSQL     │
                    │                  │
                    │  articles table  │
                    └────────┬─────────┘
                             │
                       Confirmé
                             │
                             ▼
                    ┌──────────────────┐
                    │  Réponse API     │
                    │  (JSON)          │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Frontend        │
                    │  - Redirection   │
                    │  - Message ok    │
                    └─────────────────┘
```

## Flux de données - Afficher un article

```
                    Utilisateur
                  (navigateur web)
                         │
                         ▼
                    GET /blog/:slug
                         │
                         ▼
                    ┌──────────────────┐
                    │  Next.js Server  │
                    │  - Route /blog   │
                    └────────┬─────────┘
                             │
                    Appeler API Backend
                             │
                             ▼
                    ┌──────────────────┐
                    │  Express API     │
                    │  GET /api/articles/slug/:slug
                    │  - Validation    │
                    │  - Sécurité      │
                    └────────┬─────────┘
                             │
                    Query BD
                             │
                             ▼
                    ┌──────────────────┐
                    │   Supabase       │
                    │   PostgreSQL     │
                    │                  │
                    │  SELECT * WHERE  │
                    │  slug = :slug    │
                    │  AND status =    │
                    │  'published'     │
                    └────────┬─────────┘
                             │
                    Return article JSON
                             │
                             ▼
                    ┌──────────────────┐
                    │  Next.js Server  │
                    │  - Convertir MD  │
                    │  - Render page   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  HTML + CSS      │
                    │  envoyé au       │
                    │  navigateur      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Navigateur      │
                    │  - Parse HTML    │
                    │  - Apply CSS     │
                    │  - Render page   │
                    └────────┬─────────┘
                             │
                             ▼
                    Article affiché!
```

## États possibles d'un contenu

```
                    CONTENT
                       │
        ┌──────────────┼──────────────┐
        │              │              │
     DRAFT        PUBLISHED        ARCHIVED
   (Brouillon)    (Publié)         (Archivé)
        │              │              │
   Visible        Visible sur      Caché
   Admin          site public      Admin
   seulement                       seulement
        │              │              │
        └─────────────┬┴──────────────┘
                      │
              (Peut passer d'un état à un autre)
                      │
        (Supprimer définitif = Suppression BD)
```

## Checklist avant publication

- [ ] Titre pertinent et accrocheur
- [ ] Slug unique et descriptif
- [ ] Contenu complet et bien formaté
- [ ] Excerpt rempli (120-160 caractères)
- [ ] Auteur spécifié
- [ ] Catégorie sélectionnée
- [ ] Tags appropriés (3-5 max)
- [ ] Image à la Une (optionnel mais recommandé)
- [ ] Liens internes et externes valides
- [ ] Pas de typos ou erreurs
- [ ] Markdown valide (tester dans preview)
- [ ] Statut = "Publié"
- [ ] Cliquer "Sauvegarder"
- [ ] Vérifier sur le site public (/blog)

C'est prêt à publier! 🚀
