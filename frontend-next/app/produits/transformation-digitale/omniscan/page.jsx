import OmniscanContent from '@/components/pages/OmniscanContent';

export const metadata = {
  title: 'OmniScan : analyse IA de contrats et documents juridiques',
  description: "Analysez, synthétisez et comparez vos contrats et actes juridiques grâce à l'IA. GED intelligente adaptée aux cabinets et institutions africains.",
  alternates: { canonical: 'https://legomnia.com/produits/transformation-digitale/omniscan' },
  openGraph: {
    url: 'https://legomnia.com/produits/transformation-digitale/omniscan',
  },
};

export default function Page() {
  return <OmniscanContent />;
}
