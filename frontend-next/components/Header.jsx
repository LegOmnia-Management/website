'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import Logo from '@/assets/img/logos/logoLegomnia.svg';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(null);
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  const toggleMenu = (menu) => {
    setMenuOpen(menuOpen === menu ? null : menu);
  };

  const toggleSubMenu = (e, menu) => {
    const next = e.target.nextElementSibling;
    if (subMenuOpen === menu) {
      setSubMenuOpen(null);
      if (next) next.style.height = '';
    } else {
      setSubMenuOpen(menu);
      if (next) next.style.height = next.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    setMenuOpen(null);
    setSubMenuOpen(null);
  }, [pathname]);

  return (
    <header>
      <div className="container header__container">
        <Link href="/">
          <div className="nav__logo">
            <span className="nav__logo--text">legOmnia</span>
            <img className="nav__logo--img" src={Logo} alt="Logo legOmnia" loading="lazy" />
          </div>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav--list">
            <li>
              <button
                onClick={() => toggleMenu('products')}
                className={`link has-sublist ${menuOpen === 'products' ? 'open' : ''}`}
              >
                Produits
              </button>
              <ul className="header__nav--sublist">
                <li>
                  <Link className="sublink" href="/produits/omnia">
                    Omnia
                    <p>la plateforme de recherche juridique</p>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={(e) => toggleSubMenu(e, 'transformation')}
                    className={`sublink has-sublist ${subMenuOpen === 'transformation' ? 'open' : ''}`}
                  >
                    Transformation digitale
                  </button>
                  <ul className="header__nav--sublist2">
                    <li>
                      <Link className="sublink" href="/produits/transformation-digitale/presentation">
                        Présentation générale
                      </Link>
                    </li>
                    <li>
                      <Link className="sublink" href="/produits/transformation-digitale/geode">
                        Géode
                      </Link>
                    </li>
                    <li>
                      <Link className="sublink" href="/produits/transformation-digitale/omniscan">
                        OmniScan
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="sublink" href="/produits/use-cases">
                    Use Cases
                    <p>de réels articles de Use Case</p>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <button
                onClick={() => toggleMenu('blog')}
                className={`link has-sublist ${menuOpen === 'blog' ? 'open' : ''}`}
              >
                Blog
              </button>
              <ul className="header__nav--sublist">
                <li>
                  <Link className="sublink" href="/blog/articles">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className="sublink" href="/blog/webinaires">
                    Webinaires
                  </Link>
                </li>
                <li>
                  <Link className="sublink" href="/blog/ressources">
                    Ressources
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="link" href="/contact">
                Nous contacter
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <Link className="ui__btn" href="/contact">
            Démo
          </Link>
        </div>
      </div>
    </header>
  );
}
