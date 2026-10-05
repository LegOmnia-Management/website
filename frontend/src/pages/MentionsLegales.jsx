import '../assets/styles/mentions.css';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';
import useLang from '../i18n/useLang';

const MentionsLegales = () => {

    const { lang, tr } = useLang();

    return (
        <main className="main main__mentions">
            <SEOHead
                title={tr("Mentions légales — LegOmnia", "Legal notice — LegOmnia")}
                description={tr("Mentions légales de la plateforme LegOmnia : éditeur, hébergeur, données personnelles et conditions d'utilisation.", "Legal notice for the LegOmnia platform: publisher, host, personal data and terms of use.")}
                canonical="/mentions-legales"
                noIndex={true}
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                    <h1 className="main-title">{tr("Mentions légales", "Legal notice")}</h1>
                    </div>
                </div>
            </section>

            <div className="container">
                {lang === 'en' && (
                    <p className="mtXl"><em>This English translation is provided for information purposes only. In the event of any discrepancy, the French version shall prevail.</em></p>
                )}

                <p className="mtXl">
                    {tr("Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site", "In accordance with French Law No. 2004-575 of 21 June 2004 on confidence in the digital economy, users of the")} <span className='highlight'>LEGOMNIA</span> {tr("l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.", "website are hereby informed of the identity of the parties involved in its creation and maintenance.")}
                </p>
                
                <h2 className="mentions__title">{tr("Éditeur du site", "Website publisher")}</h2>
                <p>
                    {tr("Le présent site est édité par :", "This website is published by:")}<br/>
                    <span className='highlight'>LEGOMNIA SAS</span><br/>
                    8 rue du chevalier de la barre<br/>
                    75018 PARIS<br/>
                    {tr("SAS au capital de", "SAS (simplified joint-stock company) with share capital of")} <span className='highlight'>1 000 €</span><br/>
                    RCS 832 584 635 Dax<br/>
                    SIRET&nbsp;: 832 584 635 00011<br/>
                    {tr("TVA intracommunautaire : FR37 832 584 634", "EU VAT number: FR37 832 584 634")}<br/>
                    {tr("Code APE : 7311Z", "APE code: 7311Z")}<br/>
                    <span className='highlight'>{tr("Directeur de la publication : Jean-Patrick BERTAUD", "Publication director: Jean-Patrick BERTAUD")}</span>
                </p>

                <h2 className="mentions__title">{tr("Coordonnées", "Contact details")}</h2>
                <p>
                    {tr("Le site", "The")} <span className='highlight'>LEGOMNIA</span> {tr("est exploité par :", "website is operated by:")}<br/>
                    <span className='highlight'>LEGOMNIA</span><br/>
                    {tr("SAS au capital de", "SAS (simplified joint-stock company) with share capital of")} <span className='highlight'>1 000 €</span><br/>
                    RCS 979 488 236 Paris<br/>
                    8 rue du Chevalier de la Barre<br/>
                    75018 Paris
                </p>
                <p className="mt">
                    {tr("Le service client est joignable du lundi au vendredi,", "Customer service is available Monday to Friday,")}<br/>
                    {tr("de 9h00 à 12h00 et de 14h00 à 17h30.", "from 9:00 am to 12:00 pm and from 2:00 pm to 5:30 pm (Paris time).")}
                </p>
                <p className="mt">
                    <span className='highlight'>{tr("Email :", "Email:")}</span> <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
                </p>

                <h2 className="mentions__title">{tr("Hébergement", "Hosting")}</h2>
                <p>
                    {tr("Le site est hébergé par :", "The website is hosted by:")}<br/>
                    <span className='highlight'>SAS OVH</span><br/>
                    2 rue Kellermann<br/>
                    59100 Roubaix – France
                </p>
                <p className="mt">
                    {tr("SAS au capital de 50 000 000 €", "SAS with share capital of €50,000,000")}<br/>
                    RCS 424 761 419 Roubaix – Tourcoing<br/>
                    {tr("Code APE : 6311Z", "APE code: 6311Z")}<br/>
                    {tr("N° TVA : FR 22-424-761-419-00011", "VAT no.: FR 22-424-761-419-00011")}
                </p>
                <p className="mt">
                    <span className='highlight'>{tr("Téléphone :", "Phone:")}</span> 0899 701 761<br/>
                    <span className='highlight'>{tr("Fax :", "Fax:")}</span> +33 (0) 3 20 20 09 58<br/>
                    <span className='highlight'>{tr("Site Internet :", "Website:")}</span> <a href="https://www.ovhcloud.com/fr/" target="_blank">https://www.ovhcloud.com/fr/</a><br/>
                    <span className='highlight'>{tr("Support :", "Support:")}</span> <a href="http://ovh.com/fr/contact/support/" target="_blank">https://ovh.com/fr/contact/support/</a>
                </p>

                <h2 className="mentions__title">{tr("Propriété intellectuelle", "Intellectual property")}</h2>
                <p>
                    {tr("L’ensemble des éléments présents sur le site", "All content on the")} <span className='highlight'>LEGOMNIA</span> {tr("(textes, images, graphismes, logos, etc.) est protégé par le droit de la propriété intellectuelle.", "website (texts, images, graphics, logos, etc.) is protected by intellectual property law.")}
                </p>
                <p className="mt">
                    {tr("Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable, est strictement interdite.", "Any reproduction, representation, modification or use, in whole or in part, without prior authorization is strictly prohibited.")}
                </p>

                <h2 className="mentions__title">{tr("Responsabilité", "Liability")}</h2>
                <p>
                    <span className='highlight'>LEGOMNIA</span> {tr("s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, ces informations sont communiquées à titre indicatif et sont susceptibles d’évoluer à tout moment.", "strives to provide information on the website that is as accurate as possible. However, this information is provided for guidance only and may change at any time.")}
                </p>
                <p className="mt">
                    <span className='highlight'>LEGOMNIA</span> {tr("ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.", "cannot be held liable for any omissions, inaccuracies or failure to update the information.")}
                </p>
                <p className="mt">
                    {tr("Le site peut contenir des liens hypertextes vers des sites externes.", "The website may contain hyperlinks to external websites.")}<br/>
                    <span className='highlight'>LEGOMNIA</span> {tr("n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.", "has no control over these websites and accepts no liability for their content.")}
                </p>

                <h2 className="mentions__title">{tr("Données personnelles", "Personal data")}</h2>
                <p>
                    {tr("Les informations recueillies via les formulaires présents sur le site font l’objet d’un traitement informatique destiné à la gestion de la clientèle.", "Information collected through the forms on the website is processed electronically for customer relationship management purposes.")}
                </p>
                <p className="mt">
                    {tr("Elles sont conservées pendant une durée maximale de 1 an et sont destinées aux services marketing et commercial.", "It is kept for a maximum of 1 year and is intended for the marketing and sales departments.")}
                </p>
                <p className="mt">
                    {tr("Conformément à la loi Informatique et Libertés et au Règlement (UE) 2016/679, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant.", "In accordance with the French Data Protection Act (loi Informatique et Libertés) and Regulation (EU) 2016/679 (GDPR), you have the right to access, rectify and erase your personal data.")}
                </p>
                <p className="mt">
                    {tr("Vous pouvez exercer ces droits en contactant :", "You can exercise these rights by contacting:")}<br/>
                    <span className='highlight'>LEGOMNIA</span> – <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
                </p>

                <h2 className="mentions__title">{tr("Démarchage téléphonique", "Telephone canvassing")}</h2>
                <p>
                    {tr("Conformément à la législation en vigueur, vous pouvez vous inscrire sur la liste d’opposition au démarchage téléphonique Bloctel :", "In accordance with applicable law, you can register on the Bloctel telephone canvassing opt-out list:")}<br/>
                    <a href="https://www.bloctel.gouv.fr/" target="_blank">https://www.bloctel.gouv.fr/</a>
                </p>
            </div>
        </main>
    );
};

export default MentionsLegales;