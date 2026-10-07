/**
 * Page juridiction : Mali.
 * Même gabarit que les autres pays ; textes communs dans common.js.
 * Rédaction factuelle et sobre sur les appartenances régionales (choix éditorial).
 */
import { ORGS, TRAPS, ORG_COLORS, ARTICULATION_OHADA_UEMOA, GAMES_UI, ARBITER_END, QUIZ_END, QUIZ, LEGOMNIA_STATUS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

const build = (lang) => {
    const t = (fr, en) => (lang === 'en' ? en : fr);

    return {
        seo: {
            title: t('Droit au Mali : OHADA, UEMOA, OMVS et hiérarchie des normes', 'Mali law: OHADA, WAEMU, OMVS and hierarchy of norms'),
            description: t("Droit malien : membre fondateur de l'OHADA et de l'UEMOA, OMVS, Autorité du bassin du Niger, hiérarchie des normes et place des traités. Carte interactive et quiz.", 'Malian law: founding member of OHADA and WAEMU, OMVS, Niger Basin Authority, hierarchy of norms and status of treaties. Interactive map and quiz.'),
        },
        breadcrumb: { home: t('Accueil', 'Home'), jurisdictions: t('Juridictions', 'Jurisdictions'), current: 'Mali' },
        hero: {
            eyebrow: t("Juridiction · Afrique de l'Ouest", 'Jurisdiction · West Africa'),
            titlePrefix: t('Le droit au', 'Law in'),
            titleCountry: 'Mali',
            intro: t(
                "Membre fondateur de l'OHADA et de l'UEMOA, le Mali combine un droit national d'inspiration civiliste, le droit uniforme OHADA et le droit communautaire de l'UEMOA, ainsi que des engagements de gestion partagée des fleuves Sénégal et Niger. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
                'A founding member of OHADA and WAEMU, Mali combines civil-law national legislation, uniform OHADA law and WAEMU community law, as well as commitments to the shared management of the Senegal and Niger rivers. This page sets out how they fit together, and which prevails in case of conflict.'),
        },
        facts: {
            title: t('Repères', 'Key facts'),
            items: [
                { label: t('Capitale', 'Capital'), value: 'Bamako' },
                { label: t('Langues', 'Languages'), value: t('Langues nationales officielles ; le français est langue de travail', 'National languages are official; French is a working language') },
                { label: t('Tradition juridique', 'Legal tradition'), value: t('Droit civiliste (droit écrit)', 'Civil law (codified law)') },
                { label: t('Constitution', 'Constitution'), value: t('22 juillet 2023', '22 July 2023') },
                { label: t('Droit des affaires', 'Business law'), value: t('OHADA, membre fondateur', 'OHADA, founding member') },
                { label: t('Hautes juridictions', 'Highest courts'), value: t('Cour constitutionnelle, Cour suprême, Cour des comptes', 'Constitutional Court, Supreme Court, Court of Auditors') },
                { label: t('Monnaie', 'Currency'), value: t('Franc CFA (XOF), émis par la BCEAO', 'CFA franc (XOF), issued by the BCEAO') },
                { label: t('Organisations régionales', 'Regional organizations'), value: t("7, dont l'UA et la ZLECAf", '7, including the AU and AfCFTA') },
            ],
        },
        orgs: {
            title: t('Le Mali au carrefour des organisations régionales', 'Mali at the crossroads of regional organizations'),
            intro: t(
                "Membre de sept organisations, le Mali relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), union économique et monétaire (UEMOA), gestion partagée des fleuves Sénégal et Niger (OMVS, ABN) et coopération sahélienne (AES).",
                'A member of seven organizations, Mali is subject to complementary legal regimes: uniform business law (OHADA), economic and monetary union (WAEMU), shared management of the Senegal and Niger rivers (OMVS, NBA) and Sahelian cooperation (AES).'),
            labels: {
                seat: t('Siège', 'Seat'), membership: t('Le Mali', 'Mali'), approach: t('Approche réglementaire', 'Regulatory approach'),
                effect: t('Effet en droit malien', 'Effect in Malian law'), court: t('Juridiction', 'Court'), data: t('Enjeu pour la donnée juridique', 'Legal data stakes'),
                members: t('États membres', 'Member states'), more: t('En savoir plus', 'Learn more'),
            },
            items: [
                ORGS.OHADA(lang, {
                    membership: t('membre fondateur (1993)', 'founding member (1993)'),
                    court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême du Mali.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Mali.'),
                    data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions maliennes appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Malian decisions applying the Uniform Acts.'),
                }),
                ORGS.UEMOA(lang, { membership: t('membre fondateur (1994)', 'founding member (1994)') }),
                ORGS.UA(lang, { law: LAW }),
                ORGS.ZLECAF(lang, { uemoa: true }),
                ORGS.OMVS(lang, { membership: t('membre fondateur (1972)', 'founding member (1972)'), law: LAW }),
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
            ],
            trapsTitle: t("Pièges fréquents : le Mali n'en est pas membre", 'Common pitfalls: Mali is not a member'),
            traps: [
                TRAPS.CEMAC_CFA(lang, t('le Mali', 'Mali')),
                { id: 'ZMAO', sig: t('ZMAO', 'WAMZ'), text: t("Zone monétaire de l'Afrique de l'Ouest, qui réunit six États hors franc CFA, dont la Guinée voisine. Le Mali n'en fait pas partie.", 'West African Monetary Zone, bringing together six states outside the CFA franc, including neighbouring Guinea. Mali is not a member.') },
                TRAPS.ENTENTE(lang, t('Le Mali', 'Mali')),
            ],
            overlapTitle: t('Le « bol de spaghettis » régional', 'The regional "spaghetti bowl"'),
            overlap: t(
                'Ces appartenances multiples créent des obligations parfois concurrentes. Le Burkina Faso et le Niger partagent par exemple quatre organisations sous-régionales avec le Mali. La ZLECAf vise à rationaliser cet enchevêtrement.',
                'These overlapping memberships create sometimes competing obligations. Burkina Faso and Niger, for example, share four sub-regional organizations with Mali. The AfCFTA aims to rationalise this tangle.'),
        },
        articulation: ARTICULATION_OHADA_UEMOA(lang, t('le Mali', 'Mali')),
        map: {
            title: t('Carte interactive', 'Interactive map'),
            text: t('Sélectionnez une organisation pour voir ses membres, ou affichez les chevauchements avec le Mali. Le défi carte propose six questions de géographie juridique.', 'Select an organization to see its members, or display overlaps with Mali. The map challenge offers six legal geography questions. The map is in French.'),
            open: t('Ouvrir la carte en plein écran', 'Open the map full screen'),
            frameTitle: t('Carte interactive des organisations régionales dont le Mali est membre', 'Interactive map of the regional organizations Mali belongs to'),
        },
        norms: {
            title: t("Quelle norme l'emporte ?", 'Which norm prevails?'),
            intro: t("L'ordre juridique malien s'organise en cinq niveaux. Le droit OHADA et le droit de l'UEMOA y occupent une place particulière : directement applicables, ils s'imposent même à une loi postérieure.", 'The Malian legal order has five levels. OHADA law and WAEMU law hold a special place: directly applicable, they prevail even over a later statute.'),
            labels: { basis: t('Fondement', 'Legal basis'), guard: t('Gardien', 'Guardian'), strength: t('Force juridique croissante', 'Increasing legal force') },
            levels: [
                { k: t('Niveau 1 · norme suprême', 'Level 1 · supreme norm'), t: 'Constitution', d: t("La Constitution du 22 juillet 2023 coiffe l'ordre juridique. Un engagement international comportant une clause contraire ne peut être ratifié qu'après révision de la Constitution.", 'The Constitution of 22 July 2023 sits at the top of the legal order. An international commitment containing a conflicting clause can only be ratified after the Constitution has been amended.'), basis: t('Constitution, dispositions relatives aux traités', 'Constitution, provisions on treaties'), guard: t('Cour constitutionnelle', 'Constitutional Court') },
                { k: t('Niveau 2 · supranational', 'Level 2 · supranational'), t: t('Droit OHADA et droit UEMOA', 'OHADA and WAEMU law'), d: t("Les Actes uniformes OHADA et les règlements de l'UEMOA sont directement applicables et priment toute disposition contraire de droit interne, antérieure ou postérieure. Les directives de l'UEMOA doivent, elles, être transposées.", 'OHADA Uniform Acts and WAEMU regulations are directly applicable and prevail over any conflicting provision of domestic law, whether earlier or later. WAEMU directives, by contrast, must be transposed.'), basis: t('Traité OHADA, art. 10 ; Traité UEMOA', 'OHADA Treaty, art. 10; WAEMU Treaty'), guard: t("CCJA (Abidjan), Cour de justice de l'UEMOA", 'CCJA (Abidjan), WAEMU Court of Justice') },
                { k: t('Niveau 3 · conventionnel', 'Level 3 · treaties'), t: t('Traités et accords ratifiés', 'Ratified treaties and agreements'), d: t('UA, ZLECAf, OMVS, ABN, AES : dès leur publication, les traités régulièrement ratifiés ont une autorité supérieure à celle des lois, sous réserve de réciprocité.', 'AU, AfCFTA, OMVS, NBA, AES: once published, duly ratified treaties prevail over statutes, subject to reciprocity.'), basis: t('Constitution, dispositions relatives aux traités', 'Constitution, provisions on treaties'), guard: t('Juridictions nationales et communautaires', 'National and community courts') },
                { k: t('Niveau 4 · législatif', 'Level 4 · legislative'), t: t('Lois et ordonnances', 'Statutes and ordinances'), d: t('Lois organiques, lois ordinaires et ordonnances. Elles doivent respecter la Constitution et céder devant les traités ratifiés et le droit communautaire.', 'Organic laws, ordinary laws and ordinances. They must comply with the Constitution and yield to ratified treaties and community law.'), basis: t('Constitution, domaine de la loi', 'Constitution, scope of statute law'), guard: t('Cour constitutionnelle, juridictions ordinaires', 'Constitutional Court, ordinary courts') },
                { k: t('Niveau 5 · réglementaire', 'Level 5 · regulatory'), t: t('Décrets, arrêtés, actes des collectivités', 'Decrees, orders, local authority acts'), d: t('Actes du pouvoir exécutif et des collectivités territoriales, pris dans le respect des lois. Un acte réglementaire illégal peut être annulé.', 'Acts of the executive and local authorities, adopted in compliance with statutes. An unlawful regulatory act can be annulled.'), basis: t('Principe de légalité', 'Principle of legality'), guard: t('Juridictions administratives, Cour suprême', 'Administrative courts, Supreme Court') },
            ],
            caseLaw: t("Et la jurisprudence ? Elle ne figure pas dans la pyramide, mais elle dit comment chaque niveau s'applique en pratique. C'est précisément ce corpus que LegOmnia s'attache à structurer et à rendre accessible.", 'What about case law? It does not appear in the pyramid, but it shows how each level applies in practice. That is precisely the body of law LegOmnia is working to structure and make accessible.'),
        },
        games: {
            title: t('Testez vos connaissances', 'Test your knowledge'),
            intro: t("Deux exercices interactifs : arbitrez des conflits de normes concrets, puis vérifiez ce que vous savez de l'intégration régionale du Mali.", "Two interactive exercises: resolve real conflicts between norms, then check what you know about Mali's regional integration."),
            arbiter: {
                title: t("L'arbitre des normes", 'The norms referee'),
                prompt: t("Quelle norme ou quelle juridiction l'emporte ?", 'Which norm or court prevails?'),
                items: [
                    t({ q: "Une loi malienne postérieure impose une condition supplémentaire à l'injonction de payer, contrairement à l'Acte uniforme portant organisation des procédures simplifiées de recouvrement.", o: ['La loi malienne, plus récente', "L'Acte uniforme OHADA"], a: 1, e: "L'Acte uniforme s'applique nonobstant toute disposition interne contraire, même postérieure (art. 10 du Traité)." },
                        { q: 'A later Malian statute adds a condition to payment orders, contrary to the Uniform Act on simplified debt recovery procedures.', o: ['The Malian statute, which is more recent', 'The OHADA Uniform Act'], a: 1, e: 'The Uniform Act applies notwithstanding any conflicting domestic provision, even a later one (Treaty, art. 10).' }),
                    t({ q: "Un pourvoi en cassation porte sur l'application de l'Acte uniforme relatif au droit des sociétés commerciales.", o: ['La Cour suprême du Mali', 'La CCJA'], a: 1, e: 'La CCJA, qui siège à Abidjan, est compétente (art. 14 du Traité) ; la juridiction nationale saisie doit se dessaisir à son profit.' },
                        { q: 'An appeal in cassation concerns the application of the Uniform Act on commercial companies.', o: ['The Supreme Court of Mali', 'The CCJA'], a: 1, e: 'The CCJA, based in Abidjan, has jurisdiction (Treaty, art. 14); the national court seised must decline jurisdiction in its favour.' }),
                    t({ q: "Un règlement de l'UEMOA entre en conflit avec une loi malienne.", o: ['La loi malienne', "Le règlement de l'UEMOA"], a: 1, e: "Les règlements de l'UEMOA sont directement applicables et priment le droit national contraire." },
                        { q: 'A WAEMU regulation conflicts with a Malian statute.', o: ['The Malian statute', 'The WAEMU regulation'], a: 1, e: 'WAEMU regulations are directly applicable and prevail over conflicting national law.' }),
                    t({ q: 'Un traité régulièrement ratifié et publié contredit une loi malienne antérieure.', o: ['Le traité', 'La loi'], a: 0, e: "Selon la Constitution, le traité a une autorité supérieure à celle des lois, sous réserve de son application par l'autre partie." },
                        { q: 'A duly ratified and published treaty conflicts with an earlier Malian statute.', o: ['The treaty', 'The statute'], a: 0, e: 'Under the Constitution, the treaty prevails over statutes, provided the other party applies it.' }),
                    t({ q: 'Un arrêté ministériel fixe une règle contraire à une loi en vigueur.', o: ["L'arrêté ministériel", 'La loi'], a: 1, e: "Principe de légalité : l'acte réglementaire doit respecter la loi et peut être annulé par le juge administratif." },
                        { q: 'A ministerial order sets a rule contrary to a statute in force.', o: ['The ministerial order', 'The statute'], a: 1, e: 'Principle of legality: a regulatory act must comply with statute and can be annulled by the administrative courts.' }),
                    t({ q: "Une directive de l'UEMOA n'a pas encore été transposée au Mali. Peut-elle remplacer d'elle-même la loi nationale ?", o: ['Oui, comme un règlement', 'Non, elle doit être transposée'], a: 1, e: "Contrairement aux règlements, les directives de l'UEMOA fixent des objectifs que chaque État doit transposer dans son droit." },
                        { q: 'A WAEMU directive has not yet been transposed in Mali. Can it replace national law on its own?', o: ['Yes, like a regulation', 'No, it must be transposed'], a: 1, e: 'Unlike regulations, WAEMU directives set objectives that each state must transpose into its own law.' }),
                ],
                end: ARBITER_END[lang],
            },
            quiz: {
                title: t('Quiz : intégration régionale', 'Quiz: regional integration'),
                items: [
                    QUIZ.notCemac(lang, 'le Mali', 'Mali'),
                    QUIZ.ccjaSeat(lang),
                    t({ q: 'De quand date la Constitution actuellement en vigueur ?', o: ['22 septembre 1960', '25 février 1992', '22 juillet 2023', '12 janvier 2012'], a: 2, e: 'La Constitution en vigueur a été promulguée le 22 juillet 2023.' },
                        { q: 'When was the current Constitution promulgated?', o: ['22 September 1960', '25 February 1992', '22 July 2023', '12 January 2012'], a: 2, e: 'The current Constitution was promulgated on 22 July 2023.' }),
                    t({ q: "L'OMVS réunit le Mali, le Sénégal, la Mauritanie et…", o: ['La Gambie', 'La Guinée', 'Le Niger', 'Le Burkina Faso'], a: 1, e: "La Guinée, où le fleuve Sénégal prend sa source, complète l'Organisation pour la mise en valeur du fleuve Sénégal." },
                        { q: 'The OMVS brings together Mali, Senegal, Mauritania and…', o: ['Gambia', 'Guinea', 'Niger', 'Burkina Faso'], a: 1, e: 'Guinea, where the Senegal River rises, completes the Senegal River Basin Development Organization.' }),
                    t({ q: 'Quels grands fleuves traversent le Mali ?', o: ['Le Congo et le Nil', 'Le Niger et le Sénégal', 'La Volta et la Gambie', 'Le Chari et le Logone'], a: 1, e: "Le Niger et le Sénégal traversent le Mali, d'où son appartenance à l'ABN et à l'OMVS." },
                        { q: 'Which major rivers flow through Mali?', o: ['The Congo and the Nile', 'The Niger and the Senegal', 'The Volta and the Gambia', 'The Chari and the Logone'], a: 1, e: 'The Niger and the Senegal flow through Mali, hence its membership of the NBA and the OMVS.' }),
                    QUIZ.abnRiver(lang),
                    QUIZ.bceao(lang),
                    QUIZ.uemoaSeat(lang),
                    QUIZ.uemoaCount(lang),
                    QUIZ.uemoaRegulation(lang, 'malien', 'Malian'),
                    QUIZ.portLouis(lang),
                    QUIZ.ohadaApproach(lang),
                    QUIZ.treatyAuthority(lang, { fr: 'Selon la Constitution', en: 'Under the Constitution' }),
                    t({ q: 'Quelle haute juridiction veille à la conformité des lois à la Constitution ?', o: ['La Cour suprême', 'La Cour constitutionnelle', 'La Cour des comptes', 'La CCJA'], a: 1, e: 'La Cour constitutionnelle contrôle la conformité des lois à la Constitution.' },
                        { q: 'Which high court reviews whether statutes comply with the Constitution?', o: ['The Supreme Court', 'The Constitutional Court', 'The Court of Auditors', 'The CCJA'], a: 1, e: 'The Constitutional Court reviews whether statutes comply with the Constitution.' }),
                    QUIZ.ohadaCount(lang, t('le Mali', 'Mali')),
                ],
                end: QUIZ_END[lang],
            },
            ui: GAMES_UI[lang],
        },
        faq: {
            title: t('Questions fréquentes sur le droit malien', 'Frequently asked questions about Malian law'),
            items: [
                t({ q: 'Le Mali est-il membre de la CEMAC ?', a: "Non. Le Mali est membre de l'UEMOA (Union économique et monétaire ouest-africaine), dont le franc CFA est émis par la BCEAO. La CEMAC regroupe six États d'Afrique centrale, dont le franc CFA est émis par une autre banque centrale, la BEAC." },
                    { q: 'Is Mali a member of CEMAC?', a: 'No. Mali is a member of WAEMU (West African Economic and Monetary Union), whose CFA franc is issued by the BCEAO. CEMAC brings together six Central African states, whose CFA franc is issued by a different central bank, the BEAC.' }),
                t({ q: "Le droit OHADA s'applique-t-il au Mali ?", a: "Oui. Le Mali est membre fondateur de l'OHADA, dont le Traité a été signé à Port-Louis en 1993. Les Actes uniformes y sont directement applicables, sans transposition, nonobstant toute disposition contraire de droit interne, antérieure ou postérieure (article 10 du Traité OHADA)." },
                    { q: 'Does OHADA law apply in Mali?', a: 'Yes. Mali is a founding member of OHADA, whose Treaty was signed in Port Louis in 1993. The Uniform Acts are directly applicable there without transposition, notwithstanding any conflicting provision of domestic law, whether earlier or later (OHADA Treaty, art. 10).' }),
                t({ q: 'Quelle juridiction statue en cassation sur le droit OHADA ?', a: "La Cour commune de justice et d'arbitrage (CCJA), qui siège à Abidjan. Elle se prononce en cassation sur l'application des Actes uniformes, en lieu et place de la Cour suprême du Mali (article 14 du Traité), et ses arrêts sont exécutoires sur le territoire de tous les États parties (article 20)." },
                    { q: 'Which court rules in cassation on OHADA law?', a: 'The Common Court of Justice and Arbitration (CCJA), based in Abidjan. It rules in cassation on the application of the Uniform Acts, in place of the Supreme Court of Mali (Treaty, art. 14), and its judgments are enforceable in all member states (art. 20).' }),
                t({ q: 'Quelle est la place des traités internationaux dans le droit malien ?', a: "La Constitution du 22 juillet 2023 reconnaît aux traités régulièrement ratifiés et publiés une autorité supérieure à celle des lois, sous réserve de leur application par l'autre partie. Le droit OHADA et le droit de l'UEMOA, directement applicables, priment en outre le droit interne contraire." },
                    { q: 'What is the status of international treaties in Malian law?', a: 'The Constitution of 22 July 2023 gives duly ratified and published treaties authority superior to statutes, provided the other party applies them. OHADA law and WAEMU law, being directly applicable, also prevail over conflicting domestic law.' }),
                t({ q: 'À quelles organisations régionales le Mali appartient-il ?', a: "Le Mali est membre de sept organisations : l'Union africaine, la ZLECAf, l'OHADA, l'UEMOA, l'OMVS, l'Autorité du bassin du Niger et la Confédération des États du Sahel (AES). Il n'est membre ni de la CEMAC, ni de la ZMAO, ni du Conseil de l'Entente." },
                    { q: 'Which regional organizations does Mali belong to?', a: 'Mali is a member of seven organizations: the African Union, the AfCFTA, OHADA, WAEMU, the OMVS, the Niger Basin Authority and the Confederation of Sahel States (AES). It is not a member of CEMAC, the WAMZ or the Council of the Entente.' }),
                LEGOMNIA_STATUS(lang, { adjFr: 'malien', adjEn: 'Malian', dont: 'le Mali', au: 'au Mali' }),
            ],
        },
        cta: {
            title: t('Le droit malien, bientôt à portée de main', 'Malian law, soon at your fingertips'),
            text: t("Rejoignez la liste d'attente pour accéder parmi les premiers à la recherche juridique LegOmnia sur le Mali et l'espace OHADA.", 'Join the waitlist to be among the first to access LegOmnia legal research on Mali and the OHADA area.'),
            waitlist: t("Rejoindre la liste d'attente", 'Join the waitlist'),
            omniscan: t('Découvrir OmniScan', 'Discover OmniScan'),
        },
        disclaimer: t(
            "Contenu pédagogique de synthèse ; il ne constitue pas une consultation juridique. Références : Constitution du 22 juillet 2023, Traité OHADA (art. 10, 14, 20), Traité de l'UEMOA, Accord ZLECAf (art. 19). Appartenances à jour en octobre 2026.",
            'Educational summary; it does not constitute legal advice. References: Constitution of 22 July 2023, OHADA Treaty (arts. 10, 14, 20), WAEMU Treaty, AfCFTA Agreement (art. 19). Memberships as of October 2026.'),
    };
};

export default {
    iso: 'MLI',
    flag: 'ml',
    name: { fr: 'Mali', en: 'Mali' },
    summary: {
        fr: 'OHADA, UEMOA, OMVS, Autorité du bassin du Niger : sept organisations régionales, et un droit communautaire qui prime la loi.',
        en: 'OHADA, WAEMU, OMVS, Niger Basin Authority: seven regional organizations, and community law that prevails over statute.',
    },
    mapUrl: '/supports/mali/carte-organisations-regionales.html',
    orgColors: ORG_COLORS,
    content: { fr: build('fr'), en: build('en') },
};
