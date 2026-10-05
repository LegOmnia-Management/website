import '../assets/styles/mentions.css';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';
import useLang from '../i18n/useLang';

const Cgu = () => {

    const { lang, tr } = useLang();

    return (
        <main className="main main__mentions">
            <SEOHead
                title={tr("Conditions générales d'utilisation", "Terms of use")}
                description={tr("Conditions générales d'utilisation du site LegOmnia : accès, services, responsabilités et droit applicable.", "Terms of use of the LegOmnia website: access, services, liability and governing law.")}
                canonical="/cgu"
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                    <h1 className="main-title">{tr("Conditions Générales d'Utilisation (CGU)", "Terms of Use")}</h1>
                    </div>
                </div>
            </section>

            <div className="container">
                {lang === 'en' && (
                    <p className="mtXl"><em>This English translation is provided for information purposes only. In the event of any discrepancy, the French version shall prevail.</em></p>
                )}
                
                <h2 className="mentions__title"><span>1.</span> {tr("Objet", "Purpose")}</h2>
                <p>
                    {tr("Les présentes Conditions Générales d’Utilisation ont pour objet de définir les modalités d’accès et d’utilisation du site", "These Terms of Use set out the terms and conditions for accessing and using the")} <span className='highlight'>LEGOMNIA</span> {tr("accessible à l’adresse www.legomnia.com.", "website, available at www.legomnia.com.")}<br/>
                    <span className='highlight'>LEGOMNIA</span> {tr("est une plateforme numérique proposant des services de recherche juridique assistée par intelligence artificielle, dédiée à l’Afrique francophone.", "is a digital platform offering AI-assisted legal research services dedicated to French-speaking Africa.")}<br/>
                    {tr("L’accès et l’utilisation du site impliquent l’acceptation pleine et entière des présentes CGU.", "Accessing and using the website implies full acceptance of these Terms of Use.")}
                </p>

                <h2 className="mentions__title"><span>2.</span> {tr("Définitions", "Definitions")}</h2>
                <p>
                <span className='def'>{tr("Éditeur", "Publisher")}</span>{tr(" : la société LegOmnia SAS, dont les informations sont disponibles dans les mentions légales", ": LegOmnia SAS, whose details are available in the legal notice")}<br/>
                    <span className='def'>{tr("Site", "Website")}</span>{tr(" : le site internet accessible à l’adresse www.legomnia.com", ": the website available at www.legomnia.com")}<br/>
                    <span className='def'>{tr("Utilisateur", "User")}</span>{tr(" : toute personne accédant au site", ": any person accessing the website")}<br/>
                    <span className='def'>Services</span>{tr(" : l’ensemble des fonctionnalités proposées par", ": all the features offered by")} <span className='highlight'>LEGOMNIA</span>{tr(", notamment les outils de recherche juridique et les contenus associés", ", including legal research tools and related content")}
                </p>

                <h2 className="mentions__title"><span>3.</span> {tr("Accès au site", "Access to the website")}</h2>
                <p>
                    {tr("Le site est accessible gratuitement à tout Utilisateur disposant d’un accès à Internet.", "The website is available free of charge to any User with Internet access.")}<br/>
                    <span className='highlight'>LEGOMNIA</span> {tr("s’efforce d’assurer un accès continu au site, sans toutefois garantir l’absence d’interruptions, notamment pour des raisons de maintenance ou de mise à jour.", "endeavors to ensure continuous access to the website, but does not guarantee that it will be free from interruptions, in particular for maintenance or updates.")}
                </p>

                <h2 className="mentions__title"><span>4.</span> {tr("Acceptation des CGU", "Acceptance of the Terms of Use")}</h2>
                <p>
                    {tr("L’utilisation du site vaut acceptation des présentes CGU.", "Use of the website constitutes acceptance of these Terms of Use.")}<br/>
                    {tr("Lors de l’utilisation de certains services (formulaire, demande de démonstration, création de compte), cette acceptation pourra être confirmée par une action spécifique, telle que la validation d’une case dédiée.", "When using certain services (forms, demo requests, account creation), this acceptance may be confirmed by a specific action, such as ticking a dedicated box.")}<br/>
                    {tr("L’Utilisateur reconnaît avoir pris connaissance des CGU avant toute utilisation du site.", "The User acknowledges having read the Terms of Use before using the website.")}
                </p>

                <h2 className="mentions__title"><span>5.</span> {tr("Description des services", "Description of the services")}</h2>
                <p>
                    <span className='highlight'>LEGOMNIA</span> {tr("propose une plateforme de recherche juridique reposant sur des technologies d’intelligence artificielle.", "offers a legal research platform based on artificial intelligence technologies.")}<br/>
                    {tr("Les Services peuvent inclure :", "The Services may include:")}<br/>
                    {tr("      - la consultation de contenus juridiques", "      - consulting legal content")}<br/>
                    {tr("      - l’accès à des outils de recherche", "      - access to research tools")}<br/>
                    {tr("      - l’analyse automatisée d’informations juridiques", "      - automated analysis of legal information")}<br/>
                </p>

                <h2 className="mentions__title"><span>6.</span> {tr("Absence de conseil juridiques", "No legal advice")}</h2>
                <p>
                {tr("Les contenus et informations fournis sur le site sont proposés à titre informatif uniquement. Ils ne constituent en aucun cas :", "The content and information provided on the website are for information purposes only. They do not in any way constitute:")}<br/>
                {tr("      - un conseil juridique", "      - legal advice")}<br/>
                {tr("      - une consultation juridique", "      - a legal consultation")}<br/>
                {tr("      - une prestation d’assistance personnalisée", "      - a personalized assistance service")}<br/>
                <span className='highlight'>LEGOMNIA</span> {tr("ne se substitue pas à un avocat ou à tout autre professionnel du droit.", "is not a substitute for a lawyer or any other legal professional.")}<br/>
                {tr("L’Utilisateur est seul responsable de l’utilisation des informations fournies sur le site.", "The User is solely responsible for the use of the information provided on the website.")}
                </p>

                <h2 className="mentions__title"><span>7.</span> {tr("Obligations de l’utilisateur", "User obligations")}</h2>
                <p>
                {tr("L’Utilisateur s’engage à utiliser le site de manière loyale et conforme à sa finalité. Il s’interdit notamment :", "The User undertakes to use the website fairly and in accordance with its purpose. In particular, the User shall not:")}<br/>
                {tr("      - d’utiliser des procédés automatisés pour accéder au site", "      - use automated means to access the website")}<br/>
                {tr("      - de tenter d’accéder de manière frauduleuse aux systèmes informatiques", "      - attempt to gain fraudulent access to computer systems")}<br/>
                {tr("      - de perturber le fonctionnement du site", "      - disrupt the operation of the website")}<br/>
                {tr("      - d’utiliser le site à des fins illicites", "      - use the website for unlawful purposes")}<br/>
                {tr("      - de porter atteinte aux droits de propriété intellectuelle", "      - infringe intellectual property rights")}<br/>
                {tr("En cas de non-respect,", "In the event of non-compliance,")} <span className='highlight'>LEGOMNIA</span> {tr("se réserve le droit de suspendre ou restreindre l’accès au site.", "reserves the right to suspend or restrict access to the website.")}
                </p>

                <h2 className="mentions__title"><span>8.</span> {tr("Propriété intellectuelle", "Intellectual property")}</h2>
                <p>
                    {tr("L’ensemble du contenu du site (textes, images, logo, structure, base de données, etc.) est protégé par le droit de la propriété intellectuelle.", "All website content (texts, images, logo, structure, database, etc.) is protected by intellectual property law.")}<br/>
                    {tr("Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation préalable est interdite.", "Any reproduction, representation or use, in whole or in part, without prior authorization is prohibited.")}
                </p>

                <h2 className="mentions__title"><span>9.</span> {tr("Responsabilité", "Liability")}</h2>
                <p>
                <span className='highlight'>LEGOMNIA</span> {tr("s’engage à mettre en œuvre tous les moyens nécessaires pour assurer le bon fonctionnement du site. Toutefois :", "undertakes to implement all necessary means to ensure the proper functioning of the website. However:")}<br/>
                {tr("      - le site est fourni “en l’état”", "      - the website is provided “as is”")}<br/>
                {tr("      - aucune garantie n’est donnée quant à l’exactitude ou l’exhaustivité des informations", "      - no warranty is given as to the accuracy or completeness of the information")}<br/>
                {tr("      - des erreurs ou omissions peuvent exister", "      - errors or omissions may exist")}<br/>
                <span className='highlight'>LEGOMNIA</span> {tr("ne pourra être tenue responsable :", "cannot be held liable for:")}<br/>
                {tr("      - des interruptions ou dysfonctionnements du site", "      - interruptions or malfunctions of the website")}<br/>
                {tr("      - des dommages indirects (perte de données, perte de chiffre d’affaires, perte d’opportunités)", "      - indirect damage (loss of data, loss of revenue, loss of opportunities)")}<br/>
                {tr("      - de l’utilisation des informations fournies par le site", "      - the use of information provided by the website")}<br/>
                {tr("L’Utilisateur utilise le site sous sa seule responsabilité.", "The User uses the website at their own risk.")}
                </p>

                <h2 className="mentions__title"><span>10.</span> {tr("Données personnelles", "Personal data")}</h2>
                <p>
                    {tr("Les données personnelles collectées dans le cadre de l’utilisation du site font l’objet d’un traitement conforme à la réglementation en vigueur.", "Personal data collected through the use of the website is processed in accordance with applicable regulations.")}<br/>
                    {tr("Pour en savoir plus, l’Utilisateur est invité à consulter la Politique de Confidentialité disponible sur le site.", "For more information, the User is invited to read the Privacy Policy available on the website.")}
                </p>

                <h2 className="mentions__title"><span>11.</span> {tr("Liens hypertextes", "Hyperlinks")}</h2>
                <p>
                    {tr("Le site peut contenir des liens vers des sites externes.", "The website may contain links to external websites.")}<br/>
                    <span className='highlight'>LEGOMNIA</span> {tr("n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.", "has no control over these websites and accepts no liability for their content.")}
                </p>

                <h2 className="mentions__title"><span>12.</span> {tr("Modification des CGU", "Changes to the Terms of Use")}</h2>
                <p>
                    <span className='highlight'>LEGOMNIA</span> {tr("se réserve le droit de modifier les présentes CGU à tout moment.", "reserves the right to amend these Terms of Use at any time.")}<br/>
                    {tr("Les nouvelles conditions s’appliquent dès leur mise en ligne.", "The new terms apply as soon as they are published online.")}
                </p>

                <h2 className="mentions__title"><span>13.</span> {tr("Droit applicable et juridiction compétente", "Governing law and jurisdiction")}</h2>
                <p>
                    {tr("Les présentes CGU sont soumises au droit français.", "These Terms of Use are governed by French law.")}<br/>
                    {tr("En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de l’éditeur.", "In the event of a dispute, the courts with jurisdiction over the publisher's registered office shall have exclusive jurisdiction.")}
                </p>
            </div>
        </main>
    );
};

export default Cgu;