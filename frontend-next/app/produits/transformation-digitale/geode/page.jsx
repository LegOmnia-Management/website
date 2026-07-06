import GeodeClient from '@/components/pages/GeodeClient';

export const metadata = {
  title: 'Géode : GED intelligente et cartographie juridique',
  description: "Explorez l'environnement juridique et réglementaire de l'Afrique francophone : normes OHADA, CEDEAO, CEMAC, UEMOA et droits nationaux, en un seul outil.",
  alternates: { canonical: 'https://legomnia.com/produits/transformation-digitale/geode' },
  openGraph: {
    url: 'https://legomnia.com/produits/transformation-digitale/geode',
  },
};

export default function Page() {
  return <GeodeClient />;
}
