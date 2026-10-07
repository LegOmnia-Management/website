/**
 * Page juridiction : Cameroun (gabarit CEMAC, voir cemacCountry.js).
 */
import { buildCemacPage } from './cemacCountry';
import { ORGS, TRAPS } from './common';

const LAW = { fr: 'art. 45 de la Constitution', en: 'Constitution, art. 45' };

export default buildCemacPage({
    iso: 'CMR', flag: 'cm', supportSlug: 'cameroun',
    name: { fr: 'Cameroun', en: 'Cameroon' },
    le: { fr: 'le Cameroun', en: 'Cameroon' }, Le: { fr: 'Le Cameroun', en: 'Cameroon' },
    de: { fr: 'du Cameroun' }, possessive: { en: "Cameroon's" },
    au: { fr: 'au Cameroun', en: 'in Cameroon' }, pronoun: { fr: 'il' },
    adj: { fr: 'camerounais', en: 'Cameroonian' }, adjFem: 'camerounaise',
    titlePrefix: { fr: 'Le droit au', en: 'Law in' },
    seoDescription: {
        fr: "Droit camerounais : bijuridisme civiliste et common law, membre fondateur de l'OHADA (Secrétariat permanent à Yaoundé), CEMAC, CEEAC, hiérarchie des normes. Carte interactive et quiz.",
        en: 'Cameroonian law: civil law and common law bijuralism, founding member of OHADA (Permanent Secretariat in Yaoundé), CEMAC, ECCAS, hierarchy of norms. Interactive map and quiz.',
    },
    intro: {
        fr: "Pays bilingue où coexistent le droit civiliste et la common law, siège du Secrétariat permanent de l'OHADA et de la Banque des États de l'Afrique centrale, le Cameroun combine un droit national original, le droit uniforme OHADA et le droit communautaire de la CEMAC. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
        en: 'A bilingual country where civil law and common law coexist, and home to the OHADA Permanent Secretariat and the Bank of Central African States, Cameroon combines distinctive national law, uniform OHADA law and CEMAC community law. This page sets out how they fit together, and which prevails in case of conflict.',
    },
    facts: [
        { label: { fr: 'Capitale', en: 'Capital' }, value: { fr: 'Yaoundé', en: 'Yaoundé' } },
        { label: { fr: 'Langues officielles', en: 'Official languages' }, value: { fr: 'Français et anglais', en: 'French and English' } },
        { label: { fr: 'Tradition juridique', en: 'Legal tradition' }, value: { fr: 'Bijuridisme : droit civiliste et common law', en: 'Bijuralism: civil law and common law' } },
        { label: { fr: 'Constitution', en: 'Constitution' }, value: { fr: '18 janvier 1996 (révisée en 2008)', en: '18 January 1996 (amended in 2008)' } },
        { label: { fr: 'Droit des affaires', en: 'Business law' }, value: { fr: "OHADA, membre fondateur ; siège du Secrétariat permanent", en: 'OHADA, founding member; seat of the Permanent Secretariat' } },
        { label: { fr: 'Hautes juridictions', en: 'Highest courts' }, value: { fr: 'Conseil constitutionnel, Cour suprême', en: 'Constitutional Council, Supreme Court' } },
        { label: { fr: 'Monnaie', en: 'Currency' }, value: { fr: 'Franc CFA (XAF), émis par la BEAC, dont le siège est à Yaoundé', en: 'CFA franc (XAF), issued by the BEAC, headquartered in Yaoundé' } },
        { label: { fr: 'Organisations régionales', en: 'Regional organizations' }, value: { fr: "8, dont l'UA et la ZLECAf", en: '8, including the AU and AfCFTA' } },
    ],
    orgsIntro: {
        fr: "Membre de huit organisations, le Cameroun relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (CEMAC), intégration régionale (CEEAC) et gestion partagée des ressources naturelles (lac Tchad, fleuve Niger, forêts du bassin du Congo).",
        en: 'A member of eight organizations, Cameroon is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (CEMAC), regional integration (ECCAS) and shared management of natural resources (Lake Chad, the Niger River, the Congo Basin forests).',
    },
    orgs: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            ORGS.OHADA(lang, {
                membership: t('membre fondateur (1993)', 'founding member (1993)'),
                court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême du Cameroun. Le Secrétariat permanent de l'OHADA siège à Yaoundé.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Cameroon. The OHADA Permanent Secretariat is based in Yaoundé.'),
                data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions camerounaises appliquant les Actes uniformes, publiées en français et en anglais.', 'Foundation of the LegOmnia database under construction: CCJA case law and Cameroonian decisions applying the Uniform Acts, published in French and English.'),
            }),
            ORGS.CEMAC(lang, { membership: t('membre fondateur (1994)', 'founding member (1994)') }),
            ORGS.CEEAC(lang, { membership: t('membre fondateur (1983)', 'founding member (1983)'), law: LAW }),
            ORGS.UA(lang, { law: LAW }),
            ORGS.ZLECAF(lang),
            ORGS.CBLT(lang, { membership: t('membre fondateur (1964)', 'founding member (1964)'), law: LAW }),
            ORGS.ABN(lang, { membership: t('État membre', 'member state'), law: LAW }),
            ORGS.COMIFAC(lang, { membership: t('État membre ; pays du siège', 'member state; host country'), law: LAW }),
        ];
    },
    traps: (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        return [
            { id: 'UEMOA', sig: t('UEMOA', 'WAEMU'), text: t("Union économique et monétaire ouest-africaine. Elle utilise elle aussi un franc CFA, mais émis par la BCEAO : le Cameroun relève de la CEMAC et de la BEAC.", 'West African Economic and Monetary Union. It also uses a CFA franc, but one issued by the BCEAO: Cameroon belongs to CEMAC and the BEAC.') },
            { id: 'CEDEAO', sig: t('CEDEAO', 'ECOWAS'), text: t("Communauté économique des États de l'Afrique de l'Ouest. Le Nigeria voisin en est membre, pas le Cameroun.", 'Economic Community of West African States. Neighbouring Nigeria is a member, Cameroon is not.') },
            TRAPS.ENTENTE(lang, t('Le Cameroun', 'Cameroon')),
        ];
    },
    overlap: {
        fr: 'Ces appartenances multiples créent des obligations parfois concurrentes. Le Tchad partage par exemple six organisations sous-régionales avec le Cameroun. La ZLECAf vise à rationaliser cet enchevêtrement.',
        en: 'These overlapping memberships create sometimes competing obligations. Chad, for example, shares six sub-regional organizations with Cameroon. The AfCFTA aims to rationalise this tangle.',
    },
    supremeCourt: { fr: 'la Cour suprême du Cameroun', en: 'the Supreme Court of Cameroon' },
    constitutionalCourt: { fr: 'Conseil constitutionnel', en: 'Constitutional Council' },
    adminCourt: { fr: 'juridictions administratives, Cour suprême', en: 'administrative courts, Supreme Court' },
    constitution: { fr: 'La Constitution du 18 janvier 1996, révisée en 2008,', en: 'The Constitution of 18 January 1996, amended in 2008,' },
    refs: {
        revise: { fr: 'Constitution, art. 44', en: 'Constitution, art. 44' },
        authority: { fr: 'Constitution, art. 45', en: 'Constitution, art. 45' },
        authorityShort: { fr: 'Article 45', en: 'Article 45' },
    },
    treatyList: { fr: 'UA, ZLECAf, CEEAC, CBLT, ABN, COMIFAC', en: 'AU, AfCFTA, ECCAS, LCBC, NBA, COMIFAC' },
    arbiterExtra: (lang) => (lang === 'en'
        ? { q: 'An international agreement being ratified contains a clause contrary to the Constitution.', o: ['The agreement applies upon signature', 'The Constitution must be amended first'], a: 1, e: 'Article 44: ratification can only take place after the Constitution has been amended.' }
        : { q: 'Un accord international en cours de ratification contient une clause contraire à la Constitution.', o: ["L'accord s'applique dès sa signature", "La Constitution doit d'abord être révisée"], a: 1, e: "Article 44 : la ratification ne peut intervenir qu'après révision de la Constitution." }),
    quizSpecific: (lang) => (lang === 'en' ? [
        { q: 'Where is the OHADA Permanent Secretariat based?', o: ['Abidjan', 'Yaoundé', 'Porto-Novo', 'Dakar'], a: 1, e: 'The OHADA Permanent Secretariat is in Yaoundé; the CCJA sits in Abidjan and ERSUMA in Porto-Novo.' },
        { q: 'Which two legal traditions coexist in Cameroon?', o: ['Civil law and Islamic law', 'Civil law and common law', 'Common law and customary law only', 'Civil law only'], a: 1, e: 'Cameroon practises bijuralism: civil law in the French-speaking regions and common law in the English-speaking regions, alongside customary law.' },
        { q: 'When was the current Constitution adopted?', o: ['1 January 1960', '2 June 1972', '18 January 1996', '14 April 2008'], a: 2, e: 'The Constitution of 18 January 1996 was amended in 2008.' },
    ] : [
        { q: "Où siège le Secrétariat permanent de l'OHADA ?", o: ['Abidjan', 'Yaoundé', 'Porto-Novo', 'Dakar'], a: 1, e: "Le Secrétariat permanent de l'OHADA est à Yaoundé ; la CCJA siège à Abidjan et l'ERSUMA à Porto-Novo." },
        { q: 'Quelles traditions juridiques coexistent au Cameroun ?', o: ['Droit civiliste et droit musulman', 'Droit civiliste et common law', 'Common law et droit coutumier seulement', 'Droit civiliste seulement'], a: 1, e: 'Le Cameroun pratique le bijuridisme : droit civiliste dans les régions francophones, common law dans les régions anglophones, aux côtés du droit coutumier.' },
        { q: 'De quand date la Constitution actuellement en vigueur ?', o: ['1er janvier 1960', '2 juin 1972', '18 janvier 1996', '14 avril 2008'], a: 2, e: 'La Constitution du 18 janvier 1996 a été révisée en 2008.' },
    ]),
    faqSpecific: (lang) => (lang === 'en' ? [
        { q: 'What is Cameroonian bijuralism?', a: 'Two legal traditions coexist in Cameroon: civil law, inherited from the French tradition, and common law, applied in the English-speaking regions. OHADA Uniform Acts, published in French and English, apply throughout the country.' },
        { q: 'What is the status of international treaties in Cameroonian law?', a: 'Under article 45 of the Constitution, duly approved or ratified treaties prevail over statutes once published, provided the other party applies them. A commitment contrary to the Constitution can only be ratified after the Constitution has been amended (art. 44).' },
    ] : [
        { q: 'Qu’est-ce que le bijuridisme camerounais ?', a: "Deux traditions juridiques coexistent au Cameroun : le droit civiliste, hérité de la tradition française, et la common law, appliquée dans les régions anglophones. Les Actes uniformes OHADA, publiés en français et en anglais, s'appliquent sur l'ensemble du territoire." },
        { q: 'Quelle est la place des traités internationaux dans le droit camerounais ?', a: "Selon l'article 45 de la Constitution, les traités régulièrement approuvés ou ratifiés ont, dès leur publication, une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Un engagement contraire à la Constitution ne peut être ratifié qu'après révision de celle-ci (article 44)." },
    ]),
    orgsList: {
        fr: "Le Cameroun est membre de huit organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEMAC, la CEEAC, la Commission du bassin du lac Tchad, l'Autorité du bassin du Niger et la COMIFAC. Il n'est membre ni de l'UEMOA, ni de la CEDEAO.",
        en: 'Cameroon is a member of eight organizations: the African Union, the AfCFTA, OHADA, CEMAC, ECCAS, the Lake Chad Basin Commission, the Niger Basin Authority and COMIFAC. It is not a member of WAEMU or ECOWAS.',
    },
    disclaimerRefs: { fr: 'Constitution du 18 janvier 1996 (art. 44 et 45)', en: 'Constitution of 18 January 1996 (arts. 44 and 45)' },
    summary: {
        fr: "OHADA (Secrétariat permanent), CEMAC (BEAC), CEEAC : huit organisations régionales, et un bijuridisme civiliste et common law.",
        en: 'OHADA (Permanent Secretariat), CEMAC (BEAC), ECCAS: eight regional organizations, and civil law and common law bijuralism.',
    },
});
