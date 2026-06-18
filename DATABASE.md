# Schéma de la base de données — Legomnia

Base de données **MongoDB**, gérée via **Mongoose**.

---

## Collection : `contacts`

Stocke les demandes envoyées depuis le formulaire de contact du site (`/contact`).

Modèle Mongoose : `backend/models/Contact.js`

### Champs

| Champ | Type | Obligatoire | Contraintes | Description |
|-------|------|-------------|-------------|--------------|
| `_id` | ObjectId | auto | généré par MongoDB | Identifiant unique du document |
| `firstName` | String | ✅ | 2 à 50 caractères, trim | Prénom du contact |
| `lastName` | String | ✅ | 2 à 50 caractères, trim | Nom du contact |
| `email` | String | ✅ | format email, trim, minuscules | Adresse e-mail du contact |
| `phone` | String | ✅ | format `+?[0-9 ]{7,20}`, trim | Numéro de téléphone |
| `company` | String | ❌ | max 100 caractères, trim, `null` par défaut | Entreprise du contact |
| `subject` | String | ✅ | une des 5 valeurs ci-dessous | Sujet de la demande |
| `message` | String | ✅ | min 10 caractères, trim | Contenu du message |
| `cguAccepted` | String | ✅ | — | Valeur `"on"` confirmant l'acceptation des CGU |
| `cguAcceptedAt` | Date | ❌ | défaut : date de création | Date d'acceptation des CGU |
| `createdAt` | Date | auto | généré par `timestamps: true` | Date de création du document |
| `updatedAt` | Date | auto | généré par `timestamps: true` | Date de dernière modification |

### Valeurs possibles pour `subject`

- `Demande d'information`
- `Demande de démo`
- `Partenariat`
- `Support technique`
- `Autre`

### Exemple de document

```json
{
  "_id": "665f1a2b3c4d5e6f7a8b9c0d",
  "firstName": "Jeanne",
  "lastName": "Dupont",
  "email": "jeanne.dupont@exemple.com",
  "phone": "+33 6 12 34 56 78",
  "company": "Cabinet Dupont & Associés",
  "subject": "Demande de démo",
  "message": "Bonjour, je souhaiterais obtenir une démonstration de l'outil Omnia.",
  "cguAccepted": "on",
  "cguAcceptedAt": "2026-06-15T14:05:00.000Z",
  "createdAt": "2026-06-15T14:05:00.000Z",
  "updatedAt": "2026-06-15T14:05:00.000Z"
}
```

---

## Validation

La validation se fait à deux niveaux :

1. **Backend (Express-validator)** — `backend/validators/contact.validator.js`, appliquée avant la création du document (règles identiques à celles du schéma Mongoose : longueur, format e-mail, format téléphone, sujet dans la liste, CGU acceptées).
2. **Base de données (Mongoose)** — le schéma applique une seconde fois ces contraintes (`required`, `minlength`, `maxlength`, `match`, `enum`) comme garde-fou final.

> Le champ `captchaToken` (token Cloudflare Turnstile) est envoyé par le frontend mais **n'est jamais stocké** en base — il est extrait du `req.body` côté contrôleur avant la création du document.

---

## Index

Aucun index personnalisé n'est défini actuellement (en dehors de l'`_id` natif de MongoDB). À envisager si le volume de données augmente :

- Index sur `email` (recherche de doublons / historique par contact)
- Index sur `createdAt` (tri des demandes les plus récentes, déjà utilisé dans `readContacts`)

---

## Évolutions futures

Cette base ne contient pour l'instant qu'une seule collection (`contacts`). Si de nouvelles fonctionnalités sont ajoutées (comptes utilisateurs, articles de blog, etc.), créer un nouveau modèle dans `backend/models/` et l'exporter dans `backend/models/index.js`, puis documenter le schéma correspondant dans ce fichier.
