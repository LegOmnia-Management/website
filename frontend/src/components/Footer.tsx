'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 px-6 bg-[var(--bg-card)]">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--text-1)]">LegOmnia</h3>
            <p className="text-[var(--text-2)] text-sm">
              Infrastructure juridique de l'Afrique francophone
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-1)]">Produits</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/omnia" className="text-sm text-[var(--text-2)] hover:text-[var(--vi)]">
                  OMNIA
                </Link>
              </li>
              <li>
                <Link href="/transformation-digitale/geode" className="text-sm text-[var(--text-2)] hover:text-[var(--vi)]">
                  Géode
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-1)]">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-[var(--text-2)] hover:text-[var(--vi)]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-sm text-[var(--text-2)] hover:text-[var(--vi)]">
                  Cas d'usage
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-1)]">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[var(--text-2)] hover:text-[var(--vi)]">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--text-2)] hover:text-[var(--vi)]">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[var(--text-3)]">
            © 2025 LegOmnia. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-[var(--text-3)] hover:text-[var(--vi)] transition">
              Twitter
            </a>
            <a href="#" className="text-[var(--text-3)] hover:text-[var(--vi)] transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
