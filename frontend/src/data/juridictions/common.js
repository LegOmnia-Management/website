/**
 * Textes partagés entre les pages juridiction (FR et EN).
 *
 * Chaque fonction prend la langue en premier argument et renvoie un objet de
 * la même forme que les données saisies à la main dans rdc.js ou senegal.js.
 * `law` désigne la référence constitutionnelle sur les traités,
 * ex. { fr: 'art. 147 de la Constitution', en: 'Constitution, art. 147' }.
 */

const pick = (lang, fr, en) => (lang === 'en' ? en : fr);

// Couleurs des organisations (identiques aux cartes interactives)
export const ORG_COLORS = {
    UA: '#d4a017', ZLECAF: '#ea7a2a', OHADA: '#7c5cfc', CEDEAO: '#14a89a',
    UEMOA: '#db4f9b', ENTENTE: '#3b82f6', ABN: '#16a34a', OMVS: '#3b82f6',
    OMVG: '#0d9488', MRU: '#9333ea', ZMAO: '#e11d48', AES: '#14a89a',
    CEMAC: '#db4f9b', CEEAC: '#14a89a', CBLT: '#16a34a', COMIFAC: '#3b82f6',
};

// ─── Organisations ──────────────────────────────────────────────────────────
export const ORGS = {
    OHADA: (lang, { membership, court, data }) => ({
        id: 'OHADA', sig: 'OHADA', members: 17,
        name: pick(lang, "Organisation pour l'harmonisation en Afrique du droit des affaires", 'Organization for the Harmonization of Business Law in Africa'),
        seat: pick(lang, 'Yaoundé (Secrétariat permanent)', 'Yaoundé (Permanent Secretariat)'),
        membership,
        approach: pick(lang, 'Actes uniformes directement applicables, sans transposition : sociétés, sûretés, recouvrement, procédures collectives, arbitrage, droit commercial général.', 'Uniform Acts directly applicable without transposition: companies, securities, debt recovery, insolvency, arbitration, general commercial law.'),
        effect: pick(lang, "Supranationalité : les Actes uniformes s'appliquent nonobstant toute disposition contraire de droit interne, antérieure ou postérieure (art. 10 du Traité).", 'Supranationality: Uniform Acts apply notwithstanding any conflicting provision of domestic law, whether earlier or later (Treaty, art. 10).'),
        court, data,
    }),
    UEMOA: (lang, { membership }) => ({
        id: 'UEMOA', sig: pick(lang, 'UEMOA', 'WAEMU'), members: 8,
        name: pick(lang, 'Union économique et monétaire ouest-africaine', 'West African Economic and Monetary Union'),
        seat: 'Ouagadougou', membership,
        approach: pick(lang, 'Règlements directement applicables et directives à transposer ; politique commune de la concurrence ; franc CFA émis par la BCEAO.', 'Directly applicable regulations and directives to be transposed; common competition policy; CFA franc issued by the BCEAO.'),
        effect: pick(lang, "Primauté du droit communautaire : les règlements s'appliquent sans mesure nationale de transposition.", 'Primacy of community law: regulations apply without any national transposition measure.'),
        court: pick(lang, "Cour de justice de l'UEMOA (Ouagadougou).", 'WAEMU Court of Justice (Ouagadougou).'),
        data: pick(lang, 'Règlements, directives et décisions de la Commission, notamment en concurrence, fiscalité et droit bancaire.', 'Regulations, directives and Commission decisions, notably on competition, taxation and banking law.'),
    }),
    CEDEAO: (lang, { membership, law }) => ({
        id: 'CEDEAO', sig: pick(lang, 'CEDEAO', 'ECOWAS'), members: 12,
        name: pick(lang, "Communauté économique des États de l'Afrique de l'Ouest", 'Economic Community of West African States'),
        seat: 'Abuja', membership,
        approach: pick(lang, 'Traité révisé, protocoles (libre circulation, commerce) et actes additionnels, adoptés par les organes communautaires.', 'Revised Treaty, protocols (free movement, trade) and supplementary acts adopted by the community bodies.'),
        effect: pick(lang, `Les traités et protocoles ratifiés ont une autorité supérieure aux lois (${law.fr}), sous réserve de réciprocité.`, `Ratified treaties and protocols prevail over statutes (${law.en}), subject to reciprocity.`),
        court: pick(lang, "Cour de justice de la CEDEAO (Abuja), saisissable directement par les particuliers en matière de droits de l'homme.", 'ECOWAS Court of Justice (Abuja), directly accessible to individuals in human rights matters.'),
        data: pick(lang, "Jurisprudence de la Cour de la CEDEAO, notamment en droits de l'homme, et textes sur la libre circulation.", 'Case law of the ECOWAS Court, notably on human rights, and free movement texts.'),
    }),
    UA: (lang, { law }) => ({
        id: 'UA', sig: pick(lang, 'UA', 'AU'), members: 55,
        name: pick(lang, 'Union africaine', 'African Union'),
        seat: pick(lang, 'Addis-Abeba', 'Addis Ababa'),
        membership: pick(lang, "membre fondateur de l'OUA (1963)", 'founding member of the OAU (1963)'),
        approach: pick(lang, "Acte constitutif et conventions continentales (droits de l'homme, cybersécurité, protection des données), applicables après signature et ratification.", 'Constitutive Act and continental conventions (human rights, cybersecurity, data protection), applicable after signature and ratification.'),
        effect: pick(lang, `Les conventions ratifiées et publiées ont une autorité supérieure aux lois (${law.fr}), sous réserve de réciprocité.`, `Ratified and published conventions prevail over statutes (${law.en}), subject to reciprocity.`),
        court: pick(lang, "Cour africaine des droits de l'homme et des peuples (Arusha), dans la limite des protocoles ratifiés.", "African Court on Human and Peoples' Rights (Arusha), within the limits of the ratified protocols."),
        data: pick(lang, 'Référentiel des standards continentaux, notamment en matière de protection des données personnelles.', 'Reference for continental standards, notably on personal data protection.'),
    }),
    ZLECAF: (lang, { uemoa = false } = {}) => ({
        id: 'ZLECAF', sig: pick(lang, 'ZLECAf', 'AfCFTA'), members: 54,
        name: pick(lang, 'Zone de libre-échange continentale africaine', 'African Continental Free Trade Area'),
        seat: pick(lang, 'Accra (Secrétariat)', 'Accra (Secretariat)'),
        membership: pick(lang, "État partie à l'Accord", 'State party to the Agreement'),
        approach: pick(lang, 'Accord-cadre et protocoles : marchandises, services, investissement, concurrence, propriété intellectuelle, commerce numérique.', 'Framework agreement and protocols: goods, services, investment, competition, intellectual property, digital trade.'),
        effect: pick(lang,
            `En cas de conflit avec un accord régional, l'Accord prévaut, sauf entre États ayant atteint une intégration plus poussée (art. 19)${uemoa ? ", comme au sein de l'UEMOA" : ''}.`,
            `In case of conflict with a regional agreement, the Agreement prevails, except between states that have achieved deeper integration (art. 19)${uemoa ? ', as within WAEMU' : ''}.`),
        court: pick(lang, "Mécanisme interétatique de règlement des différends, inspiré de l'OMC.", 'State-to-state dispute settlement mechanism modelled on the WTO.'),
        data: pick(lang, 'Suivi des engagements commerciaux et des textes de mise en œuvre nationaux.', 'Monitoring of trade commitments and national implementing texts.'),
    }),
    ENTENTE: (lang, { membership, law }) => ({
        id: 'ENTENTE', sig: 'Entente', members: 5,
        name: pick(lang, "Conseil de l'Entente", 'Council of the Entente'),
        seat: 'Abidjan', membership,
        approach: pick(lang, "Plus ancienne organisation régionale d'Afrique de l'Ouest : coopération au développement et en matière de sécurité entre cinq États.", 'The oldest regional organization in West Africa: development and security cooperation between five states.'),
        effect: pick(lang, `Accords de coopération soumis au régime général des traités (${law.fr}).`, `Cooperation agreements subject to the general treaty regime (${law.en}).`),
        court: pick(lang, 'Pas de juridiction communautaire.', 'No community court.'),
        data: pick(lang, 'Corpus limité, mais utile pour les projets de coopération entre États voisins.', 'A limited corpus, but useful for cooperation projects between neighbouring states.'),
    }),
    ABN: (lang, { membership, law }) => ({
        id: 'ABN', sig: pick(lang, 'ABN', 'NBA'), members: 9,
        name: pick(lang, 'Autorité du bassin du Niger', 'Niger Basin Authority'),
        seat: 'Niamey', membership,
        approach: pick(lang, 'Gestion concertée du bassin du fleuve Niger entre neuf États : ressources en eau, ouvrages, environnement.', 'Joint management of the Niger River basin between nine states: water resources, infrastructure, environment.'),
        effect: pick(lang, `Conventions soumises au régime général des traités (${law.fr}).`, `Conventions subject to the general treaty regime (${law.en}).`),
        court: pick(lang, 'Pas de juridiction communautaire.', 'No community court.'),
        data: pick(lang, "Charte de l'eau du bassin et textes sur la gestion des ressources partagées.", 'Basin water charter and texts on the management of shared resources.'),
    }),
    OMVS: (lang, { membership, law }) => ({
        id: 'OMVS', sig: 'OMVS', members: 4,
        name: pick(lang, 'Organisation pour la mise en valeur du fleuve Sénégal', 'Senegal River Basin Development Organization'),
        seat: 'Dakar', membership,
        approach: pick(lang, 'Gestion commune du fleuve Sénégal : ouvrages partagés, énergie, navigation, irrigation, répartition des eaux.', 'Joint management of the Senegal River: shared infrastructure, energy, navigation, irrigation, water allocation.'),
        effect: pick(lang, `Conventions soumises au régime général des traités (${law.fr}).`, `Conventions subject to the general treaty regime (${law.en}).`),
        court: pick(lang, 'Pas de juridiction communautaire.', 'No community court.'),
        data: pick(lang, 'Conventions de bassin et textes sur la gestion des ouvrages communs.', 'Basin conventions and texts on the management of shared infrastructure.'),
    }),
    OMVG: (lang, { membership, law }) => ({
        id: 'OMVG', sig: 'OMVG', members: 4,
        name: pick(lang, 'Organisation pour la mise en valeur du fleuve Gambie', 'Gambia River Basin Development Organization'),
        seat: 'Dakar', membership,
        approach: pick(lang, 'Gestion commune des bassins de la Gambie et des fleuves voisins : énergie, interconnexion électrique, aménagements.', 'Joint management of the Gambia and neighbouring river basins: energy, power interconnection, development works.'),
        effect: pick(lang, `Conventions soumises au régime général des traités (${law.fr}).`, `Conventions subject to the general treaty regime (${law.en}).`),
        court: pick(lang, 'Pas de juridiction communautaire.', 'No community court.'),
        data: pick(lang, "Conventions de bassin et textes sur les ouvrages et l'énergie partagés.", 'Basin conventions and texts on shared infrastructure and energy.'),
    }),
    MRU: (lang, { membership, law }) => ({
        id: 'MRU', sig: pick(lang, 'UFM', 'MRU'), members: 4,
        name: pick(lang, 'Union du fleuve Mano', 'Mano River Union'),
        seat: 'Freetown', membership,
        approach: pick(lang, "Coopération économique et sécuritaire entre quatre États voisins : Liberia, Sierra Leone, Guinée et Côte d'Ivoire.", "Economic and security cooperation between four neighbouring states: Liberia, Sierra Leone, Guinea and Côte d'Ivoire."),
        effect: pick(lang, `Accords de coopération soumis au régime général des traités (${law.fr}).`, `Cooperation agreements subject to the general treaty regime (${law.en}).`),
        court: pick(lang, 'Pas de juridiction communautaire.', 'No community court.'),
        data: pick(lang, 'Textes de coopération transfrontalière entre États voisins.', 'Cross-border cooperation texts between neighbouring states.'),
    }),
    ZMAO: (lang, { membership }) => ({
        id: 'ZMAO', sig: pick(lang, 'ZMAO', 'WAMZ'), members: 6,
        name: pick(lang, "Zone monétaire de l'Afrique de l'Ouest", 'West African Monetary Zone'),
        seat: pick(lang, 'Accra (Institut monétaire)', 'Accra (Monetary Institute)'), membership,
        approach: pick(lang, 'Regroupement de six États de la CEDEAO hors franc CFA, chacun doté de sa propre monnaie, engagés dans une convergence monétaire.', 'Six ECOWAS states outside the CFA franc, each with its own currency, committed to monetary convergence.'),
        effect: pick(lang, 'Engagements de convergence soumis au régime général des traités.', 'Convergence commitments subject to the general treaty regime.'),
        court: pick(lang, 'Pas de juridiction propre.', 'No court of its own.'),
        data: pick(lang, 'Textes de coordination monétaire et de convergence macroéconomique.', 'Monetary coordination and macroeconomic convergence texts.'),
    }),
    CEMAC: (lang, { membership }) => ({
        id: 'CEMAC', sig: 'CEMAC', members: 6,
        name: pick(lang, "Communauté économique et monétaire de l'Afrique centrale", 'Central African Economic and Monetary Community'),
        seat: pick(lang, 'Bangui (Commission)', 'Bangui (Commission)'), membership,
        approach: pick(lang, 'Règlements directement applicables et directives ; union douanière, marché financier régional ; franc CFA émis par la BEAC, dont le siège est à Yaoundé.', 'Directly applicable regulations and directives; customs union, regional financial market; CFA franc issued by the BEAC, headquartered in Yaoundé.'),
        effect: pick(lang, "Primauté du droit communautaire : les règlements s'appliquent sans mesure nationale de transposition.", 'Primacy of community law: regulations apply without any national transposition measure.'),
        court: pick(lang, "Cour de justice de la CEMAC (N'Djamena).", "CEMAC Court of Justice (N'Djamena)."),
        data: pick(lang, 'Règlements, directives et décisions communautaires, notamment en droit bancaire, financier et douanier.', 'Community regulations, directives and decisions, notably in banking, financial and customs law.'),
    }),
    CEEAC: (lang, { membership, law }) => ({
        id: 'CEEAC', sig: pick(lang, 'CEEAC', 'ECCAS'), members: 11,
        name: pick(lang, "Communauté économique des États de l'Afrique centrale", 'Economic Community of Central African States'),
        seat: 'Libreville', membership,
        approach: pick(lang, 'Intégration économique et architecture de paix et de sécurité ; protocoles et décisions à mettre en œuvre par les États.', 'Economic integration and a peace and security architecture; protocols and decisions to be implemented by member states.'),
        effect: pick(lang, `Les instruments ratifiés relèvent du régime des traités (${law.fr}) ; leur effet concret dépend des mesures nationales d'exécution.`, `Ratified instruments fall under the treaty regime (${law.en}); their practical effect depends on national implementing measures.`),
        court: pick(lang, 'Une juridiction communautaire est prévue par les textes.', 'A community court is provided for in the texts.'),
        data: pick(lang, 'Veille sur les décisions communautaires et leur mise en œuvre nationale.', 'Monitoring of community decisions and their national implementation.'),
    }),
    CBLT: (lang, { membership, law }) => ({
        id: 'CBLT', sig: pick(lang, 'CBLT', 'LCBC'), members: 6,
        name: pick(lang, 'Commission du bassin du lac Tchad', 'Lake Chad Basin Commission'),
        seat: "N'Djamena", membership,
        approach: pick(lang, 'Gestion concertée des eaux et des ressources du bassin du lac Tchad entre six États.', 'Joint management of the waters and resources of the Lake Chad basin between six states.'),
        effect: pick(lang, `Conventions soumises au régime général des traités (${law.fr}).`, `Conventions subject to the general treaty regime (${law.en}).`),
        court: pick(lang, 'Pas de juridiction communautaire.', 'No community court.'),
        data: pick(lang, 'Conventions de bassin et textes sur la gestion des ressources partagées.', 'Basin conventions and texts on the management of shared resources.'),
    }),
    COMIFAC: (lang, { membership, law }) => ({
        id: 'COMIFAC', sig: 'COMIFAC', members: 10,
        name: pick(lang, "Commission des forêts d'Afrique centrale", 'Central African Forests Commission'),
        seat: 'Yaoundé', membership,
        approach: pick(lang, 'Coordination des politiques forestières et environnementales du bassin du Congo entre dix États.', 'Coordination of forest and environmental policies in the Congo Basin between ten states.'),
        effect: pick(lang, `Engagements soumis au régime général des traités (${law.fr}).`, `Commitments subject to the general treaty regime (${law.en}).`),
        court: pick(lang, 'Pas de juridiction communautaire.', 'No community court.'),
        data: pick(lang, "Textes forestiers et environnementaux harmonisés à l'échelle du bassin du Congo.", 'Forest and environmental texts harmonised across the Congo Basin.'),
    }),
};

// ─── Pièges : organisations dont le pays n'est pas membre ──────────────────
export const TRAPS = {
    CEMAC_CFA: (lang, de) => ({
        id: 'CEMAC', sig: 'CEMAC',
        text: pick(lang,
            `Union économique et monétaire de six États d'Afrique centrale. Elle utilise elle aussi un franc CFA, mais émis par la BEAC : ${de} relève de l'UEMOA et de la BCEAO.`,
            `Economic and monetary union of six Central African states. It also uses a CFA franc, but one issued by the BEAC: ${de} belongs to WAEMU and the BCEAO.`),
    }),
    ENTENTE: (lang, name) => ({
        id: 'ENTENTE', sig: 'Entente',
        text: pick(lang,
            `Conseil de l'Entente, organisation de coopération entre cinq États d'Afrique de l'Ouest fondée en 1959. ${name} n'en est pas membre.`,
            `Council of the Entente, a cooperation organization of five West African states founded in 1959. ${name} is not a member.`),
    }),
};

// ─── Section OHADA / UEMOA (pays membres des deux organisations) ────────────
const ARTICULATION_SOURCES = [
    { label: 'Presses universitaires d’Aix-Marseille (OpenEdition)', url: 'https://books.openedition.org/puam/404' },
    { label: 'Revue de l’ERSUMA, 2018 (Cairn)', url: 'https://droit.cairn.info/revue-revue-de-lersuma-2018-1-page-185?lang=fr' },
    { label: 'UEMOA', url: 'https://www.uemoa.int/index.php/actualites/renforcement-des-relations-institutionnelles-entre-luemoa-et-lohada-pour-une-meilleure' },
];

export const ARTICULATION_OHADA_UEMOA = (lang, dont) => (lang === 'en' ? {
    title: 'OHADA and WAEMU: how they fit together',
    intro: `The eight WAEMU member states, including ${dont}, also belong to OHADA. Two bodies of community law therefore apply there at the same time, with distinct scopes but points of contact.`,
    items: [
        { title: 'Complementarity', text: 'OHADA focuses strictly on legal certainty for business and commercial law, while WAEMU has a broader remit: monetary policy, customs union, financial markets, taxation.' },
        { title: 'Coexistence and conflicts of norms', text: 'In the eight countries belonging to both organizations, collisions can arise between OHADA Uniform Acts and WAEMU regulations or directives, for example in accounting or financial law.' },
        { title: 'A permanent consultation framework', text: 'To avoid conflicts of competence and harmonise their action, a Permanent Consultation Framework has been set up between OHADA and the WAEMU institutions.' },
    ],
    sourcesLabel: 'Sources', sources: ARTICULATION_SOURCES,
} : {
    title: 'OHADA et UEMOA : articulation et zones de convergence',
    intro: `Les huit États membres de l'UEMOA, dont ${dont}, appartiennent aussi à l'OHADA. Deux droits communautaires s'y appliquent donc simultanément, avec des champs distincts mais des points de contact.`,
    items: [
        { title: 'Complémentarité', text: "L'OHADA se concentre strictement sur la sécurité juridique des affaires et le droit commercial, tandis que l'UEMOA dispose d'un champ d'action plus large : politique monétaire, union douanière, marchés financiers, fiscalité." },
        { title: 'Coexistence et conflits de normes', text: "Dans les huit pays membres des deux organisations, des collisions peuvent survenir entre les Actes uniformes de l'OHADA et les règlements ou directives de l'UEMOA, par exemple en matière de comptabilité ou de droit financier." },
        { title: 'Un cadre permanent de concertation', text: "Pour éviter les conflits de compétences et harmoniser leurs actions, un Cadre permanent de concertation (CPC) a été mis en place entre l'OHADA et les institutions de l'UEMOA." },
    ],
    sourcesLabel: 'Sources', sources: ARTICULATION_SOURCES,
});

// ─── Section OHADA / CEMAC (pays membres des deux organisations) ────────────
export const ARTICULATION_OHADA_CEMAC = (lang, dont) => (lang === 'en' ? {
    title: 'OHADA and CEMAC: how they fit together',
    intro: `The six CEMAC member states, including ${dont}, also belong to OHADA. Two bodies of community law therefore apply there at the same time, with distinct scopes but points of contact.`,
    items: [
        { title: 'Complementarity', text: 'OHADA focuses on business law (companies, securities, debt recovery, insolvency, arbitration), while CEMAC covers monetary policy (BEAC), the customs union, the regional financial market and banking regulation (COBAC).' },
        { title: 'Coexistence and overlaps', text: 'In the six countries belonging to both organizations, overlaps can arise, for example between OHADA company law and the community rules governing credit institutions or the financial market.' },
        { title: 'Two reference courts', text: "The CCJA (Abidjan) rules on the application of the Uniform Acts; the CEMAC Court of Justice (N'Djamena) rules on the interpretation and application of CEMAC community law." },
    ],
} : {
    title: 'OHADA et CEMAC : articulation et zones de convergence',
    intro: `Les six États membres de la CEMAC, dont ${dont}, appartiennent aussi à l'OHADA. Deux droits communautaires s'y appliquent donc simultanément, avec des champs distincts mais des points de contact.`,
    items: [
        { title: 'Complémentarité', text: "L'OHADA se concentre sur le droit des affaires (sociétés, sûretés, recouvrement, procédures collectives, arbitrage), tandis que la CEMAC couvre la politique monétaire (BEAC), l'union douanière, le marché financier régional et la réglementation bancaire (COBAC)." },
        { title: 'Coexistence et recoupements', text: "Dans les six pays membres des deux organisations, des recoupements peuvent apparaître, par exemple entre le droit OHADA des sociétés et les règles communautaires applicables aux établissements de crédit ou au marché financier." },
        { title: 'Deux juges de référence', text: "La CCJA (Abidjan) se prononce sur l'application des Actes uniformes ; la Cour de justice de la CEMAC (N'Djamena) sur l'interprétation et l'application du droit communautaire de la CEMAC." },
    ],
});

// ─── Libellés des exercices ─────────────────────────────────────────────────
export const GAMES_UI = {
    fr: {
        question: 'Question', case: 'Cas', score: 'Score', next: 'Suivant', result: 'Voir le résultat',
        replay: 'Rejouer', right: 'Exact.', wrong: 'Pas tout à fait.',
        outOf: (score, total) => `${score} bonne(s) réponse(s) sur ${total}.`,
    },
    en: {
        question: 'Question', case: 'Case', score: 'Score', next: 'Next', result: 'See the result',
        replay: 'Play again', right: 'Correct.', wrong: 'Not quite.',
        outOf: (score, total) => `${score} correct answer(s) out of ${total}.`,
    },
};

export const ARBITER_END = {
    fr: (score, total) => (score === total ? 'Arbitre infaillible !' : score >= Math.ceil(total * 0.65) ? 'Bel arbitrage' : 'À revoir : la pyramide vous attend'),
    en: (score, total) => (score === total ? 'Flawless referee!' : score >= Math.ceil(total * 0.65) ? 'Well refereed' : 'Worth another look: the pyramid awaits'),
};

export const QUIZ_END = {
    fr: (score, total) => (score === total ? 'Badge « Juriste régional » : sans-faute !' : score >= Math.ceil(total * 0.7) ? 'Badge « Expert confirmé » obtenu' : 'Badge « Initié » obtenu'),
    en: (score, total) => (score === total ? '"Regional jurist" badge: a perfect score!' : score >= Math.ceil(total * 0.7) ? '"Seasoned expert" badge earned' : '"Initiate" badge earned'),
};

// ─── Questions de quiz communes ─────────────────────────────────────────────
export const QUIZ = {
    ccjaSeat: (lang) => pick(lang,
        { q: "Dans quelle ville siège la Cour commune de justice et d'arbitrage (CCJA) ?", o: ['Dakar', 'Abidjan', 'Yaoundé', 'Ouagadougou'], a: 1, e: "La CCJA siège à Abidjan ; le Secrétariat permanent de l'OHADA est à Yaoundé." },
        { q: 'In which city is the Common Court of Justice and Arbitration (CCJA) based?', o: ['Dakar', 'Abidjan', 'Yaoundé', 'Ouagadougou'], a: 1, e: 'The CCJA sits in Abidjan; the OHADA Permanent Secretariat is in Yaoundé.' }),
    portLouis: (lang) => pick(lang,
        { q: 'Dans quelle ville le Traité OHADA a-t-il été signé en 1993 ?', o: ['Dakar', 'Port-Louis', 'Abidjan', 'Libreville'], a: 1, e: 'Le Traité OHADA a été signé à Port-Louis (île Maurice) le 17 octobre 1993.' },
        { q: 'In which city was the OHADA Treaty signed in 1993?', o: ['Dakar', 'Port Louis', 'Abidjan', 'Libreville'], a: 1, e: 'The OHADA Treaty was signed in Port Louis (Mauritius) on 17 October 1993.' }),
    ohadaApproach: (lang) => pick(lang,
        { q: 'Quelle approche caractérise le droit OHADA ?', o: ['Directives à transposer', 'Actes directement applicables', 'Simple coopération', 'Recommandations non contraignantes'], a: 1, e: "L'OHADA pratique l'uniformisation : un même texte s'applique tel quel dans tous les États parties." },
        { q: 'Which approach characterises OHADA law?', o: ['Directives to transpose', 'Directly applicable acts', 'Plain cooperation', 'Non-binding recommendations'], a: 1, e: 'OHADA uses uniform law: the same text applies as is in every member state.' }),
    ohadaCount: (lang, dont) => pick(lang,
        { q: "Combien d'États sont membres de l'OHADA ?", o: ['8', '12', '17', '21'], a: 2, e: `Dix-sept États, dont ${dont}, appliquent les Actes uniformes OHADA.` },
        { q: 'How many states are members of OHADA?', o: ['8', '12', '17', '21'], a: 2, e: `Seventeen states, including ${dont}, apply the OHADA Uniform Acts.` }),
    treatyAuthority: (lang, ref) => pick(lang,
        { q: 'Selon la Constitution, un traité régulièrement ratifié et publié a une autorité…', o: ['égale à celle de la loi', 'supérieure à celle de la loi', 'supérieure à la Constitution', 'inférieure aux décrets'], a: 1, e: `${ref.fr} : autorité supérieure à celle des lois, sous réserve de réciprocité.` },
        { q: 'Under the Constitution, a duly ratified and published treaty has authority…', o: ['equal to statute', 'superior to statute', 'superior to the Constitution', 'inferior to decrees'], a: 1, e: `${ref.en}: authority superior to statutes, subject to reciprocity.` }),
    bceao: (lang) => pick(lang,
        { q: "Quelle banque centrale émet le franc CFA de l'UEMOA, et où siège-t-elle ?", o: ['La BEAC, à Yaoundé', 'La BCEAO, à Dakar', 'La BCEAO, à Abidjan', 'La BOAD, à Lomé'], a: 1, e: "La Banque centrale des États de l'Afrique de l'Ouest (BCEAO) a son siège à Dakar." },
        { q: 'Which central bank issues the WAEMU CFA franc, and where is it based?', o: ['The BEAC, in Yaoundé', 'The BCEAO, in Dakar', 'The BCEAO, in Abidjan', 'The BOAD, in Lomé'], a: 1, e: 'The Central Bank of West African States (BCEAO) is headquartered in Dakar.' }),
    uemoaSeat: (lang) => pick(lang,
        { q: "Où siège la Commission de l'UEMOA ?", o: ['Dakar', 'Abidjan', 'Ouagadougou', 'Lomé'], a: 2, e: "La Commission de l'UEMOA et sa Cour de justice siègent à Ouagadougou, au Burkina Faso." },
        { q: 'Where is the WAEMU Commission based?', o: ['Dakar', 'Abidjan', 'Ouagadougou', 'Lomé'], a: 2, e: 'The WAEMU Commission and its Court of Justice sit in Ouagadougou, Burkina Faso.' }),
    uemoaCount: (lang) => pick(lang,
        { q: "Combien d'États sont membres de l'UEMOA ?", o: ['5', '8', '12', '17'], a: 1, e: "L'UEMOA réunit huit États qui partagent le franc CFA émis par la BCEAO : Bénin, Burkina Faso, Côte d'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal et Togo." },
        { q: 'How many states are members of WAEMU?', o: ['5', '8', '12', '17'], a: 1, e: "WAEMU brings together eight states sharing the CFA franc issued by the BCEAO: Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal and Togo." }),
    uemoaRegulation: (lang, adjFr, adjEn) => pick(lang,
        { q: `Un règlement de l'UEMOA doit-il être transposé en droit ${adjFr} ?`, o: ['Oui, par une loi', 'Oui, par un décret', 'Non, il est directement applicable', "Seulement s'il est publié par la BCEAO"], a: 2, e: "Les règlements de l'UEMOA sont directement applicables ; seules les directives doivent être transposées." },
        { q: `Must a WAEMU regulation be transposed into ${adjEn} law?`, o: ['Yes, by statute', 'Yes, by decree', 'No, it is directly applicable', 'Only if published by the BCEAO'], a: 2, e: 'WAEMU regulations are directly applicable; only directives must be transposed.' }),
    cedeaoCourt: (lang) => pick(lang,
        { q: 'Où siège la Cour de justice de la CEDEAO ?', o: ['Accra', 'Abuja', 'Dakar', 'Lagos'], a: 1, e: 'La Cour de justice de la CEDEAO siège à Abuja, au Nigeria.' },
        { q: 'Where is the ECOWAS Court of Justice based?', o: ['Accra', 'Abuja', 'Dakar', 'Lagos'], a: 1, e: 'The ECOWAS Court of Justice sits in Abuja, Nigeria.' }),
    abnRiver: (lang) => pick(lang,
        { q: "L'Autorité du bassin du Niger, qui siège à Niamey, réunit combien d'États ?", o: ['4', '6', '9', '12'], a: 2, e: "L'ABN réunit neuf États riverains du bassin du Niger : Bénin, Burkina Faso, Cameroun, Côte d'Ivoire, Guinée, Mali, Niger, Nigeria et Tchad." },
        { q: 'How many states does the Niger Basin Authority, based in Niamey, bring together?', o: ['4', '6', '9', '12'], a: 2, e: "The NBA brings together nine states of the Niger basin: Benin, Burkina Faso, Cameroon, Chad, Côte d'Ivoire, Guinea, Mali, Niger and Nigeria." }),
    notUemoa: (lang, nameFr, nameEn) => pick(lang,
        { q: `Laquelle de ces organisations ne compte PAS ${nameFr} parmi ses membres ?`, o: ['CEMAC', 'OHADA', 'UEMOA', 'CEEAC'], a: 2, e: "L'UEMOA est l'union économique et monétaire de huit États d'Afrique de l'Ouest ; son franc CFA est émis par la BCEAO, et non par la BEAC." },
        { q: `Which of these organizations does NOT count ${nameEn} among its members?`, o: ['CEMAC', 'OHADA', 'WAEMU', 'ECCAS'], a: 2, e: 'WAEMU is the economic and monetary union of eight West African states; its CFA franc is issued by the BCEAO, not the BEAC.' }),
    beac: (lang) => pick(lang,
        { q: 'Où siège la BEAC, banque centrale des États de la CEMAC ?', o: ['Libreville', 'Yaoundé', 'Bangui', 'Dakar'], a: 1, e: "La Banque des États de l'Afrique centrale (BEAC), qui émet le franc CFA d'Afrique centrale, a son siège à Yaoundé." },
        { q: 'Where is the BEAC, the central bank of the CEMAC states, headquartered?', o: ['Libreville', 'Yaoundé', 'Bangui', 'Dakar'], a: 1, e: 'The Bank of Central African States (BEAC), which issues the Central African CFA franc, is headquartered in Yaoundé.' }),
    cemacCommission: (lang) => pick(lang,
        { q: 'Où siège la Commission de la CEMAC ?', o: ['Yaoundé', 'Libreville', 'Bangui', "N'Djamena"], a: 2, e: 'La Commission de la CEMAC siège à Bangui, en Centrafrique.' },
        { q: 'Where is the CEMAC Commission based?', o: ['Yaoundé', 'Libreville', 'Bangui', "N'Djamena"], a: 2, e: 'The CEMAC Commission sits in Bangui, Central African Republic.' }),
    cemacCourt: (lang) => pick(lang,
        { q: 'Où siège la Cour de justice de la CEMAC ?', o: ["N'Djamena", 'Abidjan', 'Bangui', 'Yaoundé'], a: 0, e: "La Cour de justice de la CEMAC siège à N'Djamena, au Tchad." },
        { q: 'Where is the CEMAC Court of Justice based?', o: ["N'Djamena", 'Abidjan', 'Bangui', 'Yaoundé'], a: 0, e: "The CEMAC Court of Justice sits in N'Djamena, Chad." }),
    cemacCount: (lang) => pick(lang,
        { q: "Combien d'États sont membres de la CEMAC ?", o: ['4', '6', '8', '11'], a: 1, e: 'La CEMAC réunit six États : Cameroun, Centrafrique, Congo, Gabon, Guinée équatoriale et Tchad.' },
        { q: 'How many states are members of CEMAC?', o: ['4', '6', '8', '11'], a: 1, e: 'CEMAC brings together six states: Cameroon, Central African Republic, Congo, Gabon, Equatorial Guinea and Chad.' }),
    ceeacSeat: (lang) => pick(lang,
        { q: 'Où siège la CEEAC ?', o: ['Libreville', 'Kinshasa', 'Yaoundé', 'Luanda'], a: 0, e: 'La Communauté économique des États de l’Afrique centrale (CEEAC) a son siège à Libreville, au Gabon.' },
        { q: 'Where is ECCAS headquartered?', o: ['Libreville', 'Kinshasa', 'Yaoundé', 'Luanda'], a: 0, e: 'The Economic Community of Central African States (ECCAS) is headquartered in Libreville, Gabon.' }),
    cemacRegulation: (lang, adjFr, adjEn) => pick(lang,
        { q: `Un règlement de la CEMAC doit-il être transposé en droit ${adjFr} ?`, o: ['Oui, par une loi', 'Oui, par un décret', 'Non, il est directement applicable', "Seulement s'il est publié par la BEAC"], a: 2, e: 'Les règlements de la CEMAC sont directement applicables dans les États membres.' },
        { q: `Must a CEMAC regulation be transposed into ${adjEn} law?`, o: ['Yes, by statute', 'Yes, by decree', 'No, it is directly applicable', 'Only if published by the BEAC'], a: 2, e: 'CEMAC regulations are directly applicable in the member states.' }),
    cemacVsCeeac: (lang) => pick(lang,
        { q: 'Lequel de ces États est membre de la CEEAC, mais PAS de la CEMAC ?', o: ['Le Gabon', 'Le Tchad', 'La RDC', 'Le Cameroun'], a: 2, e: 'La RDC est membre de la CEEAC (11 États) sans appartenir à la CEMAC (6 États).' },
        { q: 'Which of these states is a member of ECCAS but NOT of CEMAC?', o: ['Gabon', 'Chad', 'The DRC', 'Cameroon'], a: 2, e: 'The DRC is a member of ECCAS (11 states) without belonging to CEMAC (6 states).' }),
    notCemac: (lang, nameFr, nameEn, uemoa = true) => pick(lang,
        { q: `Laquelle de ces organisations ne compte PAS ${nameFr} parmi ses membres ?`, o: [uemoa ? 'UEMOA' : 'CEDEAO', 'OHADA', 'CEMAC', 'ZLECAf'], a: 2, e: "La CEMAC est l'union économique et monétaire de six États d'Afrique centrale." },
        { q: `Which of these organizations does NOT count ${nameEn} among its members?`, o: [uemoa ? 'WAEMU' : 'ECOWAS', 'OHADA', 'CEMAC', 'AfCFTA'], a: 2, e: 'CEMAC is the economic and monetary union of six Central African states.' }),
};

// ─── Phrase « où en est LegOmnia » ──────────────────────────────────────────
export const LEGOMNIA_STATUS = (lang, { adjFr, adjEn, dont, au }) => pick(lang,
    { q: `Où en est LegOmnia sur le droit ${adjFr} ?`, a: `${dont.charAt(0).toUpperCase() + dont.slice(1)} fait partie de nos juridictions prioritaires, et son intégration est en cours. Nous construisons la couverture étape par étape : le droit OHADA, commun aux 17 États membres, en constitue le socle, et les textes et la jurisprudence propres au droit ${adjFr} viennent l'enrichir progressivement. Les inscrits à la liste d'attente seront informés en priorité de chaque nouvelle avancée. OmniScan peut, dès aujourd'hui, être déployé ${au} pour numériser et indexer des fonds documentaires juridiques.` },
    { q: `Where does LegOmnia stand on ${adjEn} law?`, a: `This is one of our priority jurisdictions and its integration is under way. We are building coverage step by step: OHADA law, shared by the 17 member states, is the foundation, progressively enriched with texts and case law specific to ${adjEn} law. People on the waitlist will be the first to hear about each new milestone. OmniScan can already be deployed there today to digitise and index legal document collections.` });
