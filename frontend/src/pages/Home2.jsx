import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/home.css';

import HeroCanvasMap from '../components/HeroCanvasMap';
import HeroBg from '../components/HeroBg';
import AfricaMap from '../components/AfricaMap';
import IconRing from '../components/IconRing';

import Video from '../assets/video/avocat.mp4';
import Avocat from '../assets/img/pictos/avocat.svg';
import Juriste from '../assets/img/pictos/juriste.svg';
import Institution from '../assets/img/pictos/institution.svg';
import Investisseur from '../assets/img/pictos/investisseur.svg';
import Chercheur from '../assets/img/pictos/chercheur.svg';
import Profil from '../assets/img/pictos/profil.svg';
import Structuration from '../assets/img/pictos/structuration.svg';
import Integration from '../assets/img/pictos/integration.svg';
import Formation from '../assets/img/pictos/formation.svg';
import Deploiement from '../assets/img/pictos/deploiement.svg';
import Couverture from '../assets/img/pictos/couverture.svg';
import Donnee from '../assets/img/pictos/donnee.svg';
import AI from '../assets/img/pictos/AI.svg';
import Secure from '../assets/img/pictos/secure.svg';

const Home2 = () => {

    const [ showcase, setShowcase ] = useState("usages");

    return (
        <main className="main main__homeTest">
            {/* Hero */}
            <section className="hero">
                <HeroCanvasMap />
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h3 className='subtitle'>L'IA juridique pour l'Afrique francophone</h3>
                        <p className='subtitle'><span className='highlight'>LegOmnia</span> transforme la donnée juridique en intelligence exploitable</p>
                        <h1 className='main-title'>
                            Le droit africain entre <span className='break'>dans une <em className='highlight'>nouvelle ère</em></span>
                        </h1>
                        <p className="subtitle">Découvrez <span className='highlight'>Omnia</span>, notre application <span className='break'>de recherche juridique d'Afrique francophone</span></p>
                    </div>
                    <div className="hero__search">
                        <input type="text" placeholder="Commencez votre recherche ici..."/>
                        <a href="https://app.beta.legomnia.com/signup" target="_blank">
                            <span className="iconify" data-icon="fa7-solid:magnifying-glass"></span>
                        </a>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' to="/produits/omnia">Découvrir la plateforme</Link>
                        <Link className='ui__btn--inline' to="/contact">Demander une démo</Link>
                    </div>
                    <ul className="hero__reassure">
                        <li>Sans engagement</li>
                        <li>Données souveraines</li>
                    </ul>
                </div>
            </section>
        
            {/* Présenation + vidéo */}
            <section className="bg__circle home__presentation">
                <div className="container home__presentation__container">
                    <h2 className='title__h2'>Une vision simple : rendre le droit en Afrique francophone enfin <em className='highlight'>accessible, structuré et actionnable</em></h2>
                    <div className="home__presentation--video">
                    <video
                        autoPlay
                        muted
                        controls
                        playsInline
                    >
                        <source src={Video} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo HTML5
                    </video>
                    </div>
                    <div className="home__presentation--text">
                        <p>
                            Aujourd'hui, la donnée juridique est <strong>fragmentée</strong>, <strong>non digitalisée</strong>, <strong>difficilement exploitable</strong>.
                        </p>
                        <p>
                            LegOmnia propose <strong>un écosystème complet</strong> permettant de passer de cette donnée non digitalisée à <strong>une intelligence juridique</strong> unifiée et structurée.
                        </p>
                    </div>
                </div>
            </section>

            {/* Carte */}
            <section className="home__map">
                <div className="container">
                    <h2 className='title__h2'>Notre couverture en Afrique francophone</h2>
                    <p className='title__subtitle'>Explorez notre présence et les organisations juridiques intégrées</p>

                    <AfricaMap />
                </div>
            </section>

            {/* Mise en avant */}
            <section className="bg__circle home__showcase">
            <div className="container">
                <h2 className='title__h2'>Une infrastructure déjà à l'œuvre</h2>

                <ul className="home__showcase--stats">
                    <li><span>50 000+</span> textes</li>
                    <li><span>17+</span> pays</li>
                    <li><span>0,3s</span> réponse</li>
                    <li><span>98%</span> satisfaction</li>
                </ul>

                <p className='title__subtitle'>
                    L'application LegOmnia a déjà fait ses preuves auprès de nombreux partenaires,
                    découvrez comment vous pouvez aussi en bénéficier
                </p>

                <nav className='home__showcase--nav'>
                    <div className={`item ${showcase === 'usages' ? 'isActive' : ""}`}>
                        <button 
                            className="arrow"
                            onClick={() => {
                                setShowcase("valeur");
                            }}
                        ><span className="iconify" data-icon="ep:arrow-left"></span></button>
                        <button 
                            onClick={() => setShowcase("usages")}
                        >Des usages stratégiques</button>
                        <button 
                            className="arrow"
                            onClick={() => {
                                setShowcase("partenaire");
                            }}
                        ><span className="iconify" data-icon="ep:arrow-right"></span></button>
                    </div>
                    
                    <div className={`item ${showcase === 'partenaire' ? 'isActive' : ""}`}>
                        <button 
                            className="arrow"
                            onClick={() => {
                                setShowcase("usages");
                            }}
                        ><span className="iconify" data-icon="ep:arrow-left"></span></button>
                        <button 
                            onClick={() => setShowcase("partenaire")}
                        >Un partenaire de transformation</button>
                        <button 
                            className="arrow"
                            onClick={() => {
                                setShowcase("valeur");
                            }}
                        ><span className="iconify" data-icon="ep:arrow-right"></span></button>
                    </div>

                    <div className={`item ${showcase === 'valeur' ? 'isActive' : ""}`}>
                        <button 
                            className="arrow"
                            onClick={() => {
                                setShowcase("partenaire");
                            }}
                        ><span className="iconify" data-icon="ep:arrow-left"></span></button>
                        <button 
                            onClick={() => setShowcase("valeur")}
                        >Une valeur ajoutée</button>
                        <button 
                            className="arrow"
                            onClick={() => {
                                setShowcase("usages");
                            }}
                        ><span className="iconify" data-icon="ep:arrow-right"></span></button>
                    </div>
                </nav>

                <div className='home__showcase--description'>

                    {/* Usages stratégiques */}
                    <article className={showcase != 'usages' ? 'isHidden' : ""}>
                        <ul className='home__showcase--list--usages'>
                            <li className='card'>
                                <IconRing
                                    src={Avocat}
                                />
                                <h3 className="title">Avocats & Cabinets</h3>
                                <p>Accélération de la recherche et des anlayses</p>
                                <ul className="list">
                                    <li>Recherche ultra-rapide de jurisprudence</li>
                                    <li>Bases d'études de cas</li>
                                    <li>Analyses comparatives OHADA</li>
                                </ul>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Juriste}
                                />
                                <h3 className="title">Juristes d'entreprise</h3>
                                <p>Maîtrise du risque et conformité multi-pays</p>
                                <ul className="list">
                                    <li>Veille réglementaire</li>
                                    <li>Conformité par juridiction</li>
                                    <li>Accès complet aux textes applicables</li>
                                </ul>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Institution}
                                />
                                <h3 className="title">Institutions publiques</h3>
                                <p>Modernisation et souveraineté documentaire</p>
                                <ul className="list">
                                    <li>Gestion centralisée</li>
                                    <li>Archivage intelligent</li>
                                    <li>Accès public garanti</li>
                                </ul>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Chercheur}
                                />
                                <h3 className="title">Etudiants & chercheurs</h3>
                                <p>Accès structuré à la connaissance juridique</p>
                                <ul className="list">
                                    <li>Base de recherche complète</li>
                                    <li>Citations vérifiées</li>
                                    <li>Accès gratuit</li>
                                </ul>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Investisseur}
                                />
                                <h3 className="title">Investisseurs & IPE</h3>
                                <p>Due diligence rapide et fiable</p>
                                <ul className="list">
                                    <li>Due diligence accélérée</li>
                                    <li>Risk assessment par pays</li>
                                    <li>Conformité sanction</li>
                                </ul>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Profil}
                                />
                                <h3 className="title">Votre profil</h3>
                                <p>Contactez-nous pour une démo personnalisée</p>
                                <Link className='ui__btn' to="/produits/contact">Demander une démo</Link>
                            </li>
                        </ul>
                    </article>

                    {/* Partenaire de transformation */}
                    <article className={showcase != 'partenaire' ? 'isHidden' : ""}>
                        <p>Nous accompagnons les organisations dans leur transition vers un droit augmenté par la donnée :</p>
                        <ul className='home__showcase--list--partenaire'>
                            <li className='card'>
                                <IconRing
                                    src={Structuration}
                                />
                                <h3 className="title">Structuration des données</h3>
                                <p className="text">Nous collectons, normalisons et enrichissons l'ensemble des textes juridiques africains pour en faire une base fiable, cohérente et exploitable.</p>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Integration}
                                />
                                <h3 className="title">Intégration technique</h3>
                                <p className="text">LegOmnia s'intègre facilement à vos outils existants via API, sans disruption de vos workflows ni refonte de votre infrastructure.</p>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Formation}
                                />
                                <h3 className="title">Formation et accompagnement</h3>
                                <p className="text">Nos équipes forment vos collaborateurs à la prise en main de la plateforme et vous accompagnent à chaque étape pour maximiser l'adoption.</p>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Deploiement}
                                />
                                <h3 className="title">Déploiement à l'échelle nationale ou institutionnelle</h3>
                                <p className="text">De la phase pilote au déploiement national ou multi-pays, LegOmnia est conçu pour croître avec vos besoins sans compromis sur la performance.</p>
                            </li>
                        </ul>
                    </article>

                    {/* Valeur ajoutée */}
                    <article className={showcase != 'valeur' ? 'isHidden' : ""}>
                        <p>LegOmnia change la donne : là où d'autres indexent, nous comprenons.</p>
                        <ul className='home__showcase--list--valeur'>
                            <li className='card'>
                                <IconRing
                                    src={Couverture}
                                />
                                <h3 className="title">Une couverture totale, de bout en bout</h3>
                                <p>Approche end-to-end unique sur le marché africain</p>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Donnee}
                                />
                                <h3 className="title">La donnée juridique, entièrement maîtrisée</h3>
                                <p>Maîtrise complète de la chaîne de valeur de la donnée</p>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={AI}
                                />
                                <h3 className="title">Une IA qui comprend le droit local</h3>
                                <p>IA adaptée aux spécificités juridiques locales</p>
                            </li>
                            <li className='card'>
                                <IconRing
                                    src={Secure}
                                />
                                <h3 className="title">Vos données, protégées et chez vous</h3>
                                <p>Souveraineté et sécurité des données</p>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
            </section>

            {/* Demande de démo */}
            <section className="home__ask__demo">
                <div className="container">
                    <div className="home__ask__demo--content">
                        <h2 className="title__h2">Prêt à transformer votre pratique juridique ?</h2>
                        <p>LEgOmnia est votre infrastructure pour accélérer vos recherches, sécuriser vos documents et prendre des décisions data-driven en Afrique francophone.</p>
                        <div className="home__ask__demo--actions">
                            <a className="ui__btn" href="/produits/omnia">Découvrir la plateforme</a>
                            <a className="ui__btn--inline" href="/contact">Demander une démo</a>
                        </div>
                        <div className="home__ask__demo--contact">
                            <div>
                                <span className="iconify" data-icon="teenyicons:pin-outline"></span>
                                <p><strong>Paris</strong></p>
                                <p>8 rue du Chevalier de la Barre, 75018</p>
                            </div>
                            <div>
                                <span className="iconify" data-icon="teenyicons:pin-outline"></span>
                                <p><strong>Jersey City</strong></p>
                                <p>24 Commerce Street, NJ 07302</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home2;