/**
 * Gabarit des pages des pays de la CEMAC (Cameroun, Gabon, Congo, Centrafrique…).
 *
 * Le contenu commun (CEMAC, CEEAC, OHADA, quiz, FAQ) est construit ici ;
 * chaque pays fournit ses spécificités dans un objet `cfg` aux valeurs { fr, en }.
 */
import { ORG_COLORS, ARTICULATION_OHADA_CEMAC, GAMES_UI, ARBITER_END, QUIZ_END, QUIZ, LEGOMNIA_STATUS } from './common';

export const buildCemacPage = (cfg) => {
    const build = (lang) => {
        const t = (fr, en) => (lang === 'en' ? en : fr);
        const L = (pair) => pair[lang];
        const adjFr = cfg.adj.fr, adjEn = cfg.adj.en;

        const level1 = t(
            `${cfg.constitution.fr} coiffe l'ordre juridique.${cfg.refs.revise ? " Un engagement international comportant une clause contraire ne peut être ratifié qu'après révision de la Constitution." : ''}`,
            `${cfg.constitution.en} sits at the top of the legal order.${cfg.refs.revise ? ' An international commitment containing a conflicting clause can only be ratified after the Constitution has been amended.' : ''}`);

        return {
            seo: {
                title: t(`Droit ${cfg.au.fr} : OHADA, CEMAC, CEEAC et hiérarchie des normes`, `${cfg.name.en} law: OHADA, CEMAC, ECCAS and hierarchy of norms`),
                description: L(cfg.seoDescription),
            },
            breadcrumb: { home: t('Accueil', 'Home'), jurisdictions: t('Juridictions', 'Jurisdictions'), current: L(cfg.name) },
            hero: {
                eyebrow: t('Juridiction · Afrique centrale', 'Jurisdiction · Central Africa'),
                titlePrefix: L(cfg.titlePrefix),
                titleCountry: L(cfg.titleCountry || cfg.name),
                intro: L(cfg.intro),
            },
            facts: { title: t('Repères', 'Key facts'), items: cfg.facts.map(({ label, value }) => ({ label: L(label), value: L(value) })) },
            orgs: {
                title: t(`${cfg.Le.fr} au carrefour des organisations régionales`, `${cfg.Le.en} at the crossroads of regional organizations`),
                intro: L(cfg.orgsIntro),
                labels: {
                    seat: t('Siège', 'Seat'), membership: L(cfg.Le), approach: t('Approche réglementaire', 'Regulatory approach'),
                    effect: t(`Effet en droit ${adjFr}`, `Effect in ${adjEn} law`), court: t('Juridiction', 'Court'), data: t('Enjeu pour la donnée juridique', 'Legal data stakes'),
                    members: t('États membres', 'Member states'), more: t('En savoir plus', 'Learn more'),
                },
                items: cfg.orgs(lang),
                trapsTitle: t(`Pièges fréquents : ${cfg.le.fr} n'en est pas membre`, `Common pitfalls: ${cfg.le.en} is not a member`),
                traps: cfg.traps(lang),
                overlapTitle: t('Le « bol de spaghettis » régional', 'The regional "spaghetti bowl"'),
                overlap: L(cfg.overlap),
            },
            articulation: ARTICULATION_OHADA_CEMAC(lang, L(cfg.le)),
            map: {
                title: t('Carte interactive', 'Interactive map'),
                text: t(`Sélectionnez une organisation pour voir ses membres, ou affichez les chevauchements avec ${cfg.le.fr}. Le défi carte propose six questions de géographie juridique.`, `Select an organization to see its members, or display overlaps with ${cfg.le.en}. The map challenge offers six legal geography questions. The map is in French.`),
                open: t('Ouvrir la carte en plein écran', 'Open the map full screen'),
                frameTitle: t(`Carte interactive des organisations régionales dont ${cfg.le.fr} est membre`, `Interactive map of the regional organizations ${cfg.le.en} belongs to`),
            },
            norms: {
                title: t("Quelle norme l'emporte ?", 'Which norm prevails?'),
                intro: t(`L'ordre juridique ${adjFr} s'organise en cinq niveaux. Le droit OHADA et le droit de la CEMAC y occupent une place particulière : directement applicables, ils s'imposent même à une loi postérieure.`, `The ${adjEn} legal order has five levels. OHADA law and CEMAC law hold a special place: directly applicable, they prevail even over a later statute.`),
                labels: { basis: t('Fondement', 'Legal basis'), guard: t('Gardien', 'Guardian'), strength: t('Force juridique croissante', 'Increasing legal force') },
                levels: [
                    { k: t('Niveau 1 · norme suprême', 'Level 1 · supreme norm'), t: 'Constitution', d: level1, basis: L(cfg.refs.revise || { fr: 'Constitution', en: 'Constitution' }), guard: L(cfg.constitutionalCourt) },
                    { k: t('Niveau 2 · supranational', 'Level 2 · supranational'), t: t('Droit OHADA et droit CEMAC', 'OHADA and CEMAC law'), d: t('Les Actes uniformes OHADA et les règlements de la CEMAC sont directement applicables et priment toute disposition contraire de droit interne, antérieure ou postérieure.', 'OHADA Uniform Acts and CEMAC regulations are directly applicable and prevail over any conflicting provision of domestic law, whether earlier or later.'), basis: t('Traité OHADA, art. 10 ; Traité CEMAC', 'OHADA Treaty, art. 10; CEMAC Treaty'), guard: t('CCJA (Abidjan), Cour de justice de la CEMAC', 'CCJA (Abidjan), CEMAC Court of Justice') },
                    { k: t('Niveau 3 · conventionnel', 'Level 3 · treaties'), t: t('Traités et accords ratifiés', 'Ratified treaties and agreements'), d: t(`${cfg.treatyList.fr} : les traités régulièrement ratifiés et publiés ont une autorité supérieure à celle des lois, sous réserve de réciprocité.`, `${cfg.treatyList.en}: duly ratified and published treaties prevail over statutes, subject to reciprocity.`), basis: L(cfg.refs.authority), guard: t('Juridictions nationales et communautaires', 'National and community courts') },
                    { k: t('Niveau 4 · législatif', 'Level 4 · legislative'), t: t('Lois et ordonnances', 'Statutes and ordinances'), d: t('Lois organiques, lois ordinaires et ordonnances. Elles doivent respecter la Constitution et céder devant les traités ratifiés et le droit communautaire.', 'Organic laws, ordinary laws and ordinances. They must comply with the Constitution and yield to ratified treaties and community law.'), basis: t('Constitution, domaine de la loi', 'Constitution, scope of statute law'), guard: t(`${cfg.constitutionalCourt.fr}, juridictions ordinaires`, `${cfg.constitutionalCourt.en}, ordinary courts`) },
                    { k: t('Niveau 5 · réglementaire', 'Level 5 · regulatory'), t: t('Décrets, arrêtés, actes des collectivités', 'Decrees, orders, local authority acts'), d: t('Actes du pouvoir exécutif et des collectivités territoriales, pris dans le respect des lois. Un acte réglementaire illégal peut être annulé.', 'Acts of the executive and local authorities, adopted in compliance with statutes. An unlawful regulatory act can be annulled.'), basis: t('Principe de légalité', 'Principle of legality'), guard: L(cfg.adminCourt) },
                ],
                caseLaw: t("Et la jurisprudence ? Elle ne figure pas dans la pyramide, mais elle dit comment chaque niveau s'applique en pratique. C'est précisément ce corpus que LegOmnia s'attache à structurer et à rendre accessible.", 'What about case law? It does not appear in the pyramid, but it shows how each level applies in practice. That is precisely the body of law LegOmnia is working to structure and make accessible.'),
            },
            games: {
                title: t('Testez vos connaissances', 'Test your knowledge'),
                intro: t(`Deux exercices interactifs : arbitrez des conflits de normes concrets, puis vérifiez ce que vous savez de l'intégration régionale ${cfg.de.fr}.`, `Two interactive exercises: resolve real conflicts between norms, then check what you know about ${cfg.possessive.en} regional integration.`),
                arbiter: {
                    title: t("L'arbitre des normes", 'The norms referee'),
                    prompt: t("Quelle norme ou quelle juridiction l'emporte ?", 'Which norm or court prevails?'),
                    items: [
                        t({ q: `Une loi ${cfg.adjFem} postérieure impose une formalité supplémentaire à la cession de parts sociales, contrairement à l'Acte uniforme relatif au droit des sociétés commerciales.`, o: ['La loi nationale, plus récente', "L'Acte uniforme OHADA"], a: 1, e: "L'Acte uniforme s'applique nonobstant toute disposition interne contraire, même postérieure (art. 10 du Traité)." },
                            { q: `A later ${adjEn} statute adds a formality for transferring company shares, contrary to the Uniform Act on commercial companies.`, o: ['The national statute, which is more recent', 'The OHADA Uniform Act'], a: 1, e: 'The Uniform Act applies notwithstanding any conflicting domestic provision, even a later one (Treaty, art. 10).' }),
                        t({ q: "Un pourvoi en cassation porte sur l'application de l'Acte uniforme portant organisation des sûretés.", o: [cfg.supremeCourt.fr.charAt(0).toUpperCase() + cfg.supremeCourt.fr.slice(1), 'La CCJA'], a: 1, e: 'La CCJA, qui siège à Abidjan, est compétente (art. 14 du Traité) ; la juridiction nationale saisie doit se dessaisir à son profit.' },
                            { q: 'An appeal in cassation concerns the application of the Uniform Act on securities.', o: [cfg.supremeCourt.en.charAt(0).toUpperCase() + cfg.supremeCourt.en.slice(1), 'The CCJA'], a: 1, e: 'The CCJA, based in Abidjan, has jurisdiction (Treaty, art. 14); the national court seised must decline jurisdiction in its favour.' }),
                        t({ q: 'Un règlement de la CEMAC sur les établissements de crédit entre en conflit avec une loi nationale.', o: ['La loi nationale', 'Le règlement de la CEMAC'], a: 1, e: 'Les règlements de la CEMAC sont directement applicables et priment le droit national contraire.' },
                            { q: 'A CEMAC regulation on credit institutions conflicts with a national statute.', o: ['The national statute', 'The CEMAC regulation'], a: 1, e: 'CEMAC regulations are directly applicable and prevail over conflicting national law.' }),
                        t({ q: 'Un traité régulièrement ratifié et publié contredit une loi nationale antérieure.', o: ['Le traité', 'La loi'], a: 0, e: `${cfg.refs.authorityShort.fr} : le traité a une autorité supérieure à celle des lois, sous réserve de son application par l'autre partie.` },
                            { q: 'A duly ratified and published treaty conflicts with an earlier national statute.', o: ['The treaty', 'The statute'], a: 0, e: `${cfg.refs.authorityShort.en}: the treaty prevails over statutes, provided the other party applies it.` }),
                        cfg.arbiterExtra(lang),
                        t({ q: 'Un arrêté ministériel fixe une règle contraire à une loi en vigueur.', o: ["L'arrêté ministériel", 'La loi'], a: 1, e: `Principe de légalité : l'acte réglementaire doit respecter la loi et peut être annulé (${cfg.adminCourt.fr}).` },
                            { q: 'A ministerial order sets a rule contrary to a statute in force.', o: ['The ministerial order', 'The statute'], a: 1, e: `Principle of legality: a regulatory act must comply with statute and can be annulled (${cfg.adminCourt.en}).` }),
                    ],
                    end: ARBITER_END[lang],
                },
                quiz: {
                    title: t('Quiz : intégration régionale', 'Quiz: regional integration'),
                    items: [
                        QUIZ.notUemoa(lang, cfg.le.fr, cfg.le.en),
                        ...cfg.quizSpecific(lang),
                        QUIZ.ccjaSeat(lang),
                        QUIZ.beac(lang),
                        QUIZ.cemacCommission(lang),
                        QUIZ.cemacCourt(lang),
                        QUIZ.ceeacSeat(lang),
                        QUIZ.cemacCount(lang),
                        QUIZ.cemacRegulation(lang, adjFr, adjEn),
                        QUIZ.cemacVsCeeac(lang),
                        QUIZ.ohadaApproach(lang),
                        QUIZ.treatyAuthority(lang, cfg.refs.authorityShort),
                        QUIZ.ohadaCount(lang, L(cfg.le)),
                    ],
                    end: QUIZ_END[lang],
                },
                ui: GAMES_UI[lang],
            },
            faq: {
                title: t(`Questions fréquentes sur le droit ${adjFr}`, `Frequently asked questions about ${adjEn} law`),
                items: [
                    t({ q: `${cfg.Le.fr} utilise-t-${cfg.pronoun.fr} le même franc CFA que le Sénégal ou la Côte d'Ivoire ?`, a: `Non. ${cfg.Le.fr} est membre de la CEMAC, dont le franc CFA (XAF) est émis par la Banque des États de l'Afrique centrale (BEAC), qui siège à Yaoundé. Le Sénégal et la Côte d'Ivoire relèvent de l'UEMOA, dont le franc CFA (XOF) est émis par la BCEAO. Les deux monnaies ont la même parité mais sont distinctes.` },
                        { q: `Does ${cfg.le.en} use the same CFA franc as Senegal or Côte d'Ivoire?`, a: `No. ${cfg.Le.en} is a member of CEMAC, whose CFA franc (XAF) is issued by the Bank of Central African States (BEAC), headquartered in Yaoundé. Senegal and Côte d'Ivoire belong to WAEMU, whose CFA franc (XOF) is issued by the BCEAO. The two currencies have the same parity but are distinct.` }),
                    t({ q: `Le droit OHADA s'applique-t-il ${cfg.au.fr} ?`, a: `Oui. ${cfg.Le.fr} est membre fondateur de l'OHADA, dont le Traité a été signé à Port-Louis en 1993. Les Actes uniformes y sont directement applicables, sans transposition, nonobstant toute disposition contraire de droit interne, antérieure ou postérieure (article 10 du Traité OHADA).` },
                        { q: `Does OHADA law apply ${cfg.au.en}?`, a: `Yes. ${cfg.Le.en} is a founding member of OHADA, whose Treaty was signed in Port Louis in 1993. The Uniform Acts are directly applicable there without transposition, notwithstanding any conflicting provision of domestic law, whether earlier or later (OHADA Treaty, art. 10).` }),
                    t({ q: 'Quelle juridiction statue en cassation sur le droit OHADA ?', a: `La Cour commune de justice et d'arbitrage (CCJA), qui siège à Abidjan. Elle se prononce en cassation sur l'application des Actes uniformes, en lieu et place de ${cfg.supremeCourt.fr} (article 14 du Traité), et ses arrêts sont exécutoires sur le territoire de tous les États parties (article 20).` },
                        { q: 'Which court rules in cassation on OHADA law?', a: `The Common Court of Justice and Arbitration (CCJA), based in Abidjan. It rules in cassation on the application of the Uniform Acts, in place of ${cfg.supremeCourt.en} (Treaty, art. 14), and its judgments are enforceable in all member states (art. 20).` }),
                    ...cfg.faqSpecific(lang),
                    t({ q: `À quelles organisations régionales ${cfg.le.fr} appartient-${cfg.pronoun.fr} ?`, a: cfg.orgsList.fr },
                        { q: `Which regional organizations does ${cfg.le.en} belong to?`, a: cfg.orgsList.en }),
                    LEGOMNIA_STATUS(lang, { adjFr, adjEn, dont: cfg.le.fr, au: cfg.au.fr }),
                ],
            },
            cta: {
                title: t(`Le droit ${adjFr}, bientôt à portée de main`, `${adjEn} law, soon at your fingertips`),
                text: t(`Rejoignez la liste d'attente pour accéder parmi les premiers à la recherche juridique LegOmnia sur ${cfg.le.fr} et l'espace OHADA.`, `Join the waitlist to be among the first to access LegOmnia legal research on ${cfg.le.en} and the OHADA area.`),
                waitlist: t("Rejoindre la liste d'attente", 'Join the waitlist'),
                omniscan: t('Découvrir OmniScan', 'Discover OmniScan'),
            },
            disclaimer: t(
                `Contenu pédagogique de synthèse ; il ne constitue pas une consultation juridique. Références : ${cfg.disclaimerRefs.fr}, Traité OHADA (art. 10, 14, 20), Traité de la CEMAC, Accord ZLECAf (art. 19). Appartenances à jour en octobre 2026.`,
                `Educational summary; it does not constitute legal advice. References: ${cfg.disclaimerRefs.en}, OHADA Treaty (arts. 10, 14, 20), CEMAC Treaty, AfCFTA Agreement (art. 19). Memberships as of October 2026.`),
        };
    };

    return {
        iso: cfg.iso,
        flag: cfg.flag,
        name: cfg.name,
        summary: cfg.summary,
        mapUrl: `/supports/${cfg.supportSlug}/carte-organisations-regionales.html`,
        orgColors: ORG_COLORS,
        content: { fr: build('fr'), en: build('en') },
    };
};
