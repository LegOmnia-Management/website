import '../assets/styles/mentions.css';

import HeroBg from '../components/HeroBg';

const MentionsLegales = () => {
    return (
        <main className="main main__mentions">

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                    <h1 className="main-title">Mentions légales</h1>
                    </div>
                </div>
            </section>

            <div className="container">

                <p className="mt mb">
                    Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site <span className='highlight'>LEGOMNIA</span> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                </p>
                
                <h2 className="mentions__title">Éditeur du site</h2>
                <p>
                    Le présent site est édité par&nbsp;:<br/>
                    <span className='highlight'>LEGOMNIA SAS</span><br/>
                    8 rue du chevalier de la barre<br/>
                    75018 PARIS<br/>
                    SAS au capital de <span className='highlight'>1 000 €</span><br/>
                    RCS 832 584 635 Dax<br/>
                    SIRET&nbsp;: 832 584 635 00011<br/>
                    TVA intracommunautaire&nbsp;: FR37 832 584 634<br/>
                    Code APE&nbsp;: 7311Z<br/>
                    <span className='highlight'>Directeur de la publication&nbsp;: Jean-Patrick BERTAUD</span>
                </p>

                <h2 className="mentions__title">Coordonnées</h2>
                <p>
                    Le site <span className='highlight'>LEGOMNIA</span> est exploité par&nbsp;:<br/>
                    <span className='highlight'>LEGOMNIA</span><br/>
                    SAS au capital de <span className='highlight'>1 000 €</span><br/>
                    RCS 979 488 236 Paris<br/>
                    8 rue du Chevalier de la Barre<br/>
                    75018 Paris
                </p>
                <p className="mt">
                    Le service client est joignable du lundi au vendredi,<br/>
                    de 9h00 à 12h00 et de 14h00 à 17h30.
                </p>
                <p className="mt">
                    <span className='highlight'>Email&nbsp;:</span> <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
                </p>

                <h2 className="mentions__title">Hébergement</h2>
                <p>
                    Le site est hébergé par&nbsp;:<br/>
                    <span className='highlight'>SAS OVH</span><br/>
                    2 rue Kellermann<br/>
                    59100 Roubaix – France
                </p>
                <p className="mt">
                    SAS au capital de 50 000 000 €<br/>
                    RCS 424 761 419 Roubaix – Tourcoing<br/>
                    Code APE&nbsp;: 6311Z<br/>
                    N° TVA&nbsp;: FR 22-424-761-419-00011
                </p>
                <p className="mt">
                    <span className='highlight'>Téléphone&nbsp;:</span> 0899 701 761<br/>
                    <span className='highlight'>Fax&nbsp;:</span> +33 (0) 3 20 20 09 58<br/>
                    <span className='highlight'>Site Internet&nbsp;:</span> <a href="https://www.ovhcloud.com/fr/" target="_blank">https://www.ovhcloud.com/fr/</a><br/>
                    <span className='highlight'>Support&nbsp;:</span> <a href="http://ovh.com/fr/contact/support/" target="_blank">https://ovh.com/fr/contact/support/</a>
                </p>

                <h2 className="mentions__title">Propriété intellectuelle</h2>
                <p>
                    L’ensemble des éléments présents sur le site <span className='highlight'>LEGOMNIA</span> (textes, images, graphismes, logos, etc.) est protégé par le droit de la propriété intellectuelle.
                </p>
                <p className="mt">
                    Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable, est strictement interdite.
                </p>

                <h2 className="mentions__title">Responsabilité</h2>
                <p>
                    <span className='highlight'>LEGOMNIA</span> s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, ces informations sont communiquées à titre indicatif et sont susceptibles d’évoluer à tout moment.
                </p>
                <p className="mt">
                    <span className='highlight'>LEGOMNIA</span> ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.
                </p>
                <p className="mt">
                    Le site peut contenir des liens hypertextes vers des sites externes.<br/>
                    <span className='highlight'>LEGOMNIA</span> n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>

                <h2 className="mentions__title">Données personnelles</h2>
                <p>
                    Les informations recueillies via les formulaires présents sur le site font l’objet d’un traitement informatique destiné à la gestion de la clientèle.
                </p>
                <p className="mt">
                    Elles sont conservées pendant une durée maximale de 1 an et sont destinées aux services marketing et commercial.
                </p>
                <p className="mt">
                    Conformément à la loi Informatique et Libertés et au Règlement (UE) 2016/679, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant.
                </p>
                <p className="mt">
                    Vous pouvez exercer ces droits en contactant&nbsp;:<br/>
                    <span className='highlight'>LEGOMNIA</span> – <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
                </p>

                <h2 className="mentions__title">Démarchage téléphonique</h2>
                <p>
                    Conformément à la législation en vigueur, vous pouvez vous inscrire sur la liste d’opposition au démarchage téléphonique Bloctel&nbsp;:<br/>
                    <a href="https://www.bloctel.gouv.fr/" target="_blank">https://www.bloctel.gouv.fr/</a>
                </p>
            </div>
        </main>
    );
};

export default MentionsLegales;