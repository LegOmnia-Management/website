// FAQ affichées en bas de chaque page produit (5 questions) et réunies sur /faq.
// Chaque entrée : { q: {fr, en}, a: {fr, en} } — texte brut (repris tel quel dans le JSON-LD FAQPage).

const qa = (qFr, aFr, qEn, aEn) => ({ q: { fr: qFr, en: qEn }, a: { fr: aFr, en: aEn } });

export const FAQ_GROUPS = [
    {
        key: 'home',
        title: { fr: 'LegOmnia', en: 'LegOmnia' },
        items: [
            qa(
                "Qu'est-ce que LegOmnia ?",
                "LegOmnia est l'infrastructure juridique numérique de l'Afrique francophone : une base de plus de 100 000 documents juridiques structurés, une recherche par IA (OMNIA), une GED intelligente (Géode) et un pipeline d'analyse de documents (OmniScan).",
                "What is LegOmnia?",
                "LegOmnia is the digital legal infrastructure of French-speaking Africa: a base of more than 100,000 structured legal documents, AI-powered search (OMNIA), smart document management (Géode) and a document analysis pipeline (OmniScan)."
            ),
            qa(
                "Quels pays et textes juridiques sont couverts ?",
                "LegOmnia couvre plus de 17 pays d'Afrique francophone ainsi que les textes communautaires et régionaux : OHADA, CCJA, UEMOA, CEDEAO, CEMAC, OAPI, CEEAC, COMESA et Union africaine, avec lois, décrets, jurisprudence et Journaux officiels.",
                "Which countries and legal texts are covered?",
                "LegOmnia covers more than 17 French-speaking African countries as well as community and regional texts: OHADA, CCJA, WAEMU, ECOWAS, CEMAC, OAPI, ECCAS, COMESA and the African Union, including laws, decrees, case law and Official Gazettes."
            ),
            qa(
                "À qui s'adresse LegOmnia ?",
                "Aux avocats et cabinets, juristes d'entreprise, institutions publiques, investisseurs (due diligence) ainsi qu'aux étudiants et chercheurs, qui bénéficient d'un accès gratuit.",
                "Who is LegOmnia for?",
                "Lawyers and law firms, in-house counsel, public institutions, investors (due diligence), as well as students and researchers, who get free access."
            ),
            qa(
                "Puis-je essayer LegOmnia gratuitement ?",
                "Oui, un essai gratuit de 7 jours est proposé. Vous pouvez aussi demander une démo personnalisée depuis la page Contact.",
                "Can I try LegOmnia for free?",
                "Yes, a free 7-day trial is available. You can also request a personalized demo from the Contact page."
            ),
            qa(
                "Mes données sont-elles protégées ?",
                "Oui. LegOmnia repose sur une approche de souveraineté des données : vos documents restent chez vous, les accès sont gérés par rôles et la plateforme respecte le RGPD.",
                "Is my data protected?",
                "Yes. LegOmnia is built on data sovereignty: your documents stay yours, access is managed by roles and the platform is GDPR compliant."
            ),
        ],
    },
    {
        key: 'omnia',
        title: { fr: 'OMNIA — Recherche juridique IA', en: 'OMNIA — AI legal search' },
        items: [
            qa(
                "Qu'est-ce qu'OMNIA ?",
                "OMNIA est le moteur de recherche juridique par IA de LegOmnia : vous posez votre question en langage naturel et il interroge les textes OHADA et nationaux pour vous répondre.",
                "What is OMNIA?",
                "OMNIA is LegOmnia's AI-powered legal search engine: you ask your question in natural language and it searches OHADA and national texts to answer you."
            ),
            qa(
                "OMNIA cite-t-il ses sources ?",
                "Oui. Chaque réponse s'appuie sur des textes identifiés (lois, décrets, arrêts) et renvoie vers les sources, afin que vous puissiez vérifier chaque citation.",
                "Does OMNIA cite its sources?",
                "Yes. Every answer relies on identified texts (laws, decrees, rulings) and links back to the sources so you can verify each citation."
            ),
            qa(
                "Quelles juridictions peut-on interroger avec OMNIA ?",
                "Le droit OHADA et la jurisprudence de la CCJA, les textes de l'UEMOA, de la CEDEAO et de la CEMAC, ainsi que les droits nationaux de plus de 17 pays francophones.",
                "Which jurisdictions can I search with OMNIA?",
                "OHADA law and CCJA case law, WAEMU, ECOWAS and CEMAC texts, as well as the national laws of more than 17 French-speaking countries."
            ),
            qa(
                "Comment OMNIA évite-t-il les réponses inventées ?",
                "OMNIA est adossé à une base juridique vérifiée et structurée par LegOmnia : il répond à partir des textes réellement indexés et affiche ses références plutôt que de répondre de mémoire.",
                "How does OMNIA avoid made-up answers?",
                "OMNIA is backed by a legal database verified and structured by LegOmnia: it answers from texts that are actually indexed and displays its references instead of answering from memory."
            ),
            qa(
                "Comment commencer avec OMNIA ?",
                "Demandez une démo ou profitez de l'essai gratuit de 7 jours : vous pouvez poser vos premières questions juridiques en quelques minutes.",
                "How do I get started with OMNIA?",
                "Request a demo or use the free 7-day trial: you can ask your first legal questions within minutes."
            ),
        ],
    },
    {
        key: 'geode',
        title: { fr: 'Géode — GED intelligente', en: 'Géode — Smart document management' },
        items: [
            qa(
                "Qu'est-ce que Géode ?",
                "Géode est la solution de Gestion Électronique de Documents (GED) intelligente de LegOmnia, conçue pour les entreprises, cabinets d'avocats et directions juridiques.",
                "What is Géode?",
                "Géode is LegOmnia's smart Electronic Document Management (EDM) solution, designed for companies, law firms and legal departments."
            ),
            qa(
                "Quelles fonctionnalités propose Géode ?",
                "Dix modules : stockage sécurisé et versioning, import en masse et connecteurs, circuits de validation et signature électronique, tableau de bord et notifications, administration et conformité, ainsi que recherche IA.",
                "What features does Géode offer?",
                "Ten modules: secure storage and versioning, bulk import and connectors, approval workflows and e-signature, dashboard and notifications, administration and compliance, as well as AI search."
            ),
            qa(
                "Géode fonctionne-t-il avec OMNIA et OmniScan ?",
                "Oui, l'intégration est native : OmniScan traite et indexe vos documents à l'import, et OMNIA permet de les rechercher directement dans votre GED.",
                "Does Géode work with OMNIA and OmniScan?",
                "Yes, the integration is native: OmniScan processes and indexes your documents on import, and OMNIA lets you search them directly within your document system."
            ),
            qa(
                "Puis-je importer mes documents existants ?",
                "Oui. Géode accepte l'import en masse de tous formats (PDF, Word, Excel, images) et propose des connecteurs vers SharePoint, Google Drive, la messagerie et les ERP.",
                "Can I import my existing documents?",
                "Yes. Géode supports bulk import of all formats (PDF, Word, Excel, images) and offers connectors to SharePoint, Google Drive, email and ERP systems."
            ),
            qa(
                "Géode est-il sécurisé et conforme ?",
                "Oui : gestion fine des rôles et droits d'accès, chiffrement de bout en bout, journal d'audit complet et conformité RGPD.",
                "Is Géode secure and compliant?",
                "Yes: fine-grained roles and access rights, end-to-end encryption, a complete audit trail and GDPR compliance."
            ),
        ],
    },
    {
        key: 'omniscan',
        title: { fr: 'OmniScan — Analyse de documents', en: 'OmniScan — Document analysis' },
        items: [
            qa(
                "Qu'est-ce qu'OmniScan ?",
                "OmniScan est le pipeline IA de LegOmnia qui transforme en quelques secondes vos documents juridiques (décisions imprimées, contrats PDF, textes législatifs) en données structurées et exploitables.",
                "What is OmniScan?",
                "OmniScan is LegOmnia's AI pipeline that turns your legal documents (printed rulings, PDF contracts, legislative texts) into structured, usable data within seconds."
            ),
            qa(
                "Quels types de documents OmniScan traite-t-il ?",
                "PDF, images et archives papier numérisées, en français, en anglais et dans certaines langues locales.",
                "What types of documents does OmniScan process?",
                "PDFs, images and scanned paper archives, in French, English and some local languages."
            ),
            qa(
                "Que fait OmniScan sur un document ?",
                "Il applique l'OCR, anonymise les données sensibles, extrait les métadonnées et la structure du texte, puis génère des résumés par IA.",
                "What does OmniScan do to a document?",
                "It applies OCR, anonymizes sensitive data, extracts metadata and the structure of the text, then generates AI summaries."
            ),
            qa(
                "Puis-je analyser et comparer mes contrats ?",
                "Oui. OmniScan permet d'analyser, de synthétiser et de comparer vos contrats et actes juridiques pour repérer rapidement clauses et points d'attention.",
                "Can I analyze and compare my contracts?",
                "Yes. OmniScan lets you analyze, summarize and compare your contracts and legal instruments to quickly spot clauses and points of attention."
            ),
            qa(
                "OmniScan est-il lié à Géode et OMNIA ?",
                "Oui. OmniScan est le socle d'enrichissement des documents : une fois traités, ils peuvent être stockés dans Géode et interrogés avec OMNIA.",
                "Is OmniScan connected to Géode and OMNIA?",
                "Yes. OmniScan is the document enrichment layer: once processed, documents can be stored in Géode and searched with OMNIA."
            ),
        ],
    },
    {
        key: 'transformation',
        title: { fr: 'Transformation digitale', en: 'Digital transformation' },
        items: [
            qa(
                "En quoi consiste l'accompagnement à la transformation digitale ?",
                "LegOmnia accompagne institutions et cabinets dans la numérisation, la structuration et l'exploitation de leurs données juridiques, de la phase pilote au déploiement à grande échelle.",
                "What does digital transformation support involve?",
                "LegOmnia supports institutions and law firms in digitizing, structuring and using their legal data, from the pilot phase to large-scale deployment."
            ),
            qa(
                "Quelles organisations peut-on accompagner ?",
                "Cabinets d'avocats, directions juridiques, institutions publiques et organisations régionales, à l'échelle d'une entité, d'un pays ou de plusieurs pays.",
                "Which organizations can you support?",
                "Law firms, legal departments, public institutions and regional organizations, at the scale of a single entity, a country or several countries."
            ),
            qa(
                "Proposez-vous des formations ?",
                "Oui. Nos équipes forment vos collaborateurs à la prise en main de la plateforme et vous accompagnent à chaque étape pour favoriser l'adoption.",
                "Do you offer training?",
                "Yes. Our teams train your staff to use the platform and support you at every step to drive adoption."
            ),
            qa(
                "Quels produits LegOmnia sont concernés ?",
                "L'accompagnement s'appuie sur Géode (GED intelligente), OmniScan (analyse et structuration de documents) et OMNIA (recherche juridique IA).",
                "Which LegOmnia products are involved?",
                "Support builds on Géode (smart document management), OmniScan (document analysis and structuring) and OMNIA (AI legal search)."
            ),
            qa(
                "Comment lancer un projet avec LegOmnia ?",
                "Contactez-nous ou demandez une démo : nous définissons avec vous le périmètre, les données à numériser et le calendrier de déploiement.",
                "How do I start a project with LegOmnia?",
                "Contact us or request a demo: together we define the scope, the data to digitize and the deployment schedule."
            ),
        ],
    },
];

export const getFaqGroup = (key) => FAQ_GROUPS.find((g) => g.key === key);

/** Schema.org FAQPage à partir d'une liste de groupes. */
export const buildFaqSchema = (groups, lang) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": groups.flatMap((g) => g.items).map(({ q, a }) => ({
        "@type": "Question",
        "name": q[lang],
        "acceptedAnswer": { "@type": "Answer", "text": a[lang] },
    })),
});
