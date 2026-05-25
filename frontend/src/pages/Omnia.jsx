import { Link } from 'react-router-dom';

import '../assets/styles/omnia.css';

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

const Omnia = () => {

    const list = [
        { name: "OHADA", picto: Target },
        { name: "CCJA", picto: Cadenas },
        { name: "UEMOA", picto: World },
        { name: "BCEAO", picto: Blason },
        { name: "CEDEAO", picto: World },
        { name: "CEMAC", picto: Blason },
        { name: "OAPI", picto: Document },
        { name: "CEEAC", picto: World },
        { name: "COMESA", picto: Blason },
        { name: "UA", picto: Blason },
        { name: "Côte d'Ivoire", picto: Blason },
        { name: "Journal Officiel", picto: Document },
        { name: "Tribunal de Commerce", picto: Blason },
        { name: "Bénin", picto: Blason },
        { name: "Burkina Faso", picto: Blason },
        { name: "Cameroun", picto: Blason },
        { name: "Congo", picto: Blason },
        { name: "Guinée", picto: Blason },
        { name: "Guinée-Bissau", picto: Blason },
        { name: "Mali", picto: Blason },
        { name: "Niger", picto: Blason },
        { name: "Sénégal", picto: Blason },
        { name: "Tchad", picto: Blason },
        { name: "Togo", picto: Blason },
        { name: "Centrafrique", picto: Blason },
        { name: "Gabon", picto: Blason },
        { name: "Guinée Équatoriale", picto: Blason },
        { name: "République Démocratique du Congo", picto: Blason },
        { name: "Sao Tomé-et-Principe", picto: Blason },
    ]

    return (
        <main className="main main__omnia">

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            L'intelligence juridique <br/>
                            au service des <br/>
                            <em className='highlight'>professionnels du droit</em>
                        </h1>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' to="/produits/omnia">Découvrir la plateforme</Link>
                        <Link className='ui__btn--inline' to="/contact">Demander une démo</Link>
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
                        Première plateforme de <em className='highlight'>recherche et d'analyse juridique</em> dédiée à l'Afrique francophone</h2>
                    <div className="structure__columns omnia__presentation--description">
                        <div className="structure__content">
                            <p>Recherche sémantique, analyse IA, génération de mémos<br/>
                            — tout ce dont votre cabinet a besoin — </p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    <span className="ui__tag">RGPD conforme</span>
                                </li>
                                <li>
                                    <span className="ui__tag">Droits OHADA</span>
                                </li>
                                <li>
                                    <span className="ui__tag">17+ pays couverts</span>
                                </li>
                                <li>
                                    <span className="ui__tag">IA juridique</span>
                                </li>
                            </ul>
                        </div>
                        <img src={HomeMobile} alt="Application LegOmnia" loading="lazy"/>
                    </div>
                </div>
            </section>

            {/* Fonctionnalité */}
            <section className="omnia__platform">
                <div className="container">
                    <h2 className='title__h2'>
                        Une plateforme conçue pour l'<em recherche className='highlight'>excellence juridique</em>
                    </h2>
                    <p className='title__subtitle'>
                        Chaque outil de LegOmnia a été conçu avec et pour les juristes d'Afrique francophone.<br/>
                        Précision, rapidité, fiabilité.
                    </p>

                    <div className="structure__columns omnia__platform--description">
                        <img src={AnalyseMobile} className='screen--mobile' alt="Application LegOmnia" loading="lazy"/>
                        <img src={AnalyseDesktop} className='screen--desktop' alt="Application LegOmnia" loading="lazy"/>
                        <div className="structure__content">
                            <p><strong>Analyse de documents en un instant</strong></p>
                            <br/>
                            <p>Téléchargez n'importe quel texte juridique<br/>
                            — code, contrat, décision — <br/>
                            et obtenez immédiatement une synthèse structurée avec les points clés et des questions d'approfondissement générées par l'IA.</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    Résumé exécutif automatique
                                </li>
                                <li>
                                    Extraction des obligations et droits
                                </li>
                                <li>
                                    Questions de suivi intelligentes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recherche */}
            <section className="bg__circle omnia__search">
                <div className="container">
                    <h2 className='title__h2'>Recherche sémantique et hybride</h2>
                    <div className="structure__columns omnia__search--description">
                        <img src={SearchMobile} className='screen--mobile' alt="Application LegOmnia" loading="lazy"/>
                        <img src={SearchDesktop} className='screen--desktop' alt="Application LegOmnia" loading="lazy"/>
                        <div className="structure__content">
                            <p>Posez votre question en langage naturel ou entrez des mots-clés.<br/>
                            Le moteur syntaxique-hybride trouve les textes les plus pertinents dans la base juridique africaine complète.</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    <span className="ui__tag">Moteur syntaxique</span>
                                </li>
                                <li>
                                    <span className="ui__tag">Recherche hybride IA</span>
                                </li>
                                <li>
                                    <span className="ui__tag">Juridiction multi-pays</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IA */}
            <section className="omnia__ia">
                <div className="container">
                    <h2 className='title__h2'>Lisez les décisions avec leur <em className='highlight'>contexte légal intégré</em></h2>
                    <div className="structure__columns omnia__ia--description">
                        <img src={CadreLegalMobile} className='screen--mobile' alt="Application LegOmnia" loading="lazy"/>
                        <img src={CadreLegalDesktop} className='screen--desktop' alt="Application LegOmnia" loading="lazy"/>
                        <div className="structure__content">
                            <p>Chaque décision de justice s'affiche avec son cadre légal, les articles applicables, et une analyse IA en temps réel.<br/>
                            Finis les allers-retours entre plusieurs sources.</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    Affichage côte-à-côte : document + analyse
                                </li>
                                <li>
                                    Extraction automatique des articles cités
                                </li>
                                <li>
                                    Résumé de décision en langage clair
                                </li>
                                <li>
                                    Export PDF, impression, partage sécurisé
                                </li>
                                <li>
                                    Recherche plein texte dans le document
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assistant */}
            <section className="bg__circle omnia__assistant">
                <div className="container">
                    <h2 className='title__h2'>Un assistant qui <em className='highlight'> connaît votre dossier</em> par cœur</h2>
                    <div className="structure__columns omnia__assistant--description">
                        <img src={IaMobile} className='screen--mobile' alt="Application LegOmnia" loading="lazy"/>
                        <img src={IaDesktop} className='screen--desktop' alt="Application LegOmnia" loading="lazy"/>
                        <div className="structure__content">
                            <p>L'assistant IA Omnia s'appuie sur vos documents, vos notes et la jurisprudence pour construire une argumentation complète et structurée.</p>
                            <ul className="omnia__structure--listTags">
                                <li>
                                    <span>Mémorisation du contexte</span>
                                    L'IA se souvient du contexte de votre dossier tout au long de la conversation.
                                </li>
                                <li>
                                    <span>Citations vérifiées</span>
                                    Chaque réponse cite précisément les articles, arrêts et textes de référence.
                                </li>
                                <li>
                                    <span>Stratégie argumentative</span>
                                    Construction de moyens et arguments structurés pour vos mémoires.
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