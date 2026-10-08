/**
 * Limite les répétitions de questions entre pages pays.
 *
 * Les pays sont parcourus dans l'ordre du registre. Une question (quiz ou cas
 * d'arbitrage) déjà posée sur une autre page est remplacée par la question de
 * la réserve (quizPool.js) la moins utilisée et applicable au pays, si elle
 * est moins utilisée qu'elle. L'ordre des questions est ensuite mélangé de
 * façon déterministe par pays. Les versions FR et EN sont traitées ensemble.
 */
import { QUIZ_POOL, ARBITER_POOL } from './quizPool';

const SECTIONS = {
    // Même question et même bonne réponse = doublon (la Constitution de chaque pays reste distincte)
    quiz: { pool: QUIZ_POOL, key: (item) => `${item.q}|${item.o[item.a]}` },
    arbiter: { pool: ARBITER_POOL, key: (item) => item.q },
};

// Générateur pseudo-aléatoire déterministe (même résultat à chaque build)
const hash = (s) => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0, 7);
const seeded = (seed) => () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2 ** 32;
};
const shuffle = (array, rand = Math.random) => {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

/** Mélange les propositions d'une question { fr, en } (même ordre dans les deux langues). */
export const shuffleOptions = ({ fr, en }, rand = Math.random) => {
    const order = shuffle(fr.o.map((_, i) => i), rand);
    const apply = (q) => ({ ...q, o: order.map((i) => q.o[i]), a: order.indexOf(q.a) });
    return { fr: apply(fr), en: apply(en) };
};

export const diversify = (jurisdictions) => {
    for (const [section, { pool, key }] of Object.entries(SECTIONS)) {
        const usage = new Map();
        const use = (k) => usage.set(k, (usage.get(k) || 0) + 1);

        for (const [iso, country] of Object.entries(jurisdictions)) {
            const fr = country.content.fr.games[section];
            const en = country.content.en.games[section];
            const rand = seeded(hash(`${iso}-${section}`));
            const memberOf = new Set(country.content.fr.orgs.items.map((org) => org.id));
            const applies = (p) => !p.requires || [].concat(p.requires).some((org) => memberOf.has(org));
            const candidates = shuffle(pool.filter(applies), rand);
            const local = new Set(fr.items.map(key));

            const frItems = [...fr.items];
            const enItems = [...en.items];
            frItems.forEach((item, i) => {
                const k = key(item);
                const used = usage.get(k) || 0;
                if (used > 0) {
                    let best = null;
                    for (const c of candidates) {
                        const ck = key(c.fr);
                        if (local.has(ck)) continue;
                        if (!best || (usage.get(ck) || 0) < (usage.get(key(best.fr)) || 0)) best = c;
                    }
                    if (best && (usage.get(key(best.fr)) || 0) < used) {
                        const mixed = shuffleOptions(best, rand);
                        frItems[i] = mixed.fr;
                        enItems[i] = mixed.en;
                        local.add(key(best.fr));
                        use(key(best.fr));
                        return;
                    }
                }
                use(k);
            });

            // Ordre mélangé par pays, identique en FR et en EN
            const order = shuffle(frItems.map((_, i) => i), rand);
            fr.items = order.map((i) => frItems[i]);
            en.items = order.map((i) => enItems[i]);
        }
    }
    return jurisdictions;
};
