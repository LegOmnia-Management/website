import { Helmet } from 'react-helmet-async';

import useLang from '../i18n/useLang';
import { localizePath } from '../i18n/routes';

import { BASE_URL, OG_IMAGES, X_HANDLE } from '../data/siteMeta';

const absoluteUrl = (u) => (/^https?:\/\//.test(u) ? u : `${BASE_URL}${u}`);

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
    ogImage = OG_IMAGES.default, // chemin (/og/xxx.jpg) ou URL absolue ; voir OG_IMAGES
    ogType = 'website',
    structuredData,
    noIndex = false,
    contentLang, // langue du contenu si différente de celle du site (ex. article en anglais)
}) => {
    const { lang } = useLang();

    const fullTitle = title
        ? `${title} | LegOmnia`
        : DEFAULT_TITLES[lang];

    const imageUrl = absoluteUrl(ogImage);
    const urlFor = (l) => `${BASE_URL}${localizePath(canonical, l)}`;
    const canonicalUrl = canonical ? urlFor(lang) : null;

    return (
        <Helmet htmlAttributes={{ lang: contentLang || lang }}>
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
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:site_name" content="LegOmnia" />
            <meta property="og:locale" content={OG_LOCALES[lang]} />
            <meta property="og:locale:alternate" content={OG_LOCALES[lang === 'fr' ? 'en' : 'fr']} />

            {/* Twitter / X Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={fullTitle} />
            <meta name="twitter:site" content={X_HANDLE} />
            <meta name="twitter:creator" content={X_HANDLE} />

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
