import JuridictionsContent from '@/components/pages/JuridictionsContent';

export const metadata = {
  title: 'Juridictions et pays couverts par LegOmnia',
  description: 'LegOmnia couvre 17+ pays d\'Afrique francophone : OHADA, CEDEAO, CEMAC, UEMOA, jurisprudence CCJA et droits nationaux.',
  alternates: { canonical: 'https://legomnia.com/juridictions' },
};

export default function Page() {
  return <JuridictionsContent />;
}
