import { Link } from 'react-router-dom';

import '../assets/styles/footer.css';

import Logo from '../assets/img/logos/logoLegomnia.svg';

const Footer = () => {
    return (
        <footer>
            <div className='container footer__container'>
                {/* Logo */}
                <div className="footer__logo">
                    <Link to="/">
                        <div className='nav__logo'>
                            <span className='nav__logo--text'>legOmnia</span>
                            <img className='nav__logo--img' src={Logo} alt="Logo legOmnia" loading="lazy"/>
                        </div>
                    </Link>
                    <p>Infrastructure juridique de l'Afrique francophone</p>
                </div>

                {/* Produits */}
                <div className="footer__items">
                    <span className='footer__items--title'>Produits</span>
                    <ul>
                        <li>
                            <Link className='sublink' to="/produits/omnia">Omnia</Link>
                        </li>
                        <li>
                            <Link className='sublink' to="/produits/transformation-digitale/omniscan">OmniScan</Link>
                        </li>
                        <li>
                            <Link className='sublink' to="/produits/transformation-digitale/geode">Géode</Link>
                        </li>
                        <li>
                            <Link className='sublink' to="/produits/transformation-digitale/presentation">Transformation digitale</Link>
                        </li>
                    </ul>
                </div>

                {/* Ressources */}
                <div className="footer__items">
                    <span className='footer__items--title'>Ressources</span>
                    <ul>
                        <li>
                            <Link to="/produits/use-cases">Use Cases</Link>
                        </li>
                        <li>
                            <Link to="/juridictions">Juridictions</Link>
                        </li>
                        <li>
                            <Link to="/blog/articles">Blog</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>
                </div>

                {/* Légal */}
                <div className="footer__items">
                    <span className='footer__items--title'>Légal</span>
                    <ul>
                        <li>
                            <Link to="/mentions-legales">Mentions légales</Link>
                        </li>
                        <li>
                            <Link to="/cgu">CGU</Link>
                        </li>
                        <li>
                            <Link to="/confidentialite">Confidentialité</Link>
                        </li>
                        <li>
                            <Link to="/cookies">Cookies</Link>
                        </li>
                    </ul>
                </div>

                {/* Produits */}
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
};

export default Footer;