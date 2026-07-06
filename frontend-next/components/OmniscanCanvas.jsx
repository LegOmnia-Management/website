'use client';
// import { useEffect, useRef } from "react";

// const COLORS = [
//   [107, 99,  208], // #6b63D0
//   [74,  15,  157], // #4A0F9d
//   [92,  225, 230], // #5ce1e6
//   [97,  195, 225], // #61C3E1
//   // couleurs intermédiaires
//   [90,  57,  183], // entre #6b63D0 et #4A0F9d
//   [84,  145, 218], // entre #5ce1e6 et #61C3E1
//   [99,  112, 213], // entre #6b63D0 et #61C3E1
//   [83,  210, 228], // entre #5ce1e6 et #61C3E1 (léger)
// ];

// const COUNT      = 90;
// const MAX_DIST   = 140;
// const MOUSE_RADIUS = 160;
// const MOUSE_FORCE  = 0.018;
// const SPEED        = 0.5;

// function mkParticle(W, H) {
//   const col = COLORS[Math.floor(Math.random() * COLORS.length)];
//   return {
//     x:     Math.random() * W,
//     y:     Math.random() * H,
//     vx:    (Math.random() - 0.5) * SPEED,
//     vy:    (Math.random() - 0.5) * SPEED,
//     r:     Math.random() * 2 + 1.2,
//     alpha: Math.random() * 0.5 + 0.5,
//     col,
//   };
// }

// function easeInOutSine(t) {
//   return -(Math.cos(Math.PI * t) - 1) / 2;
// }

// export default function ParticleConstellation({ style, className }) {
//   const canvasRef  = useRef(null);
//   const stateRef   = useRef({ particles: [], mouse: { x: -9999, y: -9999 }, raf: null });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     const state = stateRef.current;
//     let W, H, dpr;

//     function resize() {
//       dpr = window.devicePixelRatio || 1;
//       const rect = canvas.parentElement.getBoundingClientRect();
//       W = rect.width;
//       H = rect.height;
//       canvas.width  = W * dpr;
//       canvas.height = H * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     }

//     function init() {
//       resize();
//       state.particles = Array.from({ length: COUNT }, () => mkParticle(W, H));
//     }

//     function draw() {
//       ctx.clearRect(0, 0, W, H);

//       const particles = state.particles;
//       const mouse = state.mouse;

//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         // répulsion souris
//         const dx = mouse.x - p.x;
//         const dy = mouse.y - p.y;
//         const d  = Math.sqrt(dx * dx + dy * dy);
//         if (d < MOUSE_RADIUS && d > 0) {
//           const force = (1 - d / MOUSE_RADIUS) * MOUSE_FORCE;
//           p.vx -= dx * force;
//           p.vy -= dy * force;
//         }

//         // friction
//         p.vx *= 0.99;
//         p.vy *= 0.99;

//         // vitesse max
//         const maxV  = 1.2;
//         const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
//         if (speed > maxV) { p.vx *= maxV / speed; p.vy *= maxV / speed; }

//         p.x += p.vx;
//         p.y += p.vy;

//         // rebond sur les bords
//         if (p.x < 0)  { p.x = 0;  p.vx *= -1; }
//         if (p.x > W)  { p.x = W;  p.vx *= -1; }
//         if (p.y < 0)  { p.y = 0;  p.vy *= -1; }
//         if (p.y > H)  { p.y = H;  p.vy *= -1; }

//         // lignes entre particules proches
//         for (let j = i + 1; j < particles.length; j++) {
//           const q  = particles[j];
//           const ex = p.x - q.x;
//           const ey = p.y - q.y;
//           const ed = Math.sqrt(ex * ex + ey * ey);
//           if (ed < MAX_DIST) {
//             const t         = 1 - ed / MAX_DIST;
//             const lineAlpha = easeInOutSine(t) * 0.4;
//             const [r1, g1, b1] = p.col;
//             const [r2, g2, b2] = q.col;
//             const r = Math.round((r1 + r2) / 2);
//             const g = Math.round((g1 + g2) / 2);
//             const b = Math.round((b1 + b2) / 2);
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(q.x, q.y);
//             ctx.strokeStyle = `rgba(${r},${g},${b},${lineAlpha})`;
//             ctx.lineWidth   = 0.8;
//             ctx.stroke();
//           }
//         }
//       }

//       // points (rendu après les lignes pour passer au-dessus)
//       for (const p of particles) {
//         const [r, g, b] = p.col;

//         // halo lumineux
//         const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
//         grd.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`);
//         grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
//         ctx.fillStyle = grd;
//         ctx.fill();

//         // noyau du point
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
//         ctx.fill();
//       }

//       state.raf = requestAnimationFrame(draw);
//     }

//     // événements souris
//     function onMouseMove(e) {
//       const rect = canvas.getBoundingClientRect();
//       state.mouse.x = e.clientX - rect.left;
//       state.mouse.y = e.clientY - rect.top;
//     }
//     function onMouseLeave() {
//       state.mouse.x = -9999;
//       state.mouse.y = -9999;
//     }
//     function onTouchMove(e) {
//       e.preventDefault();
//       const rect = canvas.getBoundingClientRect();
//       const t = e.touches[0];
//       state.mouse.x = t.clientX - rect.left;
//       state.mouse.y = t.clientY - rect.top;
//     }
//     function onResize() {
//       resize();
//       state.particles = state.particles.map(p => ({
//         ...p,
//         x: Math.min(p.x, W),
//         y: Math.min(p.y, H),
//       }));
//     }

//     canvas.addEventListener("mousemove",  onMouseMove);
//     canvas.addEventListener("mouseleave", onMouseLeave);
//     canvas.addEventListener("touchmove",  onTouchMove, { passive: false });
//     window.addEventListener("resize",     onResize);

//     init();
//     draw();

//     return () => {
//       cancelAnimationFrame(state.raf);
//       canvas.removeEventListener("mousemove",  onMouseMove);
//       canvas.removeEventListener("mouseleave", onMouseLeave);
//       canvas.removeEventListener("touchmove",  onTouchMove);
//       window.removeEventListener("resize",     onResize);
//     };
//   }, []);

//   return (
//     <div
//       className={className}
//       style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", ...style }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{ display: "block", width: "100%", height: "100%" }}
//       />
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";

// import '../assets/styles/omniscanCanvas.css';

// const COLORS = [
//   [107, 99,  208], // #6b63D0
//   [74,  15,  157], // #4A0F9d
//   [92,  225, 230], // #5ce1e6
//   [97,  195, 225], // #61C3E1
//   // couleurs intermédiaires
//   [90,  57,  183], // entre #6b63D0 et #4A0F9d
//   [84,  145, 218], // entre #5ce1e6 et #61C3E1
//   [99,  112, 213], // entre #6b63D0 et #61C3E1
//   [83,  210, 228], // entre #5ce1e6 et #61C3E1 (léger)
// ];

// const COUNT      = 90;
// const MAX_DIST   = 140;
// const MOUSE_RADIUS = 160;
// const MOUSE_FORCE  = 0.018;
// const SPEED        = 0.5;

// function mkParticle(W, H) {
//   const col = COLORS[Math.floor(Math.random() * COLORS.length)];
//   return {
//     x:     Math.random() * W,
//     y:     Math.random() * H,
//     vx:    (Math.random() - 0.5) * SPEED,
//     vy:    (Math.random() - 0.5) * SPEED,
//     r:     Math.random() * 2 + 1.2,
//     alpha: Math.random() * 0.5 + 0.5,
//     col,
//   };
// }

// function easeInOutSine(t) {
//   return -(Math.cos(Math.PI * t) - 1) / 2;
// }

// export default function ParticleConstellation({ style, className }) {
//   const canvasRef  = useRef(null);
//   const stateRef   = useRef({ particles: [], mouse: { x: -9999, y: -9999 }, raf: null });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     const state = stateRef.current;
//     let W, H, dpr;

//     function resize() {
//       dpr = window.devicePixelRatio || 1;
//       const rect = canvas.parentElement.getBoundingClientRect();
//       W = rect.width;
//       H = rect.height;
//       canvas.width  = W * dpr;
//       canvas.height = H * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     }

//     function init() {
//       resize();
//       state.particles = Array.from({ length: COUNT }, () => mkParticle(W, H));
//     }

//     function draw() {
//       ctx.clearRect(0, 0, W, H);

//       const particles = state.particles;
//       const mouse = state.mouse;

//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         // répulsion souris
//         const dx = mouse.x - p.x;
//         const dy = mouse.y - p.y;
//         const d  = Math.sqrt(dx * dx + dy * dy);
//         if (d < MOUSE_RADIUS && d > 0) {
//           const force = (1 - d / MOUSE_RADIUS) * MOUSE_FORCE;
//           p.vx -= dx * force;
//           p.vy -= dy * force;
//         }

//         // friction
//         p.vx *= 0.99;
//         p.vy *= 0.99;

//         // vitesse max
//         const maxV  = 1.2;
//         const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
//         if (speed > maxV) { p.vx *= maxV / speed; p.vy *= maxV / speed; }

//         p.x += p.vx;
//         p.y += p.vy;

//         // rebond sur les bords
//         if (p.x < 0)  { p.x = 0;  p.vx *= -1; }
//         if (p.x > W)  { p.x = W;  p.vx *= -1; }
//         if (p.y < 0)  { p.y = 0;  p.vy *= -1; }
//         if (p.y > H)  { p.y = H;  p.vy *= -1; }

//         // lignes entre particules proches
//         for (let j = i + 1; j < particles.length; j++) {
//           const q  = particles[j];
//           const ex = p.x - q.x;
//           const ey = p.y - q.y;
//           const ed = Math.sqrt(ex * ex + ey * ey);
//           if (ed < MAX_DIST) {
//             const t         = 1 - ed / MAX_DIST;
//             const lineAlpha = easeInOutSine(t) * 0.4;
//             const [r1, g1, b1] = p.col;
//             const [r2, g2, b2] = q.col;
//             const r = Math.round((r1 + r2) / 2);
//             const g = Math.round((g1 + g2) / 2);
//             const b = Math.round((b1 + b2) / 2);
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(q.x, q.y);
//             ctx.strokeStyle = `rgba(${r},${g},${b},${lineAlpha})`;
//             ctx.lineWidth   = 0.8;
//             ctx.stroke();
//           }
//         }
//       }

//       // points (rendu après les lignes pour passer au-dessus)
//       for (const p of particles) {
//         const [r, g, b] = p.col;

//         // halo lumineux
//         const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
//         grd.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`);
//         grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
//         ctx.fillStyle = grd;
//         ctx.fill();

//         // noyau du point
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
//         ctx.fill();
//       }

//       state.raf = requestAnimationFrame(draw);
//     }

//     // événements souris
//     function onMouseMove(e) {
//       const rect = canvas.getBoundingClientRect();
//       state.mouse.x = e.clientX - rect.left;
//       state.mouse.y = e.clientY - rect.top;
//     }
//     function onMouseLeave() {
//       state.mouse.x = -9999;
//       state.mouse.y = -9999;
//     }
//     function onTouchMove(e) {
//       e.preventDefault();
//       const rect = canvas.getBoundingClientRect();
//       const t = e.touches[0];
//       state.mouse.x = t.clientX - rect.left;
//       state.mouse.y = t.clientY - rect.top;
//     }
//     const ro = new ResizeObserver(() => {
//       resize();
//       state.particles = state.particles.map(p => ({
//         ...p,
//         x: Math.min(p.x, W),
//         y: Math.min(p.y, H),
//       }));
//     });
//     ro.observe(canvas.parentElement);

//     canvas.addEventListener("mousemove",  onMouseMove);
//     canvas.addEventListener("mouseleave", onMouseLeave);
//     canvas.addEventListener("touchmove",  onTouchMove, { passive: false });

//     init();
//     draw();

//     return () => {
//       cancelAnimationFrame(state.raf);
//       ro.disconnect();
//       canvas.removeEventListener("mousemove",  onMouseMove);
//       canvas.removeEventListener("mouseleave", onMouseLeave);
//       canvas.removeEventListener("touchmove",  onTouchMove);
//     };
//   }, []);

//   return (
//     <div
//       className={className}
//       style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", ...style }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{ display: "block", width: "100%", height: "100%" }}
//       />
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";

// import '../assets/styles/omniscanCanvas.css';

// const COLORS = [
//   [107, 99,  208], // #6b63D0
//   [74,  15,  157], // #4A0F9d
//   [92,  225, 230], // #5ce1e6
//   [97,  195, 225], // #61C3E1
//   // couleurs intermédiaires
//   [90,  57,  183], // entre #6b63D0 et #4A0F9d
//   [84,  145, 218], // entre #5ce1e6 et #61C3E1
//   [99,  112, 213], // entre #6b63D0 et #61C3E1
//   [83,  210, 228], // entre #5ce1e6 et #61C3E1 (léger)
// ];

// const COUNT      = 90;
// const MAX_DIST   = 140;
// const MOUSE_RADIUS = 160;
// const MOUSE_FORCE  = 0.018;
// const SPEED        = 0.5;

// function mkParticle(W, H) {
//   const col = COLORS[Math.floor(Math.random() * COLORS.length)];
//   return {
//     x:     Math.random() * W,
//     y:     Math.random() * H,
//     vx:    (Math.random() - 0.5) * SPEED,
//     vy:    (Math.random() - 0.5) * SPEED,
//     r:     Math.random() * 2 + 1.2,
//     alpha: Math.random() * 0.5 + 0.5,
//     col,
//   };
// }

// function easeInOutSine(t) {
//   return -(Math.cos(Math.PI * t) - 1) / 2;
// }

// export default function ParticleConstellation({ style, className }) {
//   const canvasRef  = useRef(null);
//   const stateRef   = useRef({ particles: [], mouse: { x: -9999, y: -9999 }, raf: null });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     const state = stateRef.current;
//     let W, H, dpr;

//     function resize() {
//       dpr = window.devicePixelRatio || 1;
//       const rect = canvas.parentElement.getBoundingClientRect();
//       W = rect.width;
//       H = rect.height;
//       canvas.width  = W * dpr;
//       canvas.height = H * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     }

//     function init() {
//       resize();
//       state.particles = Array.from({ length: COUNT }, () => mkParticle(W, H));
//     }

//     function draw() {
//       ctx.clearRect(0, 0, W, H);

//       const particles = state.particles;
//       const mouse = state.mouse;

//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         // répulsion souris
//         const dx = mouse.x - p.x;
//         const dy = mouse.y - p.y;
//         const d  = Math.sqrt(dx * dx + dy * dy);
//         if (d < MOUSE_RADIUS && d > 0) {
//           const force = (1 - d / MOUSE_RADIUS) * MOUSE_FORCE;
//           p.vx -= dx * force;
//           p.vy -= dy * force;
//         }

//         // friction
//         p.vx *= 0.99;
//         p.vy *= 0.99;

//         // vitesse max
//         const maxV  = 1.2;
//         const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
//         if (speed > maxV) { p.vx *= maxV / speed; p.vy *= maxV / speed; }

//         p.x += p.vx;
//         p.y += p.vy;

//         // rebond sur les bords
//         if (p.x < 0)  { p.x = 0;  p.vx *= -1; }
//         if (p.x > W)  { p.x = W;  p.vx *= -1; }
//         if (p.y < 0)  { p.y = 0;  p.vy *= -1; }
//         if (p.y > H)  { p.y = H;  p.vy *= -1; }

//         // lignes entre particules proches
//         for (let j = i + 1; j < particles.length; j++) {
//           const q  = particles[j];
//           const ex = p.x - q.x;
//           const ey = p.y - q.y;
//           const ed = Math.sqrt(ex * ex + ey * ey);
//           if (ed < MAX_DIST) {
//             const t         = 1 - ed / MAX_DIST;
//             const lineAlpha = easeInOutSine(t) * 0.4;
//             const [r1, g1, b1] = p.col;
//             const [r2, g2, b2] = q.col;
//             const r = Math.round((r1 + r2) / 2);
//             const g = Math.round((g1 + g2) / 2);
//             const b = Math.round((b1 + b2) / 2);
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(q.x, q.y);
//             ctx.strokeStyle = `rgba(${r},${g},${b},${lineAlpha})`;
//             ctx.lineWidth   = 0.8;
//             ctx.stroke();
//           }
//         }
//       }

//       // points (rendu après les lignes pour passer au-dessus)
//       for (const p of particles) {
//         const [r, g, b] = p.col;

//         // halo lumineux
//         const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
//         grd.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`);
//         grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
//         ctx.fillStyle = grd;
//         ctx.fill();

//         // noyau du point
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
//         ctx.fill();
//       }

//       state.raf = requestAnimationFrame(draw);
//     }

//     // événements souris
//     function onMouseMove(e) {
//       const rect = canvas.getBoundingClientRect();
//       state.mouse.x = e.clientX - rect.left;
//       state.mouse.y = e.clientY - rect.top;
//     }
//     function onMouseLeave() {
//       state.mouse.x = -9999;
//       state.mouse.y = -9999;
//     }
//     function onTouchMove(e) {
//       e.preventDefault();
//       const rect = canvas.getBoundingClientRect();
//       const t = e.touches[0];
//       state.mouse.x = t.clientX - rect.left;
//       state.mouse.y = t.clientY - rect.top;
//     }
//     const ro = new ResizeObserver(() => {
//       const wasEmpty = !W || !H;
//       resize();
//       if (wasEmpty) {
//         state.particles = Array.from({ length: COUNT }, () => mkParticle(W, H));
//       } else {
//         state.particles = state.particles.map(p => ({
//           ...p,
//           x: Math.min(p.x, W),
//           y: Math.min(p.y, H),
//         }));
//       }
//     });
//     ro.observe(canvas.parentElement);

//     canvas.addEventListener("mousemove",  onMouseMove);
//     canvas.addEventListener("mouseleave", onMouseLeave);
//     canvas.addEventListener("touchmove",  onTouchMove, { passive: false });

//     init();
//     draw();

//     return () => {
//       cancelAnimationFrame(state.raf);
//       ro.disconnect();
//       canvas.removeEventListener("mousemove",  onMouseMove);
//       canvas.removeEventListener("mouseleave", onMouseLeave);
//       canvas.removeEventListener("touchmove",  onTouchMove);
//     };
//   }, []);

//   return (
//     <div
//       className={className}
//       style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", ...style }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{ display: "block", width: "100%", height: "100%" }}
//       />
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

import '../assets/styles/heroCanvas.css';

const COLORS = [
  [107, 99,  208], // #6b63D0
  [74,  15,  157], // #4A0F9d
  [92,  225, 230], // #5ce1e6
  [97,  195, 225], // #61C3E1
  // couleurs intermédiaires
  [90,  57,  183],
  [84,  145, 218],
  [99,  112, 213],
  [83,  210, 228],
];

const COUNT        = 90;
const MAX_DIST     = 140;
const MOUSE_RADIUS = 160;
const MOUSE_FORCE  = 0.018;
const SPEED        = 0.5;

function mkParticle(W, H) {
  const col = COLORS[Math.floor(Math.random() * COLORS.length)];
  return {
    x:     Math.random() * W,
    y:     Math.random() * H,
    vx:    (Math.random() - 0.5) * SPEED,
    vy:    (Math.random() - 0.5) * SPEED,
    r:     Math.random() * 2 + 1.2,
    alpha: Math.random() * 0.5 + 0.5,
    col,
  };
}

function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

export default function ParticleConstellation({ style, className }) {
  const canvasRef = useRef(null);
  // tout l'état mutable est dans ce ref — accessible depuis n'importe quelle closure
  const stateRef  = useRef({
    W: 0, H: 0,
    particles: [],
    mouse: { x: -9999, y: -9999 },
    raf: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx   = canvas.getContext("2d");
    const state = stateRef.current;

    function resize() {
      const dpr  = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      state.W = rect.width;
      state.H = rect.height;
      canvas.width  = state.W * dpr;
      canvas.height = state.H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      // on lit W/H depuis state à chaque frame → toujours à jour
      const { W, H, particles, mouse } = state;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_RADIUS && d > 0) {
          const force = (1 - d / MOUSE_RADIUS) * MOUSE_FORCE;
          p.vx -= dx * force;
          p.vy -= dy * force;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        const maxV  = 1.2;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > maxV) { p.vx *= maxV / speed; p.vy *= maxV / speed; }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > W) { p.x = W; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > H) { p.y = H; p.vy *= -1; }

        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j];
          const ex = p.x - q.x;
          const ey = p.y - q.y;
          const ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < MAX_DIST) {
            const t         = 1 - ed / MAX_DIST;
            const lineAlpha = easeInOutSine(t) * 0.4;
            const [r1, g1, b1] = p.col;
            const [r2, g2, b2] = q.col;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${Math.round((r1+r2)/2)},${Math.round((g1+g2)/2)},${Math.round((b1+b2)/2)},${lineAlpha})`;
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const [r, g, b] = p.col;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
        grd.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
        ctx.fill();
      }

      state.raf = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      const rect    = canvas.getBoundingClientRect();
      state.mouse.x = e.clientX - rect.left;
      state.mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() {
      state.mouse.x = -9999;
      state.mouse.y = -9999;
    }
    function onTouchMove(e) {
      e.preventDefault();
      const rect    = canvas.getBoundingClientRect();
      const t       = e.touches[0];
      state.mouse.x = t.clientX - rect.left;
      state.mouse.y = t.clientY - rect.top;
    }

    const ro = new ResizeObserver(() => {
      const wasEmpty = state.W === 0 || state.H === 0;
      resize();
      if (wasEmpty) {
        // première apparition (display:none → visible) : on régénère les particules
        state.particles = Array.from({ length: COUNT }, () => mkParticle(state.W, state.H));
      } else {
        // simple redimensionnement : on recadre les positions existantes
        state.particles = state.particles.map(p => ({
          ...p,
          x: Math.min(p.x, state.W),
          y: Math.min(p.y, state.H),
        }));
      }
    });
    ro.observe(canvas.parentElement);

    canvas.addEventListener("mousemove",  onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove",  onTouchMove, { passive: false });

    // init
    resize();
    state.particles = Array.from({ length: COUNT }, () => mkParticle(state.W, state.H));
    draw();

    return () => {
      cancelAnimationFrame(state.raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove",  onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove",  onTouchMove);
    };
  }, []);

  return (
    <div
      className={className}
      style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", ...style }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}

