import Link from 'next/link';

export default function GeodePage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/transformation-digitale" className="text-[var(--vi)] hover:text-[var(--vi-light)] mb-8 inline-block">
          ← Retour à Transformation digitale
        </Link>

        <h1 className="mb-8">Géode — Gestion de Documents Juridiques</h1>
        <p className="text-xl text-[var(--text-2)] mb-12">
          Le système de gestion documentaire complet pour les organisations juridiques. Organisez, sécurisez et exploitez tous vos documents avec facilité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">📁 Organisation</h3>
            <p className="text-[var(--text-2)]">Classez tous vos documents avec une structure flexible et intuitive.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🔐 Sécurité</h3>
            <p className="text-[var(--text-2)]">Protection avancée avec contrôle d'accès et chiffrement des données.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🔍 Recherche</h3>
            <p className="text-[var(--text-2)]">Trouvez instantanément les documents dont vous avez besoin.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">⚖️ Conformité</h3>
            <p className="text-[var(--text-2)]">Respect automatique des normes réglementaires et archivage électronique.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🤝 Collaboration</h3>
            <p className="text-[var(--text-2)]">Travail d'équipe simplifié avec permissions et versioning.</p>
          </div>
          <div className="bg-[var(--bg-card)] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">📊 Analytics</h3>
            <p className="text-[var(--text-2)]">Insights sur l'utilisation et optimisation de votre documentaire.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-6">Prêt à transformer votre gestion documentaire ?</h2>
          <button className="px-8 py-3 bg-[var(--vi)] text-white rounded-lg font-semibold hover:bg-[var(--vi-light)] transition">
            Démarrer une démo gratuite
          </button>
        </div>
      </div>
    </div>
  );
}
