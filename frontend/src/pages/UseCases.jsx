import { useState, useEffect } from 'react';

import '../assets/styles/useCases.css';

import HeroBg from '../components/HeroBg';

import Cabinet from '../assets/img/pictos/cabinet.svg';
import CabinetColorOmnia from '../assets/img/pictos/cabinetColorOmnia.svg';
import CabinetColorOmniscan from '../assets/img/pictos/cabinetColorOmniscan.svg';
import CabinetColorGeode from '../assets/img/pictos/cabinetColorGeode.svg';
import Institution from '../assets/img/pictos/institution.svg';
import InstitutionColorOmnia from '../assets/img/pictos/institutionColorOmnia.svg';
import InstitutionColorOmniscan from '../assets/img/pictos/institutionColorOmniscan.svg';
import InstitutionColorGeode from '../assets/img/pictos/institutionColorGeode.svg';
import Universite from '../assets/img/pictos/universite.svg';
import UniversiteColorOmnia from '../assets/img/pictos/universiteColorOmnia.svg';
import UniversiteColorOmniscan from '../assets/img/pictos/universiteColorOmniscan.svg';
import UniversiteColorGeode from '../assets/img/pictos/universiteColorGeode.svg';
import Recherche from '../assets/img/pictos/search.svg';
import RechercheColorOmnia from '../assets/img/pictos/searchColorOmnia.svg';
import RechercheColorOmniscan from '../assets/img/pictos/searchColorOmniscan.svg';
import RechercheColorGeode from '../assets/img/pictos/searchColorGeode.svg';
import InHouse from '../assets/img/pictos/bag.svg';
import InHouseColorOmnia from '../assets/img/pictos/bagColorOmnia.svg';
import InHouseColorOmniscan from '../assets/img/pictos/bagColorOmniscan.svg';
import InHouseColorGeode from '../assets/img/pictos/bagColorGeode.svg';
import Organisation from '../assets/img/pictos/earth.svg';
import OrganisationColorOmnia from '../assets/img/pictos/earthColorOmnia.svg';
import OrganisationColorOmniscan from '../assets/img/pictos/earthColorOmniscan.svg';
import OrganisationColorGeode from '../assets/img/pictos/earthColorGeode.svg';
import CheckOmnia from '../assets/img/pictos/checkOmnia.svg';
import CheckOmniscan from '../assets/img/pictos/checkOmniscan.svg';
import CheckGeode from '../assets/img/pictos/checkGeode.svg';

const UseCases = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [content, setContent] = useState("omnia");
    const [contentOmnia, setContentOmnia] = useState("cabinet");
    const [contentOmniscan, setContentOmniscan] = useState("cabinet");
    const [contentGeode, setContentGeode] = useState("cabinet");

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
                        <h3 className='subtitle'>Cas d'usage par produit et profil client</h3>
                        <h1 className='main-title'>
                            Une suite conçue pour <em className='highlight'>chaque acteur juridique</em>
                        </h1>
                        <p className="subtitle">Sélectionnez un produit, puis un profil client pour explorer les cas d'usage</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="cases__navigation">
                <div className="container">
                    <ul className="cases__navigation--nav">
                        <li className={`card omnia ${content === 'omnia' ? 'isActive' : ""}`}>
                            <h4 className="title">Omnia</h4>
                            <p className="text">Moteur de recherche juridique & veille législative en Afrique francophone</p>
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
                            <p className="text">Solution de digitalisation de la documentation juridique par OCR</p>
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
                            <p className="text">GED intelligente pour professionnels du droit, administrations et entreprises</p>
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
                                <span className="ui__tag omnia">RECHERCHE JURIDIQUE</span>
                            </div>
                            <ul className='title__list'>
                                <li>Moteur de recherche jurisprudentielle</li>
                                <li>Veille législative manuelle</li>
                                <li>Afrique francophone</li>
                                <li>Analyse comparative</li>
                            </ul>
                            <ul className='cases__content--nav omnia'>
                                <li 
                                    className={`item ${contentOmnia === 'cabinet' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("cabinet");
                                    }}
                                >
                                    <img src={Cabinet} alt="" aria-hidden="true" className="current"/>
                                    <img src={CabinetColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    Cabinet juridique
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    Ministère
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    Université
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    Recherche
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'inhouse' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("inhouse");
                                    }}
                                >
                                    <img src={InHouse} alt="" aria-hidden="true" className="current"/>
                                    <img src={InHouseColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    In-house
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'organisation' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("organisation");
                                    }}
                                >
                                    <img src={Organisation} alt="" aria-hidden="true" className="current"/>
                                    <img src={OrganisationColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    Organisation
                                </li>
                            </ul>
                            <div className='cases__content--description'>
                                <div className={`description__block ${contentOmnia != 'cabinet' ? 'isHidden' : ""}`} style={{marginTop: "3rem"}}>
                                    <div className='description__title'>
                                        <span className='description__title--number omnia'>01</span>
                                        <span className='description__title--text'>Recherche jurisprudentielle pour préparer une plaidoirie OHADA</span>
                                    </div>
                                    <div className='description__text'>
                                        <p className='description__scenario'>
                                            Un avocat prépare un contentieux commercial impliquant une clause de non-concurrence entre deux sociétés sénégalaises. Il doit identifier les décisions OHADA pertinentes et les textes applicables avant l'audience.
                                        </p>
                                        <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                        <ul className='description__list'>
                                            <li className="list__step omnia">
                                                <span>1</span>
                                                <span>Lancement d'une recherche ciblée sur Omnia&nbsp;: jurisprudence OHADA relative aux clauses de non-concurrence</span>
                                            </li>
                                            <li className="list__step omnia">
                                                <span>2</span>
                                                <span>Filtrage des résultats par période pour ne retenir que les décisions des 5 dernières années</span>
                                            </li>
                                            <li className="list__step omnia">
                                                <span>3</span>
                                                <span>Lecture et sélection manuelles des arrêts les plus pertinents parmi les résultats</span>
                                            </li>
                                            <li className="list__step omnia">
                                                <span>4</span>
                                                <span>Synthèse des arguments jurisprudentiels retenus intégrée dans les conclusions</span>
                                            </li>
                                        </ul>
                                        <p className='description__result omnia'>
                                        <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                        Gain estimé à 3h de recherche manuelle. 8 décisions pertinentes identifiées en moins de 30 minutes.
                                        </p>
                                        <ul className='description__tags__list'>
                                            <li>OHADA</li>
                                            <li>Jurisprudence</li>
                                            <li>Clause de non-concurrence</li>
                                            <li>Droits des affaires</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={contentOmnia != 'ministere' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Ministère <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmnia != 'universite' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Université <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmnia != 'recherche' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Recherche <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmnia != 'inhouse' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu In-house <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmnia != 'organisation' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Organisation <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </article>

                        {/* OmniScan */}
                        <article id="omniscan" className={content != 'omniscan' ? 'isHidden' : ""}>
                            <div className="title__around">
                                <h2 className='title__h2 omniscan'>OmniScan </h2>
                                <span className="ui__tag omniscan">DIGITALISATION</span>
                            </div>
                            <ul className='title__list'>
                                <li>Numérisation de documents juridiques</li>
                                <li>OCR haute précision</li>
                                <li>Structuration et indexation</li>
                                <li>Traitement en masse</li>
                            </ul>
                            <ul className='cases__content--nav omniscan'>
                                <li 
                                    className={`item ${contentOmniscan === 'cabinet' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("cabinet");
                                    }}
                                >
                                    <img src={Cabinet} alt="" aria-hidden="true" className="current"/>
                                    <img src={CabinetColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    Cabinet juridique
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    Ministère
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    Université
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    Recherche
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'inhouse' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("inhouse");
                                    }}
                                >
                                    <img src={InHouse} alt="" aria-hidden="true" className="current"/>
                                    <img src={InHouseColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    In-house
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'organisation' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("organisation");
                                    }}
                                >
                                    <img src={Organisation} alt="" aria-hidden="true" className="current"/>
                                    <img src={OrganisationColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    Organisation
                                </li>
                            </ul>
                            <div className='cases__content--description'>
                                <div className={contentOmniscan != 'cabinet' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Cabinet juridique <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmniscan != 'ministere' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Ministère <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmniscan != 'universite' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Université <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmniscan != 'recherche' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Recherche <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmniscan != 'inhouse' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu In-house <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentOmniscan != 'organisation' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Organisation <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </article>

                        {/* Géode */}
                        <article id="geode" className={content != 'geode' ? 'isHidden' : ""}>
                            <div className="title__around">
                                <h2 className='title__h2 geode'>Géode </h2>
                                <span className="ui__tag geode">GED · GESTION DOCUMENTAIRE</span>
                            </div>
                            <ul className='title__list'>
                                <li>GED intelligente</li>
                                <li>Classement automatique</li>
                                <li>Versioning</li>
                                <li>Droits d'accès</li>
                                <li>Workflows</li>
                                <li>Alertes d'échéances</li>
                            </ul>
                            <ul className='cases__content--nav geode'>
                                <li 
                                    className={`item ${contentGeode === 'cabinet' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("cabinet");
                                    }}
                                >
                                    <img src={Cabinet} alt="" aria-hidden="true" className="current"/>
                                    <img src={CabinetColorGeode} alt="" aria-hidden="true" className="color"/>
                                    Cabinet juridique
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionColorGeode} alt="" aria-hidden="true" className="color"/>
                                    Ministère
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteColorGeode} alt="" aria-hidden="true" className="color"/>
                                    Université
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheColorGeode} alt="" aria-hidden="true" className="color"/>
                                    Recherche
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'inhouse' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("inhouse");
                                    }}
                                >
                                    <img src={InHouse} alt="" aria-hidden="true" className="current"/>
                                    <img src={InHouseColorGeode} alt="" aria-hidden="true" className="color"/>
                                    In-house
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'organisation' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("organisation");
                                    }}
                                >
                                    <img src={Organisation} alt="" aria-hidden="true" className="current"/>
                                    <img src={OrganisationColorGeode} alt="" aria-hidden="true" className="color"/>
                                    Organisation
                                </li>
                            </ul>
                            <div className='cases__content--description'>
                                <div className={contentGeode != 'cabinet' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Cabinet juridique <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentGeode != 'ministere' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Ministère <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentGeode != 'universite' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Université <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentGeode != 'recherche' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Recherche <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentGeode != 'inhouse' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu In-house <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className={contentGeode != 'organisation' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Organisation <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UseCases;