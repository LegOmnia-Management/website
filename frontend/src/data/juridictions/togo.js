/**
 * Page juridiction : Togo (gabarit UEMOA, voir cemacCountry.js).
 */
import { buildUemoaPage } from './cemacCountry';
import { ORGS, TRAPS, QUIZ } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

export default buildUemoaPage({
    iso: 'TGO', flag: 'tg', supportSlug: 'togo',
    name: { fr: 'Togo', en: 'Togo' },
    le: { fr: 'le Togo', en: 'Togo' }, Le: { fr: 'Le Togo', en: 'Togo' },
    de: { fr: 'du Togo' }, possessive: { en: "Togo's" },
    au: { fr: 'au Togo', en: 'in Togo' }, pronoun: { fr: 'il' },
    adj: { fr: 'togolais', en: 'Togolese' }, adjFem: 'togolaise',
    titlePrefix: { fr: 'Le droit au', en: 'Law in' },
    seoDescription: {
        fr: "Droit togolais : membre fondateur de l'OHADA, de l'UEMOA et de la CEDEAO, siège de la BOAD à Lomé, hiérarchie des normes et place des traités. Carte interactive et quiz.",
        en: 'Togolese law: founding member of OHADA, WAEMU and ECOWAS, seat of the BOAD in Lomé, hierarchy of norms and status of treaties. Interactive map and quiz.',
    },
    intro: {
        fr: "Membre fondateur de l'OHADA, de l'UEMOA et de la CEDEAO, et pays du siège de la Banque ouest-africaine de développement (BOAD), le Togo combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire ouest-africain. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'A founding member of OHADA, WAEMU and ECOWAS, and host country of the West African Development Bank (BOAD), Togo combines civil-law national legislation, uniform OHADA law and West African community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Lomé', en: 'Lomé' } },
        { label: { fr: 'Langue officielle', en: 'Official language' }, value: { fr: 'Français', en: 'French' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Droit civiliste (droit écrit)', en: 'Civil law (codified law)' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: '6 mai 2024', en: '6 May 2024' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: 'OHADA, membre fondateur', en: 'OHADA, founding member' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: 'Cour constitutionnelle, Cour suprême, Cour des comptes', en: 'Constitutional Court, Supreme Court, Court of Auditors' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XOF), émis par la BCEAO', en: 'CFA franc (XOF), issued by the BCEAO' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "6, dont l'UA et la ZLECAf", en: '6, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de six organisations, le Togo relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (UEMOA), intégration régionale (CEDEAO) et coopération entre voisins (Conseil de l'Entente).",
        en: 'A member of six organizations, Togo is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (WAEMU), regional integration (ECOWAS) and cooperation with its neighbours (Council of the Entente).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême du Togo.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Togo.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions togolaises appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Togolese decisions applying the Uniform Acts.'),
            }),
            ORGS.UEMOA(lang, { membership: t('membre fondateur (1994)', 'founding member (1994)') }),
            ORGS.CEDEAO(lang, { membership: t('membre fondateur (1975)', 'founding member (1975)'), law: LAW }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang, { uemoa: true }),
            ORGS.ENTENTE(lang, { membership: t('membre (depuis 1966)', 'member (since 1966)'), law: LAW }),
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            TRAPS.CEMAC_CFA(lang, t('le Togo', 'Togo')),
            { id: 'ZMAO', sig: t('ZMAO', 'WAMZ'), text: t("Zone monétaire de l'Afrique de l'Ouest, qui réunit six États de la CEDEAO hors franc CFA, dont le Ghana voisin. Le Togo n'en fait pas partie.", 'West African Monetary Zone, bringing together six ECOWAS states outside the CFA franc, including neighbouring Ghana. Togo is not a member.') },
            { id: 'ABN', sig: t('ABN', 'NBA'), text: t("Autorité du bassin du Niger, qui réunit neuf États riverains du fleuve Niger, dont le Bénin et le Burkina Faso voisins. Le Togo n'en est pas membre.", 'Niger Basin Authority, bringing together nine states of the Niger basin, including neighbouring Benin and Burkina Faso. Togo is not a member.') },
        ];
    },
    overlap: {
        fr: "Ces appartenances multiples créent des obligations parfois concurrentes. Le Bénin et la Côte d'Ivoire partagent par exemple avec le Togo les quatre organisations sous-régionales dont il est membre. La ZLECAf vise à rationaliser cet enchevêtrement.",
        en: "These overlapping memberships create sometimes competing obligations. Benin and Côte d'Ivoire, for example, share all four of Togo's sub-regional organizations. The AfCFTA aims to rationalise this tangle.",
    },
    supremeCourt: { fr: 'la Cour suprême du Togo', en: 'the Supreme Court of Togo' },
    constitutionalCourt: { fr: 'Cour constitutionnelle', en: 'Constitutional Court' },
    adminCourt: { fr: 'Cour suprême, chambre administrative', en: 'Supreme Court, administrative chamber' },
    constitution: { fr: 'La Constitution du 6 mai 2024', en: 'The Constitution of 6 May 2024' },
    refs: {
        revise: null,
        authority: { fr: 'Constitution, dispositions relatives aux traités', en: 'Constitution, provisions on treaties' },
        authorityShort: { fr: 'Selon la Constitution', en: 'Under the Constitution' },
    },
    treatyList: { fr: "UA, ZLECAf, CEDEAO, Conseil de l'Entente", en: 'AU, AfCFTA, ECOWAS, Council of the Entente' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'A WAEMU directive has not yet been transposed in Togo. Can it replace national law on its own?', o: ['Yes, like a regulation', 'No, it must be transposed'], a: 1, e: 'Unlike regulations, WAEMU directives set objectives that each state must transpose into its own law.' }
        : { q: "Une directive de l'UEMOA n'a pas encore été transposée au Togo. Peut-elle remplacer d'elle-même la loi nationale ?", o: ['Oui, comme un règlement', 'Non, elle doit être transposée'], a: 1, e: "Contrairement aux règlements, les directives de l'UEMOA fixent des objectifs que chaque État doit transposer dans son droit." }),
    quizSpecific: (lang) => [
        lang === 'en'
            ? { q: 'Which WAEMU development bank is headquartered in Lomé?', o: ['The BCEAO', 'The BOAD', 'The AfDB', 'The BEAC'], a: 1, e: 'The West African Development Bank (BOAD), the WAEMU development finance institution, is headquartered in Lomé.' }
            : { q: "Quelle banque de développement de l'UEMOA a son siège à Lomé ?", o: ['La BCEAO', 'La BOAD', 'La BAD', 'La BEAC'], a: 1, e: "La Banque ouest-africaine de développement (BOAD), institution de financement de l'UEMOA, a son siège à Lomé." },
        lang === 'en'
            ? { q: 'Togo joined which regional organization in 1966?', o: ['ECOWAS', 'The Council of the Entente', 'WAEMU', 'OHADA'], a: 1, e: 'Togo joined the Council of the Entente, founded in 1959, in 1966.' }
            : { q: 'Quelle organisation régionale le Togo a-t-il rejointe en 1966 ?', o: ['La CEDEAO', "Le Conseil de l'Entente", "L'UEMOA", "L'OHADA"], a: 1, e: "Le Togo a rejoint en 1966 le Conseil de l'Entente, fondé en 1959." },
        lang === 'en'
            ? { q: 'Which of these neighbours of Togo is NOT a member of OHADA?', o: ['Benin', 'Burkina Faso', 'Ghana', 'None'], a: 2, e: 'Ghana, an English-speaking country, is not a member of OHADA.' }
            : { q: "Lequel de ces voisins du Togo n'est PAS membre de l'OHADA ?", o: ['Le Bénin', 'Le Burkina Faso', 'Le Ghana', 'Aucun'], a: 2, e: "Le Ghana, pays anglophone, n'est pas membre de l'OHADA." },
        lang === 'en'
            ? { q: 'In which city is ERSUMA, the OHADA training school, based?', o: ['Lomé', 'Porto-Novo', 'Abidjan', 'Yaoundé'], a: 1, e: 'The Regional Higher School of Magistracy (ERSUMA) is based in Porto-Novo, Benin.' }
            : { q: "Dans quelle ville siège l'ERSUMA, école de formation de l'OHADA ?", o: ['Lomé', 'Porto-Novo', 'Abidjan', 'Yaoundé'], a: 1, e: "L'École régionale supérieure de la magistrature (ERSUMA) siège à Porto-Novo, au Bénin." },
        QUIZ.cedeaoCourt(lang),
    ],
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is the status of international treaties in Togolese law?', a: 'The Constitution gives duly ratified and published treaties authority superior to statutes, provided the other party applies them. OHADA law and WAEMU law, being directly applicable, also prevail over conflicting domestic law.' },
    ] : [
        { q: 'Quelle est la place des traités internationaux dans le droit togolais ?', a: "La Constitution reconnaît aux traités régulièrement ratifiés et publiés une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Le droit OHADA et le droit de l'UEMOA, directement applicables, priment en outre le droit interne contraire." },
    ]),
    orgsList: {
        fr: "Le Togo est membre de six organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEDEAO, l'UEMOA et le Conseil de l'Entente. Il n'est membre ni de la CEMAC, ni de la ZMAO, ni de l'Autorité du bassin du Niger.",
        en: 'Togo is a member of six organizations: the African Union, the AfCFTA, OHADA, ECOWAS, WAEMU and the Council of the Entente. It is not a member of CEMAC, the WAMZ or the Niger Basin Authority.',
    },
    disclaimerRefs: { fr: 'Constitution du 6 mai 2024', en: 'Constitution of 6 May 2024' },
    summary: {
        fr: "OHADA, UEMOA (siège de la BOAD à Lomé), CEDEAO, Conseil de l'Entente : six organisations régionales, et un droit communautaire qui prime la loi.",
        en: 'OHADA, WAEMU (BOAD headquartered in Lomé), ECOWAS, Council of the Entente: six regional organizations, and community law that prevails over statute.',
    },
});
