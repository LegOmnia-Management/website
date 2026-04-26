import Link from 'next/link';

export default function OmniaPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[var(--vi)] hover:text-[var(--vi-light)] mb-8 inline-block">
          ← Retour à l'accueil
        </Link>

        <h1 className="mb-8">OMNIA — Plateforme Juridique Centrale</h1>
        <p className="text-xl text-[var(--text-2)] mb-12">
          OMNIA est le cœur de LegOmnia, connectant les professionnels du droit aux ressources juridiques de 17+ pays d'Afrique francophone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Contenu riche</h3>
            <p className="text-[var(--text-2)]">50 000+ textes juridiques indexés et mis à jour régulièrement.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Recherche puissante</h3>
            <p className="text-[var(--text-2)]">Trouvez les informations juridiques en moins de 0,3 secondes.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">IA intégrée</h3>
            <p className="text-[var(--text-2)]">Analysez et comprenez les textes juridiques avec nos outils IA.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Couverture régionale</h3>
            <p className="text-[var(--text-2)]">Toute l'Afrique francophone au bout de vos doigts.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-6">Prêt à commencer ?</h2>
          <button className="px-8 py-3 bg-[var(--vi)] text-white rounded-lg font-semibold hover:bg-[var(--vi-light)] transition">
            Demander une démo
          </button>
        </div>
      </div>
    </div>
  );
}
