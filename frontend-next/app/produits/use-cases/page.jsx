import { Suspense } from 'react';
import UseCasesClient from '@/components/pages/UseCasesClient';

export const metadata = {
  title: "Cas d'usage LegOmnia : avocats, juristes, institutions",
  description: "Découvrez comment avocats, juristes d'entreprise, institutions publiques et investisseurs utilisent LegOmnia pour accélérer leur recherche juridique en Afrique francophone.",
  alternates: { canonical: 'https://legomnia.com/produits/use-cases' },
};

export default function Page() {
  return (
    <Suspense>
      <UseCasesClient />
    </Suspense>
  );
}
