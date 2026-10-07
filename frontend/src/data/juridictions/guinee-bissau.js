/**
 * Page juridiction : Guinée-Bissau (gabarit UEMOA, voir cemacCountry.js).
 * Cadre constitutionnel présenté de façon factuelle et sobre (choix éditorial).
 */
import { buildUemoaPage } from './cemacCountry';
import { ORGS, TRAPS, QUIZ } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildUemoaPage({
    iso: 'GNB', flag: 'gw', supportSlug: 'guinee-bissau',
    name: { fr: 'Guinée-Bissau', en: 'Guinea-Bissau' },
    le: { fr: 'la Guinée-Bissau', en: 'Guinea-Bissau' }, Le: { fr: 'La Guinée-Bissau', en: 'Guinea-Bissau' },
    de: { fr: 'de la Guinée-Bissau' }, possessive: { en: "Guinea-Bissau's" },
    au: { fr: 'en Guinée-Bissau', en: 'in Guinea-Bissau' }, pronoun: { fr: 'elle' },
    adj: { fr: 'bissau-guinéen', en: 'Bissau-Guinean' }, adjFem: 'bissau-guinéenne',
    titlePrefix: { fr: 'Le droit en', en: 'Law in' },
    seoDescription: {
        fr: "Droit bissau-guinéen : OHADA, UEMOA, CEDEAO, OMVG, hiérarchie des normes et place des traités. Un État lusophone de l'espace OHADA. Carte interactive et quiz.",
        en: 'Bissau-Guinean law: OHADA, WAEMU, ECOWAS, OMVG, hierarchy of norms and status of treaties. A Portuguese-speaking state in the OHADA area. Interactive map and quiz.',
    },
    intro: {
        fr: "Seul État lusophone de l'UEMOA, membre de l'OHADA et de la CEDEAO, la Guinée-Bissau combine un droit national d'inspiration civiliste, hérité de la tradition portugaise, le droit uniforme OHADA et le droit communautaire de l'UEMOA. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'The only Portuguese-speaking WAEMU state, and a member of OHADA and ECOWAS, Guinea-Bissau combines civil-law national legislation inherited from the Portuguese tradition, uniform OHADA law and WAEMU community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Bissau', en: 'Bissau' } },
        { label: { fr: 'Langue officielle', en: 'Official language' }, value: { fr: 'Portugais', en: 'Portuguese' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: "Droit civiliste d'inspiration portugaise", en: 'Civil law of Portuguese inspiration' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: '1984, plusieurs fois révisée', en: '1984, amended several times' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, État membre', en: 'OHADA, member state' } },
        { label: { fr: 'Haute juridiction', en: 'Highest court' }, value: { fr: 'Cour suprême de justice', en: 'Supreme Court of Justice' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XOF), émis par la BCEAO', en: 'CFA franc (XOF), issued by the BCEAO' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "6, dont l'UA et la ZLECAf", en: '6, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de six organisations, la Guinée-Bissau relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (UEMOA), intégration régionale (CEDEAO) et gestion partagée du fleuve Gambie et des fleuves voisins (OMVG).",
        en: 'A member of six organizations, Guinea-Bissau is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (WAEMU), regional integration (ECOWAS) and shared management of the Gambia and neighbouring rivers (OMVG).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('État membre', 'member state'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême de justice de Guinée-Bissau.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Justice of Guinea-Bissau.'),
                data: t("Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions bissau-guinéennes appliquant les Actes uniformes, disponibles en portugais, l'une des langues de travail de l'OHADA.", 'Foundation of the LegOmnia database under construction: CCJA case law and Bissau-Guinean decisions applying the Uniform Acts, available in Portuguese, one of the OHADA working languages.'),
            }),
            ORGS.UEMOA(lang, { membership: t('membre (depuis 1997)', 'member (since 1997)') }),
            ORGS.CEDEAO(lang, { membership: t('membre fondateur (1975)', 'founding member (1975)'), law: LAW }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang, { uemoa: true }),
            ORGS.OMVG(lang, { membership: t('État membre', 'member state'), law: LAW }),
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            TRAPS.CEMAC_CFA(lang, t('la Guinée-Bissau', 'Guinea-Bissau')),
            { id: 'ZMAO', sig: t('ZMAO', 'WAMZ'), text: t("Zone monétaire de l'Afrique de l'Ouest, qui réunit six États de la CEDEAO hors franc CFA, dont la Guinée voisine. La Guinée-Bissau n'en fait pas partie : elle utilise le franc CFA.", 'West African Monetary Zone, bringing together six ECOWAS states outside the CFA franc, including neighbouring Guinea. Guinea-Bissau is not a member: it uses the CFA franc.') },
            { id: 'OMVS', sig: 'OMVS', text: t("Organisation pour la mise en valeur du fleuve Sénégal, à distinguer de l'OMVG, dont la Guinée-Bissau est membre.", 'Senegal River Basin Development Organization, to be distinguished from the OMVG, of which Guinea-Bissau is a member.') },
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Sénégal partage par exemple avec la Guinée-Bissau les quatre organisations sous-régionales dont elle est membre. La ZLECAf vise à rationaliser cet enchevêtrement.',
        en: "These overlapping memberships create sometimes competing obligations. Senegal, for example, shares all four of Guinea-Bissau's sub-regional organizations. The AfCFTA aims to rationalise this tangle.",
    },
    supremeCourt: { fr: 'la Cour suprême de justice de Guinée-Bissau', en: 'the Supreme Court of Justice of Guinea-Bissau' },
    constitutionalCourt: { fr: 'Cour suprême de justice', en: 'Supreme Court of Justice' },
    adminCourt: { fr: 'juridictions administratives, Cour suprême de justice', en: 'administrative courts, Supreme Court of Justice' },
    constitution: { fr: 'La Constitution de 1984, plusieurs fois révisée,', en: 'The Constitution of 1984, amended several times,' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: 'UA, ZLECAf, CEDEAO, OMVG', en: 'AU, AfCFTA, ECOWAS, OMVG' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'An award made under the CCJA institutional arbitration must be enforced in Guinea-Bissau. Who grants exequatur?', o: ['The national judge', 'The CCJA'], a: 1, e: 'For arbitration administered by the CCJA, exequatur is granted by the CCJA itself (Treaty, art. 25) and is valid in all member states.' }
        : { q: "Une sentence rendue dans le cadre de l'arbitrage institutionnel de la CCJA doit être exécutée en Guinée-Bissau. Qui accorde l'exequatur ?", o: ['Le juge national', 'La CCJA'], a: 1, e: "Pour l'arbitrage organisé par la CCJA, l'exequatur est accordé par la CCJA elle-même (art. 25 du Traité) et vaut dans tous les États parties." }),
    quizSpecific: (lang) => [
        lang === 'en'
            ? { q: 'What is the official language of Guinea-Bissau?', o: ['French', 'English', 'Portuguese', 'Spanish'], a: 2, e: 'Portuguese is the official language; Guinea-Bissau is the only Portuguese-speaking WAEMU state.' }
            : { q: 'Quelle est la langue officielle de la Guinée-Bissau ?', o: ['Le français', "L'anglais", 'Le portugais', "L'espagnol"], a: 2, e: "Le portugais est la langue officielle ; la Guinée-Bissau est le seul État lusophone de l'UEMOA." },
        lang === 'en'
            ? { q: 'Which of these is NOT a working language of OHADA?', o: ['French', 'Portuguese', 'Spanish', 'Arabic'], a: 3, e: "OHADA's working languages are French, English, Spanish and Portuguese." }
            : { q: "Laquelle de ces langues n'est PAS une langue de travail de l'OHADA ?", o: ['Le français', 'Le portugais', "L'espagnol", "L'arabe"], a: 3, e: "Les langues de travail de l'OHADA sont le français, l'anglais, l'espagnol et le portugais." },
        lang === 'en'
            ? { q: 'In which year did Guinea-Bissau join WAEMU?', o: ['1994', '1997', '2005', '2012'], a: 1, e: 'Guinea-Bissau joined WAEMU in 1997, three years after it was created.' }
            : { q: "En quelle année la Guinée-Bissau a-t-elle rejoint l'UEMOA ?", o: ['1994', '1997', '2005', '2012'], a: 1, e: "La Guinée-Bissau a rejoint l'UEMOA en 1997, trois ans après sa création." },
        lang === 'en'
            ? { q: 'The OMVG brings together Guinea-Bissau, Senegal, Guinea and…', o: ['Mali', 'Gambia', 'Mauritania', 'Sierra Leone'], a: 1, e: 'Gambia completes the Gambia River Basin Development Organization.' }
            : { q: "L'OMVG réunit la Guinée-Bissau, le Sénégal, la Guinée et…", o: ['Le Mali', 'La Gambie', 'La Mauritanie', 'La Sierra Leone'], a: 1, e: "La Gambie complète l'Organisation pour la mise en valeur du fleuve Gambie." },
        QUIZ.cedeaoCourt(lang),
    ],
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'Is OHADA law available in Portuguese?', a: "Yes. Since the revision of the OHADA Treaty in 2008, OHADA's working languages are French, English, Spanish and Portuguese, which allows Uniform Acts to be published in Portuguese for Guinea-Bissau." },
    ] : [
        { q: "Le droit OHADA est-il disponible en portugais ?", a: "Oui. Depuis la révision du Traité OHADA en 2008, les langues de travail de l'OHADA sont le français, l'anglais, l'espagnol et le portugais, ce qui permet la publication des Actes uniformes en portugais pour la Guinée-Bissau." },
    ]),
    orgsList: {
        fr: "La Guinée-Bissau est membre de six organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEDEAO, l'UEMOA et l'OMVG. Elle n'est membre ni de la CEMAC, ni de la ZMAO, ni de l'OMVS.",
        en: 'Guinea-Bissau is a member of six organizations: the African Union, the AfCFTA, OHADA, ECOWAS, WAEMU and the OMVG. It is not a member of CEMAC, the WAMZ or the OMVS.',
    },
    disclaimerRefs: { fr: 'Constitution de la République de Guinée-Bissau', en: 'Constitution of the Republic of Guinea-Bissau' },
    ohadaFounding: false,
    summary: {
        fr: "OHADA, UEMOA, CEDEAO, OMVG : six organisations régionales, et le seul État lusophone de l'UEMOA.",
        en: 'OHADA, WAEMU, ECOWAS, OMVG: six regional organizations, and the only Portuguese-speaking WAEMU state.',
    },
});
