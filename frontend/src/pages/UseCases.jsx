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
    const [openAccordions, setOpenAccordions] = useState({});

    const toggleAccordion = (id) => {

        // à partir de openAccordions
        setOpenAccordions(prev => { 
          const isOpen = prev[id];
      
          if (isOpen) {
            // si déjà ouvert --> on le ferme
            const copy = { ...prev };
            copy[id] = false;
            return copy;
          } else {
            // si fermé --> on l’ouvre
            const copy = { ...prev };
            copy[id] = true;
            return copy;
          }
        });
      };

    useEffect(() => {

        // verif si mobile
        const check = () => setIsMobile(window.innerWidth < 768);
    
        check(); // init
        window.addEventListener("resize", check);
    
        return () => window.removeEventListener("resize", check);
      }, []);
    
    //   useEffect(() => {
        
    //     if (isMobile) {
    //       setContent("");
    //     } else {
    //       setContent("omnia");
    //     }
    //   }, [isMobile]);

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
                                {/* Omnia - cabinet */}
                                <div
                                    className={`${contentOmnia != 'cabinet' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Omnia - cabinet - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_cabinet_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab1`
                                                )
                                            }
                                        >
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

                                    {/* Omnia - cabinet - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_cabinet_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>02</span>
                                            <span className='description__title--text'>Constitution d'une bibliothèque de précédents en droits foncier</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un associé intègre un nouveau cabinet et doit constituer une base de références internes sur le droit foncier pour 4 pays d'Afrique de l'Ouest (Sénégal, Côte d'Ivoire, Mali, Burkina Faso).
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherches successives par pays sur les textes fonciers&nbsp;: codes domaniaux, décrets d'application</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des décisions de justice disponibles sur les litiges fonciers dans chaque pays</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Structuration thématique manuelle&nbsp;: expropriation, baux emphytéotiques, titres fonciers</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Constitution d'un dossier de références classé par pays et par thème</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Base documentaire de 80+ références constituée en 3 jours. Accès rapide aux précédents pour toute l'équipe.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Droit foncier</li>
                                                <li>Sénégal</li>
                                                <li>Côte d'Ivoire</li>
                                                <li>Mali</li>
                                                <li>Bibliothèque de précédents</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - cabinet - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_cabinet_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>03</span>
                                            <span className='description__title--text'>Vérification de la conformité d'uncontrat avec les droits OHADA applicable</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un avocat doit analyser un contrat de distribution soumis par un client pour identifier les clauses potentiellement contraires à l'Acte Uniforme OHADA sur le droit commercial général.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des dispositions de l'AUDC applicables aux contrats de distribution</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des clauses impératives et de la jurisprudence CCJA sur les manquements</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Lecture du contrat et confrontation clause par clause avec les textes identifiés</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Rédaction d'une note de conformité à destination du client</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Analyse de conformité réalisée en une demi-journée. 3 clauses problématiques identifiées et corrigées avant signature.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>OHADA</li>
                                                <li>Contrat de distribution</li>
                                                <li>Conformité</li>
                                                <li>AUDC</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Omnia - ministère */}
                                <div
                                    className={`${contentOmnia != 'ministere' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Omnia - ministère - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_ministere_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>01</span>
                                            <span className='description__title--text'>Vérification de la conformité d'un projet de texte avec les directives régionales</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                La direction des affaires juridiques prépare un décret sur la commande publique et doit s'assurer de sa cohérence avec les directives UEMOA en vigueur avant soumission au Conseil des ministres.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des directives UEMOA applicables en matière de commande publique</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des articles potentiellement en tension avec le projet de décret</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Comparaison manuelle du projet avec les transpositions réalisées par d'autres États membres</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Rédaction d'une note de conformité avec recommandations de mise à jour</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Décret publié sans contentieux. Analyse réalisée en 4 jours vs 3 semaines de recherche manuelle.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>UEMOA</li>
                                                <li>Commande publique</li>
                                                <li>Conformité réglementaire</li>
                                                <li>Harmonisation</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - ministère - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_ministere_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>02</span>
                                            <span className='description__title--text'>Documentation comparative pour l'élaboration d'un nouveau code de procédure</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Le ministère de la Justice engage une réforme de son code de procédure pénale. La direction législative doit collecter et comparer les codes de procédure de 5 pays d'Afrique francophone comme base de travail.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des codes de procédure pénale disponibles pour les pays ciblés</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Extraction des dispositions comparables sur les thèmes clés&nbsp;: garde à vue, instruction, appel</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Identification des réformes récentes adoptées par les pays étudiés</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Constitution d'un dossier comparatif structuré par thème pour la commission de réforme</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Dossier comparatif de 5 pays produit en 1 semaine. La commission démarre ses travaux sur une base documentaire solide.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Réforme législative</li>
                                                <li>Procédure pénale</li>
                                                <li>Droit comparé</li>
                                                <li>Afrique francophone</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - ministère - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_ministere_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>03</span>
                                            <span className='description__title--text'>Préparation d'une réponse à une question parlementaire sur l'état du droit</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un directeur des affaires juridiques doit préparer en 48h une note sur l'encadrement juridique actuel de la sous-traitance dans le secteur minier pour répondre à une question parlementaire écrite.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche ciblée sur Omnia&nbsp;: législation minière et réglementation de la sous-traitance</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des textes nationaux en vigueur et de la jurisprudence disponible</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Recherche des engagements internationaux ratifiés applicables au secteur</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Synthèse structurée en note de 4 pages pour le ministre</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Analyse de conformité réalisée en une demi-journée. 3 clauses problématiques identifiées et corrigées avant signature.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Droit minier</li>
                                                <li>Sous-traitance</li>
                                                <li>Question parlementaire</li>
                                                <li>Note juridique</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Omnia - université */}
                                <div
                                    className={`${contentOmnia != 'universite' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Omnia - université - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_universite_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>01</span>
                                            <span className='description__title--text'>Actualisation d'un cours de droit des affaires OHADA</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un professeur de droit des affaires à l'Université de Dakar prépare son syllabus de l'année. Il a besoin des arrêts CCJA les plus récents sur le droit des sociétés pour renouveler ses travaux dirigés.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des décisions CCJA récentes en droit des sociétés</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Sélection des arrêts présentant un intérêt pédagogique&nbsp;: revirement, précision de principe</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Lecture des décisions et rédaction de fiches de TD annotées pour chaque arrêt retenu</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Constitution d'un corpus de TD actualisé prêt à distribuer aux étudiants</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Syllabus renouvelé en 1 journée. Étudiants formés sur de la jurisprudence récente, pas des arrêts de 2010.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>CCJA</li>
                                                <li>Droit des sociétés</li>
                                                <li>TD</li>
                                                <li>Pédagogie juridique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - université - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_universite_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>02</span>
                                            <span className='description__title--text'>Docummentation d'une thèse en droit comparé OHADA</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un doctorant à l'Université de Lomé compare les régimes de responsabilité contractuelle dans les pays OHADA et les pays non-membres d'Afrique francophone encore régis par le Code civil hérité.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherches successives par pays sur les textes de référence en droit des obligations</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification de la jurisprudence disponible par pays sur la responsabilité contractuelle</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Recensement des articles doctrinaux africains pertinents accessibles sur la plateforme</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Constitution d'une bibliographie annotée structurée par pays et par sous-thème</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Phase de collecte documentaire réduite de 5 mois à 3 semaines. Le doctorant peut se concentrer sur l'analyse.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Thèse de doctorat</li>
                                                <li>Droit comparé</li>
                                                <li>Responsabilité contractuelle</li>
                                                <li>OHADA</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - université - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_universite_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>03</span>
                                            <span className='description__title--text'>Préparation de cas pratiques pour un concours de la magistrature</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un directeur pédagogique d'une école de formation à la magistrature doit préparer 20 cas pratiques réalistes en droit commercial pour les examens de fin de formation.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche de situations contentieuses récentes dans les domaines commerciaux ciblés</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des décisions de justice utilisables comme base factuelle</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Sélection des affaires présentant des questions de droit suffisamment complexes</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Rédaction des cas pratiques avec énoncés anonymisés et corrigés indicatifs</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                20 cas pratiques basés sur de vraies affaires, créés en 4 jours. Formation plus ancrée dans la réalité juridique.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>École de magistrature</li>
                                                <li>Cas pratiques</li>
                                                <li>Droit commercial</li>
                                                <li>Formation juridique</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Omnia - recherche */}
                                <div
                                    className={`${contentOmnia != 'recherche' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Omnia - recherche - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_recherche_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>01</span>
                                            <span className='description__title--text'>Analyse de l'évolution législative en droit de l'environnement</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un chercheur d'un think tank étudie l'évolution des législations environnementales dans 8 pays d'Afrique de l'Ouest sur 10 ans pour évaluer leur degré d'alignement avec les engagements climatiques.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherches successives par pays sur les textes environnementaux publiés sur la période</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des lois et décrets pertinents&nbsp;: eau, forêt, mines, déchets, énergie</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Analyse manuelle des contenus pour repérer les évolutions et points de convergence</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Construction d'un tableau comparatif de l'évolution normative par pays et par thème</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Base documentaire de 120+ textes structurée en 2 semaines. Analyse publiée dans une revue académique francophone.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Droit de l'environnement</li>
                                                <li>Afrique de l'Ouest</li>
                                                <li>Analyse comparative</li>
                                                <li>Recherche académique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - recherche - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_recherche_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>02</span>
                                            <span className='description__title--text'>Cartographie du droit de la famille dans les pays sahéliens</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un observatoire régional étudie les disparités entre droit écrit et pratiques coutumières en matière de succession dans 4 pays sahéliens (Mali, Niger, Burkina Faso, Tchad).
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche des codes de la famille en vigueur dans chaque pays</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des dispositions renvoyant au droit coutumier ou religieux</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Recherche de la jurisprudence disponible sur les conflits entre droit écrit et coutume</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Cartographie comparative manuelle des zones de convergence et de divergence normativee</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Rapport de cartographie produit en 4 semaines. Données solides pour des recommandations de politique publique.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Droit de la famille</li>
                                                <li>Droit coutumier</li>
                                                <li>Pays sahéliens</li>
                                                <li>Pluralisme juridique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - recherche - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_recherche_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>03</span>
                                            <span className='description__title--text'>Étude sur le cadre juridique de la protection des données en Afrique francophone</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un laboratoire de droit du numérique recense et compare les lois nationales sur la protection des données personnelles dans les pays francophones d'Afrique subsaharienne.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche systématique des textes législatifs sur la protection des données dans chaque pays</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des autorités de contrôle et de leurs pouvoirs dans les textes disponibles</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Comparaison des définitions et des droits accordés aux personnes concernées</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Rédaction d'un état des lieux comparatif pour publication dans une revue spécialisée</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Panorama de 10 pays produit en 3 semaines. Premier état des lieux publié sur le sujet en langue française.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Protection des données</li>
                                                <li>Droit du numérique</li>
                                                <li>Afrique subsaharienne</li>
                                                <li>Étude comparative</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Omnia - inhouse */}
                                <div
                                    className={`${contentOmnia != 'inhouse' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Omnia - inhouse - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_inhouse_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>01</span>
                                            <span className='description__title--text'>Analyse réglementaire avant implantation dans un nouveau pays</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Une fintech ivoirienne envisage de s'implanter au Sénégal. Le directeur juridique doit identifier le cadre réglementaire applicable aux services de paiement électronique avant de soumettre le dossier au COMEX.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia du cadre légal sénégalais applicable au paiement électronique</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des textes BCEAO applicables et des conditions d'agrément</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Comparaison avec le cadre ivoirien pour identifier les principales différences</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Rédaction d'une note d'analyse remise au COMEX avec les étapes réglementaires à franchir</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Note d'analyse complète produite en 3 jours. COMEX dispose d'une vision claire des prérequis avant décision.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Fintech</li>
                                                <li>Paiement électronique</li>
                                                <li>BCEAO</li>
                                                <li>Sénégal</li>
                                                <li>Analyse réglementaire</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - inhouse - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_inhouse_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>02</span>
                                            <span className='description__title--text'>Vérification de la conformité d'un contrat avec le droit local</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                La direction juridique d'un groupe industriel doit vérifier qu'un contrat de concession signé avec un partenaire burkinabè est conforme au droit des contrats en vigueur au Burkina Faso.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des textes du droit des obligations applicables au Burkina Faso</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des dispositions impératives et de la jurisprudence disponible sur le sujet</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Lecture du contrat et confrontation avec les textes identifiés</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Rédaction d'une note de conformité avec les ajustements recommandés</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Conformité vérifiée en 2 jours. 2 clauses modifiées avant signature. Litige potentiel évité.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Burkina Faso</li>
                                                <li>Droit des contrats</li>
                                                <li>Contrat de concession</li>
                                                <li>Conformité juridique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - inhouse - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_inhouse_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>03</span>
                                            <span className='description__title--text'>Documentation pour un audit légal avant une opération M&A</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un directeur juridique prépare la phase de due diligence légale pour l'acquisition d'une entreprise de transport au Cameroun. Il doit rassembler les textes applicables aux secteurs concernés.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des textes régissant le secteur du transport au Cameroun</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification du droit du travail, du droit des sociétés OHADA et de la réglementation sectorielle applicables</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Recherche de la jurisprudence disponible sur les contentieux fréquents dans le secteur</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Constitution d'un dossier documentaire structuré remis aux avocats en charge de la due diligence</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Dossier documentaire de référence produit en 2 jours. Les avocats externes démarrent leur mission avec une base complète.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>M&A</li>
                                                <li>Due diligence</li>
                                                <li>Cameroun</li>
                                                <li>Droit des transports</li>
                                                <li>OHADA</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Omnia - organisation */}
                                <div
                                    className={`${contentOmnia != 'organisation' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Omnia - organisation - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_organisation_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>01</span>
                                            <span className='description__title--text'>Documentation pour un rapport de conformité aux conventions de droits humains</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un bureau régional des droits humains prépare un rapport d'évaluation de la conformité des législations de 5 pays aux conventions internationales ratifiées, en vue d'une session de l'Examen Périodique Universel.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des constitutions et lois pertinentes dans chacun des 5 pays</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des textes applicables aux droits évalués&nbsp;: expression, association, procès équitable</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Comparaison manuelle des dispositions nationales avec les exigences des conventions ratifiées</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Structuration du rapport par pays et par droit fondamental avec les sources documentées</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Base documentaire pour 5 pays constituée en 2 semaines. Rapport EPU crédible fondé sur des sources primaires.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Droits humains</li>
                                                <li>EPU</li>
                                                <li>Droit international</li>
                                                <li>Conformité</li>
                                                <li>Afrique francophone</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - organisation - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_organisation_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>02</span>
                                            <span className='description__title--text'>Recherche comparative pour l'élaboration d'une directive régionale</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                La commission juridique d'une organisation d'intégration régionale prépare une directive sur la protection des données. Elle doit d'abord recenser les législations existantes parmi ses États membres.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche des législations protection des données dans les États membres disposant de textes</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des définitions, droits des personnes et obligations des responsables de traitement</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Comparaison des contenus pour repérer les convergences et les lacunes à combler</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Rédaction d'un rapport de recensement qui servira de base aux travaux de rédaction de la directive</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                Recensement complet des législations existantes produit en 10 jours. Travaux de rédaction lancés sur des bases solides.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Intégration régionale</li>
                                                <li>Protection des données</li>
                                                <li>Harmonisation normative</li>
                                                <li>Directive</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Omnia - organisation - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omnia_organisation_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmnia}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omnia'>03</span>
                                            <span className='description__title--text'>État des lieux juridique pour un programme d'appui à la réforme fiscale</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Une organisation internationale prépare un programme d'appui à la réforme fiscale dans 3 pays. Avant de définir les activités, les experts doivent disposer d'un état des lieux précis des législations fiscales en vigueur.
                                            </p>
                                            <p className='description__subtitle omnia'>Workflow sur Omnia</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>Recherche sur Omnia des codes généraux des impôts et textes fiscaux dans les 3 pays</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>Identification des principales dispositions sur l'impôt sur les sociétés, la TVA et les droits d'accises</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>Repérage des réformes récentes déjà adoptées pour éviter de proposer ce qui existe déjà</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>Synthèse comparative remise à l'équipe de conception du programme</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                État des lieux de 3 pays produit en 1 semaine. Programme d'appui conçu sur une base factuelle solide.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Réforme fiscale</li>
                                                <li>Droit fiscal</li>
                                                <li>Programme de développement</li>
                                                <li>Analyse pays</li>
                                            </ul>
                                        </div>
                                    </div>
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

                                {/* OmniScan - cabinet */}
                                <div
                                    className={`${contentOmniscan != 'cabinet' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* OmniScan - cabinet - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_cabinet_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>01</span>
                                            <span className='description__title--text'>Numérisation des archives clients pour la transition au tout-numérique</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un cabinet de 12 avocats décide de supprimer le papier. Il dispose de 15 ans d'archives clients (actes, correspondances, pièces de procédure) stockées dans des classeurs physiques.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur OmniScan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation en masse des documents via OmniScan avec alimentation automatique</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR haute précision sur chaque page pour rendre le contenu entièrement recherchable</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Détection automatique du type de document&nbsp;: acte, jugement, courrier, contrat</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Nommage structuré et organisation par dossier client selon la nomenclature du cabinet</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                15 ans d'archives numérisées en 3 semaines. Chaque document retrouvable en moins de 10 secondes.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Dématérialisation</li>
                                                <li>Archives cabinet</li>
                                                <li>OCR</li>
                                                <li>Transition numérique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - cabinet - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_cabinet_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>02</span>
                                            <span className='description__title--text'>Digitalisation des 800 pièces d'un dossier de procédure transmis en papier</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un avocat reçoit un dossier de 800 pièces en format papier transmis par la partie adverse lors de la communication des pièces. Il doit les intégrer rapidement dans son système de gestion de dossiers.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Scan des 800 pièces avec alimentation haute cadence via OmniScan</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR et reconnaissance automatique du type de document&nbsp;: jugements, actes, factures, courriers</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des métadonnées clés&nbsp;: dates, parties, montants, références</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Indexation dans le dossier numérique du cabinet avec cotes attribuées automatiquement</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                800 pièces numérisées et indexées en 4h. Dossier entièrement consultable avant l'audience.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Procédure civile</li>
                                                <li>Communication des pièces</li>
                                                <li>Indexation</li>
                                                <li>Dossier numérique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - cabinet - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_cabinet_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>03</span>
                                            <span className='description__title--text'>Numérisation du fonds d'actes d'un office notarial en reprise</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un office notarial reprend le fonds d'un confrère retraité comprenant 25 ans d'actes originaux. Ces documents doivent être numérisés et intégrés dans le système de l'office repreneur.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des actes avec détection automatique du type&nbsp;: vente, succession, bail, société</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR spécialisé sur les documents juridiques à typographie variée, incluant tampons et signatures</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des métadonnées&nbsp;: date de l'acte, parties, notaire instrumentant, nature du bien</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Indexation dans le répertoire chronologique et par client, conforme aux obligations légales</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                25 ans d'actes numérisés et indexés en 5 semaines. Continuité du service garantie dès la reprise.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Notariat</li>
                                                <li>Reprise de fonds</li>
                                                <li>Actes notariés</li>
                                                <li>Conformité légale</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* OmniScan - ministère */}
                                <div
                                    className={`${contentOmniscan != 'ministere' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* OmniScan - ministère - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_ministere_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>01</span>
                                            <span className='description__title--text'>Numérisation des archives du Journal Officiel — 30 ans de textes</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un ministère de la Justice souhaite rendre recherchables 30 ans de Journaux Officiels stockés en format papier. Ces textes sont inaccessibles aux citoyens et aux praticiens du droit.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation haute résolution des JO papier avec gestion des formats et états variables</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR multicolonne adapté à la mise en page spécifique des journaux officiels</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction structurée&nbsp;: numéro, date, nature du texte, émetteur, référence officielle</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Indexation full-text et livraison pour intégration dans le portail juridique national</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                30 ans de textes indexés et accessibles. Temps de recherche d'un texte&nbsp;: quelques secondes vs plusieurs jours d'archive.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Journal officiel</li>
                                                <li>Archives nationales</li>
                                                <li>OCR</li>
                                                <li>Accès au droit</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - ministère - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_ministere_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>02</span>
                                            <span className='description__title--text'>Digitalisation des registres d'état civil pour un programme de modernisation</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un programme de modernisation de l'état civil vise à numériser les registres de naissance, mariage et décès de 150 communes pour permettre la délivrance d'actes en ligne.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Déploiement mobile d'OmniScan dans les communes selon un calendrier par région</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR spécialisé sur les registres manuscrits et dactylographiés anciens</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction structurée&nbsp;: nom, prénom, date, commune, officier d'état civil</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Validation des données et signalement des cas ambigus pour vérification manuelle</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                2 millions d'actes numérisés. Délai de délivrance d'un acte réduit de 3 semaines à quelques jours.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>État civil</li>
                                                <li>Registres</li>
                                                <li>Modernisation</li>
                                                <li>Service public numérique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - ministère - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_ministere_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>03</span>
                                            <span className='description__title--text'>Dématérialisation des dossiers d'un tribunal administratif</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un tribunal administratif dispose de 12 000 dossiers papier en cours. La réforme de la justice administrative impose la dématérialisation complète dans un délai de 18 mois.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des nouveaux dossiers en flux continu à l'entrée du greffe</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>Traitement rétrospectif des 12 000 dossiers existants par lots priorisés par date d'audience</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>OCR des actes de procédure&nbsp;: requêtes, mémoires, pièces jointes, ordonnances</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Livraison dans un format compatible avec le logiciel de gestion des affaires de la juridiction</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                12 000 dossiers dématérialisés en 16 mois. Audience préparée avec un dossier numérique complet.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Justice administrative</li>
                                                <li>Greffe</li>
                                                <li>Dématérialisation</li>
                                                <li>Réforme judiciaire</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* OmniScan - université */}
                                <div
                                    className={`${contentOmniscan != 'universite' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* OmniScan - université - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_universite_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>01</span>
                                            <span className='description__title--text'>Numérisation d'une collection de décisions judiciaires historiques</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un centre de recherche juridique détient des milliers de décisions manuscrites des années 1960–1985, patrimoine inestimable mais totalement inaccessible aux chercheurs faute de numérisation.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>OCR spécialisé sur les documents manuscrits et typographies judiciaires des années 60-80</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>Reconnaissance des structures&nbsp;: en-tête de juridiction, attendus, dispositif</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des métadonnées&nbsp;: juridiction, date, parties, matière, résultat</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Mise à disposition dans une base consultable par les chercheurs du laboratoire</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                25 ans de jurisprudence historique rendue accessible. Valorisation d'un patrimoine juridique jusqu'ici inexploitable.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Patrimoine juridique</li>
                                                <li>OCR manuscrit</li>
                                                <li>Archives judiciaires</li>
                                                <li>Recherche historique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - université - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_universite_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>02</span>
                                            <span className='description__title--text'>Digitalisation du fonds de revues juridiques africaines épuisées</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                La bibliothèque de droit d'une université veut numériser 20 ans de revues juridiques africaines épuisées et introuvables, pour les mettre à disposition des étudiants en ligne.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des revues avec correction automatique des pages mal exposées ou légèrement froissées</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR haute précision sur les textes juridiques en français avec gestion des notes de bas de page</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Génération des métadonnées bibliographiques&nbsp;: auteur, titre, volume, numéro, date, résumé</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Livraison dans un format compatible avec le portail numérique de la bibliothèque universitaire</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                20 ans de revues numérisées et accessibles en ligne. Collection disponible 24h/24 pour tous les campus.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Bibliothèque juridique</li>
                                                <li>Revues africaines</li>
                                                <li>Numérisation</li>
                                                <li>Patrimoine académique</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - université - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_universite_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>03</span>
                                            <span className='description__title--text'>Numérisation des thèses soutenues pour constitution d'un corpus de doctrine</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un réseau de 8 universités francophones veut numériser 20 ans de thèses de doctorat en droit soutenues dans ses établissements pour créer un corpus de doctrine juridique panafricain.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des thèses reliées avec alimentation automatique page par page</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR adapté aux mises en page académiques&nbsp;: notes de bas de page, bibliographies, tableaux</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des métadonnées&nbsp;: auteur, directeur, université, date, discipline, résumé</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Indexation et intégration dans le portail documentaire commun du réseau universitaire</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                5 000 thèses numérisées en 4 mois. Premier corpus de doctrine juridique francophone d'Afrique.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Thèses de droit</li>
                                                <li>Doctrine</li>
                                                <li>Corpus de recherche</li>
                                                <li>Réseau universitaire</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* OmniScan - recherche */}
                                <div
                                    className={`${contentOmniscan != 'recherche' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* OmniScan - recherche - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_recherche_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>01</span>
                                            <span className='description__title--text'>Numérisation de décisions de justice pour un dataset d'analyse empirique</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un laboratoire de droit empirique a collecté 8 000 décisions de justice en format papier sur 15 ans. Leur numérisation est le préalable indispensable à la construction d'un dataset d'analyse quantitative.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation par lot des décisions papier avec tri automatique en cours de traitement</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR haute précision avec détection des structures juridiques&nbsp;: attendus, dispositif, référencese</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des variables&nbsp;: juridiction, date, matière, type de décision</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Export en format structuré prêt pour l'analyse statistique</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                8 000 décisions numérisées et structurées en 3 semaines. Dataset prêt pour 3 axes de recherche simultanés.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Empirical legal studies</li>
                                                <li>Dataset juridique</li>
                                                <li>Numérisation en masse</li>
                                                <li>Droit quantitatif</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - recherche - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_recherche_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>02</span>
                                            <span className='description__title--text'>Digitalisation des archives d'un observatoire des droits humains</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un observatoire régional dispose de 20 ans de rapports terrain, correspondances et documents probatoires en format papier. Ces archives constituent la mémoire irremplaçable des violations documentées.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span> Numérisation sécurisée avec gestion rigoureuse de la chaîne de custody documentaire</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR sur des documents parfois dégradés, froissés ou partiellement illisibles</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des entités nommées&nbsp;: lieux, dates, victimes, auteurs présumés</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Livraison dans une archive sécurisée avec contrôle strict des droits d'accès</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                20 ans de documentation numérisée et sécurisée. Archives préservées et admissibles comme preuves devant les juridictions.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Droits humains</li>
                                                <li>Archives probatoires</li>
                                                <li>Chaîne de custody</li>
                                                <li>Justice internationale</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - recherche - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_recherche_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>03</span>
                                            <span className='description__title--text'>Numérisation des codes juridiques pour un programme régional de documentation</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un programme régional de documentation du droit veut numériser les codes juridiques officiels (civil, pénal, commerce, travail) de 10 pays en version papier originale pour les rendre accessibles.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des codes officiels avec gestion des structures multicolonnes et des renvois</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR spécialisé sur les documents juridiques densément structurés</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Reconnaissance des articles, alinéas et notes marginales</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Génération de versions numériques structurées prêtes pour intégration dans les bases légales</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                Codes de 10 pays numérisés et structurés en 6 semaines. Fondement d'un corpus légal régional accessible.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Codes juridiques</li>
                                                <li>Documentation du droit</li>
                                                <li>Numérisation</li>
                                                <li>Droit africain</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* OmniScan - inhouse */}
                                <div
                                    className={`${contentOmniscan != 'inhouse' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* OmniScan - inhouse - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_inhouse_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>01</span>
                                            <span className='description__title--text'>Dématérialisation des archives contractuelles d'un groupe industriel</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Un groupe industriel présent dans 4 pays accumule des contrats papier depuis 15 ans (fournisseurs, clients, baux, concessions) dispersés dans 6 sites. La recherche d'un contrat prend en moyenne une demi-journée.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des archives contractuelles sur tous les sites en parallèle</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR et reconnaissance automatique du type de contrat</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des données clés&nbsp;: parties, objet, date, durée, échéances</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Livraison dans la base contractuelle de l'entreprise avec classement automatique</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                15 ans de contrats numérisés en 4 semaines. Temps de recherche d'un contrat&nbsp;: moins d'une minute.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Archives contractuelles</li>
                                                <li>Dématérialisation</li>
                                                <li>Groupe industriel</li>
                                                <li>Efficacité opérationnelle</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - inhouse - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_inhouse_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>02</span>
                                            <span className='description__title--text'>Numérisation des dossiers RH pour la gestion des contentieux prud'homaux</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Une direction juridique sociale gère des contentieux prud'homaux dans 3 pays. Les dossiers RH des salariés concernés sont en format papier dans les DRH locales et prennent 10 jours à obtenir.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des dossiers salariés ciblés dans les DRH locales à la demande</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR des contrats de travail, avenants, bulletins de salaire, courriers disciplinaires</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des données&nbsp;: prise de poste, classification, rémunération, historique disciplinaire</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Transmission sécurisée du dossier numérisé à la direction juridique groupe sous 48h</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                Dossiers disponibles en 48h vs 10 jours habituellement. Dossiers de plaidoirie préparés avec tous les éléments.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Droit social</li>
                                                <li>Contentieux prud'homal</li>
                                                <li>Dossiers RH</li>
                                                <li>Numérisation à la demande</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - inhouse - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_inhouse_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>03</span>
                                            <span className='description__title--text'>Digitalisation des baux commerciaux d'une société foncière</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Une foncière gère 200 baux commerciaux tous en format papier. Elle n'a aucune visibilité consolidée sur les échéances, les révisions de loyer et les clauses spécifiques de chaque bail
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation des 200 baux en flux centralisé via OmniScann</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>
                                                    OCR et extraction des clauses clés&nbsp;: durée, loyer, révision, préemption, résiliation</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Structuration dans une base de données avec toutes les données essentielles par bail de la jurisprudence disponible sur les contentieux fréquents dans le secteur</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Livraison du fichier structuré pour intégration dans l'outil de gestion locative de la foncière</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                200 baux structurés en 1 semaine. Première vision consolidée du portefeuille locatif.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Baux commerciaux</li>
                                                <li>Foncière</li>
                                                <li>Portefeuille locatif</li>
                                                <li>Gestion patrimoniale</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* OmniScan - organisation */}
                                <div
                                    className={`${contentOmniscan != 'organisation' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* OmniScan - organisation - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_organisation_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>01</span>
                                            <span className='description__title--text'>Numérisation des archives législatives nationales — programme OIF</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                L'OIF finance la numérisation des archives législatives de 4 pays francophones pour préserver le patrimoine juridique et le rendre accessible aux citoyens, aux praticiens et aux chercheurs.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Déploiement d'OmniScan sur site dans les 4 pays avec formation des équipes locales</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR sur des documents d'âges et d'états variés en français et langues nationales</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Structuration des métadonnées selon les standards internationaux d'archivage</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Livraison progressive au portail open access commun aux pays participants</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                300 000 pages numérisées et indexées. Patrimoine juridique accessible en ligne pour la première fois.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>OIF</li>
                                                <li>Francophonie</li>
                                                <li>Archives nationales</li>
                                                <li>Patrimoine juridique</li>
                                                <li>Open access</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - organisation - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_organisation_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>02</span>
                                            <span className='description__title--text'>Dématérialisation des rapports terrain d'une ONG droits humains</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Une ONG internationale reçoit chaque mois 300 rapports terrain papier de ses équipes dans 8 pays. Ces documents probatoires doivent être numérisés et sécurisés pour les procédures devant les organes de traités.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Numérisation mensuelle des rapports terrain avec horodatage certifié</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR avec préservation de la mise en page originale comme document probatoire</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Extraction des métadonnées&nbsp;: pays, date, auteur, type d'incident</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Archivage sécurisé et chiffré avec traçabilité complète de tous les accès</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                Rapports disponibles et sécurisés dans les 48h de réception. Admissibilité comme preuves garantie.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>ONG</li>
                                                <li>Droits humains</li>
                                                <li>Documents probatoires</li>
                                                <li>Archivage sécurisé</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* OmniScan - organisation - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`omniscan_organisation_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentOmniscan}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number omniscan'>03</span>
                                            <span className='description__title--text'>Numérisation des textes légaux pour un programme d'harmonisation régionale</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                Une organisation d'intégration régionale a besoin des textes législatifs de ses 10 États membres en format numérique structuré pour alimenter les travaux de son programme d'harmonisation normative.
                                            </p>
                                            <p className='description__subtitle omniscan'>Workflow sur Omniscan</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>Collecte et numérisation des codes et lois en vigueur dans les 10 États membres</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>OCR adapté aux formats légaux variés selon les traditions juridiques des États</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>Normalisation et structuration des textes dans un format XML commun</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>Livraison à la base documentaire de l'organisation pour les travaux d'harmonisation</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                Corpus de 10 pays disponible en 5 semaines. Travaux d'harmonisation lancés avec 3 mois d'avance sur le calendrier.
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Harmonisation régionale</li>
                                                <li>Corpus législatif</li>
                                                <li>Intégration</li>
                                                <li>Normalisation</li>
                                            </ul>
                                        </div>
                                    </div>
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