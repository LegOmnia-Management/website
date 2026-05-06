import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../assets/styles/header.css';

import Logo from '../assets/img/logos/logoLegomnia.svg';

const Header = () => {

    const location = useLocation();
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
            <div className='header__container'>
                {/* Logo */}
                <Link to="/">
                    <div className='header__logo'>
                        <img className='header__logo--img' src={Logo} alt="Logo legOmnia" loading="lazy"/>
                        <span className='header__logo--text'>legOmnia</span>
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
                            >Produits</button>

                            {/* submenu produits */}
                            <ul className='header__nav--sublist'>
                                {/* omnia */}
                                <li>
                                    <Link className='sublink' to="/produits/omnia">
                                        Omnia
                                        <p>la plateforme de recherche juridique</p>
                                    </Link>
                                </li>
                                <li>
                                    {/* transformation digitale */}
                                    <button 
                                        onClick={ (e) => toggleSubMenu(e, 'transformation') }
                                        className={`sublink has-sublist ${subMenuOpen === 'transformation' ? 'open' : ''}`}
                                    >Transformation digitale</button>

                                        {/* submenu transformation digitale */}
                                        <ul className='header__nav--sublist2'>
                                            <li>
                                                <Link className='sublink' to="/produits/transformation-digitale/presentation">Présentation générale</Link>
                                            </li>
                                            <li>
                                                <Link className='sublink' to="/produits/transformation-digitale/geode">Géode</Link>
                                            </li>
                                            <li>
                                                <Link className='sublink' to="/produits/transformation-digitale/omniscan">OmniScan</Link>
                                            </li>
                                        </ul>
                                </li>

                                {/* use cases */}
                                <li>
                                    <Link className='sublink' to="/produits/use-cases">
                                        Use Cases
                                        <p>de réels articles de Use Case</p>
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
                                <li><Link className='sublink' to="/blog/articles">Articles</Link></li>
                                <li><Link className='sublink' to="/blog/webinaires">Webinaires</Link></li>
                                <li><Link className='sublink' to="/blog/ressources">Ressources</Link></li>
                            </ul>
                        </li>

                        {/* contact */}
                        <li>
                            <Link className='link' to="/contact">Nous contacter</Link>
                        </li>
                    </ul>
                </nav>

                {/* btns */}
                <div className='header__actions'>
                    <button 
                        className='ui__btn--theme'
                        // aria-label={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
                    >
                        <span className="iconify" data-icon="solar:moon-linear"></span>
                        {/* <span className="iconify" data-icon="solar:sun-outline"></span> */}
                        <span className="text">Mode</span>
                    </button>
                    <Link className='ui__btn' to="/contact">Démo</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;