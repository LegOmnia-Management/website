/**
 * Page juridiction : Guinée équatoriale (gabarit CEMAC, voir cemacCountry.js).
 */
import { buildCemacPage } from './cemacCountry';
import { ORGS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildCemacPage({
    iso: 'GNQ', flag: 'gq', supportSlug: 'guinee-equatoriale',
    name: { fr: 'Guinée équatoriale', en: 'Equatorial Guinea' },
    le: { fr: 'la Guinée équatoriale', en: 'Equatorial Guinea' }, Le: { fr: 'La Guinée équatoriale', en: 'Equatorial Guinea' },
    de: { fr: 'de la Guinée équatoriale' }, possessive: { en: "Equatorial Guinea's" },
    au: { fr: 'en Guinée équatoriale', en: 'in Equatorial Guinea' }, pronoun: { fr: 'elle' },
    adj: { fr: 'équato-guinéen', en: 'Equatorial Guinean' }, adjFem: 'équato-guinéenne',
    titlePrefix: { fr: 'Le droit en', en: 'Law in' },
    seoDescription: {
        fr: "Droit équato-guinéen : OHADA, CEMAC, CEEAC, hiérarchie des normes et place des traités. Le seul État hispanophone de l'espace OHADA. Carte interactive et quiz.",
        en: 'Equatorial Guinean law: OHADA, CEMAC, ECCAS, hierarchy of norms and status of treaties. The only Spanish-speaking state in the OHADA area. Interactive map and quiz.',
    },
    intro: {
        fr: "Seul État hispanophone de l'OHADA et membre de la CEMAC et de la CEEAC, la Guinée équatoriale combine un droit national d'inspiration civiliste, hérité de la tradition espagnole, le droit uniforme OHADA et le droit communautaire de la CEMAC. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'The only Spanish-speaking OHADA state, and a member of CEMAC and ECCAS, Equatorial Guinea combines civil-law national legislation inherited from the Spanish tradition, uniform OHADA law and CEMAC community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Malabo', en: 'Malabo' } },
        { label: { fr: 'Langues officielles', en: 'Official languages' }, value: { fr: 'Espagnol, français et portugais', en: 'Spanish, French and Portuguese' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: "Droit civiliste d'inspiration espagnole", en: 'Civil law of Spanish inspiration' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: '1991, révisée', en: '1991, amended' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, État membre', en: 'OHADA, member state' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: 'Tribunal constitutionnel, Cour suprême de justice', en: 'Constitutional Court, Supreme Court of Justice' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XAF), émis par la BEAC', en: 'CFA franc (XAF), issued by the BEAC' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "6, dont l'UA et la ZLECAf", en: '6, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de six organisations, la Guinée équatoriale relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (CEMAC), intégration régionale (CEEAC) et coopération forestière (COMIFAC).",
        en: 'A member of six organizations, Equatorial Guinea is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (CEMAC), regional integration (ECCAS) and forest cooperation (COMIFAC).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('État membre', 'member state'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême de justice de Guinée équatoriale.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Justice of Equatorial Guinea.'),
                data: t("Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions équato-guinéennes appliquant les Actes uniformes, disponibles en espagnol, l'une des langues de travail de l'OHADA.", 'Foundation of the LegOmnia database under construction: CCJA case law and Equatorial Guinean decisions applying the Uniform Acts, available in Spanish, one of the OHADA working languages.'),
            }),
            ORGS.CEMAC(lang, { membership: t('membre fondateur (1994)', 'founding member (1994)') }),
            ORGS.CEEAC(lang, { membership: t('membre fondateur (1983)', 'founding member (1983)'), law: LAW }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang),
            ORGS.COMIFAC(lang, { membership: t('État membre', 'member state'), law: LAW }),
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            { id: 'UEMOA', sig: t('UEMOA', 'WAEMU'), text: t("Union économique et monétaire ouest-africaine. Elle utilise elle aussi un franc CFA, mais émis par la BCEAO : la Guinée équatoriale relève de la CEMAC et de la BEAC.", 'West African Economic and Monetary Union. It also uses a CFA franc, but one issued by the BCEAO: Equatorial Guinea belongs to CEMAC and the BEAC.') },
            { id: 'CEDEAO', sig: t('CEDEAO', 'ECOWAS'), text: t("Communauté économique des États de l'Afrique de l'Ouest. À ne pas confondre : la Guinée et la Guinée-Bissau en sont membres, pas la Guinée équatoriale.", 'Economic Community of West African States. Not to be confused: Guinea and Guinea-Bissau are members, Equatorial Guinea is not.') },
            { id: 'EAC', sig: 'EAC', text: t("Communauté d'Afrique de l'Est, à distinguer de la CEEAC, dont la Guinée équatoriale est membre.", 'East African Community, to be distinguished from ECCAS, of which Equatorial Guinea is a member.') },
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Cameroun et le Gabon, ses voisins, partagent par exemple avec la Guinée équatoriale les quatre organisations sous-régionales dont elle est membre.',
        en: "These overlapping memberships create sometimes competing obligations. Cameroon and Gabon, its neighbours, for example share all four of Equatorial Guinea's sub-regional organizations.",
    },
    supremeCourt: { fr: 'la Cour suprême de justice de Guinée équatoriale', en: 'the Supreme Court of Justice of Equatorial Guinea' },
    constitutionalCourt: { fr: 'Tribunal constitutionnel', en: 'Constitutional Court' },
    adminCourt: { fr: 'Cour suprême de justice', en: 'Supreme Court of Justice' },
    constitution: { fr: 'La Constitution de 1991, révisée,', en: 'The Constitution of 1991, as amended,' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: 'UA, ZLECAf, CEEAC, COMIFAC', en: 'AU, AfCFTA, ECCAS, COMIFAC' },
    ohadaFounding: false,
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'An award made under the CCJA institutional arbitration must be enforced in Equatorial Guinea. Who grants exequatur?', o: ['The national judge', 'The CCJA'], a: 1, e: 'For arbitration administered by the CCJA, exequatur is granted by the CCJA itself (Treaty, art. 25) and is valid in all member states.' }
        : { q: "Une sentence rendue dans le cadre de l'arbitrage institutionnel de la CCJA doit être exécutée en Guinée équatoriale. Qui accorde l'exequatur ?", o: ['Le juge national', 'La CCJA'], a: 1, e: "Pour l'arbitrage organisé par la CCJA, l'exequatur est accordé par la CCJA elle-même (art. 25 du Traité) et vaut dans tous les États parties." }),
    quizSpecific: (lang) => (lang === 'en' ? [
        { q: 'Which language makes Equatorial Guinea unique within OHADA?', o: ['Portuguese', 'Spanish', 'English', 'Arabic'], a: 1, e: 'Equatorial Guinea is the only Spanish-speaking OHADA state; Spanish is one of the OHADA working languages.' },
        { q: 'What is the capital of Equatorial Guinea?', o: ['Bata', 'Malabo', 'Libreville', 'Douala'], a: 1, e: 'Malabo, on the island of Bioko, is the capital of Equatorial Guinea.' },
        { q: 'Not to be confused: which of these states is a member of CEMAC?', o: ['Guinea', 'Guinea-Bissau', 'Equatorial Guinea', 'Ghana'], a: 2, e: 'Equatorial Guinea is a member of CEMAC; Guinea and Guinea-Bissau are in West Africa.' },
    ] : [
        { q: "Quelle langue fait de la Guinée équatoriale un cas unique au sein de l'OHADA ?", o: ['Le portugais', "L'espagnol", "L'anglais", "L'arabe"], a: 1, e: "La Guinée équatoriale est le seul État hispanophone de l'OHADA ; l'espagnol est l'une des langues de travail de l'organisation." },
        { q: 'Quelle est la capitale de la Guinée équatoriale ?', o: ['Bata', 'Malabo', 'Libreville', 'Douala'], a: 1, e: "Malabo, sur l'île de Bioko, est la capitale de la Guinée équatoriale." },
        { q: 'Ne pas confondre : lequel de ces États est membre de la CEMAC ?', o: ['La Guinée', 'La Guinée-Bissau', 'La Guinée équatoriale', 'Le Ghana'], a: 2, e: "La Guinée équatoriale est membre de la CEMAC ; la Guinée et la Guinée-Bissau relèvent de l'Afrique de l'Ouest." },
    ]),
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'Is OHADA law available in Spanish?', a: "Yes. Since the revision of the OHADA Treaty in 2008, OHADA's working languages are French, English, Spanish and Portuguese, which allows Uniform Acts to be published in Spanish for Equatorial Guinea." },
    ] : [
        { q: "Le droit OHADA est-il disponible en espagnol ?", a: "Oui. Depuis la révision du Traité OHADA en 2008, les langues de travail de l'OHADA sont le français, l'anglais, l'espagnol et le portugais, ce qui permet la publication des Actes uniformes en espagnol pour la Guinée équatoriale." },
    ]),
    orgsList: {
        fr: "La Guinée équatoriale est membre de six organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEMAC, la CEEAC et la COMIFAC. Elle n'est membre ni de l'UEMOA, ni de la CEDEAO, ni de l'EAC.",
        en: 'Equatorial Guinea is a member of six organizations: the African Union, the AfCFTA, OHADA, CEMAC, ECCAS and COMIFAC. It is not a member of WAEMU, ECOWAS or the EAC.',
    },
    disclaimerRefs: { fr: 'Constitution de la République de Guinée équatoriale', en: 'Constitution of the Republic of Equatorial Guinea' },
    summary: {
        fr: "OHADA, CEMAC, CEEAC, COMIFAC : six organisations régionales, et le seul État hispanophone de l'espace OHADA.",
        en: 'OHADA, CEMAC, ECCAS, COMIFAC: six regional organizations, and the only Spanish-speaking state in the OHADA area.',
    },
});
