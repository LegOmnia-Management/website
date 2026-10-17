// Constantes SEO partagées (SEOHead, index.html à garder synchronisé pour sameAs)
export const BASE_URL = 'https://legomnia.com';

// Réseaux sociaux : footer + schema.org Organization (sameAs, à garder synchronisé avec index.html)
export const SOCIALS = {
    linkedin: 'https://www.linkedin.com/company/legomnia',
    instagram: 'https://www.instagram.com/p/DeMpJiUDM4p/',
    youtube: 'https://www.youtube.com/@LegOmnia-Africa',
    myreach: 'https://myreach.top/legomnia',
};

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
