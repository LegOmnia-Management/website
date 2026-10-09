/**
 * LegOmnia — « Afrique en points » : effet de composition 3D.
 *
 * Les points arrivent de derrière la caméra, traversent l'objectif (flou de
 * profondeur, traînées), tournent en spirale puis composent le continent.
 * Une onde part ensuite du point central (Omnia) et colore les 17 États OHADA,
 * des arcs lumineux les relient, puis la carte reste vivante (scintillement).
 *
 * Aucune dépendance. Canvas 2D. ~2 000 points. Fond transparent.
 *
 * Usage :
 *   import { mountAfricaMotion } from './africa-motion.js';
 *   const fx = mountAfricaMotion(document.querySelector('#hero-map'), {
 *     onAssembled: () => document.body.classList.add('map-ready'),
 *   });
 *   // fx.restart() · fx.pause() · fx.play() · fx.destroy()
 */
import DATA from './africa-dots.js';

const FOC = 1000; // focale de la caméra virtuelle

/** Repères de la chronologie (secondes) — utiles pour synchroniser le texte du site. */
export const TIMELINE = { assembled: 3.9, ohada: 4.05, arcs: 4.75, shimmer: 6.6, end: 9.0 };

const DEFAULTS = {
  autoplay: true,        // démarre dès le montage
  playOnVisible: true,   // …mais attend que l'élément soit visible à l'écran
  loop: false,           // rejoue l'animation en boucle (pause de 3 s sur l'image finale)
  idleMotion: true,      // scintillement + pulsation une fois la carte composée
  mapHeight: 0.86,       // hauteur de la carte, en fraction de la hauteur du conteneur
  mapCenterX: 0.69,      // position horizontale du centre de la carte (0 = gauche, 1 = droite)
  mobileBreakpoint: 760, // sous cette largeur : carte centrée et réduite
  maxDpr: 2,             // plafond de résolution (performances)
  seed: 5,               // graine du hasard : même séquence à chaque chargement
  colors: {
    pale: [190, 184, 232],   // points en vol
    spark: [150, 112, 214],  // quelques points plus foncés pendant le vol
    other: [196, 190, 232],  // États hors OHADA, une fois la carte posée
    ohadaA: [108, 60, 176],  // mauve OHADA (est de la carte)
    ohadaB: [148, 110, 206], // mauve OHADA, côté ouest (dégradé)
    hub: [108, 60, 176],     // point central, anneaux, arcs, onde
    glow: [160, 124, 220],   // halo autour du point central
    dust: [170, 140, 228],   // poussière de profondeur
  },
  onAssembled: null,     // appelé quand le continent est composé
  onOhada: null,         // appelé quand l'onde OHADA démarre
  onStart: null,         // appelé au démarrage réel de l'animation (t = 0) : pratique pour déclencher des animations CSS synchronisées
  onTick: null,          // appelé à chaque image avec le temps écoulé (secondes)
};

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const easeOut3 = (x) => 1 - Math.pow(1 - clamp01(x), 3);
const rgba = (r, g, b, a) => `rgba(${r | 0},${g | 0},${b | 0},${a < 0 ? 0 : a > 1 ? 1 : a.toFixed(3)})`;

export function mountAfricaMotion(container, userOptions = {}) {
  const o = { ...DEFAULTS, ...userOptions, colors: { ...DEFAULTS.colors, ...(userOptions.colors || {}) } };
  const C = o.colors;

  // ------------------------------------------------------------ DOM
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block', pointerEvents: 'none' });
  canvas.setAttribute('aria-hidden', 'true');
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const midC = document.createElement('canvas'), heavyC = document.createElement('canvas');
  const midX = midC.getContext('2d'), heavyX = heavyC.getContext('2d');
  const canBlur = typeof ctx.filter === 'string';

  // ------------------------------------------------------------ particules (déterministes)
  const D = DATA.dots, N = D.length / 3, rnd = mulberry32(o.seed);
  const OH = new Uint8Array(N), U = new Float32Array(N), ANG = new Float32Array(N), Z0 = new Float32Array(N),
    DELAY = new Float32Array(N), TRAVEL = new Float32Array(N), SPARK = new Uint8Array(N), GX = new Float32Array(N);
  let minX = 1e9, maxX = -1e9;
  for (let i = 0; i < N; i++) { minX = Math.min(minX, D[3 * i]); maxX = Math.max(maxX, D[3 * i]); }
  for (let i = 0; i < N; i++) {
    OH[i] = D[3 * i + 2];
    U[i] = rnd(); ANG[i] = rnd() * Math.PI * 2; Z0[i] = -(500 + rnd() * 600);
    const xn = (D[3 * i] - minX) / (maxX - minX);
    DELAY[i] = 1.5 * (0.55 * xn + 0.45 * rnd());
    TRAVEL[i] = 2.4 + 0.5 * rnd();
    SPARK[i] = rnd() < 0.18 ? 1 : 0;
    GX[i] = clamp01((D[3 * i] - DATA.gx0) / DATA.gw);
  }
  const M = 240; // poussière
  const DX = new Float32Array(M), DY = new Float32Array(M), DZ0 = new Float32Array(M), DV = new Float32Array(M), DT0 = new Float32Array(M), DSZ = new Float32Array(M);
  for (let k = 0; k < M; k++) {
    DX[k] = (rnd() * 2 - 1) * 1500; DY[k] = (rnd() * 2 - 1) * 900; DZ0[k] = -(200 + rnd() * 700);
    DV[k] = 450 + rnd() * 450; DT0[k] = rnd() * 3.2; DSZ[k] = 2 + rnd() * 2.2;
  }

  // ------------------------------------------------------------ mise en page
  let Wc = 1, Hc = 1, dpr = 1, k = 1, sd = 1, cx = 0, cy = 0, hubX = 0, hubY = 0;
  const TX = new Float32Array(N), TY = new Float32Array(N), XT = new Float32Array(N), YT = new Float32Array(N),
    X0 = new Float32Array(N), Y0 = new Float32Array(N), DIST = new Float32Array(N), TRING = new Float32Array(N);
  let arcPts = [];

  function layout() {
    Wc = Math.max(1, container.clientWidth); Hc = Math.max(1, container.clientHeight);
    dpr = Math.min(window.devicePixelRatio || 1, o.maxDpr);
    canvas.width = Math.round(Wc * dpr); canvas.height = Math.round(Hc * dpr);
    midC.width = heavyC.width = Math.max(1, Math.round(Wc * dpr * 0.5));
    midC.height = heavyC.height = Math.max(1, Math.round(Hc * dpr * 0.5));
    const mobile = Wc < o.mobileBreakpoint;
    const mh = (mobile ? Math.min(o.mapHeight, 0.7) : o.mapHeight) * Hc;
    k = Math.min(mh / DATA.h, (mobile ? 0.92 : 0.9) * Wc / DATA.w);
    const centerX = (mobile ? 0.5 : o.mapCenterX) * Wc;
    const ox = centerX - (DATA.w * k) / 2, oy = (Hc - DATA.h * k) / 2;
    sd = Math.max(0.5, Hc / 1080);
    cx = Wc / 2; cy = Hc / 2;
    hubX = ox + DATA.hub[0] * k; hubY = oy + DATA.hub[1] * k;
    for (let i = 0; i < N; i++) {
      TX[i] = ox + D[3 * i] * k; TY[i] = oy + D[3 * i + 1] * k;
      XT[i] = TX[i] - cx; YT[i] = TY[i] - cy;
      const R0 = (70 + 1150 * Math.pow(U[i], 1.3)) * sd;
      X0[i] = R0 * Math.cos(ANG[i]); Y0[i] = R0 * Math.sin(ANG[i]) * 0.8;
      DIST[i] = Math.hypot(TX[i] - hubX, TY[i] - hubY) / k; // en unités de design
      TRING[i] = TIMELINE.ohada + DIST[i] / 820;
    }
    arcPts = DATA.arcs.map(([ax, ay]) => [ox + ax * k, oy + ay * k]);
  }

  // ------------------------------------------------------------ calcul de position (perspective)
  const P = { x: 0, y: 0, z: 0, s: 0, p: 0 };
  function pos(i, t) {
    const p = clamp01((t - DELAY[i]) / TRAVEL[i]);
    const z = Z0[i] + (FOC - Z0[i]) * (1 - Math.pow(1 - p, 3));
    const q = clamp01((p - 0.3) / 0.7), eq = q * q * (3 - 2 * q);
    const lx = X0[i] + (XT[i] - X0[i]) * eq, ly = Y0[i] + (YT[i] - Y0[i]) * eq;
    const th = (1 - eq) * 1.15, c = Math.cos(th), s = Math.sin(th);
    const zs = Math.max(z, 1e-3), S = FOC / zs;
    P.x = cx + S * (lx * c - ly * s); P.y = cy + S * (lx * s + ly * c); P.z = z; P.s = S; P.p = p;
  }

  // ------------------------------------------------------------ rendu d'une image
  function frame(t) {
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.scale(dpr, dpr);
    const hs = dpr * 0.5;
    midX.setTransform(1, 0, 0, 1, 0, 0); midX.clearRect(0, 0, midC.width, midC.height); midX.scale(hs, hs);
    heavyX.setTransform(1, 0, 0, 1, 0, 0); heavyX.clearRect(0, 0, heavyC.width, heavyC.height); heavyX.scale(hs, hs);
    let usedMid = false, usedHeavy = false;
    const rBase = DATA.r * k, rCap = 150 * sd;
    const shAmp = 0.10 * clamp01((t - TIMELINE.shimmer) / 1) * (o.idleMotion ? 1 : 0);
    const A = C.ohadaA, B = C.ohadaB;

    for (let i = 0; i < N; i++) {
      pos(i, t);
      if (P.p <= 0 || P.z <= 8) continue;
      const S = P.s, x = P.x, y = P.y;
      const dt = t - TRING[i];
      const m = clamp01(dt / 0.5);
      const boost = 0.38 * Math.exp(-((dt / 0.22) * (dt / 0.22))) * (OH[i] ? 1 : 0.45);
      const r = Math.min(rBase * S * (1 + boost) * (1 + shAmp * Math.sin(2 * Math.PI * (t * 0.55 - DIST[i] / 520))), rCap);
      if (x < -r - 40 || x > Wc + r + 40 || y < -r - 40 || y > Hc + r + 40) continue;
      // couleur : pâle/étincelle -> couleur finale après passage de l'onde
      const pre = SPARK[i] ? C.spark : C.pale;
      let fr, fg, fb;
      if (OH[i]) { const g = 1 - GX[i]; fr = A[0] + (B[0] - A[0]) * g; fg = A[1] + (B[1] - A[1]) * g; fb = A[2] + (B[2] - A[2]) * g; }
      else { fr = C.other[0]; fg = C.other[1]; fb = C.other[2]; }
      let cr = pre[0] + (fr - pre[0]) * m, cg = pre[1] + (fg - pre[1]) * m, cb = pre[2] + (fb - pre[2]) * m;
      const near = clamp01((S - 1) / 6), lift = 0.35 * near + 0.5 * boost;
      cr += (255 - cr) * lift; cg += (255 - cg) * lift; cb += (255 - cb) * lift;
      const fade = clamp01((P.z - 8) / 70);

      if (S < 1.3) {
        ctx.fillStyle = rgba(cr, cg, cb, fade);
        ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
      } else {
        const heavy = S >= 3.2, X = heavy ? heavyX : midX, a = (heavy ? 0.47 : 0.84) * fade;
        if (S > 1.6) {
          const px = P.x, py = P.y; pos(i, t - 0.045);
          if (P.z > 8) {
            X.strokeStyle = rgba(cr, cg, cb, a * (heavy ? 0.5 : 0.45)); X.lineWidth = Math.max(2, r * (heavy ? 1.1 : 1.2)); X.lineCap = 'butt';
            X.beginPath(); X.moveTo(P.x, P.y); X.lineTo(px, py); X.stroke();
          }
        }
        X.fillStyle = rgba(cr, cg, cb, a); X.beginPath(); X.arc(x, y, r, 0, 6.2832); X.fill();
        if (heavy) usedHeavy = true; else usedMid = true;
      }
    }
    // poussière de profondeur
    const dc = C.dust;
    for (let n = 0; n < M; n++) {
      if (t < DT0[n]) continue;
      const z = DZ0[n] + DV[n] * (t - DT0[n]);
      if (z < 14 || z > 3600) continue;
      const S = FOC / z, x = cx + (S * DX[n]) * sd, y = cy + (S * DY[n]) * sd, r = DSZ[n] * S * sd;
      if (r < 0.7 || x < -60 || x > Wc + 60 || y < -60 || y > Hc + 60) continue;
      const a = 0.59 * clamp01((z - 14) / 80) * clamp01(1 - (z - 2200) / 1400);
      const X = S > 1.4 ? midX : ctx;
      X.fillStyle = rgba(dc[0], dc[1], dc[2], a); X.beginPath(); X.arc(x, y, r, 0, 6.2832); X.fill();
      if (S > 1.4) usedMid = true;
    }
    // profondeur de champ : flou appliqué une seule fois par couche
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (usedMid) { if (canBlur) ctx.filter = `blur(${(3.2 * sd * dpr).toFixed(1)}px)`; ctx.drawImage(midC, 0, 0, canvas.width, canvas.height); ctx.filter = 'none'; }
    if (usedHeavy) { if (canBlur) ctx.filter = `blur(${(10 * sd * dpr).toFixed(1)}px)`; ctx.drawImage(heavyC, 0, 0, canvas.width, canvas.height); ctx.filter = 'none'; }
    ctx.scale(dpr, dpr);

    // point central, onde, arcs, anneaux
    if (t > TIMELINE.ohada) {
      const a = Math.min(1, (t - TIMELINE.ohada) / 0.4), h = C.hub, gl = C.glow;
      const g = ctx.createRadialGradient(hubX, hubY, 0, hubX, hubY, 130 * k);
      g.addColorStop(0, rgba(gl[0], gl[1], gl[2], 0.46 * a)); g.addColorStop(1, rgba(gl[0], gl[1], gl[2], 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(hubX, hubY, 130 * k, 0, 6.2832); ctx.fill();
      const Rr = (t - TIMELINE.ohada) * 820 * k, Rmax = 1250 * k;
      if (Rr < Rmax) { ctx.strokeStyle = rgba(h[0], h[1], h[2], 0.59 * (1 - Rr / Rmax)); ctx.lineWidth = 4 * k; ctx.beginPath(); ctx.arc(hubX, hubY, Rr, 0, 6.2832); ctx.stroke(); }
      ctx.lineWidth = Math.max(1.5, 2 * k); ctx.lineJoin = 'round';
      arcPts.forEach(([ax, ay], n) => {
        const s = easeOut3((t - (TIMELINE.arcs + 0.06 * n)) / 1.0);
        if (s < 0.01) return;
        const dx = hubX - ax, dy = hubY - ay, qx = (ax + hubX) / 2 - dy * 0.22, qy = (ay + hubY) / 2 + dx * 0.22, steps = 40, cnt = Math.max(2, Math.floor(steps * s) + 1);
        ctx.strokeStyle = rgba(h[0], h[1], h[2], 0.37); ctx.beginPath();
        for (let j = 0; j < cnt; j++) {
          const u = Math.min(j / steps, s), v = 1 - u;
          const px = v * v * ax + 2 * v * u * qx + u * u * hubX, py = v * v * ay + 2 * v * u * qy + u * u * hubY;
          j ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
        }
        ctx.stroke();
      });
      const grow = 0.4 + 0.6 * easeOut3((t - TIMELINE.ohada) / 0.7);
      [[30, 0.63], [52, 0.35], [78, 0.16]].forEach(([rr, al]) => {
        ctx.strokeStyle = rgba(h[0], h[1], h[2], al * a); ctx.lineWidth = 3 * k; ctx.beginPath(); ctx.arc(hubX, hubY, rr * k * grow, 0, 6.2832); ctx.stroke();
      });
      if (t > 6.0 && o.idleMotion) {
        const ph = ((t - TIMELINE.ohada) % 1.8) / 1.8;
        ctx.strokeStyle = rgba(h[0], h[1], h[2], 0.35 * (1 - ph)); ctx.lineWidth = 3 * k; ctx.beginPath(); ctx.arc(hubX, hubY, (20 + 90 * ph) * k, 0, 6.2832); ctx.stroke();
      }
      ctx.fillStyle = rgba(h[0], h[1], h[2], 1); ctx.beginPath(); ctx.arc(hubX, hubY, 11 * k * easeOut3((t - TIMELINE.ohada) / 0.5), 0, 6.2832); ctx.fill();
    }
  }

  // ------------------------------------------------------------ boucle d'animation
  let time = 0, last = 0, raf = 0, running = false, visible = !o.playOnVisible, started = !o.playOnVisible, firedA = false, firedO = false, firedS = false, destroyed = false;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function fire(t) {
    if (!firedS) { firedS = true; o.onStart && o.onStart(); }
    if (!firedA && t >= TIMELINE.assembled) { firedA = true; o.onAssembled && o.onAssembled(); }
    if (!firedO && t >= TIMELINE.ohada) { firedO = true; o.onOhada && o.onOhada(); }
  }
  function tick(now) {
    if (!running || destroyed) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now; time += dt;
    if (o.loop && time > TIMELINE.end + 3) { time = 0; firedA = firedO = firedS = false; }
    frame(time); fire(time); o.onTick && o.onTick(time);
    raf = requestAnimationFrame(tick);
  }
  function play() {
    if (running || destroyed) return;
    if (reduce) { time = TIMELINE.end + 1; frame(time); fire(time); return; }
    running = true; last = performance.now(); raf = requestAnimationFrame(tick);
  }
  function pause() { running = false; cancelAnimationFrame(raf); }
  function restart() { pause(); time = 0; firedA = firedO = firedS = false; play(); }
  function renderAt(t) { frame(t); }

  layout();
  const onResize = () => { layout(); if (!running) frame(time); };
  let ro = null;
  if (typeof ResizeObserver !== 'undefined') { ro = new ResizeObserver(onResize); ro.observe(container); } else window.addEventListener('resize', onResize);

  let io = null;
  if (o.playOnVisible && typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver((es) => {
      visible = es[0].isIntersecting;
      if (visible && o.autoplay) { if (!started) { started = true; time = 0; } play(); } else pause();
    }, { threshold: 0.25 });
    io.observe(container);
  } else if (o.autoplay) play();
  const onVis = () => { if (document.hidden) pause(); else if (o.autoplay && visible && started) play(); };
  document.addEventListener('visibilitychange', onVis);
  if (!o.autoplay) frame(0);

  return {
    play, pause, restart, renderAt, canvas,
    get time() { return time; },
    destroy() {
      destroyed = true; pause(); ro && ro.disconnect(); io && io.disconnect();
      window.removeEventListener('resize', onResize); document.removeEventListener('visibilitychange', onVis);
      canvas.remove();
    },
  };
}

export default mountAfricaMotion;
