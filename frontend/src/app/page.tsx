import Link from 'next/link';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      {/* Hero Section - from main.html */}
      <Hero />

      {/* Positionnement Fort */}
      <section className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-2)] mb-4">POSITIONNEMENT FORT</p>
            <h2>Une vision simple : rendre le droit en Afrique francophone enfin accessible, structuré et actionnable.</h2>
          </div>
        </div>
      </section>

      {/* Notre Couverture */}
      <section className="py-20 px-6 bg-[var(--bg-card)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-2)] mb-4">NOTRE COUVERTURE</p>
            <h2>Notre couverture en Afrique francophone</h2>
          </div>
          <div className="bg-[var(--bg)] rounded-xl p-8 text-center text-[var(--text-2)]">
            <p>Carte interactive des 17+ pays - En cours de migration</p>
          </div>
        </div>
      </section>

      {/* Le Pipeline Unique LegOmnia */}
      <section className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-2)] mb-4">LE PIPELINE UNIQUE LEGOMNIA</p>
            <h2>De la donnée non digitalisée à l'intelligence juridique.</h2>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-[var(--bg-card)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-2)] mb-4">USE CASES</p>
            <h2>Une plateforme, des usages stratégiques.</h2>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 text-center">Actualités et insights juridiques</h2>
          <div className="text-center text-[var(--text-2)]">
            <p className="mb-8">Découvrez les derniers articles sur l'actualité juridique de l'Afrique francophone.</p>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 btn btn-vi"
            >
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscription" className="py-20 px-6 bg-[var(--vi)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Prenez une avance décisive</h2>
          <p className="text-white text-lg mb-8">Rejoignez les premiers utilisateurs de LegOmnia et accédez à la donnée juridique de l'Afrique francophone.</p>
          <button className="px-8 py-3 bg-white text-[var(--vi)] rounded-lg font-semibold hover:bg-gray-100 transition">
            Demander une démo
          </button>
        </div>
      </section>
    </>
  );
}
