import { Link } from 'react-router-dom';

import '../assets/styles/omnia.css';

import SEOHead from '../components/SEOHead';

import HeroBg from '../components/HeroBg';
import HomeMobile from '../assets/img/application/homeMobile.png';
import AnalyseMobile from '../assets/img/application/analyseMobile.svg';
import AnalyseDesktop from '../assets/img/application/analyseDesktop.png';
import SearchMobile from '../assets/img/application/searchMobile.svg';
import SearchDesktop from '../assets/img/application/searchDesktop.png';
import CadreLegalMobile from '../assets/img/application/cadreLegalMobile.svg';
import CadreLegalDesktop from '../assets/img/application/cadreLegalDesktop.svg';
import IaMobile from '../assets/img/application/iaMobile.svg';
import IaDesktop from '../assets/img/application/iaDesktop.png';
import Target from '../assets/img/pictos/target.svg';
import Cadenas from '../assets/img/pictos/cadenas.svg';
import World from '../assets/img/pictos/world.svg';
import Document from '../assets/img/pictos/document.svg';
import Blason from '../assets/img/pictos/blason.svg';

import useLang from '../i18n/useLang';

const Omnia = () => {

    const { lp, tr } = useLang();

    const list = [
        { name: "OHADA", picto: Target },
        { name: "CCJA", picto: Cadenas },
        { name: tr("UEMOA", "WAEMU"), picto: World },
        { name: "BCEAO", picto: Blason },
        { name: tr("CEDEAO", "ECOWAS"), picto: World },
        { name: "CEMAC", picto: Blason },
        { name: "OAPI", picto: Document },
        { name: tr("CEEAC", "ECCAS"), picto: World },
        { name: "COMESA", picto: Blason },
        { name: tr("UA", "AU"), picto: Blason },
        { name: "Côte d'Ivoire", picto: Blason },
        { name: tr("Journal Officiel", "Official Gazette"), picto: Document },
        { name: tr("Tribunal de Commerce", "Commercial Court"), picto: Blason },
        { name: tr("Bénin", "Benin"), picto: Blason },
        { name: "Burkina Faso", picto: Blason },
        { name: tr("Cameroun", "Cameroon"), picto: Blason },
        { name: "Congo", picto: Blason },
        { name: tr("Guinée", "Guinea"), picto: Blason },
        { name: tr("Guinée-Bissau", "Guinea-Bissau"), picto: Blason },
        { name: "Mali", picto: Blason },
        { name: "Niger", picto: Blason },
        { name: tr("Sénégal", "Senegal"), picto: Blason },
        { name: tr("Tchad", "Chad"), picto: Blason },
        { name: "Togo", picto: Blason },
        { name: tr("Centrafrique", "Central African Republic"), picto: Blason },
        { name: "Gabon", picto: Blason },
        { name: tr("Guinée Équatoriale", "Equatorial Guinea"), picto: Blason },
        { name: tr("République Démocratique du Congo", "Democratic Republic of the Congo"), picto: Blason },
        { name: tr("Sao Tomé-et-Principe", "São Tomé and Príncipe"), picto: Blason },
    ]

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "OMNIA",
        "applicationCategory": "LegalTech",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": tr("Essai 7 jours", "7-day trial") },
        "description": tr("Moteur de recherche juridique par IA : posez vos questions en langage naturel, OMNIA interroge des centaines de milliers de textes OHADA et nationaux et cite ses sources.", "AI-powered legal search engine: ask your questions in natural language, OMNIA searches hundreds of thousands of OHADA and national texts and cites its sources.")
    };

    return (
        <main className="main main__omnia">
            <SEOHead
                title={tr("OMNIA : moteur de recherche juridique par IA", "OMNIA: AI-powered legal search engine")}
                description={tr("Posez vos questions juridiques en langage naturel : OMNIA interroge des centaines de milliers de textes OHADA et nationaux et cite ses sources. Essai 7 jours.", "Ask your legal questions in natural language: OMNIA searches hundreds of thousands of OHADA and national texts and cites its sources. 7-day trial.")}
                canonical="/produits/omnia"
                structuredData={structuredData}
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("L'intelligence juridique", "Legal intelligence")} <br/>
                            {tr("au service des", "serving")} <br/>
                            <em className='highlight'>{tr("professionnels du droit", "legal professionals")}</em>
                        </h1>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' to={lp("/produits/use-cases?content=omnia")}>{tr("Découvrir les use cases", "Explore the use cases")}</Link>
                        <Link className='ui__btn--inline' to={lp("/contact")}>{tr("Demander une démo", "Request a demo")}</Link>
                    </div>

                    <div className="omnia__hero--list">
                        <div className="list--animate">
                            {
                                list.map(item => (
                                    <p key={item.name}>
                                        <img src={item.picto} alt="" aria-hidden="true"/>
                                        {item.name}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* Présentation */}
            <section className="bg__circle omnia__presentation">
                <div className="container">
                    <h2 className='title__h2'>
                        {tr("Première plateforme de", "The first")} <em className='highlight'>{tr("recherche et d'analyse juridique", "legal research and analysis platform")}</em> {tr("dédiée à l'Afrique francophone", "dedicated to French-speaking Africa")}</h2>
                    <div className="structure__columns omnia__presentation--description">
                        <div className="structure__content">
                            <p>{tr("Recherche sémantique, analyse IA, génération de mémos", "Semantic search, AI analysis, memo generation")}<br/>
                            {tr("— tout ce dont votre cabinet a besoin —", "— everything your firm needs —")} </p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    <span className="ui__tag">{tr("RGPD conforme", "GDPR compliant")}</span>
                                </li>
                                <li>
                                    <span className="ui__tag">{tr("Droits OHADA", "OHADA law")}</span>
                                </li>
                                <li>
                                    <span className="ui__tag">{tr("17+ pays couverts", "17+ countries covered")}</span>
                                </li>
                                <li>
                                    <span className="ui__tag">{tr("IA juridique", "Legal AI")}</span>
                                </li>
                            </ul>
                        </div>
                        <img src={HomeMobile} alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                    </div>
                </div>
            </section>

            {/* Fonctionnalité */}
            <section className="omnia__platform">
                <div className="container">
                    <h2 className='title__h2'>
                        {tr("Une plateforme conçue pour l'", "A platform built for ")}<em className='highlight'>{tr("excellence juridique", "legal excellence")}</em>
                    </h2>
                    <p className='title__subtitle'>
                        {tr("Chaque outil de LegOmnia a été conçu avec et pour les juristes d'Afrique francophone.", "Every LegOmnia tool was designed with and for legal professionals in French-speaking Africa.")}<br/>
                        {tr("Précision, rapidité, fiabilité.", "Precision, speed, reliability.")}
                    </p>

                    <div className="structure__columns omnia__platform--description">
                        <img src={AnalyseMobile} className='screen--mobile' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <img src={AnalyseDesktop} className='screen--desktop' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <div className="structure__content">
                            <p><strong>{tr("Analyse de documents en un instant", "Instant document analysis")}</strong></p>
                            <br/>
                            <p>{tr("Téléchargez n'importe quel texte juridique", "Upload any legal text")}<br/>
                            {tr("— code, contrat, décision —", "— code, contract, decision —")} <br/>
                            {tr("et obtenez immédiatement une synthèse structurée avec les points clés et des questions d'approfondissement générées par l'IA.", "and instantly get a structured summary with key points and AI-generated follow-up questions.")}</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    {tr("Résumé exécutif automatique", "Automatic executive summary")}
                                </li>
                                <li>
                                    {tr("Extraction des obligations et droits", "Extraction of obligations and rights")}
                                </li>
                                <li>
                                    {tr("Questions de suivi intelligentes", "Smart follow-up questions")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recherche */}
            <section className="bg__circle omnia__search">
                <div className="container">
                    <h2 className='title__h2'>{tr("Recherche sémantique et hybride", "Semantic and hybrid search")}</h2>
                    <div className="structure__columns omnia__search--description">
                        <img src={SearchMobile} className='screen--mobile' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <img src={SearchDesktop} className='screen--desktop' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <div className="structure__content">
                            <p>{tr("Posez votre question en langage naturel ou entrez des mots-clés.", "Ask your question in natural language or enter keywords.")}<br/>
                            {tr("Le moteur syntaxique-hybride trouve les textes les plus pertinents dans la base juridique africaine complète.", "The hybrid syntactic engine finds the most relevant texts across the complete African legal database.")}</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    <span className="ui__tag">{tr("Moteur syntaxique", "Syntactic engine")}</span>
                                </li>
                                <li>
                                    <span className="ui__tag">{tr("Recherche hybride IA", "Hybrid AI search")}</span>
                                </li>
                                <li>
                                    <span className="ui__tag">{tr("Juridiction multi-pays", "Multi-country jurisdiction")}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IA */}
            <section className="omnia__ia">
                <div className="container">
                    <h2 className='title__h2'>{tr("Lisez les décisions avec leur", "Read decisions with their")} <em className='highlight'>{tr("contexte légal intégré", "built-in legal context")}</em></h2>
                    <div className="structure__columns omnia__ia--description">
                        <img src={CadreLegalMobile} className='screen--mobile' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <img src={CadreLegalDesktop} className='screen--desktop' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <div className="structure__content">
                            <p>{tr("Chaque décision de justice s'affiche avec son cadre légal, les articles applicables, et une analyse IA en temps réel.", "Every court decision is displayed with its legal framework, the applicable articles and a real-time AI analysis.")}<br/>
                            {tr("Finis les allers-retours entre plusieurs sources.", "No more switching back and forth between sources.")}</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    {tr("Affichage côte-à-côte : document + analyse", "Side-by-side view: document + analysis")}
                                </li>
                                <li>
                                    {tr("Extraction automatique des articles cités", "Automatic extraction of cited articles")}
                                </li>
                                <li>
                                    {tr("Résumé de décision en langage clair", "Plain-language decision summary")}
                                </li>
                                <li>
                                    {tr("Export PDF, impression, partage sécurisé", "PDF export, printing, secure sharing")}
                                </li>
                                <li>
                                    {tr("Recherche plein texte dans le document", "Full-text search within the document")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assistant */}
            <section className="bg__circle omnia__assistant">
                <div className="container">
                    <h2 className='title__h2'>{tr("Un assistant qui", "An assistant that")} <em className='highlight'> {tr("connaît votre dossier", "knows your case")}</em> {tr("par cœur", "inside out")}</h2>
                    <div className="structure__columns omnia__assistant--description">
                        <img src={IaMobile} className='screen--mobile' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <img src={IaDesktop} className='screen--desktop' alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                        <div className="structure__content">
                            <p>{tr("L'assistant IA Omnia s'appuie sur vos documents, vos notes et la jurisprudence pour construire une argumentation complète et structurée.", "The Omnia AI assistant draws on your documents, your notes and case law to build complete, structured arguments.")}</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    <span>{tr("Mémorisation du contexte", "Context memory")}</span>
                                    {tr("L'IA se souvient du contexte de votre dossier tout au long de la conversation.", "The AI remembers the context of your case throughout the conversation.")}
                                </li>
                                <li>
                                    <span>{tr("Citations vérifiées", "Verified citations")}</span>
                                    {tr("Chaque réponse cite précisément les articles, arrêts et textes de référence.", "Every answer precisely cites the relevant articles, rulings and reference texts.")}
                                </li>
                                <li>
                                    <span>{tr("Stratégie argumentative", "Argument strategy")}</span>
                                    {tr("Construction de moyens et arguments structurés pour vos mémoires.", "Building structured grounds and arguments for your briefs.")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Omnia;