import '../assets/styles/transformation.css';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';
import IconRing from '../components/IconRing';

import Geode from '../assets/img/divers/geode.svg';
import CM from '../assets/img/divers/case_management.svg';
import Digitale from '../assets/img/pictos/transformation.svg';
import Archivage from '../assets/img/pictos/archivage.svg';
import Numerisation from '../assets/img/pictos/numerisation.svg';
import Innovation from '../assets/img/pictos/innovation.svg';
import AI from '../assets/img/pictos/AI.svg';

import useLang from '../i18n/useLang';

const Transformation = () => {

    const { lp, tr } = useLang();

    return (
        <main className="main main__transformation">
            <SEOHead
                title={tr("Transformation digitale juridique en Afrique francophone", "Legal digital transformation in French-speaking Africa")}
                description={tr("LegOmnia accompagne institutions et cabinets dans leur transformation digitale : numérisation, structuration et exploitation des données juridiques africaines.", "LegOmnia supports institutions and law firms in their digital transformation: digitization, structuring and use of African legal data.")}
                canonical="/produits/transformation-digitale/presentation"
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("Accélérateur de", "Accelerating")} <span className='break'><em className="highlight">{tr("transformation digitale", "digital transformation")}</em> {tr("juridique", "in the legal sector")}</span>
                        </h1>
                        <h3 className="subtitle">
                            {tr("Nous accompagnons les institutions judiciaires, ministères, cabinets d'avocats", "We support judicial institutions, ministries, law firms")} <span className='break'>{tr("et directions juridiques dans leur", "and legal departments in their")} <span className="highlight">{tr("transition numérique", "digital transition")}</span>.</span>
                        </h3>
                        <p>
                            {tr("Notre mission : rendre les services juridiques plus efficaces, sécurisés et transparents,", "Our mission: to make legal services more efficient, secure and transparent,")} <span className='break'>{tr("grâce à l'intégration de", "through the integration of")} <span className="highlight">{tr("solutions numériques avancées", "advanced digital solutions")}</span>.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Positionnement */}
            <section className="bg__circle transformation__positionnement">
                <div className="container">
                    <h2 className='title__h2'>{tr("La technologie au service du droit", "Technology serving the law")}</h2>
                    <p>
                        {tr("Nous croyons fermement que la technologie peut transformer en profondeur le secteur juridique :", "We firmly believe that technology can profoundly transform the legal sector:")} <span className="highlight">{tr("améliorer la productivité", "improving the productivity")}</span> {tr("des équipes,", "of teams,")} <span className="highlight">{tr("renforcer la sécurité", "strengthening the security")}</span> {tr("des données sensibles, et", "of sensitive data, and")} <span className="highlight">{tr("faciliter l'accès à l'information", "facilitating access to information")}</span> {tr("pour tous les acteurs de la chaîne judiciaire.", "for everyone involved in the justice system.")}
                    </p>
                    <p>
                        {tr("En combinant expertise métier juridique et maîtrise des technologies de l'information, LegOmnia propose des", "By combining legal domain expertise with mastery of information technology, LegOmnia offers")} <span className="highlight">{tr("solutions sur mesure, pensées pour répondre aux réalités opérationnelles des professionnels du droit", "tailor-made solutions, designed to meet the operational realities of legal professionals")}</span> {tr("— qu'il s'agisse de juridictions, d'administrations centrales ou de structures privées.", "— whether courts, central government bodies or private organizations.")}
                    </p>
                </div>
            </section>

            {/* Concept */}
            <section className="transformation__concept">
                <div className="container">
                    <h2 className='title__h2'>
                        {tr("Des technologies destinées à reconfigurer les standards de la justice et de l'information stratégique", "Technologies set to reshape the standards of justice and strategic information")}
                    </h2>
                    <p>
                        {tr("Ces deux POC illustrent la capacité de LegOmnia à concevoir, prototyper et valider des", "These two proofs of concept illustrate LegOmnia's ability to design, prototype and validate")} <span className="highlight">{tr("solutions innovantes dans des contextes hautement sensibles", "innovative solutions in highly sensitive contexts")}</span>{tr(", en réponse aux besoins concrets des acteurs publics de la justice.", ", in response to the concrete needs of public justice stakeholders.")}
                    </p>

                    <ul className='transformation__concept--list'>
                        <li className='card'>
                            <img className="image" src={Geode} alt="" aria-hidden="true" loading="lazy"/>
                            <h3 className="title">Géode</h3>
                            <p>{tr("Plateforme de Gestion Electronique de Documents (GED)", "Electronic Document Management (EDM) Platform")}</p>
                            <p className='text'>
                                {tr("Pensée pour les environnements institutionnels exigeants, Géode est", "Designed for demanding institutional environments, Géode is")} <span className="highlight">{tr("une solution de gestion électronique de documents", "an electronic document management solution")}</span> {tr("dédiée aux entreprises, organisations et administrations.", "for companies, organizations and public administrations.")}
                            </p>
                            <p className='text'>
                                {tr("Conçue,", "Designed,")} <span className="highlight">{tr("développée et éprouvée en conditions réelles", "developed and proven in real-world conditions")}</span>{tr(", elle permet de transformer des volumes importants de documents en actifs numériques exploitables.", ", it turns large volumes of documents into usable digital assets.")}
                            </p>
                            <p className='text'>
                                {tr("Grâce à des", "Thanks to")} <span className="highlight">{tr("mécanismes avancés de classification intelligente, de dématérialisation et d'archivage sécurisé", "advanced mechanisms for smart classification, dematerialization and secure archiving")}</span>{tr(", Géode garantit une gestion fluide, structurée et conforme des flux documentaires.", ", Géode ensures smooth, structured and compliant management of document flows.")}
                            </p>
                            <p className='text'>
                                {tr("Les expérimentations menées ont mis en évidence des", "Pilot deployments have demonstrated")} <span className="highlight">{tr("gains significatifs en termes de rapidité de traitement", "significant gains in processing speed")}</span>{tr(", tout en assurant une traçabilité complète et fiable des opérations.", ", while ensuring complete and reliable traceability of operations.")}
                            </p>
                        </li>
                        <li className='card'>
                            <img className="image"  src={CM} alt="" aria-hidden="true" loading="lazy"/>
                            <h3 className="title">Case Manager</h3>
                            <p>{tr("Gestion d'Affaires pour Ministères et Tribunaux", "Case Management for Ministries and Courts")}</p>
                            <p className='text'>
                                {tr("Développée pour répondre aux enjeux opérationnels des institutions judiciaires, Case Manager est une", "Developed to address the operational challenges of judicial institutions, Case Manager is a")} <span className="highlight">{tr("solution de pilotage des procédures permettant une gestion centralisée et structurée des dossiers", "procedure management solution enabling centralized, structured case handling")}</span>.
                                </p>
                            <p className='text'>
                                {tr("Testée dans des environnements ministériels et juridictionnels, elle offre une", "Tested in ministerial and court environments, it provides a")} <span className="highlight">{tr("vision globale et en temps réel", "comprehensive, real-time view")}</span> {tr("de l'ensemble des affaires traitées.", "of all cases being handled.")}
                            </p>
                            <p className='text'>
                                {tr("En automatisant les étapes clés du cycle de traitement, la solution", "By automating the key steps of the processing cycle, the solution")} <span className="highlight">{tr("optimise l'efficacité des équipes", "optimizes team efficiency")}</span>{tr(", tout en renforçant la transparence et le suivi des procédures.", ", while strengthening the transparency and monitoring of procedures.")}
                            </p>
                            <p className='text'>
                                {tr("Conçue pour s'intégrer aux systèmes existants, elle", "Designed to integrate with existing systems, it")} <span className="highlight">{tr("s'adapte aux exigences réglementaires et aux spécificités des juridictions", "adapts to regulatory requirements and the specificities of each jurisdiction")}</span>{tr(", notamment dans le contexte africain francophone.", ", particularly in the French-speaking African context.")}
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Compétences */}
            <section className="bg__circle transformation__skills">
                <div className="container">
                    <h2 className='title__h2'>
                        {tr("5 axes d'accompagnement complémentaires", "5 complementary areas of support")}
                    </h2>
                    <ul className='transformation__skills--list'>
                        <li className='card'>
                            <IconRing
                                src={Digitale}
                            />
                            <h3 className="title">{tr("Transformation digitale", "Digital transformation")}</h3>
                            <p>
                                {tr("Modernisation des processus juridiques et amélioration de l'efficacité opérationnelle.", "Modernizing legal processes and improving operational efficiency.")}
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Archivage}
                            />
                            <h3 className="title">{tr("GED & Archivage", "EDM & Archiving")}</h3>
                            <p>
                                {tr("Systèmes de gestion documentaire pour accès rapide et sécurisé aux dossiers.", "Document management systems for fast, secure access to files.")}
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Numerisation}
                            />
                            <h3 className="title">{tr("Numérisation intelligente", "Smart digitization")}</h3>
                            <p>
                                {tr("Conversion des documents physiques en actifs numériques exploitables.", "Converting physical documents into usable digital assets.")}
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Innovation}
                            />
                            <h3 className="title">{tr("Innovation & IA", "Innovation & AI")}</h3>
                            <p>
                                {tr("Automatisation des tâches répétitives pour concentrer les ressources sur la valeur ajoutée.", "Automating repetitive tasks to focus resources on added value.")}
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={AI}
                            />
                            <h3 className="title">{tr("Gouvernance IA & Éthique", "AI Governance & Ethics")}</h3>
                            <p>
                                {tr("Intégration responsable de l'IA, avec transparence et conformité réglementaire.", "Responsible AI integration, with transparency and regulatory compliance.")}
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Demande de démo */}
            <section className="home__ask__demo">
                <div className="container">
                    <div className="home__ask__demo--content">
                        <h2 className="title__h2">{tr("Prêt à engager votre organisation ?", "Ready to get your organization on board?")}</h2>
                        <p>{tr("Contactez LegOmnia pour bénéficier d'un accompagnement personnalisé et découvrir comment nos solutions - dont Géode et Case Manager - peuvent s'adapter à vos besoins spécifiques", "Contact LegOmnia for personalized support and find out how our solutions — including Géode and Case Manager — can adapt to your specific needs")}</p>
                        <div className="home__ask__demo--actions">
                            <a className="ui__btn" href={lp("/contact")}>{tr("Nous contacter", "Contact us")}</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Transformation;