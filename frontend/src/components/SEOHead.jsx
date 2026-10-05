import { Helmet } from 'react-helmet-async';

import useLang from '../i18n/useLang';
import { localizePath } from '../i18n/routes';

const BASE_URL = 'https://legomnia.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const DEFAULT_TITLES = {
    fr: 'LegOmnia — Recherche juridique IA pour l\'Afrique francophone',
    en: 'LegOmnia — AI legal research for French-speaking Africa',
};
const OG_LOCALES = { fr: 'fr_FR', en: 'en_US' };

// `canonical` peut être fourni en chemin français ou anglais :
// il est converti dans la langue courante, et les alternates hreflang
// (fr / en / x-default) sont générés automatiquement.

const SEOHead = ({
    title,
    description,
    canonical,
    ogImage = DEFAULT_IMAGE,
    ogType = 'website',
    structuredData,
    noIndex = false,
}) => {
    const { lang } = useLang();

    const fullTitle = title
        ? `${title} | LegOmnia`
        : DEFAULT_TITLES[lang];

    const urlFor = (l) => `${BASE_URL}${localizePath(canonical, l)}`;
    const canonicalUrl = canonical ? urlFor(lang) : null;

    return (
        <Helmet htmlAttributes={{ lang }}>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            {canonicalUrl && <link rel="alternate" hrefLang="fr" href={urlFor('fr')} />}
            {canonicalUrl && <link rel="alternate" hrefLang="en" href={urlFor('en')} />}
            {canonicalUrl && <link rel="alternate" hrefLang="x-default" href={urlFor('fr')} />}

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:site_name" content="LegOmnia" />
            <meta property="og:locale" content={OG_LOCALES[lang]} />
            <meta property="og:locale:alternate" content={OG_LOCALES[lang === 'fr' ? 'en' : 'fr']} />

            {/* Twitter / X Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured data JSON-LD */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
