import Link from 'next/link';
import Logo from '@/assets/img/logos/logoLegomnia.svg';

export default function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__logo">
          <Link href="/">
            <div className="nav__logo">
              <span className="nav__logo--text">legOmnia</span>
              <img className="nav__logo--img" src={Logo} alt="Logo legOmnia" loading="lazy" />
            </div>
          </Link>
          <p>Infrastructure juridique de l&apos;Afrique francophone</p>
        </div>

        <div className="footer__items">
          <span className="footer__items--title">Produits</span>
          <ul>
            <li><Link className="sublink" href="/produits/omnia">Omnia</Link></li>
            <li><Link className="sublink" href="/produits/transformation-digitale/omniscan">OmniScan</Link></li>
            <li><Link className="sublink" href="/produits/transformation-digitale/geode">Géode</Link></li>
            <li><Link className="sublink" href="/produits/transformation-digitale/presentation">Transformation digitale</Link></li>
          </ul>
        </div>

        <div className="footer__items">
          <span className="footer__items--title">Ressources</span>
          <ul>
            <li><Link href="/produits/use-cases">Use Cases</Link></li>
            <li><Link href="/juridictions">Juridictions</Link></li>
            <li><Link href="/blog/articles">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer__items">
          <span className="footer__items--title">Légal</span>
          <ul>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/cgu">CGU</Link></li>
            <li><Link href="/confidentialite">Confidentialité</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>

        <div className="footer__credits">
          <p className="footer__credits--droits">© 2026 LegOmnia · Tous droits réservés</p>
          <p className="footer__credits--contact">
            <span>legOmnia.com</span>
            <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
