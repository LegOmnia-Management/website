import { useEffect, useRef } from "react";

import '../assets/styles/heroCanvas.css';

const HeroCanvasMap = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W = 0;
    let H = 0;
    let frame = 0;
    let animationFrameId;

    let particles = [];
    let allTargetDots = [];

    const COLOR = "107,99,208";

    const africaOutline = [
      [0.38, 0.0],[0.42, 0.0],[0.50, 0.01],[0.58, 0.01],[0.62, 0.0],[0.65, 0.01],
      [0.70, 0.02],[0.74, 0.04],[0.76, 0.07],[0.77, 0.10],[0.78, 0.13],[0.80, 0.16],
      [0.82, 0.19],[0.84, 0.21],[0.86, 0.23],[0.88, 0.25],[0.90, 0.27],[0.91, 0.30],
      [0.92, 0.34],[0.92, 0.38],[0.91, 0.42],[0.90, 0.46],[0.89, 0.49],[0.90, 0.52],
      [0.91, 0.55],[0.90, 0.58],[0.89, 0.60],[0.87, 0.62],[0.84, 0.64],[0.81, 0.65],
      [0.79, 0.66],[0.77, 0.68],[0.75, 0.71],[0.73, 0.74],[0.71, 0.77],[0.69, 0.80],
      [0.67, 0.83],[0.65, 0.86],[0.63, 0.88],[0.61, 0.90],[0.59, 0.92],[0.57, 0.94],
      [0.55, 0.96],[0.53, 0.98],[0.51, 1.00],[0.49, 1.00],[0.47, 0.98],[0.45, 0.96],
      [0.43, 0.94],[0.41, 0.92],[0.39, 0.90],[0.37, 0.88],[0.35, 0.85],[0.33, 0.82],
      [0.31, 0.79],[0.29, 0.76],[0.27, 0.73],[0.25, 0.70],[0.23, 0.67],[0.21, 0.64],
      [0.18, 0.62],[0.14, 0.61],[0.10, 0.61],[0.07, 0.59],[0.05, 0.57],[0.03, 0.54],
      [0.02, 0.51],[0.01, 0.48],[0.00, 0.44],[0.00, 0.40],[0.01, 0.36],[0.02, 0.32],
      [0.03, 0.28],[0.04, 0.24],[0.06, 0.20],[0.08, 0.16],[0.10, 0.12],[0.11, 0.09],
      [0.12, 0.06],[0.14, 0.04],[0.17, 0.02],[0.20, 0.01],[0.24, 0.00],[0.28, 0.00],
      [0.32, 0.00],[0.36, 0.00],[0.38, 0.00]
    ];

    const madagascarOutline = [
      [0.88,0.55],[0.90,0.53],[0.92,0.54],[0.93,0.57],[0.93,0.61],[0.92,0.65],
      [0.91,0.68],[0.90,0.70],[0.88,0.70],[0.87,0.68],[0.86,0.65],[0.86,0.61],
      [0.87,0.58],[0.88,0.55]
    ];

    function pointInPolygon(px, py, poly) {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1];
        const xj = poly[j][0], yj = poly[j][1];

        if ((yi > py) !== (yj > py) &&
          px < ((xj - xi) * (py - yi)) / (yj - yi) + xi
        ) inside = !inside;
      }
      return inside;
    }

    const MAP_SCALE = 0.30;

    const BBOX_W = () => W * MAP_SCALE;
    const BBOX_H = () => BBOX_W() * 1.1;

    const CX = () => W * 0.5;
    const CY = () => H * 0.5;

    const BX = () => CX() - BBOX_W() / 2;
    const BY = () => CY() - BBOX_H() / 2;

    function toCanvas(nx, ny) {
      return [
        BX() + nx * BBOX_W(),
        BY() + ny * BBOX_H()
      ];
    }

    function buildParticles() {
      allTargetDots = [];
      const step = 9;

      // AFRIQUE
      for (let ny = 0; ny <= 1.0; ny += step / BBOX_H()) {
        for (let nx = 0; nx <= 1.0; nx += step / BBOX_W()) {
          if (pointInPolygon(nx, ny, africaOutline)) {
            const [cx, cy] = toCanvas(nx, ny);
            allTargetDots.push({ tx: cx, ty: cy });
          }
        }
      }

      // MADAGASCAR (décollée + île indépendante)
      for (let ny = 0.45; ny <= 0.8; ny += step / BBOX_H()) {
        for (let nx = 0.82; nx <= 0.98; nx += step / BBOX_W()) {
          if (pointInPolygon(nx, ny, madagascarOutline)) {
            const [cx, cy] = toCanvas(nx, ny);

            // 👉 séparation visuelle de l’Afrique
            const offsetX = W * 0.06;

            allTargetDots.push({
              tx: cx + offsetX,
              ty: cy
            });
          }
        }
      }

      // PARTICULES (spawn global + bords + random canvas)
      particles = allTargetDots.map((d, i) => {
        const r = Math.random();

        let x, y;

        if (r < 0.2) {
          x = Math.random() * W;
          y = -120;
        } else if (r < 0.4) {
          x = W + 120;
          y = Math.random() * H;
        } else if (r < 0.6) {
          x = Math.random() * W;
          y = H + 120;
        } else if (r < 0.8) {
          x = -120;
          y = Math.random() * H;
        } else {
          x = Math.random() * W;
          y = Math.random() * H;
        }

        return {
          tx: d.tx,
          ty: d.ty,
          x,
          y,
          vx: 0,
          vy: 0,
          baseR: 1.5 + Math.random() * 1.8,
          alpha: 0,
          targetAlpha: 0.7,
          delay: i * 0.35,
          speed: 0.008 + Math.random() * 0.012,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03
        };
      });
    }

    const resize = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;

      W = parent.clientWidth;
      H = parent.clientHeight;

      canvas.style.width = W + "px";
      canvas.style.height = H + "px";

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildParticles();
    };

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const time = frame * 0.02;
      const breathe = 1 + Math.sin(time) * 0.015;

      for (const p of particles) {
        if (frame < p.delay) continue;

        const dx = p.tx - p.x;
        const dy = p.ty - p.y;

        const dist2 = dx * dx + dy * dy;

        const force = 0.005 + (1 - Math.min(dist2 / 180000, 1)) * 0.022;

        p.vx = p.vx * 0.92 + dx * force;
        p.vy = p.vy * 0.92 + dy * force;

        p.x += p.vx;
        p.y += p.vy;

        const t = Math.min((frame - p.delay) * p.speed, 1);

        p.alpha = Math.min(p.alpha + 0.012, p.targetAlpha);

        p.pulse += p.pulseSpeed;
        const pulse = 1 + Math.sin(p.pulse) * 0.1;

        const r = p.baseR * pulse * (0.4 + 0.6 * t);

        ctx.beginPath();
        ctx.arc(p.x, p.y, r * breathe, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR},${p.alpha})`;
        ctx.fill();
      }

      frame++;
      animationFrameId = requestAnimationFrame(draw);
    }

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="component__hero--canvas" style={{ width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
};

export default HeroCanvasMap;