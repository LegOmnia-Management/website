/**
 * Page juridiction : Guinée.
 * Même gabarit que les autres pays ; textes communs dans common.js.
 * Rédaction factuelle et sobre sur le cadre constitutionnel (choix éditorial).
 */
import { ORGS, TRAPS, ORG_COLORS, GAMES_UI, ARBITER_END, QUIZ_END, QUIZ, LEGOMNIA_STATUS } from './common';

const LAW = { fr: 'Constitution', en: 'Constitution' };

const build = (lang) => {
    const t = (fr, en) => (lang === 'en' ? en : fr);

    return {
        seo: {
            title: t('Droit en Guinée : OHADA, CEDEAO, OMVS et hiérarchie des normes', 'Guinea law: OHADA, ECOWAS, OMVS and hierarchy of norms'),
            description: t("Droit guinéen : OHADA, CEDEAO, Union du fleuve Mano, OMVS, OMVG, Autorité du bassin du Niger, hiérarchie des normes et place des traités. Carte interactive et quiz.", 'Guinean law: OHADA, ECOWAS, Mano River Union, OMVS, OMVG, Niger Basin Authority, hierarchy of norms and status of treaties. Interactive map and quiz.'),
        },
        breadcrumb: { home: t('Accueil', 'Home'), jurisdictions: t('Juridictions', 'Jurisdictions'), current: t('Guinée', 'Guinea') },
        hero: {
            eyebrow: t("Juridiction · Afrique de l'Ouest", 'Jurisdiction · West Africa'),
            titlePrefix: t('Le droit en', 'Law in'),
            titleCountry: t('Guinée', 'Guinea'),
            intro: t(
                "Membre de l'OHADA et de la CEDEAO, et « château d'eau » de l'Afrique de l'Ouest où prennent leur source le Niger, le Sénégal et la Gambie, la Guinée combine un droit national d'inspiration civiliste, le droit uniforme OHADA et de nombreux engagements de coopération régionale. Cette page en présente l'architecture, et ce qui l'emporte en cas de conflit.",
                "A member of OHADA and ECOWAS, and the \"water tower\" of West Africa where the Niger, Senegal and Gambia rivers rise, Guinea combines civil-law national legislation, uniform OHADA law and many regional cooperation commitments. This page sets out how they fit together, and which prevails in case of conflict."),
        },
        facts: {
            title: t('Repères', 'Key facts'),
            items: [
                { label: t('Capitale', 'Capital'), value: 'Conakry' },
                { label: t('Langue officielle', 'Official language'), value: t('Français', 'French') },
                { label: t('Tradition juridique', 'Legal tradition'), value: t('Droit civiliste (droit écrit)', 'Civil law (codified law)') },
                { label: t('Constitution', 'Constitution'), value: t('Adoptée par référendum en 2025', 'Adopted by referendum in 2025') },
                { label: t('Droit des affaires', 'Business law'), value: t('OHADA, État membre', 'OHADA, member state') },
                { label: t('Hautes juridictions', 'Highest courts'), value: t('Cour constitutionnelle, Cour suprême, Cour des comptes', 'Constitutional Court, Supreme Court, Court of Auditors') },
                { label: t('Monnaie', 'Currency'), value: t('Franc guinéen (GNF)', 'Guinean franc (GNF)') },
                { label: t('Organisations régionales', 'Regional organizations'), value: t("9, dont l'UA et la ZLECAf", '9, including the AU and AfCFTA') },
            ],
        },
        orgs: {
            title: t('La Guinée au carrefour des organisations régionales', 'Guinea at the crossroads of regional organizations'),
            intro: t(
                "Membre de neuf organisations, la Guinée relève de régimes juridiques complémentaires : uniformisation du droit des affaires (OHADA), intégration régionale (CEDEAO), coopération monétaire (ZMAO), coopération entre voisins (Union du fleuve Mano) et gestion partagée des trois grands fleuves qui y prennent leur source (OMVS, OMVG, ABN).",
                'A member of nine organizations, Guinea is subject to complementary legal regimes: uniform business law (OHADA), regional integration (ECOWAS), monetary cooperation (WAMZ), cooperation with its neighbours (Mano River Union) and shared management of the three major rivers that rise there (OMVS, OMVG, NBA).'),
            labels: {
                seat: t('Siège', 'Seat'), membership: t('La Guinée', 'Guinea'), approach: t('Approche réglementaire', 'Regulatory approach'),
                effect: t('Effet en droit guinéen', 'Effect in Guinean law'), court: t('Juridiction', 'Court'), data: t('Enjeu pour la donnée juridique', 'Legal data stakes'),
                members: t('États membres', 'Member states'), more: t('En savoir plus', 'Learn more'),
            },
            items: [
                ORGS.OHADA(lang, {
                    membership: t('État membre', 'member state'),
                    court: t("CCJA (Abidjan) : juge de cassation pour l'application des Actes uniformes, en lieu et place de la Cour suprême de Guinée.", 'CCJA (Abidjan): court of cassation for the application of Uniform Acts, in place of the Supreme Court of Guinea.'),
                    data: t('Socle de la base LegOmnia en construction : jurisprudence CCJA et décisions guinéennes appliquant les Actes uniformes.', 'Foundation of the LegOmnia database under construction: CCJA case law and Guinean decisions applying the Uniform Acts.'),
                }),
                ORGS.CEDEAO(lang, { membership: t('membre fondateur (1975)', 'founding member (1975)'), law: LAW }),
                ORGS.ZMAO(lang, { membership: t('État membre', 'member state') }),
                ORGS.UA(lang, { law: LAW }),
                ORGS.ZLECAF(lang),
                ORGS.MRU(lang, { membership: t('État membre', 'member state'), law: LAW }),
                ORGS.OMVS(lang, { membership: t('membre depuis 2006', 'member since 2006'), law: LAW }),
                ORGS.OMVG(lang, { membership: t('membre fondateur (1978)', 'founding member (1978)'), law: LAW }),
                ORGS.ABN(lang, { membership: t('État membre', 'member state'), law: LAW }),
            ],
            trapsTitle: t("Pièges fréquents : la Guinée n'en est pas membre", 'Common pitfalls: Guinea is not a member'),
            traps: [
                { id: 'UEMOA', sig: t('UEMOA', 'WAEMU'), text: t("Union économique et monétaire ouest-africaine, dont sont membres plusieurs voisins de la Guinée (Sénégal, Mali, Côte d'Ivoire, Guinée-Bissau). La Guinée n'en fait pas partie : elle dispose de sa propre monnaie, le franc guinéen.", "West African Economic and Monetary Union, which includes several of Guinea's neighbours (Senegal, Mali, Côte d'Ivoire, Guinea-Bissau). Guinea is not a member: it has its own currency, the Guinean franc.") },
                { id: 'CEMAC', sig: 'CEMAC', text: t("Union économique et monétaire de six États d'Afrique centrale. À ne pas confondre : c'est la Guinée équatoriale, et non la Guinée, qui en est membre.", 'Economic and monetary union of six Central African states. Not to be confused: it is Equatorial Guinea, not Guinea, that is a member.') },
                TRAPS.ENTENTE(lang, t('La Guinée', 'Guinea')),
            ],
            overlapTitle: t('Le « bol de spaghettis » régional', 'The regional "spaghetti bowl"'),
            overlap: t(
                "Ces appartenances multiples créent des obligations parfois concurrentes. Le Sénégal et la Côte d'Ivoire partagent par exemple quatre organisations sous-régionales avec la Guinée. La ZLECAf vise à rationaliser cet enchevêtrement.",
                "These overlapping memberships create sometimes competing obligations. Senegal and Côte d'Ivoire, for example, share four sub-regional organizations with Guinea. The AfCFTA aims to rationalise this tangle."),
        },
        map: {
            title: t('Carte interactive', 'Interactive map'),
            text: t('Sélectionnez une organisation pour voir ses membres, ou affichez les chevauchements avec la Guinée. Le défi carte propose six questions de géographie juridique.', 'Select an organization to see its members, or display overlaps with Guinea. The map challenge offers six legal geography questions. The map is in French.'),
            open: t('Ouvrir la carte en plein écran', 'Open the map full screen'),
            frameTitle: t('Carte interactive des organisations régionales dont la Guinée est membre', 'Interactive map of the regional organizations Guinea belongs to'),
        },
        norms: {
            title: t("Quelle norme l'emporte ?", 'Which norm prevails?'),
            intro: t("L'ordre juridique guinéen s'organise en cinq niveaux. Le droit OHADA y occupe une place particulière : directement applicable, il s'impose même à une loi postérieure.", 'The Guinean legal order has five levels. OHADA law holds a special place: directly applicable, it prevails even over a later statute.'),
            labels: { basis: t('Fondement', 'Legal basis'), guard: t('Gardien', 'Guardian'), strength: t('Force juridique croissante', 'Increasing legal force') },
            levels: [
                { k: t('Niveau 1 · norme suprême', 'Level 1 · supreme norm'), t: 'Constitution', d: t("La Constitution, adoptée par référendum en 2025, coiffe l'ordre juridique.", 'The Constitution, adopted by referendum in 2025, sits at the top of the legal order.'), basis: 'Constitution', guard: t('Cour constitutionnelle', 'Constitutional Court') },
                { k: t('Niveau 2 · supranational', 'Level 2 · supranational'), t: t('Droit OHADA', 'OHADA law'), d: t("Les Actes uniformes sont directement applicables et obligatoires, nonobstant toute disposition contraire de droit interne, antérieure ou postérieure. Aucune transposition n'est nécessaire.", 'Uniform Acts are directly applicable and binding, notwithstanding any conflicting provision of domestic law, whether earlier or later. No transposition is needed.'), basis: t('Traité OHADA, art. 10', 'OHADA Treaty, art. 10'), guard: t('CCJA, juge de cassation (art. 14), arrêts exécutoires (art. 20)', 'CCJA, court of cassation (art. 14), enforceable judgments (art. 20)') },
                { k: t('Niveau 3 · conventionnel', 'Level 3 · treaties'), t: t('Traités et accords ratifiés', 'Ratified treaties and agreements'), d: t('UA, ZLECAf, CEDEAO, ZMAO, Union du fleuve Mano, OMVS, OMVG, ABN : les traités régulièrement ratifiés et publiés ont une autorité supérieure à celle des lois.', 'AU, AfCFTA, ECOWAS, WAMZ, Mano River Union, OMVS, OMVG, NBA: duly ratified and published treaties prevail over statutes.'), basis: t('Constitution, dispositions relatives aux traités', 'Constitution, provisions on treaties'), guard: t('Juridictions nationales et communautaires', 'National and community courts') },
                { k: t('Niveau 4 · législatif', 'Level 4 · legislative'), t: t('Lois et ordonnances', 'Statutes and ordinances'), d: t('Lois organiques, lois ordinaires et ordonnances. Elles doivent respecter la Constitution et céder devant les traités ratifiés et le droit OHADA.', 'Organic laws, ordinary laws and ordinances. They must comply with the Constitution and yield to ratified treaties and OHADA law.'), basis: t('Constitution, domaine de la loi', 'Constitution, scope of statute law'), guard: t('Cour constitutionnelle, juridictions ordinaires', 'Constitutional Court, ordinary courts') },
                { k: t('Niveau 5 · réglementaire', 'Level 5 · regulatory'), t: t('Décrets, arrêtés, actes des collectivités', 'Decrees, orders, local authority acts'), d: t('Actes du pouvoir exécutif et des collectivités territoriales, pris dans le respect des lois. Un acte réglementaire illégal peut être annulé.', 'Acts of the executive and local authorities, adopted in compliance with statutes. An unlawful regulatory act can be annulled.'), basis: t('Principe de légalité', 'Principle of legality'), guard: t('Juridictions administratives, Cour suprême', 'Administrative courts, Supreme Court') },
            ],
            caseLaw: t("Et la jurisprudence ? Elle ne figure pas dans la pyramide, mais elle dit comment chaque niveau s'applique en pratique. C'est précisément ce corpus que LegOmnia s'attache à structurer et à rendre accessible.", 'What about case law? It does not appear in the pyramid, but it shows how each level applies in practice. That is precisely the body of law LegOmnia is working to structure and make accessible.'),
        },
        games: {
            title: t('Testez vos connaissances', 'Test your knowledge'),
            intro: t("Deux exercices interactifs : arbitrez des conflits de normes concrets, puis vérifiez ce que vous savez de l'intégration régionale de la Guinée.", "Two interactive exercises: resolve real conflicts between norms, then check what you know about Guinea's regional integration."),
            arbiter: {
                title: t("L'arbitre des normes", 'The norms referee'),
                prompt: t("Quelle norme ou quelle juridiction l'emporte ?", 'Which norm or court prevails?'),
                items: [
                    t({ q: "Une loi guinéenne postérieure fixe un capital social minimum différent de celui prévu par l'Acte uniforme relatif au droit des sociétés commerciales.", o: ['La loi guinéenne, plus récente', "L'Acte uniforme OHADA"], a: 1, e: "L'Acte uniforme s'applique nonobstant toute disposition interne contraire, même postérieure (art. 10 du Traité)." },
                        { q: 'A later Guinean statute sets a minimum share capital different from the one provided by the Uniform Act on commercial companies.', o: ['The Guinean statute, which is more recent', 'The OHADA Uniform Act'], a: 1, e: 'The Uniform Act applies notwithstanding any conflicting domestic provision, even a later one (Treaty, art. 10).' }),
                    t({ q: "Un pourvoi en cassation porte sur l'application de l'Acte uniforme portant organisation des sûretés.", o: ['La Cour suprême de Guinée', 'La CCJA'], a: 1, e: 'La CCJA, qui siège à Abidjan, est compétente (art. 14 du Traité) ; la juridiction nationale saisie doit se dessaisir à son profit.' },
                        { q: 'An appeal in cassation concerns the application of the Uniform Act on securities.', o: ['The Supreme Court of Guinea', 'The CCJA'], a: 1, e: 'The CCJA, based in Abidjan, has jurisdiction (Treaty, art. 14); the national court seised must decline jurisdiction in its favour.' }),
                    t({ q: "Une disposition ancienne du code civil guinéen contredit l'Acte uniforme relatif au droit commercial général.", o: ['Le code civil', "L'Acte uniforme OHADA"], a: 1, e: "L'Acte uniforme abroge et remplace les dispositions internes contraires, qu'elles soient antérieures ou postérieures." },
                        { q: 'An old provision of the Guinean civil code conflicts with the Uniform Act on general commercial law.', o: ['The civil code', 'The OHADA Uniform Act'], a: 1, e: 'The Uniform Act repeals and replaces conflicting domestic provisions, whether earlier or later.' }),
                    t({ q: 'Une sentence rendue dans le cadre de l’arbitrage institutionnel de la CCJA doit être exécutée en Guinée. Qui accorde l’exequatur ?', o: ['Le juge guinéen', 'La CCJA'], a: 1, e: "Pour l'arbitrage organisé par la CCJA, l'exequatur est accordé par la CCJA elle-même (art. 25 du Traité) et vaut dans tous les États parties." },
                        { q: 'An award made under the CCJA institutional arbitration must be enforced in Guinea. Who grants exequatur?', o: ['The Guinean judge', 'The CCJA'], a: 1, e: 'For arbitration administered by the CCJA, exequatur is granted by the CCJA itself (Treaty, art. 25) and is valid in all member states.' }),
                    t({ q: 'Un traité régulièrement ratifié et publié contredit une loi guinéenne antérieure.', o: ['Le traité', 'La loi'], a: 0, e: 'Les traités régulièrement ratifiés et publiés ont une autorité supérieure à celle des lois.' },
                        { q: 'A duly ratified and published treaty conflicts with an earlier Guinean statute.', o: ['The treaty', 'The statute'], a: 0, e: 'Duly ratified and published treaties prevail over statutes.' }),
                    t({ q: 'Un arrêté ministériel fixe une règle contraire à une loi en vigueur.', o: ["L'arrêté ministériel", 'La loi'], a: 1, e: "Principe de légalité : l'acte réglementaire doit respecter la loi et peut être annulé par le juge administratif." },
                        { q: 'A ministerial order sets a rule contrary to a statute in force.', o: ['The ministerial order', 'The statute'], a: 1, e: 'Principle of legality: a regulatory act must comply with statute and can be annulled by the administrative courts.' }),
                ],
                end: ARBITER_END[lang],
            },
            quiz: {
                title: t('Quiz : intégration régionale', 'Quiz: regional integration'),
                items: [
                    t({ q: 'Laquelle de ces organisations ne compte PAS la Guinée parmi ses membres ?', o: ['OHADA', 'CEDEAO', 'UEMOA', 'OMVS'], a: 2, e: "La Guinée n'est pas membre de l'UEMOA : elle dispose de sa propre monnaie, le franc guinéen." },
                        { q: 'Which of these organizations does NOT count Guinea among its members?', o: ['OHADA', 'ECOWAS', 'WAEMU', 'OMVS'], a: 2, e: 'Guinea is not a member of WAEMU: it has its own currency, the Guinean franc.' }),
                    t({ q: 'Quelle est la monnaie de la Guinée ?', o: ['Le franc CFA (XOF)', 'Le franc guinéen', 'Le cedi', 'Le dalasi'], a: 1, e: 'La Guinée utilise le franc guinéen (GNF).' },
                        { q: "What is Guinea's currency?", o: ['The CFA franc (XOF)', 'The Guinean franc', 'The cedi', 'The dalasi'], a: 1, e: 'Guinea uses the Guinean franc (GNF).' }),
                    t({ q: 'De quelle zone monétaire la Guinée est-elle membre ?', o: ['UEMOA', 'ZMAO', 'CEMAC', 'Aucune'], a: 1, e: "La Guinée est membre de la Zone monétaire de l'Afrique de l'Ouest (ZMAO), qui réunit six États de la CEDEAO hors franc CFA." },
                        { q: 'Which monetary zone is Guinea a member of?', o: ['WAEMU', 'WAMZ', 'CEMAC', 'None'], a: 1, e: 'Guinea is a member of the West African Monetary Zone (WAMZ), bringing together six ECOWAS states outside the CFA franc.' }),
                    QUIZ.ccjaSeat(lang),
                    t({ q: 'Lequel de ces fleuves ne prend PAS sa source en Guinée ?', o: ['Le Niger', 'Le Sénégal', 'La Gambie', 'La Volta'], a: 3, e: "Le Niger, le Sénégal et la Gambie prennent leur source en Guinée, surnommée le « château d'eau » de l'Afrique de l'Ouest. La Volta naît au Burkina Faso." },
                        { q: 'Which of these rivers does NOT rise in Guinea?', o: ['The Niger', 'The Senegal', 'The Gambia', 'The Volta'], a: 3, e: 'The Niger, Senegal and Gambia rise in Guinea, nicknamed the "water tower" of West Africa. The Volta rises in Burkina Faso.' }),
                    t({ q: "L'Union du fleuve Mano réunit la Guinée, le Liberia, la Sierra Leone et…", o: ['Le Sénégal', "La Côte d'Ivoire", 'Le Mali', 'La Guinée-Bissau'], a: 1, e: "La Côte d'Ivoire complète l'Union du fleuve Mano." },
                        { q: 'The Mano River Union brings together Guinea, Liberia, Sierra Leone and…', o: ['Senegal', "Côte d'Ivoire", 'Mali', 'Guinea-Bissau'], a: 1, e: "Côte d'Ivoire completes the Mano River Union." }),
                    t({ q: "Quel fleuve l'OMVG met-elle principalement en valeur ?", o: ['Le Sénégal', 'La Gambie', 'Le Niger', 'La Casamance'], a: 1, e: "L'Organisation pour la mise en valeur du fleuve Gambie réunit la Guinée, le Sénégal, la Gambie et la Guinée-Bissau." },
                        { q: 'Which river does the OMVG mainly develop?', o: ['The Senegal', 'The Gambia', 'The Niger', 'The Casamance'], a: 1, e: 'The Gambia River Basin Development Organization brings together Guinea, Senegal, Gambia and Guinea-Bissau.' }),
                    QUIZ.abnRiver(lang),
                    t({ q: 'En quelle année la CEDEAO a-t-elle été créée ?', o: ['1963', '1975', '1994', '2001'], a: 1, e: 'La CEDEAO a été créée en 1975 par le Traité de Lagos ; la Guinée en est membre fondateur.' },
                        { q: 'In which year was ECOWAS created?', o: ['1963', '1975', '1994', '2001'], a: 1, e: 'ECOWAS was created in 1975 by the Treaty of Lagos; Guinea is a founding member.' }),
                    QUIZ.cedeaoCourt(lang),
                    t({ q: 'Ne pas confondre : lequel de ces États est membre de la CEMAC ?', o: ['La Guinée', 'La Guinée-Bissau', 'La Guinée équatoriale', 'Le Ghana'], a: 2, e: "La Guinée équatoriale est membre de la CEMAC ; la Guinée et la Guinée-Bissau relèvent de l'Afrique de l'Ouest." },
                        { q: 'Not to be confused: which of these states is a member of CEMAC?', o: ['Guinea', 'Guinea-Bissau', 'Equatorial Guinea', 'Ghana'], a: 2, e: 'Equatorial Guinea is a member of CEMAC; Guinea and Guinea-Bissau are in West Africa.' }),
                    QUIZ.portLouis(lang),
                    QUIZ.ohadaApproach(lang),
                    QUIZ.treatyAuthority(lang, { fr: 'Selon la Constitution', en: 'Under the Constitution' }),
                    QUIZ.ohadaCount(lang, t('la Guinée', 'Guinea')),
                ],
                end: QUIZ_END[lang],
            },
            ui: GAMES_UI[lang],
        },
        faq: {
            title: t('Questions fréquentes sur le droit guinéen', 'Frequently asked questions about Guinean law'),
            items: [
                t({ q: "La Guinée est-elle membre de l'UEMOA ?", a: "Non. Contrairement à plusieurs de ses voisins, la Guinée n'est pas membre de l'UEMOA et n'utilise pas le franc CFA : elle dispose de sa propre monnaie, le franc guinéen. Elle est en revanche membre de la Zone monétaire de l'Afrique de l'Ouest (ZMAO)." },
                    { q: 'Is Guinea a member of WAEMU?', a: 'No. Unlike several of its neighbours, Guinea is not a member of WAEMU and does not use the CFA franc: it has its own currency, the Guinean franc. It is, however, a member of the West African Monetary Zone (WAMZ).' }),
                t({ q: "Le droit OHADA s'applique-t-il en Guinée ?", a: "Oui. La Guinée est membre de l'OHADA. Les Actes uniformes (sociétés commerciales, sûretés, recouvrement, procédures collectives, arbitrage, droit commercial général…) y sont directement applicables, sans transposition, nonobstant toute disposition contraire de droit interne, antérieure ou postérieure (article 10 du Traité OHADA)." },
                    { q: 'Does OHADA law apply in Guinea?', a: 'Yes. Guinea is a member of OHADA. The Uniform Acts (commercial companies, securities, debt recovery, insolvency, arbitration, general commercial law…) are directly applicable there without transposition, notwithstanding any conflicting provision of domestic law, whether earlier or later (OHADA Treaty, art. 10).' }),
                t({ q: 'Quelle juridiction statue en cassation sur le droit OHADA ?', a: "La Cour commune de justice et d'arbitrage (CCJA), qui siège à Abidjan. Elle se prononce en cassation sur l'application des Actes uniformes, en lieu et place de la Cour suprême de Guinée (article 14 du Traité), et ses arrêts sont exécutoires sur le territoire de tous les États parties (article 20)." },
                    { q: 'Which court rules in cassation on OHADA law?', a: 'The Common Court of Justice and Arbitration (CCJA), based in Abidjan. It rules in cassation on the application of the Uniform Acts, in place of the Supreme Court of Guinea (Treaty, art. 14), and its judgments are enforceable in all member states (art. 20).' }),
                t({ q: "Pourquoi la Guinée est-elle membre de trois organisations de bassin fluvial ?", a: "Le Niger, le Sénégal et la Gambie prennent leur source en Guinée. Elle est donc membre de l'Autorité du bassin du Niger (ABN), de l'Organisation pour la mise en valeur du fleuve Sénégal (OMVS) et de l'Organisation pour la mise en valeur du fleuve Gambie (OMVG), qui organisent la gestion partagée de ces ressources." },
                    { q: 'Why is Guinea a member of three river basin organizations?', a: 'The Niger, Senegal and Gambia rivers rise in Guinea. It is therefore a member of the Niger Basin Authority (NBA), the Senegal River Basin Development Organization (OMVS) and the Gambia River Basin Development Organization (OMVG), which organise the shared management of these resources.' }),
                t({ q: 'À quelles organisations régionales la Guinée appartient-elle ?', a: "La Guinée est membre de neuf organisations : l'Union africaine, la ZLECAf, l'OHADA, la CEDEAO, la ZMAO, l'Union du fleuve Mano, l'OMVS, l'OMVG et l'Autorité du bassin du Niger. Elle n'est membre ni de l'UEMOA, ni de la CEMAC, ni du Conseil de l'Entente." },
                    { q: 'Which regional organizations does Guinea belong to?', a: 'Guinea is a member of nine organizations: the African Union, the AfCFTA, OHADA, ECOWAS, the WAMZ, the Mano River Union, the OMVS, the OMVG and the Niger Basin Authority. It is not a member of WAEMU, CEMAC or the Council of the Entente.' }),
                LEGOMNIA_STATUS(lang, { adjFr: 'guinéen', adjEn: 'Guinean', dont: 'la Guinée', au: 'en Guinée' }),
            ],
        },
        cta: {
            title: t('Le droit guinéen, bientôt à portée de main', 'Guinean law, soon at your fingertips'),
            text: t("Rejoignez la liste d'attente pour accéder parmi les premiers à la recherche juridique LegOmnia sur la Guinée et l'espace OHADA.", 'Join the waitlist to be among the first to access LegOmnia legal research on Guinea and the OHADA area.'),
            waitlist: t("Rejoindre la liste d'attente", 'Join the waitlist'),
            omniscan: t('Découvrir OmniScan', 'Discover OmniScan'),
        },
        disclaimer: t(
            'Contenu pédagogique de synthèse ; il ne constitue pas une consultation juridique. Références : Constitution de la République de Guinée, Traité OHADA (art. 10, 14, 20, 25), Accord ZLECAf (art. 19). Appartenances à jour en octobre 2026.',
            'Educational summary; it does not constitute legal advice. References: Constitution of the Republic of Guinea, OHADA Treaty (arts. 10, 14, 20, 25), AfCFTA Agreement (art. 19). Memberships as of October 2026.'),
    };
};

export default {
    iso: 'GIN',
    flag: 'gn',
    name: { fr: 'Guinée', en: 'Guinea' },
    summary: {
        fr: "OHADA, CEDEAO, ZMAO, OMVS, OMVG, ABN : neuf organisations régionales, et trois grands fleuves qui prennent leur source dans le pays.",
        en: 'OHADA, ECOWAS, WAMZ, OMVS, OMVG, NBA: nine regional organizations, and three major rivers rising in the country.',
    },
    mapUrl: '/supports/guinee/carte-organisations-regionales.html',
    orgColors: ORG_COLORS,
    content: { fr: build('fr'), en: build('en') },
};
