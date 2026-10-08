/**
 * Organisations régionales et continentales de la carte de couverture
 * (page d'accueil), et noms des pays. Codes pays : ceux de africaGeometry.js
 * (ISO alpha-3, sauf SAH = Sahara occidental, SDS = Soudan du Sud).
 * Appartenances à jour en octobre 2026.
 */

export const COUNTRY_NAMES = {
    AGO: { fr: 'Angola', en: 'Angola' }, BDI: { fr: 'Burundi', en: 'Burundi' }, BEN: { fr: 'Bénin', en: 'Benin' },
    BFA: { fr: 'Burkina Faso', en: 'Burkina Faso' }, BWA: { fr: 'Botswana', en: 'Botswana' },
    CAF: { fr: 'Centrafrique', en: 'Central African Republic' }, CIV: { fr: "Côte d'Ivoire", en: "Côte d'Ivoire" },
    CMR: { fr: 'Cameroun', en: 'Cameroon' }, COD: { fr: 'République démocratique du Congo', en: 'Democratic Republic of the Congo' },
    COG: { fr: 'République du Congo', en: 'Republic of the Congo' }, COM: { fr: 'Comores', en: 'Comoros' },
    CPV: { fr: 'Cabo Verde', en: 'Cabo Verde' }, DJI: { fr: 'Djibouti', en: 'Djibouti' }, DZA: { fr: 'Algérie', en: 'Algeria' },
    EGY: { fr: 'Égypte', en: 'Egypt' }, ERI: { fr: 'Érythrée', en: 'Eritrea' }, ETH: { fr: 'Éthiopie', en: 'Ethiopia' },
    GAB: { fr: 'Gabon', en: 'Gabon' }, GHA: { fr: 'Ghana', en: 'Ghana' }, GIN: { fr: 'Guinée', en: 'Guinea' },
    GMB: { fr: 'Gambie', en: 'Gambia' }, GNB: { fr: 'Guinée-Bissau', en: 'Guinea-Bissau' },
    GNQ: { fr: 'Guinée équatoriale', en: 'Equatorial Guinea' }, KEN: { fr: 'Kenya', en: 'Kenya' },
    LBR: { fr: 'Liberia', en: 'Liberia' }, LBY: { fr: 'Libye', en: 'Libya' }, LSO: { fr: 'Lesotho', en: 'Lesotho' },
    MAR: { fr: 'Maroc', en: 'Morocco' }, MDG: { fr: 'Madagascar', en: 'Madagascar' }, MLI: { fr: 'Mali', en: 'Mali' },
    MOZ: { fr: 'Mozambique', en: 'Mozambique' }, MRT: { fr: 'Mauritanie', en: 'Mauritania' }, MUS: { fr: 'Maurice', en: 'Mauritius' },
    MWI: { fr: 'Malawi', en: 'Malawi' }, NAM: { fr: 'Namibie', en: 'Namibia' }, NER: { fr: 'Niger', en: 'Niger' },
    NGA: { fr: 'Nigeria', en: 'Nigeria' }, RWA: { fr: 'Rwanda', en: 'Rwanda' }, SAH: { fr: 'Sahara occidental', en: 'Western Sahara' },
    SDN: { fr: 'Soudan', en: 'Sudan' }, SDS: { fr: 'Soudan du Sud', en: 'South Sudan' }, SEN: { fr: 'Sénégal', en: 'Senegal' },
    SLE: { fr: 'Sierra Leone', en: 'Sierra Leone' }, SOM: { fr: 'Somalie', en: 'Somalia' },
    STP: { fr: 'São Tomé-et-Príncipe', en: 'São Tomé and Príncipe' }, SWZ: { fr: 'Eswatini', en: 'Eswatini' },
    SYC: { fr: 'Seychelles', en: 'Seychelles' }, TCD: { fr: 'Tchad', en: 'Chad' }, TGO: { fr: 'Togo', en: 'Togo' },
    TUN: { fr: 'Tunisie', en: 'Tunisia' }, TZA: { fr: 'Tanzanie', en: 'Tanzania' }, UGA: { fr: 'Ouganda', en: 'Uganda' },
    ZAF: { fr: 'Afrique du Sud', en: 'South Africa' }, ZMB: { fr: 'Zambie', en: 'Zambia' }, ZWE: { fr: 'Zimbabwe', en: 'Zimbabwe' },
};

// Codes ISO alpha-2 pour les drapeaux (flagcdn)
export const ISO2 = {
    AGO: 'ao', BDI: 'bi', BEN: 'bj', BFA: 'bf', BWA: 'bw', CAF: 'cf', CIV: 'ci', CMR: 'cm', COD: 'cd', COG: 'cg',
    COM: 'km', CPV: 'cv', DJI: 'dj', DZA: 'dz', EGY: 'eg', ERI: 'er', ETH: 'et', GAB: 'ga', GHA: 'gh', GIN: 'gn',
    GMB: 'gm', GNB: 'gw', GNQ: 'gq', KEN: 'ke', LBR: 'lr', LBY: 'ly', LSO: 'ls', MAR: 'ma', MDG: 'mg', MLI: 'ml',
    MOZ: 'mz', MRT: 'mr', MUS: 'mu', MWI: 'mw', NAM: 'na', NER: 'ne', NGA: 'ng', RWA: 'rw', SAH: 'eh', SDN: 'sd',
    SDS: 'ss', SEN: 'sn', SLE: 'sl', SOM: 'so', STP: 'st', SWZ: 'sz', SYC: 'sc', TCD: 'td', TGO: 'tg', TUN: 'tn',
    TZA: 'tz', UGA: 'ug', ZAF: 'za', ZMB: 'zm', ZWE: 'zw',
};

const ALL = Object.keys(COUNTRY_NAMES);

export const ORGS = [
    { id: 'OHADA', sig: { fr: 'OHADA', en: 'OHADA' }, color: '#A78BFA',
        name: { fr: "Organisation pour l'harmonisation en Afrique du droit des affaires", en: 'Organization for the Harmonization of Business Law in Africa' },
        seat: { fr: 'Yaoundé (Secrétariat permanent) ; CCJA à Abidjan', en: 'Yaoundé (Permanent Secretariat); CCJA in Abidjan' },
        about: { fr: 'Actes uniformes directement applicables en droit des affaires, sans transposition. Cœur de la couverture LegOmnia.', en: 'Directly applicable Uniform Acts in business law, without transposition. The core of LegOmnia coverage.' },
        members: ['BEN', 'BFA', 'CMR', 'CAF', 'COM', 'COG', 'CIV', 'GAB', 'GIN', 'GNB', 'GNQ', 'MLI', 'NER', 'COD', 'SEN', 'TCD', 'TGO'] },
    { id: 'UEMOA', sig: { fr: 'UEMOA', en: 'WAEMU' }, color: '#F472B6',
        name: { fr: 'Union économique et monétaire ouest-africaine', en: 'West African Economic and Monetary Union' },
        seat: { fr: 'Ouagadougou ; BCEAO à Dakar', en: 'Ouagadougou; BCEAO in Dakar' },
        about: { fr: 'Union monétaire (franc CFA XOF) : règlements directement applicables, directives à transposer.', en: 'Monetary union (XOF CFA franc): directly applicable regulations, directives to transpose.' },
        members: ['BEN', 'BFA', 'CIV', 'GNB', 'MLI', 'NER', 'SEN', 'TGO'] },
    { id: 'CEMAC', sig: { fr: 'CEMAC', en: 'CEMAC' }, color: '#FB7185',
        name: { fr: "Communauté économique et monétaire de l'Afrique centrale", en: 'Central African Economic and Monetary Community' },
        seat: { fr: 'Bangui ; BEAC à Yaoundé', en: 'Bangui; BEAC in Yaoundé' },
        about: { fr: 'Union monétaire (franc CFA XAF) : règlements directement applicables, Cour de justice à N’Djamena.', en: "Monetary union (XAF CFA franc): directly applicable regulations, Court of Justice in N'Djamena." },
        members: ['CMR', 'CAF', 'TCD', 'COG', 'GAB', 'GNQ'] },
    { id: 'CEDEAO', sig: { fr: 'CEDEAO', en: 'ECOWAS' }, color: '#5EEAD4',
        name: { fr: "Communauté économique des États de l'Afrique de l'Ouest", en: 'Economic Community of West African States' },
        seat: { fr: 'Abuja', en: 'Abuja' },
        about: { fr: "Intégration régionale ouest-africaine ; Cour de justice saisissable par les particuliers en matière de droits de l'homme.", en: 'West African regional integration; Court of Justice open to individuals in human rights matters.' },
        members: ['BEN', 'CPV', 'CIV', 'GMB', 'GHA', 'GIN', 'GNB', 'LBR', 'NGA', 'SEN', 'SLE', 'TGO'] },
    { id: 'CEEAC', sig: { fr: 'CEEAC', en: 'ECCAS' }, color: '#34D399',
        name: { fr: "Communauté économique des États de l'Afrique centrale", en: 'Economic Community of Central African States' },
        seat: { fr: 'Libreville', en: 'Libreville' },
        about: { fr: 'Intégration économique et architecture de paix et de sécurité en Afrique centrale.', en: 'Economic integration and peace and security architecture in Central Africa.' },
        members: ['AGO', 'BDI', 'CMR', 'CAF', 'COG', 'GAB', 'GNQ', 'COD', 'RWA', 'STP', 'TCD'] },
    { id: 'COMESA', sig: { fr: 'COMESA', en: 'COMESA' }, color: '#F59E0B',
        name: { fr: "Marché commun de l'Afrique orientale et australe", en: 'Common Market for Eastern and Southern Africa' },
        seat: { fr: 'Lusaka', en: 'Lusaka' },
        about: { fr: 'Zone de libre-échange et contrôle régional des concentrations par la Commission de la concurrence.', en: 'Free trade area and regional merger control by the Competition Commission.' },
        members: ['BDI', 'COM', 'COD', 'DJI', 'EGY', 'ERI', 'SWZ', 'ETH', 'KEN', 'LBY', 'MDG', 'MWI', 'MUS', 'RWA', 'SYC', 'SOM', 'SDN', 'TUN', 'UGA', 'ZMB', 'ZWE'] },
    { id: 'SADC', sig: { fr: 'SADC', en: 'SADC' }, color: '#60A5FA',
        name: { fr: "Communauté de développement de l'Afrique australe", en: 'Southern African Development Community' },
        seat: { fr: 'Gaborone', en: 'Gaborone' },
        about: { fr: 'Intégration par protocoles sectoriels, chacun soumis à ratification.', en: 'Integration through sector protocols, each subject to ratification.' },
        members: ['AGO', 'BWA', 'COM', 'COD', 'SWZ', 'LSO', 'MDG', 'MWI', 'MUS', 'MOZ', 'NAM', 'SYC', 'ZAF', 'TZA', 'ZMB', 'ZWE'] },
    { id: 'EAC', sig: { fr: 'EAC', en: 'EAC' }, color: '#4ADE80',
        name: { fr: "Communauté d'Afrique de l'Est", en: 'East African Community' },
        seat: { fr: 'Arusha', en: 'Arusha' },
        about: { fr: 'Union douanière et marché commun ; Cour de justice de l’Afrique de l’Est.', en: 'Customs union and common market; East African Court of Justice.' },
        members: ['BDI', 'KEN', 'UGA', 'RWA', 'SDS', 'TZA', 'COD', 'SOM'] },
    { id: 'UA', sig: { fr: 'UA', en: 'AU' }, color: '#FCD34D',
        name: { fr: 'Union africaine', en: 'African Union' },
        seat: { fr: 'Addis-Abeba', en: 'Addis Ababa' },
        about: { fr: "Cadre continental : Acte constitutif, conventions (droits de l'homme, protection des données…).", en: 'Continental framework: Constitutive Act, conventions (human rights, data protection…).' },
        members: ALL },
    { id: 'ZLECAF', sig: { fr: 'ZLECAf', en: 'AfCFTA' }, color: '#FB923C',
        name: { fr: 'Zone de libre-échange continentale africaine', en: 'African Continental Free Trade Area' },
        seat: { fr: 'Accra (Secrétariat)', en: 'Accra (Secretariat)' },
        about: { fr: 'Libéralisation continentale des échanges ; les intégrations régionales plus poussées sont préservées.', en: 'Continental trade liberalisation; deeper regional integration is preserved.' },
        members: ALL.filter((c) => c !== 'ERI') },
];

// Organisations comptées pour les chevauchements (hors cadre continental)
export const REGIONAL = ['OHADA', 'UEMOA', 'CEMAC', 'CEDEAO', 'CEEAC', 'COMESA', 'SADC', 'EAC'];

// Pays où OmniScan peut être déployé
export const OMNISCAN = ['BEN', 'CIV', 'CMR', 'COD', 'COG', 'GAB', 'MDG', 'SEN', 'TGO'];

// Défi carte : cliquer sur le bon pays
export const MAP_CHALLENGE = [
    { ok: ['CIV'], fr: { q: "Cliquez sur l'État où siège la CCJA, juge de cassation de l'OHADA.", e: 'La CCJA siège à Abidjan, en Côte d’Ivoire.' }, en: { q: 'Click the state where the CCJA, the OHADA court of cassation, sits.', e: "The CCJA sits in Abidjan, Côte d'Ivoire." } },
    { ok: ['CMR'], fr: { q: "Cliquez sur l'État qui accueille le Secrétariat permanent de l'OHADA et la BEAC.", e: 'Yaoundé, au Cameroun, accueille le Secrétariat permanent de l’OHADA et la BEAC.' }, en: { q: 'Click the state hosting the OHADA Permanent Secretariat and the BEAC.', e: 'Yaoundé, Cameroon, hosts the OHADA Permanent Secretariat and the BEAC.' } },
    { ok: ['SEN'], fr: { q: "Cliquez sur l'État où siège la BCEAO, banque centrale de l'UEMOA.", e: 'La BCEAO a son siège à Dakar, au Sénégal.' }, en: { q: 'Click the state where the BCEAO, the WAEMU central bank, is headquartered.', e: 'The BCEAO is headquartered in Dakar, Senegal.' } },
    { ok: ['BFA'], fr: { q: "Cliquez sur l'État qui accueille la Commission de l'UEMOA.", e: "La Commission de l'UEMOA siège à Ouagadougou, au Burkina Faso." }, en: { q: 'Click the state hosting the WAEMU Commission.', e: 'The WAEMU Commission sits in Ouagadougou, Burkina Faso.' } },
    { ok: ['CAF'], fr: { q: "Cliquez sur l'État qui accueille la Commission de la CEMAC.", e: 'La Commission de la CEMAC siège à Bangui, en Centrafrique.' }, en: { q: 'Click the state hosting the CEMAC Commission.', e: 'The CEMAC Commission sits in Bangui, Central African Republic.' } },
    { ok: ['BEN'], fr: { q: "Cliquez sur l'État qui accueille l'ERSUMA, école de formation de l'OHADA.", e: "L'ERSUMA siège à Porto-Novo, au Bénin." }, en: { q: 'Click the state hosting ERSUMA, the OHADA training school.', e: 'ERSUMA is based in Porto-Novo, Benin.' } },
    { ok: ['NGA'], fr: { q: "Cliquez sur l'État où siège la Cour de justice de la CEDEAO.", e: 'La Cour de justice de la CEDEAO siège à Abuja, au Nigeria.' }, en: { q: 'Click the state where the ECOWAS Court of Justice sits.', e: 'The ECOWAS Court of Justice sits in Abuja, Nigeria.' } },
    { ok: ['GAB'], fr: { q: "Cliquez sur l'État qui accueille le siège de la CEEAC.", e: 'La CEEAC a son siège à Libreville, au Gabon.' }, en: { q: 'Click the state hosting the ECCAS headquarters.', e: 'ECCAS is headquartered in Libreville, Gabon.' } },
    { ok: ['ETH'], fr: { q: "Cliquez sur l'État où siège la Commission de l'Union africaine.", e: "La Commission de l'Union africaine siège à Addis-Abeba, en Éthiopie." }, en: { q: 'Click the state where the African Union Commission sits.', e: 'The African Union Commission sits in Addis Ababa, Ethiopia.' } },
    { ok: ['GHA'], fr: { q: 'Cliquez sur l’État qui accueille le Secrétariat de la ZLECAf.', e: 'Le Secrétariat de la ZLECAf siège à Accra, au Ghana.' }, en: { q: 'Click the state hosting the AfCFTA Secretariat.', e: 'The AfCFTA Secretariat sits in Accra, Ghana.' } },
    { ok: ['TZA'], fr: { q: "Cliquez sur l'État où siège la Communauté d'Afrique de l'Est.", e: "L'EAC et sa Cour de justice siègent à Arusha, en Tanzanie." }, en: { q: 'Click the state where the East African Community is headquartered.', e: 'The EAC and its Court of Justice sit in Arusha, Tanzania.' } },
    { ok: ['COM'], fr: { q: "Cliquez sur le seul État de l'océan Indien membre de l'OHADA.", e: "Les Comores sont le seul État de l'océan Indien membre de l'OHADA." }, en: { q: 'Click the only Indian Ocean state that is a member of OHADA.', e: 'The Comoros is the only Indian Ocean state in OHADA.' } },
    { ok: ['COD'], fr: { q: "Cliquez sur le dernier État à avoir rejoint l'OHADA, en 2012.", e: "La RDC a rejoint l'OHADA en 2012." }, en: { q: 'Click the last state to have joined OHADA, in 2012.', e: 'The DRC joined OHADA in 2012.' } },
    { ok: ['GNQ'], fr: { q: "Cliquez sur le seul État hispanophone de l'OHADA.", e: "La Guinée équatoriale est le seul État hispanophone de l'OHADA." }, en: { q: 'Click the only Spanish-speaking OHADA state.', e: 'Equatorial Guinea is the only Spanish-speaking OHADA state.' } },
];
