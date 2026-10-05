import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import '../assets/styles/useCases.css';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';

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

import useLang from '../i18n/useLang';

const UseCases = () => {

    const { tr } = useLang();

    const [searchParams, setSearchParams] = useSearchParams();

    const [isMobile, setIsMobile] = useState(false);
    const [content, setContent] = useState(searchParams.get("content") || "omnia");
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

    return (
        <main className="main main__cases">
            <SEOHead
                title={tr("Cas d'usage LegOmnia : avocats, juristes, institutions", "LegOmnia use cases: lawyers, in-house counsel, institutions")}
                description={tr("Découvrez comment avocats, juristes d'entreprise, institutions publiques et investisseurs utilisent LegOmnia pour accélérer leur recherche juridique en Afrique francophone.", "Discover how lawyers, in-house counsel, public institutions and investors use LegOmnia to speed up their legal research in French-speaking Africa.")}
                canonical="/produits/use-cases"
            />

            {/* Hero */}
            <section className="hero" >
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h3 className='subtitle'>{tr("Cas d'usage par produit et profil client", "Use cases by product and client profile")}</h3>
                        <h1 className='main-title'>
                            {tr("Une suite conçue pour", "A suite designed for")} <em className='highlight'>{tr("chaque acteur juridique", "every legal stakeholder")}</em>
                        </h1>
                        <p className="subtitle">{tr("Sélectionnez un produit, puis un profil client pour explorer les cas d'usage", "Select a product, then a client profile to explore the use cases")}</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="cases__navigation">
                <div className="container">
                    <ul className="cases__navigation--nav">
                        <li className={`card omnia ${content === 'omnia' ? 'isActive' : ""}`}>
                            <h4 className="title">Omnia</h4>
                            <p className="text">{tr("Moteur de recherche juridique & veille législative en Afrique francophone", "Legal search engine & legislative monitoring in French-speaking Africa")}</p>
                            {isMobile ? (
                                <a
                                    className='ui__btn'
                                    href="#omnia"
                                    onClick={() => {
                                        setContent("omnia");
                                    }}
                                >{tr("Voir les cas d'usage", "See the use cases")}</a>
                            ) : (
                                <button
                                    className='ui__btn'
                                    onClick={() => {
                                        setContent("omnia");
                                    }}
                                >{tr("Voir les cas d'usage", "See the use cases")}</button>
                            )}
                        </li>
                        <li className={`card omniscan ${content === 'omniscan' ? 'isActive' : ""}`}>
                            <h4 className="title">OmniScan</h4>
                            <p className="text">{tr("Solution de digitalisation de la documentation juridique par OCR", "OCR-based solution for digitizing legal documentation")}</p>
                            {isMobile ? (
                                <a
                                    className='ui__btn--gradient'
                                    href="#omniscan"
                                    onClick={() => {
                                        setContent("omniscan");
                                    }}
                                >{tr("Voir les cas d'usage", "See the use cases")}</a>
                            ) : (
                                <button
                                    className='ui__btn--gradient'
                                    onClick={() => {
                                        setContent("omniscan");
                                    }}
                                >{tr("Voir les cas d'usage", "See the use cases")}</button>
                            )}
                        </li>
                        <li className={`card geode ${content === 'geode' ? 'isActive' : ""}`}>
                            <h4 className="title">Géode</h4>
                            <p className="text">{tr("GED intelligente pour professionnels du droit, administrations et entreprises", "Smart document management for legal professionals, public administrations and companies")}</p>
                            {isMobile ? (
                                <a
                                    className='ui__btn--gradientSecond'
                                    href="#geode"
                                    onClick={() => {
                                        setContent("geode");
                                    }}
                                >{tr("Voir les cas d'usage", "See the use cases")}</a>
                            ) : (
                                <button
                                    className='ui__btn--gradientSecond'
                                    onClick={() => {
                                        setContent("geode");
                                    }}
                                >{tr("Voir les cas d'usage", "See the use cases")}</button>
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
                                <span className="ui__tag omnia">{tr("RECHERCHE JURIDIQUE", "LEGAL RESEARCH")}</span>
                            </div>
                            <ul className='title__list'>
                                <li>{tr("Moteur de recherche jurisprudentielle", "Case law search engine")}</li>
                                <li>{tr("Veille législative manuelle", "Manual legislative monitoring")}</li>
                                <li>{tr("Afrique francophone", "French-speaking Africa")}</li>
                                <li>{tr("Analyse comparative", "Comparative analysis")}</li>
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
                                    {tr("Cabinet juridique", "Law firm")}
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    {tr("Ministère", "Ministry")}
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    {tr("Université", "University")}
                                </li>
                                <li 
                                    className={`item ${contentOmnia === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmnia("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheColorOmnia} alt="" aria-hidden="true" className="color"/>
                                    {tr("Recherche", "Research")}
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
                                    {tr("Organisation", "Organization")}
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
                                            <span className='description__title--text'>{tr("Recherche jurisprudentielle pour préparer une plaidoirie OHADA", "Case law research to prepare an OHADA pleading")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un avocat prépare un contentieux commercial impliquant une clause de non-concurrence entre deux sociétés sénégalaises. Il doit identifier les décisions OHADA pertinentes et les textes applicables avant l'audience.", "A lawyer is preparing a commercial dispute involving a non-compete clause between two Senegalese companies. They must identify the relevant OHADA decisions and applicable texts before the hearing.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Lancement d'une recherche ciblée sur Omnia : jurisprudence OHADA relative aux clauses de non-concurrence", "Targeted search on Omnia: OHADA case law on non-compete clauses")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Filtrage des résultats par période pour ne retenir que les décisions des 5 dernières années", "Filtering results by period to keep only decisions from the last 5 years")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Lecture et sélection manuelles des arrêts les plus pertinents parmi les résultats", "Manual review and selection of the most relevant rulings among the results")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Synthèse des arguments jurisprudentiels retenus intégrée dans les conclusions", "Summary of the selected case law arguments incorporated into the submissions")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Gain estimé à 3h de recherche manuelle. 8 décisions pertinentes identifiées en moins de 30 minutes.", "An estimated 3 hours of manual research saved. 8 relevant decisions identified in under 30 minutes.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>OHADA</li>
                                                <li>{tr("Jurisprudence", "Case law")}</li>
                                                <li>{tr("Clause de non-concurrence", "Non-compete clause")}</li>
                                                <li>{tr("Droits des affaires", "Business law")}</li>
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
                                            <span className='description__title--text'>{tr("Constitution d'une bibliothèque de précédents en droit foncier", "Building a library of land law precedents")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un associé intègre un nouveau cabinet et doit constituer une base de références internes sur le droit foncier pour 4 pays d'Afrique de l'Ouest (Sénégal, Côte d'Ivoire, Mali, Burkina Faso).", "A partner joining a new firm must build an internal reference base on land law for 4 West African countries (Senegal, Côte d'Ivoire, Mali, Burkina Faso).")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherches successives par pays sur les textes fonciers : codes domaniaux, décrets d'application", "Country-by-country searches on land texts: land codes, implementing decrees")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des décisions de justice disponibles sur les litiges fonciers dans chaque pays", "Identification of available court decisions on land disputes in each country")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Structuration thématique manuelle : expropriation, baux emphytéotiques, titres fonciers", "Manual thematic structuring: expropriation, long-term leases, land titles")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Constitution d'un dossier de références classé par pays et par thème", "Building a reference file organized by country and topic")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Base documentaire de 80+ références constituée en 3 jours. Accès rapide aux précédents pour toute l'équipe.", "A database of 80+ references built in 3 days. Quick access to precedents for the whole team.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Droit foncier", "Land law")}</li>
                                                <li>{tr("Sénégal", "Senegal")}</li>
                                                <li>Côte d'Ivoire</li>
                                                <li>Mali</li>
                                                <li>{tr("Bibliothèque de précédents", "Precedent library")}</li>
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
                                            <span className='description__title--text'>{tr("Vérification de la conformité d'un contrat avec le droit OHADA applicable", "Checking a contract's compliance with applicable OHADA law")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un avocat doit analyser un contrat de distribution soumis par un client pour identifier les clauses potentiellement contraires à l'Acte Uniforme OHADA sur le droit commercial général.", "A lawyer must review a distribution agreement submitted by a client to identify clauses that may conflict with the OHADA Uniform Act on General Commercial Law.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des dispositions de l'AUDC applicables aux contrats de distribution", "Search on Omnia for AUDCG provisions applicable to distribution agreements")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des clauses impératives et de la jurisprudence CCJA sur les manquements", "Identification of mandatory clauses and CCJA case law on breaches")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Lecture du contrat et confrontation clause par clause avec les textes identifiés", "Review of the contract and clause-by-clause comparison with the identified texts")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Rédaction d'une note de conformité à destination du client", "Drafting a compliance memo for the client")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Analyse de conformité réalisée en une demi-journée. 3 clauses problématiques identifiées et corrigées avant signature.", "Compliance review completed in half a day. 3 problematic clauses identified and corrected before signing.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>OHADA</li>
                                                <li>{tr("Contrat de distribution", "Distribution agreement")}</li>
                                                <li>{tr("Conformité", "Compliance")}</li>
                                                <li>{tr("AUDC", "AUDCG")}</li>
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
                                            <span className='description__title--text'>{tr("Vérification de la conformité d'un projet de texte avec les directives régionales", "Checking a draft text's compliance with regional directives")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("La direction des affaires juridiques prépare un décret sur la commande publique et doit s'assurer de sa cohérence avec les directives UEMOA en vigueur avant soumission au Conseil des ministres.", "The legal affairs department is preparing a decree on public procurement and must ensure it is consistent with the WAEMU directives in force before submitting it to the Council of Ministers.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des directives UEMOA applicables en matière de commande publique", "Search on Omnia for WAEMU directives applicable to public procurement")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des articles potentiellement en tension avec le projet de décret", "Identification of articles potentially in conflict with the draft decree")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Comparaison manuelle du projet avec les transpositions réalisées par d'autres États membres", "Manual comparison of the draft with transpositions adopted by other member states")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Rédaction d'une note de conformité avec recommandations de mise à jour", "Drafting a compliance memo with recommended updates")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Décret publié sans contentieux. Analyse réalisée en 4 jours vs 3 semaines de recherche manuelle.", "Decree published without litigation. Analysis completed in 4 days vs 3 weeks of manual research.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("UEMOA", "WAEMU")}</li>
                                                <li>{tr("Commande publique", "Public procurement")}</li>
                                                <li>{tr("Conformité réglementaire", "Regulatory compliance")}</li>
                                                <li>{tr("Harmonisation", "Harmonization")}</li>
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
                                            <span className='description__title--text'>{tr("Documentation comparative pour l'élaboration d'un nouveau code de procédure", "Comparative documentation for drafting a new code of procedure")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Le ministère de la Justice engage une réforme de son code de procédure pénale. La direction législative doit collecter et comparer les codes de procédure de 5 pays d'Afrique francophone comme base de travail.", "The Ministry of Justice is reforming its code of criminal procedure. The legislative department must collect and compare the codes of procedure of 5 French-speaking African countries as a working basis.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des codes de procédure pénale disponibles pour les pays ciblés", "Search on Omnia for the codes of criminal procedure available for the target countries")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Extraction des dispositions comparables sur les thèmes clés : garde à vue, instruction, appel", "Extraction of comparable provisions on key topics: police custody, investigation, appeal")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Identification des réformes récentes adoptées par les pays étudiés", "Identification of recent reforms adopted by the countries studied")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Constitution d'un dossier comparatif structuré par thème pour la commission de réforme", "Building a comparative file structured by topic for the reform committee")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Dossier comparatif de 5 pays produit en 1 semaine. La commission démarre ses travaux sur une base documentaire solide.", "A 5-country comparative file produced in 1 week. The committee starts its work on a solid documentary basis.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Réforme législative", "Legislative reform")}</li>
                                                <li>{tr("Procédure pénale", "Criminal procedure")}</li>
                                                <li>{tr("Droit comparé", "Comparative law")}</li>
                                                <li>{tr("Afrique francophone", "French-speaking Africa")}</li>
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
                                            <span className='description__title--text'>{tr("Préparation d'une réponse à une question parlementaire sur l'état du droit", "Preparing an answer to a parliamentary question on the state of the law")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un directeur des affaires juridiques doit préparer en 48h une note sur l'encadrement juridique actuel de la sous-traitance dans le secteur minier pour répondre à une question parlementaire écrite.", "A director of legal affairs must prepare, within 48 hours, a memo on the current legal framework for subcontracting in the mining sector to answer a written parliamentary question.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche ciblée sur Omnia : législation minière et réglementation de la sous-traitance", "Targeted search on Omnia: mining legislation and subcontracting regulations")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des textes nationaux en vigueur et de la jurisprudence disponible", "Identification of national texts in force and available case law")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Recherche des engagements internationaux ratifiés applicables au secteur", "Search for ratified international commitments applicable to the sector")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Synthèse structurée en note de 4 pages pour le ministre", "Structured summary in a 4-page memo for the minister")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Analyse de conformité réalisée en une demi-journée. 3 clauses problématiques identifiées et corrigées avant signature.", "Compliance review completed in half a day. 3 problematic clauses identified and corrected before signing.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Droit minier", "Mining law")}</li>
                                                <li>{tr("Sous-traitance", "Subcontracting")}</li>
                                                <li>{tr("Question parlementaire", "Parliamentary question")}</li>
                                                <li>{tr("Note juridique", "Legal memo")}</li>
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
                                            <span className='description__title--text'>{tr("Actualisation d'un cours de droit des affaires OHADA", "Updating an OHADA business law course")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un professeur de droit des affaires à l'Université de Dakar prépare son syllabus de l'année. Il a besoin des arrêts CCJA les plus récents sur le droit des sociétés pour renouveler ses travaux dirigés.", "A business law professor at the University of Dakar is preparing the year's syllabus. They need the most recent CCJA rulings on company law to refresh their tutorials.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des décisions CCJA récentes en droit des sociétés", "Search on Omnia for recent CCJA decisions on company law")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Sélection des arrêts présentant un intérêt pédagogique : revirement, précision de principe", "Selection of rulings of teaching value: reversals, clarifications of principle")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Lecture des décisions et rédaction de fiches de TD annotées pour chaque arrêt retenu", "Review of the decisions and drafting of annotated tutorial sheets for each selected ruling")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Constitution d'un corpus de TD actualisé prêt à distribuer aux étudiants", "Building an updated tutorial corpus ready to hand out to students")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Syllabus renouvelé en 1 journée. Étudiants formés sur de la jurisprudence récente, pas des arrêts de 2010.", "Syllabus refreshed in 1 day. Students trained on recent case law, not 2010 rulings.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>CCJA</li>
                                                <li>{tr("Droit des sociétés", "Company law")}</li>
                                                <li>{tr("TD", "Tutorials")}</li>
                                                <li>{tr("Pédagogie juridique", "Legal teaching")}</li>
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
                                            <span className='description__title--text'>{tr("Documentation d'une thèse en droit comparé OHADA", "Research for a doctoral thesis in OHADA comparative law")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un doctorant à l'Université de Lomé compare les régimes de responsabilité contractuelle dans les pays OHADA et les pays non-membres d'Afrique francophone encore régis par le Code civil hérité.", "A doctoral student at the University of Lomé is comparing contractual liability regimes in OHADA countries and non-member French-speaking African countries still governed by the inherited Civil Code.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherches successives par pays sur les textes de référence en droit des obligations", "Country-by-country searches on reference texts in the law of obligations")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification de la jurisprudence disponible par pays sur la responsabilité contractuelle", "Identification of available case law on contractual liability by country")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Recensement des articles doctrinaux africains pertinents accessibles sur la plateforme", "Inventory of relevant African legal scholarship available on the platform")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Constitution d'une bibliographie annotée structurée par pays et par sous-thème", "Building an annotated bibliography structured by country and sub-topic")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Phase de collecte documentaire réduite de 5 mois à 3 semaines. Le doctorant peut se concentrer sur l'analyse.", "Document collection phase cut from 5 months to 3 weeks. The doctoral student can focus on analysis.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Thèse de doctorat", "Doctoral thesis")}</li>
                                                <li>{tr("Droit comparé", "Comparative law")}</li>
                                                <li>{tr("Responsabilité contractuelle", "Contractual liability")}</li>
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
                                            <span className='description__title--text'>{tr("Préparation de cas pratiques pour un concours de la magistrature", "Preparing practical cases for a judicial service exam")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un directeur pédagogique d'une école de formation à la magistrature doit préparer 20 cas pratiques réalistes en droit commercial pour les examens de fin de formation.", "The academic director of a school for the judiciary must prepare 20 realistic practical cases in commercial law for the final exams.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche de situations contentieuses récentes dans les domaines commerciaux ciblés", "Search for recent disputes in the targeted commercial areas")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des décisions de justice utilisables comme base factuelle", "Identification of court decisions usable as a factual basis")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Sélection des affaires présentant des questions de droit suffisamment complexes", "Selection of cases raising sufficiently complex legal questions")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Rédaction des cas pratiques avec énoncés anonymisés et corrigés indicatifs", "Drafting practical cases with anonymized fact patterns and model answers")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("20 cas pratiques basés sur de vraies affaires, créés en 4 jours. Formation plus ancrée dans la réalité juridique.", "20 practical cases based on real matters, created in 4 days. Training more firmly rooted in legal reality.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("École de magistrature", "School for the judiciary")}</li>
                                                <li>{tr("Cas pratiques", "Practical cases")}</li>
                                                <li>{tr("Droit commercial", "Commercial law")}</li>
                                                <li>{tr("Formation juridique", "Legal training")}</li>
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
                                            <span className='description__title--text'>{tr("Analyse de l'évolution législative en droit de l'environnement", "Analyzing legislative trends in environmental law")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un chercheur d'un think tank étudie l'évolution des législations environnementales dans 8 pays d'Afrique de l'Ouest sur 10 ans pour évaluer leur degré d'alignement avec les engagements climatiques.", "A think-tank researcher is studying how environmental legislation has evolved in 8 West African countries over 10 years to assess its alignment with climate commitments.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherches successives par pays sur les textes environnementaux publiés sur la période", "Country-by-country searches on environmental texts published over the period")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des lois et décrets pertinents : eau, forêt, mines, déchets, énergie", "Identification of relevant laws and decrees: water, forestry, mining, waste, energy")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Analyse manuelle des contenus pour repérer les évolutions et points de convergence", "Manual content analysis to spot changes and points of convergence")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Construction d'un tableau comparatif de l'évolution normative par pays et par thème", "Building a comparative table of regulatory changes by country and topic")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Base documentaire de 120+ textes structurée en 2 semaines. Analyse publiée dans une revue académique francophone.", "A database of 120+ texts structured in 2 weeks. Analysis published in a French-language academic journal.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Droit de l'environnement", "Environmental law")}</li>
                                                <li>{tr("Afrique de l'Ouest", "West Africa")}</li>
                                                <li>{tr("Analyse comparative", "Comparative analysis")}</li>
                                                <li>{tr("Recherche académique", "Academic research")}</li>
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
                                            <span className='description__title--text'>{tr("Cartographie du droit de la famille dans les pays sahéliens", "Mapping family law in Sahel countries")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un observatoire régional étudie les disparités entre droit écrit et pratiques coutumières en matière de succession dans 4 pays sahéliens (Mali, Niger, Burkina Faso, Tchad).", "A regional observatory is studying the gaps between statutory law and customary practices regarding inheritance in 4 Sahel countries (Mali, Niger, Burkina Faso, Chad).")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche des codes de la famille en vigueur dans chaque pays", "Search for the family codes in force in each country")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des dispositions renvoyant au droit coutumier ou religieux", "Identification of provisions referring to customary or religious law")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Recherche de la jurisprudence disponible sur les conflits entre droit écrit et coutume", "Search for available case law on conflicts between statutory and customary law")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Cartographie comparative manuelle des zones de convergence et de divergence normative", "Manual comparative mapping of areas of regulatory convergence and divergence")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Rapport de cartographie produit en 4 semaines. Données solides pour des recommandations de politique publique.", "Mapping report produced in 4 weeks. Solid data for public policy recommendations.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Droit de la famille", "Family law")}</li>
                                                <li>{tr("Droit coutumier", "Customary law")}</li>
                                                <li>{tr("Pays sahéliens", "Sahel countries")}</li>
                                                <li>{tr("Pluralisme juridique", "Legal pluralism")}</li>
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
                                            <span className='description__title--text'>{tr("Étude sur le cadre juridique de la protection des données en Afrique francophone", "Study of the legal framework for data protection in French-speaking Africa")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un laboratoire de droit du numérique recense et compare les lois nationales sur la protection des données personnelles dans les pays francophones d'Afrique subsaharienne.", "A digital law research lab is inventorying and comparing national personal data protection laws in French-speaking sub-Saharan African countries.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche systématique des textes législatifs sur la protection des données dans chaque pays", "Systematic search for data protection legislation in each country")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des autorités de contrôle et de leurs pouvoirs dans les textes disponibles", "Identification of supervisory authorities and their powers in the available texts")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Comparaison des définitions et des droits accordés aux personnes concernées", "Comparison of definitions and the rights granted to data subjects")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Rédaction d'un état des lieux comparatif pour publication dans une revue spécialisée", "Drafting a comparative overview for publication in a specialized journal")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Panorama de 10 pays produit en 3 semaines. Premier état des lieux publié sur le sujet en langue française.", "A 10-country overview produced in 3 weeks. The first French-language review published on the subject.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Protection des données", "Data protection")}</li>
                                                <li>{tr("Droit du numérique", "Digital law")}</li>
                                                <li>{tr("Afrique subsaharienne", "Sub-Saharan Africa")}</li>
                                                <li>{tr("Étude comparative", "Comparative study")}</li>
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
                                            <span className='description__title--text'>{tr("Analyse réglementaire avant implantation dans un nouveau pays", "Regulatory analysis before entering a new country")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une fintech ivoirienne envisage de s'implanter au Sénégal. Le directeur juridique doit identifier le cadre réglementaire applicable aux services de paiement électronique avant de soumettre le dossier au COMEX.", "An Ivorian fintech is considering expanding into Senegal. The general counsel must identify the regulatory framework applicable to electronic payment services before submitting the case to the executive committee.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia du cadre légal sénégalais applicable au paiement électronique", "Search on Omnia for the Senegalese legal framework applicable to electronic payments")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des textes BCEAO applicables et des conditions d'agrément", "Identification of applicable BCEAO texts and licensing requirements")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Comparaison avec le cadre ivoirien pour identifier les principales différences", "Comparison with the Ivorian framework to identify the main differences")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Rédaction d'une note d'analyse remise au COMEX avec les étapes réglementaires à franchir", "Drafting an analysis memo for the executive committee setting out the regulatory steps to complete")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Note d'analyse complète produite en 3 jours. COMEX dispose d'une vision claire des prérequis avant décision.", "Full analysis memo produced in 3 days. The executive committee has a clear view of the prerequisites before deciding.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Fintech</li>
                                                <li>{tr("Paiement électronique", "Electronic payments")}</li>
                                                <li>BCEAO</li>
                                                <li>{tr("Sénégal", "Senegal")}</li>
                                                <li>{tr("Analyse réglementaire", "Regulatory analysis")}</li>
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
                                            <span className='description__title--text'>{tr("Vérification de la conformité d'un contrat avec le droit local", "Checking a contract's compliance with local law")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("La direction juridique d'un groupe industriel doit vérifier qu'un contrat de concession signé avec un partenaire burkinabè est conforme au droit des contrats en vigueur au Burkina Faso.", "The legal department of an industrial group must verify that a concession agreement signed with a Burkinabe partner complies with the contract law in force in Burkina Faso.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des textes du droit des obligations applicables au Burkina Faso", "Search on Omnia for texts on the law of obligations applicable in Burkina Faso")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des dispositions impératives et de la jurisprudence disponible sur le sujet", "Identification of mandatory provisions and available case law on the subject")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Lecture du contrat et confrontation avec les textes identifiés", "Review of the contract and comparison with the identified texts")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Rédaction d'une note de conformité avec les ajustements recommandés", "Drafting a compliance memo with recommended adjustments")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Conformité vérifiée en 2 jours. 2 clauses modifiées avant signature. Litige potentiel évité.", "Compliance verified in 2 days. 2 clauses amended before signing. Potential dispute avoided.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Burkina Faso</li>
                                                <li>{tr("Droit des contrats", "Contract law")}</li>
                                                <li>{tr("Contrat de concession", "Concession agreement")}</li>
                                                <li>{tr("Conformité juridique", "Legal compliance")}</li>
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
                                            <span className='description__title--text'>{tr("Documentation pour un audit légal avant une opération M&A", "Documentation for a legal audit ahead of an M&A transaction")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un directeur juridique prépare la phase de due diligence légale pour l'acquisition d'une entreprise de transport au Cameroun. Il doit rassembler les textes applicables aux secteurs concernés.", "A general counsel is preparing the legal due diligence phase for the acquisition of a transport company in Cameroon. They must gather the texts applicable to the sectors concerned.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des textes régissant le secteur du transport au Cameroun", "Search on Omnia for texts governing the transport sector in Cameroon")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification du droit du travail, du droit des sociétés OHADA et de la réglementation sectorielle applicables", "Identification of applicable labor law, OHADA company law and sector regulations")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Recherche de la jurisprudence disponible sur les contentieux fréquents dans le secteur", "Search for available case law on frequent disputes in the sector")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Constitution d'un dossier documentaire structuré remis aux avocats en charge de la due diligence", "Building a structured documentation file handed to the lawyers conducting the due diligence")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Dossier documentaire de référence produit en 2 jours. Les avocats externes démarrent leur mission avec une base complète.", "Reference documentation file produced in 2 days. External counsel start their engagement with a complete basis.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>M&A</li>
                                                <li>Due diligence</li>
                                                <li>{tr("Cameroun", "Cameroon")}</li>
                                                <li>{tr("Droit des transports", "Transport law")}</li>
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
                                            <span className='description__title--text'>{tr("Documentation pour un rapport de conformité aux conventions de droits humains", "Documentation for a human rights convention compliance report")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un bureau régional des droits humains prépare un rapport d'évaluation de la conformité des législations de 5 pays aux conventions internationales ratifiées, en vue d'une session de l'Examen Périodique Universel.", "A regional human rights office is preparing a report assessing how far the legislation of 5 countries complies with ratified international conventions, ahead of a Universal Periodic Review session.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des constitutions et lois pertinentes dans chacun des 5 pays", "Search on Omnia for the relevant constitutions and laws in each of the 5 countries")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des textes applicables aux droits évalués : expression, association, procès équitable", "Identification of texts applicable to the rights assessed: expression, association, fair trial")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Comparaison manuelle des dispositions nationales avec les exigences des conventions ratifiées", "Manual comparison of national provisions with the requirements of ratified conventions")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Structuration du rapport par pays et par droit fondamental avec les sources documentées", "Structuring the report by country and fundamental right, with documented sources")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Base documentaire pour 5 pays constituée en 2 semaines. Rapport EPU crédible fondé sur des sources primaires.", "A 5-country database built in 2 weeks. A credible UPR report based on primary sources.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Droits humains", "Human rights")}</li>
                                                <li>{tr("EPU", "UPR")}</li>
                                                <li>{tr("Droit international", "International law")}</li>
                                                <li>{tr("Conformité", "Compliance")}</li>
                                                <li>{tr("Afrique francophone", "French-speaking Africa")}</li>
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
                                            <span className='description__title--text'>{tr("Recherche comparative pour l'élaboration d'une directive régionale", "Comparative research for drafting a regional directive")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("La commission juridique d'une organisation d'intégration régionale prépare une directive sur la protection des données. Elle doit d'abord recenser les législations existantes parmi ses États membres.", "The legal committee of a regional integration organization is preparing a data protection directive. It must first inventory the existing legislation among its member states.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche des législations protection des données dans les États membres disposant de textes", "Search for data protection legislation in member states that have such texts")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des définitions, droits des personnes et obligations des responsables de traitement", "Identification of definitions, data subject rights and controller obligations")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Comparaison des contenus pour repérer les convergences et les lacunes à combler", "Comparison of content to identify convergences and gaps to fill")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Rédaction d'un rapport de recensement qui servira de base aux travaux de rédaction de la directive", "Drafting an inventory report to serve as the basis for drafting the directive")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("Recensement complet des législations existantes produit en 10 jours. Travaux de rédaction lancés sur des bases solides.", "Full inventory of existing legislation produced in 10 days. Drafting work launched on solid foundations.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Intégration régionale", "Regional integration")}</li>
                                                <li>{tr("Protection des données", "Data protection")}</li>
                                                <li>{tr("Harmonisation normative", "Regulatory harmonization")}</li>
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
                                            <span className='description__title--text'>{tr("État des lieux juridique pour un programme d'appui à la réforme fiscale", "Legal baseline for a tax reform support program")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une organisation internationale prépare un programme d'appui à la réforme fiscale dans 3 pays. Avant de définir les activités, les experts doivent disposer d'un état des lieux précis des législations fiscales en vigueur.", "An international organization is preparing a tax reform support program in 3 countries. Before defining activities, experts need an accurate picture of the tax legislation in force.")}
                                            </p>
                                            <p className='description__subtitle omnia'>{tr("Workflow sur Omnia", "Workflow on Omnia")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omnia">
                                                    <span>1</span>
                                                    <span>{tr("Recherche sur Omnia des codes généraux des impôts et textes fiscaux dans les 3 pays", "Search on Omnia for the general tax codes and tax texts in the 3 countries")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>2</span>
                                                    <span>{tr("Identification des principales dispositions sur l'impôt sur les sociétés, la TVA et les droits d'accises", "Identification of the main provisions on corporate tax, VAT and excise duties")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>3</span>
                                                    <span>{tr("Repérage des réformes récentes déjà adoptées pour éviter de proposer ce qui existe déjà", "Spotting recent reforms already adopted to avoid proposing what already exists")}</span>
                                                </li>
                                                <li className="list__step omnia">
                                                    <span>4</span>
                                                    <span>{tr("Synthèse comparative remise à l'équipe de conception du programme", "Comparative summary handed to the program design team")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omnia'>
                                                <img src={CheckOmnia} alt="" aria-hidden="true"/>
                                                {tr("État des lieux de 3 pays produit en 1 semaine. Programme d'appui conçu sur une base factuelle solide.", "A 3-country baseline produced in 1 week. Support program designed on a solid factual basis.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Réforme fiscale", "Tax reform")}</li>
                                                <li>{tr("Droit fiscal", "Tax law")}</li>
                                                <li>{tr("Programme de développement", "Development program")}</li>
                                                <li>{tr("Analyse pays", "Country analysis")}</li>
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
                                <span className="ui__tag omniscan">{tr("DIGITALISATION", "DIGITIZATION")}</span>
                            </div>
                            <ul className='title__list'>
                                <li>{tr("Numérisation de documents juridiques", "Legal document digitization")}</li>
                                <li>{tr("OCR haute précision", "High-precision OCR")}</li>
                                <li>{tr("Structuration et indexation", "Structuring and indexing")}</li>
                                <li>{tr("Traitement en masse", "Bulk processing")}</li>
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
                                    {tr("Cabinet juridique", "Law firm")}
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    {tr("Ministère", "Ministry")}
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    {tr("Université", "University")}
                                </li>
                                <li 
                                    className={`item ${contentOmniscan === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentOmniscan("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheColorOmniscan} alt="" aria-hidden="true" className="color"/>
                                    {tr("Recherche", "Research")}
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
                                    {tr("Organisation", "Organization")}
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
                                            <span className='description__title--text'>{tr("Numérisation des archives clients pour la transition au tout-numérique", "Digitizing client archives to go fully digital")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un cabinet de 12 avocats décide de supprimer le papier. Il dispose de 15 ans d'archives clients (actes, correspondances, pièces de procédure) stockées dans des classeurs physiques.", "A 12-lawyer firm decides to go paperless. It holds 15 years of client archives (deeds, correspondence, procedural documents) stored in physical binders.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation en masse des documents via OmniScan avec alimentation automatique", "Bulk digitization of documents via OmniScan with automatic feeding")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR haute précision sur chaque page pour rendre le contenu entièrement recherchable", "High-precision OCR on every page to make the content fully searchable")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Détection automatique du type de document : acte, jugement, courrier, contrat", "Automatic document type detection: deed, judgment, letter, contract")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Nommage structuré et organisation par dossier client selon la nomenclature du cabinet", "Structured naming and organization by client file according to the firm's naming conventions")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("15 ans d'archives numérisées en 3 semaines. Chaque document retrouvable en moins de 10 secondes.", "15 years of archives digitized in 3 weeks. Every document can be found in under 10 seconds.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Dématérialisation", "Paperless processing")}</li>
                                                <li>{tr("Archives cabinet", "Firm archives")}</li>
                                                <li>OCR</li>
                                                <li>{tr("Transition numérique", "Digital transition")}</li>
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
                                            <span className='description__title--text'>{tr("Digitalisation des 800 pièces d'un dossier de procédure transmis en papier", "Digitizing 800 exhibits from a case file served on paper")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un avocat reçoit un dossier de 800 pièces en format papier transmis par la partie adverse lors de la communication des pièces. Il doit les intégrer rapidement dans son système de gestion de dossiers.", "A lawyer receives an 800-exhibit file on paper from the opposing party during disclosure. They must quickly integrate it into their case management system.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Scan des 800 pièces avec alimentation haute cadence via OmniScan", "Scanning the 800 exhibits with high-speed feeding via OmniScan")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR et reconnaissance automatique du type de document : jugements, actes, factures, courriers", "OCR and automatic document type recognition: judgments, deeds, invoices, letters")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des métadonnées clés : dates, parties, montants, références", "Extraction of key metadata: dates, parties, amounts, references")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Indexation dans le dossier numérique du cabinet avec cotes attribuées automatiquement", "Indexing in the firm's digital file with automatically assigned exhibit numbers")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("800 pièces numérisées et indexées en 4h. Dossier entièrement consultable avant l'audience.", "800 exhibits digitized and indexed in 4 hours. Entire file searchable before the hearing.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Procédure civile", "Civil procedure")}</li>
                                                <li>{tr("Communication des pièces", "Disclosure of exhibits")}</li>
                                                <li>{tr("Indexation", "Indexing")}</li>
                                                <li>{tr("Dossier numérique", "Digital case file")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation du fonds d'actes d'un office notarial en reprise", "Digitizing the deed records of a notarial practice being taken over")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un office notarial reprend le fonds d'un confrère retraité comprenant 25 ans d'actes originaux. Ces documents doivent être numérisés et intégrés dans le système de l'office repreneur.", "A notarial practice is taking over the records of a retired colleague, including 25 years of original deeds. These documents must be digitized and integrated into the acquiring practice's system.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des actes avec détection automatique du type : vente, succession, bail, société", "Digitization of deeds with automatic type detection: sale, inheritance, lease, company")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR spécialisé sur les documents juridiques à typographie variée, incluant tampons et signatures", "Specialized OCR for legal documents with varied typography, including stamps and signatures")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des métadonnées : date de l'acte, parties, notaire instrumentant, nature du bien", "Metadata extraction: deed date, parties, officiating notary, type of property")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Indexation dans le répertoire chronologique et par client, conforme aux obligations légales", "Indexing in the chronological and client registers, in line with legal obligations")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("25 ans d'actes numérisés et indexés en 5 semaines. Continuité du service garantie dès la reprise.", "25 years of deeds digitized and indexed in 5 weeks. Service continuity guaranteed from day one of the takeover.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Notariat", "Notarial practice")}</li>
                                                <li>{tr("Reprise de fonds", "Practice takeover")}</li>
                                                <li>{tr("Actes notariés", "Notarial deeds")}</li>
                                                <li>{tr("Conformité légale", "Legal compliance")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation des archives du Journal Officiel — 30 ans de textes", "Digitizing Official Gazette archives — 30 years of texts")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un ministère de la Justice souhaite rendre recherchables 30 ans de Journaux Officiels stockés en format papier. Ces textes sont inaccessibles aux citoyens et aux praticiens du droit.", "A Ministry of Justice wants to make 30 years of paper Official Gazettes searchable. These texts are currently inaccessible to citizens and legal practitioners.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation haute résolution des JO papier avec gestion des formats et états variables", "High-resolution digitization of paper gazettes, handling varying formats and conditions")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR multicolonne adapté à la mise en page spécifique des journaux officiels", "Multi-column OCR adapted to the specific layout of official gazettes")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction structurée : numéro, date, nature du texte, émetteur, référence officielle", "Structured extraction: number, date, type of text, issuer, official reference")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Indexation full-text et livraison pour intégration dans le portail juridique national", "Full-text indexing and delivery for integration into the national legal portal")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("30 ans de textes indexés et accessibles. Temps de recherche d'un texte : quelques secondes vs plusieurs jours d'archive.", "30 years of texts indexed and accessible. Time to find a text: a few seconds vs several days in the archives.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Journal officiel", "Official Gazette")}</li>
                                                <li>{tr("Archives nationales", "National archives")}</li>
                                                <li>OCR</li>
                                                <li>{tr("Accès au droit", "Access to law")}</li>
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
                                            <span className='description__title--text'>{tr("Digitalisation des registres d'état civil pour un programme de modernisation", "Digitizing civil registers for a modernization program")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un programme de modernisation de l'état civil vise à numériser les registres de naissance, mariage et décès de 150 communes pour permettre la délivrance d'actes en ligne.", "A civil registry modernization program aims to digitize the birth, marriage and death registers of 150 municipalities so that certificates can be issued online.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Déploiement mobile d'OmniScan dans les communes selon un calendrier par région", "Mobile deployment of OmniScan in municipalities on a region-by-region schedule")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR spécialisé sur les registres manuscrits et dactylographiés anciens", "Specialized OCR for old handwritten and typewritten registers")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction structurée : nom, prénom, date, commune, officier d'état civil", "Structured extraction: surname, first name, date, municipality, registrar")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Validation des données et signalement des cas ambigus pour vérification manuelle", "Data validation and flagging of ambiguous cases for manual review")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("2 millions d'actes numérisés. Délai de délivrance d'un acte réduit de 3 semaines à quelques jours.", "2 million records digitized. Time to issue a certificate cut from 3 weeks to a few days.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("État civil", "Civil registry")}</li>
                                                <li>{tr("Registres", "Registers")}</li>
                                                <li>{tr("Modernisation", "Modernization")}</li>
                                                <li>{tr("Service public numérique", "Digital public service")}</li>
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
                                            <span className='description__title--text'>{tr("Dématérialisation des dossiers d'un tribunal administratif", "Going paperless for an administrative court's case files")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un tribunal administratif dispose de 12 000 dossiers papier en cours. La réforme de la justice administrative impose la dématérialisation complète dans un délai de 18 mois.", "An administrative court has 12,000 pending paper case files. The administrative justice reform requires going fully paperless within 18 months.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des nouveaux dossiers en flux continu à l'entrée du greffe", "Continuous digitization of new case files as they reach the court registry")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("Traitement rétrospectif des 12 000 dossiers existants par lots priorisés par date d'audience", "Backlog processing of the 12,000 existing files in batches prioritized by hearing date")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("OCR des actes de procédure : requêtes, mémoires, pièces jointes, ordonnances", "OCR of procedural documents: applications, briefs, attachments, orders")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Livraison dans un format compatible avec le logiciel de gestion des affaires de la juridiction", "Delivery in a format compatible with the court's case management software")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("12 000 dossiers dématérialisés en 16 mois. Audience préparée avec un dossier numérique complet.", "12,000 files digitized in 16 months. Hearings prepared with a complete digital file.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Justice administrative", "Administrative justice")}</li>
                                                <li>{tr("Greffe", "Court registry")}</li>
                                                <li>{tr("Dématérialisation", "Paperless processing")}</li>
                                                <li>{tr("Réforme judiciaire", "Judicial reform")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation d'une collection de décisions judiciaires historiques", "Digitizing a collection of historical court decisions")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un centre de recherche juridique détient des milliers de décisions manuscrites des années 1960–1985, patrimoine inestimable mais totalement inaccessible aux chercheurs faute de numérisation.", "A legal research center holds thousands of handwritten decisions from 1960–1985 — an invaluable heritage, but completely inaccessible to researchers because it has never been digitized.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("OCR spécialisé sur les documents manuscrits et typographies judiciaires des années 60-80", "Specialized OCR for handwritten documents and 1960s–80s court typography")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("Reconnaissance des structures : en-tête de juridiction, attendus, dispositif", "Structure recognition: court heading, reasoning, operative part")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des métadonnées : juridiction, date, parties, matière, résultat", "Metadata extraction: court, date, parties, subject matter, outcome")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Mise à disposition dans une base consultable par les chercheurs du laboratoire", "Made available in a database searchable by the lab's researchers")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("25 ans de jurisprudence historique rendue accessible. Valorisation d'un patrimoine juridique jusqu'ici inexploitable.", "25 years of historical case law made accessible. A previously unusable legal heritage brought to light.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Patrimoine juridique", "Legal heritage")}</li>
                                                <li>{tr("OCR manuscrit", "Handwriting OCR")}</li>
                                                <li>{tr("Archives judiciaires", "Court archives")}</li>
                                                <li>{tr("Recherche historique", "Historical research")}</li>
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
                                            <span className='description__title--text'>{tr("Digitalisation du fonds de revues juridiques africaines épuisées", "Digitizing a collection of out-of-print African law journals")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("La bibliothèque de droit d'une université veut numériser 20 ans de revues juridiques africaines épuisées et introuvables, pour les mettre à disposition des étudiants en ligne.", "A university law library wants to digitize 20 years of out-of-print, hard-to-find African law journals to make them available to students online.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des revues avec correction automatique des pages mal exposées ou légèrement froissées", "Digitization of journals with automatic correction of poorly exposed or slightly creased pages")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR haute précision sur les textes juridiques en français avec gestion des notes de bas de page", "High-precision OCR of French legal texts, including footnotes")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Génération des métadonnées bibliographiques : auteur, titre, volume, numéro, date, résumé", "Generation of bibliographic metadata: author, title, volume, issue, date, abstract")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Livraison dans un format compatible avec le portail numérique de la bibliothèque universitaire", "Delivery in a format compatible with the university library's digital portal")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("20 ans de revues numérisées et accessibles en ligne. Collection disponible 24h/24 pour tous les campus.", "20 years of journals digitized and available online. Collection accessible 24/7 on every campus.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Bibliothèque juridique", "Law library")}</li>
                                                <li>{tr("Revues africaines", "African journals")}</li>
                                                <li>{tr("Numérisation", "Digitization")}</li>
                                                <li>{tr("Patrimoine académique", "Academic heritage")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation des thèses soutenues pour constitution d'un corpus de doctrine", "Digitizing defended theses to build a body of legal scholarship")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un réseau de 8 universités francophones veut numériser 20 ans de thèses de doctorat en droit soutenues dans ses établissements pour créer un corpus de doctrine juridique panafricain.", "A network of 8 French-speaking universities wants to digitize 20 years of law PhD theses defended at its institutions to create a pan-African corpus of legal scholarship.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des thèses reliées avec alimentation automatique page par page", "Digitization of bound theses with automatic page-by-page feeding")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR adapté aux mises en page académiques : notes de bas de page, bibliographies, tableaux", "OCR adapted to academic layouts: footnotes, bibliographies, tables")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des métadonnées : auteur, directeur, université, date, discipline, résumé", "Metadata extraction: author, supervisor, university, date, discipline, abstract")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Indexation et intégration dans le portail documentaire commun du réseau universitaire", "Indexing and integration into the university network's shared document portal")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("5 000 thèses numérisées en 4 mois. Premier corpus de doctrine juridique francophone d'Afrique.", "5,000 theses digitized in 4 months. The first corpus of French-language legal scholarship from Africa.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Thèses de droit", "Law theses")}</li>
                                                <li>{tr("Doctrine", "Legal scholarship")}</li>
                                                <li>{tr("Corpus de recherche", "Research corpus")}</li>
                                                <li>{tr("Réseau universitaire", "University network")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation de décisions de justice pour un dataset d'analyse empirique", "Digitizing court decisions for an empirical analysis dataset")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un laboratoire de droit empirique a collecté 8 000 décisions de justice en format papier sur 15 ans. Leur numérisation est le préalable indispensable à la construction d'un dataset d'analyse quantitative.", "An empirical law lab has collected 8,000 paper court decisions spanning 15 years. Digitizing them is a prerequisite for building a quantitative analysis dataset.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation par lot des décisions papier avec tri automatique en cours de traitement", "Batch digitization of paper decisions with automatic sorting during processing")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR haute précision avec détection des structures juridiques : attendus, dispositif, références", "High-precision OCR with detection of legal structures: reasoning, operative part, references")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des variables : juridiction, date, matière, type de décision", "Variable extraction: court, date, subject matter, type of decision")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Export en format structuré prêt pour l'analyse statistique", "Export in a structured format ready for statistical analysis")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("8 000 décisions numérisées et structurées en 3 semaines. Dataset prêt pour 3 axes de recherche simultanés.", "8,000 decisions digitized and structured in 3 weeks. Dataset ready for 3 parallel research tracks.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>Empirical legal studies</li>
                                                <li>{tr("Dataset juridique", "Legal dataset")}</li>
                                                <li>{tr("Numérisation en masse", "Bulk digitization")}</li>
                                                <li>{tr("Droit quantitatif", "Quantitative legal studies")}</li>
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
                                            <span className='description__title--text'>{tr("Digitalisation des archives d'un observatoire des droits humains", "Digitizing a human rights observatory's archives")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un observatoire régional dispose de 20 ans de rapports terrain, correspondances et documents probatoires en format papier. Ces archives constituent la mémoire irremplaçable des violations documentées.", "A regional observatory holds 20 years of field reports, correspondence and evidentiary documents on paper. These archives are the irreplaceable record of documented violations.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span> {tr("Numérisation sécurisée avec gestion rigoureuse de la chaîne de custody documentaire", "Secure digitization with rigorous management of the documentary chain of custody")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR sur des documents parfois dégradés, froissés ou partiellement illisibles", "OCR on documents that are sometimes damaged, creased or partially illegible")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des entités nommées : lieux, dates, victimes, auteurs présumés", "Named entity extraction: places, dates, victims, alleged perpetrators")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Livraison dans une archive sécurisée avec contrôle strict des droits d'accès", "Delivery to a secure archive with strict access control")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("20 ans de documentation numérisée et sécurisée. Archives préservées et admissibles comme preuves devant les juridictions.", "20 years of documentation digitized and secured. Archives preserved and admissible as evidence in court.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Droits humains", "Human rights")}</li>
                                                <li>{tr("Archives probatoires", "Evidentiary archives")}</li>
                                                <li>{tr("Chaîne de custody", "Chain of custody")}</li>
                                                <li>{tr("Justice internationale", "International justice")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation des codes juridiques pour un programme régional de documentation", "Digitizing legal codes for a regional documentation program")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un programme régional de documentation du droit veut numériser les codes juridiques officiels (civil, pénal, commerce, travail) de 10 pays en version papier originale pour les rendre accessibles.", "A regional legal documentation program wants to digitize the official paper editions of the legal codes (civil, criminal, commercial, labor) of 10 countries to make them accessible.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des codes officiels avec gestion des structures multicolonnes et des renvois", "Digitization of official codes, handling multi-column layouts and cross-references")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR spécialisé sur les documents juridiques densément structurés", "Specialized OCR for densely structured legal documents")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Reconnaissance des articles, alinéas et notes marginales", "Recognition of articles, paragraphs and marginal notes")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Génération de versions numériques structurées prêtes pour intégration dans les bases légales", "Generation of structured digital versions ready for integration into legal databases")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("Codes de 10 pays numérisés et structurés en 6 semaines. Fondement d'un corpus légal régional accessible.", "Codes from 10 countries digitized and structured in 6 weeks. The foundation of an accessible regional legal corpus.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Codes juridiques", "Legal codes")}</li>
                                                <li>{tr("Documentation du droit", "Legal documentation")}</li>
                                                <li>{tr("Numérisation", "Digitization")}</li>
                                                <li>{tr("Droit africain", "African law")}</li>
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
                                            <span className='description__title--text'>{tr("Dématérialisation des archives contractuelles d'un groupe industriel", "Digitizing an industrial group's contract archives")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un groupe industriel présent dans 4 pays accumule des contrats papier depuis 15 ans (fournisseurs, clients, baux, concessions) dispersés dans 6 sites. La recherche d'un contrat prend en moyenne une demi-journée.", "An industrial group operating in 4 countries has accumulated 15 years of paper contracts (suppliers, customers, leases, concessions) spread across 6 sites. Finding a contract takes half a day on average.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des archives contractuelles sur tous les sites en parallèle", "Digitization of contract archives at all sites in parallel")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR et reconnaissance automatique du type de contrat", "OCR and automatic contract type recognition")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des données clés : parties, objet, date, durée, échéances", "Key data extraction: parties, purpose, date, term, deadlines")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Livraison dans la base contractuelle de l'entreprise avec classement automatique", "Delivery to the company's contract database with automatic filing")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("15 ans de contrats numérisés en 4 semaines. Temps de recherche d'un contrat : moins d'une minute.", "15 years of contracts digitized in 4 weeks. Time to find a contract: under a minute.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Archives contractuelles", "Contract archives")}</li>
                                                <li>{tr("Dématérialisation", "Paperless processing")}</li>
                                                <li>{tr("Groupe industriel", "Industrial group")}</li>
                                                <li>{tr("Efficacité opérationnelle", "Operational efficiency")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation des dossiers RH pour la gestion des contentieux prud'homaux", "Digitizing HR files to handle employment disputes")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une direction juridique sociale gère des contentieux prud'homaux dans 3 pays. Les dossiers RH des salariés concernés sont en format papier dans les DRH locales et prennent 10 jours à obtenir.", "An employment law department handles labor disputes in 3 countries. The HR files of the employees concerned are on paper at local HR departments and take 10 days to obtain.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des dossiers salariés ciblés dans les DRH locales à la demande", "On-demand digitization of targeted employee files at local HR departments")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR des contrats de travail, avenants, bulletins de salaire, courriers disciplinaires", "OCR of employment contracts, amendments, payslips, disciplinary letters")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des données : prise de poste, classification, rémunération, historique disciplinaire", "Data extraction: start date, job classification, pay, disciplinary history")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Transmission sécurisée du dossier numérisé à la direction juridique groupe sous 48h", "Secure transfer of the digitized file to the group legal department within 48 hours")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("Dossiers disponibles en 48h vs 10 jours habituellement. Dossiers de plaidoirie préparés avec tous les éléments.", "Files available in 48 hours vs the usual 10 days. Pleading files prepared with every element.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Droit social", "Employment law")}</li>
                                                <li>{tr("Contentieux prud'homal", "Employment disputes")}</li>
                                                <li>{tr("Dossiers RH", "HR files")}</li>
                                                <li>{tr("Numérisation à la demande", "On-demand digitization")}</li>
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
                                            <span className='description__title--text'>{tr("Digitalisation des baux commerciaux d'une société foncière", "Digitizing a property company's commercial leases")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une foncière gère 200 baux commerciaux tous en format papier. Elle n'a aucune visibilité consolidée sur les échéances, les révisions de loyer et les clauses spécifiques de chaque bail", "A property company manages 200 commercial leases, all on paper. It has no consolidated view of the expiry dates, rent reviews and specific clauses of each lease")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation des 200 baux en flux centralisé via OmniScan", "Digitization of the 200 leases in a centralized flow via OmniScan")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>
                                                    {tr("OCR et extraction des clauses clés : durée, loyer, révision, préemption, résiliation", "OCR and extraction of key clauses: term, rent, review, pre-emption, termination")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Structuration dans une base de données avec toutes les données essentielles par bail", "Structuring into a database with all the essential data for each lease")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Livraison du fichier structuré pour intégration dans l'outil de gestion locative de la foncière", "Delivery of the structured file for integration into the company's lease management tool")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("200 baux structurés en 1 semaine. Première vision consolidée du portefeuille locatif.", "200 leases structured in 1 week. The first consolidated view of the rental portfolio.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Baux commerciaux", "Commercial leases")}</li>
                                                <li>{tr("Foncière", "Property company")}</li>
                                                <li>{tr("Portefeuille locatif", "Rental portfolio")}</li>
                                                <li>{tr("Gestion patrimoniale", "Asset management")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation des archives législatives nationales — programme OIF", "Digitizing national legislative archives — OIF program")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("L'OIF finance la numérisation des archives législatives de 4 pays francophones pour préserver le patrimoine juridique et le rendre accessible aux citoyens, aux praticiens et aux chercheurs.", "The OIF (International Organisation of La Francophonie) is funding the digitization of the legislative archives of 4 French-speaking countries to preserve their legal heritage and make it accessible to citizens, practitioners and researchers.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Déploiement d'OmniScan sur site dans les 4 pays avec formation des équipes locales", "On-site deployment of OmniScan in the 4 countries with training for local teams")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR sur des documents d'âges et d'états variés en français et langues nationales", "OCR on documents of varying age and condition in French and national languages")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Structuration des métadonnées selon les standards internationaux d'archivage", "Metadata structured according to international archiving standards")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Livraison progressive au portail open access commun aux pays participants", "Phased delivery to the open-access portal shared by the participating countries")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("300 000 pages numérisées et indexées. Patrimoine juridique accessible en ligne pour la première fois.", "300,000 pages digitized and indexed. Legal heritage available online for the first time.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>OIF</li>
                                                <li>Francophonie</li>
                                                <li>{tr("Archives nationales", "National archives")}</li>
                                                <li>{tr("Patrimoine juridique", "Legal heritage")}</li>
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
                                            <span className='description__title--text'>{tr("Dématérialisation des rapports terrain d'une ONG droits humains", "Digitizing a human rights NGO's field reports")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une ONG internationale reçoit chaque mois 300 rapports terrain papier de ses équipes dans 8 pays. Ces documents probatoires doivent être numérisés et sécurisés pour les procédures devant les organes de traités.", "An international NGO receives 300 paper field reports every month from its teams in 8 countries. These evidentiary documents must be digitized and secured for proceedings before treaty bodies.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Numérisation mensuelle des rapports terrain avec horodatage certifié", "Monthly digitization of field reports with certified timestamping")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR avec préservation de la mise en page originale comme document probatoire", "OCR preserving the original layout as an evidentiary document")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Extraction des métadonnées : pays, date, auteur, type d'incident", "Metadata extraction: country, date, author, type of incident")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Archivage sécurisé et chiffré avec traçabilité complète de tous les accès", "Secure, encrypted archiving with full traceability of all access")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("Rapports disponibles et sécurisés dans les 48h de réception. Admissibilité comme preuves garantie.", "Reports available and secured within 48 hours of receipt. Admissibility as evidence guaranteed.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("ONG", "NGO")}</li>
                                                <li>{tr("Droits humains", "Human rights")}</li>
                                                <li>{tr("Documents probatoires", "Evidentiary documents")}</li>
                                                <li>{tr("Archivage sécurisé", "Secure archiving")}</li>
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
                                            <span className='description__title--text'>{tr("Numérisation des textes légaux pour un programme d'harmonisation régionale", "Digitizing legal texts for a regional harmonization program")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une organisation d'intégration régionale a besoin des textes législatifs de ses 10 États membres en format numérique structuré pour alimenter les travaux de son programme d'harmonisation normative.", "A regional integration organization needs the legislation of its 10 member states in a structured digital format to support its regulatory harmonization program.")}
                                            </p>
                                            <p className='description__subtitle omniscan'>{tr("Workflow sur OmniScan", "Workflow on OmniScan")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step omniscan">
                                                    <span>1</span>
                                                    <span>{tr("Collecte et numérisation des codes et lois en vigueur dans les 10 États membres", "Collection and digitization of the codes and laws in force in the 10 member states")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>2</span>
                                                    <span>{tr("OCR adapté aux formats légaux variés selon les traditions juridiques des États", "OCR adapted to the varied legal formats of each state's legal tradition")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>3</span>
                                                    <span>{tr("Normalisation et structuration des textes dans un format XML commun", "Standardization and structuring of texts in a common XML format")}</span>
                                                </li>
                                                <li className="list__step omniscan">
                                                    <span>4</span>
                                                    <span>{tr("Livraison à la base documentaire de l'organisation pour les travaux d'harmonisation", "Delivery to the organization's document base for the harmonization work")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result omniscan'>
                                                <img src={CheckOmniscan} alt="" aria-hidden="true"/>
                                                {tr("Corpus de 10 pays disponible en 5 semaines. Travaux d'harmonisation lancés avec 3 mois d'avance sur le calendrier.", "A 10-country corpus available in 5 weeks. Harmonization work launched 3 months ahead of schedule.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Harmonisation régionale", "Regional harmonization")}</li>
                                                <li>{tr("Corpus législatif", "Legislative corpus")}</li>
                                                <li>{tr("Intégration", "Integration")}</li>
                                                <li>{tr("Normalisation", "Standardization")}</li>
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
                                <span className="ui__tag geode">{tr("GED · GESTION DOCUMENTAIRE", "EDM · DOCUMENT MANAGEMENT")}</span>
                            </div>
                            <ul className='title__list'>
                                <li>{tr("GED intelligente", "Smart document management")}</li>
                                <li>{tr("Classement automatique", "Automatic filing")}</li>
                                <li>Versioning</li>
                                <li>{tr("Droits d'accès", "Access rights")}</li>
                                <li>Workflows</li>
                                <li>{tr("Alertes d'échéances", "Deadline alerts")}</li>
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
                                    {tr("Cabinet juridique", "Law firm")}
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'ministere' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("ministere");
                                    }}
                                >
                                    <img src={Institution} alt="" aria-hidden="true" className="current"/>
                                    <img src={InstitutionColorGeode} alt="" aria-hidden="true" className="color"/>
                                    {tr("Ministère", "Ministry")}
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'universite' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("universite");
                                    }}
                                >
                                    <img src={Universite} alt="" aria-hidden="true" className="current"/>
                                    <img src={UniversiteColorGeode} alt="" aria-hidden="true" className="color"/>
                                    {tr("Université", "University")}
                                </li>
                                <li 
                                    className={`item ${contentGeode === 'recherche' ? 'isActive' : ""}`}
                                    onClick={() => {
                                        setContentGeode("recherche");
                                    }}
                                >
                                    <img src={Recherche} alt="" aria-hidden="true" className="current"/>
                                    <img src={RechercheColorGeode} alt="" aria-hidden="true" className="color"/>
                                    {tr("Recherche", "Research")}
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
                                    {tr("Organisation", "Organization")}
                                </li>
                            </ul>
                            
                            <div className='cases__content--description'>

                                {/* Géode - cabinet */}
                                <div
                                    className={`${contentGeode != 'cabinet' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Géode - cabinet - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_cabinet_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>01</span>
                                            <span className='description__title--text'>{tr("GED cabinet : retrouver n'importe quel document en moins de 10 secondes", "Firm document management: find any document in under 10 seconds")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un cabinet de 18 avocats perd en moyenne 40 minutes par collaborateur et par jour à chercher des documents dans des répertoires partagés mal organisés. La prolifération des versions crée des risques d'erreur.", "An 18-lawyer firm loses an average of 40 minutes per person per day searching for documents in poorly organized shared folders. The proliferation of versions creates a risk of errors.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Migration des documents existants dans Géode avec classement automatique par dossier et type", "Migration of existing documents into Géode with automatic filing by matter and type")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Plan de classement adapté à la nomenclature du cabinet : client / affaire / type de document", "Filing plan adapted to the firm's conventions: client / matter / document type")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Moteur de recherche full-text sur l'intégralité des documents, avec filtres par date, auteur, type", "Full-text search engine across all documents, with filters by date, author and type")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Versioning automatique : chaque modification crée une nouvelle version horodatée", "Automatic versioning: every change creates a new timestamped version")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Temps de recherche documentaire réduit de 40 min à moins de 10 sec. Aucune version erronée envoyée en 12 mois.", "Document search time cut from 40 minutes to under 10 seconds. Not a single wrong version sent in 12 months.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("GED", "EDM")}</li>
                                                <li>{tr("Productivité", "Productivity")}</li>
                                                <li>{tr("Recherche full-text", "Full-text search")}</li>
                                                <li>Versioning</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - cabinet - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_cabinet_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>02</span>
                                            <span className='description__title--text'>{tr("Gestion cloisonnée des dossiers entre départements du cabinet", "Ring-fenced file management between the firm's departments")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un cabinet multi-pratiques doit garantir l'étanchéité entre les dossiers : le département corporate ne doit pas avoir accès aux dossiers du département pénal, et inversement.", "A multi-practice firm must keep files strictly separated: the corporate department must not access the criminal department's files, and vice versa.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Structuration de Géode en espaces cloisonnés par département et par équipe", "Géode structured into ring-fenced spaces by department and team")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Paramétrage fin des droits d'accès par rôle : lecture seule, contribution, administration", "Fine-grained access rights by role: read-only, contributor, administrator")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Journalisation automatique de tous les accès pour répondre aux exigences déontologiques", "Automatic logging of all access to meet professional ethics requirements")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Partage ponctuel et sécurisé de documents spécifiques entre départements si nécessaire", "Occasional, secure sharing of specific documents between departments when needed")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Étanchéité documentaire totale. Conformité déontologique documentée et auditable en cas de contrôle.", "Complete document separation. Ethics compliance documented and auditable in the event of an inspection.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Confidentialité", "Confidentiality")}</li>
                                                <li>{tr("Droits d'accès", "Access rights")}</li>
                                                <li>{tr("Déontologie", "Professional ethics")}</li>
                                                <li>{tr("Sécurité documentaire", "Document security")}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - cabinet - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_cabinet_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>03</span>
                                            <span className='description__title--text'>{tr("Data room virtuelle pour une opération transactionnelle", "Virtual data room for a transaction")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un cabinet M&A gère une due diligence impliquant des centaines de documents à partager entre le cabinet, le client, les experts-comptables et les conseils de la partie adverse.", "An M&A firm is running a due diligence involving hundreds of documents to be shared between the firm, the client, the accountants and the other side's advisers.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Création d'une data room sécurisée dans Géode pour l'opération en quelques minutes", "A secure data room for the transaction created in Géode in minutes")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Paramétrage des droits par partie : le cabinet voit tout, chaque partie n'accède qu'à ce qui lui est ouvert", "Rights set per party: the firm sees everything, each party only accesses what is opened to it")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Suivi en temps réel des documents consultés et téléchargés par chaque intervenant", "Real-time tracking of documents viewed and downloaded by each participant")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Clôture et archivage complet de la data room à la signature de l'acte", "Closing and full archiving of the data room upon signing")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Data room opérationnelle en 2h. Délai de signature réduit de 3 semaines. Aucun envoi de document confidentiel par email.", "Data room up and running in 2 hours. Time to signing cut by 3 weeks. No confidential document sent by email.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>M&A</li>
                                                <li>Data room</li>
                                                <li>Due diligence</li>
                                                <li>{tr("Collaboration sécurisée", "Secure collaboration")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Géode - ministère */}
                                <div
                                    className={`${contentGeode != 'ministere' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Géode - ministère - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_ministere_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>01</span>
                                            <span className='description__title--text'>{tr("GED ministérielle : référentiel documentaire unique pour la direction juridique", "Ministry document management: a single document repository for the legal department")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("La direction des affaires juridiques d'un grand ministère gère ses textes, avis juridiques et contentieux dans des systèmes disparates, sans vision consolidée ni recherche transversale possible.", "The legal affairs department of a major ministry manages its texts, legal opinions and litigation in disparate systems, with no consolidated view or cross-cutting search.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Déploiement de Géode comme référentiel documentaire unique de la direction", "Deployment of Géode as the department's single document repository")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Migration et réorganisation des documents existants selon un plan de classement normalisé", "Migration and reorganization of existing documents according to a standardized filing plan")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Paramétrage des droits par service : accès aux contentieux, aux avis, aux textes en cours", "Rights set per unit: access to litigation, opinions, texts in progress")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Moteur de recherche full-text permettant de retrouver un avis ou un précédent immédiatement", "Full-text search engine to find an opinion or precedent instantly")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Référentiel unique opérationnel. Temps de production d'un avis réduit de 30% grâce à la réutilisation des précédents existants.", "Single repository up and running. Time to produce an opinion cut by 30% thanks to reuse of existing precedents.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Direction juridique", "Legal department")}</li>
                                                <li>{tr("Référentiel documentaire", "Document repository")}</li>
                                                <li>{tr("Avis juridiques", "Legal opinions")}</li>
                                                <li>{tr("Ministère", "Ministry")}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - ministère - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_ministere_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>02</span>
                                            <span className='description__title--text'>{tr("Suivi du cycle de vie des textes réglementaires en cours d'élaboration", "Tracking the life cycle of regulations being drafted")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Le secrétariat général du gouvernement coordonne l'élaboration de nombreux textes réglementaires impliquant plusieurs ministères. Les échanges par email créent des pertes de versions et des retards.", "The government's general secretariat coordinates the drafting of many regulations involving several ministries. Email exchanges lead to lost versions and delays.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Création d'un espace de travail collaboratif dans Géode pour chaque texte en cours", "A collaborative workspace in Géode for each text in progress")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Workflow de validation paramétré : rédaction → avis technique → visa juridique → signature", "Configured approval workflow: drafting → technical opinion → legal clearance → signature")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Versioning automatique de chaque modification avec identification de l'auteur et horodatage", "Automatic versioning of every change with author identification and timestamp")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Tableau de bord de l'avancement de tous les textes en cours, par statut et par ministère pilote", "Dashboard showing the progress of all texts in progress, by status and lead ministry")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Délai moyen de production des textes réduit de 4 mois à 6 semaines. Zéro perte de version entre ministères.", "Average drafting time cut from 4 months to 6 weeks. Zero versions lost between ministries.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Textes réglementaires", "Regulations")}</li>
                                                <li>{tr("Workflow interministériel", "Inter-ministerial workflow")}</li>
                                                <li>{tr("Secrétariat général", "General secretariat")}</li>
                                                <li>Versioning</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - ministère - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_ministere_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>03</span>
                                            <span className='description__title--text'>{tr("Archivage légal des actes administratifs avec conservation probatoire", "Legal archiving of administrative acts with evidentiary retention")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un ministère est soumis à des obligations légales de conservation de ses actes administratifs pendant 30 ans. L'archivage papier génère des coûts croissants et des risques de perte.", "A ministry is legally required to retain its administrative acts for 30 years. Paper archiving generates rising costs and risks of loss.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Migration de tous les actes numérisés dans Géode avec métadonnées de conservation", "Migration of all digitized acts into Géode with retention metadata")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Paramétrage des règles de rétention par type de document selon les obligations légales", "Retention rules set by document type according to legal obligations")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Horodatage certifié garantissant l'intégrité et l'admissibilité légale des documents conservés", "Certified timestamping guaranteeing the integrity and legal admissibility of retained documents")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Signal de fin de délai légal soumis à validation humaine avant toute purge", "End-of-retention alerts subject to human approval before any deletion")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Coût d'archivage physique réduit de 70%. Conformité légale documentée pour tout contrôle ou audit.", "Physical archiving costs cut by 70%. Legal compliance documented for any inspection or audit.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Archivage légal", "Legal archiving")}</li>
                                                <li>{tr("Conservation", "Retention")}</li>
                                                <li>{tr("Actes administratifs", "Administrative acts")}</li>
                                                <li>{tr("Conformité", "Compliance")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Géode - université */}
                                <div
                                    className={`${contentGeode != 'universite' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Géode - université - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_universite_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>01</span>
                                            <span className='description__title--text'>{tr("Base documentaire pédagogique partagée entre enseignants et étudiants", "Shared teaching resource base for lecturers and students")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un département de droit met à disposition des étudiants des syllabus, arrêts commentés et cas pratiques. Ces documents sont éparpillés dans des drives personnels inaccessibles et rarement à jour.", "A law department provides students with syllabi, annotated rulings and practical cases. These documents are scattered across personal drives that are inaccessible and rarely up to date.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Création d'un espace Géode par matière avec accès différencié enseignants et étudiants", "A Géode space per subject with separate access for lecturers and students")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Dépôt structuré des ressources pédagogiques par type : cours, TD, jurisprudence, bibliographie", "Structured upload of teaching resources by type: lectures, tutorials, case law, bibliography")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Moteur de recherche full-text pour retrouver tout document par mots-clés", "Full-text search engine to find any document by keyword")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Notification des étudiants lors de la mise à jour ou l'ajout d'un document de cours", "Students notified when a course document is updated or added")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("100% des ressources accessibles en ligne et à jour. Temps de préparation des TD réduit de 40%.", "100% of resources online and up to date. Tutorial preparation time cut by 40%.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Ressources pédagogiques", "Teaching resources")}</li>
                                                <li>{tr("Enseignement du droit", "Law teaching")}</li>
                                                <li>{tr("Base de cours", "Course library")}</li>
                                                <li>{tr("Accès étudiant", "Student access")}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - université - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_universite_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>02</span>
                                            <span className='description__title--text'>{tr("GED de laboratoire pour la gestion des données de recherche juridique", "Lab document management for legal research data")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un laboratoire réunissant 25 chercheurs produit des articles, working papers et rapports sans espace commun structuré. Les données de terrain circulent par email et les versions se multiplient.", "A lab of 25 researchers produces articles, working papers and reports without a structured shared space. Field data circulates by email and versions multiply.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Déploiement de Géode comme référentiel commun du laboratoire", "Deployment of Géode as the lab's shared repository")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Organisation par projet de recherche, chercheur et type de production", "Organization by research project, researcher and output type")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Versioning automatique et gestion des co-auteurs avec suivi des contributions de chacun", "Automatic versioning and co-author management with tracking of each person's contributions")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Export facilité vers les plateformes de dépôt institutionnel et archives ouvertes", "Easy export to institutional repositories and open archives")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Production scientifique 100% traçable. Aucune donnée de terrain perdue. Collaboration fluidifiée entre chercheurs.", "100% traceable research output. No field data lost. Smoother collaboration between researchers.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Laboratoire de droit", "Law lab")}</li>
                                                <li>{tr("Données de recherche", "Research data")}</li>
                                                <li>{tr("Collaboration scientifique", "Scientific collaboration")}</li>
                                                <li>Open science</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - université - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_universite_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>03</span>
                                            <span className='description__title--text'>{tr("Gestion des mémoires soumis pour évaluation et correction", "Managing dissertations submitted for assessment and feedback")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un master en droit reçoit 150 mémoires par an. La gestion des soumissions, des affectations aux jurys et des allers-retours de correction se fait encore entièrement par email.", "A law master's program receives 150 dissertations a year. Submissions, jury assignments and feedback rounds are still handled entirely by email.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Portail de soumission des mémoires intégré à Géode avec horodatage automatique de réception", "Dissertation submission portal built into Géode with automatic receipt timestamps")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Affectation des mémoires aux directeurs de mémoire et membres de jury dans Géode", "Assignment of dissertations to supervisors and jury members in Géode")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Espace partagé de commentaires et corrections entre l'étudiant et son directeur", "Shared space for comments and corrections between the student and their supervisor")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Archivage des mémoires validés dans la bibliothèque numérique du département", "Archiving of approved dissertations in the department's digital library")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Gestion de 150 mémoires sans un seul email. Délai moyen de retour des corrections réduit de 3 semaines.", "150 dissertations managed without a single email. Average feedback time cut by 3 weeks.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Mémoires de master", "Master's dissertations")}</li>
                                                <li>{tr("Gestion académique", "Academic administration")}</li>
                                                <li>Jury</li>
                                                <li>{tr("Bibliothèque numérique", "Digital library")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Géode - recherche */}
                                <div
                                    className={`${contentGeode != 'recherche' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Géode - recherche - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_recherche_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>01</span>
                                            <span className='description__title--text'>{tr("Référentiel documentaire partagé pour un programme de recherche multi-institutions", "Shared document repository for a multi-institution research program")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un programme de recherche réunit 5 institutions de 3 pays. Les chercheurs travaillent sur des corpus communs mais n'ont aucun espace partagé. Les documents circulent par email avec des risques de perte.", "A research program brings together 5 institutions from 3 countries. Researchers work on shared corpora but have no shared space. Documents circulate by email, at risk of being lost.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Déploiement de Géode comme espace commun du programme, accessible par toutes les institutions", "Deployment of Géode as the program's shared space, accessible to all institutions")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Organisation par corpus et type de document selon le protocole de recherche", "Organization by corpus and document type according to the research protocol")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Paramétrage des droits : certains corpus sont partagés entre tous, d'autres réservés à une institution", "Configured rights: some corpora are shared by all, others reserved for one institution")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Traçabilité complète de toutes les modifications apportées aux documents du programme", "Full traceability of all changes made to program documents")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Collaboration fluide entre 5 institutions. Zéro perte de document. Estimation de 2 mois gagnés sur la durée du programme.", "Smooth collaboration between 5 institutions. Zero documents lost. An estimated 2 months saved over the program's duration.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Programme de recherche", "Research program")}</li>
                                                <li>Collaboration</li>
                                                <li>{tr("Corpus partagé", "Shared corpus")}</li>
                                                <li>Multi-institutions</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - recherche - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_recherche_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>02</span>
                                            <span className='description__title--text'>{tr("GED pour la production d'un rapport annuel multi-contributeurs", "Document management for producing a multi-contributor annual report")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un observatoire juridique produit un rapport annuel impliquant 12 contributeurs, 3 institutions partenaires et une équipe éditoriale. La coordination documentaire est chronophage et source d'erreurs fréquentes.", "A legal observatory produces an annual report involving 12 contributors, 3 partner institutions and an editorial team. Document coordination is time-consuming and a frequent source of errors.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Espace de travail Géode structuré par chapitre et par contributeur", "Géode workspace structured by chapter and contributor")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Workflow de contribution → révision → validation éditoriale avec statut visible à chaque étape", "Contribution → review → editorial approval workflow with status visible at each step")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Versioning permettant de comparer toute version avec la précédente et d'identifier l'auteur", "Versioning to compare any version with the previous one and identify its author")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Remise des fichiers finaux à l'éditeur via espace sécurisé avec date limite visible de tous", "Final files delivered to the publisher via a secure space with a deadline visible to all")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Rapport produit en 6 semaines au lieu de 4 mois. Zéro version contradictoire entre les contributeurs.", "Report produced in 6 weeks instead of 4 months. Zero conflicting versions between contributors.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Rapport annuel", "Annual report")}</li>
                                                <li>{tr("Coordination éditoriale", "Editorial coordination")}</li>
                                                <li>{tr("Observatoire", "Observatory")}</li>
                                                <li>{tr("Workflow documentaire", "Document workflow")}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - recherche - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_recherche_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>03</span>
                                            <span className='description__title--text'>{tr("Conservation des archives probatoires pour un programme de justice transitionnelle", "Preserving evidentiary archives for a transitional justice program")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un programme de justice transitionnelle collecte des témoignages, rapports d'experts et preuves documentaires dans 2 pays. Ces documents irremplaçables doivent être conservés et sécurisés pour 50 ans.", "A transitional justice program collects testimonies, expert reports and documentary evidence in 2 countries. These irreplaceable documents must be preserved and secured for 50 years.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Archivage sécurisé et chiffré dans Géode avec redondance des données", "Secure, encrypted archiving in Géode with data redundancy")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Gestion fine des accès : documents accessibles aux chercheurs, d'autres réservés aux procureurs", "Fine-grained access: some documents open to researchers, others reserved for prosecutors")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Horodatage certifié garantissant l'intégrité probatoire de chaque document conservé", "Certified timestamping guaranteeing the evidentiary integrity of every retained document")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Plan de continuité garantissant l'accès aux archives au-delà de la durée du programme", "Continuity plan guaranteeing access to the archives beyond the program's lifetime")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Archives sécurisées pour 50 ans. Admissibilité devant les juridictions internationales garantie.", "Archives secured for 50 years. Admissibility before international courts guaranteed.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Justice transitionnelle", "Transitional justice")}</li>
                                                <li>{tr("Archives probatoires", "Evidentiary archives")}</li>
                                                <li>{tr("Conservation long terme", "Long-term preservation")}</li>
                                                <li>{tr("Juridictions internationales", "International courts")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Géode - inhouse */}
                                <div
                                    className={`${contentGeode != 'inhouse' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Géode - inhouse - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_inhouse_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>01</span>
                                            <span className='description__title--text'>{tr("GED pour la direction juridique d'un groupe panafricain", "Document management for a pan-African group's legal department")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("La direction juridique d'un groupe présent dans 6 pays gère ses contrats, contentieux et avis dans des systèmes locaux disparates. Le directeur juridique groupe n'a aucune vision consolidée.", "The legal department of a group operating in 6 countries manages its contracts, litigation and opinions in disparate local systems. The group general counsel has no consolidated view.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Déploiement de Géode comme référentiel juridique groupe avec espaces par pays et par thème", "Deployment of Géode as the group legal repository, with spaces by country and topic")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Migration des contrats, contentieux et avis des filiales dans le système commun", "Migration of subsidiaries' contracts, litigation and opinions into the common system")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Tableau de bord groupe : contrats actifs, contentieux en cours, échéances critiques par pays", "Group dashboard: active contracts, ongoing litigation, critical deadlines by country")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Droits d'accès différenciés : les juristes locaux voient leur pays, le directeur groupe voit tout", "Differentiated access rights: local lawyers see their country, the group general counsel sees everything")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Vision consolidée opérationnelle en 3 semaines. Aucune échéance critique oubliée depuis le déploiement.", "Consolidated view operational in 3 weeks. No critical deadline missed since deployment.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Direction juridique groupe", "Group legal department")}</li>
                                                <li>{tr("Vision consolidée", "Consolidated view")}</li>
                                                <li>{tr("Panafricain", "Pan-African")}</li>
                                                <li>{tr("Référentiel juridique", "Legal repository")}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - inhouse - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_inhouse_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>02</span>
                                            <span className='description__title--text'>{tr("Gestion du cycle de vie contractuel avec alertes d'échéances", "Contract life cycle management with deadline alerts")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une société de distribution gère 300 contrats fournisseurs et clients. Les dates de renouvellement tacite passent régulièrement inaperçues, entraînant des reconductions automatiques indésirables.", "A distribution company manages 300 supplier and customer contracts. Automatic renewal dates regularly go unnoticed, leading to unwanted renewals.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Dépôt et structuration de tous les contrats dans Géode avec extraction des données clés", "Upload and structuring of all contracts in Géode with key data extraction")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Paramétrage des alertes : 6 mois, 3 mois et 1 mois avant l'échéance de chaque contrat", "Alerts set at 6 months, 3 months and 1 month before each contract's expiry")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Workflow de décision à l'approche de l'échéance : renouveler, renégocier ou résilier", "Decision workflow as expiry approaches: renew, renegotiate or terminate")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Tableau de bord contractuel avec statut de chaque contrat et actions en cours", "Contract dashboard showing each contract's status and ongoing actions")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Zéro reconduction indésirable depuis le déploiement. Économies annuelles estimées à 1,2M€.", "Zero unwanted renewals since deployment. Estimated annual savings of €1.2M.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Cycle de vie contractuel", "Contract life cycle")}</li>
                                                <li>{tr("Alertes échéances", "Deadline alerts")}</li>
                                                <li>{tr("Renouvellement", "Renewal")}</li>
                                                <li>{tr("Gestion contractuelle", "Contract management")}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - inhouse - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_inhouse_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>03</span>
                                            <span className='description__title--text'>{tr("Espace collaboratif pour les négociations contractuelles avec les conseils externes", "Collaborative space for contract negotiations with external counsel")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("La direction juridique d'un groupe négocie des contrats complexes avec des avocats externes, des banques et des partenaires. La circulation des versions par email est incontrôlable.", "A group's legal department negotiates complex contracts with external lawyers, banks and partners. Circulating versions by email is impossible to control.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Création d'un espace de négociation dans Géode par contrat avec accès paramétré par partie", "A negotiation space in Géode for each contract, with access configured per party")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Versioning automatique de chaque version avec commentaires contextualisés par article ou clause", "Automatic versioning with comments attached to each article or clause")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Historique des positions de chaque partie : textes acceptés, en discussion ou refusés", "History of each party's positions: wording accepted, under discussion or rejected")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Archivage automatique de la négociation à la signature, avec version finale certifiée", "Automatic archiving of the negotiation upon signing, with a certified final version")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Négociation de 2 contrats majeurs menée entièrement dans Géode. Délai de signature réduit de 25%.", "2 major contracts negotiated entirely in Géode. Time to signing cut by 25%.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Négociation contractuelle", "Contract negotiation")}</li>
                                                <li>{tr("Conseil externe", "External counsel")}</li>
                                                <li>{tr("Collaboration sécurisée", "Secure collaboration")}</li>
                                                <li>Versioning</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Géode - organisation */}
                                <div
                                    className={`${contentGeode != 'organisation' ? 'isHidden' : ""}`
                                    }
                                >
                                    {/* Géode - organisation - tab1 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_organisation_tab1`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab1`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>01</span>
                                            <span className='description__title--text'>{tr("GED institutionnelle pour une organisation d'intégration régionale", "Institutional document management for a regional integration organization")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Une organisation régionale produit des directives, protocoles, résolutions et rapports gérés dans des drives personnels non structurés. La mémoire institutionnelle est fragile lors des rotations de personnel.", "A regional organization produces directives, protocols, resolutions and reports managed in unstructured personal drives. Institutional memory is fragile whenever staff rotate.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Déploiement de Géode comme mémoire documentaire officielle de l'organisation", "Deployment of Géode as the organization's official document memory")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Plan de classement institutionnel : textes juridiques, travaux des comités, rapports, correspondances", "Institutional filing plan: legal texts, committee work, reports, correspondence")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Workflow de validation des textes officiels avant publication avec traçabilité des approbations", "Approval workflow for official texts before publication, with traceable sign-offs")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Accès public en lecture seule pour les textes adoptés, accès restreint pour les travaux en cours", "Public read-only access to adopted texts, restricted access to work in progress")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Mémoire institutionnelle sécurisée. Continuité des travaux garantie lors des changements de leadership ou de personnel.", "Institutional memory secured. Continuity of work guaranteed through changes of leadership or staff.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Organisation régionale", "Regional organization")}</li>
                                                <li>{tr("Mémoire institutionnelle", "Institutional memory")}</li>
                                                <li>{tr("Gouvernance documentaire", "Document governance")}</li>
                                                <li>{tr("Continuité", "Continuity")}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - organisation - tab2 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_organisation_tab2`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab2`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>02</span>
                                            <span className='description__title--text'>{tr("Portail documentaire commun pour un programme co-financé par plusieurs bailleurs", "Shared document portal for a program co-funded by several donors")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un programme de réforme judiciaire est co-financé par 3 bailleurs. Chacun exige l'accès aux livrables et documents du programme, mais dans des formats et selon des protocoles différents.", "A judicial reform program is co-funded by 3 donors. Each requires access to the program's deliverables and documents, but in different formats and following different protocols.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Espace Géode commun avec sous-espaces par bailleur respectant leurs obligations de reporting", "Shared Géode space with sub-spaces per donor, meeting their reporting requirements")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Dépôt structuré des livrables : rapports trimestriels, études, comptes rendus de mission", "Structured upload of deliverables: quarterly reports, studies, mission reports")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Droits d'accès par bailleur : chacun accède à ses documents et aux rapports communs", "Access rights per donor: each accesses its own documents and the shared reports")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Historique complet des versions de chaque livrable avec date de validation", "Full version history of each deliverable with approval date")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("Chaque bailleur accède à ses documents en autonomie. Charge de reporting de l'équipe réduite de 40%.", "Each donor accesses its documents independently. The team's reporting workload cut by 40%.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Multi-bailleurs", "Multi-donor")}</li>
                                                <li>Reporting</li>
                                                <li>{tr("Programme de réforme", "Reform program")}</li>
                                                <li>Coordination</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Géode - organisation - tab3 */}
                                    <div 
                                        className={
                                            `description__block 
                                            ${openAccordions[`geode_organisation_tab3`] ? 'isOpen' : ""}
                                            `
                                        }
                                    >
                                        <div 
                                            className='description__title'
                                            onClick={() =>
                                                toggleAccordion(
                                                    `${content}_${contentGeode}_tab3`
                                                )
                                            }
                                        >
                                            <span className='description__title--number geode'>03</span>
                                            <span className='description__title--text'>{tr("Archivage structuré des textes et décisions d'un organe de traité", "Structured archiving of a treaty body's texts and decisions")}</span>
                                        </div>
                                        <div className='description__text'>
                                            <p className='description__scenario'>
                                                {tr("Un comité de surveillance des droits humains doit structurer et archiver ses 30 ans de rapports des États parties, d'observations finales et de correspondances officielles pour garantir la traçabilité.", "A human rights monitoring committee must structure and archive 30 years of state party reports, concluding observations and official correspondence to ensure traceability.")}
                                            </p>
                                            <p className='description__subtitle geode'>{tr("Workflow sur Géode", "Workflow on Géode")}</p>
                                            <ul className='description__list'>
                                                <li className="list__step geode">
                                                    <span>1</span>
                                                    <span>{tr("Migration des archives dans Géode avec classification par État partie et par cycle d'examen", "Migration of archives into Géode, classified by state party and review cycle")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>2</span>
                                                    <span>{tr("Structuration par type : rapport initial, rapport périodique, observations finales, liste de points", "Structured by type: initial report, periodic report, concluding observations, list of issues")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>3</span>
                                                    <span>{tr("Recherche full-text permettant de retrouver toute position antérieure d'un État en quelques secondes", "Full-text search to find any previous position of a state in seconds")}</span>
                                                </li>
                                                <li className="list__step geode">
                                                    <span>4</span>
                                                    <span>{tr("Accès public aux documents officiels publiés, accès restreint aux documents de travail internes", "Public access to published official documents, restricted access to internal working documents")}</span>
                                                </li>
                                            </ul>
                                            <p className='description__result geode'>
                                                <img src={CheckGeode} alt="" aria-hidden="true"/>
                                                {tr("30 ans d'archives structurées et accessibles. Experts préparés 3 fois plus rapidement pour les sessions d'examen.", "30 years of archives structured and accessible. Experts prepared 3 times faster for review sessions.")}
                                            </p>
                                            <ul className='description__tags__list'>
                                                <li>{tr("Organe de traité", "Treaty body")}</li>
                                                <li>{tr("Nations Unies", "United Nations")}</li>
                                                <li>{tr("Archives institutionnelles", "Institutional archives")}</li>
                                                <li>{tr("Droits humains", "Human rights")}</li>
                                            </ul>
                                        </div>
                                    </div>
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