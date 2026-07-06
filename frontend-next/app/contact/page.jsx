import ContactClient from '@/components/pages/ContactClient';

export const metadata = {
  title: "Contacter l'équipe LegOmnia | Demander une démo",
  description: "Une question sur la plateforme, un partenariat, une démonstration ? Contactez l'équipe LegOmnia, basée à Paris et tournée vers l'Afrique francophone.",
  alternates: { canonical: 'https://legomnia.com/contact' },
  openGraph: { url: 'https://legomnia.com/contact' },
};

export default function Page() {
  return <ContactClient />;
}
