/**
 * Page juridiction : Burkina Faso (gabarit UEMOA, voir cemacCountry.js).
 * Rédaction factuelle et sobre sur les appartenances régionales (choix éditorial).
 */
import { buildUemoaPage } from './cemacCountry';
import { ORGS, TRAPS, QUIZ } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildUemoaPage({
    iso: 'BFA', flag: 'bf', supportSlug: 'burkina-faso',
    name: { fr: 'Burkina Faso', en: 'Burkina Faso' },
    le: { fr: 'le Burkina Faso', en: 'Burkina Faso' }, Le: { fr: 'Le Burkina Faso', en: 'Burkina Faso' },
    de: { fr: 'du Burkina Faso' }, possessive: { en: "Burkina Faso's" },
    au: { fr: 'au Burkina Faso', en: 'in Burkina Faso' }, pronoun: { fr: 'il' },
    adj: { fr: 'burkinabè', en: 'Burkinabe' }, adjFem: 'burkinabè',
    titlePrefix: { fr: 'Le droit au', en: 'Law in' },
    seoDescription: {
        fr: "Droit burkinabè : membre fondateur de l'OHADA et de l'UEMOA (siège à Ouagadougou), Conseil de l'Entente, Autorité du bassin du Niger, hiérarchie des normes. Carte interactive et quiz.",
        en: 'Burkinabe law: founding member of OHADA and WAEMU (headquartered in Ouagadougou), Council of the Entente, Niger Basin Authority, hierarchy of norms. Interactive map and quiz.',
    },
    intro: {
        fr: "Membre fondateur de l'OHADA et de l'UEMOA, dont la Commission et la Cour de justice siègent à Ouagadougou, le Burkina Faso combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de l'UEMOA. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'A founding member of OHADA and WAEMU, whose Commission and Court of Justice sit in Ouagadougou, Burkina Faso combines civil-law national legislation, uniform OHADA law and WAEMU community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Ouagadougou', en: 'Ouagadougou' } },
        { label: { fr: 'Langues', en: 'Languages' }, value: { fr: 'Langues nationales officielles ; le français est langue de travail', en: 'National languages are official; French is a working language' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Droit civiliste (droit écrit)', en: 'Civil law (codified law)' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: '2 juin 1991 (révisée)', en: '2 June 1991 (amended)' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, membre fondateur', en: 'OHADA, founding member' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: "Conseil constitutionnel, Cour de cassation, Conseil d'État, Cour des comptes", en: 'Constitutional Council, Court of Cassation, Council of State, Court of Auditors' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XOF), émis par la BCEAO', en: 'CFA franc (XOF), issued by the BCEAO' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "7, dont l'UA et la ZLECAf", en: '7, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de sept organisations, le Burkina Faso relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (UEMOA, dont il accueille le siège), coopération entre voisins (Conseil de l'Entente, AES) et gestion partagée du fleuve Niger (ABN).",
        en: 'A member of seven organizations, Burkina Faso is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (WAEMU, which it hosts), cooperation with its neighbours (Council of the Entente, AES) and shared management of the Niger River (NBA).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour de cassation burkinabè.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Burkinabe Court of Cassation.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions burkinabè appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Burkinabe decisions applying the Uniform Acts.'),
            }),
            ORGS.UEMOA(lang, { membership: t('membre fondateur (1994) ; pays du siège', 'founding member (1994); host country') }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang, { uemoa: true }),
            ORGS.ENTENTE(lang, { membership: t('membre fondateur (1959)', 'founding member (1959)'), law: LAW }),
            ORGS.ABN(lang, { membership: t('État membre', 'member state'), law: LAW }),
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
            TRAPS.CEMAC_CFA(lang, t('le Burkina Faso', 'Burkina Faso')),
            { id: 'ZMAO', sig: t('ZMAO', 'WAMZ'), text: t("Zone monétaire de l'Afrique de l'Ouest, qui réunit six États hors franc CFA, dont le Ghana voisin. Le Burkina Faso n'en fait pas partie.", 'West African Monetary Zone, bringing together six states outside the CFA franc, including neighbouring Ghana. Burkina Faso is not a member.') },
            { id: 'MRU', sig: t('UFM', 'MRU'), text: t("Union du fleuve Mano, organisation de coopération entre le Liberia, la Sierra Leone, la Guinée et la Côte d'Ivoire. Le Burkina Faso n'en est pas membre.", "Mano River Union, a cooperation organization of Liberia, Sierra Leone, Guinea and Côte d'Ivoire. Burkina Faso is not a member.") },
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Niger partage par exemple cinq organisations sous-régionales avec le Burkina Faso. La ZLECAf vise à rationaliser cet enchevêtrement.',
        en: 'These overlapping memberships create sometimes competing obligations. Niger, for example, shares five sub-regional organizations with Burkina Faso. The AfCFTA aims to rationalise this tangle.',
    },
    supremeCourt: { fr: 'la Cour de cassation burkinabè', en: 'the Burkinabe Court of Cassation' },
    constitutionalCourt: { fr: 'Conseil constitutionnel', en: 'Constitutional Council' },
    adminCourt: { fr: "Conseil d'État", en: 'Council of State' },
    constitution: { fr: 'La Constitution du 2 juin 1991', en: 'The Constitution of 2 June 1991' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: "UA, ZLECAf, Conseil de l'Entente, ABN, AES", en: 'AU, AfCFTA, Council of the Entente, NBA, AES' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'A WAEMU directive has not yet been transposed in Burkina Faso. Can it replace national law on its own?', o: ['Yes, like a regulation', 'No, it must be transposed'], a: 1, e: 'Unlike regulations, WAEMU directives set objectives that each state must transpose into its own law.' }
        : { q: "Une directive de l'UEMOA n'a pas encore été transposée au Burkina Faso. Peut-elle remplacer d'elle-même la loi nationale ?", o: ['Oui, comme un règlement', 'Non, elle doit être transposée'], a: 1, e: "Contrairement aux règlements, les directives de l'UEMOA fixent des objectifs que chaque État doit transposer dans son droit." }),
    quizSpecific: (lang) => [
        lang === 'en'
            ? { q: 'Burkina Faso is a founding member of which organization created in 1959?', o: ['ECOWAS', 'The Council of the Entente', 'WAEMU', 'OHADA'], a: 1, e: 'The Council of the Entente, founded in 1959, is the oldest regional organization in West Africa.' }
            : { q: 'Le Burkina Faso est membre fondateur de quelle organisation créée en 1959 ?', o: ['La CEDEAO', "Le Conseil de l'Entente", "L'UEMOA", "L'OHADA"], a: 1, e: "Le Conseil de l'Entente, fondé en 1959, est la plus ancienne organisation régionale d'Afrique de l'Ouest." },
        lang === 'en'
            ? { q: 'When was the Constitution adopted?', o: ['5 August 1960', '2 June 1991', '11 December 2001', '30 October 2014'], a: 1, e: 'The Constitution of 2 June 1991 has been amended several times since.' }
            : { q: 'De quand date la Constitution ?', o: ['5 août 1960', '2 juin 1991', '11 décembre 2001', '30 octobre 2014'], a: 1, e: 'La Constitution du 2 juin 1991 a été révisée à plusieurs reprises depuis.' },
        lang === 'en'
            ? { q: 'In which city is ERSUMA, the OHADA training school, based?', o: ['Ouagadougou', 'Porto-Novo', 'Abidjan', 'Yaoundé'], a: 1, e: 'The Regional Higher School of Magistracy (ERSUMA) is based in Porto-Novo, Benin.' }
            : { q: "Dans quelle ville siège l'ERSUMA, école de formation de l'OHADA ?", o: ['Ouagadougou', 'Porto-Novo', 'Abidjan', 'Yaoundé'], a: 1, e: "L'École régionale supérieure de la magistrature (ERSUMA) siège à Porto-Novo, au Bénin." },
        lang === 'en'
            ? { q: 'Which court sits at the top of the Burkinabe administrative order?', o: ['The Constitutional Council', 'The Court of Cassation', 'The Council of State', 'The Court of Auditors'], a: 2, e: 'The Council of State heads the administrative courts; it reviews the legality of regulatory acts.' }
            : { q: "Quelle juridiction se trouve au sommet de l'ordre administratif burkinabè ?", o: ['Le Conseil constitutionnel', 'La Cour de cassation', "Le Conseil d'État", 'La Cour des comptes'], a: 2, e: "Le Conseil d'État coiffe l'ordre administratif ; il contrôle la légalité des actes réglementaires." },
        QUIZ.abnRiver(lang),
    ],
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is the status of international treaties in Burkinabe law?', a: 'The Constitution gives duly ratified and published treaties authority superior to statutes, provided the other party applies them. OHADA law and WAEMU law, being directly applicable, also prevail over conflicting domestic law.' },
    ] : [
        { q: 'Quelle est la place des traités internationaux dans le droit burkinabè ?', a: "La Constitution reconnaît aux traités régulièrement ratifiés et publiés une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Le droit OHADA et le droit de l'UEMOA, directement applicables, priment en outre le droit interne contraire." },
    ]),
    orgsList: {
        fr: "Le Burkina Faso est membre de sept organisations : l'Union africaine, la ZLECAf, l'OHADA, l'UEMOA, le Conseil de l'Entente, l'Autorité du bassin du Niger et la Confédération des États du Sahel (AES). Il n'est membre ni de la CEMAC, ni de la ZMAO.",
        en: 'Burkina Faso is a member of seven organizations: the African Union, the AfCFTA, OHADA, WAEMU, the Council of the Entente, the Niger Basin Authority and the Confederation of Sahel States (AES). It is not a member of CEMAC or the WAMZ.',
    },
    disclaimerRefs: { fr: 'Constitution du 2 juin 1991', en: 'Constitution of 2 June 1991' },
    summary: {
        fr: "OHADA, UEMOA (siège à Ouagadougou), Conseil de l'Entente, ABN : sept organisations régionales, et un droit communautaire qui prime la loi.",
        en: 'OHADA, WAEMU (headquartered in Ouagadougou), Council of the Entente, NBA: seven regional organizations, and community law that prevails over statute.',
    },
});
