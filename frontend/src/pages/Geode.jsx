import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import '../assets/styles/geode.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import IconRing from '../components/IconRing';

import Ecosystem from '../assets/img/pictos/ecosystem.svg';
import Gestion from '../assets/img/geode/gestion_centralisee.png';
import Stockage from '../assets/img/pictos/stockage.svg';
import Connecteurs from '../assets/img/pictos/connecteurs.svg';
import Signature from '../assets/img/pictos/signature.svg';
import Dashboard from '../assets/img/pictos/dashboard.svg';
import Admin from '../assets/img/pictos/admin.svg';
import DashboardGeode from '../assets/img/geode/dashboard.png';
import DashboardGeode2 from '../assets/img/geode/dashboard2.png';
import DashboardGeode3 from '../assets/img/geode/dashboard3.png';
import DashboardGeode4 from '../assets/img/geode/dashboard4.png';

const Geode = () => {
    return (
        <main className="main main__geode">

            {/* Hero */}
            <section className="hero">
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            La gestion documentaire <em className='highlight'>réinventée</em> <br/>
                            pour les professionnels du droit
                        </h1>
                        <h3 className="subtitle">
                            Centralisez, organisez et exploitez vos documents grâce à une GED augmentée par l’IA
                        </h3>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn--gradientSecond' to="/produits/use-cases?content=geode">Découvrir les use cases</Link>
                        <Link className='ui__btn--inline' to="/contact">Demander une démo</Link>
                    </div>
                </div>
            </section>

            {/* Présentation */}
            <section className="geode__presentation">
                <div className="container">
                    <h2 className='title__h2'>Géode · GED intelligente · legOmnia</h2>
                    <div className="structure__columns">
                        <div className="structure__content">
                            <p>
                                Géode est la solution de Gestion Électronique de Documents (GED) intelligente de LegOmnia, conçue pour les entreprises, cabinets d'avocats et directions juridiques.
                            </p>
                            <p>
                                Combinez un DMS moderne avec les capacités d'IA d'OMNIA et OmniScan pour une expérience documentaire sans équivalent.
                            </p>
                        </div>
                        <img src={Gestion} alt="Application LegOmnia" loading="lazy"/>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="bg__grid geode__vision">
                <div className="container">
                    <h2 className='title__h2'>Notre vision</h2>
                    <p>
                        <em className='highlight'>Géode transforme la gestion documentaire des professionnels du droit</em>, en combinant un système DMS moderne avec l'intelligence artificielle juridique de legOmnia.
                    </p>
                    <p>
                        Intégration native avec OmniScan pour le traitement IA à l'importation et avec OMNIA pour la recherche juridique directement dans votre GED&nbsp;: créez l'expérience documentaire inédite que vous attendiez.
                    </p>
                </div>
            </section>

            {/* Modules */}
            <section className="geode__modules">
                <div className="container">
                    <h2 className='title__h2'>Une GED conçue pour les professionnels du droit</h2>
                    <p>
                        Géode intègre 10 modules puissants&nbsp;: du stockage sécurisé aux workflows de signature, de l'import en masse à la recherche IA, tout ce dont vous avez besoin pour maîtriser votre documentation.
                    </p>
                    <ul className='geode__modules--cards'>
                        <li className='card'>
                            <IconRing
                                src={Ecosystem}
                            />
                            <h3 className="title">Écosystème IA intégré</h3>
                            <div className='text'>
                                <p>
                                    Géode combine naturellement OmniScan (traitement IA des documents importés) et OMNIA (recherche juridique intelligente).
                                </p>
                                <p>
                                    Importez un contrat&nbsp;: OmniScan l'indexe, OMNIA le rend searchable, tout se centralise dans Géode.
                                </p>
                            </div>
                            <p className='list__tag'>
                                <span className='ui__tag'>OCR automatique</span>
                                <span className='ui__tag'>Recherche sémantique</span>
                                <span className='ui__tag'>Assistant IA</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Stockage}
                            />
                            <h3 className="title">Stockage & versioning</h3>
                            <div className='text'>
                                <p>
                                    Centralisez tous vos documents — contrats, dossiers clients, correspondances, archives — dans une arborescence intuitive et sécurisée.
                                </p>
                                <p>
                                    Historique complet de versions et restauration en un clic.
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>Stockage sécurisé</span>
                                <span className='ui__tag'>Versioning complet</span>
                                <span className='ui__tag'>Recherche rapide</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Connecteurs}
                            />
                            <h3 className="title">Import & Connecteurs</h3>
                            <div className='text'>
                                <p>
                                    Importez en masse depuis tous formats (PDF, Word, Excel, images).
                                </p>
                                <p>
                                    Connecteurs natifs&nbsp;: SharePoint, Google Drive, email, ERP.
                                </p>
                                <p>
                                    Alimentation documentaire sans friction.
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>Multi-formats</span>
                                <span className='ui__tag'>Import en masse</span>
                                <span className='ui__tag'>Connecteurs</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Signature}
                            />
                            <h3 className="title">Circuits de signature</h3>
                            <div className='text'>
                                <p>
                                    Dématérialisation complète&nbsp;: workflows de validation, circuits d'approbation, signature électronique intégrée.
                                </p>
                                <p>
                                    Conformité aux standards légaux.
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>Workflows</span>
                                <span className='ui__tag'>Signature électronique</span>
                                <span className='ui__tag'>Dématérialisation</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Dashboard}
                            />
                            <h3 className="title">Tableau de bord & Notifications</h3>
                            <div className='text'>
                                <p>
                                    Vue synthétique en temps réel&nbsp;: documents en attente, workflows, échéances.
                                </p>
                                <p>
                                    Alertes et rappels intelligents pour zéro oubli.
                                </p>
                                <p>
                                    Indicateurs clés pour pilotage.
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>Dashboards temps réel</span>
                                <span className='ui__tag'>Alertes smartphone</span>
                                <span className='ui__tag'>KPI</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Admin}
                            />
                            <h3 className="title">Admin & Conformité</h3>
                            <div className='text'>
                                <p>
                                    Gestion fine des utilisateurs, rôles et droits d'accès.
                                </p>
                                <p>
                                    Audit trail complet, logs de conformité.
                                </p>
                                <p>
                                    Conformité RGPD, données protégées, chiffrement de bout en bout.
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>Gestion des rôles</span>
                                <span className='ui__tag'>Audit complet</span>
                                <span className='ui__tag'>RGPD</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Slider */}
            <section className="bg__grid geode__slider">
                <div className="container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                    >
                        <SwiperSlide>
                            <img src={DashboardGeode2} alt="Application Geode - Tableau de bord" loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={DashboardGeode3} alt="Application Geode - Connecteurs" loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={DashboardGeode4} alt="Application Geode - Assistant IA" loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={DashboardGeode} alt="Application Geode - Connexion" loading="lazy"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
    );
};

export default Geode;