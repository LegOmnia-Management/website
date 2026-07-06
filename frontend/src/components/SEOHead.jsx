import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://legomnia.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEOHead = ({
    title,
    description,
    canonical,
    ogImage = DEFAULT_IMAGE,
    ogType = 'website',
    structuredData,
    noIndex = false,
}) => {
    const fullTitle = title
        ? `${title} | LegOmnia`
        : 'LegOmnia — Recherche juridique IA pour l\'Afrique francophone';

    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : null;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:site_name" content="LegOmnia" />
            <meta property="og:locale" content="fr_FR" />

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
