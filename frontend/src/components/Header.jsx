import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../assets/styles/header.css';

import Logo from '../assets/img/logos/logoLegomnia.svg';
import DarkModeOff from '../assets/img/pictos/darkModeBlack.svg';
import DarkModeHover from '../assets/img/pictos/darkModeViolet.svg';
import DarkModeOn from '../assets/img/pictos/darkModeWhite.svg';

const Header = () => {

    const location = useLocation();
    const [menuOpen, setmenuOpen ] = useState(null);

    /* ouverture sous-menus */
    const toggleMenu = (menu) => {
        setmenuOpen(menu);
    }

    useEffect(() => {
        setmenuOpen(null);
    }, [location]);

    return (
        <header>
            <div className='header__container'>
                {/* Logo */}
                <NavLink to="/">
                    <div className='header__logo'>
                        <img className='header__logo--img' src={Logo} alt="Logo legOmnia" />
                        <span className='header__logo--text'>legOmnia</span>
                    </div>
                </NavLink>  

                {/* nav */}
                <nav className='header__nav'>
                    <ul className='header__nav--list'>
                        <li>
                            <button 
                                onClick={ () => toggleMenu('products') }
                                className={`link ${menuOpen === 'products' ? 'open' : ''}`}
                            >Produits</button>
                            <ul className='header__nav--sublist'>
                                <li>
                                    <NavLink className='sublink' to="/produits/omnia">
                                        Omnia
                                        <p>la plateforme de recherche juridique</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <span className='sublink'>Transformation digitale</span>
                                    {/* <ul>
                                        <li>Présentation générale</li>
                                        <li>Géode</li>
                                        <li>OmniScan</li>
                                    </ul> */}
                                </li>
                                <li>
                                    <NavLink className='sublink' to="/produits/use-cases">
                                        Use Cases
                                        <p>de réels articles de Use Case</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button 
                                onClick={ () => toggleMenu('blog') }
                                className={`link ${menuOpen === 'blog' ? 'open' : ''}`}
                            >Blog</button>
                            <ul className='header__nav--sublist'>
                                <li><NavLink className='sublink' to="/blog/articles">Articles</NavLink></li>
                                <li><NavLink className='sublink' to="/blog/webinaires">Webinaires</NavLink></li>
                                <li><NavLink className='sublink' to="/blog/ressources">Ressources</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink className='link hasNot-sublist' to="/contact">Nous contacter</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* btns */}
                <div className='header__actions'>
                    <button className='ui__btn--theme'>
                        <img className='ui__btn--dark-off' src={DarkModeOff} alt="Passez en mode sombre" />
                        <img className='ui__btn--dark-hover' src={DarkModeHover} alt="Passez en mode sombre" />
                    </button>
                    <a className='ui__btn' href="">Démo</a>
                </div>
                {/* <div className='header__actions'>
                    <button class="theme-btn">
                        <svg class="icon theme-icon-sun" width="16" height="16" style="display:none"><use href="#i-sun"/></svg>
                        <svg class="icon theme-icon-moon" width="16" height="16" style="display:block"><use href="#i-moon"/></svg>
                        <span>MODE</span>
                    </button>
                    <button class="btn btn-vi btn-sm" onclick="location.href='https://legOmnia.com/contact/'">
                        Démo
                    </button>
                </div> */}
            </div>
        </header>
    );
};

export default Header;