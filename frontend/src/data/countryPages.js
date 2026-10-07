/**
 * Pays disposant d'une page juridiction dédiée.
 *
 * Code ISO alpha-3 (celui de la carte Afrique) -> slug d'URL dans chaque langue.
 * Fichier sans JSX : il est aussi importé côté Node par prerender.js.
 *
 * Pour ajouter un pays : une entrée ici, son contenu dans data/juridictions/,
 * puis une entrée dans public/sitemap.xml.
 */
export const COUNTRY_PAGES = {
    COD: { fr: 'rdc', en: 'drc' },
};

export const JURISDICTION_BASE = { fr: '/juridictions/', en: '/en/jurisdictions/' };

/** Chemin de la page d'un pays, ou null s'il n'en a pas. */
export const countryPagePath = (iso, lang) =>
    COUNTRY_PAGES[iso] ? JURISDICTION_BASE[lang] + COUNTRY_PAGES[iso][lang] : null;

/** Code ISO correspondant à un slug d'URL, ou undefined. */
export const isoFromSlug = (slug, lang) =>
    Object.keys(COUNTRY_PAGES).find((iso) => COUNTRY_PAGES[iso][lang] === slug);
