/**
 * Page juridiction : Niger (gabarit UEMOA, voir cemacCountry.js).
 * Rédaction factuelle et sobre sur le cadre institutionnel et les appartenances
 * régionales (choix éditorial) : pas de détail sur l'organisation juridictionnelle.
 */
import { buildUemoaPage } from './cemacCountry';
import { ORGS, TRAPS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildUemoaPage({
    iso: 'NER', flag: 'ne', supportSlug: 'niger',
    name: { fr: 'Niger', en: 'Niger' },
    le: { fr: 'le Niger', en: 'Niger' }, Le: { fr: 'Le Niger', en: 'Niger' },
    de: { fr: 'du Niger' }, possessive: { en: "Niger's" },
    au: { fr: 'au Niger', en: 'in Niger' }, pronoun: { fr: 'il' },
    adj: { fr: 'nigérien', en: 'Nigerien' }, adjFem: 'nigérienne',
    titlePrefix: { fr: 'Le droit au', en: 'Law in' },
    seoDescription: {
        fr: "Droit nigérien : membre fondateur de l'OHADA et de l'UEMOA, siège de l'Autorité du bassin du Niger, Commission du bassin du lac Tchad, hiérarchie des normes. Carte interactive et quiz.",
        en: 'Nigerien law: founding member of OHADA and WAEMU, seat of the Niger Basin Authority, Lake Chad Basin Commission, hierarchy of norms. Interactive map and quiz.',
    },
    intro: {
        fr: "Membre fondateur de l'OHADA et de l'UEMOA, et pays du siège de l'Autorité du bassin du Niger, le Niger combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de l'UEMOA. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'A founding member of OHADA and WAEMU, and host country of the Niger Basin Authority, Niger combines civil-law national legislation, uniform OHADA law and WAEMU community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Niamey', en: 'Niamey' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Droit civiliste (droit écrit)', en: 'Civil law (codified law)' } },
        { label: { fr: 'Cadre constitutionnel', en: 'Constitutional framework' }, value: { fr: 'Charte de la refondation (2025)', en: 'Refoundation Charter (2025)' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, membre fondateur', en: 'OHADA, founding member' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XOF), émis par la BCEAO', en: 'CFA franc (XOF), issued by the BCEAO' } },
        { label: { fr: 'Siège régional', en: 'Regional seat' }, value: { fr: 'Autorité du bassin du Niger (Niamey)', en: 'Niger Basin Authority (Niamey)' } },
        { label: { fr: 'Grand fleuve', en: 'Major river' }, value: { fr: 'Le Niger, qui traverse Niamey', en: 'The Niger, which flows through Niamey' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "8, dont l'UA et la ZLECAf", en: '8, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de huit organisations, le Niger relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (UEMOA), coopération entre voisins (Conseil de l'Entente, AES) et gestion partagée du fleuve Niger et du lac Tchad (ABN, CBLT).",
        en: 'A member of eight organizations, Niger is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (WAEMU), cooperation with its neighbours (Council of the Entente, AES) and shared management of the Niger River and Lake Chad (NBA, LCBC).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la juridiction nationale de cassation.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the national court of cassation.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions nigériennes appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Nigerien decisions applying the Uniform Acts.'),
            }),
            ORGS.UEMOA(lang, { membership: t('membre fondateur (1994)', 'founding member (1994)') }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang, { uemoa: true }),
            ORGS.ENTENTE(lang, { membership: t('membre fondateur (1959)', 'founding member (1959)'), law: LAW }),
            ORGS.ABN(lang, { membership: t('État membre ; pays du siège', 'member state; host country'), law: LAW }),
            ORGS.CBLT(lang, { membership: t('membre fondateur (1964)', 'founding member (1964)'), law: LAW }),
            {
                id: 'AES', sig: 'AES', members: 3,
                name: t('Confédération des États du Sahel', 'Confederation of Sahel States'),
                seat: '—', membership: t('membre fondateur', 'founding member'),
                approach: t('Confédération réunissant le Burkina Faso, le Mali et le Niger.', 'Confederation bringing together Burkina Faso, Mali and Niger.'),
                effect: t('Instruments soumis au régime général des traités.', 'Instruments subject to the general treaty regime.'),
                court: t('Pas de juridiction commune opérationnelle.', 'No operational common court.'),
                data: t('Corpus en cours de constitution.', 'A body of texts being built up.'),
            },
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            TRAPS.CEMAC_CFA(lang, t('le Niger', 'Niger')),
            { id: 'ZMAO', sig: t('ZMAO', 'WAMZ'), text: t("Zone monétaire de l'Afrique de l'Ouest, qui réunit six États hors franc CFA, dont le Nigeria voisin. Le Niger n'en fait pas partie.", 'West African Monetary Zone, bringing together six states outside the CFA franc, including neighbouring Nigeria. Niger is not a member.') },
            { id: 'CEEAC', sig: t('CEEAC', 'ECCAS'), text: t("Communauté économique des États de l'Afrique centrale, dont le Tchad voisin est membre. Le Niger n'en fait pas partie.", 'Economic Community of Central African States, of which neighbouring Chad is a member. Niger is not.') },
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Burkina Faso partage par exemple cinq organisations sous-régionales avec le Niger. La ZLECAf vise à rationaliser cet enchevêtrement.',
        en: 'These overlapping memberships create sometimes competing obligations. Burkina Faso, for example, shares five sub-regional organizations with Niger. The AfCFTA aims to rationalise this tangle.',
    },
    supremeCourt: { fr: 'la juridiction nationale de cassation', en: 'the national court of cassation' },
    constitutionalCourt: { fr: 'Juge constitutionnel', en: 'Constitutional judge' },
    adminCourt: { fr: 'juge administratif', en: 'administrative courts' },
    constitution: { fr: 'Le texte constitutionnel en vigueur', en: 'The constitutional text in force' },
    refs: {
        revise: null,
        authority: { fr: 'Texte constitutionnel, dispositions relatives aux traités', en: 'Constitutional text, provisions on treaties' },
        authorityShort: { fr: 'Selon le texte constitutionnel', en: 'Under the constitutional text' },
    },
    treatyList: { fr: "UA, ZLECAf, Conseil de l'Entente, ABN, CBLT, AES", en: 'AU, AfCFTA, Council of the Entente, NBA, LCBC, AES' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'A WAEMU directive has not yet been transposed in Niger. Can it replace national law on its own?', o: ['Yes, like a regulation', 'No, it must be transposed'], a: 1, e: 'Unlike regulations, WAEMU directives set objectives that each state must transpose into its own law.' }
        : { q: "Une directive de l'UEMOA n'a pas encore été transposée au Niger. Peut-elle remplacer d'elle-même la loi nationale ?", o: ['Oui, comme un règlement', 'Non, elle doit être transposée'], a: 1, e: "Contrairement aux règlements, les directives de l'UEMOA fixent des objectifs que chaque État doit transposer dans son droit." }),
    quizSpecific: (lang) => (lang === 'en' ? [
        { q: 'Which basin organization is headquartered in Niamey?', o: ['The OMVS', 'The Niger Basin Authority', 'The Lake Chad Basin Commission', 'The OMVG'], a: 1, e: 'The Niger Basin Authority (NBA), which brings together nine states, is headquartered in Niamey.' },
        { q: 'Niger shares Lake Chad with which organization?', o: ['The LCBC', 'COMIFAC', 'The OMVS', 'ECCAS'], a: 0, e: "The Lake Chad Basin Commission (LCBC), headquartered in N'Djamena, brings together Niger, Chad, Cameroon, Nigeria, the Central African Republic and Libya." },
        { q: 'Niger is a founding member of which organization created in 1959?', o: ['ECOWAS', 'The Council of the Entente', 'WAEMU', 'OHADA'], a: 1, e: 'The Council of the Entente, founded in 1959, is the oldest regional organization in West Africa.' },
        { q: 'In which city is ERSUMA, the OHADA training school, based?', o: ['Niamey', 'Porto-Novo', 'Abidjan', 'Yaoundé'], a: 1, e: 'The Regional Higher School of Magistracy (ERSUMA) is based in Porto-Novo, Benin.' },
        { q: 'Which major river flows through Niamey?', o: ['The Senegal', 'The Niger', 'The Volta', 'The Chari'], a: 1, e: 'The Niger River flows through Niamey and gives the country its name.' },
    ] : [
        { q: 'Quelle organisation de bassin a son siège à Niamey ?', o: ["L'OMVS", "L'Autorité du bassin du Niger", 'La Commission du bassin du lac Tchad', "L'OMVG"], a: 1, e: "L'Autorité du bassin du Niger (ABN), qui réunit neuf États, a son siège à Niamey." },
        { q: 'Avec quelle organisation le Niger gère-t-il le lac Tchad ?', o: ['La CBLT', 'La COMIFAC', "L'OMVS", 'La CEEAC'], a: 0, e: "La Commission du bassin du lac Tchad (CBLT), qui siège à N'Djamena, réunit le Niger, le Tchad, le Cameroun, le Nigeria, la Centrafrique et la Libye." },
        { q: 'Le Niger est membre fondateur de quelle organisation créée en 1959 ?', o: ['La CEDEAO', "Le Conseil de l'Entente", "L'UEMOA", "L'OHADA"], a: 1, e: "Le Conseil de l'Entente, fondé en 1959, est la plus ancienne organisation régionale d'Afrique de l'Ouest." },
        { q: "Dans quelle ville siège l'ERSUMA, école de formation de l'OHADA ?", o: ['Niamey', 'Porto-Novo', 'Abidjan', 'Yaoundé'], a: 1, e: "L'École régionale supérieure de la magistrature (ERSUMA) siège à Porto-Novo, au Bénin." },
        { q: 'Quel grand fleuve traverse Niamey ?', o: ['Le Sénégal', 'Le Niger', 'La Volta', 'Le Chari'], a: 1, e: 'Le fleuve Niger traverse Niamey et donne son nom au pays.' },
    ]),
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'Which community law applies in Niger alongside national law?', a: 'OHADA law and WAEMU law, both directly applicable, prevail over conflicting domestic law. Duly ratified and published treaties also prevail over statutes, provided the other party applies them.' },
    ] : [
        { q: "Quel droit communautaire s'applique au Niger aux côtés du droit national ?", a: "Le droit OHADA et le droit de l'UEMOA, tous deux directement applicables, priment le droit interne contraire. Les traités régulièrement ratifiés et publiés ont en outre une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie." },
    ]),
    orgsList: {
        fr: "Le Niger est membre de huit organisations : l'Union africaine, la ZLECAf, l'OHADA, l'UEMOA, le Conseil de l'Entente, l'Autorité du bassin du Niger, la Commission du bassin du lac Tchad et la Confédération des États du Sahel (AES). Il n'est membre ni de la CEMAC, ni de la ZMAO, ni de la CEEAC.",
        en: 'Niger is a member of eight organizations: the African Union, the AfCFTA, OHADA, WAEMU, the Council of the Entente, the Niger Basin Authority, the Lake Chad Basin Commission and the Confederation of Sahel States (AES). It is not a member of CEMAC, the WAMZ or ECCAS.',
    },
    disclaimerRefs: { fr: 'texte constitutionnel en vigueur', en: 'constitutional text in force' },
    summary: {
        fr: "OHADA, UEMOA, Autorité du bassin du Niger (siège à Niamey), CBLT : huit organisations régionales, et un droit communautaire qui prime la loi.",
        en: 'OHADA, WAEMU, Niger Basin Authority (headquartered in Niamey), LCBC: eight regional organizations, and community law that prevails over statute.',
    },
});
