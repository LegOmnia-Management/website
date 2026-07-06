import HomeClient from '@/components/pages/HomeClient';

export const metadata = {
  title: 'LegOmnia — Recherche juridique IA pour l\'Afrique francophone',
  description: 'Centralisez lois, décrets et jurisprudence de 17+ pays d\'Afrique francophone. Recherche juridique par IA, veille automatisée et GED sécurisée. Demandez une démo.',
  alternates: { canonical: 'https://legomnia.com/' },
  openGraph: {
    title: 'LegOmnia — Recherche juridique IA pour l\'Afrique francophone',
    description: 'Centralisez lois, décrets et jurisprudence de 17+ pays d\'Afrique francophone. Recherche juridique par IA, veille automatisée et GED sécurisée.',
    url: 'https://legomnia.com/',
  },
};

export default function Page() {
  return <HomeClient />;
}
