import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../assets/styles/header.css';

import Logo from '../assets/img/logos/logoLegomnia.svg';

import useLang, { LANG_STORAGE_KEY } from '../i18n/useLang';
import { localizePath } from '../i18n/routes';
import fr from '../locales/fr/layout';
import en from '../locales/en/layout';

const Header = () => {

    const location = useLocation();
    const { lang, lp, t } = useLang();
    const { header: txt } = t({ fr, en });

    const currentPath = location.pathname + location.search + location.hash;
    const rememberLang = (l) => {
        try {
            localStorage.setItem(LANG_STORAGE_KEY, l);
        } catch {
            // stockage indisponible (navigation privée...) : on ignore
        }
    };
    const [menuOpen, setMenuOpen ] = useState(null);
    const [subMenuOpen, setSubMenuOpen ] = useState(null);

    /* ouverture/fermeture sous-menus */
    const toggleMenu = (menu) => {

        if (menuOpen === menu) {
            setMenuOpen(null);
        } else {
            setMenuOpen(menu);
        }
    }
    const toggleSubMenu = (e, menu) => {
        
        const next = e.target.nextElementSibling;

        if (subMenuOpen === menu) {
            setSubMenuOpen(null);

            next.style.height = "";
        } else {
            setSubMenuOpen(menu);
        
            const height = next.scrollHeight;
            next.style.height = height + "px";
        }

        
    }

    useEffect(() => {
        setMenuOpen(null);
        setSubMenuOpen(null);
    }, [location]);

    return (
        <header>
            <div className='container header__container'>
                {/* Logo */}
                <Link to={lp("/")}>
                    <div className='nav__logo'>
                        <span className='nav__logo--text'>legOmnia</span>
                        <img className='nav__logo--img' src={Logo} alt={txt.logoAlt} loading="lazy"/>
                    </div>
                </Link>  

                {/* nav */}
                <nav className='header__nav'>
                    <ul className='header__nav--list'>
                        {/* produits */}
                        <li>
                            <button 
                                onClick={ () => toggleMenu('products') }
                                className={`link has-sublist ${menuOpen === 'products' ? 'open' : ''}`}
                            >{txt.products}</button>

                            {/* submenu produits */}
                            <ul className='header__nav--sublist'>
                                {/* omnia */}
                                <li>
                                    <Link className='sublink' to={lp("/produits/omnia")}>
                                        Omnia
                                        <p>{txt.omniaDesc}</p>
                                    </Link>
                                </li>
                                <li>
                                    {/* transformation digitale */}
                                    <button 
                                        onClick={ (e) => toggleSubMenu(e, 'transformation') }
                                        className={`sublink has-sublist ${subMenuOpen === 'transformation' ? 'open' : ''}`}
                                    >{txt.transformation}</button>

                                        {/* submenu transformation digitale */}
                                        <ul className='header__nav--sublist2'>
                                            <li>
                                                <Link className='sublink' to={lp("/produits/transformation-digitale/presentation")}>{txt.overview}</Link>
                                            </li>
                                            <li>
                                                <Link className='sublink' to={lp("/produits/transformation-digitale/geode")}>Géode</Link>
                                            </li>
                                            <li>
                                                <Link className='sublink' to={lp("/produits/transformation-digitale/omniscan")}>OmniScan</Link>
                                            </li>
                                        </ul>
                                </li>

                                {/* use cases */}
                                <li>
                                    <Link className='sublink' to={lp("/produits/use-cases")}>
                                        Use Cases
                                        <p>{txt.useCasesDesc}</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* blog */}
                        <li>
                            <button 
                                onClick={ () => toggleMenu('blog') }
                                className={`link has-sublist ${menuOpen === 'blog' ? 'open' : ''}`}
                            >Blog</button>

                            {/* submenu blog */}
                            <ul className='header__nav--sublist'>
                                <li><Link className='sublink' to={lp("/blog/articles")}>{txt.articles}</Link></li>
                                <li><Link className='sublink' to={lp("/blog/webinaires")}>{txt.webinars}</Link></li>
                                <li><Link className='sublink' to={lp("/blog/ressources")}>{txt.resources}</Link></li>
                            </ul>
                        </li>

                        {/* contact */}
                        <li>
                            <Link className='link' to={lp("/contact")}>{txt.contact}</Link>
                        </li>
                    </ul>
                </nav>

                {/* btns */}
                <div className='header__actions'>
                    {/* <button 
                        className='ui__btn--theme'
                        aria-label={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
                    >
                        <span className="iconify" data-icon="solar:moon-linear"></span>
                        <span className="iconify" data-icon="solar:sun-outline"></span>
                        <span className="text">Mode</span>
                    </button> */}
                    {/* Connexion / Inscription masqués pendant la phase de liste d'attente
                    <a href="https://app.beta.legomnia.com/login" className='ui__btn' target="_blank">Connexion</a>
                    <a href="https://app.beta.legomnia.com/signup" className='ui__btn' target="_blank">Inscription</a> */}
                    <Link to={lp("/liste-attente")} className='ui__btn'>{txt.waitlist}</Link>

                    {/* langue */}
                    <div className='header__lang' role="group" aria-label={txt.langLabel}>
                        {['fr', 'en'].map((l) => (
                            <Link
                                key={l}
                                to={localizePath(currentPath, l)}
                                onClick={() => rememberLang(l)}
                                className={`header__lang--btn ${lang === l ? 'isActive' : ''}`}
                                aria-current={lang === l ? 'true' : undefined}
                                hrefLang={l}
                                lang={l}
                            >{l === 'fr' ? 'FR' : 'EN'}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;