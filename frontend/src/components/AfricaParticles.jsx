// import { useEffect, useRef } from "react";

// const OUTLINE = [
//   [-5.9,35.9],[-1.0,35.1],[0.6,35.7],[2.1,36.6],[3.1,36.7],
//   [5.1,36.8],[7.0,37.0],[9.0,37.1],[10.2,36.8],[11.0,37.1],
//   [11.1,35.0],[11.8,33.6],[13.3,32.9],[15.1,32.4],[16.6,31.2],
//   [18.0,30.5],[19.0,30.8],[20.1,32.1],[22.7,32.8],[24.0,32.1],
//   [25.2,31.5],[27.2,31.4],[29.9,31.2],[32.3,31.3],[32.5,30.0],
//   [33.0,28.6],[33.8,27.3],[34.8,26.0],[35.5,25.0],[36.2,22.2],
//   [37.2,19.6],[38.5,17.5],[39.4,15.6],[41.0,14.0],[42.7,13.0],
//   [43.1,11.6],[43.5,12.1],[45.0,10.4],[47.0,11.2],[50.7,11.9],
//   [51.3,11.8],[51.0,11.0],[50.0,8.5],[49.8,7.0],[48.0,5.0],
//   [45.3,2.0],[43.5,0.5],[42.5,-0.4],[41.5,-1.5],[40.8,-2.2],
//   [40.2,-3.0],[40.0,-4.5],[39.3,-6.8],[39.5,-8.9],
//   [40.2,-10.3],[40.7,-12.6],[40.7,-15.1],[40.5,-16.8],
//   [36.9,-17.9],[35.8,-18.5],[34.9,-19.8],[35.3,-22.0],
//   [35.4,-23.8],[35.0,-25.0],[32.6,-25.9],[32.0,-27.5],
//   [31.0,-30.0],[29.5,-31.3],[27.4,-32.6],[26.0,-33.3],
//   [25.6,-33.8],[24.0,-34.0],[22.0,-34.0],[20.0,-34.2],
//   [18.4,-33.9],[17.7,-33.2],[17.5,-32.5],[17.0,-31.5],
//   [16.5,-29.0],[15.8,-28.6],[15.2,-28.0],[14.9,-26.5],
//   [14.5,-23.0],[13.5,-20.0],[13.0,-17.0],[12.5,-10.0],
//   [12.3,-6.0],[12.0,-5.2],[11.9,-4.8],[10.5,-2.5],
//   [9.5,-0.4],[9.5,0.4],[9.7,2.0],[9.7,4.0],[9.2,4.5],
//   [8.5,4.1],[7.0,4.3],[5.1,5.5],[4.0,6.0],
//   [3.4,6.5],[2.4,6.3],[1.2,6.1],[0.5,6.0],
//   [-0.2,5.5],[-1.8,5.1],[-2.1,4.8],[-3.0,5.0],
//   [-4.0,5.3],[-5.5,5.0],[-6.6,4.7],[-7.7,4.4],
//   [-9.0,5.0],[-10.8,6.3],[-12.0,7.5],
//   [-13.2,8.5],[-13.7,9.5],[-14.5,10.5],[-15.6,11.9],
//   [-16.5,13.5],[-17.4,14.7],[-17.0,15.0],[-16.5,16.0],
//   [-17.0,18.0],[-17.0,20.8],[-16.5,22.0],[-16.0,24.0],
//   [-14.5,25.5],[-13.2,27.7],[-11.0,28.8],[-9.5,30.4],
//   [-9.0,31.5],[-8.6,33.0],[-7.5,33.5],[-6.9,34.0],
//   [-6.0,35.5],[-5.9,35.9],
// ];

// /* Map aspect ratio derived from lon/lat extent */
// const LON_SPAN = 71;
// const LAT_SPAN = 74;
// const NATURAL_RATIO = LON_SPAN / LAT_SPAN; /* ≈ 0.959 — slightly taller than wide */

// /* Colour palette */
// const COLORS = [
//   { r: 107, g: 99,  b: 208 }, /* #6b63d0 */
//   { r: 74,  g: 15,  b: 157 }, /* #4a0f9d */
//   { r: 139, g: 132, b: 224 }, /* #8B84e0 */
// ];

// function pickColor() {
//   return COLORS[Math.floor(Math.random() * COLORS.length)];
// }

// function randExterior(W, H) {
//   const margin = W * 0.45 + Math.random() * W * 0.55;
//   const ang = Math.random() * Math.PI * 2;
//   return [W * 0.5 + Math.cos(ang) * margin, H * 0.5 + Math.sin(ang) * margin];
// }

// function mkParticle(target, delay) {
//   const [sx, sy] = randExterior(2000, 2000);
//   const col = pickColor();
//   return {
//     x: sx, y: sy,
//     vx: (Math.random() - 0.5) * 0.1,
//     vy: (Math.random() - 0.5) * 0.1,
//     tx: target.x, ty: target.y,
//     r: 0.7 + Math.random() * 1.1,
//     alpha: 0,
//     baseAlpha: 0.45 + Math.random() * 0.45,
//     delay, age: 0,
//     repX: 0, repY: 0,
//     settled: false,
//     ph: Math.random() * Math.PI * 2,
//     col,
//   };
// }

// export default function AfricaParticles({ style, className }) {
//   const canvasRef = useRef(null);
//   const stateRef  = useRef({ particles: [], Mo: { x: -9999, y: -9999 }, rafId: null });

//   useEffect(() => {
//     const cv  = canvasRef.current;
//     const cx  = cv.getContext("2d");
//     const MR  = 95;
//     const state = stateRef.current;

//     function proj(lon, lat, W, H) {
//       const px = 38, py = 20;
//       return [
//         px + (lon + 18.5) / LON_SPAN * (W - 2 * px),
//         py + (1 - (lat + 36) / LAT_SPAN) * (H - 2 * py),
//       ];
//     }

//     function setup() {
//       const rc = cv.parentElement.getBoundingClientRect();
//       const W  = Math.floor(rc.width);
//       const H  = Math.floor(rc.height);
//       cv.width  = W;
//       cv.height = H;

//       const afPath = new Path2D();
//       const [sx0, sy0] = proj(...OUTLINE[0], W, H);
//       afPath.moveTo(sx0, sy0);
//       for (let i = 1; i < OUTLINE.length; i++) {
//         afPath.lineTo(...proj(...OUTLINE[i], W, H));
//       }
//       afPath.closePath();
//       state.afPath = afPath;
//       state.W = W;
//       state.H = H;

//       /* denser grid: step 16px + jitter */
//       const sp = 16;
//       const targets = [];
//       for (let y = sp * 0.5; y < H; y += sp) {
//         for (let x = sp * 0.5; x < W; x += sp) {
//           if (cx.isPointInPath(afPath, x, y)) {
//             targets.push({
//               x: x + (Math.random() - 0.5) * sp * 0.6,
//               y: y + (Math.random() - 0.5) * sp * 0.6,
//             });
//           }
//         }
//       }
//       /* shuffle */
//       for (let i = targets.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [targets[i], targets[j]] = [targets[j], targets[i]];
//       }

//       state.particles = targets.map((t, i) =>
//         mkParticle({ x: t.x, y: t.y }, i * 7 + Math.random() * 14)
//       );
//     }

//     function loop() {
//       const { W, H, particles, Mo } = state;
//       cx.clearRect(0, 0, W, H);

//       for (const p of particles) {
//         p.age++;
//         if (p.age < p.delay) continue;
//         const active = p.age - p.delay;

//         /* mouse repulsion on target */
//         const mdx = p.tx - Mo.x, mdy = p.ty - Mo.y;
//         const md2 = mdx * mdx + mdy * mdy;
//         if (md2 < MR * MR && md2 > 1) {
//           const md = Math.sqrt(md2);
//           p.repX = (mdx / md) * (1 - md / MR) * 30;
//           p.repY = (mdy / md) * (1 - md / MR) * 30;
//         } else {
//           p.repX *= 0.88;
//           p.repY *= 0.88;
//         }

//         /* direct particle repulsion */
//         const pmdx = p.x - Mo.x, pmdy = p.y - Mo.y;
//         const pmd2 = pmdx * pmdx + pmdy * pmdy;
//         const PR = 50;
//         if (pmd2 < PR * PR && pmd2 > 1) {
//           const pmd = Math.sqrt(pmd2);
//           p.vx += (pmdx / pmd) * (1 - pmd / PR) * 0.55;
//           p.vy += (pmdy / pmd) * (1 - pmd / PR) * 0.55;
//         }

//         const gx = p.tx + p.repX, gy = p.ty + p.repY;
//         const dx = gx - p.x, dy = gy - p.y;
//         const dist = Math.hypot(dx, dy) || 0.001;

//         /* stronger attraction → faster movement */
//         const accel = dist < 20 ? 0.032 : dist < 60 ? 0.048 : 0.065;
//         p.vx += (dx / dist) * accel;
//         p.vy += (dy / dist) * accel;

//         /* higher speed cap */
//         const spd = Math.hypot(p.vx, p.vy);
//         const maxV = dist < 25 ? 0.7 : dist < 80 ? 1.4 : 2.2;
//         if (spd > maxV) { p.vx = p.vx / spd * maxV; p.vy = p.vy / spd * maxV; }

//         const damp = dist < 25 ? 0.85 : 0.955;
//         p.vx *= damp; p.vy *= damp;
//         p.x  += p.vx; p.y  += p.vy;

//         if (!p.settled && dist < 2.5) p.settled = true;

//         if (p.settled) {
//           p.ph += 0.006 + Math.random() * 0.002;
//           p.x  += Math.sin(p.ph) * 0.12;
//           p.y  += Math.cos(p.ph * 1.27) * 0.10;
//         }

//         /* opacity — wider range, faster fade-in */
//         const proxT = Math.max(0, 1 - dist / 380);
//         const ageT  = Math.min(1, active / 55);
//         /* size variation: larger when close to settled */
//         const sizeBoost = p.settled ? 1.35 : Math.max(0.6, 1 - dist / 200);
//         const tAlpha = p.baseAlpha * (proxT * 0.88 + 0.12) * ageT;
//         p.alpha += (tAlpha - p.alpha) * 0.045;

//         if (p.alpha < 0.008) continue;

//         const { r: cr, g: cg, b: cb } = p.col;
//         const drawR = p.r * sizeBoost * (p.settled ? 1.1 : 1);
//         cx.beginPath();
//         cx.arc(p.x, p.y, drawR, 0, Math.PI * 2);
//         cx.fillStyle = `rgba(${cr},${cg},${cb},${p.alpha.toFixed(3)})`;
//         cx.fill();
//       }

//       /* subtle cursor ring */
//       if (Mo.x > 0 && Mo.x < W && Mo.y > 0 && Mo.y < H) {
//         cx.beginPath();
//         cx.arc(Mo.x, Mo.y, MR, 0, Math.PI * 2);
//         cx.strokeStyle = "rgba(107,99,208,0.12)";
//         cx.lineWidth = 0.8;
//         cx.stroke();
//         cx.beginPath();
//         cx.arc(Mo.x, Mo.y, 2.5, 0, Math.PI * 2);
//         cx.fillStyle = "rgba(74,15,157,0.28)";
//         cx.fill();
//       }

//       state.rafId = requestAnimationFrame(loop);
//     }

//     function onMove(e) {
//       const r = cv.getBoundingClientRect();
//       state.Mo.x = e.clientX - r.left;
//       state.Mo.y = e.clientY - r.top;
//     }
//     function onLeave() { state.Mo.x = -9999; state.Mo.y = -9999; }
//     function onTouch(e) {
//       e.preventDefault();
//       const r = cv.getBoundingClientRect(), t = e.touches[0];
//       state.Mo.x = t.clientX - r.left;
//       state.Mo.y = t.clientY - r.top;
//     }

//     function onResize() {
//       cancelAnimationFrame(state.rafId);
//       setup();
//       state.rafId = requestAnimationFrame(loop);
//     }

//     setup();
//     state.rafId = requestAnimationFrame(loop);

//     cv.addEventListener("mousemove",  onMove);
//     cv.addEventListener("mouseleave", onLeave);
//     cv.addEventListener("touchmove",  onTouch, { passive: false });
//     window.addEventListener("resize", onResize);

//     return () => {
//       cancelAnimationFrame(state.rafId);
//       cv.removeEventListener("mousemove",  onMove);
//       cv.removeEventListener("mouseleave", onLeave);
//       cv.removeEventListener("touchmove",  onTouch);
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     <div
//       className={className}
//       style={{
//         width: "100%",
//         aspectRatio: `${NATURAL_RATIO}`,
//         position: "relative",
//         borderRadius: 18,
//         overflow: "hidden",
//         ...style,
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{ width: "100%", height: "100%", display: "block" }}
//       />
//       <span
//         style={{
//           position: "absolute",
//           bottom: 14,
//           right: 18,
//           fontSize: 8,
//           letterSpacing: "0.32em",
//           color: "rgba(107,99,208,0.3)",
//           fontFamily: "sans-serif",
//           textTransform: "uppercase",
//           pointerEvents: "none",
//           userSelect: "none",
//         }}
//       >
//         Afrique
//       </span>
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";

// const OUTLINE = [
//   [-5.9,35.9],[-1.0,35.1],[0.6,35.7],[2.1,36.6],[3.1,36.7],
//   [5.1,36.8],[7.0,37.0],[9.0,37.1],[10.2,36.8],[11.0,37.1],
//   [11.1,35.0],[11.8,33.6],[13.3,32.9],[15.1,32.4],[16.6,31.2],
//   [18.0,30.5],[19.0,30.8],[20.1,32.1],[22.7,32.8],[24.0,32.1],
//   [25.2,31.5],[27.2,31.4],[29.9,31.2],[32.3,31.3],[32.5,30.0],
//   [33.0,28.6],[33.8,27.3],[34.8,26.0],[35.5,25.0],[36.2,22.2],
//   [37.2,19.6],[38.5,17.5],[39.4,15.6],[41.0,14.0],[42.7,13.0],
//   [43.1,11.6],[43.5,12.1],[45.0,10.4],[47.0,11.2],[50.7,11.9],
//   [51.3,11.8],[51.0,11.0],[50.0,8.5],[49.8,7.0],[48.0,5.0],
//   [45.3,2.0],[43.5,0.5],[42.5,-0.4],[41.5,-1.5],[40.8,-2.2],
//   [40.2,-3.0],[40.0,-4.5],[39.3,-6.8],[39.5,-8.9],
//   [40.2,-10.3],[40.7,-12.6],[40.7,-15.1],[40.5,-16.8],
//   [36.9,-17.9],[35.8,-18.5],[34.9,-19.8],[35.3,-22.0],
//   [35.4,-23.8],[35.0,-25.0],[32.6,-25.9],[32.0,-27.5],
//   [31.0,-30.0],[29.5,-31.3],[27.4,-32.6],[26.0,-33.3],
//   [25.6,-33.8],[24.0,-34.0],[22.0,-34.0],[20.0,-34.2],
//   [18.4,-33.9],[17.7,-33.2],[17.5,-32.5],[17.0,-31.5],
//   [16.5,-29.0],[15.8,-28.6],[15.2,-28.0],[14.9,-26.5],
//   [14.5,-23.0],[13.5,-20.0],[13.0,-17.0],[12.5,-10.0],
//   [12.3,-6.0],[12.0,-5.2],[11.9,-4.8],[10.5,-2.5],
//   [9.5,-0.4],[9.5,0.4],[9.7,2.0],[9.7,4.0],[9.2,4.5],
//   [8.5,4.1],[7.0,4.3],[5.1,5.5],[4.0,6.0],
//   [3.4,6.5],[2.4,6.3],[1.2,6.1],[0.5,6.0],
//   [-0.2,5.5],[-1.8,5.1],[-2.1,4.8],[-3.0,5.0],
//   [-4.0,5.3],[-5.5,5.0],[-6.6,4.7],[-7.7,4.4],
//   [-9.0,5.0],[-10.8,6.3],[-12.0,7.5],
//   [-13.2,8.5],[-13.7,9.5],[-14.5,10.5],[-15.6,11.9],
//   [-16.5,13.5],[-17.4,14.7],[-17.0,15.0],[-16.5,16.0],
//   [-17.0,18.0],[-17.0,20.8],[-16.5,22.0],[-16.0,24.0],
//   [-14.5,25.5],[-13.2,27.7],[-11.0,28.8],[-9.5,30.4],
//   [-9.0,31.5],[-8.6,33.0],[-7.5,33.5],[-6.9,34.0],
//   [-6.0,35.5],[-5.9,35.9],
// ];

// const LON_SPAN = 71;
// const LAT_SPAN = 74;
// /* Natural map aspect ratio (width / height) */
// const NATURAL_RATIO = LON_SPAN / LAT_SPAN; /* ≈ 0.959 */

// const COLORS = [
//   { r: 107, g: 99,  b: 208 }, /* #6b63d0 */
//   { r: 74,  g: 15,  b: 157 }, /* #4a0f9d */
//   { r: 139, g: 132, b: 224 }, /* #8B84e0 */
// ];

// function pickColor() {
//   return COLORS[Math.floor(Math.random() * COLORS.length)];
// }

// function randExterior(W, H) {
//   const margin = W * 0.5 + Math.random() * W * 0.6;
//   const ang = Math.random() * Math.PI * 2;
//   return [W * 0.5 + Math.cos(ang) * margin, H * 0.5 + Math.sin(ang) * margin];
// }

// function mkParticle(target, W, H, delay) {
//   const [sx, sy] = randExterior(W, H);
//   return {
//     x: sx, y: sy,
//     vx: (Math.random() - 0.5) * 0.15,
//     vy: (Math.random() - 0.5) * 0.15,
//     tx: target.x, ty: target.y,
//     r: 0.6 + Math.random() * 1.0,
//     alpha: 0,
//     baseAlpha: 0.45 + Math.random() * 0.45,
//     delay, age: 0,
//     repX: 0, repY: 0,
//     settled: false,
//     ph: Math.random() * Math.PI * 2,
//     col: pickColor(),
//   };
// }

// export default function AfricaParticles({ style, className }) {
//   const canvasRef = useRef(null);
//   const stateRef  = useRef({ particles: [], Mo: { x: -9999, y: -9999 }, rafId: null });

//   useEffect(() => {
//     const cv    = canvasRef.current;
//     const cx    = cv.getContext("2d");
//     const MR    = 95;
//     const state = stateRef.current;

//     /*
//      * proj maps lon/lat into a box that is:
//      *   - full canvas width (W)
//      *   - capped at MAP_H = min(H, H * 0.80) and centred vertically
//      * This ensures the map never exceeds 80% of the parent height
//      * while the canvas itself fills 100% width × 100% height.
//      */
//     function proj(lon, lat, W, H) {
//       const MAP_H   = Math.min(H, H * 0.80);
//       const offsetY = (H - MAP_H) / 2; /* vertical centering */
//       const px = 32, py = 16;
//       const x = px + (lon + 18.5) / LON_SPAN * (W - 2 * px);
//       const y = offsetY + py + (1 - (lat + 36) / LAT_SPAN) * (MAP_H - 2 * py);
//       return [x, y];
//     }

//     function setup() {
//       const rc = cv.parentElement.getBoundingClientRect();
//       const W  = Math.floor(rc.width)  || 600;
//       const H  = Math.floor(rc.height) || 400;
//       cv.width  = W;
//       cv.height = H;
//       state.W = W;
//       state.H = H;

//       /* Build Africa path within the 80%-height box */
//       const afPath = new Path2D();
//       const [sx0, sy0] = proj(...OUTLINE[0], W, H);
//       afPath.moveTo(sx0, sy0);
//       for (let i = 1; i < OUTLINE.length; i++) {
//         afPath.lineTo(...proj(...OUTLINE[i], W, H));
//       }
//       afPath.closePath();
//       state.afPath = afPath;

//       /* Dense grid — 11px step */
//       const sp = 11;
//       const targets = [];
//       for (let y = sp * 0.5; y < H; y += sp) {
//         for (let x = sp * 0.5; x < W; x += sp) {
//           if (cx.isPointInPath(afPath, x, y)) {
//             targets.push({
//               x: x + (Math.random() - 0.5) * sp * 0.55,
//               y: y + (Math.random() - 0.5) * sp * 0.55,
//             });
//           }
//         }
//       }
//       /* Shuffle for non-systematic fill order */
//       for (let i = targets.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [targets[i], targets[j]] = [targets[j], targets[i]];
//       }

//       /* Shorter stagger delay → faster overall appearance */
//       state.particles = targets.map((t, i) =>
//         mkParticle({ x: t.x, y: t.y }, W, H, i * 3.5 + Math.random() * 7)
//       );
//     }

//     function loop() {
//       const { W, H, particles, Mo } = state;
//       cx.clearRect(0, 0, W, H);

//       for (const p of particles) {
//         p.age++;
//         if (p.age < p.delay) continue;
//         const active = p.age - p.delay;

//         /* Mouse repulsion on target position */
//         const mdx = p.tx - Mo.x, mdy = p.ty - Mo.y;
//         const md2 = mdx * mdx + mdy * mdy;
//         if (md2 < MR * MR && md2 > 1) {
//           const md = Math.sqrt(md2);
//           p.repX = (mdx / md) * (1 - md / MR) * 30;
//           p.repY = (mdy / md) * (1 - md / MR) * 30;
//         } else {
//           p.repX *= 0.88;
//           p.repY *= 0.88;
//         }

//         /* Direct particle repulsion from cursor */
//         const pmdx = p.x - Mo.x, pmdy = p.y - Mo.y;
//         const pmd2 = pmdx * pmdx + pmdy * pmdy;
//         const PR = 50;
//         if (pmd2 < PR * PR && pmd2 > 1) {
//           const pmd = Math.sqrt(pmd2);
//           p.vx += (pmdx / pmd) * (1 - pmd / PR) * 0.7;
//           p.vy += (pmdy / pmd) * (1 - pmd / PR) * 0.7;
//         }

//         const gx = p.tx + p.repX, gy = p.ty + p.repY;
//         const dx = gx - p.x, dy = gy - p.y;
//         const dist = Math.hypot(dx, dy) || 0.001;

//         /* ×4 acceleration vs original */
//         const accel = dist < 20 ? 0.128 : dist < 60 ? 0.192 : 0.260;
//         p.vx += (dx / dist) * accel;
//         p.vy += (dy / dist) * accel;

//         /* ×4 speed cap vs original */
//         const spd  = Math.hypot(p.vx, p.vy);
//         const maxV = dist < 25 ? 2.8 : dist < 80 ? 5.6 : 8.8;
//         if (spd > maxV) { p.vx = p.vx / spd * maxV; p.vy = p.vy / spd * maxV; }

//         const damp = dist < 25 ? 0.82 : 0.950;
//         p.vx *= damp; p.vy *= damp;
//         p.x  += p.vx;  p.y  += p.vy;

//         if (!p.settled && dist < 2.5) p.settled = true;

//         if (p.settled) {
//           p.ph += 0.006 + Math.random() * 0.002;
//           p.x  += Math.sin(p.ph) * 0.12;
//           p.y  += Math.cos(p.ph * 1.27) * 0.10;
//         }

//         const proxT    = Math.max(0, 1 - dist / 380);
//         const ageT     = Math.min(1, active / 30); /* faster fade-in too */
//         const sizeBoost = p.settled ? 1.35 : Math.max(0.6, 1 - dist / 200);
//         const tAlpha   = p.baseAlpha * (proxT * 0.88 + 0.12) * ageT;
//         p.alpha += (tAlpha - p.alpha) * 0.06;

//         if (p.alpha < 0.008) continue;

//         const { r: cr, g: cg, b: cb } = p.col;
//         const drawR = p.r * sizeBoost * (p.settled ? 1.1 : 1);
//         cx.beginPath();
//         cx.arc(p.x, p.y, drawR, 0, Math.PI * 2);
//         cx.fillStyle = `rgba(${cr},${cg},${cb},${p.alpha.toFixed(3)})`;
//         cx.fill();
//       }

//       /* Subtle cursor ring */
//       if (Mo.x > 0 && Mo.x < W && Mo.y > 0 && Mo.y < H) {
//         cx.beginPath();
//         cx.arc(Mo.x, Mo.y, MR, 0, Math.PI * 2);
//         cx.strokeStyle = "rgba(107,99,208,0.12)";
//         cx.lineWidth   = 0.8;
//         cx.stroke();
//         cx.beginPath();
//         cx.arc(Mo.x, Mo.y, 2.5, 0, Math.PI * 2);
//         cx.fillStyle = "rgba(74,15,157,0.28)";
//         cx.fill();
//       }

//       state.rafId = requestAnimationFrame(loop);
//     }

//     function onMove(e) {
//       const r = cv.getBoundingClientRect();
//       state.Mo.x = e.clientX - r.left;
//       state.Mo.y = e.clientY - r.top;
//     }
//     function onLeave() { state.Mo.x = -9999; state.Mo.y = -9999; }
//     function onTouch(e) {
//       e.preventDefault();
//       const r = cv.getBoundingClientRect(), t = e.touches[0];
//       state.Mo.x = t.clientX - r.left;
//       state.Mo.y = t.clientY - r.top;
//     }
//     function onResize() {
//       cancelAnimationFrame(state.rafId);
//       setup();
//       state.rafId = requestAnimationFrame(loop);
//     }

//     setup();
//     state.rafId = requestAnimationFrame(loop);

//     cv.addEventListener("mousemove",  onMove);
//     cv.addEventListener("mouseleave", onLeave);
//     cv.addEventListener("touchmove",  onTouch, { passive: false });
//     window.addEventListener("resize", onResize);

//     return () => {
//       cancelAnimationFrame(state.rafId);
//       cv.removeEventListener("mousemove",  onMove);
//       cv.removeEventListener("mouseleave", onLeave);
//       cv.removeEventListener("touchmove",  onTouch);
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     /* Canvas fills 100% of whatever container you put it in */
//     <div
//       className={className}
//       style={{ width: "100%", height: "100%", position: "relative", ...style }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{ width: "100%", height: "100%", display: "block" }}
//       />
//       <span
//         style={{
//           position: "absolute",
//           bottom: 14,
//           right: 18,
//           fontSize: 8,
//           letterSpacing: "0.32em",
//           color: "rgba(107,99,208,0.3)",
//           fontFamily: "sans-serif",
//           textTransform: "uppercase",
//           pointerEvents: "none",
//           userSelect: "none",
//         }}
//       >
//         Afrique
//       </span>
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";

// const OUTLINE = [
//   [-5.9,35.9],[-1.0,35.1],[0.6,35.7],[2.1,36.6],[3.1,36.7],
//   [5.1,36.8],[7.0,37.0],[9.0,37.1],[10.2,36.8],[11.0,37.1],
//   [11.1,35.0],[11.8,33.6],[13.3,32.9],[15.1,32.4],[16.6,31.2],
//   [18.0,30.5],[19.0,30.8],[20.1,32.1],[22.7,32.8],[24.0,32.1],
//   [25.2,31.5],[27.2,31.4],[29.9,31.2],[32.3,31.3],[32.5,30.0],
//   [33.0,28.6],[33.8,27.3],[34.8,26.0],[35.5,25.0],[36.2,22.2],
//   [37.2,19.6],[38.5,17.5],[39.4,15.6],[41.0,14.0],[42.7,13.0],
//   [43.1,11.6],[43.5,12.1],[45.0,10.4],[47.0,11.2],[50.7,11.9],
//   [51.3,11.8],[51.0,11.0],[50.0,8.5],[49.8,7.0],[48.0,5.0],
//   [45.3,2.0],[43.5,0.5],[42.5,-0.4],[41.5,-1.5],[40.8,-2.2],
//   [40.2,-3.0],[40.0,-4.5],[39.3,-6.8],[39.5,-8.9],
//   [40.2,-10.3],[40.7,-12.6],[40.7,-15.1],[40.5,-16.8],
//   [36.9,-17.9],[35.8,-18.5],[34.9,-19.8],[35.3,-22.0],
//   [35.4,-23.8],[35.0,-25.0],[32.6,-25.9],[32.0,-27.5],
//   [31.0,-30.0],[29.5,-31.3],[27.4,-32.6],[26.0,-33.3],
//   [25.6,-33.8],[24.0,-34.0],[22.0,-34.0],[20.0,-34.2],
//   [18.4,-33.9],[17.7,-33.2],[17.5,-32.5],[17.0,-31.5],
//   [16.5,-29.0],[15.8,-28.6],[15.2,-28.0],[14.9,-26.5],
//   [14.5,-23.0],[13.5,-20.0],[13.0,-17.0],[12.5,-10.0],
//   [12.3,-6.0],[12.0,-5.2],[11.9,-4.8],[10.5,-2.5],
//   [9.5,-0.4],[9.5,0.4],[9.7,2.0],[9.7,4.0],[9.2,4.5],
//   [8.5,4.1],[7.0,4.3],[5.1,5.5],[4.0,6.0],
//   [3.4,6.5],[2.4,6.3],[1.2,6.1],[0.5,6.0],
//   [-0.2,5.5],[-1.8,5.1],[-2.1,4.8],[-3.0,5.0],
//   [-4.0,5.3],[-5.5,5.0],[-6.6,4.7],[-7.7,4.4],
//   [-9.0,5.0],[-10.8,6.3],[-12.0,7.5],
//   [-13.2,8.5],[-13.7,9.5],[-14.5,10.5],[-15.6,11.9],
//   [-16.5,13.5],[-17.4,14.7],[-17.0,15.0],[-16.5,16.0],
//   [-17.0,18.0],[-17.0,20.8],[-16.5,22.0],[-16.0,24.0],
//   [-14.5,25.5],[-13.2,27.7],[-11.0,28.8],[-9.5,30.4],
//   [-9.0,31.5],[-8.6,33.0],[-7.5,33.5],[-6.9,34.0],
//   [-6.0,35.5],[-5.9,35.9],
// ];

// const LON_SPAN = 71;
// const LAT_SPAN = 74;
// /* Natural map aspect ratio (width / height) */
// const NATURAL_RATIO = LON_SPAN / LAT_SPAN; /* ≈ 0.959 */

// const COLORS = [
//   { r: 107, g: 99,  b: 208 }, /* #6b63d0 */
//   { r: 74,  g: 15,  b: 157 }, /* #4a0f9d */
//   { r: 139, g: 132, b: 224 }, /* #8B84e0 */
// ];

// function pickColor() {
//   return COLORS[Math.floor(Math.random() * COLORS.length)];
// }

// function randExterior(W, H) {
//   const margin = W * 0.5 + Math.random() * W * 0.6;
//   const ang = Math.random() * Math.PI * 2;
//   return [W * 0.5 + Math.cos(ang) * margin, H * 0.5 + Math.sin(ang) * margin];
// }

// function mkParticle(target, W, H, delay) {
//   const [sx, sy] = randExterior(W, H);
//   return {
//     x: sx, y: sy,
//     vx: (Math.random() - 0.5) * 0.15,
//     vy: (Math.random() - 0.5) * 0.15,
//     tx: target.x, ty: target.y,
//     r: 0.6 + Math.random() * 1.0,
//     alpha: 0,
//     baseAlpha: 0.45 + Math.random() * 0.45,
//     delay, age: 0,
//     repX: 0, repY: 0,
//     settled: false,
//     ph: Math.random() * Math.PI * 2,
//     col: pickColor(),
//   };
// }

// export default function AfricaParticles({ style, className }) {
//   const canvasRef = useRef(null);
//   const stateRef  = useRef({ particles: [], Mo: { x: -9999, y: -9999 }, rafId: null });

//   useEffect(() => {
//     const cv    = canvasRef.current;
//     const cx    = cv.getContext("2d");
//     const MR    = 95;
//     const state = stateRef.current;

//     /*
//      * proj maps lon/lat into a box that:
//      *   - never exceeds 80% of canvas height
//      *   - preserves the natural lon/lat aspect ratio (NATURAL_RATIO ≈ 0.959)
//      *   - is centred both horizontally and vertically in the canvas
//      */
//     function proj(lon, lat, W, H) {
//       const MAX_H  = H * 0.80;
//       const MAX_W  = W;
//       /* fit box that respects ratio */
//       let mapW = MAX_W;
//       let mapH = mapW / NATURAL_RATIO;
//       if (mapH > MAX_H) { mapH = MAX_H; mapW = mapH * NATURAL_RATIO; }
//       const offsetX = (W - mapW) / 2;
//       const offsetY = (H - mapH) / 2;
//       const px = 20, py = 14;
//       const x = offsetX + px + (lon + 18.5) / LON_SPAN * (mapW - 2 * px);
//       const y = offsetY + py + (1 - (lat + 36) / LAT_SPAN) * (mapH - 2 * py);
//       return [x, y];
//     }

//     function setup() {
//       const rc = cv.parentElement.getBoundingClientRect();
//       const W  = Math.floor(rc.width)  || 600;
//       const H  = Math.floor(rc.height) || 400;
//       cv.width  = W;
//       cv.height = H;
//       state.W = W;
//       state.H = H;

//       /* Build Africa path within the 80%-height box */
//       const afPath = new Path2D();
//       const [sx0, sy0] = proj(...OUTLINE[0], W, H);
//       afPath.moveTo(sx0, sy0);
//       for (let i = 1; i < OUTLINE.length; i++) {
//         afPath.lineTo(...proj(...OUTLINE[i], W, H));
//       }
//       afPath.closePath();
//       state.afPath = afPath;

//       /* Dense grid — 11px step */
//       const sp = 11;
//       const targets = [];
//       for (let y = sp * 0.5; y < H; y += sp) {
//         for (let x = sp * 0.5; x < W; x += sp) {
//           if (cx.isPointInPath(afPath, x, y)) {
//             targets.push({
//               x: x + (Math.random() - 0.5) * sp * 0.55,
//               y: y + (Math.random() - 0.5) * sp * 0.55,
//             });
//           }
//         }
//       }
//       /* Shuffle for non-systematic fill order */
//       for (let i = targets.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [targets[i], targets[j]] = [targets[j], targets[i]];
//       }

//       /* Shorter stagger delay → faster overall appearance */
//       state.particles = targets.map((t, i) =>
//         mkParticle({ x: t.x, y: t.y }, W, H, i * 3.5 + Math.random() * 7)
//       );
//     }

//     function loop() {
//       const { W, H, particles, Mo } = state;
//       cx.clearRect(0, 0, W, H);

//       for (const p of particles) {
//         p.age++;
//         if (p.age < p.delay) continue;
//         const active = p.age - p.delay;

//         /* Mouse repulsion on target position */
//         const mdx = p.tx - Mo.x, mdy = p.ty - Mo.y;
//         const md2 = mdx * mdx + mdy * mdy;
//         if (md2 < MR * MR && md2 > 1) {
//           const md = Math.sqrt(md2);
//           p.repX = (mdx / md) * (1 - md / MR) * 30;
//           p.repY = (mdy / md) * (1 - md / MR) * 30;
//         } else {
//           p.repX *= 0.88;
//           p.repY *= 0.88;
//         }

//         /* Direct particle repulsion from cursor */
//         const pmdx = p.x - Mo.x, pmdy = p.y - Mo.y;
//         const pmd2 = pmdx * pmdx + pmdy * pmdy;
//         const PR = 50;
//         if (pmd2 < PR * PR && pmd2 > 1) {
//           const pmd = Math.sqrt(pmd2);
//           p.vx += (pmdx / pmd) * (1 - pmd / PR) * 0.7;
//           p.vy += (pmdy / pmd) * (1 - pmd / PR) * 0.7;
//         }

//         const gx = p.tx + p.repX, gy = p.ty + p.repY;
//         const dx = gx - p.x, dy = gy - p.y;
//         const dist = Math.hypot(dx, dy) || 0.001;

//         /* ×6 acceleration vs original */
//         const accel = dist < 20 ? 0.192 : dist < 60 ? 0.288 : 0.390;
//         p.vx += (dx / dist) * accel;
//         p.vy += (dy / dist) * accel;

//         /* ×6 speed cap vs original */
//         const spd  = Math.hypot(p.vx, p.vy);
//         const maxV = dist < 25 ? 4.2 : dist < 80 ? 8.4 : 13.2;
//         if (spd > maxV) { p.vx = p.vx / spd * maxV; p.vy = p.vy / spd * maxV; }

//         const damp = dist < 25 ? 0.82 : 0.950;
//         p.vx *= damp; p.vy *= damp;
//         p.x  += p.vx;  p.y  += p.vy;

//         if (!p.settled && dist < 2.5) p.settled = true;

//         if (p.settled) {
//           p.ph += 0.006 + Math.random() * 0.002;
//           p.x  += Math.sin(p.ph) * 0.12;
//           p.y  += Math.cos(p.ph * 1.27) * 0.10;
//         }

//         const proxT    = Math.max(0, 1 - dist / 380);
//         const ageT     = Math.min(1, active / 30); /* faster fade-in too */
//         const sizeBoost = p.settled ? 1.35 : Math.max(0.6, 1 - dist / 200);
//         const tAlpha   = p.baseAlpha * (proxT * 0.88 + 0.12) * ageT;
//         p.alpha += (tAlpha - p.alpha) * 0.06;

//         if (p.alpha < 0.008) continue;

//         const { r: cr, g: cg, b: cb } = p.col;
//         const drawR = p.r * sizeBoost * (p.settled ? 1.1 : 1);
//         cx.beginPath();
//         cx.arc(p.x, p.y, drawR, 0, Math.PI * 2);
//         cx.fillStyle = `rgba(${cr},${cg},${cb},${p.alpha.toFixed(3)})`;
//         cx.fill();
//       }

//       /* Subtle cursor ring */
//       if (Mo.x > 0 && Mo.x < W && Mo.y > 0 && Mo.y < H) {
//         cx.beginPath();
//         cx.arc(Mo.x, Mo.y, MR, 0, Math.PI * 2);
//         cx.strokeStyle = "rgba(107,99,208,0.12)";
//         cx.lineWidth   = 0.8;
//         cx.stroke();
//         cx.beginPath();
//         cx.arc(Mo.x, Mo.y, 2.5, 0, Math.PI * 2);
//         cx.fillStyle = "rgba(74,15,157,0.28)";
//         cx.fill();
//       }

//       state.rafId = requestAnimationFrame(loop);
//     }

//     function onMove(e) {
//       const r = cv.getBoundingClientRect();
//       state.Mo.x = e.clientX - r.left;
//       state.Mo.y = e.clientY - r.top;
//     }
//     function onLeave() { state.Mo.x = -9999; state.Mo.y = -9999; }
//     function onTouch(e) {
//       e.preventDefault();
//       const r = cv.getBoundingClientRect(), t = e.touches[0];
//       state.Mo.x = t.clientX - r.left;
//       state.Mo.y = t.clientY - r.top;
//     }
//     function onResize() {
//       cancelAnimationFrame(state.rafId);
//       setup();
//       state.rafId = requestAnimationFrame(loop);
//     }

//     setup();
//     state.rafId = requestAnimationFrame(loop);

//     cv.addEventListener("mousemove",  onMove);
//     cv.addEventListener("mouseleave", onLeave);
//     cv.addEventListener("touchmove",  onTouch, { passive: false });
//     window.addEventListener("resize", onResize);

//     return () => {
//       cancelAnimationFrame(state.rafId);
//       cv.removeEventListener("mousemove",  onMove);
//       cv.removeEventListener("mouseleave", onLeave);
//       cv.removeEventListener("touchmove",  onTouch);
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     /* Canvas fills 100% of whatever container you put it in */
//     <div
//       className={className}
//       style={{ width: "100%", height: "100%", position: "relative", ...style }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{ width: "100%", height: "100%", display: "block" }}
//       />
//       <span
//         style={{
//           position: "absolute",
//           bottom: 14,
//           right: 18,
//           fontSize: 8,
//           letterSpacing: "0.32em",
//           color: "rgba(107,99,208,0.3)",
//           fontFamily: "sans-serif",
//           textTransform: "uppercase",
//           pointerEvents: "none",
//           userSelect: "none",
//         }}
//       >
//         Afrique
//       </span>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

const OUTLINE = [
  [-5.9,35.9],[-1.0,35.1],[0.6,35.7],[2.1,36.6],[3.1,36.7],
  [5.1,36.8],[7.0,37.0],[9.0,37.1],[10.2,36.8],[11.0,37.1],
  [11.1,35.0],[11.8,33.6],[13.3,32.9],[15.1,32.4],[16.6,31.2],
  [18.0,30.5],[19.0,30.8],[20.1,32.1],[22.7,32.8],[24.0,32.1],
  [25.2,31.5],[27.2,31.4],[29.9,31.2],[32.3,31.3],[32.5,30.0],
  [33.0,28.6],[33.8,27.3],[34.8,26.0],[35.5,25.0],[36.2,22.2],
  [37.2,19.6],[38.5,17.5],[39.4,15.6],[41.0,14.0],[42.7,13.0],
  [43.1,11.6],[43.5,12.1],[45.0,10.4],[47.0,11.2],[50.7,11.9],
  [51.3,11.8],[51.0,11.0],[50.0,8.5],[49.8,7.0],[48.0,5.0],
  [45.3,2.0],[43.5,0.5],[42.5,-0.4],[41.5,-1.5],[40.8,-2.2],
  [40.2,-3.0],[40.0,-4.5],[39.3,-6.8],[39.5,-8.9],
  [40.2,-10.3],[40.7,-12.6],[40.7,-15.1],[40.5,-16.8],
  [36.9,-17.9],[35.8,-18.5],[34.9,-19.8],[35.3,-22.0],
  [35.4,-23.8],[35.0,-25.0],[32.6,-25.9],[32.0,-27.5],
  [31.0,-30.0],[29.5,-31.3],[27.4,-32.6],[26.0,-33.3],
  [25.6,-33.8],[24.0,-34.0],[22.0,-34.0],[20.0,-34.2],
  [18.4,-33.9],[17.7,-33.2],[17.5,-32.5],[17.0,-31.5],
  [16.5,-29.0],[15.8,-28.6],[15.2,-28.0],[14.9,-26.5],
  [14.5,-23.0],[13.5,-20.0],[13.0,-17.0],[12.5,-10.0],
  [12.3,-6.0],[12.0,-5.2],[11.9,-4.8],[10.5,-2.5],
  [9.5,-0.4],[9.5,0.4],[9.7,2.0],[9.7,4.0],[9.2,4.5],
  [8.5,4.1],[7.0,4.3],[5.1,5.5],[4.0,6.0],
  [3.4,6.5],[2.4,6.3],[1.2,6.1],[0.5,6.0],
  [-0.2,5.5],[-1.8,5.1],[-2.1,4.8],[-3.0,5.0],
  [-4.0,5.3],[-5.5,5.0],[-6.6,4.7],[-7.7,4.4],
  [-9.0,5.0],[-10.8,6.3],[-12.0,7.5],
  [-13.2,8.5],[-13.7,9.5],[-14.5,10.5],[-15.6,11.9],
  [-16.5,13.5],[-17.4,14.7],[-17.0,15.0],[-16.5,16.0],
  [-17.0,18.0],[-17.0,20.8],[-16.5,22.0],[-16.0,24.0],
  [-14.5,25.5],[-13.2,27.7],[-11.0,28.8],[-9.5,30.4],
  [-9.0,31.5],[-8.6,33.0],[-7.5,33.5],[-6.9,34.0],
  [-6.0,35.5],[-5.9,35.9],
];

const LON_SPAN = 71;
const LAT_SPAN = 74;
/* Natural map aspect ratio (width / height) */
const NATURAL_RATIO = LON_SPAN / LAT_SPAN; /* ≈ 0.959 */

const COLORS = [
  { r: 107, g: 99,  b: 208 }, /* #6b63d0 */
  { r: 74,  g: 15,  b: 157 }, /* #4a0f9d */
  { r: 139, g: 132, b: 224 }, /* #8B84e0 */
];

function pickColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function randExterior(W, H) {
  const margin = W * 0.5 + Math.random() * W * 0.6;
  const ang = Math.random() * Math.PI * 2;
  return [W * 0.5 + Math.cos(ang) * margin, H * 0.5 + Math.sin(ang) * margin];
}

function mkParticle(target, W, H, delay) {
  const [sx, sy] = randExterior(W, H);
  return {
    x: sx, y: sy,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    tx: target.x, ty: target.y,
    r: 0.6 + Math.random() * 1.0,
    alpha: 0,
    baseAlpha: 0.45 + Math.random() * 0.45,
    delay, age: 0,
    repX: 0, repY: 0,
    settled: false,
    ph: Math.random() * Math.PI * 2,
    col: pickColor(),
  };
}

export default function AfricaParticles({ style, className }) {
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], Mo: { x: -9999, y: -9999 }, rafId: null });

  useEffect(() => {
    const cv    = canvasRef.current;
    const cx    = cv.getContext("2d");
    const MR    = 95;
    const state = stateRef.current;

    /*
     * proj maps lon/lat into a box that:
     *   - never exceeds 80% of canvas height
     *   - preserves the natural lon/lat aspect ratio (NATURAL_RATIO ≈ 0.959)
     *   - is centred both horizontally and vertically in the canvas
     */
    function proj(lon, lat, W, H) {
      const MAX_H  = H * 0.75;
      const MAX_W  = W;
      /* fit box that respects ratio */
      let mapW = MAX_W;
      let mapH = mapW / NATURAL_RATIO;
      if (mapH > MAX_H) { mapH = MAX_H; mapW = mapH * NATURAL_RATIO; }
      const offsetX = (W - mapW) / 2;
      const offsetY = (H - mapH) / 2;
      const px = 20, py = 14;
      const x = offsetX + px + (lon + 18.5) / LON_SPAN * (mapW - 2 * px);
      const y = offsetY + py + (1 - (lat + 36) / LAT_SPAN) * (mapH - 2 * py);
      return [x, y];
    }

    function setup() {
      const rc = cv.parentElement.getBoundingClientRect();
      const W  = Math.floor(rc.width)  || 600;
      const H  = Math.floor(rc.height) || 400;
      cv.width  = W;
      cv.height = H;
      state.W = W;
      state.H = H;

      /* Build Africa path within the 80%-height box */
      const afPath = new Path2D();
      const [sx0, sy0] = proj(...OUTLINE[0], W, H);
      afPath.moveTo(sx0, sy0);
      for (let i = 1; i < OUTLINE.length; i++) {
        afPath.lineTo(...proj(...OUTLINE[i], W, H));
      }
      afPath.closePath();
      state.afPath = afPath;

      /* Dense grid — 11px step */
      const sp = 11;
      const targets = [];
      for (let y = sp * 0.5; y < H; y += sp) {
        for (let x = sp * 0.5; x < W; x += sp) {
          if (cx.isPointInPath(afPath, x, y)) {
            targets.push({
              x: x + (Math.random() - 0.5) * sp * 0.55,
              y: y + (Math.random() - 0.5) * sp * 0.55,
            });
          }
        }
      }
      /* Shuffle for non-systematic fill order */
      for (let i = targets.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [targets[i], targets[j]] = [targets[j], targets[i]];
      }

      /* Shorter stagger delay → faster overall appearance */
      state.particles = targets.map((t, i) =>
        mkParticle({ x: t.x, y: t.y }, W, H, i * 3.5 + Math.random() * 7)
      );
    }

    function loop() {
      const { W, H, particles, Mo } = state;
      cx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.age++;
        if (p.age < p.delay) continue;
        const active = p.age - p.delay;

        /* Mouse repulsion on target position */
        const mdx = p.tx - Mo.x, mdy = p.ty - Mo.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < MR * MR && md2 > 1) {
          const md = Math.sqrt(md2);
          p.repX = (mdx / md) * (1 - md / MR) * 30;
          p.repY = (mdy / md) * (1 - md / MR) * 30;
        } else {
          p.repX *= 0.88;
          p.repY *= 0.88;
        }

        /* Direct particle repulsion from cursor */
        const pmdx = p.x - Mo.x, pmdy = p.y - Mo.y;
        const pmd2 = pmdx * pmdx + pmdy * pmdy;
        const PR = 50;
        if (pmd2 < PR * PR && pmd2 > 1) {
          const pmd = Math.sqrt(pmd2);
          p.vx += (pmdx / pmd) * (1 - pmd / PR) * 0.7;
          p.vy += (pmdy / pmd) * (1 - pmd / PR) * 0.7;
        }

        const gx = p.tx + p.repX, gy = p.ty + p.repY;
        const dx = gx - p.x, dy = gy - p.y;
        const dist = Math.hypot(dx, dy) || 0.001;

        /* ×6 acceleration vs original */
        const accel = dist < 20 ? 0.192 : dist < 60 ? 0.288 : 0.390;
        p.vx += (dx / dist) * accel;
        p.vy += (dy / dist) * accel;

        /* ×6 speed cap vs original */
        const spd  = Math.hypot(p.vx, p.vy);
        const maxV = dist < 25 ? 4.2 : dist < 80 ? 8.4 : 13.2;
        if (spd > maxV) { p.vx = p.vx / spd * maxV; p.vy = p.vy / spd * maxV; }

        const damp = dist < 25 ? 0.82 : 0.950;
        p.vx *= damp; p.vy *= damp;
        p.x  += p.vx;  p.y  += p.vy;

        if (!p.settled && dist < 2.5) p.settled = true;

        /* once settled, snap exactly to target and stop */
        if (p.settled) {
          p.x = p.tx; p.y = p.ty;
          p.vx = 0;   p.vy = 0;
        }

        const proxT    = Math.max(0, 1 - dist / 380);
        const ageT     = Math.min(1, active / 30); /* faster fade-in too */
        const sizeBoost = p.settled ? 1.35 : Math.max(0.6, 1 - dist / 200);
        const tAlpha   = p.baseAlpha * (proxT * 0.88 + 0.12) * ageT;
        p.alpha += (tAlpha - p.alpha) * 0.06;

        if (p.alpha < 0.008) continue;

        const { r: cr, g: cg, b: cb } = p.col;
        const drawR = p.r * sizeBoost * (p.settled ? 1.1 : 1);
        cx.beginPath();
        cx.arc(p.x, p.y, drawR, 0, Math.PI * 2);
        cx.fillStyle = `rgba(${cr},${cg},${cb},${p.alpha.toFixed(3)})`;
        cx.fill();
      }

      /* Subtle cursor ring */
      if (Mo.x > 0 && Mo.x < W && Mo.y > 0 && Mo.y < H) {
        cx.beginPath();
        cx.arc(Mo.x, Mo.y, MR, 0, Math.PI * 2);
        cx.strokeStyle = "rgba(107,99,208,0.12)";
        cx.lineWidth   = 0.8;
        cx.stroke();
        cx.beginPath();
        cx.arc(Mo.x, Mo.y, 2.5, 0, Math.PI * 2);
        cx.fillStyle = "rgba(74,15,157,0.28)";
        cx.fill();
      }

      state.rafId = requestAnimationFrame(loop);
    }

    function onMove(e) {
      const r = cv.getBoundingClientRect();
      state.Mo.x = e.clientX - r.left;
      state.Mo.y = e.clientY - r.top;
    }
    function onLeave() { state.Mo.x = -9999; state.Mo.y = -9999; }
    function onTouch(e) {
      e.preventDefault();
      const r = cv.getBoundingClientRect(), t = e.touches[0];
      state.Mo.x = t.clientX - r.left;
      state.Mo.y = t.clientY - r.top;
    }
    function onResize() {
      cancelAnimationFrame(state.rafId);
      setup();
      state.rafId = requestAnimationFrame(loop);
    }

    setup();
    state.rafId = requestAnimationFrame(loop);

    cv.addEventListener("mousemove",  onMove);
    cv.addEventListener("mouseleave", onLeave);
    cv.addEventListener("touchmove",  onTouch, { passive: false });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(state.rafId);
      cv.removeEventListener("mousemove",  onMove);
      cv.removeEventListener("mouseleave", onLeave);
      cv.removeEventListener("touchmove",  onTouch);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    /* Canvas fills 100% of whatever container you put it in */
    <div
      className={className}
      style={{ width: "100%", height: "100%", position: "relative", ...style }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      <span
        style={{
          position: "absolute",
          bottom: 14,
          right: 18,
          fontSize: 8,
          letterSpacing: "0.32em",
          color: "rgba(107,99,208,0.3)",
          fontFamily: "sans-serif",
          textTransform: "uppercase",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        Afrique
      </span>
    </div>
  );
}


