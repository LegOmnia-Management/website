import OmniaContent from '@/components/pages/OmniaContent';

export const metadata = {
  title: 'OMNIA : moteur de recherche juridique par IA',
  description: "Posez vos questions juridiques en langage naturel : OMNIA interroge des centaines de milliers de textes OHADA et nationaux et cite ses sources. Essai 7 jours.",
  alternates: { canonical: 'https://legomnia.com/produits/omnia' },
  openGraph: { url: 'https://legomnia.com/produits/omnia' },
};

export default function Page() {
  return <OmniaContent />;
}
