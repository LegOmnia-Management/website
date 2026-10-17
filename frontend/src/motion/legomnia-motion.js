/* =========================================================
   LegOmnia — motion design
   Version module de legomnia-motion.js, adaptée à l'application React :
   - initPageProgress() : barre de progression + en-tête (toutes les pages)
   - initHomeMotion()   : animations de la page d'accueil, à appeler une fois
                          la page montée (useEffect) ; renvoie une fonction
                          de nettoyage.
   Le titre du héro est découpé mot par mot par le composant SplitWords
   (pas de manipulation du texte géré par React).
   ========================================================= */

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initPageProgress() {
    const bar = document.createElement('div');
    bar.className = 'lg-progress';
    document.body.appendChild(bar);
    const header = document.querySelector('header');
    let ticking = false;

    const update = () => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
        if (header) header.classList.toggle('lg-scrolled', y > 30);
        ticking = false;
    };
    const onScroll = () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (header) header.classList.remove('lg-scrolled');
        bar.remove();
    };
}

export function initHomeMotion() {
    const hero = document.querySelector('section.hero');
    if (!hero) return () => {};

    const reduce = reduceMotion();
    const cleanups = [];
    const marked = [];                       // éléments auxquels on a ajouté des classes lg-*
    const mark = (el, ...cls) => { el.classList.add(...cls); marked.push(el); };

    /* 1. Héro : la carte à points, les halos et les particules restent intacts.
          On ajoute seulement une légère profondeur au défilement sur les deux halos
          et l'apparition progressive du reste du bloc titre. */
    const orbs = [['.component__hero--glow-1', -0.12], ['.component__hero--glow-2', 0.08]]
        .map(([sel, k]) => ({ el: hero.querySelector(sel), k }))
        .filter((o) => o.el);
    if (orbs.length && !reduce) {
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                orbs.forEach((o) => { o.el.style.translate = `0 ${y * o.k}px`; });
                ticking = false;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        cleanups.push(() => {
            window.removeEventListener('scroll', onScroll);
            orbs.forEach((o) => { o.el.style.translate = ''; });
        });
    }

    const h1 = hero.querySelector('h1');
    const heroRest = [];
    if (h1) {
        const box = h1.parentElement;
        Array.prototype.forEach.call(box.children, (e) => { if (e !== h1) heroRest.push(e); });
        for (let sib = box.nextElementSibling; sib; sib = sib.nextElementSibling) heroRest.push(sib);
    }
    heroRest.filter((e) => e.offsetHeight).forEach((e, i) => {
        mark(e, 'lg-rv');
        e.style.setProperty('--lg-i', i + 5);
    });
    const heroTimer = setTimeout(() => {
        hero.classList.add('lg-hero-in');
        heroRest.forEach((e) => e.classList.add('lg-in'));
    }, 80);
    cleanups.push(() => { clearTimeout(heroTimer); hero.classList.remove('lg-hero-in'); });

    /* 2. Révélation au défilement des sections suivantes */
    const targets = [];
    document.querySelectorAll('section:not(.hero)').forEach((sec) => {
        /* cartes (onglets « mise en avant ») : traitées d'abord, leurs textes suivent la carte */
        sec.querySelectorAll('.home__showcase .card').forEach((card, i) => {
            mark(card, 'lg-card', 'lg-rv');
            card.style.setProperty('--lg-i', i % 6);
            targets.push(card);
        });
        sec.querySelectorAll('h2, h3, p, video, .home__ask__demo--content, .cmap').forEach((el) => {
            if (el.closest('.cmap') && !el.matches('.cmap')) return;   /* la carte interactive reste telle quelle */
            if (el.closest('.lg-rv')) return;                          /* déjà porté par un parent */
            targets.push(el);
        });
    });

    /* 3. Compteurs animés (50 000+, 17+, 98 %) */
    document.querySelectorAll('.home__showcase--stats li').forEach((li) => {
        const s = li.querySelector('span');
        const m = s && s.textContent.trim().match(/^(\d[\d\s  ,.]*)(.*)$/);
        if (!m) return;
        s.dataset.lgCount = m[1].replace(/\D/g, '');
        s.dataset.lgSuffix = m[2];
        s.style.fontVariantNumeric = 'tabular-nums';
        mark(li, 'lg-rv');
        targets.push(li);
    });
    const countUp = (root) => {
        const locale = document.documentElement.lang === 'en' ? 'en-US' : 'fr-FR';
        root.querySelectorAll('[data-lg-count]').forEach((el) => {
            if (el.dataset.lgDone) return;
            el.dataset.lgDone = '1';
            if (reduce) return;
            const to = +el.dataset.lgCount;
            const suf = el.dataset.lgSuffix || '';
            let t0 = null;
            const step = (t) => {
                if (!t0) t0 = t;
                const p = Math.min((t - t0) / 1800, 1);
                el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))).toLocaleString(locale) + suf;
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        });
    };

    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target;
            el.classList.add('lg-in');
            countUp(el);
            if (el.classList.contains('lg-card')) {
                /* retire le décalage d'entrée pour que le survol réagisse sans délai */
                setTimeout(() => el.classList.add('lg-done'), 1200);
            }
            io.unobserve(el);
        });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });

    targets.forEach((el) => {
        if (el.tagName === 'VIDEO' && el.parentElement) {
            const frame = el.parentElement;
            mark(frame, 'lg-zoom', 'lg-rv');
            io.observe(frame);
        } else {
            mark(el, 'lg-rv');
            io.observe(el);
        }
    });
    cleanups.push(() => io.disconnect());

    /* 4. Halo qui suit la souris sur les cartes */
    const onPointer = (e) => {
        const c = e.target.closest && e.target.closest('.lg-card');
        if (!c) return;
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', `${e.clientX - r.left}px`);
        c.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onPointer);
    cleanups.push(() => document.removeEventListener('pointermove', onPointer));

    return () => {
        cleanups.forEach((fn) => fn());
        marked.forEach((el) => el.classList.remove('lg-rv', 'lg-in', 'lg-card', 'lg-done', 'lg-zoom'));
    };
}
