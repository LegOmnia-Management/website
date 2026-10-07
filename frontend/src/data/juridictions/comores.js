/**
 * Page juridiction : Comores.
 * Seul État de l'océan Indien membre de l'OHADA : pas d'union monétaire,
 * appartenance au COMESA, à la SADC et à la COI. Textes communs dans common.js.
 */
import { ORGS, ORG_COLORS, GAMES_UI, ARBITER_END, QUIZ_END, QUIZ, LEGOMNIA_STATUS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

const build = (lang) => {
    const t = (fr, en) => (lang === 'en' ? en : fr);

    return {
        seo: {
            title: t('Droit aux Comores : OHADA, COMESA, SADC et hiérarchie des normes', 'Comoros law: OHADA, COMESA, SADC and hierarchy of norms'),
            description: t("Droit comorien : OHADA, COMESA, SADC, Commission de l'océan Indien, hiérarchie des normes et place des traités. Le seul État de l'océan Indien membre de l'OHADA. Carte interactive et quiz.", 'Comorian law: OHADA, COMESA, SADC, Indian Ocean Commission, hierarchy of norms and status of treaties. The only Indian Ocean state in OHADA. Interactive map and quiz.'),
        },
        breadcrumb: { home: t('Accueil', 'Home'), jurisdictions: t('Juridictions', 'Jurisdictions'), current: t('Comores', 'Comoros') },
        hero: {
            eyebrow: t("Juridiction · Océan Indien", 'Jurisdiction · Indian Ocean'),
            titlePrefix: t('Le droit aux', 'Law in the'),
            titleCountry: t('Comores', 'Comoros'),
            intro: t(
                "Seul État de l'océan Indien membre de l'OHADA, l'Union des Comores combine un droit national où coexistent droit écrit d'inspiration civiliste, droit musulman et droit coutumier, le droit uniforme OHADA et les engagements du COMESA et de la SADC. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
                'The only Indian Ocean state in OHADA, the Union of the Comoros combines national law in which civil-law codified law, Islamic law and customary law coexist, uniform OHADA law and the commitments of COMESA and SADC. This page sets out how they fit together, and which prevails in case of conflict.'),
        },
        facts: {
            title: t('Repères', 'Key facts'),
            items: [
                { label: t('Capitale', 'Capital'), value: 'Moroni' },
                { label: t('Langues officielles', 'Official languages'), value: t('Comorien, français et arabe', 'Comorian, French and Arabic') },
                { label: t('Tradition juridique', 'Legal tradition'), value: t('Droit écrit civiliste, droit musulman et droit coutumier', 'Civil-law codified law, Islamic law and customary law') },
                { label: t('Constitution', 'Constitution'), value: t('Révisée par référendum en 2018', 'Amended by referendum in 2018') },
                { label: t('Droit des affaires', 'Business law'), value: t('OHADA, État membre', 'OHADA, member state') },
                { label: t('Haute juridiction', 'Highest court'), value: t('Cour suprême', 'Supreme Court') },
                { label: t('Monnaie', 'Currency'), value: t('Franc comorien (KMF), émis par la Banque centrale des Comores', 'Comorian franc (KMF), issued by the Central Bank of the Comoros') },
                { label: t('Organisations régionales', 'Regional organizations'), value: t("6, dont l'UA et la ZLECAf", '6, including the AU and AfCFTA') },
            ],
        },
        orgs: {
            title: t('Les Comores au carrefour des organisations régionales', 'The Comoros at the crossroads of regional organizations'),
            intro: t(
                "Membres de six organisations, les Comores relèvent de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), marché commun (COMESA), intégration par protocoles (SADC) et coopération insulaire (Commission de l'océan Indien).",
                'A member of six organizations, the Comoros is subject to complementary legal regimes: uniform business law (OHADA), common market (COMESA), integration through protocols (SADC) and island cooperation (Indian Ocean Commission).'),
            labels: {
                seat: t('Siège', 'Seat'), membership: t('Les Comores', 'The Comoros'), approach: t('Approche réglementaire', 'Regulatory approach'),
                effect: t('Effet en droit comorien', 'Effect in Comorian law'), court: t('Juridiction', 'Court'), data: t('Enjeu pour la donnée juridique', 'Legal data stakes'),
                members: t('États membres', 'Member states'), more: t('En savoir plus', 'Learn more'),
            },
            items: [
                ORGS.OHADA(lang, {
                    membership: t('État membre', 'member state'),
                    court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême des Comores.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of the Comoros.'),
                    data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions comoriennes appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Comorian decisions applying the Uniform Acts.'),
                }),
                ORGS.COMESA(lang, { membership: t('État membre', 'member state') }),
                ORGS.SADC(lang, { membership: t('membre (depuis 2017)', 'member (since 2017)') }),
                ORGS.UA(lang, { law: LAW }),
                ORGS.ZLECAF(lang),
                ORGS.COI(lang, { membership: t('État membre', 'member state'), law: LAW }),
            ],
            trapsTitle: t("Pièges fréquents : les Comores n'en sont pas membres", 'Common pitfalls: the Comoros is not a member'),
            traps: [
                { id: 'CFA', sig: t('UEMOA / CEMAC', 'WAEMU / CEMAC'), text: t("Les deux unions monétaires du franc CFA. Les Comores n'en font pas partie : le franc comorien, émis par la Banque centrale des Comores, est une monnaie distincte.", 'The two CFA franc monetary unions. The Comoros is not a member of either: the Comorian franc, issued by the Central Bank of the Comoros, is a separate currency.') },
                { id: 'EAC', sig: 'EAC', text: t("Communauté d'Afrique de l'Est, union douanière du continent voisin. Les Comores n'en sont pas membres.", 'East African Community, a customs union on the neighbouring mainland. The Comoros is not a member.') },
                { id: 'CEEAC', sig: t('CEEAC', 'ECCAS'), text: t("Communauté économique des États de l'Afrique centrale. Sans effet aux Comores ; ses membres OHADA produisent toutefois une jurisprudence pertinente.", 'Economic Community of Central African States. No effect in the Comoros, but its OHADA members produce relevant case law.') },
            ],
            overlapTitle: t('Le « bol de spaghettis » régional', 'The regional "spaghetti bowl"'),
            overlap: t(
                "Ces appartenances multiples créent des obligations parfois concurrentes. Madagascar, Maurice, les Seychelles et la RDC partagent par exemple trois organisations sous-régionales avec les Comores. La ZLECAf vise à rationaliser cet enchevêtrement.",
                'These overlapping memberships create sometimes competing obligations. Madagascar, Mauritius, Seychelles and the DRC, for example, share three sub-regional organizations with the Comoros. The AfCFTA aims to rationalise this tangle.'),
        },
        map: {
            title: t('Carte interactive', 'Interactive map'),
            text: t('Sélectionnez une organisation pour voir ses membres, ou affichez les chevauchements avec les Comores. Le défi carte propose six questions de géographie juridique.', 'Select an organization to see its members, or display overlaps with the Comoros. The map challenge offers six legal geography questions. The map is in French.'),
            open: t('Ouvrir la carte en plein écran', 'Open the map full screen'),
            frameTitle: t('Carte interactive des organisations régionales dont les Comores sont membres', 'Interactive map of the regional organizations the Comoros belongs to'),
        },
        norms: {
            title: t("Quelle norme l'emporte ?", 'Which norm prevails?'),
            intro: t("L'ordre juridique comorien s'organise en cinq niveaux. Le droit OHADA y occupe une place particulière : directement applicable, il s'impose même à une loi postérieure.", 'The Comorian legal order has five levels. OHADA law holds a special place: directly applicable, it prevails even over a later statute.'),
            labels: { basis: t('Fondement', 'Legal basis'), guard: t('Gardien', 'Guardian'), strength: t('Force juridique croissante', 'Increasing legal force') },
            levels: [
                { k: t('Niveau 1 · norme suprême', 'Level 1 · supreme norm'), t: 'Constitution', d: t("La Constitution, révisée par référendum en 2018, coiffe l'ordre juridique.", 'The Constitution, amended by referendum in 2018, sits at the top of the legal order.'), basis: 'Constitution', guard: t('Cour suprême (section constitutionnelle)', 'Supreme Court (constitutional section)') },
                { k: t('Niveau 2 · supranational', 'Level 2 · supranational'), t: t('Droit OHADA', 'OHADA law'), d: t("Les Actes uniformes sont directement applicables et obligatoires, nonobstant toute disposition contraire de droit interne, antérieure ou postérieure. Aucune transposition n'est nécessaire.", 'Uniform Acts are directly applicable and binding, notwithstanding any conflicting provision of domestic law, whether earlier or later. No transposition is needed.'), basis: t('Traité OHADA, art. 10', 'OHADA Treaty, art. 10'), guard: t('CCJA, juge de cassation (art. 14), arrêts exécutoires (art. 20)', 'CCJA, court of cassation (art. 14), enforceable judgments (art. 20)') },
                { k: t('Niveau 3 · conventionnel', 'Level 3 · treaties'), t: t('Traités et accords ratifiés', 'Ratified treaties and agreements'), d: t('UA, ZLECAf, COMESA, SADC, COI : les traités régulièrement ratifiés et publiés ont une autorité supérieure à celle des lois.', 'AU, AfCFTA, COMESA, SADC, IOC: duly ratified and published treaties prevail over statutes.'), basis: t('Constitution, dispositions relatives aux traités', 'Constitution, provisions on treaties'), guard: t('Juridictions nationales et communautaires', 'National and community courts') },
                { k: t('Niveau 4 · législatif', 'Level 4 · legislative'), t: t('Lois et ordonnances', 'Statutes and ordinances'), d: t('Lois organiques, lois ordinaires et ordonnances. Elles doivent respecter la Constitution et céder devant les traités ratifiés et le droit OHADA.', 'Organic laws, ordinary laws and ordinances. They must comply with the Constitution and yield to ratified treaties and OHADA law.'), basis: t('Constitution, domaine de la loi', 'Constitution, scope of statute law'), guard: t('Cour suprême, juridictions ordinaires', 'Supreme Court, ordinary courts') },
                { k: t('Niveau 5 · réglementaire', 'Level 5 · regulatory'), t: t('Décrets, arrêtés, actes des îles autonomes', 'Decrees, orders, acts of the autonomous islands'), d: t('Actes du pouvoir exécutif de l’Union et des îles autonomes, pris dans le respect des lois. Un acte réglementaire illégal peut être annulé.', 'Acts of the Union executive and of the autonomous islands, adopted in compliance with statutes. An unlawful regulatory act can be annulled.'), basis: t('Principe de légalité', 'Principle of legality'), guard: t('Juridictions administratives, Cour suprême', 'Administrative courts, Supreme Court') },
            ],
            caseLaw: t("Et la jurisprudence ? Elle ne figure pas dans la pyramide, mais elle dit comment chaque niveau s'applique en pratique. C'est précisément ce corpus que LegOmnia s'attache à structurer et à rendre accessible.", 'What about case law? It does not appear in the pyramid, but it shows how each level applies in practice. That is precisely the body of law LegOmnia is working to structure and make accessible.'),
        },
        games: {
            title: t('Testez vos connaissances', 'Test your knowledge'),
            intro: t("Deux exercices interactifs : arbitrez des conflits de normes concrets, puis vérifiez ce que vous savez de l'intégration régionale des Comores.", "Two interactive exercises: resolve real conflicts between norms, then check what you know about the Comoros' regional integration."),
            arbiter: {
                title: t("L'arbitre des normes", 'The norms referee'),
                prompt: t("Quelle norme ou quelle juridiction l'emporte ?", 'Which norm or court prevails?'),
                items: [
                    t({ q: "Une loi comorienne postérieure impose une formalité supplémentaire à la cession de parts sociales, contrairement à l'Acte uniforme relatif au droit des sociétés commerciales.", o: ['La loi comorienne, plus récente', "L'Acte uniforme OHADA"], a: 1, e: "L'Acte uniforme s'applique nonobstant toute disposition interne contraire, même postérieure (art. 10 du Traité)." },
                        { q: 'A later Comorian statute adds a formality for transferring company shares, contrary to the Uniform Act on commercial companies.', o: ['The Comorian statute, which is more recent', 'The OHADA Uniform Act'], a: 1, e: 'The Uniform Act applies notwithstanding any conflicting domestic provision, even a later one (Treaty, art. 10).' }),
                    t({ q: "Un pourvoi en cassation porte sur l'application de l'Acte uniforme portant organisation des sûretés.", o: ['La Cour suprême des Comores', 'La CCJA'], a: 1, e: 'La CCJA, qui siège à Abidjan, est compétente (art. 14 du Traité) ; la juridiction nationale saisie doit se dessaisir à son profit.' },
                        { q: 'An appeal in cassation concerns the application of the Uniform Act on securities.', o: ['The Supreme Court of the Comoros', 'The CCJA'], a: 1, e: 'The CCJA, based in Abidjan, has jurisdiction (Treaty, art. 14); the national court seised must decline jurisdiction in its favour.' }),
                    t({ q: 'Une fusion entre entreprises actives dans plusieurs États du COMESA atteint les seuils de notification régionaux. Quelle autorité est compétente ?', o: ["L'autorité nationale seule", 'La Commission de la concurrence du COMESA'], a: 1, e: 'Les concentrations transfrontalières qui atteignent les seuils du règlement relèvent du contrôle régional de la Commission de la concurrence du COMESA.' },
                        { q: 'A merger between companies active in several COMESA states meets the regional notification thresholds. Which authority is competent?', o: ['The national authority alone', 'The COMESA Competition Commission'], a: 1, e: 'Cross-border mergers that meet the regulation thresholds fall under the regional control of the COMESA Competition Commission.' }),
                    t({ q: 'Un traité régulièrement ratifié et publié contredit une loi comorienne antérieure.', o: ['Le traité', 'La loi'], a: 0, e: 'Les traités régulièrement ratifiés et publiés ont une autorité supérieure à celle des lois.' },
                        { q: 'A duly ratified and published treaty conflicts with an earlier Comorian statute.', o: ['The treaty', 'The statute'], a: 0, e: 'Duly ratified and published treaties prevail over statutes.' }),
                    t({ q: "Une sentence rendue dans le cadre de l'arbitrage institutionnel de la CCJA doit être exécutée aux Comores. Qui accorde l'exequatur ?", o: ['Le juge comorien', 'La CCJA'], a: 1, e: "Pour l'arbitrage organisé par la CCJA, l'exequatur est accordé par la CCJA elle-même (art. 25 du Traité) et vaut dans tous les États parties." },
                        { q: 'An award made under the CCJA institutional arbitration must be enforced in the Comoros. Who grants exequatur?', o: ['The Comorian judge', 'The CCJA'], a: 1, e: 'For arbitration administered by the CCJA, exequatur is granted by the CCJA itself (Treaty, art. 25) and is valid in all member states.' }),
                    t({ q: 'Un arrêté ministériel fixe une règle contraire à une loi en vigueur.', o: ["L'arrêté ministériel", 'La loi'], a: 1, e: "Principe de légalité : l'acte réglementaire doit respecter la loi et peut être annulé par le juge administratif." },
                        { q: 'A ministerial order sets a rule contrary to a statute in force.', o: ['The ministerial order', 'The statute'], a: 1, e: 'Principle of legality: a regulatory act must comply with statute and can be annulled by the administrative courts.' }),
                ],
                end: ARBITER_END[lang],
            },
            quiz: {
                title: t('Quiz : intégration régionale', 'Quiz: regional integration'),
                items: [
                    t({ q: 'Laquelle de ces organisations ne compte PAS les Comores parmi ses membres ?', o: ['COMESA', 'SADC', 'OHADA', 'UEMOA'], a: 3, e: "Les Comores ne sont pas membres de l'UEMOA : elles utilisent le franc comorien, et non le franc CFA." },
                        { q: 'Which of these organizations does NOT count the Comoros among its members?', o: ['COMESA', 'SADC', 'OHADA', 'WAEMU'], a: 3, e: 'The Comoros is not a member of WAEMU: it uses the Comorian franc, not the CFA franc.' }),
                    t({ q: 'Quelle est la monnaie des Comores ?', o: ['Le franc CFA (XOF)', 'Le franc CFA (XAF)', 'Le franc comorien', "L'ariary"], a: 2, e: 'Les Comores utilisent le franc comorien (KMF), émis par la Banque centrale des Comores.' },
                        { q: 'What is the currency of the Comoros?', o: ['The CFA franc (XOF)', 'The CFA franc (XAF)', 'The Comorian franc', 'The ariary'], a: 2, e: 'The Comoros uses the Comorian franc (KMF), issued by the Central Bank of the Comoros.' }),
                    t({ q: 'Quelle est la capitale de l’Union des Comores ?', o: ['Mutsamudu', 'Moroni', 'Fomboni', 'Mamoudzou'], a: 1, e: 'Moroni, sur l’île de Grande Comore, est la capitale de l’Union des Comores.' },
                        { q: 'What is the capital of the Union of the Comoros?', o: ['Mutsamudu', 'Moroni', 'Fomboni', 'Mamoudzou'], a: 1, e: 'Moroni, on the island of Grande Comore, is the capital of the Union of the Comoros.' }),
                    t({ q: 'Quelles sont les langues officielles des Comores ?', o: ['Français seulement', 'Comorien, français et arabe', 'Français et anglais', 'Arabe et swahili'], a: 1, e: 'Le comorien, le français et l’arabe sont les trois langues officielles.' },
                        { q: 'What are the official languages of the Comoros?', o: ['French only', 'Comorian, French and Arabic', 'French and English', 'Arabic and Swahili'], a: 1, e: 'Comorian, French and Arabic are the three official languages.' }),
                    t({ q: "Où siège la Commission de l'océan Indien ?", o: ['Moroni', 'Antananarivo', 'Ebène (Maurice)', 'Victoria (Seychelles)'], a: 2, e: "La Commission de l'océan Indien a son siège à Ebène, à Maurice." },
                        { q: 'Where is the Indian Ocean Commission headquartered?', o: ['Moroni', 'Antananarivo', 'Ebene (Mauritius)', 'Victoria (Seychelles)'], a: 2, e: 'The Indian Ocean Commission is headquartered in Ebene, Mauritius.' }),
                    t({ q: 'Où siège le COMESA ?', o: ['Nairobi', 'Lusaka', 'Gaborone', 'Kigali'], a: 1, e: "Le Marché commun de l'Afrique orientale et australe a son siège à Lusaka, en Zambie." },
                        { q: 'Where is COMESA headquartered?', o: ['Nairobi', 'Lusaka', 'Gaborone', 'Kigali'], a: 1, e: 'The Common Market for Eastern and Southern Africa is headquartered in Lusaka, Zambia.' }),
                    t({ q: 'Depuis quelle année les Comores sont-elles membres de la SADC ?', o: ['1992', '2005', '2017', '2022'], a: 2, e: "Les Comores ont rejoint la Communauté de développement de l'Afrique australe en 2017." },
                        { q: 'Since what year has the Comoros been a member of SADC?', o: ['1992', '2005', '2017', '2022'], a: 2, e: 'The Comoros joined the Southern African Development Community in 2017.' }),
                    t({ q: "Quel autre État de l'OHADA est, comme les Comores, membre du COMESA et de la SADC ?", o: ['Le Cameroun', 'La RDC', 'Le Sénégal', 'Madagascar'], a: 1, e: "La RDC est le seul autre membre de l'OHADA à appartenir à la fois au COMESA et à la SADC ; Madagascar n'est pas membre de l'OHADA." },
                        { q: 'Which other OHADA state is, like the Comoros, a member of both COMESA and SADC?', o: ['Cameroon', 'The DRC', 'Senegal', 'Madagascar'], a: 1, e: 'The DRC is the only other OHADA member belonging to both COMESA and SADC; Madagascar is not an OHADA member.' }),
                    t({ q: 'Quelle juridiction régionale est suspendue depuis 2010 ?', o: ['La Cour de justice du COMESA', 'Le Tribunal de la SADC', 'La CCJA', "La Cour africaine des droits de l'homme"], a: 1, e: 'Le Tribunal de la SADC a été suspendu en 2010.' },
                        { q: 'Which regional court has been suspended since 2010?', o: ['The COMESA Court of Justice', 'The SADC Tribunal', 'The CCJA', "The African Court on Human and Peoples' Rights"], a: 1, e: 'The SADC Tribunal was suspended in 2010.' }),
                    QUIZ.ccjaSeat(lang),
                    QUIZ.portLouis(lang),
                    QUIZ.ohadaApproach(lang),
                    QUIZ.treatyAuthority(lang, { fr: 'Selon la Constitution', en: 'Under the Constitution' }),
                    t({ q: 'Quelles traditions juridiques coexistent aux Comores ?', o: ['Common law seulement', 'Droit écrit, droit musulman et droit coutumier', 'Droit coutumier seulement', 'Droit écrit seulement'], a: 1, e: 'Aux Comores, le droit écrit d’inspiration civiliste coexiste avec le droit musulman et le droit coutumier.' },
                        { q: 'Which legal traditions coexist in the Comoros?', o: ['Common law only', 'Codified law, Islamic law and customary law', 'Customary law only', 'Codified law only'], a: 1, e: 'In the Comoros, civil-law codified law coexists with Islamic law and customary law.' }),
                    QUIZ.ohadaCount(lang, t('les Comores', 'the Comoros')),
                ],
                end: QUIZ_END[lang],
            },
            ui: GAMES_UI[lang],
        },
        faq: {
            title: t('Questions fréquentes sur le droit comorien', 'Frequently asked questions about Comorian law'),
            items: [
                t({ q: 'Les Comores utilisent-elles le franc CFA ?', a: "Non. Les Comores utilisent le franc comorien (KMF), émis par la Banque centrale des Comores. Elles ne sont membres ni de l'UEMOA, ni de la CEMAC, les deux unions monétaires du franc CFA." },
                    { q: 'Does the Comoros use the CFA franc?', a: 'No. The Comoros uses the Comorian franc (KMF), issued by the Central Bank of the Comoros. It is not a member of WAEMU or CEMAC, the two CFA franc monetary unions.' }),
                t({ q: "Le droit OHADA s'applique-t-il aux Comores ?", a: "Oui. Les Comores sont membres de l'OHADA. Les Actes uniformes y sont directement applicables, sans transposition, nonobstant toute disposition contraire de droit interne, antérieure ou postérieure (article 10 du Traité OHADA)." },
                    { q: 'Does OHADA law apply in the Comoros?', a: 'Yes. The Comoros is a member of OHADA. The Uniform Acts are directly applicable there without transposition, notwithstanding any conflicting provision of domestic law, whether earlier or later (OHADA Treaty, art. 10).' }),
                t({ q: 'Quelle juridiction statue en cassation sur le droit OHADA ?', a: "La Cour commune de justice et d'arbitrage (CCJA), qui siège à Abidjan. Elle se prononce en cassation sur l'application des Actes uniformes, en lieu et place de la Cour suprême des Comores (article 14 du Traité), et ses arrêts sont exécutoires sur le territoire de tous les États parties (article 20)." },
                    { q: 'Which court rules in cassation on OHADA law?', a: 'The Common Court of Justice and Arbitration (CCJA), based in Abidjan. It rules in cassation on the application of the Uniform Acts, in place of the Supreme Court of the Comoros (Treaty, art. 14), and its judgments are enforceable in all member states (art. 20).' }),
                t({ q: "Comment s'articulent l'OHADA, le COMESA et la SADC aux Comores ?", a: "L'OHADA uniformise le droit des affaires (sociétés, sûretés, recouvrement, arbitrage), tandis que le COMESA et la SADC portent sur l'intégration commerciale et économique. Le COMESA dispose notamment d'un contrôle régional des concentrations ; les protocoles de la SADC s'appliquent après ratification." },
                    { q: 'How do OHADA, COMESA and SADC fit together in the Comoros?', a: 'OHADA harmonises business law (companies, securities, debt recovery, arbitration), while COMESA and SADC deal with trade and economic integration. COMESA notably operates regional merger control; SADC protocols apply after ratification.' }),
                t({ q: 'À quelles organisations régionales les Comores appartiennent-elles ?', a: "Les Comores sont membres de six organisations : l'Union africaine, la ZLECAf, l'OHADA, le COMESA, la SADC et la Commission de l'océan Indien. Elles ne sont membres ni de l'UEMOA, ni de la CEMAC, ni de l'EAC." },
                    { q: 'Which regional organizations does the Comoros belong to?', a: 'The Comoros is a member of six organizations: the African Union, the AfCFTA, OHADA, COMESA, SADC and the Indian Ocean Commission. It is not a member of WAEMU, CEMAC or the EAC.' }),
                LEGOMNIA_STATUS(lang, { adjFr: 'comorien', adjEn: 'Comorian', dont: 'les Comores', au: 'aux Comores', plural: true }),
            ],
        },
        cta: {
            title: t('Le droit comorien, bientôt à portée de main', 'Comorian law, soon at your fingertips'),
            text: t("Rejoignez la liste d'attente pour accéder parmi les premiers à la recherche juridique LegOmnia sur les Comores et l'espace OHADA.", 'Join the waitlist to be among the first to access LegOmnia legal research on the Comoros and the OHADA area.'),
            waitlist: t("Rejoindre la liste d'attente", 'Join the waitlist'),
            omniscan: t('Découvrir OmniScan', 'Discover OmniScan'),
        },
        disclaimer: t(
            "Contenu pédagogique de synthèse ; il ne constitue pas une consultation juridique. Références : Constitution de l'Union des Comores, Traité OHADA (art. 10, 14, 20, 25), Accord ZLECAf (art. 19). Appartenances à jour en octobre 2026.",
            'Educational summary; it does not constitute legal advice. References: Constitution of the Union of the Comoros, OHADA Treaty (arts. 10, 14, 20, 25), AfCFTA Agreement (art. 19). Memberships as of October 2026.'),
    };
};

export default {
    iso: 'COM',
    flag: 'km',
    name: { fr: 'Comores', en: 'Comoros' },
    summary: {
        fr: "OHADA, COMESA, SADC, Commission de l'océan Indien : six organisations régionales, et le seul État de l'océan Indien membre de l'OHADA.",
        en: 'OHADA, COMESA, SADC, Indian Ocean Commission: six regional organizations, and the only Indian Ocean state in OHADA.',
    },
    mapUrl: '/supports/comores/carte-organisations-regionales.html',
    orgColors: ORG_COLORS,
    content: { fr: build('fr'), en: build('en') },
};
