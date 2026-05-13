import { Link } from 'react-router';

import '../assets/styles/omniscan.css';

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

const Omniscan = () => {
    return (
        <main className="main main__omniscan">

            {/* Hero */}
            <section className="hero">
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Des données juridiques <em className='higlight'>brutes</em> <br/>
                            à l'intelligence <em className='higlight'>structurée&nbsp;</em>
                        </h1>
                        <h3 className="subtitle">
                            OmniScan transforme en quelques secondes tous vos documents juridiques <br/>
                            — décisions imprimées, contrats PDF, textes législatifs — <br/>
                            en données exploitables, enrichies et prêtes à l'indexation. <br/>
                            Le socle technologique qui réveille le patrimoine légal africain.
                        </h3>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn--gradient' to="/produits/omnia">Demander une démo</Link>
                    </div>
                </div>
            </section>

            {/* Pipeline */}
            <section className="omniscan__pipeline">
                <div className="container">
                    <h2 className='title__h2'>OmniScan · Pipeline IA · Afrique</h2>
                    <div className="structure__columns">
                        <div className="structure__content">
                            <p>
                                OmniScan transforme en quelques secondes tous vos documents juridiques <br/>
                                — décisions imprimées, contrats PDF, textes législatifs — <br/>
                                en données exploitables, enrichies et prêtes à l'indexation. <br/>
                                Le socle technologique qui réveille le patrimoine légal africain.
                            </p>
                        </div>
                        <img src={Pipeline} alt="Application LegOmnia" />
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="bg__grid omniscan__solution">
                <div className="container">
                    <h2 className='title__h2'>Le problème et la solution</h2>
                    <p>
                        Le droit africain est une <em className='higlight'>mine de données brutes inexploitées</em>, des décisions papier aux archives PDF non structurées, une masse immense de patrimoine légal dort.
                    </p>
                    <p>
                        OmniScan change la donne. <em className='higlight'>En quelques secondes, transformez n'importe quel document en intelligence juridique</em>&nbsp;: reconnaître le texte, protéger les données sensibles, extraire la structure, résumer les enjeux. Un seul pipeline?
                    </p>
                    <p>
                        Un seul objectif&nbsp;: débloquer la valeur cachée de vos archives et accélérer l'accès à la justice en Afrique.
                    </p>
                    <ul className='omniscan__solution--cards'>
                        <li className='card'>
                            <IconRing
                                src={Desktop}
                            />
                            <h3 className="title">OCR & Numérisation</h3>
                            <div className='text'>
                                <p>Reconnaissance optique haute précision.</p>
                                <p>Traite PDF, images, archives papier.</p>
                                <p>Optimisé français, anglais, langues locales.</p>
                            </div>
                            <p className="list">
                                PDF · TIFF · JPEG · PNG
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Anonyme}
                            />
                            <h3 className="title">Anonymisation</h3>
                            <div className='text'>
                                <p>Détection & masquage automatique des données personnelles.</p>
                                <p>Configurable par juridiction et type de cas.</p>
                                <p>Conforme RGPD et aux recommandations de l'UA.</p>
                            </div>
                            <p className="list">
                                Noms · Adresses · Identifiants
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Metadonnees}
                            />
                            <h3 className="title">Extraction Métadonnées</h3>
                            <div className='text'>
                                <p>Identification automatique&nbsp;: dates, juridictions, parties, domaines.</p>
                                <p>Alimente indexation et recherche sémantique.</p>
                            </div>
                            <p className="list">
                                Date · Juridiction · Parties
                            </p>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Magic}
                            />
                            <h3 className="title">Résumés IA</h3>
                            <div className='text'>
                                <p>Synthèses exécutives auto-générées.</p>
                                <p>LLM spécialisé droit africain.</p>
                                <p>Qualifications juridiques intégrées.</p>
                            </div>
                            <p className="list">
                                Synthèse · Enjeux · Qualifications
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Etapes */}
            <section className="omniscan__steps">
                <div className="container">
                    <h2 className='title__h2'>4 étapes pour transformer vos documents</h2>
                    <p className='title__subtitle'>De l'import brut à la sortie structurée, chaque étape est optimisée pour vitesse, précision et conformité.</p>
                    <ul className='omniscan__steps--cards'>
                        <li className='card'>
                            <IconRing
                                src={Import}
                            />
                            <p>Étape 01</p>
                            <h3 className="title">Import & OCR</h3>
                            <div className='text'>
                                <p>Chargez vos documents en PDF, image, Word.</p>
                                <p>L'OCR haute précision reconnaît le texte, même sur archives papier scannées de faible qualité.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Analyse}
                            />
                            <p>Étape 02</p>
                            <h3 className="title">Analyse multimodèle</h3>
                            <div className='text'>
                                <p>Détection automatique des données sensibles.</p>
                                <p>Extraction des métadonnées structurantes.</p>
                                <p>Génération de résumé IA.</p>
                                <p>Tout en parallèle, en quelques secondes.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Validation}
                            />
                            <p>Étape 03</p>
                            <h3 className="title">Validation & ajustement</h3>
                            <div className='text'>
                                <p>Interface d'examen intuitive pour valider ou corriger les détections.</p>
                                <p>Contrôle humain toujours présent.</p>
                                <p>Audit complet de chaque modification.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Export}
                            />
                            <p>Étape 04</p>
                            <h3 className="title">Export multi-format</h3>
                            <div className='text'>
                                <p>Téléchargez en PDF enrichi, JSON structuré ou versant vectoriel.</p>
                                <p>Prêt pour publication, indexation, intégration API ou archivage sécurisé.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Souveraineté */}
            <section className="bg__grid omniscan__conform">
                <div className="container">
                    <h2 className='title__h2'>Souveraineté & conformité</h2>
                    <div className="structure__columns ">
                        <div className="structure__content">
                            <p>
                                Déployé sur votre territoire, au cœur de l'Afrique francophone, OmniScan peut être installé directement sur des datacenters Tier 3 certifiés, situés dans votre pays.<br/>
                                Demandez-nous pour vérifier la disponibilité dans votre pays. <br/> <br/>
                                Vos données restent sur le sol national, conformément aux réglementations locales en vigueur. 
                            </p>
                        </div>
                        <img src={Souverainete} alt="Application LegOmnia" />
                    </div>
                </div>
            </section>

            {/* Users */}
            <section className="omniscan__users">
                <div className="container">
                    <h2 className='title__h2'>Qui utilise OmniScan ?</h2>
                    <p>Institutions judiciaires, ministères, universités, cabinets : tous ceux qui doivent valoriser et sécuriser leurs données juridiques brutes.</p>
                    <ul className='omniscan__users--cards'>
                        <li className='card'>
                            <IconRing
                                src={Institution}
                            />
                            <h3 className="title">Tribunaux & Cours Suprêmes</h3>
                            <p>Numérisation d'archives judiciaires</p>
                            <div className='text'>
                                <p>Transformer des décennies de décisions papier en base de données searchable.</p>
                                <p>OCR + indexation + résumés IA en quelques semaines au lieu de mois.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Ministere}
                            />
                            <h3 className="title">Ministères de la Justice</h3>
                            <p>Publication de jurisprudences officielles</p>
                            <div className='text'>
                                <p>Anonymiser, extraire métadonnées et publier massivement vos décisions en conformité RGPD & OHADA.</p>
                                <p>Une chaîne complète, fin aux bouts.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Ecole}
                            />
                            <h3 className="title">Écoles de droit & Barreaux</h3>
                            <p>Cas réels pour la formation</p>
                            <div className='text'>
                                <p>Créer des corpus de décisions authentiques anonymisées pour l'enseignement.</p>
                                <p>Les étudiants apprennent sur des cas vrais, sécurisés.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={International}
                            />
                            <h3 className="title">Organisations internationales</h3>
                            <p>Programmes d'accès à la justice</p>
                            <div className='text'>
                                <p>Financer la mise en ligne sécurisée des jurisprudences africaines avec garanties de conformité et souveraineté des données.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Avocat}
                            />
                            <h3 className="title">Cabinets d'avocats</h3>
                            <p>Gestion intelligente des dossiers</p>
                            <div className='text'>
                                <p>Structurer et résumer automatiquement des centaines de contrats et jugements.</p>
                                <p>Alimente Géode et accélère la recherche juridique interne.</p>
                            </div>
                        </li>
                        <li className='card'>
                            <IconRing
                                src={Profil}
                            />
                            <h3 className="title">Votre profil</h3>
                            <p>&nbsp;</p>
                            <div className='text'>
                                <p>Contactez-nous pour une démo personnalisée.</p>
                            </div>
                            <Link className='ui__btn--gradient' to="/produits/contact">Demander une démo</Link>
                        </li>
                    </ul>
                </div>
            </section>

        </main>
    );
};

export default Omniscan;