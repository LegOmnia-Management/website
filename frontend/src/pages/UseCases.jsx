import { useState, useEffect } from 'react';

import '../assets/styles/useCases.css';

import HeroBg from '../components/HeroBg';

import Cabinet from '../assets/img/pictos/cabinet.svg';
import CabinetViolet from '../assets/img/pictos/cabinetViolet.svg';
import CabinetWhite from '../assets/img/pictos/cabinetWhite.svg';
import Institution from '../assets/img/pictos/institution.svg';
import InstitutionViolet from '../assets/img/pictos/institutionViolet.svg';
import InstitutionWhite from '../assets/img/pictos/institutionWhite.svg';
import Universite from '../assets/img/pictos/universite.svg';
import UniversiteViolet from '../assets/img/pictos/universiteViolet.svg';
import UniversiteWhite from '../assets/img/pictos/universiteWhite.svg';
import Recherche from '../assets/img/pictos/search.svg';
import RechercheViolet from '../assets/img/pictos/searchViolet.svg';
import RechercheWhite from '../assets/img/pictos/searchWhite.svg';
import InHouse from '../assets/img/pictos/bag.svg';
import InHouseViolet from '../assets/img/pictos/bagViolet.svg';
import InHouseWhite from '../assets/img/pictos/bagWhite.svg';
import Organisation from '../assets/img/pictos/earth.svg';
import OrganisationViolet from '../assets/img/pictos/earthViolet.svg';
import OrganisationWhite from '../assets/img/pictos/earthWhite.svg';

const UseCases = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [content, setContent] = useState("");
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
                            <ul className='cases__content--nav'>
                                <li 
                                    className={`item ${contentOmnia === 'cabinet' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("cabinet");
                                    }}
                                >
                                    <img src={Cabinet} alt="" aria-hidden="true" className="current"/>
                                    <img src={CabinetViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={CabinetWhite} alt="" aria-hidden="true" className="white"/>
                                    Cabinet juridique
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={InstitutionWhite} alt="" aria-hidden="true" className="white"/>
                                    Ministère
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={UniversiteWhite} alt="" aria-hidden="true" className="white"/>
                                    Université
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={RechercheWhite} alt="" aria-hidden="true" className="white"/>
                                    Recherche
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'inhouse' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("inhouse");
                                    }}
                                >
                                    <img src={InHouse} alt="" aria-hidden="true" className="current"/>
                                    <img src={InHouseViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={InHouseWhite} alt="" aria-hidden="true" className="white"/>
                                    In-house
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'organisation' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("organisation");
                                    }}
                                >
                                    <img src={Organisation} alt="" aria-hidden="true" className="current"/>
                                    <img src={OrganisationViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={OrganisationWhite} alt="" aria-hidden="true" className="white"/>
                                    Organisation
                                </li>
                            </ul>
                            <div className='cases__content--description'>
                                <div className={contentOmnia != 'cabinet' ? 'isHidden' : ""} style={{marginTop: "3rem"}}>
                                    Le contenu Cabinet juridique <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                                <span className="ui__tag">ANALYSE IA</span>
                            </div>
                            <ul className='title__list'>
                                <li>Analyse IA de documents</li>
                                <li>Extraction de clauses</li>
                                <li>Audit contractuel en masse</li>
                            </ul>
                            <ul className='cases__content--nav'>
                                <li 
                                    className={`item ${contentOmniscan === 'cabinet' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("cabinet");
                                    }}
                                >
                                    <img src={Cabinet} alt="" aria-hidden="true" className="current"/>
                                    <img src={CabinetViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={CabinetWhite} alt="" aria-hidden="true" className="white"/>
                                    Cabinet juridique
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={InstitutionWhite} alt="" aria-hidden="true" className="white"/>
                                    Ministère
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={UniversiteWhite} alt="" aria-hidden="true" className="white"/>
                                    Université
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={RechercheWhite} alt="" aria-hidden="true" className="white"/>
                                    Recherche
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'inhouse' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("inhouse");
                                    }}
                                >
                                    <img src={InHouse} alt="" aria-hidden="true" className="current"/>
                                    <img src={InHouseViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={InHouseWhite} alt="" aria-hidden="true" className="white"/>
                                    In-house
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'organisation' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("organisation");
                                    }}
                                >
                                    <img src={Organisation} alt="" aria-hidden="true" className="current"/>
                                    <img src={OrganisationViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={OrganisationWhite} alt="" aria-hidden="true" className="white"/>
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
                                <span className="ui__tag">CARTOGRAPHIE</span>
                            </div>
                            <ul className='title__list'>
                                <li>Cartographie juridique & visualisation territoriale</li>
                                <li>Couverture pan-africaine</li>
                            </ul>
                            <ul className='cases__content--nav'>
                                <li 
                                    className={`item ${contentGeode === 'cabinet' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("cabinet");
                                    }}
                                >
                                    <img src={Cabinet} alt="" aria-hidden="true" className="current"/>
                                    <img src={CabinetViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={CabinetWhite} alt="" aria-hidden="true" className="white"/>
                                    Cabinet juridique
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={InstitutionWhite} alt="" aria-hidden="true" className="white"/>
                                    Ministère
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={UniversiteWhite} alt="" aria-hidden="true" className="white"/>
                                    Université
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={RechercheWhite} alt="" aria-hidden="true" className="white"/>
                                    Recherche
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'inhouse' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("inhouse");
                                    }}
                                >
                                    <img src={InHouse} alt="" aria-hidden="true" className="current"/>
                                    <img src={InHouseViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={InHouseWhite} alt="" aria-hidden="true" className="white"/>
                                    In-house
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'organisation' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("organisation");
                                    }}
                                >
                                    <img src={Organisation} alt="" aria-hidden="true" className="current"/>
                                    <img src={OrganisationViolet} alt="" aria-hidden="true" className="violet"/>
                                    <img src={OrganisationWhite} alt="" aria-hidden="true" className="white"/>
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