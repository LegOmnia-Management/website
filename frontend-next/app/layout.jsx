import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  metadataBase: new URL('https://legomnia.com'),
  title: {
    default: 'LegOmnia — Recherche juridique IA pour l\'Afrique francophone',
    template: '%s | LegOmnia',
  },
  description: 'Centralisez lois, décrets et jurisprudence de 17+ pays d\'Afrique francophone. Recherche juridique par IA, veille automatisée et GED sécurisée.',
  openGraph: {
    siteName: 'LegOmnia',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    'schema-org': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LegOmnia',
      url: 'https://legomnia.com',
      logo: 'https://legomnia.com/favicon.svg',
      description: "Infrastructure juridique numérique de l'Afrique francophone.",
      sameAs: ['https://www.linkedin.com/company/legomnia'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 rue du Chevalier de la Barre',
        addressLocality: 'Paris',
        postalCode: '75018',
        addressCountry: 'FR',
      },
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script src="https://code.iconify.design/3/3.1.1/iconify.min.js" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LegOmnia',
              url: 'https://legomnia.com',
              logo: 'https://legomnia.com/favicon.svg',
              description: "Infrastructure juridique numérique de l'Afrique francophone : IA souveraine, data juridique fiable, accès au droit pour tous.",
              sameAs: ['https://www.linkedin.com/company/legomnia'],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8 rue du Chevalier de la Barre',
                addressLocality: 'Paris',
                postalCode: '75018',
                addressCountry: 'FR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://legomnia.com/contact',
              },
            }),
          }}
        />
      </head>
      <body>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
