import { useState, useEffect } from 'react';

import '../assets/styles/useCases.css';

import HeroBg from '../components/HeroBg';

const UseCases = () => {

    const [content, setContent] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
    
        check(); // init
        window.addEventListener("resize", check);
    
        return () => window.removeEventListener("resize", check);
      }, []);
    
      useEffect(() => {
        
        if (isMobile) {
          setContent("");
        } else {
          setContent("omnia");
        }
      }, [isMobile]);

    return (
        <main className="main main__cases">

            {/* Hero */}
            <section className="hero" >
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h3 className='subtitle'>Plateforme juridique</h3>
                        <h1 className='main-title'>
                            Suite Omnia
                        </h1>
                        <p className="subtitle">Sélectionnez un produit pour explorer ses cas d'usage par profil client</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="cases__navigation">
                <div className="container">
                    <ul className="cases__navigation--nav">
                        <li className={`card omnia ${content === 'omnia' ? 'isActive' : ""}`}>
                            <h4 className="title">Omnia</h4>
                            <p className="text">Recherche & veille juridique sur l'Afrique francophone</p>
                            {isMobile ? (
                                <a
                                    className='ui__btn'
                                    href="#omnia"
                                    onClick={() => {
                                        setContent("omnia");
                                    }}
                                >Voir les cas d'usage</a>
                            ) : (
                                <button
                                    className='ui__btn'
                                    onClick={() => {
                                        setContent("omnia");
                                    }}
                                >Voir les cas d'usage</button>
                            )}
                        </li>
                        <li className={`card omniscan ${content === 'omniscan' ? 'isActive' : ""}`}>
                            <h4 className="title">OmniScan</h4>
                            <p className="text">Analyse intelligente de documents juridiques par IA</p>
                            {isMobile ? (
                                <a
                                    className='ui__btn--gradientSecond'
                                    href="#omniscan"
                                    onClick={() => {
                                        setContent("omniscan");
                                    }}
                                >Voir les cas d'usage</a>
                            ) : (
                                <button
                                    className='ui__btn--gradientSecond'
                                    onClick={() => {
                                        setContent("omniscan");
                                    }}
                                >Voir les cas d'usage</button>
                            )}
                        </li>
                        <li className={`card geode ${content === 'geode' ? 'isActive' : ""}`}>
                            <h4 className="title">Géode</h4>
                            <p className="text">Cartographie et visualisation des paysages juridiques</p>
                            {isMobile ? (
                                <a
                                    className='ui__btn--gradient'
                                    href="#geode"
                                    onClick={() => {
                                        setContent("geode");
                                    }}
                                >Voir les cas d'usage</a>
                            ) : (
                                <button
                                    className='ui__btn--gradient'
                                    onClick={() => {
                                        setContent("geode");
                                    }}
                                >Voir les cas d'usage</button>
                            )}
                        </li>
                    </ul>
                </div>
            </section>

            {/* Content */}
            <section className="bg__circle cases__content">
                <div className="container">

                    <div className='cases__content--description'>

                        {/* Omnia */}
                        <article id="omnia" className={content != 'omnia' ? 'isHidden' : ""}>
                            <div className="title__around">
                                <h2 className='title__h2 omnia'>Omnia </h2>
                                <span className="ui__tag">RECHERCHE</span>
                            </div>
                            <ul className='title__list'>
                                <li>Recherche jurisprudentielle & veille législative</li>
                                <li>17 pays d'Afrique francophone</li>
                            </ul>
                            <div style={{marginTop: "3rem"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </article>

                        {/* OmniScan */}
                        <article id="omniscan" className={content != 'omniscan' ? 'isHidden' : ""}>
                            <div className="title__around">
                                <h2 className='title__h2 omniscan'>OmniScan </h2>
                                <span className="ui__tag">ANALYSE IA</span>
                            </div>
                            <ul className='title__list'>
                                <li>Analyse IA de documents</li>
                                <li>Extraction de clauses</li>
                                <li>Audit contractuel en masse</li>
                            </ul>
                            <div style={{marginTop: "3rem"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </article>

                        {/* Géode */}
                        <article id="geode" className={content != 'geode' ? 'isHidden' : ""}>
                            <div className="title__around">
                                <h2 className='title__h2 geode'>Géode </h2>
                                <span className="ui__tag">CARTOGRAPHIE</span>
                            </div>
                            <ul className='title__list'>
                                <li>Cartographie juridique & visualisation territoriale</li>
                                <li>Couverture pan-africaine</li>
                            </ul>
                            <div style={{marginTop: "3rem"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UseCases;