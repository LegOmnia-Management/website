// Constantes SEO partagées (SEOHead, index.html à garder synchronisé pour sameAs)
export const BASE_URL = 'https://legomnia.com';

// Réseaux sociaux : utilisés dans le schema.org Organization (sameAs) et twitter:site
// TODO : vérifier que les URL Instagram et X correspondent bien aux comptes officiels
export const SOCIALS = {
    linkedin: 'https://www.linkedin.com/company/legomnia',
    instagram: 'https://www.instagram.com/legomnia',
    x: 'https://x.com/legomnia',
};
export const X_HANDLE = '@legomnia';

// Images de partage (1200×630, dans public/og/) :
// une par page produit, une pour l'app, une générique (landing, pages légales, oublis)
export const OG_IMAGES = {
    default: '/og/default.jpg',
    app: '/og/app.jpg',
    omnia: '/og/omnia.jpg',
    geode: '/og/geode.jpg',
    omniscan: '/og/omniscan.jpg',
    transformation: '/og/transformation.jpg',
    useCases: '/og/use-cases.jpg',
};
