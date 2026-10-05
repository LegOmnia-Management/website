/**
 * Correspondance des URL françaises (langue par défaut, sans préfixe)
 * et anglaises (préfixe /en, chemins traduits).
 *
 * Pour ajouter une page : ajouter une entrée ici, puis la route dans App.jsx
 * (les routes sont générées automatiquement dans les deux langues).
 */
export const LANGS = ['fr', 'en'];
export const DEFAULT_LANG = 'fr';

export const ROUTES = {
    home:            { fr: '/',                                              en: '/en' },
    omnia:           { fr: '/produits/omnia',                                en: '/en/products/omnia' },
    transformation:  { fr: '/produits/transformation-digitale/presentation', en: '/en/products/digital-transformation/overview' },
    geode:           { fr: '/produits/transformation-digitale/geode',        en: '/en/products/digital-transformation/geode' },
    omniscan:        { fr: '/produits/transformation-digitale/omniscan',     en: '/en/products/digital-transformation/omniscan' },
    useCases:        { fr: '/produits/use-cases',                            en: '/en/products/use-cases' },
    cgu:             { fr: '/cgu',                                           en: '/en/terms' },
    confidentialite: { fr: '/confidentialite',                               en: '/en/privacy' },
    cookies:         { fr: '/cookies',                                       en: '/en/cookies' },
    contact:         { fr: '/contact',                                       en: '/en/contact' },
    faq:             { fr: '/faq',                                           en: '/en/faq' },
    juridictions:    { fr: '/juridictions',                                  en: '/en/jurisdictions' },
    waitlist:        { fr: '/liste-attente',                                 en: '/en/waitlist' },
    mentionsLegales: { fr: '/mentions-legales',                              en: '/en/legal-notice' },
    articles:        { fr: '/blog/articles',                                 en: '/en/blog/articles' },
    ressources:      { fr: '/blog/ressources',                               en: '/en/blog/resources' },
    webinaires:      { fr: '/blog/webinaires',                               en: '/en/blog/webinars' },
};

// Routes à paramètre : préfixe FR -> préfixe EN (le reste du chemin est conservé)
const PREFIX_ROUTES = [
    { fr: '/blog/articles/', en: '/en/blog/articles/' },
];

const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

/** Langue d'un chemin : 'en' s'il commence par /en, sinon 'fr'. */
export const getLangFromPath = (pathname) =>
    pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';

/**
 * Traduit un chemin (dans n'importe quelle langue) vers la langue cible.
 * Conserve la query string et le hash.
 */
export const localizePath = (path, lang) => {
    const match = path.match(/^([^?#]*)(.*)$/);
    const pathname = normalize(match[1] || '/');
    const suffix = match[2];
    const from = getLangFromPath(pathname);

    for (const route of Object.values(ROUTES)) {
        if (route[from] === pathname) return route[lang] + suffix;
    }
    for (const route of PREFIX_ROUTES) {
        if (pathname.startsWith(route[from])) {
            return route[lang] + pathname.slice(route[from].length) + suffix;
        }
    }
    // Chemin inconnu : simple ajout / retrait du préfixe
    if (from === lang) return pathname + suffix;
    if (lang === 'en') return (pathname === '/' ? '/en' : '/en' + pathname) + suffix;
    return (pathname.replace(/^\/en/, '') || '/') + suffix;
};
