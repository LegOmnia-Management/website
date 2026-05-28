import { Link } from 'react-router-dom';

import '../assets/styles/mentions.css';

import HeroBg from '../components/HeroBg';

const Cgu = () => {
    return (
        <main className="main main__mentions">

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                    <h1 className="main-title">Conditions Générales d'Utilisation (CGU)</h1>
                    </div>
                </div>
            </section>

            <div className="container">
                
                <h2 className="mentions__title"><span>1.</span> Objet</h2>
                <p>
                    Les présentes Conditions Générales d’Utilisation ont pour objet de définir les modalités d’accès et d’utilisation du site <span className='highlight'>LEGOMNIA</span> accessible à l’adresse www.legomnia.com.<br/>
                    <span className='highlight'>LEGOMNIA</span> est une plateforme numérique proposant des services de recherche juridique assistée par intelligence artificielle, dédiée à l’Afrique francophone.<br/>
                    L’accès et l’utilisation du site impliquent l’acceptation pleine et entière des présentes CGU.
                </p>

                <h2 className="mentions__title"><span>2.</span> Définitions</h2>
                <p>
                    <em>Éditeur</em>&nbsp;: la société LegOmnia SAS, dont les informations sont disponibles dans les mentions légales<br/>
                    <em>Site</em>&nbsp;: le site internet accessible à l’adresse www.legomnia.com<br/>
                    <em>Utilisateur</em>&nbsp;: toute personne accédant au site<br/>
                    <em>Services</em>&nbsp;: l’ensemble des fonctionnalités proposées par <span className='highlight'>LEGOMNIA</span>, notamment les outils de recherche juridique et les contenus associés
                </p>

                <h2 className="mentions__title"><span>3.</span> Accès au site</h2>
                <p>
                    Le site est accessible gratuitement à tout Utilisateur disposant d’un accès à Internet.<br/>
                    <span className='highlight'>LEGOMNIA</span> s’efforce d’assurer un accès continu au site, sans toutefois garantir l’absence d’interruptions, notamment pour des raisons de maintenance ou de mise à jour.
                </p>

                <h2 className="mentions__title"><span>4.</span> Acceptation des CGU</h2>
                <p>
                    L’utilisation du site vaut acceptation des présentes CGU.<br/>
                    Lors de l’utilisation de certains services (formulaire, demande de démonstration, création de compte), cette acceptation pourra être confirmée par une action spécifique, telle que la validation d’une case dédiée.<br/>
                    L’Utilisateur reconnaît avoir pris connaissance des CGU avant toute utilisation du site.
                </p>

                <h2 className="mentions__title"><span>5.</span> Description des services</h2>
                <p>
                    <span className='highlight'>LEGOMNIA</span> propose une plateforme de recherche juridique reposant sur des technologies d’intelligence artificielle.<br/>
                    Les Services peuvent inclure&nbsp;:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - la consultation de contenus juridiques<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - l’accès à des outils de recherche<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - l’analyse automatisée d’informations juridiques<br/>
                </p>

                <h2 className="mentions__title"><span>6.</span> Absence de conseil juridiques</h2>
                <p>
                Les contenus et informations fournis sur le site sont proposés à titre informatif uniquement.
                Ils ne constituent en aucun cas&nbsp;:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - un conseil juridique<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - une consultation juridique<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - une prestation d’assistance personnalisée<br/>
                <span className='highlight'>LEGOMNIA</span> ne se substitue pas à un avocat ou à tout autre professionnel du droit.<br/>
                L’Utilisateur est seul responsable de l’utilisation des informations fournies sur le site.
                </p>

                <h2 className="mentions__title"><span>7.</span> Obligations de l’utilisateur</h2>
                <p>
                L’Utilisateur s’engage à utiliser le site de manière loyale et conforme à sa finalité.
                Il s’interdit notamment&nbsp;:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - d’utiliser des procédés automatisés pour accéder au site<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - de tenter d’accéder de manière frauduleuse aux systèmes informatiques<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - de perturber le fonctionnement du site<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - d’utiliser le site à des fins illicites<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - de porter atteinte aux droits de propriété intellectuelle<br/>
                En cas de non-respect, <span className='highlight'>LEGOMNIA</span> se réserve le droit de suspendre ou restreindre l’accès au site.
                </p>

                <h2 className="mentions__title"><span>8.</span> Propriété intellectuelle</h2>
                <p>
                    L’ensemble du contenu du site (textes, images, logo, structure, base de données, etc.) est protégé par le droit de la propriété intellectuelle.<br/>
                    Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation préalable est interdite.
                </p>

                <h2 className="mentions__title"><span>9.</span> Responsabilité</h2>
                <p>
                <span className='highlight'>LEGOMNIA</span> s’engage à mettre en œuvre tous les moyens nécessaires pour assurer le bon fonctionnement du site.
                Toutefois&nbsp;:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - le site est fourni “en l’état”<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - aucune garantie n’est donnée quant à l’exactitude ou l’exhaustivité des informations<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - des erreurs ou omissions peuvent exister<br/>
                <span className='highlight'>LEGOMNIA</span> ne pourra être tenue responsable&nbsp;:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - des interruptions ou dysfonctionnements du site<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - des dommages indirects (perte de données, perte de chiffre d’affaires, perte d’opportunités)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - de l’utilisation des informations fournies par le site<br/>
                L’Utilisateur utilise le site sous sa seule responsabilité.
                </p>

                <h2 className="mentions__title"><span>10.</span> Données personnelles</h2>
                <p>
                    Les données personnelles collectées dans le cadre de l’utilisation du site font l’objet d’un traitement conforme à la réglementation en vigueur.<br/>
                    Pour en savoir plus, l’Utilisateur est invité à consulter la Politique de Confidentialité disponible sur le site.
                </p>

                <h2 className="mentions__title"><span>11.</span> Liens hypertextes</h2>
                <p>
                    Le site peut contenir des liens vers des sites externes.<br/>
                    <span className='highlight'>LEGOMNIA</span> n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>

                <h2 className="mentions__title"><span>12.</span> Modification des CGU</h2>
                <p>
                    <span className='highlight'>LEGOMNIA</span> se réserve le droit de modifier les présentes CGU à tout moment.<br/>
                    Les nouvelles conditions s’appliquent dès leur mise en ligne.
                </p>

                <h2 className="mentions__title"><span>13.</span> Droit applicable et juridiction compétente</h2>
                <p>
                    Les présentes CGU sont soumises au droit français.<br/>
                    En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de l’éditeur.
                </p>
            </div>
        </main>
    );
};

export default Cgu;