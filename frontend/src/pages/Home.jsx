import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/styles/home.css';

import SEOHead from '../components/SEOHead';

import AfricaMotion from '../components/africaMotion/AfricaMotion';
import HeroBg from '../components/HeroBg';
import CoverageMap from '../components/CoverageMap';
import IconRing from '../components/IconRing';

import Video from '../assets/video/african_law_enter_in_new_era.mp4';
import Avocat from '../assets/img/pictos/avocat.svg';
import Juriste from '../assets/img/pictos/juriste.svg';
import Institution from '../assets/img/pictos/institution.svg';
import Investisseur from '../assets/img/pictos/investisseur.svg';
import Chercheur from '../assets/img/pictos/chercheur.svg';
import Profil from '../assets/img/pictos/profil.svg';
import Structuration from '../assets/img/pictos/structuration.svg';
import Formation from '../assets/img/pictos/formation.svg';
import Deploiement from '../assets/img/pictos/deploiement.svg';
import Couverture from '../assets/img/pictos/couverture.svg';
import Donnee from '../assets/img/pictos/donnee.svg';
import AI from '../assets/img/pictos/AI.svg';
import Secure from '../assets/img/pictos/secure.svg';
import MapContact from '../assets/img/divers/map_contact.svg';

import useLang from '../i18n/useLang';
import fr from '../locales/fr/home';
import en from '../locales/en/home';

const USAGE_ICONS = [Avocat, Juriste, Institution, Chercheur, Investisseur];
const PARTENAIRE_ICONS = [Structuration, Formation, Deploiement];
const VALEUR_ICONS = [Couverture, Donnee, AI, Secure];
const SHOWCASE_TABS = ['usages', 'partenaire', 'valeur'];

const Home = () => {

    const navigate = useNavigate();
    const { lp, t } = useLang();
    const txt = t({ fr, en });
    const sc = txt.showcase;

    // recherche : la plateforme est en liste d'attente, on y redirige
    // en conservant la requête saisie
    const handleSearch = (e) => {
        e.preventDefault();
        const query = new FormData(e.target).get("q")?.trim() || "";
        navigate(lp("/liste-attente"), { state: { query } });
    };

    const [ showcase, setShowcase ] = useState("usages");

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "LegOmnia",
        "url": "https://legomnia.com",
        "applicationCategory": "LegalTech",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": txt.seo.offer
        },
        "description": txt.seo.appDescription
    };

    return (
        <main className="main main__home" aria-label={txt.mainLabel}>
            <SEOHead
                title={txt.seo.title}
                description={txt.seo.description}
                canonical="/"
                structuredData={structuredData}
            />
            {/* Hero */}
            <section className="hero">
                <AfricaMotion
                    className="component__hero--canvas"
                    options={{ mapCenterX: 0.5, mapHeight: 0.95 }}
                />
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <p className='subtitle'>{txt.hero.kicker}</p>
                        <h1 className='main-title'>
                            {txt.hero.title}
                        </h1>
                        <p className="subtitle">{txt.hero.subtitle}</p>
                    </div>
                    <form className="hero__search" role="search" onSubmit={handleSearch}>
                        <input type="search" name="q" placeholder={txt.hero.searchPlaceholder} aria-label={txt.hero.searchLabel}/>
                        <button type="submit" aria-label={txt.hero.searchLabel}>
                            <span className="iconify" data-icon="fa7-solid:magnifying-glass"></span>
                        </button>
                    </form>
                    <div className="hero__actions">
                        <Link className='ui__btn' to={lp("/produits/omnia")}>{txt.hero.discover}</Link>
                        <Link className='ui__btn--inline' to={lp("/contact")}>{txt.hero.demo}</Link>
                    </div>
                </div>
            </section>
        
            {/* Présenation + vidéo */}
            <section className="bg__circle home__presentation">
                <div className="container home__presentation__container">
                    <h2 className='title__h2'>{txt.presentation.title}</h2>
                    <div className="home__presentation--video">
                    <video
                        autoPlay
                        muted
                        controls
                        playsInline
                    >
                        <source src={Video} type="video/mp4" />
                        {txt.presentation.videoFallback}
                    </video>
                    </div>
                    <div className="home__presentation--text">
                        <p>{txt.presentation.p1}</p>
                        <p>{txt.presentation.p2}</p>
                    </div>
                </div>
            </section>

            {/* Carte */}
            <section className="home__map">
                <div className="container">
                    <h2 className='title__h2'>{txt.map.title}</h2>
                    <p className='title__subtitle'>{txt.map.subtitle}</p>

                    <CoverageMap />
                </div>
            </section>

            {/* Mise en avant */}
            <section className="bg__circle home__showcase">
            <div className="container">
                <h2 className='title__h2'>{sc.title}</h2>

                <ul className="home__showcase--stats">
                    {sc.stats.map((stat) => (
                        <li key={stat.label}><span>{stat.value}</span> {stat.label}</li>
                    ))}
                </ul>

                <p className='title__subtitle'>{sc.subtitle}</p>

                <nav className='home__showcase--nav'>
                    {SHOWCASE_TABS.map((tab, i) => {
                        const prev = SHOWCASE_TABS[(i + SHOWCASE_TABS.length - 1) % SHOWCASE_TABS.length];
                        const next = SHOWCASE_TABS[(i + 1) % SHOWCASE_TABS.length];
                        return (
                            <div key={tab} className={`item ${showcase === tab ? 'isActive' : ""}`}>
                                <button 
                                    className="arrow"
                                    aria-label={sc.prev}
                                    onClick={() => setShowcase(prev)}
                                ><span className="iconify" data-icon="ep:arrow-left"></span></button>
                                <button 
                                    onClick={() => setShowcase(tab)}
                                >{sc.tabs[tab]}</button>
                                <button 
                                    className="arrow"
                                    aria-label={sc.next}
                                    onClick={() => setShowcase(next)}
                                ><span className="iconify" data-icon="ep:arrow-right"></span></button>
                            </div>
                        );
                    })}
                </nav>

                <div className='home__showcase--description'>

                    {/* Usages stratégiques */}
                    <article className={showcase != 'usages' ? 'isHidden' : ""}>
                        <ul className='home__showcase--list--usages'>
                            {sc.usages.map((item, i) => (
                                <li className='card' key={item.title}>
                                    <IconRing
                                        src={USAGE_ICONS[i]}
                                    />
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.text}</p>
                                    <ul className="list">
                                        {item.list.map((li) => <li key={li}>{li}</li>)}
                                    </ul>
                                </li>
                            ))}
                            <li className='card'>
                                <IconRing
                                    src={Profil}
                                />
                                <h3 className="title">{sc.profile.title}</h3>
                                <p>{sc.profile.text}</p>
                                <Link className='ui__btn' to={lp("/contact")}>{sc.profile.cta}</Link>
                            </li>
                        </ul>
                    </article>

                    {/* Partenaire de transformation */}
                    <article className={showcase != 'partenaire' ? 'isHidden' : ""}>
                        <p>{sc.partenaireIntro}</p>
                        <ul className='home__showcase--list--partenaire'>
                            {sc.partenaire.map((item, i) => (
                                <li className='card' key={item.title}>
                                    <IconRing
                                        src={PARTENAIRE_ICONS[i]}
                                    />
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </article>

                    {/* Valeur ajoutée */}
                    <article className={showcase != 'valeur' ? 'isHidden' : ""}>
                        <p>{sc.valeurIntro}</p>
                        <ul className='home__showcase--list--valeur'>
                            {sc.valeur.map((item, i) => (
                                <li className='card' key={item.title}>
                                    <IconRing
                                        src={VALEUR_ICONS[i]}
                                    />
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
            </section>

            {/* Demande de démo */}
            <section className="home__ask__demo">
                <div className="container">
                    <div className="home__ask__demo--content">
                        <h2 className="title__h2">{txt.demo.title}</h2>
                        <p>{txt.demo.text}</p>
                        <div className="home__ask__demo--actions">
                            <Link className="ui__btn" to={lp("/produits/omnia")}>{txt.demo.discover}</Link>
                            <Link className="ui__btn--inline" to={lp("/contact")}>{txt.demo.demo}</Link>
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
                        <img className="home__ask__demo--map" src={MapContact} alt={txt.demo.mapAlt} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
