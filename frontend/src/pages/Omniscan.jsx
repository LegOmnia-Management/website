import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';

import '../assets/styles/omniscan.css';

import OmniscanCanvas from '../components/OmniscanCanvas';
import IconRing from '../components/IconRing';
import Pipeline from '../assets/img/omniscan/pipeline.png';
import Souverainete from '../assets/img/omniscan/souverainete2.png';
import Desktop from '../assets/img/pictos/desktop.svg';
import Anonyme from '../assets/img/pictos/anonyme.svg';
import Metadonnees from '../assets/img/pictos/metadonnees.svg';
import Magic from '../assets/img/pictos/magic.svg';
import Import from '../assets/img/pictos/import.svg';
import Analyse from '../assets/img/pictos/analyse.svg';
import Validation from '../assets/img/pictos/validation.svg';
import Export from '../assets/img/pictos/export.svg';
import Institution from '../assets/img/pictos/institution.svg';
import Ministere from '../assets/img/pictos/ministere.svg';
import Ecole from '../assets/img/pictos/ecole.svg';
import International from '../assets/img/pictos/international.svg';
import Avocat from '../assets/img/pictos/avocat.svg';
import Profil from '../assets/img/pictos/profil.svg';

import useLang from '../i18n/useLang';

const Omniscan = () => {

    const { lp, tr } = useLang();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "OmniScan",
        "applicationCategory": "LegalTech",
        "operatingSystem": "Web",
        "description": tr("Pipeline IA de numérisation et d'analyse de documents juridiques africains : OCR, anonymisation, extraction de métadonnées, résumés IA.", "AI pipeline for digitizing and analyzing African legal documents: OCR, anonymization, metadata extraction, AI summaries.")
    };

    return (
        <main className="main main__omniscan">
            <SEOHead
                title={tr("OmniScan : analyse IA de contrats et documents juridiques", "OmniScan: AI analysis of contracts and legal documents")}
                description={tr("Analysez, synthétisez et comparez vos contrats et actes juridiques grâce à l'IA. GED intelligente adaptée aux cabinets et institutions africains.", "Analyze, summarize and compare your contracts and legal instruments with AI. Smart document management tailored to African law firms and institutions.")}
                canonical="/produits/transformation-digitale/omniscan"
                structuredData={structuredData}
            />

            {/* Hero */}
            <section className="hero">
                <OmniscanCanvas
                    className="component__omniscan--canvas"
                    style= {{position : "absolute"}}
                />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("Des données juridiques", "From")} <em className='highlight'>{tr("brutes", "raw")}</em> <br/>
                            {tr("à l'intelligence", "legal data to")} <em className='highlight'>{tr("structurée ", "structured intelligence")}</em>
                        </h1>
                        <p className="subtitle">
                            {tr("Scannez, structurez, enrichissez : vos documents juridiques deviennent enfin exploitables", "Scan, structure, enrich: your legal documents finally become usable")}
                        </p>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn--gradient' to={lp("/produits/use-cases?content=omniscan")}>{tr("Découvrir les use cases", "Explore the use cases")}</Link>
                        <Link className='ui__btn--inline' to={lp("/contact")}>{tr("Demander une démo", "Request a demo")}</Link>
                    </div>
                </div>
            </section>

            {/* Pipeline */}
            <section className="omniscan__pipeline">
                <div className="container">
                    <h2 className='title__h2'>{tr("OmniScan · Pipeline IA · Afrique", "OmniScan · AI pipeline · Africa")}</h2>
                    <div className="structure__columns">
                        <div className="structure__content">
                            <p>
                                {tr("OmniScan transforme en quelques secondes tous vos documents juridiques", "In just seconds, OmniScan turns all your legal documents")} <br/>
                                {tr("— décisions imprimées, contrats PDF, textes législatifs —", "— printed decisions, PDF contracts, legislative texts —")} <br/>
                                {tr("en données exploitables, enrichies et prêtes à l'indexation.", "into usable, enriched data ready for indexing.")} <br/>
                                {tr("Le socle technologique qui réveille le patrimoine légal africain.", "The technology foundation that brings Africa's legal heritage back to life.")}
                            </p>
                        </div>
                        <img src={Pipeline} alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="bg__grid omniscan__solution">
                <div className="container">
                    <h2 className='title__h2'>{tr("Le problème et la solution", "The problem and the solution")}</h2>
                    <p>
                        {tr("Le droit africain est une", "African law is a")} <em className='highlight'>{tr("mine de données brutes inexploitées", "goldmine of untapped raw data")}</em>{tr(", des décisions papier aux archives PDF non structurées, une masse immense de patrimoine légal dort.", ": from paper decisions to unstructured PDF archives, a vast legal heritage lies dormant.")}
                    </p>
                    <p>
                        {tr("OmniScan change la donne.", "OmniScan changes the game.")} <em className='highlight'>{tr("En quelques secondes, transformez n'importe quel document en intelligence juridique", "In seconds, turn any document into legal intelligence")}</em>{tr(" : reconnaître le texte, protéger les données sensibles, extraire la structure, résumer les enjeux. Un seul pipeline?", ": recognize the text, protect sensitive data, extract the structure, summarize the key issues. A single pipeline.")}
                    </p>
                    <p>
                        {tr("Un seul objectif : débloquer la valeur cachée de vos archives et accélérer l'accès à la justice en Afrique.", "A single goal: unlock the hidden value of your archives and accelerate access to justice in Africa.")}
                    </p>
                    <ul className='omniscan__solution--cards'>
                        <li className='card'>
                            <IconRing
                                src={Desktop}
                            />
                            <h3 className="title">{tr("OCR & Numérisation", "OCR & Digitization")}</h3>
                            <div className='text'>
                                <p>{tr("Reconnaissance optique haute précision.", "High-precision optical recognition.")}</p>
                                <p>{tr("Traite PDF, images, archives papier.", "Handles PDFs, images and paper archives.")}</p>
                                <p>{tr("Optimisé français, anglais, langues locales.", "Optimized for French, English and local languages.")}</p>
                            </div>
                            <p className="list">
                                PDF · TIFF · JPEG · PNG
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Anonyme}
                            />
                            <h3 className="title">{tr("Anonymisation", "Anonymization")}</h3>
                            <div className='text'>
                                <p>{tr("Détection & masquage automatique des données personnelles.", "Automatic detection & masking of personal data.")}</p>
                                <p>{tr("Configurable par juridiction et type de cas.", "Configurable by jurisdiction and case type.")}</p>
                                <p>{tr("Conforme RGPD et aux recommandations de l'UA.", "Compliant with the GDPR and African Union recommendations.")}</p>
                            </div>
                            <p className="list">
                                {tr("Noms · Adresses · Identifiants", "Names · Addresses · Identifiers")}
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Metadonnees}
                            />
                            <h3 className="title">{tr("Extraction Métadonnées", "Metadata extraction")}</h3>
                            <div className='text'>
                                <p>{tr("Identification automatique : dates, juridictions, parties, domaines.", "Automatic identification: dates, courts, parties, areas of law.")}</p>
                                <p>{tr("Alimente indexation et recherche sémantique.", "Feeds indexing and semantic search.")}</p>
                            </div>
                            <p className="list">
                                {tr("Date · Juridiction · Parties", "Date · Court · Parties")}
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Magic}
                            />
                            <h3 className="title">{tr("Résumés IA", "AI summaries")}</h3>
                            <div className='text'>
                                <p>{tr("Synthèses exécutives auto-générées.", "Auto-generated executive summaries.")}</p>
                                <p>{tr("LLM spécialisé droit africain.", "LLM specialized in African law.")}</p>
                                <p>{tr("Qualifications juridiques intégrées.", "Built-in legal characterization.")}</p>
                            </div>
                            <p className="list">
                                {tr("Synthèse · Enjeux · Qualifications", "Summary · Key issues · Characterization")}
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Etapes */}
            <section className="omniscan__steps">
                <div className="container">
                    <h2 className='title__h2'>{tr("4 étapes pour transformer vos documents", "4 steps to transform your documents")}</h2>
                    <p className='title__subtitle'>{tr("De l'import brut à la sortie structurée, chaque étape est optimisée pour vitesse, précision et conformité.", "From raw import to structured output, every step is optimized for speed, accuracy and compliance.")}</p>
                    <ul className='omniscan__steps--cards'>
                        <li className='card'>
                            <IconRing
                                src={Import}
                            />
                            <p>{tr("Étape 01", "Step 01")}</p>
                            <h3 className="title">{tr("Import & OCR", "Import & OCR")}</h3>
                            <div className='text'>
                                <p>{tr("Chargez vos documents en PDF, image, Word.", "Upload your documents as PDF, image or Word.")}</p>
                                <p>{tr("L'OCR haute précision reconnaît le texte, même sur archives papier scannées de faible qualité.", "High-precision OCR recognizes text, even on low-quality scanned paper archives.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Analyse}
                            />
                            <p>{tr("Étape 02", "Step 02")}</p>
                            <h3 className="title">{tr("Analyse multimodèle", "Multi-model analysis")}</h3>
                            <div className='text'>
                                <p>{tr("Détection automatique des données sensibles.", "Automatic detection of sensitive data.")}</p>
                                <p>{tr("Extraction des métadonnées structurantes.", "Extraction of key metadata.")}</p>
                                <p>{tr("Génération de résumé IA.", "AI summary generation.")}</p>
                                <p>{tr("Tout en parallèle, en quelques secondes.", "All in parallel, in a matter of seconds.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Validation}
                            />
                            <p>{tr("Étape 03", "Step 03")}</p>
                            <h3 className="title">{tr("Validation & ajustement", "Validation & adjustment")}</h3>
                            <div className='text'>
                                <p>{tr("Interface d'examen intuitive pour valider ou corriger les détections.", "Intuitive review interface to validate or correct detections.")}</p>
                                <p>{tr("Contrôle humain toujours présent.", "Human oversight at all times.")}</p>
                                <p>{tr("Audit complet de chaque modification.", "Full audit of every change.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Export}
                            />
                            <p>{tr("Étape 04", "Step 04")}</p>
                            <h3 className="title">{tr("Export multi-format", "Multi-format export")}</h3>
                            <div className='text'>
                                <p>{tr("Téléchargez en PDF enrichi, JSON structuré ou versant vectoriel.", "Download as enriched PDF, structured JSON or vector output.")}</p>
                                <p>{tr("Prêt pour publication, indexation, intégration API ou archivage sécurisé.", "Ready for publication, indexing, API integration or secure archiving.")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Souveraineté */}
            <section className="bg__grid omniscan__conform">
                <div className="container">
                    <h2 className='title__h2'>{tr("Souveraineté & conformité", "Sovereignty & compliance")}</h2>
                    <div className="structure__columns ">
                        <div className="structure__content">
                            <p>
                                {tr("Déployé sur votre territoire, au cœur de l'Afrique francophone, OmniScan peut être installé directement sur des datacenters Tier 3 certifiés, situés dans votre pays.", "Deployed on your territory, at the heart of French-speaking Africa, OmniScan can be installed directly in certified Tier 3 data centers located in your country.")}<br/>
                                {tr("Demandez-nous pour vérifier la disponibilité dans votre pays.", "Ask us to check availability in your country.")} <br/> <br/>
                                {tr("Vos données restent sur le sol national, conformément aux réglementations locales en vigueur.", "Your data stays on national soil, in accordance with applicable local regulations.")} 
                            </p>
                        </div>
                        <img src={Souverainete} alt={tr("Application LegOmnia", "LegOmnia application")} loading="lazy"/>
                    </div>
                </div>
            </section>

            {/* Users */}
            <section className="omniscan__users">
                <div className="container">
                    <h2 className='title__h2'>{tr("Qui utilise OmniScan ?", "Who uses OmniScan?")}</h2>
                    <p>{tr("Institutions judiciaires, ministères, universités, cabinets : tous ceux qui doivent valoriser et sécuriser leurs données juridiques brutes.", "Judicial institutions, ministries, universities, law firms: anyone who needs to unlock and secure their raw legal data.")}</p>
                    <ul className='omniscan__users--cards'>
                        <li className='card'>
                            <IconRing
                                src={Institution}
                            />
                            <h3 className="title">{tr("Tribunaux & Cours Suprêmes", "Courts & Supreme Courts")}</h3>
                            <p>{tr("Numérisation d'archives judiciaires", "Digitizing court archives")}</p>
                            <div className='text'>
                                <p>{tr("Transformer des décennies de décisions papier en base de données searchable.", "Turn decades of paper decisions into a searchable database.")}</p>
                                <p>{tr("OCR + indexation + résumés IA en quelques semaines au lieu de mois.", "OCR + indexing + AI summaries in a few weeks instead of months.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Ministere}
                            />
                            <h3 className="title">{tr("Ministères de la Justice", "Ministries of Justice")}</h3>
                            <p>{tr("Publication de jurisprudences officielles", "Publishing official case law")}</p>
                            <div className='text'>
                                <p>{tr("Anonymiser, extraire métadonnées et publier massivement vos décisions en conformité RGPD & OHADA.", "Anonymize, extract metadata and publish your decisions at scale in compliance with GDPR & OHADA.")}</p>
                                <p>{tr("Une chaîne complète, fin aux bouts.", "A complete, end-to-end chain.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Ecole}
                            />
                            <h3 className="title">{tr("Écoles de droit & Barreaux", "Law schools & Bar associations")}</h3>
                            <p>{tr("Cas réels pour la formation", "Real cases for training")}</p>
                            <div className='text'>
                                <p>{tr("Créer des corpus de décisions authentiques anonymisées pour l'enseignement.", "Build corpora of authentic, anonymized decisions for teaching.")}</p>
                                <p>{tr("Les étudiants apprennent sur des cas vrais, sécurisés.", "Students learn from real, secure cases.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={International}
                            />
                            <h3 className="title">{tr("Organisations internationales", "International organizations")}</h3>
                            <p>{tr("Programmes d'accès à la justice", "Access-to-justice programs")}</p>
                            <div className='text'>
                                <p>{tr("Financer la mise en ligne sécurisée des jurisprudences africaines avec garanties de conformité et souveraineté des données.", "Fund the secure online publication of African case law with guarantees of compliance and data sovereignty.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Avocat}
                            />
                            <h3 className="title">{tr("Cabinets d'avocats", "Law firms")}</h3>
                            <p>{tr("Gestion intelligente des dossiers", "Smart case file management")}</p>
                            <div className='text'>
                                <p>{tr("Structurer et résumer automatiquement des centaines de contrats et jugements.", "Automatically structure and summarize hundreds of contracts and judgments.")}</p>
                                <p>{tr("Alimente Géode et accélère la recherche juridique interne.", "Feeds Géode and speeds up internal legal research.")}</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Profil}
                            />
                            <h3 className="title">{tr("Votre profil", "Your profile")}</h3>
                            <p>&nbsp;</p>
                            <div className='text'>
                                <p>{tr("Contactez-nous pour une démo personnalisée.", "Contact us for a personalized demo.")}</p>
                            </div>
                            <Link className='ui__btn--gradient' to={lp("/contact")}>{tr("Demander une démo", "Request a demo")}</Link>
                        </li>
                    </ul>
                </div>
            </section>

        </main>
    );
};

export default Omniscan;