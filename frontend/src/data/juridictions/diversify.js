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
    quiz: { pool: QUIZ_POOL, key: (item) => `${item.q}|${item.o.join('|')}` },
    arbiter: { pool: ARBITER_POOL, key: (item) => item.q },
};

// Générateur pseudo-aléatoire déterministe (même résultat à chaque build)
const hash = (s) => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0, 7);
const seeded = (seed) => () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2 ** 32;
};
const shuffle = (array, rand) => {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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
            const candidates = shuffle(pool.filter((p) => !p.requires || memberOf.has(p.requires)), rand);
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
                        frItems[i] = best.fr;
                        enItems[i] = best.en;
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
