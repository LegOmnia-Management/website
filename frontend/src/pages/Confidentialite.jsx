import '../assets/styles/mentions.css';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';
import useLang from '../i18n/useLang';

const Confidentialite = () => {

    const { lang, tr } = useLang();

    return (
        <main className="main main__mentions">
            <SEOHead
                title={tr("Politique de confidentialité", "Privacy policy")}
                description={tr("Politique de confidentialité de LegOmnia : données collectées, cookies, durées de conservation et droits des utilisateurs.", "LegOmnia privacy policy: data collected, cookies, retention periods and user rights.")}
                canonical="/confidentialite"
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                    <h1 className="main-title">{tr("Politique de Confidentialité", "Privacy Policy")}</h1>
                    </div>
                </div>
            </section>

            <div className="container">
                {lang === 'en' && (
                    <p className="mtXl"><em>This English translation is provided for information purposes only. In the event of any discrepancy, the French version shall prevail.</em></p>
                )}

                <p className="mtXl">
                    {tr("La présente politique de confidentialité a pour objet d’informer les utilisateurs du site internet legomnia.com (ci-après « le Site ») sur les données collectées pendant leur utilisation du site, et sur les obligations de son éditeur (ci-après « l’Editeur ») en la matière, qui atteste mettre en œuvre de bonne foi les moyens nécessaires au respect de votre vie privée et agir en conformité avec les règlementations applicables.", "The purpose of this privacy policy is to inform users of the legomnia.com website (hereinafter “the Website”) about the data collected while they use the website, and about the obligations of its publisher (hereinafter “the Publisher”) in this respect. The Publisher certifies that it implements in good faith the means necessary to respect your privacy and acts in accordance with applicable regulations.")}
                </p>
                <p className="mtXl">
                    {tr("La présente politique de confidentialité est réputée être à jour, est accessible sur le Site à tout moment, et il est vivement recommandé de la lire attentivement.", "This privacy policy is deemed to be up to date and is available on the Website at all times. You are strongly advised to read it carefully.")}
                </p>

                <h2 className="mentions__title">{tr("Article 1. Responsable du traitement de données", "Article 1. Data controller")}</h2>
                <p>
                    {tr("La collecte et le traitement de données personnelles réalisés dans le cadre de l’utilisation du Site est réalisé conformément aux règles en vigueur dans la Communauté Economique Européenne, sous la responsabilité de M. Jean-Patrick Bertaud, pour le compte de l’Editeur, tel qu’il est désigné dans les Mentions Légales.", "The collection and processing of personal data in connection with the use of the Website are carried out in accordance with the rules in force in the European Union, under the responsibility of Mr. Jean-Patrick Bertaud, on behalf of the Publisher, as identified in the Legal Notice.")}
                </p>

                <h2 className="mentions__title">{tr("Article 2. Objets et finalités de la collecte", "Article 2. Purposes of data collection")}</h2>
                <p>
                    {tr("La collecte et le traitement des données effectuées via le Site sont réalisés pour :", "Data is collected and processed via the Website in order to:")}<br/>
                    {tr("      - optimiser la gestion des relations entre le Prestataire et les utilisateurs du Site, via notamment l’analyse et la mesure de l’audience du Site.", "      - optimize the management of relations between the Provider and Website users, in particular through Website audience analysis and measurement.")}<br/>
                    {tr("      - permettre aux utilisateurs du Site d’interagir avec celui-ci par l’intermédiaire des boutons de réseaux sociaux (commentaires, avis, likes, partages, etc.).", "      - allow Website users to interact with it via social media buttons (comments, reviews, likes, shares, etc.).")}<br/>
                    {tr("      - permettre aux utilisateurs du Site de contacter l’Editeur en utilisant un formulaire de contact, et d’assurer les échanges par la suite.", "      - allow Website users to contact the Publisher using a contact form, and to handle subsequent exchanges.")}<br/>
                    {tr("      - permettre aux utilisateurs du Site de s’inscrire à la newsletter de l’Editeur.", "      - allow Website users to subscribe to the Publisher's newsletter.")}<br/>
                    {tr("      - permettre l’Editeur d’envoyer par courriel aux utilisateurs du Site des sollicitations commerciales, pour des offres analogues à celles proposées ou illustrées sur le Site.", "      - allow the Publisher to send Website users commercial offers by email for offers similar to those proposed or presented on the Website.")}
                </p>

                <h2 className="mentions__title">{tr("Article 3. Consentement de l’Utilisateur", "Article 3. User consent")}</h2>
                <p>
                    {tr("En aucun cas des données à caractère personnel ne sont collectées via le Site sans que les personnes concernées n’aient pu obtenir clairement les informations nécessaires et l’opportunité effective de manifester leur consentement préalablement à cette collecte.", "Under no circumstances is personal data collected via the Website without the data subjects having clearly received the necessary information and a genuine opportunity to give their consent prior to such collection.")}
                </p>
                <p className="mt">
                    {tr("Concrètement, un bandeau informatif apparaissant à l’entrée sur le Site rappelle aux utilisateurs que leur consentement au dépôt de cookies et à la collecte de certaines informations en résultant, est réputé acquis par la poursuite de leur utilisation du Site, que ce soit en déroulant la page en question (scroll), en cliquant sur n’importe quel lien du Site, ou en cliquant sur le bouton « ok » (ou équivalent) situé sur ce même bandeau informatif.", "In practice, an information banner displayed when entering the Website reminds users that their consent to the placement of cookies and the resulting collection of certain information is deemed given if they continue to use the Website, whether by scrolling the page, clicking on any link on the Website, or clicking the “OK” button (or equivalent) on that banner.")}
                </p>
                <p className="mt">
                    {tr("Le consentement des utilisateurs est systématiquement et explicitement recueilli par tout moyen clair et dénué d’ambiguïté (optin), dans les cas d’utilisation des fonctionnalités imposant par nature d’utiliser des données renseignées et/ou collectées (inscription, contact, etc.).", "Users' consent is systematically and explicitly obtained by any clear and unambiguous means (opt-in) when using features that by their nature require the use of data entered and/or collected (registration, contact, etc.).")}
                </p>
                <p className="mt">
                    {tr("Les utilisateurs peuvent à tout moment retirer leur consentement (optout), en se désabonnant des newsletters directement dans les courriels de l’Editeur, dans les conditions de l’article 10 de la présente Politique de Confidentialité.", "Users may withdraw their consent at any time (opt-out) by unsubscribing from newsletters directly in the Publisher's emails, under the conditions set out in Article 10 of this Privacy Policy.")}
                </p>

                <h2 className="mentions__title">{tr("Article 4. Contenu de la collecte", "Article 4. Data collected")}</h2>
                <h3 className="mentions__title2">{tr("Article 4.1. Données collectées en cas de consultation du Site", "Article 4.1. Data collected when browsing the Website")}</h3>
                <p>
                    {tr("La consultation des informations du Site ne génère par défaut que la collecte des données strictement nécessaires à l’analyse et la mesure de l’audience du Site :", "By default, browsing the Website only results in the collection of data strictly necessary for analyzing and measuring the Website's audience:")}<br/>
                    {tr("données relatives à l’adresse IP (identification de la connexion internet et du terminal), aux pages consultées, ainsi que tous types de données accessibles via un Google Analytics basique, telles que le nombre de pages vues, l’origine du trafic, les dates et heures, le lieu approximatif de consultation.", "data relating to the IP address (identification of the internet connection and device) and the pages viewed, as well as any data available through basic Google Analytics, such as the number of page views, traffic sources, dates and times, and approximate location.")}        
                </p>

                <h3 className="mentions__title2">{tr("Article 4.2. Données collectées en cas d’utilisation des fonctionnalités du Site", "Article 4.2. Data collected when using the Website's features")}</h3>
                <p>
                    {tr("Le contenu du traitement de données effectué sur le Site varie selon les utilisations de ce dernier, et peut inclure parmi les informations suivantes& :", "The data processed on the Website varies depending on how it is used, and may include the following information:")}<br/>
                    {tr("      - Adresse de courriel valide, nom et prénom, la date de naissance, téléphone", "      - Valid email address, first and last name, date of birth, telephone number")}<br/>
                    {tr("      - le sujet de message et un champ de texte libre en cas d’utilisation du formulaire.", "      - the message subject and a free-text field when using the form.")}  
                </p>
                <p className="mt">
                    {tr("Le caractère obligatoire ou facultatif du renseignement d’une information est indiqué directement en ligne le cas échéant.", "Whether providing a given piece of information is mandatory or optional is indicated directly online where applicable.")}
                </p>
                <p className="mt">
                    {tr("Les utilisateurs s’engagent à ne renseigner que des informations complètes, exactes et valides, et admettent dégager la responsabilité de l’Editeur en cas de dommage(s) résultant de leur propre défaillance en la matière.", "Users undertake to provide only complete, accurate and valid information, and agree to release the Publisher from liability for any damage resulting from their own failure in this regard.")}
                </p>

                <h2 className="mentions__title">{tr("Article 5. Utilisation des cookies", "Article 5. Use of cookies")}</h2>
                <p>
                    {tr("L’analyse de l’audience du Site via un Google Analytics rend nécessaire l’utilisation de cookies, qui sont des fichiers « traceurs » implantés sur le terminal des utilisateurs, et qui donnent accès à l’Editeur à des informations de connexion standards (voire article 4).", "Analyzing the Website's audience via Google Analytics requires the use of cookies, which are “tracker” files placed on users' devices that give the Publisher access to standard connection information (see Article 4).")}
                </p>
                <p className="mt">
                    {tr("Les informations collectées ne seront utilisées que pour développer la conception et l’agencement du Site, et plus généralement pour améliorer son l’utilisation.", "The information collected will only be used to develop the design and layout of the Website and, more generally, to improve its use.")}
                </p>
                <p className="mt">
                    {tr("Les cookies ne recueillent aucune donnée personnelle permettant de vous identifier, ni sur disque dur ni en ligne, et les informations collectées sont anonymes ou anonymisées.", "Cookies do not collect any personal data that can identify you, either on your hard drive or online, and the information collected is anonymous or anonymized.")}
                </p>
                <p className="mt">
                    {tr("Les utilisateurs admettent devoir consulter et vérifier directement les paramètres de confidentialité de leur propre navigateur internet, s’ils refusent l’utilisation de ces cookies.", "Users acknowledge that, if they refuse the use of these cookies, they must check the privacy settings of their own web browser directly.")}<br/>
                    {tr("Dans ce cas ils ne peuvent pas rechercher la responsabilité de l’Editeur du fait de leurs propres difficultés de navigation, rendant éventuellement difficile voire impossible l’utilisation du Site dans son ensemble.", "In that case, they cannot hold the Publisher liable for their own browsing difficulties, which may make it difficult or even impossible to use the Website as a whole.")}
                </p>
                <p className="mt">
                    {tr("L’Editeur recommande une configuration personnelle de la part des utilisateurs acceptant les cookies et favorisant ainsi la consultation et l’utilisation du Site.", "The Publisher recommends that users configure their settings to accept cookies, thereby facilitating browsing and use of the Website.")}
                </p>

                <h2 className="mentions__title">{tr("Article 6. Interactivité avec des sites tiers et des applications tierces", "Article 6. Interaction with third-party websites and applications")}</h2>
                <p>
                    {tr("Les utilisateurs peuvent interagir avec le Site en cliquant sur des boutons représentant des sites et applications tierces (notamment via les boutons de réseaux sociaux).", "Users may interact with the Website by clicking on buttons representing third-party websites and applications (in particular social media buttons).")}
                </p>
                <p className="mt">
                    {tr("Les utilisateurs admettent que l’utilisation de ces boutons a pour effet de transférer des informations à l’Editeur, ainsi qu’aux sites tiers concernés, et qu’ils restent intégralement responsables de leurs relations contractuelles avec ces sites et réseaux, qui éditent leur propre politique de confidentialité et de respect des données personnelles concernant les données transférées, collectées et traitées à cette occasion (profil, paramètres, etc.).", "Users acknowledge that using these buttons transfers information to the Publisher and to the third-party websites concerned, and that they remain fully responsible for their contractual relationships with these websites and networks, which publish their own privacy and personal data policies regarding the data transferred, collected and processed in this context (profile, settings, etc.).")}
                </p>
                <p className="mt">
                    {tr("En aucun cas l’Editeur ne saurait supporter la responsabilité de quelconque dommage résultant de l’utilisation de ce procédé à l’égard des utilisateurs ainsi que desdits tiers, et répond exclusivement et uniquement des traitements de données dont il assume la charge.", "Under no circumstances shall the Publisher be liable for any damage resulting from the use of this process with respect to users or such third parties, and it is solely responsible for the data processing it carries out.")}
                </p>

                <h2 className="mentions__title">{tr("Article 7. Sécurité du traitement", "Article 7. Security of processing")}</h2>
                <p>
                    {tr("L’Editeur s’engage à prendre toute précaution nécessaire pour préserver la sécurité du traitement et des données collectées, en respectant les standards de sécurisation physiques et logiques qui sont de son ressort (protection des locaux, protection des serveurs, politique de mots de passe, sauvegardes régulières, éventuel chiffrement, etc.), et à l’exclusion des obligations de sauvegardes et/ou de sécurisation qui sont placées sous la responsabilité du prestataire en charge de l’hébergement du Site (voir Mentions Légales).", "The Publisher undertakes to take all necessary precautions to preserve the security of the processing and of the data collected, complying with the physical and logical security standards within its remit (protection of premises, server protection, password policy, regular backups, encryption where applicable, etc.), excluding the backup and/or security obligations that fall under the responsibility of the Website's hosting provider (see Legal Notice).")}
                </p>
                <p className="mt">
                    {tr("En particulier, l’Editeur met en œuvre les mesures qui permettent d’empêcher que les données traitées ne soient déformées, endommagées ou que des tiers non autorisés y aient accès, notamment en contrôlant les accès au traitement et en sécurisant les éventuelles communications des données (sécurisation du site, protocole Https, chiffrement, etc.).", "In particular, the Publisher implements measures to prevent the processed data from being altered or damaged, or accessed by unauthorized third parties, notably by controlling access to the processing and securing any data communications (website security, HTTPS protocol, encryption, etc.).")}
                </p>
                <p className="mt">
                    {tr("Toute information accessible sur Internet via un lien sortant du Site n’est pas sous le contrôle de l’Editeur, qui décline toute responsabilité quant à son contenu et aux éventuelles failles de sécurité informatiques, ainsi qu’aux conséquences qui en résulteraient.", "Any information accessible on the Internet via an outbound link from the Website is not under the Publisher's control, and the Publisher accepts no liability for its content, for any IT security breaches, or for the resulting consequences.")}
                </p>

                <h2 className="mentions__title">{tr("Article 8. Confidentialité du traitement", "Article 8. Confidentiality of processing")}</h2>
                <p>
                    {tr("L’Editeur s’engage à prendre toute précaution nécessaire pour préserver la sécurité du traitement et des données collectées, en respectant les standards de sécurisation physiques et logiques qui sont de son ressort (protection des locaux, protection des serveurs, politique de mots de passe, sauvegardes régulières, éventuel chiffrement, etc.), et à l’exclusion des obligations de sauvegardes et/ou de sécurisation qui sont placées sous la responsabilité du prestataire en charge de l’hébergement du Site (voir Mentions Légales).", "The Publisher undertakes to take all necessary precautions to preserve the security of the processing and of the data collected, complying with the physical and logical security standards within its remit (protection of premises, server protection, password policy, regular backups, encryption where applicable, etc.), excluding the backup and/or security obligations that fall under the responsibility of the Website's hosting provider (see Legal Notice).")}
                </p>
                <p className="mt">
                    {tr("L’Editeur ne communique les données à caractère personnel collectées lors de l’utilisation du Site, à aucun tiers que ce soit et sous aucune forme que ce soit, à l’exception légitime, et de manière strictement confidentielle, des personnes mentionnées ci-dessous :", "The Publisher does not disclose the personal data collected through the use of the Website to any third party whatsoever, in any form whatsoever, with the legitimate exception, on a strictly confidential basis, of the persons listed below:")}<br/>
                    {tr("      - Le personnel salarié éventuel de l’Editeur (stagiaires compris).", "      - Any employees of the Publisher (including interns).")}<br/>
                    {tr("      - Le ou les prestataire(s) technique(s) responsable(s) de création et de la maintenance du Site d’une part, et de l’hébergement des données d’autre part, lorsque cela est strictement nécessaire.", "      - The technical service provider(s) responsible for creating and maintaining the Website on the one hand, and for hosting the data on the other, where strictly necessary.")}<br/>
                    {tr("      - La ou les personne(s) éventuellement en charge de la comptabilité de l’Editeur, y compris en tant que prestataire externe éventuel.", "      - Any person(s) in charge of the Publisher's accounting, including as an external service provider.")}<br/>
                    {tr("      - Les tiers autorisés par la loi (notamment sur demande expresse et motivée des autorités judiciaires, ou comptables, etc.).", "      - Third parties authorized by law (in particular upon an express and reasoned request from judicial or accounting authorities, etc.).")}
                </p>
                <p className="mt">
                    {tr("Il est également admis que l’utilisation des cookies sur le Site a pour effet de transférer, sans intervention possible de l’Editeur, certaines données de connexion au prestataire de services tiers permettant à l’Editeur de collecter et de traiter ses propres données (Google Analytics).", "It is also acknowledged that the use of cookies on the Website transfers certain connection data, without any possible intervention by the Publisher, to the third-party service provider that enables the Publisher to collect and process its own data (Google Analytics).")}
                </p>

                <h2 className="mentions__title">{tr("Article 9. Conservation des données et délais", "Article 9. Data retention and retention periods")}</h2>
                <h3 className="mentions__title2">{tr("Article 9.1. Renouvellement du consentement des Utilisateurs", "Article 9.1. Renewal of User consent")}</h3>
                <p>
                    {tr("Les données récoltées sont conservées valablement tant que la finalité pour laquelle elles ont été légitimement collectées initialement perdure de façon légitime, proportionnée, et consentie par l’utilisateur concerné.", "The data collected is validly retained for as long as the purpose for which it was originally and legitimately collected continues in a legitimate, proportionate manner and with the consent of the user concerned.")} 
                </p>
                <p className='mt'>
                    {tr("Les délais de conservation des données collectées varient selon le type de données, soumises à des exigences légales et réglementaires différentes, autorisant une plus longue conservation ou au contraire imposant leur suppression, et correspondent en tout état de cause à la nécessité d’exécuter ses obligations contractuelles par l’Editeur ; les délais sont fixés à :", "Retention periods vary depending on the type of data, which is subject to different legal and regulatory requirements allowing longer retention or, conversely, requiring deletion, and in any event correspond to what the Publisher needs to perform its contractual obligations. The periods are set at:")}<br/>
                    {tr("      - quatorze (14) mois concernant les cookies, les données de connexion et de mesure d’audience.       - au maximum trois (3) ans pour les autres types de données.", "      - fourteen (14) months for cookies, connection data and audience measurement data.       - a maximum of three (3) years for other types of data.")}
                </p>
                <p className='mt'>
                    {tr("L’Editeur s’engage, à la fin de ce délai, à renouveler le consentement des utilisateurs pour continuer à exploiter les données le concernant (Optin), et à défaut de consentement explicite à cesser l’envoi éventuel de lettre d’actualité et de toutes sollicitations commerciales (Optout).", "At the end of this period, the Publisher undertakes to renew users' consent in order to continue using their data (opt-in) and, failing explicit consent, to stop sending any newsletters and commercial solicitations (opt-out).")}
                </p>

                <h3 className="mentions__title2">{tr("Article 9.2. Archive des données", "Article 9.2. Data archiving")}</h3>
                <p>
                    {tr("Passé les délais précités et en l’absence d’opposition formelle de l’utilisateur sur la conservation de ses données personnelles, les données collectées qui n’ont pas été valablement supprimées, peuvent faire l’objet d’un archivage sur un support informatique à des fins de preuve et en accès strictement limité.", "After the above periods, and in the absence of formal objection by the user to the retention of their personal data, collected data that has not been validly deleted may be archived on an electronic medium for evidentiary purposes, with strictly limited access.")}<br/>
                    {tr("Dans ces cas, les délais de conservation de ces données au titre de leur archivage légal sont définis par le référentiel en vigueur suivant, et en fonction du type de données concernées :", "In such cases, the retention periods for this data for legal archiving purposes are defined by the following applicable framework, depending on the type of data concerned:")}<br/>
                    <a href="https://www.cnil.fr/sites/default/files/typo/document/20120719-REF-DUREE_CONSERVATION-VD.pdf" target="_blank">https://www.cnil.fr/sites/default/files/typo/document/20120719-REF-DUREE_CONSERVATION-VD.pdf</a>
                </p>

                <h3 className="mentions__title">{tr("Article 10. Droit des personnes sur leurs données collectées", "Article 10. Data subjects' rights over their collected data")}</h3>
                <p>
                    {tr("Les utilisateurs disposent d’un droit d’accès, de rectification, d’opposition, et/ou de suppression des données qui les concernent, qu’ils peuvent exercer à tout moment en écrivant un courriel à l’adresse: contact@legomnia.com, ou par courrier (coordonnées via les Mentions Légales).", "Users have the right to access, rectify, object to and/or erase their data, which they may exercise at any time by emailing contact@legomnia.com, or by post (contact details in the Legal Notice).")}
                </p>
                <p className='mt'>
                    {tr("L’Editeur s’engage à rendre effective toute éventuelle demande motivée desdites données, en répondant à ces demandes dans un délai de trente (30) jours calendaires à compter de la réception de la demande. Ces demandes se font par courriel à l’adresse contact@legomnia.com, et se formalisent par un courriel notifiant la réception et l’exécution de la demande.", "The Publisher undertakes to act on any reasoned request concerning such data, responding within thirty (30) calendar days of receipt. Requests must be sent by email to contact@legomnia.com and will be confirmed by an email acknowledging receipt and completion of the request.")}
                </p>
                <p className='mt'>
                    {tr("L’Editeur s’engage à rendre effective toute éventuelle demande motivée desdites données, en répondant à ces demandes dans un délai de trente (30) jours calendaires à compter de la réception de la demande. Ces demandes se font par courriel à l’adresse contact@legomnia.com, et se formalisent par un courriel notifiant la réception et l’exécution de la demande.", "The Publisher undertakes to act on any reasoned request concerning such data, responding within thirty (30) calendar days of receipt. Requests must be sent by email to contact@legomnia.com and will be confirmed by an email acknowledging receipt and completion of the request.")}
                </p>
                <p className='mt'>
                    {tr("Pour des raisons de sécurité et éviter toute demande frauduleuse, l’Editeur peut valablement exiger que cette demande soit accompagnée d’un justificatif d’identité, qu’il supprimera ou détruira après traitement de la demande, sous réserve de l’application d’une disposition légale imposant son archivage, et dans les contions de l’article 9.2 de la présente Politique de Confidentialité.", "For security reasons and to prevent fraudulent requests, the Publisher may validly require that the request be accompanied by proof of identity, which it will delete or destroy after processing the request, subject to any legal provision requiring its archiving and under the conditions of Article 9.2 of this Privacy Policy.")}
                </p>
                <p className='mt'>
                    {tr("Les utilisateurs admettent qu’en cas de demande de suppression motivée de leurs données à caractère personnel, ces dernières peuvent être purgées sans possibilité de récupération et que cette suppression pourrait dans certains cas empêcher la poursuite de leurs relations contractuelles.", "Users acknowledge that, following a reasoned request to erase their personal data, such data may be permanently deleted without possibility of recovery, and that this deletion could in some cases prevent the continuation of their contractual relationship.")}
                </p>

                <h3 className="mentions__title">{tr("Article 11. Réclamations, désaccords et litiges", "Article 11. Complaints, disagreements and disputes")}</h3>
                <p>
                    {tr("De convention expresse, la présente Politique de confidentialité est soumise et régie exclusivement par le droit français, et doit être interprétée au regard du droit français.", "By express agreement, this Privacy Policy is governed exclusively by French law and must be interpreted in accordance with French law.")}
                </p>
                <p className='mt'>
                    {tr("A défaut de résolution amiable des conflits éventuels, et de convention expresse, les litiges n’ayant pu aboutir à un règlement amiable, relativement à la collecte et au traitement de données à caractère personnel des utilisateurs du Site, et à la présente Politique de confidentialité, concernant sa validité, son interprétation, son exécution, ses conséquences et ses suites, seront soumis :", "Failing amicable resolution, and by express agreement, any disputes that could not be settled amicably relating to the collection and processing of Website users' personal data and to this Privacy Policy, including its validity, interpretation, performance, consequences and effects, shall be submitted:")}<br/>
                    {tr("lorsqu’aucune disposition impérative spécifique n’est applicable, à la compétence des tribunaux du lieu du siège social de l’Editeur, et dans tous les autres cas, à la compétence du tribunal déterminée par les dispositions impératives applicables et selon le cas d’espèce.", "where no specific mandatory provision applies, to the courts with jurisdiction over the Publisher's registered office and, in all other cases, to the court determined by the applicable mandatory provisions according to the circumstances of the case.")}
                </p>
            </div>

        </main>
    );
};

export default Confidentialite;