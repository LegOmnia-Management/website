'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[var(--bg)] to-[var(--bg-card)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-particles" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className="badge inline-flex mb-8 animate-pulse"
          style={{ animationDelay: '0.1s' }}
        >
          Bienvenue à LegOmnia
        </div>

        {/* Main heading */}
        <h1
          className="mb-8 text-5xl md:text-6xl lg:text-7xl"
          style={{
            animation: 'slideDown 0.6s ease-out 0.2s backwards'
          }}
        >
          Le droit africain entre<br />dans une nouvelle ère.
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-[var(--text-2)] max-w-3xl mx-auto mb-12"
          style={{
            animation: 'slideDown 0.6s ease-out 0.3s backwards'
          }}
        >
          LegOmnia transforme la donnée juridique en intelligence exploitable.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          style={{
            animation: 'slideDown 0.6s ease-out 0.4s backwards'
          }}
        >
          <Link
            href="/"
            className="btn btn-vi btn-lg"
          >
            → Explorer la plateforme
          </Link>
          <Link
            href="#inscription"
            className="btn btn-outline btn-lg"
          >
            → Demander une démo
          </Link>
        </div>

        {/* Trust signals */}
        <div
          className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12 text-sm text-[var(--text-2)]"
          style={{
            animation: 'slideDown 0.6s ease-out 0.5s backwards'
          }}
        >
          <span>7 jours gratuits</span>
          <span>·</span>
          <span>Sans engagement</span>
          <span>·</span>
          <span>Données souveraines</span>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          style={{
            animation: 'slideDown 0.6s ease-out 0.6s backwards'
          }}
        >
          <div>
            <div className="counter text-2xl md:text-3xl mb-2" data-target="50000">
              50 000+
            </div>
            <div className="text-xs text-[var(--text-3)]">textes</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl mb-2 text-[var(--vi)]">17+</div>
            <div className="text-xs text-[var(--text-3)]">pays</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl mb-2 text-[var(--vi)]">0,3s</div>
            <div className="text-xs text-[var(--text-3)]">réponse</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl mb-2 text-[var(--vi)]">98%</div>
            <div className="text-xs text-[var(--text-3)]">satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
