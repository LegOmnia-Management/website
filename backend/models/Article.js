import mongoose from 'mongoose';
import slugify from 'slugify';

const articleSchema = new mongoose.Schema({

    title: { 
        type: String, 
        required: true, 
        trim: true
    },
    slug:  {
        type: String,
        unique: true,
        trim: true
    },
    illustration: {
        url: { 
            type: String, 
            required: true, 
            trim: true
        },
        alt: { 
            type: String,
            required: true,
            trim: true
        }
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,   // .populate('categories') pour récup infos de la catégorie
        ref: 'Category',
        required: true
        }
    ],
    intro: { 
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishedAt: {
        type: Date, 
        default: Date.now
    },
    readingTime: { 
        type: Number, 
        required: true, 
        min: 1
    },
    content: { 
        type: mongoose.Schema.Types.Mixed, 
        required: true
    }
}, { timestamps: true });

// Génération automatique du slug (titre) avant le save
articleSchema.pre('save', async function() {
  this.slug = slugify(this.title, { lower: true, strict: true, locale: 'fr' });
});

// Génération automatique du slug (titre) sur les mises à jour (PATCH)
articleSchema.pre('findOneAndUpdate', async function() {
  const update = this.getUpdate();
  if (update.title) {
    update.slug = slugify(update.title, { lower: true, strict: true, locale: 'fr' });
  }
});

export default mongoose.model('Article', articleSchema);