# Guide d'utilisation du CMS legOmnia

## Introduction

Ce guide vous explique comment utiliser le système de gestion de contenu (CMS) de legOmnia pour gérer vos articles et vidéos.

## Accès à l'interface admin

1. Rendez-vous sur `http://localhost:3000/admin` (en développement)
2. Vous verrez le dashboard avec les statistiques principales

## Gestion des articles

### Créer un nouvel article

1. Cliquez sur **"+ Nouvel article"** dans le menu latéral
2. Remplissez les champs suivants:

#### Champs obligatoires
- **Titre**: Le titre de votre article (s'affichera en haut de la page)
- **Slug**: URL-friendly de votre article (ex: `mon-article-juridique`)
- **Contenu**: Le corps de l'article en Markdown

#### Champs optionnels
- **Auteur**: Votre nom ou le nom de l'auteur
- **Catégorie**: Catégorie (ex: "Droit du travail", "Droit civil")
- **Excerpt**: Résumé court de l'article (120-160 caractères recommandé)
- **Tags**: Mots-clés séparés par des virgules (ex: `juridique, afrique, droit`)
- **Image à la Une**: URL d'une image d'en-tête

#### Statut
- **Brouillon**: L'article est visible uniquement pour vous
- **Publié**: L'article est visible pour tout le monde

### Éditeur Markdown

L'éditeur Markdown offre une interface de **split-view**:
- **À gauche**: Zone d'édition avec suggestions
- **À droite**: Aperçu en temps réel

#### Syntaxe Markdown courante

```markdown
# Titre 1
## Titre 2
### Titre 3

**Texte en gras**
*Texte en italique*
***Texte en gras et italique***

- Liste à puces
- Élément 2
  - Sous-élément

1. Liste numérotée
2. Élément 2

[Lien vers Google](https://google.com)

![Description de l'image](https://example.com/image.jpg)

> Citation ou bloc important

\`\`\`python
# Code block
def hello():
    print("Hello World")
\`\`\`

| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Données   | Données   |
```

### Modifier un article existant

1. Allez dans **Admin > Articles**
2. Cliquez sur **"Éditer"** à côté de l'article
3. Modifiez les champs souhaités
4. Cliquez sur **"Sauvegarder"**

### Supprimer un article

1. Allez dans **Admin > Articles**
2. Cliquez sur **"Supprimer"** à côté de l'article
3. Confirmez la suppression (⚠️ Attention: irréversible)

### Publier un brouillon

- Un article en brouillon peut être publié via le champ **"Statut"**
- Changez le statut de "Brouillon" à "Publié"
- Cliquez sur **"Sauvegarder"**

## Gestion des vidéos

### Ajouter une nouvelle vidéo

1. Cliquez sur **"+ Nouvelle vidéo"** dans le menu latéral
2. Remplissez les champs:
   - **Titre**: Nom de la vidéo
   - **Description**: Description détaillée
   - **URL de la vidéo**: Lien YouTube, Vimeo, etc.
   - **URL de la miniature**: Lien vers l'image thumbnail
   - **Durée** (secondes): Durée en secondes
   - **Catégorie**: Catégorie (ex: "Formation", "Actualités")
   - **Tags**: Mots-clés séparés par des virgules
   - **Statut**: Brouillon ou Publié

### Intégrer des vidéos externes

#### YouTube
```
https://www.youtube.com/embed/VIDEO_ID
```

#### Vimeo
```
https://vimeo.com/VIDEO_ID
```

#### Autre
Utilisez le lien d'intégration fourni par le service

## Bonnes pratiques

### Articles

1. **Titre**: Clair, concis et descriptif (40-60 caractères)
2. **Slug**: Minuscules, tirets pour les espaces (no-accents)
3. **Excerpt**: Résumé accrocheur (120-160 caractères)
4. **Contenu**:
   - Utilisez des titres appropriés (H2, H3)
   - Structurez avec des listes et paragraphes
   - Incluez des citations pertinentes
   - Ajouter des liens internes quand possible

5. **Tags**: 3-5 tags pertinents par article
6. **Catégorie**: Une catégorie principale

### Vidéos

1. **Titre**: Descriptif et accrocheur
2. **Miniature**: Image claire et lisible
3. **Description**: Complète mais concise
4. **Durée**: En secondes (ex: 3min 45s = 225 secondes)

## Conseils pour le SEO

- Utilisez des mots-clés pertinents dans le titre et excerpt
- Structurez votre contenu avec des titres (H2, H3)
- Écrivez au moins 800 mots pour les articles importants
- Utilisez des liens internes vers d'autres articles
- Créez des slugs descriptifs et uniques

## Affichage public

### Articles publiés
- Visible sur `/blog`
- Accessible via `/blog/[slug]`
- Les statistiques (vues, temps de lecture) sont automatiques

### Vidéos publiées
- Visible dans la section vidéos
- Intégrées avec lecteur vidéo natif
- Compteur de vues en temps réel

## Troubleshooting

### Je n'arrive pas à sauvegarder un article
- Vérifiez que tous les champs obligatoires sont remplis
- Le slug doit être unique
- Vérifiez votre connexion internet

### Le preview ne s'affiche pas
- Rafraîchissez la page
- Vérifiez la syntaxe Markdown
- Assurez-vous que le Markdown est valide

### Les images ne s'affichent pas
- Vérifiez l'URL de l'image
- L'URL doit être une URL complète (https://...)
- L'image doit être accessible publiquement

## Support

Pour des questions ou problèmes, contactez l'équipe technique.
