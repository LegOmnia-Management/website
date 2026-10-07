/**
 * Page juridiction : Tchad (gabarit CEMAC, voir cemacCountry.js).
 * Cadre constitutionnel présenté de façon factuelle et sobre (choix éditorial).
 */
import { buildCemacPage } from './cemacCountry';
import { ORGS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildCemacPage({
    iso: 'TCD', flag: 'td', supportSlug: 'tchad',
    name: { fr: 'Tchad', en: 'Chad' },
    le: { fr: 'le Tchad', en: 'Chad' }, Le: { fr: 'Le Tchad', en: 'Chad' },
    de: { fr: 'du Tchad' }, possessive: { en: "Chad's" },
    au: { fr: 'au Tchad', en: 'in Chad' }, pronoun: { fr: 'il' },
    adj: { fr: 'tchadien', en: 'Chadian' }, adjFem: 'tchadienne',
    titlePrefix: { fr: 'Le droit au', en: 'Law in' },
    seoDescription: {
        fr: "Droit tchadien : membre fondateur de l'OHADA et de la CEMAC (Cour de justice à N'Djamena), CEEAC, Commission du bassin du lac Tchad, hiérarchie des normes. Carte interactive et quiz.",
        en: "Chadian law: founding member of OHADA and CEMAC (Court of Justice in N'Djamena), ECCAS, Lake Chad Basin Commission, hierarchy of norms. Interactive map and quiz.",
    },
    intro: {
        fr: "Membre fondateur de l'OHADA et de la CEMAC, dont la Cour de justice siège à N'Djamena, comme la Commission du bassin du lac Tchad, le Tchad combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de la CEMAC. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: "A founding member of OHADA and CEMAC, whose Court of Justice sits in N'Djamena, as does the Lake Chad Basin Commission, Chad combines civil-law national legislation, uniform OHADA law and CEMAC community law. This page sets out how they fit together, and which prevails in case of conflict.",
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: "N'Djamena", en: "N'Djamena" } },
        { label: { fr: 'Langues officielles', en: 'Official languages' }, value: { fr: 'Français et arabe', en: 'French and Arabic' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Droit civiliste (droit écrit)', en: 'Civil law (codified law)' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: 'Adoptée par référendum en 2023', en: 'Adopted by referendum in 2023' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, membre fondateur', en: 'OHADA, founding member' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: 'Conseil constitutionnel, Cour suprême, Cour des comptes', en: 'Constitutional Council, Supreme Court, Court of Auditors' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XAF), émis par la BEAC', en: 'CFA franc (XAF), issued by the BEAC' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "8, dont l'UA et la ZLECAf", en: '8, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de huit organisations, le Tchad relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (CEMAC), intégration régionale (CEEAC) et gestion partagée des ressources naturelles (lac Tchad, fleuve Niger, forêts du bassin du Congo).",
        en: 'A member of eight organizations, Chad is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (CEMAC), regional integration (ECCAS) and shared management of natural resources (Lake Chad, the Niger River, the Congo Basin forests).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême du Tchad.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Chad.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions tchadiennes appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Chadian decisions applying the Uniform Acts.'),
            }),
            ORGS.CEMAC(lang, { membership: t('membre fondateur (1994) ; siège de la Cour de justice', 'founding member (1994); seat of the Court of Justice') }),
            ORGS.CEEAC(lang, { membership: t('membre fondateur (1983)', 'founding member (1983)'), law: LAW }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang),
            ORGS.CBLT(lang, { membership: t('membre fondateur (1964) ; pays du siège', 'founding member (1964); host country'), law: LAW }),
            ORGS.ABN(lang, { membership: t('État membre', 'member state'), law: LAW }),
            ORGS.COMIFAC(lang, { membership: t('État membre', 'member state'), law: LAW }),
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            { id: 'UEMOA', sig: t('UEMOA', 'WAEMU'), text: t("Union économique et monétaire ouest-africaine. Elle utilise elle aussi un franc CFA, mais émis par la BCEAO : le Tchad relève de la CEMAC et de la BEAC.", 'West African Economic and Monetary Union. It also uses a CFA franc, but one issued by the BCEAO: Chad belongs to CEMAC and the BEAC.') },
            { id: 'CEDEAO', sig: t('CEDEAO', 'ECOWAS'), text: t("Communauté économique des États de l'Afrique de l'Ouest. Le Nigeria voisin en est membre, pas le Tchad.", 'Economic Community of West African States. Neighbouring Nigeria is a member, Chad is not.') },
            { id: 'COMESA', sig: 'COMESA', text: t("Marché commun de l'Afrique orientale et australe, dont le Soudan et la Libye voisins sont membres. Le Tchad n'en fait pas partie.", 'Common Market for Eastern and Southern Africa, of which neighbouring Sudan and Libya are members. Chad is not.') },
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Cameroun partage par exemple six organisations sous-régionales avec le Tchad. La ZLECAf vise à rationaliser cet enchevêtrement.',
        en: 'These overlapping memberships create sometimes competing obligations. Cameroon, for example, shares six sub-regional organizations with Chad. The AfCFTA aims to rationalise this tangle.',
    },
    supremeCourt: { fr: 'la Cour suprême du Tchad', en: 'the Supreme Court of Chad' },
    constitutionalCourt: { fr: 'Conseil constitutionnel', en: 'Constitutional Council' },
    adminCourt: { fr: 'juridictions administratives, Cour suprême', en: 'administrative courts, Supreme Court' },
    constitution: { fr: 'La Constitution, adoptée par référendum en 2023,', en: 'The Constitution, adopted by referendum in 2023,' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: 'UA, ZLECAf, CEEAC, CBLT, ABN, COMIFAC', en: 'AU, AfCFTA, ECCAS, LCBC, NBA, COMIFAC' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'A CEMAC directive has not yet been transposed in Chad. Can it replace national law on its own?', o: ['Yes, like a regulation', 'No, it must be transposed'], a: 1, e: 'Unlike regulations, CEMAC directives set objectives that each state must transpose into its own law.' }
        : { q: "Une directive de la CEMAC n'a pas encore été transposée au Tchad. Peut-elle remplacer d'elle-même la loi nationale ?", o: ['Oui, comme un règlement', 'Non, elle doit être transposée'], a: 1, e: 'Contrairement aux règlements, les directives de la CEMAC fixent des objectifs que chaque État doit transposer dans son droit.' }),
    quizSpecific: (lang) => (lang === 'en' ? [
        { q: "Which basin organization is headquartered in N'Djamena?", o: ['The Niger Basin Authority', 'The Lake Chad Basin Commission', 'The OMVS', 'COMIFAC'], a: 1, e: "The Lake Chad Basin Commission (LCBC), created in 1964, is headquartered in N'Djamena." },
        { q: 'What are the official languages of Chad?', o: ['French and English', 'French and Arabic', 'French and Sango', 'Arabic only'], a: 1, e: 'French and Arabic are the two official languages of Chad.' },
        { q: 'Which basin organization, headquartered in Niamey, is Chad also a member of?', o: ['The OMVG', 'The Niger Basin Authority', 'The OMVS', 'The Mano River Union'], a: 1, e: 'Chad is a member of the Niger Basin Authority, which brings together nine states.' },
    ] : [
        { q: "Quelle organisation de bassin a son siège à N'Djamena ?", o: ["L'Autorité du bassin du Niger", 'La Commission du bassin du lac Tchad', "L'OMVS", 'La COMIFAC'], a: 1, e: "La Commission du bassin du lac Tchad (CBLT), créée en 1964, a son siège à N'Djamena." },
        { q: 'Quelles sont les langues officielles du Tchad ?', o: ['Français et anglais', 'Français et arabe', 'Français et sango', 'Arabe seulement'], a: 1, e: "Le français et l'arabe sont les deux langues officielles du Tchad." },
        { q: 'De quelle autre organisation de bassin, siégeant à Niamey, le Tchad est-il membre ?', o: ["L'OMVG", "L'Autorité du bassin du Niger", "L'OMVS", "L'Union du fleuve Mano"], a: 1, e: "Le Tchad est membre de l'Autorité du bassin du Niger, qui réunit neuf États." },
    ]),
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is the status of international treaties in Chadian law?', a: 'The Constitution gives duly ratified and published treaties authority superior to statutes, provided the other party applies them. OHADA law and CEMAC law, being directly applicable, also prevail over conflicting domestic law.' },
    ] : [
        { q: 'Quelle est la place des traités internationaux dans le droit tchadien ?', a: "La Constitution reconnaît aux traités régulièrement ratifiés et publiés une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Le droit OHADA et le droit de la CEMAC, directement applicables, priment en outre le droit interne contraire." },
    ]),
    orgsList: {
        fr: "Le Tchad est membre de huit organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEMAC, la CEEAC, la Commission du bassin du lac Tchad, l'Autorité du bassin du Niger et la COMIFAC. Il n'est membre ni de l'UEMOA, ni de la CEDEAO, ni du COMESA.",
        en: 'Chad is a member of eight organizations: the African Union, the AfCFTA, OHADA, CEMAC, ECCAS, the Lake Chad Basin Commission, the Niger Basin Authority and COMIFAC. It is not a member of WAEMU, ECOWAS or COMESA.',
    },
    disclaimerRefs: { fr: 'Constitution de la République du Tchad', en: 'Constitution of the Republic of Chad' },
    summary: {
        fr: "OHADA, CEMAC (Cour de justice à N'Djamena), CEEAC, CBLT : huit organisations régionales, et un droit communautaire qui prime la loi.",
        en: "OHADA, CEMAC (Court of Justice in N'Djamena), ECCAS, LCBC: eight regional organizations, and community law that prevails over statute.",
    },
});
