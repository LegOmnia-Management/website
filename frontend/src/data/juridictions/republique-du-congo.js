/**
 * Page juridiction : République du Congo (gabarit CEMAC, voir cemacCountry.js).
 */
import { buildCemacPage } from './cemacCountry';
import { ORGS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildCemacPage({
    iso: 'COG', flag: 'cg', supportSlug: 'republique-du-congo',
    name: { fr: 'République du Congo', en: 'Republic of the Congo' },
    titleCountry: { fr: 'République du Congo', en: 'Republic of the Congo' },
    le: { fr: 'la République du Congo', en: 'the Republic of the Congo' }, Le: { fr: 'La République du Congo', en: 'The Republic of the Congo' },
    de: { fr: 'de la République du Congo' }, possessive: { en: "the Republic of the Congo's" },
    au: { fr: 'en République du Congo', en: 'in the Republic of the Congo' }, pronoun: { fr: 'elle' },
    adj: { fr: 'congolais', en: 'Congolese' }, adjFem: 'congolaise',
    titlePrefix: { fr: 'Le droit en', en: 'Law in the' },
    seoDescription: {
        fr: "Droit de la République du Congo (Brazzaville) : membre fondateur de l'OHADA, de la CEMAC et de la CEEAC, hiérarchie des normes et place des traités. Carte interactive et quiz.",
        en: 'Law of the Republic of the Congo (Brazzaville): founding member of OHADA, CEMAC and ECCAS, hierarchy of norms and status of treaties. Interactive map and quiz.',
    },
    intro: {
        fr: "Membre fondateur de l'OHADA, de la CEMAC et de la CEEAC, la République du Congo (Brazzaville) combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de la CEMAC. À ne pas confondre avec sa voisine, la République démocratique du Congo, qui relève d'organisations en partie différentes.",
        en: 'A founding member of OHADA, CEMAC and ECCAS, the Republic of the Congo (Brazzaville) combines civil-law national legislation, uniform OHADA law and CEMAC community law. Not to be confused with its neighbour, the Democratic Republic of the Congo, which belongs to partly different organizations.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Brazzaville', en: 'Brazzaville' } },
        { label: { fr: 'Langue officielle', en: 'Official language' }, value: { fr: 'Français', en: 'French' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Droit civiliste (droit écrit)', en: 'Civil law (codified law)' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: 'Adoptée par référendum en octobre 2015', en: 'Adopted by referendum in October 2015' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, membre fondateur', en: 'OHADA, founding member' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: 'Cour constitutionnelle, Cour suprême, Cour des comptes et de discipline budgétaire', en: 'Constitutional Court, Supreme Court, Court of Auditors and Budgetary Discipline' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XAF), émis par la BEAC', en: 'CFA franc (XAF), issued by the BEAC' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "6, dont l'UA et la ZLECAf", en: '6, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de six organisations, la République du Congo relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (CEMAC), intégration régionale (CEEAC) et coopération forestière (COMIFAC).",
        en: 'A member of six organizations, the Republic of the Congo is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (CEMAC), regional integration (ECCAS) and forest cooperation (COMIFAC).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême du Congo.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of the Congo.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions congolaises appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Congolese decisions applying the Uniform Acts.'),
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
            { id: 'COMESA', sig: 'COMESA', text: t("Marché commun de l'Afrique orientale et australe. Confusion fréquente entre les deux Congo : la RDC voisine en est membre, pas la République du Congo.", 'Common Market for Eastern and Southern Africa. A frequent confusion between the two Congos: the neighbouring DRC is a member, the Republic of the Congo is not.') },
            { id: 'UEMOA', sig: t('UEMOA', 'WAEMU'), text: t("Union économique et monétaire ouest-africaine. Elle utilise elle aussi un franc CFA, mais émis par la BCEAO : la République du Congo relève de la CEMAC et de la BEAC.", 'West African Economic and Monetary Union. It also uses a CFA franc, but one issued by the BCEAO: the Republic of the Congo belongs to CEMAC and the BEAC.') },
            { id: 'SADC', sig: 'SADC', text: t("Communauté de développement de l'Afrique australe, dont la RDC voisine est membre. La République du Congo n'en fait pas partie.", 'Southern African Development Community, of which the neighbouring DRC is a member. The Republic of the Congo is not.') },
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Cameroun, le Gabon, la Centrafrique, la Guinée équatoriale et le Tchad partagent par exemple avec la République du Congo les quatre organisations sous-régionales dont elle est membre ; la RDC voisine en partage trois.',
        en: 'These overlapping memberships create sometimes competing obligations. Cameroon, Gabon, the Central African Republic, Equatorial Guinea and Chad, for example, share all four of its sub-regional organizations with the Republic of the Congo; the neighbouring DRC shares three.',
    },
    supremeCourt: { fr: 'la Cour suprême du Congo', en: 'the Supreme Court of the Congo' },
    constitutionalCourt: { fr: 'Cour constitutionnelle', en: 'Constitutional Court' },
    adminCourt: { fr: 'juridictions administratives, Cour suprême', en: 'administrative courts, Supreme Court' },
    constitution: { fr: 'La Constitution, adoptée par référendum en octobre 2015,', en: 'The Constitution, adopted by referendum in October 2015,' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: 'UA, ZLECAf, CEEAC, COMIFAC', en: 'AU, AfCFTA, ECCAS, COMIFAC' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'An old provision of national law conflicts with the Uniform Act on general commercial law.', o: ['The national provision', 'The OHADA Uniform Act'], a: 1, e: 'The Uniform Act repeals and replaces conflicting domestic provisions, whether earlier or later.' }
        : { q: "Une disposition ancienne du droit national contredit l'Acte uniforme relatif au droit commercial général.", o: ['La disposition nationale', "L'Acte uniforme OHADA"], a: 1, e: "L'Acte uniforme abroge et remplace les dispositions internes contraires, qu'elles soient antérieures ou postérieures." }),
    quizSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is the capital of the Republic of the Congo?', o: ['Kinshasa', 'Brazzaville', 'Pointe-Noire', 'Libreville'], a: 1, e: 'Brazzaville is the capital of the Republic of the Congo; Kinshasa, on the other bank of the river, is the capital of the DRC.' },
        { q: 'Which of these organizations counts the DRC, but NOT the Republic of the Congo, among its members?', o: ['ECCAS', 'OHADA', 'COMESA', 'COMIFAC'], a: 2, e: 'The DRC is a member of COMESA (and SADC); the Republic of the Congo is not.' },
        { q: 'When was the current Constitution adopted?', o: ['1963', '1992', 'October 2015', '2022'], a: 2, e: 'The current Constitution was adopted by referendum in October 2015.' },
    ] : [
        { q: 'Quelle est la capitale de la République du Congo ?', o: ['Kinshasa', 'Brazzaville', 'Pointe-Noire', 'Libreville'], a: 1, e: "Brazzaville est la capitale de la République du Congo ; Kinshasa, sur l'autre rive du fleuve, est celle de la RDC." },
        { q: 'Laquelle de ces organisations compte la RDC, mais PAS la République du Congo, parmi ses membres ?', o: ['La CEEAC', "L'OHADA", 'Le COMESA', 'La COMIFAC'], a: 2, e: "La RDC est membre du COMESA (et de la SADC) ; la République du Congo ne l'est pas." },
        { q: 'De quand date la Constitution actuellement en vigueur ?', o: ['1963', '1992', 'Octobre 2015', '2022'], a: 2, e: 'La Constitution en vigueur a été adoptée par référendum en octobre 2015.' },
    ]),
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is the difference between the Republic of the Congo and the DRC?', a: 'They are two separate states on either side of the Congo River. The Republic of the Congo (Brazzaville) is a member of CEMAC and uses the Central African CFA franc; the Democratic Republic of the Congo (Kinshasa) is not a member of CEMAC, uses the Congolese franc and belongs to SADC, COMESA and the EAC. Both are members of OHADA and ECCAS.' },
    ] : [
        { q: 'Quelle différence entre la République du Congo et la RDC ?', a: "Ce sont deux États distincts, de part et d'autre du fleuve Congo. La République du Congo (Brazzaville) est membre de la CEMAC et utilise le franc CFA d'Afrique centrale ; la République démocratique du Congo (Kinshasa) n'est pas membre de la CEMAC, utilise le franc congolais et appartient à la SADC, au COMESA et à l'EAC. Toutes deux sont membres de l'OHADA et de la CEEAC." },
    ]),
    orgsList: {
        fr: "La République du Congo est membre de six organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEMAC, la CEEAC et la COMIFAC. Elle n'est membre ni du COMESA, ni de la SADC, ni de l'UEMOA.",
        en: 'The Republic of the Congo is a member of six organizations: the African Union, the AfCFTA, OHADA, CEMAC, ECCAS and COMIFAC. It is not a member of COMESA, SADC or WAEMU.',
    },
    disclaimerRefs: { fr: 'Constitution de la République du Congo', en: 'Constitution of the Republic of the Congo' },
    summary: {
        fr: 'OHADA, CEMAC, CEEAC, COMIFAC : six organisations régionales, et un droit communautaire qui prime la loi. À ne pas confondre avec la RDC.',
        en: 'OHADA, CEMAC, ECCAS, COMIFAC: six regional organizations, and community law that prevails over statute. Not to be confused with the DRC.',
    },
});
