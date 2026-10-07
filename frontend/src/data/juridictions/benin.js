/**
 * Page juridiction : Bénin.
 * Même gabarit que les autres pays ; textes communs dans common.js.
 */
import { ORGS, TRAPS, ORG_COLORS, ARTICULATION_OHADA_UEMOA, GAMES_UI, ARBITER_END, QUIZ_END, QUIZ, LEGOMNIA_STATUS } from './common';

const LAW = { fr: 'art. 147 de la Constitution', en: 'Constitution, art. 147' };
const LAW_SHORT = { fr: 'art. 147', en: 'art. 147' };

const build = (lang) => {
    const t = (fr, en) => (lang === 'en' ? en : fr);

    return {
        seo: {
            title: t('Droit au Bénin : OHADA, UEMOA, CEDEAO et hiérarchie des normes', 'Benin law: OHADA, WAEMU, ECOWAS and hierarchy of norms'),
            description: t("Droit béninois : membre fondateur de l'OHADA, siège de l'ERSUMA, UEMOA, CEDEAO, hiérarchie des normes et place des traités. Carte interactive et quiz.", 'Beninese law: founding member of OHADA, seat of ERSUMA, WAEMU, ECOWAS, hierarchy of norms and status of treaties. Interactive map and quiz.'),
        },
        breadcrumb: { home: t('Accueil', 'Home'), jurisdictions: t('Juridictions', 'Jurisdictions'), current: t('Bénin', 'Benin') },
        hero: {
            eyebrow: t("Juridiction · Afrique de l'Ouest", 'Jurisdiction · West Africa'),
            titlePrefix: t('Le droit au', 'Law in'),
            titleCountry: t('Bénin', 'Benin'),
            intro: t(
                "Membre fondateur de l'OHADA, dont il accueille l'école de formation (ERSUMA) à Porto-Novo, le Bénin combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de l'UEMOA et de la CEDEAO. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
                "A founding member of OHADA, whose training school (ERSUMA) is based in Porto-Novo, Benin combines civil-law national legislation, uniform OHADA law and the community law of WAEMU and ECOWAS. This page sets out how they fit together, and which prevails in case of conflict."),
        },
        facts: {
            title: t('Repères', 'Key facts'),
            items: [
                { label: t('Capitales', 'Capitals'), value: t('Porto-Novo (officielle), Cotonou (siège du gouvernement)', 'Porto-Novo (official), Cotonou (seat of government)') },
                { label: t('Langue officielle', 'Official language'), value: t('Français', 'French') },
                { label: t('Tradition juridique', 'Legal tradition'), value: t('Droit civiliste (droit écrit)', 'Civil law (codified law)') },
                { label: t('Constitution', 'Constitution'), value: t('11 décembre 1990 (révisée en 2019)', '11 December 1990 (amended in 2019)') },
                { label: t('Droit des affaires', 'Business law'), value: t("OHADA, membre fondateur ; siège de l'ERSUMA", 'OHADA, founding member; seat of ERSUMA') },
                { label: t('Hautes juridictions', 'Highest courts'), value: t('Cour constitutionnelle, Cour suprême, Cour des comptes', 'Constitutional Court, Supreme Court, Court of Auditors') },
                { label: t('Monnaie', 'Currency'), value: t('Franc CFA (XOF), émis par la BCEAO', 'CFA franc (XOF), issued by the BCEAO') },
                { label: t('Organisations régionales', 'Regional organizations'), value: t("7, dont l'UA et la ZLECAf", '7, including the AU and AfCFTA') },
            ],
        },
        orgs: {
            title: t('Le Bénin au carrefour des organisations régionales', 'Benin at the crossroads of regional organizations'),
            intro: t(
                "Membre de sept organisations, le Bénin relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (UEMOA), intégration régionale (CEDEAO), coopération entre voisins (Conseil de l'Entente) et gestion partagée du fleuve Niger (ABN).",
                'A member of seven organizations, Benin is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (WAEMU), regional integration (ECOWAS), cooperation with its neighbours (Council of the Entente) and shared management of the Niger River (NBA).'),
            labels: {
                seat: t('Siège', 'Seat'), membership: t('Le Bénin', 'Benin'), approach: t('Approche réglementaire', 'Regulatory approach'),
                effect: t('Effet en droit béninois', 'Effect in Beninese law'), court: t('Juridiction', 'Court'), data: t('Enjeu pour la donnée juridique', 'Legal data stakes'),
                members: t('États membres', 'Member states'), more: t('En savoir plus', 'Learn more'),
            },
            items: [
                ORGS.OHADA(lang, {
                    membership: t('membre fondateur (1993)', 'founding member (1993)'),
                    court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême du Bénin. L'ERSUMA, école de formation de l'OHADA, siège à Porto-Novo.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Benin. ERSUMA, the OHADA training school, is based in Porto-Novo.'),
                    data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions béninoises appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Beninese decisions applying the Uniform Acts.'),
                }),
                ORGS.UEMOA(lang, { membership: t('membre fondateur (1994)', 'founding member (1994)') }),
                ORGS.CEDEAO(lang, { membership: t('membre fondateur (1975)', 'founding member (1975)'), law: LAW }),
                ORGS.UA(lang, { law: LAW }),
                ORGS.ZLECAF(lang, { uemoa: true }),
                ORGS.ENTENTE(lang, { membership: t('membre fondateur (1959)', 'founding member (1959)'), law: LAW_SHORT }),
                ORGS.ABN(lang, { membership: t('État membre', 'member state'), law: LAW_SHORT }),
            ],
            trapsTitle: t("Pièges fréquents : le Bénin n'en est pas membre", 'Common pitfalls: Benin is not a member'),
            traps: [
                TRAPS.CEMAC_CFA(lang, t('le Bénin', 'Benin')),
                { id: 'ZMAO', sig: t('ZMAO', 'WAMZ'), text: t("Zone monétaire de l'Afrique de l'Ouest, qui réunit six États de la CEDEAO hors franc CFA, dont le Nigeria voisin. Le Bénin n'en fait pas partie.", 'West African Monetary Zone, bringing together six ECOWAS states outside the CFA franc, including neighbouring Nigeria. Benin is not a member.') },
                { id: 'MRU', sig: t('UFM', 'MRU'), text: t("Union du fleuve Mano, organisation de coopération entre le Liberia, la Sierra Leone, la Guinée et la Côte d'Ivoire. Le Bénin n'en est pas membre.", "Mano River Union, a cooperation organization of Liberia, Sierra Leone, Guinea and Côte d'Ivoire. Benin is not a member.") },
            ],
            overlapTitle: t('Le « bol de spaghettis » régional', 'The regional "spaghetti bowl"'),
            overlap: t(
                "Ces appartenances multiples créent des obligations parfois concurrentes. La Côte d'Ivoire partage par exemple cinq organisations sous-régionales avec le Bénin. La ZLECAf vise à rationaliser cet enchevêtrement.",
                "These overlapping memberships create sometimes competing obligations. Côte d'Ivoire, for example, shares five sub-regional organizations with Benin. The AfCFTA aims to rationalise this tangle."),
        },
        articulation: ARTICULATION_OHADA_UEMOA(lang, t('le Bénin', 'Benin')),
        map: {
            title: t('Carte interactive', 'Interactive map'),
            text: t('Sélectionnez une organisation pour voir ses membres, ou affichez les chevauchements avec le Bénin. Le défi carte propose six questions de géographie juridique.', 'Select an organization to see its members, or display overlaps with Benin. The map challenge offers six legal geography questions. The map is in French.'),
            open: t('Ouvrir la carte en plein écran', 'Open the map full screen'),
            frameTitle: t('Carte interactive des organisations régionales dont le Bénin est membre', 'Interactive map of the regional organizations Benin belongs to'),
        },
        norms: {
            title: t("Quelle norme l'emporte ?", 'Which norm prevails?'),
            intro: t("L'ordre juridique béninois s'organise en cinq niveaux. Le droit OHADA et le droit de l'UEMOA y occupent une place particulière : directement applicables, ils s'imposent même à une loi postérieure.", 'The Beninese legal order has five levels. OHADA law and WAEMU law hold a special place: directly applicable, they prevail even over a later statute.'),
            labels: { basis: t('Fondement', 'Legal basis'), guard: t('Gardien', 'Guardian'), strength: t('Force juridique croissante', 'Increasing legal force') },
            levels: [
                { k: t('Niveau 1 · norme suprême', 'Level 1 · supreme norm'), t: 'Constitution', d: t("La Constitution du 11 décembre 1990, révisée en 2019, coiffe l'ordre juridique. Un engagement international comportant une clause contraire ne peut être ratifié qu'après révision de la Constitution.", 'The Constitution of 11 December 1990, amended in 2019, sits at the top of the legal order. An international commitment containing a conflicting clause can only be ratified after the Constitution has been amended.'), basis: t('Constitution, art. 146', 'Constitution, art. 146'), guard: t('Cour constitutionnelle', 'Constitutional Court') },
                { k: t('Niveau 2 · supranational', 'Level 2 · supranational'), t: t('Droit OHADA et droit UEMOA', 'OHADA and WAEMU law'), d: t("Les Actes uniformes OHADA et les règlements de l'UEMOA sont directement applicables et priment toute disposition contraire de droit interne, antérieure ou postérieure. Les directives de l'UEMOA doivent, elles, être transposées.", 'OHADA Uniform Acts and WAEMU regulations are directly applicable and prevail over any conflicting provision of domestic law, whether earlier or later. WAEMU directives, by contrast, must be transposed.'), basis: t('Traité OHADA, art. 10 ; Traité UEMOA', 'OHADA Treaty, art. 10; WAEMU Treaty'), guard: t("CCJA (Abidjan), Cour de justice de l'UEMOA", 'CCJA (Abidjan), WAEMU Court of Justice') },
                { k: t('Niveau 3 · conventionnel', 'Level 3 · treaties'), t: t('Traités et accords ratifiés', 'Ratified treaties and agreements'), d: t("UA, ZLECAf, CEDEAO, Conseil de l'Entente, ABN : dès leur publication, les traités régulièrement ratifiés ont une autorité supérieure à celle des lois, sous réserve de réciprocité.", 'AU, AfCFTA, ECOWAS, Council of the Entente, NBA: once published, duly ratified treaties prevail over statutes, subject to reciprocity.'), basis: t('Constitution, art. 147', 'Constitution, art. 147'), guard: t('Juridictions nationales et communautaires', 'National and community courts') },
                { k: t('Niveau 4 · législatif', 'Level 4 · legislative'), t: t('Lois et ordonnances', 'Statutes and ordinances'), d: t('Lois organiques, lois ordinaires et ordonnances. Elles doivent respecter la Constitution et céder devant les traités ratifiés et le droit communautaire.', 'Organic laws, ordinary laws and ordinances. They must comply with the Constitution and yield to ratified treaties and community law.'), basis: t('Constitution, domaine de la loi', 'Constitution, scope of statute law'), guard: t('Cour constitutionnelle, juridictions ordinaires', 'Constitutional Court, ordinary courts') },
                { k: t('Niveau 5 · réglementaire', 'Level 5 · regulatory'), t: t('Décrets, arrêtés, actes des collectivités', 'Decrees, orders, local authority acts'), d: t('Actes du pouvoir exécutif et des collectivités territoriales, pris dans le respect des lois. Un acte réglementaire illégal peut être annulé.', 'Acts of the executive and local authorities, adopted in compliance with statutes. An unlawful regulatory act can be annulled.'), basis: t('Principe de légalité', 'Principle of legality'), guard: t('Cour suprême (chambre administrative)', 'Supreme Court (administrative chamber)') },
            ],
            caseLaw: t("Et la jurisprudence ? Elle ne figure pas dans la pyramide, mais elle dit comment chaque niveau s'applique en pratique. C'est précisément ce corpus que LegOmnia s'attache à structurer et à rendre accessible.", 'What about case law? It does not appear in the pyramid, but it shows how each level applies in practice. That is precisely the body of law LegOmnia is working to structure and make accessible.'),
        },
        games: {
            title: t('Testez vos connaissances', 'Test your knowledge'),
            intro: t("Deux exercices interactifs : arbitrez des conflits de normes concrets, puis vérifiez ce que vous savez de l'intégration régionale du Bénin.", "Two interactive exercises: resolve real conflicts between norms, then check what you know about Benin's regional integration."),
            arbiter: {
                title: t("L'arbitre des normes", 'The norms referee'),
                prompt: t("Quelle norme ou quelle juridiction l'emporte ?", 'Which norm or court prevails?'),
                items: [
                    t({ q: "Une loi béninoise postérieure ajoute une formalité à la constitution d'une sûreté, contrairement à l'Acte uniforme portant organisation des sûretés.", o: ['La loi béninoise, plus récente', "L'Acte uniforme OHADA"], a: 1, e: "L'Acte uniforme s'applique nonobstant toute disposition interne contraire, même postérieure (art. 10 du Traité)." },
                        { q: 'A later Beninese statute adds a formality for creating a security interest, contrary to the Uniform Act on securities.', o: ['The Beninese statute, which is more recent', 'The OHADA Uniform Act'], a: 1, e: 'The Uniform Act applies notwithstanding any conflicting domestic provision, even a later one (Treaty, art. 10).' }),
                    t({ q: "Un pourvoi en cassation porte sur l'application de l'Acte uniforme relatif au droit commercial général.", o: ['La Cour suprême du Bénin', 'La CCJA'], a: 1, e: 'La CCJA, qui siège à Abidjan, est compétente (art. 14 du Traité) ; la juridiction nationale saisie doit se dessaisir à son profit.' },
                        { q: 'An appeal in cassation concerns the application of the Uniform Act on general commercial law.', o: ['The Supreme Court of Benin', 'The CCJA'], a: 1, e: 'The CCJA, based in Abidjan, has jurisdiction (Treaty, art. 14); the national court seised must decline jurisdiction in its favour.' }),
                    t({ q: "Un règlement de l'UEMOA entre en conflit avec une loi béninoise.", o: ['La loi béninoise', "Le règlement de l'UEMOA"], a: 1, e: "Les règlements de l'UEMOA sont directement applicables et priment le droit national contraire." },
                        { q: 'A WAEMU regulation conflicts with a Beninese statute.', o: ['The Beninese statute', 'The WAEMU regulation'], a: 1, e: 'WAEMU regulations are directly applicable and prevail over conflicting national law.' }),
                    t({ q: 'Un traité régulièrement ratifié et publié contredit une loi béninoise antérieure.', o: ['Le traité', 'La loi'], a: 0, e: "Article 147 : le traité a une autorité supérieure à celle des lois, sous réserve de son application par l'autre partie." },
                        { q: 'A duly ratified and published treaty conflicts with an earlier Beninese statute.', o: ['The treaty', 'The statute'], a: 0, e: 'Article 147: the treaty prevails over statutes, provided the other party applies it.' }),
                    t({ q: 'Un accord international en cours de ratification contient une clause contraire à la Constitution.', o: ["L'accord s'applique dès sa signature", "La Constitution doit d'abord être révisée"], a: 1, e: "Article 146 : la ratification ne peut intervenir qu'après révision de la Constitution." },
                        { q: 'An international agreement being ratified contains a clause contrary to the Constitution.', o: ['The agreement applies upon signature', 'The Constitution must be amended first'], a: 1, e: 'Article 146: ratification can only take place after the Constitution has been amended.' }),
                    t({ q: 'Un arrêté ministériel fixe une règle contraire à une loi en vigueur.', o: ["L'arrêté ministériel", 'La loi'], a: 1, e: "Principe de légalité : l'acte réglementaire doit respecter la loi et peut être annulé par la Cour suprême." },
                        { q: 'A ministerial order sets a rule contrary to a statute in force.', o: ['The ministerial order', 'The statute'], a: 1, e: 'Principle of legality: a regulatory act must comply with statute and can be annulled by the Supreme Court.' }),
                ],
                end: ARBITER_END[lang],
            },
            quiz: {
                title: t('Quiz : intégration régionale', 'Quiz: regional integration'),
                items: [
                    QUIZ.notCemac(lang, 'le Bénin', 'Benin'),
                    t({ q: "Dans quelle ville siège l'ERSUMA, école régionale de formation de l'OHADA ?", o: ['Abidjan', 'Porto-Novo', 'Yaoundé', 'Dakar'], a: 1, e: "L'École régionale supérieure de la magistrature (ERSUMA) forme les professionnels du droit OHADA à Porto-Novo." },
                        { q: 'In which city is ERSUMA, the OHADA regional training school, based?', o: ['Abidjan', 'Porto-Novo', 'Yaoundé', 'Dakar'], a: 1, e: 'The Regional Higher School of Magistracy (ERSUMA) trains OHADA legal professionals in Porto-Novo.' }),
                    t({ q: 'Quelle est la capitale officielle du Bénin ?', o: ['Cotonou', 'Porto-Novo', 'Parakou', 'Abomey'], a: 1, e: 'Porto-Novo est la capitale officielle ; Cotonou accueille le siège du gouvernement.' },
                        { q: 'What is the official capital of Benin?', o: ['Cotonou', 'Porto-Novo', 'Parakou', 'Abomey'], a: 1, e: 'Porto-Novo is the official capital; Cotonou is the seat of government.' }),
                    QUIZ.ccjaSeat(lang),
                    t({ q: 'De quand date la Constitution actuellement en vigueur ?', o: ['1er août 1960', '11 décembre 1990', '7 novembre 2019', '4 décembre 2001'], a: 1, e: 'La Constitution du 11 décembre 1990 a été révisée en 2019.' },
                        { q: 'When was the current Constitution adopted?', o: ['1 August 1960', '11 December 1990', '7 November 2019', '4 December 2001'], a: 1, e: 'The Constitution of 11 December 1990 was amended in 2019.' }),
                    t({ q: 'Le Bénin est membre fondateur de quelle organisation créée en 1959 ?', o: ['La CEDEAO', "Le Conseil de l'Entente", "L'UEMOA", "L'OHADA"], a: 1, e: "Le Conseil de l'Entente, fondé en 1959, est la plus ancienne organisation régionale d'Afrique de l'Ouest." },
                        { q: 'Benin is a founding member of which organization created in 1959?', o: ['ECOWAS', 'The Council of the Entente', 'WAEMU', 'OHADA'], a: 1, e: 'The Council of the Entente, founded in 1959, is the oldest regional organization in West Africa.' }),
                    QUIZ.abnRiver(lang),
                    QUIZ.bceao(lang),
                    QUIZ.uemoaSeat(lang),
                    QUIZ.cedeaoCourt(lang),
                    QUIZ.uemoaCount(lang),
                    QUIZ.uemoaRegulation(lang, 'béninois', 'Beninese'),
                    QUIZ.ohadaApproach(lang),
                    QUIZ.treatyAuthority(lang, { fr: 'Article 147', en: 'Article 147' }),
                    QUIZ.ohadaCount(lang, t('le Bénin', 'Benin')),
                ],
                end: QUIZ_END[lang],
            },
            ui: GAMES_UI[lang],
        },
        faq: {
            title: t('Questions fréquentes sur le droit béninois', 'Frequently asked questions about Beninese law'),
            items: [
                t({ q: 'Le Bénin est-il membre de la CEMAC ?', a: "Non. Le Bénin est membre de l'UEMOA (Union économique et monétaire ouest-africaine), dont le franc CFA est émis par la BCEAO. La CEMAC regroupe six États d'Afrique centrale, dont le franc CFA est émis par une autre banque centrale, la BEAC." },
                    { q: 'Is Benin a member of CEMAC?', a: 'No. Benin is a member of WAEMU (West African Economic and Monetary Union), whose CFA franc is issued by the BCEAO. CEMAC brings together six Central African states, whose CFA franc is issued by a different central bank, the BEAC.' }),
                t({ q: "Le droit OHADA s'applique-t-il au Bénin ?", a: "Oui. Le Bénin est membre fondateur de l'OHADA et accueille à Porto-Novo son École régionale supérieure de la magistrature (ERSUMA). Les Actes uniformes y sont directement applicables, sans transposition, nonobstant toute disposition contraire de droit interne, antérieure ou postérieure (article 10 du Traité OHADA)." },
                    { q: 'Does OHADA law apply in Benin?', a: 'Yes. Benin is a founding member of OHADA and hosts its Regional Higher School of Magistracy (ERSUMA) in Porto-Novo. The Uniform Acts are directly applicable there without transposition, notwithstanding any conflicting provision of domestic law, whether earlier or later (OHADA Treaty, art. 10).' }),
                t({ q: 'Quelle juridiction statue en cassation sur le droit OHADA ?', a: "La Cour commune de justice et d'arbitrage (CCJA), qui siège à Abidjan. Elle se prononce en cassation sur l'application des Actes uniformes, en lieu et place de la Cour suprême du Bénin (article 14 du Traité), et ses arrêts sont exécutoires sur le territoire de tous les États parties (article 20)." },
                    { q: 'Which court rules in cassation on OHADA law?', a: 'The Common Court of Justice and Arbitration (CCJA), based in Abidjan. It rules in cassation on the application of the Uniform Acts, in place of the Supreme Court of Benin (Treaty, art. 14), and its judgments are enforceable in all member states (art. 20).' }),
                t({ q: 'Quelle est la place des traités internationaux dans le droit béninois ?', a: "Selon l'article 147 de la Constitution du 11 décembre 1990, les traités régulièrement ratifiés ont, dès leur publication, une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Un engagement contraire à la Constitution ne peut être ratifié qu'après révision de celle-ci (article 146)." },
                    { q: 'What is the status of international treaties in Beninese law?', a: 'Under article 147 of the Constitution of 11 December 1990, duly ratified treaties prevail over statutes once published, provided the other party applies them. A commitment contrary to the Constitution can only be ratified after the Constitution has been amended (art. 146).' }),
                t({ q: 'À quelles organisations régionales le Bénin appartient-il ?', a: "Le Bénin est membre de sept organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEDEAO, l'UEMOA, le Conseil de l'Entente et l'Autorité du bassin du Niger. Il n'est membre ni de la CEMAC, ni de la ZMAO, ni de l'Union du fleuve Mano." },
                    { q: 'Which regional organizations does Benin belong to?', a: 'Benin is a member of seven organizations: the African Union, the AfCFTA, OHADA, ECOWAS, WAEMU, the Council of the Entente and the Niger Basin Authority. It is not a member of CEMAC, the WAMZ or the Mano River Union.' }),
                LEGOMNIA_STATUS(lang, { adjFr: 'béninois', adjEn: 'Beninese', dont: 'le Bénin', au: 'au Bénin' }),
            ],
        },
        cta: {
            title: t('Le droit béninois, bientôt à portée de main', 'Beninese law, soon at your fingertips'),
            text: t("Rejoignez la liste d'attente pour accéder parmi les premiers à la recherche juridique LegOmnia sur le Bénin et l'espace OHADA.", 'Join the waitlist to be among the first to access LegOmnia legal research on Benin and the OHADA area.'),
            waitlist: t("Rejoindre la liste d'attente", 'Join the waitlist'),
            omniscan: t('Découvrir OmniScan', 'Discover OmniScan'),
        },
        disclaimer: t(
            "Contenu pédagogique de synthèse ; il ne constitue pas une consultation juridique. Références : Constitution du 11 décembre 1990 (art. 146 et 147), Traité OHADA (art. 10, 14, 20), Traité de l'UEMOA, Accord ZLECAf (art. 19). Appartenances à jour en octobre 2026.",
            'Educational summary; it does not constitute legal advice. References: Constitution of 11 December 1990 (arts. 146 and 147), OHADA Treaty (arts. 10, 14, 20), WAEMU Treaty, AfCFTA Agreement (art. 19). Memberships as of October 2026.'),
    };
};

export default {
    iso: 'BEN',
    flag: 'bj',
    name: { fr: 'Bénin', en: 'Benin' },
    summary: {
        fr: "OHADA (siège de l'ERSUMA), UEMOA, CEDEAO, Conseil de l'Entente, ABN : sept organisations régionales, et un droit communautaire qui prime la loi.",
        en: 'OHADA (seat of ERSUMA), WAEMU, ECOWAS, Council of the Entente, NBA: seven regional organizations, and community law that prevails over statute.',
    },
    mapUrl: '/supports/benin/carte-organisations-regionales.html',
    orgColors: ORG_COLORS,
    content: { fr: build('fr'), en: build('en') },
};
