import Link from 'next/link';

export default function TransformationDigitale() {
  const axes = [
    {
      icon: '🔄',
      title: 'Transformation digitale',
      description: 'Modernisation complète des processus juridiques pour plus d\'efficacité et de transparence.',
      color: 'vi'
    },
    {
      icon: '📁',
      title: 'GED & Archivage électronique',
      description: 'Gestion sécurisée et centralisée de tous vos documents avec conformité réglementaire.',
      color: 'gold'
    },
    {
      icon: '📄',
      title: 'Numérisation intelligente',
      description: 'Conversion rapide et fiable de vos documents physiques en formats numériques exploitables.',
      color: 'blue'
    },
    {
      icon: '🔐',
      title: 'Cybersécurité',
      description: 'Protection robuste de vos données sensibles avec les meilleurs standards de sécurité.',
      color: 'green'
    },
    {
      icon: '⚡',
      title: 'Innovation & IA',
      description: 'Automatisation intelligente des tâches répétitives et optimisation des workflows.',
      color: 'amber'
    },
    {
      icon: '⚖️',
      title: 'Gouvernance IA & Éthique',
      description: 'Navigation responsable et conforme des technologies d\'IA dans votre contexte juridique.',
      color: 'red'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-[calc(var(--nav-h)+80px)] pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-8">Transformation digitale</h1>
          <p className="text-xl text-[var(--text-2)] max-w-3xl mb-12">
            Accélérez votre transformation numérique juridique en accompagnant vos processus, vos équipes et votre infrastructure technologique vers l'excellence digitale.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="#axes"
              className="px-8 py-3 bg-vi text-white rounded-lg hover:bg-vi-light transition font-semibold"
            >
              Découvrir nos axes
            </Link>
            <Link
              href="/#"
              className="px-8 py-3 border border-[var(--border)] rounded-lg hover:border-vi hover:text-vi transition font-semibold"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[var(--bg-card)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="mb-8">Notre engagement</h2>
            <p className="text-lg text-[var(--text-2)] mb-6">
              Nous sommes dédiés à accompagner les institutions judiciaires, cabinets d'avocats et directions juridiques dans leur transition numérique.
            </p>
            <p className="text-lg text-[var(--text-2)]">
              Notre mission : rendre les services juridiques plus <em>efficaces</em>, plus <em>sécurisés</em> et plus <em>transparents</em> via des solutions technologiques avancées et adaptées à votre contexte.
            </p>
          </div>
        </div>
      </section>

      {/* Axes Section */}
      <section id="axes" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-16 text-center">Six axes d'accompagnement</h2>

          <div className="grid grid-cols-12 gap-6">
            {axes.map((axe, idx) => (
              <div
                key={idx}
                className="bento-card group"
              >
                <div className="text-4xl mb-6">{axe.icon}</div>
                <h3 className="mb-4 text-[var(--text-1)]">{axe.title}</h3>
                <p className="text-[var(--text-2)]">{axe.description}</p>

                {/* Colored bottom border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition rounded-b-[20px]"
                  style={{
                    background: axe.color === 'vi' ? 'var(--vi)' :
                               axe.color === 'gold' ? 'var(--gold)' :
                               axe.color === 'blue' ? 'var(--blue)' :
                               axe.color === 'green' ? 'var(--green)' :
                               axe.color === 'amber' ? 'var(--amber)' :
                               'var(--red)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[var(--bg-card)] to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 text-center">Bénéfices de votre transformation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-vi">✓ Efficacité accrue</h3>
              <p className="text-[var(--text-2)]">Réduisez les tâches manuelles et optimisez vos flux de travail juridiques.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-blue">✓ Sécurité renforcée</h3>
              <p className="text-[var(--text-2)]">Protégez vos données sensibles avec les meilleures pratiques en cybersécurité.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-gold">✓ Conformité juridique</h3>
              <p className="text-[var(--text-2)]">Respectez tous les cadres réglementaires applicables à votre secteur.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-green">✓ Transformation responsable</h3>
              <p className="text-[var(--text-2)]">Intégrez l'IA et l'innovation de façon éthique et maîtrisée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 text-center">Comment nous travaillons ensemble</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vi text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Diagnostic</h3>
                <p className="text-[var(--text-2)]">
                  Nous évaluons votre infrastructure actuelle, identifions vos besoins et définissons votre roadmap digitale.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vi text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implémentation</h3>
                <p className="text-[var(--text-2)]">
                  Nous mettons en œuvre les solutions adaptées avec un suivi étroit de chaque étape du projet.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vi text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Formation & Support</h3>
                <p className="text-[var(--text-2)]">
                  Nous formons vos équipes et assurons un support continu pour garantir l'adoption et le succès.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[var(--bg-card)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="mb-8">Commencez votre transformation</h2>
          <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto mb-12">
            Prêt à moderniser vos processus juridiques ? Nos experts sont à votre écoute pour définir une stratégie adaptée à votre contexte.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/#"
              className="px-8 py-3 bg-vi text-white rounded-lg hover:bg-vi-light transition font-semibold"
            >
              Demander une consultation
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 border border-[var(--border)] rounded-lg hover:border-vi hover:text-vi transition font-semibold"
            >
              Lire nos ressources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
