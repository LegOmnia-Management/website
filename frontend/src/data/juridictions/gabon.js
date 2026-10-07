/**
 * Page juridiction : Gabon (gabarit CEMAC, voir cemacCountry.js).
 * Cadre constitutionnel présenté de façon factuelle et sobre (choix éditorial).
 */
import { buildCemacPage } from './cemacCountry';
import { ORGS, TRAPS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildCemacPage({
    iso: 'GAB', flag: 'ga', supportSlug: 'gabon',
    name: { fr: 'Gabon', en: 'Gabon' },
    le: { fr: 'le Gabon', en: 'Gabon' }, Le: { fr: 'Le Gabon', en: 'Gabon' },
    de: { fr: 'du Gabon' }, possessive: { en: "Gabon's" },
    au: { fr: 'au Gabon', en: 'in Gabon' }, pronoun: { fr: 'il' },
    adj: { fr: 'gabonais', en: 'Gabonese' }, adjFem: 'gabonaise',
    titlePrefix: { fr: 'Le droit au', en: 'Law in' },
    seoDescription: {
        fr: "Droit gabonais : membre fondateur de l'OHADA, de la CEMAC et de la CEEAC (siège à Libreville), hiérarchie des normes et place des traités. Carte interactive et quiz.",
        en: 'Gabonese law: founding member of OHADA, CEMAC and ECCAS (headquartered in Libreville), hierarchy of norms and status of treaties. Interactive map and quiz.',
    },
    intro: {
        fr: "Membre fondateur de l'OHADA et de la CEMAC, et pays du siège de la Communauté économique des États de l'Afrique centrale, le Gabon combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de la CEMAC. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'A founding member of OHADA and CEMAC, and host country of the Economic Community of Central African States, Gabon combines civil-law national legislation, uniform OHADA law and CEMAC community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Libreville', en: 'Libreville' } },
        { label: { fr: 'Langue officielle', en: 'Official language' }, value: { fr: 'Français', en: 'French' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Droit civiliste (droit écrit)', en: 'Civil law (codified law)' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: 'Adoptée par référendum en 2024', en: 'Adopted by referendum in 2024' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, membre fondateur', en: 'OHADA, founding member' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: "Cour constitutionnelle, Cour de cassation, Conseil d'État, Cour des comptes", en: 'Constitutional Court, Court of Cassation, Council of State, Court of Auditors' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XAF), émis par la BEAC', en: 'CFA franc (XAF), issued by the BEAC' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "6, dont l'UA et la ZLECAf", en: '6, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de six organisations, le Gabon relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (CEMAC), intégration régionale (CEEAC, dont il accueille le siège) et coopération forestière (COMIFAC).",
        en: 'A member of six organizations, Gabon is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (CEMAC), regional integration (ECCAS, which it hosts) and forest cooperation (COMIFAC).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour de cassation gabonaise.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Gabonese Court of Cassation.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions gabonaises appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Gabonese decisions applying the Uniform Acts.'),
            }),
            ORGS.CEMAC(lang, { membership: t('membre fondateur (1994)', 'founding member (1994)') }),
            ORGS.CEEAC(lang, { membership: t('membre fondateur (1983) ; pays du siège', 'founding member (1983); host country'), law: LAW }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang),
            ORGS.COMIFAC(lang, { membership: t('État membre', 'member state'), law: LAW }),
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            { id: 'UEMOA', sig: t('UEMOA', 'WAEMU'), text: t("Union économique et monétaire ouest-africaine. Elle utilise elle aussi un franc CFA, mais émis par la BCEAO : le Gabon relève de la CEMAC et de la BEAC.", 'West African Economic and Monetary Union. It also uses a CFA franc, but one issued by the BCEAO: Gabon belongs to CEMAC and the BEAC.') },
            { id: 'CEDEAO', sig: t('CEDEAO', 'ECOWAS'), text: t("Communauté économique des États de l'Afrique de l'Ouest, à distinguer de la CEEAC, son équivalent pour l'Afrique centrale.", 'Economic Community of West African States, to be distinguished from ECCAS, its Central African counterpart.') },
            TRAPS.ENTENTE(lang, t('Le Gabon', 'Gabon')),
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Cameroun, le Congo et la Guinée équatoriale, voisins du Gabon, partagent par exemple avec lui les quatre organisations sous-régionales dont il est membre.',
        en: 'These overlapping memberships create sometimes competing obligations. Cameroon, Congo and Equatorial Guinea, Gabon\'s neighbours, for example share all four of its sub-regional organizations.',
    },
    supremeCourt: { fr: 'la Cour de cassation gabonaise', en: 'the Gabonese Court of Cassation' },
    constitutionalCourt: { fr: 'Cour constitutionnelle', en: 'Constitutional Court' },
    adminCourt: { fr: "Conseil d'État", en: 'Council of State' },
    constitution: { fr: 'La Constitution, adoptée par référendum en 2024,', en: 'The Constitution, adopted by referendum in 2024,' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: 'UA, ZLECAf, CEEAC, COMIFAC', en: 'AU, AfCFTA, ECCAS, COMIFAC' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'An award made under the CCJA institutional arbitration must be enforced in Gabon. Who grants exequatur?', o: ['The Gabonese judge', 'The CCJA'], a: 1, e: 'For arbitration administered by the CCJA, exequatur is granted by the CCJA itself (Treaty, art. 25) and is valid in all member states.' }
        : { q: "Une sentence rendue dans le cadre de l'arbitrage institutionnel de la CCJA doit être exécutée au Gabon. Qui accorde l'exequatur ?", o: ['Le juge gabonais', 'La CCJA'], a: 1, e: "Pour l'arbitrage organisé par la CCJA, l'exequatur est accordé par la CCJA elle-même (art. 25 du Traité) et vaut dans tous les États parties." }),
    quizSpecific: (lang) => (lang === 'en' ? [
        { q: 'Which regional organization is headquartered in Libreville?', o: ['CEMAC', 'ECCAS', 'COMIFAC', 'OHADA'], a: 1, e: 'Libreville hosts the headquarters of the Economic Community of Central African States (ECCAS).' },
        { q: 'Which court sits at the top of the Gabonese administrative order?', o: ['The Constitutional Court', 'The Court of Cassation', 'The Council of State', 'The Court of Auditors'], a: 2, e: 'The Council of State heads the administrative courts; it reviews the legality of regulatory acts.' },
        { q: 'What is the forest cooperation body of the Congo Basin countries, of which Gabon is a member?', o: ['CBLT', 'COMIFAC', 'OMVS', 'CEPGL'], a: 1, e: 'The Central African Forests Commission (COMIFAC), headquartered in Yaoundé, brings together ten Congo Basin states.' },
    ] : [
        { q: 'Quelle organisation régionale a son siège à Libreville ?', o: ['La CEMAC', 'La CEEAC', 'La COMIFAC', "L'OHADA"], a: 1, e: "Libreville accueille le siège de la Communauté économique des États de l'Afrique centrale (CEEAC)." },
        { q: "Quelle juridiction se trouve au sommet de l'ordre administratif gabonais ?", o: ['La Cour constitutionnelle', 'La Cour de cassation', "Le Conseil d'État", 'La Cour des comptes'], a: 2, e: "Le Conseil d'État coiffe l'ordre administratif ; il contrôle la légalité des actes réglementaires." },
        { q: 'Quelle organisation coordonne les politiques forestières des pays du bassin du Congo ?', o: ['La CBLT', 'La COMIFAC', "L'OMVS", 'La CEPGL'], a: 1, e: "La Commission des forêts d'Afrique centrale (COMIFAC), qui siège à Yaoundé, réunit dix États du bassin du Congo, dont le Gabon." },
    ]),
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is the status of international treaties in Gabonese law?', a: 'The Constitution gives duly ratified and published treaties authority superior to statutes, provided the other party applies them. OHADA law and CEMAC law, being directly applicable, also prevail over conflicting domestic law.' },
    ] : [
        { q: 'Quelle est la place des traités internationaux dans le droit gabonais ?', a: "La Constitution reconnaît aux traités régulièrement ratifiés et publiés une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Le droit OHADA et le droit de la CEMAC, directement applicables, priment en outre le droit interne contraire." },
    ]),
    orgsList: {
        fr: "Le Gabon est membre de six organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEMAC, la CEEAC (dont il accueille le siège) et la COMIFAC. Il n'est membre ni de l'UEMOA, ni de la CEDEAO.",
        en: 'Gabon is a member of six organizations: the African Union, the AfCFTA, OHADA, CEMAC, ECCAS (which it hosts) and COMIFAC. It is not a member of WAEMU or ECOWAS.',
    },
    disclaimerRefs: { fr: 'Constitution de la République gabonaise', en: 'Constitution of the Gabonese Republic' },
    summary: {
        fr: 'OHADA, CEMAC, CEEAC (siège à Libreville), COMIFAC : six organisations régionales, et un droit communautaire qui prime la loi.',
        en: 'OHADA, CEMAC, ECCAS (headquartered in Libreville), COMIFAC: six regional organizations, and community law that prevails over statute.',
    },
});
