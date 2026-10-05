import { Link } from 'react-router-dom';

import '../assets/styles/footer.css';

import Logo from '../assets/img/logos/logoLegomnia.svg';

import useLang from '../i18n/useLang';
import fr from '../locales/fr/layout';
import en from '../locales/en/layout';

const Footer = () => {

    const { lp, t } = useLang();
    const { footer: txt } = t({ fr, en });

    return (
        <footer>
            <div className='container footer__container'>
                {/* Logo */}
                <div className="footer__logo">
                    <Link to={lp("/")}>
                        <div className='nav__logo'>
                            <span className='nav__logo--text'>legOmnia</span>
                            <img className='nav__logo--img' src={Logo} alt={txt.logoAlt} loading="lazy"/>
                        </div>
                    </Link>
                    <p>{txt.tagline}</p>
                </div>

                {/* Produits */}
                <div className="footer__items">
                    <span className='footer__items--title'>{txt.products}</span>
                    <ul>
                        <li>
                            <Link className='sublink' to={lp("/produits/omnia")}>Omnia</Link>
                        </li>
                        <li>
                            <Link className='sublink' to={lp("/produits/transformation-digitale/omniscan")}>OmniScan</Link>
                        </li>
                        <li>
                            <Link className='sublink' to={lp("/produits/transformation-digitale/geode")}>Géode</Link>
                        </li>
                        <li>
                            <Link className='sublink' to={lp("/produits/transformation-digitale/presentation")}>{txt.transformation}</Link>
                        </li>
                    </ul>
                </div>

                {/* Ressources */}
                <div className="footer__items">
                    <span className='footer__items--title'>{txt.resources}</span>
                    <ul>
                        <li>
                            <Link to={lp("/produits/use-cases")}>Use Cases</Link>
                        </li>
                        <li>
                            <Link to={lp("/juridictions")}>{txt.jurisdictions}</Link>
                        </li>
                        <li>
                            <Link to={lp("/blog/articles")}>Blog</Link>
                        </li>
                        <li>
                            <Link to={lp("/faq")}>FAQ</Link>
                        </li>
                    </ul>
                </div>

                {/* Légal */}
                <div className="footer__items">
                    <span className='footer__items--title'>{txt.legal}</span>
                    <ul>
                        <li>
                            <Link to={lp("/mentions-legales")}>{txt.legalNotice}</Link>
                        </li>
                        <li>
                            <Link to={lp("/cgu")}>{txt.terms}</Link>
                        </li>
                        <li>
                            <Link to={lp("/confidentialite")}>{txt.privacy}</Link>
                        </li>
                        <li>
                            <Link to={lp("/cookies")}>{txt.cookies}</Link>
                        </li>
                    </ul>
                </div>

                {/* Produits */}
                <div className="footer__credits">
                    <p className="footer__credits--droits">{txt.rights}</p>
                    <p className="footer__credits--contact">
                        <span>legOmnia.com</span>
                        <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;