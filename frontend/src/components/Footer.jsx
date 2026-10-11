import { Link } from 'react-router-dom';

import '../assets/styles/footer.css';

import Logo from '../assets/img/logos/logoLegomnia.svg';

import { SOCIALS } from '../data/siteMeta';
import useLang from '../i18n/useLang';
import fr from '../locales/fr/layout';
import en from '../locales/en/layout';

const SOCIAL_LINKS = [
    { key: 'linkedin', label: 'LinkedIn', href: SOCIALS.linkedin, path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' },
    { key: 'instagram', label: 'Instagram', href: SOCIALS.instagram, path: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z' },
    { key: 'x', label: 'X', href: SOCIALS.x, path: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41z' },
];

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
                    <ul className="footer__socials">
                        {SOCIAL_LINKS.map(({ key, label, href, path }) => (
                            <li key={key}>
                                <a href={href} target="_blank" rel="noopener noreferrer me" aria-label={label} title={label}>
                                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d={path} /></svg>
                                </a>
                            </li>
                        ))}
                    </ul>
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