import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import '../assets/styles/geode.css';

import SEOHead from '../components/SEOHead';
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

import useLang from '../i18n/useLang';

const Geode = () => {

    const { lp, tr } = useLang();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Géode",
        "applicationCategory": "LegalTech",
        "operatingSystem": "Web",
        "description": tr("GED intelligente et cartographie juridique pour les professionnels du droit africain : centralisez, organisez et exploitez vos documents grâce à l'IA.", "Smart document management and legal mapping for African legal professionals: centralize, organize and make the most of your documents with AI.")
    };

    return (
        <main className="main main__geode">
            <SEOHead
                title={tr("Géode : GED intelligente et cartographie juridique", "Géode: smart document management and legal mapping")}
                description={tr("Explorez l'environnement juridique et réglementaire de l'Afrique francophone : normes OHADA, CEDEAO, CEMAC, UEMOA et droits nationaux, en un seul outil.", "Explore the legal and regulatory environment of French-speaking Africa: OHADA, ECOWAS, CEMAC and WAEMU standards and national laws, in a single tool.")}
                canonical="/produits/transformation-digitale/geode"
                structuredData={structuredData}
            />

            {/* Hero */}
            <section className="hero">
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("La gestion documentaire", "Document management")} <em className='highlight'>{tr("réinventée", "reinvented")}</em> <br/>
                            {tr("pour les professionnels du droit", "for legal professionals")}
                        </h1>
                        <p className="subtitle">
                            {tr("Centralisez, organisez et exploitez vos documents grâce à une GED augmentée par l’IA", "Centralize, organize and make the most of your documents with AI-augmented document management")}
                        </p>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn--gradientSecond' to={lp("/produits/use-cases?content=geode")}>{tr("Découvrir les use cases", "Explore the use cases")}</Link>
                        <Link className='ui__btn--inline' to={lp("/contact")}>{tr("Demander une démo", "Request a demo")}</Link>
                    </div>
                </div>
            </section>

            {/* Présentation */}
            <section className="geode__presentation">
                <div className="container">
                    <h2 className='title__h2'>{tr("Géode · GED intelligente · legOmnia", "Géode · Smart document management · legOmnia")}</h2>
                    <div className="structure__columns">
                        <div className="structure__content">
                            <p>
                                {tr("Géode est la solution de Gestion Électronique de Documents (GED) intelligente de LegOmnia, conçue pour les entreprises, cabinets d'avocats et directions juridiques.", "Géode is LegOmnia's smart Electronic Document Management (EDM) solution, designed for companies, law firms and legal departments.")}
                            </p>
                            <p>
                                {tr("Combinez un DMS moderne avec les capacités d'IA d'OMNIA et OmniScan pour une expérience documentaire sans équivalent.", "Combine a modern DMS with the AI capabilities of OMNIA and OmniScan for an unmatched document experience.")}
                            </p>
                        </div>
                        <img src={Gestion} alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="bg__grid geode__vision">
                <div className="container">
                    <h2 className='title__h2'>{tr("Notre vision", "Our vision")}</h2>
                    <p>
                        <em className='highlight'>{tr("Géode transforme la gestion documentaire des professionnels du droit", "Géode transforms document management for legal professionals")}</em>{tr(", en combinant un système DMS moderne avec l'intelligence artificielle juridique de legOmnia.", ", by combining a modern DMS with legOmnia's legal artificial intelligence.")}
                    </p>
                    <p>
                        {tr("Intégration native avec OmniScan pour le traitement IA à l'importation et avec OMNIA pour la recherche juridique directement dans votre GED : créez l'expérience documentaire inédite que vous attendiez.", "Native integration with OmniScan for AI processing on import, and with OMNIA for legal research right inside your document management system: create the groundbreaking document experience you have been waiting for.")}
                    </p>
                </div>
            </section>

            {/* Modules */}
            <section className="geode__modules">
                <div className="container">
                    <h2 className='title__h2'>{tr("Une GED conçue pour les professionnels du droit", "Document management built for legal professionals")}</h2>
                    <p>
                        {tr("Géode intègre 10 modules puissants : du stockage sécurisé aux workflows de signature, de l'import en masse à la recherche IA, tout ce dont vous avez besoin pour maîtriser votre documentation.", "Géode includes 10 powerful modules: from secure storage to signature workflows, from bulk import to AI search — everything you need to master your documentation.")}
                    </p>
                    <ul className='geode__modules--cards'>
                        <li className='card'>
                            <IconRing
                                src={Ecosystem}
                            />
                            <h3 className="title">{tr("Écosystème IA intégré", "Integrated AI ecosystem")}</h3>
                            <div className='text'>
                                <p>
                                    {tr("Géode combine naturellement OmniScan (traitement IA des documents importés) et OMNIA (recherche juridique intelligente).", "Géode seamlessly combines OmniScan (AI processing of imported documents) and OMNIA (smart legal research).")}
                                </p>
                                <p>
                                    {tr("Importez un contrat : OmniScan l'indexe, OMNIA le rend searchable, tout se centralise dans Géode.", "Import a contract: OmniScan indexes it, OMNIA makes it searchable, and everything is centralized in Géode.")}
                                </p>
                            </div>
                            <p className='list__tag'>
                                <span className='ui__tag'>{tr("OCR automatique", "Automatic OCR")}</span>
                                <span className='ui__tag'>{tr("Recherche sémantique", "Semantic search")}</span>
                                <span className='ui__tag'>{tr("Assistant IA", "AI assistant")}</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Stockage}
                            />
                            <h3 className="title">{tr("Stockage & versioning", "Storage & versioning")}</h3>
                            <div className='text'>
                                <p>
                                    {tr("Centralisez tous vos documents — contrats, dossiers clients, correspondances, archives — dans une arborescence intuitive et sécurisée.", "Centralize all your documents — contracts, client files, correspondence, archives — in an intuitive, secure folder structure.")}
                                </p>
                                <p>
                                    {tr("Historique complet de versions et restauration en un clic.", "Full version history and one-click restore.")}
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>{tr("Stockage sécurisé", "Secure storage")}</span>
                                <span className='ui__tag'>{tr("Versioning complet", "Full versioning")}</span>
                                <span className='ui__tag'>{tr("Recherche rapide", "Fast search")}</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Connecteurs}
                            />
                            <h3 className="title">{tr("Import & Connecteurs", "Import & Connectors")}</h3>
                            <div className='text'>
                                <p>
                                    {tr("Importez en masse depuis tous formats (PDF, Word, Excel, images).", "Bulk import from any format (PDF, Word, Excel, images).")}
                                </p>
                                <p>
                                    {tr("Connecteurs natifs : SharePoint, Google Drive, email, ERP.", "Native connectors: SharePoint, Google Drive, email, ERP.")}
                                </p>
                                <p>
                                    {tr("Alimentation documentaire sans friction.", "Frictionless document intake.")}
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>{tr("Multi-formats", "Multi-format")}</span>
                                <span className='ui__tag'>{tr("Import en masse", "Bulk import")}</span>
                                <span className='ui__tag'>{tr("Connecteurs", "Connectors")}</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Signature}
                            />
                            <h3 className="title">{tr("Circuits de signature", "Signature workflows")}</h3>
                            <div className='text'>
                                <p>
                                    {tr("Dématérialisation complète : workflows de validation, circuits d'approbation, signature électronique intégrée.", "Fully paperless: validation workflows, approval circuits, built-in electronic signature.")}
                                </p>
                                <p>
                                    {tr("Conformité aux standards légaux.", "Compliant with legal standards.")}
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>{tr("Workflows", "Workflows")}</span>
                                <span className='ui__tag'>{tr("Signature électronique", "Electronic signature")}</span>
                                <span className='ui__tag'>{tr("Dématérialisation", "Paperless processing")}</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Dashboard}
                            />
                            <h3 className="title">{tr("Tableau de bord & Notifications", "Dashboard & Notifications")}</h3>
                            <div className='text'>
                                <p>
                                    {tr("Vue synthétique en temps réel : documents en attente, workflows, échéances.", "Real-time overview: pending documents, workflows, deadlines.")}
                                </p>
                                <p>
                                    {tr("Alertes et rappels intelligents pour zéro oubli.", "Smart alerts and reminders so nothing slips through.")}
                                </p>
                                <p>
                                    {tr("Indicateurs clés pour pilotage.", "Key indicators for management.")}
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>{tr("Dashboards temps réel", "Real-time dashboards")}</span>
                                <span className='ui__tag'>{tr("Alertes smartphone", "Smartphone alerts")}</span>
                                <span className='ui__tag'>KPI</span>
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Admin}
                            />
                            <h3 className="title">{tr("Admin & Conformité", "Admin & Compliance")}</h3>
                            <div className='text'>
                                <p>
                                    {tr("Gestion fine des utilisateurs, rôles et droits d'accès.", "Fine-grained management of users, roles and access rights.")}
                                </p>
                                <p>
                                    {tr("Audit trail complet, logs de conformité.", "Full audit trail, compliance logs.")}
                                </p>
                                <p>
                                    {tr("Conformité RGPD, données protégées, chiffrement de bout en bout.", "GDPR compliance, protected data, end-to-end encryption.")}
                                </p>
                            </div>
                            <p className="list__tag">
                                <span className='ui__tag'>{tr("Gestion des rôles", "Role management")}</span>
                                <span className='ui__tag'>{tr("Audit complet", "Full audit")}</span>
                                <span className='ui__tag'>{tr("RGPD", "GDPR")}</span>
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
                            <img src={DashboardGeode2} alt={tr("Application Geode - Tableau de bord", "Geode application - Dashboard")} loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={DashboardGeode3} alt={tr("Application Geode - Connecteurs", "Geode application - Connectors")} loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={DashboardGeode4} alt={tr("Application Geode - Assistant IA", "Geode application - AI assistant")} loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={DashboardGeode} alt={tr("Application Geode - Connexion", "Geode application - Login")} loading="lazy"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
    );
};

export default Geode;