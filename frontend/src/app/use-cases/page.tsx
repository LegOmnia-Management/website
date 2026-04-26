import Link from 'next/link';

export default function UseCasesPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[var(--vi)] hover:text-[var(--vi-light)] mb-8 inline-block">
          ← Retour à l'accueil
        </Link>

        <h1 className="mb-8">Cas d'usage LegOmnia</h1>
        <p className="text-xl text-[var(--text-2)] mb-12">
          Découvrez comment les organisations utilisent LegOmnia pour transformer leur activité juridique.
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Cabinets d'avocats</h3>
            <p className="text-[var(--text-2)] mb-4">
              Accédez instantanément aux textes juridiques et jurisprudences de 17+ pays pour servir vos clients mieux et plus vite.
            </p>
            <ul className="list-disc list-inside text-[var(--text-2)] space-y-2">
              <li>Recherche juridique accélérée</li>
              <li>Accès à jour aux législations</li>
              <li>Gestion documentaire sécurisée</li>
              <li>Collaboration d'équipe facilitée</li>
            </ul>
          </div>

          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Entreprises et conformité</h3>
            <p className="text-[var(--text-2)] mb-4">
              Maintenez la conformité réglementaire sur tous vos marchés africains avec une source unique de vérité juridique.
            </p>
            <ul className="list-disc list-inside text-[var(--text-2)] space-y-2">
              <li>Suivi réglementaire centralisé</li>
              <li>Alertes sur changements législatifs</li>
              <li>Documentation de conformité</li>
              <li>Support multi-juridictions</li>
            </ul>
          </div>

          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Gouvernements et institutions</h3>
            <p className="text-[var(--text-2)] mb-4">
              Centralisez et harmonisez l'information juridique pour une meilleure gouvernance et accessibilité.
            </p>
            <ul className="list-disc list-inside text-[var(--text-2)] space-y-2">
              <li>Accès public transparent aux textes</li>
              <li>Archivage sécurisé des lois</li>
              <li>Harmonisation régionale</li>
              <li>Intelligence juridique avancée</li>
            </ul>
          </div>

          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Organisations non-gouvernementales</h3>
            <p className="text-[var(--text-2)] mb-4">
              Renforcez vos capacités d'advocacy et de protection des droits avec des données juridiques fiables.
            </p>
            <ul className="list-disc list-inside text-[var(--text-2)] space-y-2">
              <li>Recherche juridique robuste</li>
              <li>Suivi des droits humains</li>
              <li>Documentation probante</li>
              <li>Transparence juridique</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-6">Découvrez comment LegOmnia peut transformer votre organisation</h2>
          <button className="px-8 py-3 bg-[var(--vi)] text-white rounded-lg font-semibold hover:bg-[var(--vi-light)] transition">
            Demander une consultation
          </button>
        </div>
      </div>
    </div>
  );
}
