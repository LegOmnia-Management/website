/**
 * Page juridiction : Centrafrique (gabarit CEMAC, voir cemacCountry.js).
 * Cadre constitutionnel présenté de façon factuelle et sobre (choix éditorial).
 */
import { buildCemacPage } from './cemacCountry';
import { ORGS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildCemacPage({
    iso: 'CAF', flag: 'cf', supportSlug: 'centrafrique',
    name: { fr: 'Centrafrique', en: 'Central African Republic' },
    le: { fr: 'la Centrafrique', en: 'the Central African Republic' }, Le: { fr: 'La Centrafrique', en: 'The Central African Republic' },
    de: { fr: 'de la Centrafrique' }, possessive: { en: "the Central African Republic's" },
    au: { fr: 'en Centrafrique', en: 'in the Central African Republic' }, pronoun: { fr: 'elle' },
    adj: { fr: 'centrafricain', en: 'Central African' }, adjFem: 'centrafricaine',
    titlePrefix: { fr: 'Le droit en', en: 'Law in the' },
    seoDescription: {
        fr: "Droit centrafricain : membre fondateur de l'OHADA, siège de la Commission de la CEMAC à Bangui, CEEAC, hiérarchie des normes et place des traités. Carte interactive et quiz.",
        en: 'Central African law: founding member of OHADA, seat of the CEMAC Commission in Bangui, ECCAS, hierarchy of norms and status of treaties. Interactive map and quiz.',
    },
    intro: {
        fr: "Membre fondateur de l'OHADA et de la CEMAC, dont la Commission siège à Bangui, la Centrafrique combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de la CEMAC. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'A founding member of OHADA and CEMAC, whose Commission sits in Bangui, the Central African Republic combines civil-law national legislation, uniform OHADA law and CEMAC community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Bangui', en: 'Bangui' } },
        { label: { fr: 'Langues officielles', en: 'Official languages' }, value: { fr: 'Français et sango', en: 'French and Sango' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Droit civiliste (droit écrit)', en: 'Civil law (codified law)' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: 'Adoptée par référendum en 2023', en: 'Adopted by referendum in 2023' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, membre fondateur', en: 'OHADA, founding member' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: "Cour constitutionnelle, Cour de cassation, Conseil d'État, Cour des comptes", en: 'Constitutional Court, Court of Cassation, Council of State, Court of Auditors' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XAF), émis par la BEAC', en: 'CFA franc (XAF), issued by the BEAC' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "7, dont l'UA et la ZLECAf", en: '7, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de sept organisations, la Centrafrique relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (CEMAC, dont elle accueille la Commission), intégration régionale (CEEAC) et gestion partagée des ressources naturelles (lac Tchad, forêts du bassin du Congo).",
        en: 'A member of seven organizations, the Central African Republic is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (CEMAC, whose Commission it hosts), regional integration (ECCAS) and shared management of natural resources (Lake Chad, the Congo Basin forests).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour de cassation centrafricaine.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Central African Court of Cassation.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions centrafricaines appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Central African decisions applying the Uniform Acts.'),
            }),
            ORGS.CEMAC(lang, { membership: t('membre fondateur (1994) ; siège de la Commission', 'founding member (1994); seat of the Commission') }),
            ORGS.CEEAC(lang, { membership: t('membre fondateur (1983)', 'founding member (1983)'), law: LAW }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang),
            ORGS.CBLT(lang, { membership: t('État membre', 'member state'), law: LAW }),
            ORGS.COMIFAC(lang, { membership: t('État membre', 'member state'), law: LAW }),
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            { id: 'UEMOA', sig: t('UEMOA', 'WAEMU'), text: t("Union économique et monétaire ouest-africaine. Elle utilise elle aussi un franc CFA, mais émis par la BCEAO : la Centrafrique relève de la CEMAC et de la BEAC.", 'West African Economic and Monetary Union. It also uses a CFA franc, but one issued by the BCEAO: the Central African Republic belongs to CEMAC and the BEAC.') },
            { id: 'COMESA', sig: 'COMESA', text: t("Marché commun de l'Afrique orientale et australe, dont le Soudan et la RDC voisins sont membres. La Centrafrique n'en fait pas partie.", 'Common Market for Eastern and Southern Africa, of which neighbouring Sudan and the DRC are members. The Central African Republic is not.') },
            { id: 'EAC', sig: 'EAC', text: t("Communauté d'Afrique de l'Est, dont le Soudan du Sud et la RDC voisins sont membres. La Centrafrique n'en fait pas partie.", 'East African Community, of which neighbouring South Sudan and the DRC are members. The Central African Republic is not.') },
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Cameroun et le Tchad partagent par exemple cinq organisations sous-régionales avec la Centrafrique. La ZLECAf vise à rationaliser cet enchevêtrement.',
        en: 'These overlapping memberships create sometimes competing obligations. Cameroon and Chad, for example, share five sub-regional organizations with the Central African Republic. The AfCFTA aims to rationalise this tangle.',
    },
    supremeCourt: { fr: 'la Cour de cassation centrafricaine', en: 'the Central African Court of Cassation' },
    constitutionalCourt: { fr: 'Cour constitutionnelle', en: 'Constitutional Court' },
    adminCourt: { fr: "Conseil d'État", en: 'Council of State' },
    constitution: { fr: 'La Constitution, adoptée par référendum en 2023,', en: 'The Constitution, adopted by referendum in 2023,' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: 'UA, ZLECAf, CEEAC, CBLT, COMIFAC', en: 'AU, AfCFTA, ECCAS, LCBC, COMIFAC' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'A CEMAC directive has not yet been transposed in the Central African Republic. Can it replace national law on its own?', o: ['Yes, like a regulation', 'No, it must be transposed'], a: 1, e: 'Unlike regulations, CEMAC directives set objectives that each state must transpose into its own law.' }
        : { q: "Une directive de la CEMAC n'a pas encore été transposée en Centrafrique. Peut-elle remplacer d'elle-même la loi nationale ?", o: ['Oui, comme un règlement', 'Non, elle doit être transposée'], a: 1, e: 'Contrairement aux règlements, les directives de la CEMAC fixent des objectifs que chaque État doit transposer dans son droit.' }),
    quizSpecific: (lang) => (lang === 'en' ? [
        { q: 'What are the official languages of the Central African Republic?', o: ['French and Arabic', 'French and Sango', 'French and Lingala', 'French only'], a: 1, e: 'French and Sango are the two official languages.' },
        { q: 'Which CEMAC institution is based in Bangui?', o: ['The BEAC', 'The Court of Justice', 'The Commission', 'The Parliament'], a: 2, e: 'The CEMAC Commission sits in Bangui; the BEAC is in Yaoundé and the Court of Justice in N\'Djamena.' },
        { q: 'Which basin commission does the Central African Republic belong to?', o: ['The Lake Chad Basin Commission', 'The OMVS', 'The OMVG', 'The Mano River Union'], a: 0, e: 'The Central African Republic is a member of the Lake Chad Basin Commission, headquartered in N\'Djamena.' },
    ] : [
        { q: 'Quelles sont les langues officielles de la Centrafrique ?', o: ['Français et arabe', 'Français et sango', 'Français et lingala', 'Français seulement'], a: 1, e: 'Le français et le sango sont les deux langues officielles.' },
        { q: 'Quelle institution de la CEMAC siège à Bangui ?', o: ['La BEAC', 'La Cour de justice', 'La Commission', 'Le Parlement'], a: 2, e: "La Commission de la CEMAC siège à Bangui ; la BEAC est à Yaoundé et la Cour de justice à N'Djamena." },
        { q: 'De quelle commission de bassin la Centrafrique est-elle membre ?', o: ['La Commission du bassin du lac Tchad', "L'OMVS", "L'OMVG", "L'Union du fleuve Mano"], a: 0, e: "La Centrafrique est membre de la Commission du bassin du lac Tchad, qui siège à N'Djamena." },
    ]),
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is the status of international treaties in Central African law?', a: 'The Constitution gives duly ratified and published treaties authority superior to statutes, provided the other party applies them. OHADA law and CEMAC law, being directly applicable, also prevail over conflicting domestic law.' },
    ] : [
        { q: 'Quelle est la place des traités internationaux dans le droit centrafricain ?', a: "La Constitution reconnaît aux traités régulièrement ratifiés et publiés une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Le droit OHADA et le droit de la CEMAC, directement applicables, priment en outre le droit interne contraire." },
    ]),
    orgsList: {
        fr: "La Centrafrique est membre de sept organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEMAC (dont elle accueille la Commission), la CEEAC, la Commission du bassin du lac Tchad et la COMIFAC. Elle n'est membre ni de l'UEMOA, ni du COMESA, ni de l'EAC.",
        en: 'The Central African Republic is a member of seven organizations: the African Union, the AfCFTA, OHADA, CEMAC (whose Commission it hosts), ECCAS, the Lake Chad Basin Commission and COMIFAC. It is not a member of WAEMU, COMESA or the EAC.',
    },
    disclaimerRefs: { fr: 'Constitution de la République centrafricaine', en: 'Constitution of the Central African Republic' },
    summary: {
        fr: 'OHADA, CEMAC (Commission à Bangui), CEEAC, CBLT, COMIFAC : sept organisations régionales, et un droit communautaire qui prime la loi.',
        en: 'OHADA, CEMAC (Commission in Bangui), ECCAS, LCBC, COMIFAC: seven regional organizations, and community law that prevails over statute.',
    },
});
