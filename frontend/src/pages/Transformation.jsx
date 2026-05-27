import '../assets/styles/transformation.css';

import HeroBg from '../components/HeroBg';
import IconRing from '../components/IconRing';

import Geode from '../assets/img/divers/geode.svg';
import CM from '../assets/img/divers/case_management.svg';
import Digitale from '../assets/img/pictos/transformation.svg';
import Archivage from '../assets/img/pictos/archivage.svg';
import Numerisation from '../assets/img/pictos/numerisation.svg';
import Innovation from '../assets/img/pictos/innovation.svg';
import AI from '../assets/img/pictos/AI.svg';

const Transformation = () => {
    return (
        <main className="main main__transformation">

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Accélérateur de <span className='break'><em class="highlight">transformation digitale</em> juridique</span>
                        </h1>
                        <h3 className="subtitle">
                            Nous accompagnons les institutions judiciaires, ministères, cabinets d'avocats <span className='break'>et directions juridiques dans leur <span class="highlight">transition numérique</span>.</span>
                        </h3>
                        <p>
                            Notre mission&nbsp;: rendre les services juridiques plus efficaces, sécurisés et transparents, <span className='break'>grâce à l'intégration de <span class="highlight">solutions numériques avancées</span>.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Positionnement */}
            <section className="bg__circle transformation__positionnement">
                <div className="container">
                    <h2 className='title__h2'>La technologie au service du droit</h2>
                    <p>
                        Nous croyons fermement que la technologie peut transformer en profondeur le secteur juridique&nbsp;: <span class="highlight">améliorer la productivité</span> des équipes, <span class="highlight">renforcer la sécurité</span> des données sensibles, et <span class="highlight">faciliter l'accès à l'information</span> pour tous les acteurs de la chaîne judiciaire.
                    </p>
                    <p>
                        En combinant expertise métier juridique et maîtrise des technologies de l'information, LegOmnia propose des <span class="highlight">solutions sur mesure, pensées pour répondre aux réalités opérationnelles des professionnels du droit</span> — qu'il s'agisse de juridictions, d'administrations centrales ou de structures privées.
                    </p>
                </div>
            </section>

            {/* Concept */}
            <section className="transformation__concept">
                <div className="container">
                    <h2 className='title__h2'>
                        Des technologies destinées à reconfigurer les standards de la justice et de l'information stratégique
                    </h2>
                    <p>
                        Ces deux POC illustrent la capacité de LegOmnia à concevoir, prototyper et valider des <span class="highlight">solutions innovantes dans des contextes hautement sensibles</span>, en réponse aux besoins concrets des acteurs publics de la justice.
                    </p>

                    <ul className='transformation__concept--list'>
                        <li className='card'>
                            <img className="image" src={Geode} alt="" aria-hidden="true" loading="lazy"/>
                            <h3 className="title">Géode</h3>
                            <p>Plateforme de Gestion Electronique de Documents (GED)</p>
                            <p className='text'>
                                Pensée pour les environnements institutionnels exigeants, Géode est <span class="highlight">une solution de gestion électronique de documents</span> dédiée aux entreprises, organisations et administrations.
                            </p>
                            <p className='text'>
                                Conçue, <span class="highlight">développée et éprouvée en conditions réelles</span>, elle permet de transformer des volumes importants de documents en actifs numériques exploitables.
                            </p>
                            <p className='text'>
                                Grâce à des <span class="highlight">mécanismes avancés de classification intelligente, de dématérialisation et d'archivage sécurisé</span>, Géode garantit une gestion fluide, structurée et conforme des flux documentaires.
                            </p>
                            <p className='text'>
                                Les expérimentations menées ont mis en évidence des <span class="highlight">gains significatifs en termes de rapidité de traitement</span>, tout en assurant une traçabilité complète et fiable des opérations.
                            </p>
                        </li>
                        <li className='card'>
                            <img className="image"  src={CM} alt="" aria-hidden="true" loading="lazy"/>
                            <h3 className="title">Case Manager</h3>
                            <p>Gestion d'Affaires pour Ministères et Tribunaux</p>
                            <p className='text'>
                                Développée pour répondre aux enjeux opérationnels des institutions judiciaires, Case Manager est une <span class="highlight">solution de pilotage des procédures permettant une gestion centralisée et structurée des dossiers</span>.
                                </p>
                            <p className='text'>
                                Testée dans des environnements ministériels et juridictionnels, elle offre une <span class="highlight">vision globale et en temps réel</span> de l'ensemble des affaires traitées.
                            </p>
                            <p className='text'>
                                En automatisant les étapes clés du cycle de traitement, la solution <span class="highlight">optimise l'efficacité des équipes</span>, tout en renforçant la transparence et le suivi des procédures.
                            </p>
                            <p className='text'>
                                Conçue pour s'intégrer aux systèmes existants, elle <span class="highlight">s'adapte aux exigences réglementaires et aux spécificités des juridictions</span>, notamment dans le contexte africain francophone.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Compétences */}
            <section className="bg__circle transformation__skills">
                <div className="container">
                    <h2 className='title__h2'>
                        5 axes d'accompagnement complémentaires
                    </h2>
                    <ul className='transformation__skills--list'>
                        <li className='card'>
                            <IconRing
                                src={Digitale}
                            />
                            <h3 className="title">Transformation digitale</h3>
                            <p>
                                Modernisation des processus juridiques et amélioration de l'efficacité opérationnelle.
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Archivage}
                            />
                            <h3 className="title">GED & Archivage</h3>
                            <p>
                                Systèmes de gestion documentaire pour accès rapide et sécurisé aux dossiers.
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Numerisation}
                            />
                            <h3 className="title">Numérisation intelligente</h3>
                            <p>
                                Conversion des documents physiques en actifs numériques exploitables.
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Innovation}
                            />
                            <h3 className="title">Innovation & IA</h3>
                            <p>
                                Automatisation des tâches répétitives pour concentrer les ressources sur la valeur ajoutée.
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={AI}
                            />
                            <h3 className="title">Gouvernance IA & Éthique</h3>
                            <p>
                                Intégration responsable de l'IA, avec transparence et conformité réglementaire.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Demande de démo */}
            <section className="home__ask__demo">
                <div className="container">
                    <div className="home__ask__demo--content">
                        <h2 className="title__h2">Prêt à engager votre organisation ?</h2>
                        <p>Contactez LegOmnia pour bénéficier d'un accompagnement personnalisé et découvrir comment nos solutions - dont Géode et Case Manager - peuvent s'adapter à vos besoins spécifiques</p>
                        <div className="home__ask__demo--actions">
                            <a className="ui__btn" href="/contact">Nous contacter</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Transformation;