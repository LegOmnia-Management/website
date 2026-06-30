import mongoose from 'mongoose';
import slugify from 'slugify';
    
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            unique: true,
            trim: true
        },
        color: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [/^#[0-9A-Fa-f]{6}$/, 'La couleur doit être un code hexadécimal valide (#rrggbb)']
        }
    },
    {
        timestamps: true  // ajout "createdAt" + "updateAt"
    }
);

// Génération automatique du slug avant chaque save
categorySchema.pre('save', async function() {
    this.slug = slugify(this.name, { lower: true, strict: true, locale: 'fr' });
});

// Génération automatique du slug sur les mises à jour (PATCH)
categorySchema.pre('findOneAndUpdate', async function() {
    const update = this.getUpdate();
    if (update.name) {
      update.slug = slugify(update.name, { lower: true, strict: true, locale: 'fr' });
    }
});

export default mongoose.model("Category", categorySchema);