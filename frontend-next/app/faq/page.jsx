import FaqContent from '@/components/pages/FaqContent';

export const metadata = {
  title: 'FAQ LegOmnia — Questions fréquentes',
  description: 'Retrouvez les réponses aux questions fréquentes sur LegOmnia : fonctionnement, couverture juridique, abonnements et accès à la plateforme de recherche juridique IA.',
  alternates: { canonical: 'https://legomnia.com/faq' },
};

export default function Page() {
  return <FaqContent />;
}
