import { useEffect, useRef } from "react";

import '../assets/styles/heroCanvas.css';

function HeroCanvas() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const cvs = canvasRef.current;
    if (!hero || !cvs) return;

    const ctx = cvs.getContext("2d");

    let W = 0;
    let H = 0;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      dpr = window.devicePixelRatio || 1;

      W = hero.offsetWidth;
      H = hero.offsetHeight;

      cvs.width = W * dpr;
      cvs.height = H * dpr;

      cvs.style.width = W + "px";
      cvs.style.height = H + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;

    function onMove(e) {
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    }

    function onLeave() {
      mx = 0;
      my = 0;
    }

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    function blob(x, y, r, col, a) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${col},${a})`);
      g.addColorStop(0.45, `rgba(${col},${a * 0.42})`);
      g.addColorStop(1, `rgba(${col},0)`);

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const PALETTES = [
      { r: 201, g: 168, b: 76, amin: 0.75, amax: 1.0, wmin: 0.6, wmax: 1.4 },
      { r: 124, g: 92, b: 252, amin: 0.75, amax: 1.0, wmin: 0.6, wmax: 1.4 },
      { r: 60, g: 196, b: 124, amin: 0.75, amax: 1.0, wmin: 0.6, wmax: 1.4 },
    ];

    function Streak() {
      const pal = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      this.pal = pal;

      const horizontal = Math.random() > 0.22;

      if (horizontal) {
        this.angle = ((Math.random() * 28 - 10) * Math.PI) / 180;
        this.x = -220;
        this.y = Math.random() * H;
      } else {
        this.angle = ((80 + Math.random() * 20) * Math.PI) / 180;
        this.x = Math.random() * W;
        this.y = -120;
      }

      this.speed = 5 + Math.random() * 10;
      this.len = 70 + Math.random() * 180;
      this.width = pal.wmin + Math.random() * (pal.wmax - pal.wmin);
      this.alpha = pal.amin + Math.random() * (pal.amax - pal.amin);
      this.twin = Math.random() > 0.65;
      this.twinOff = 2 + Math.random() * 5;
      this.alive = true;
    }

    Streak.prototype.update = function () {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;

      if (this.x > W + 250 || this.y > H + 150) {
        this.alive = false;
      }
    };

    Streak.prototype.drawLine = function (x1, y1, x2, y2, r, g, b, a, w) {
      const gr = ctx.createLinearGradient(x1, y1, x2, y2);

      gr.addColorStop(0, `rgba(${r},${g},${b},0)`);
      gr.addColorStop(0.25, `rgba(${r},${g},${b},${Math.min(a * 1.2, 1)})`);
      gr.addColorStop(0.75, `rgba(${r},${g},${b},${Math.min(a, 1)})`);
      gr.addColorStop(1, `rgba(${r},${g},${b},0)`);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gr;
      ctx.lineWidth = w;
      ctx.lineCap = "round";
      ctx.stroke();
    };

    Streak.prototype.draw = function () {
      const tx = this.x - Math.cos(this.angle) * this.len;
      const ty = this.y - Math.sin(this.angle) * this.len;

      const { r, g, b } = this.pal;

      this.drawLine(tx, ty, this.x, this.y, r, g, b, this.alpha, this.width);

      if (this.twin) {
        const px = Math.sin(this.angle) * this.twinOff;
        const py = -Math.cos(this.angle) * this.twinOff;

        this.drawLine(
          tx + px,
          ty + py,
          this.x + px,
          this.y + py,
          r,
          g,
          b,
          this.alpha * 0.7,
          this.width * 0.5
        );
      }
    };

    function Orb() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.15;
      this.vy = (Math.random() - 0.5) * 0.15;
      this.r = 1.2 + Math.random() * 2.4;
      this.a = Math.random() * 0.4 + 0.15;
      this.life = 0;
      this.maxLife = 350 + Math.random() * 550;
    }

    Orb.prototype.alpha = function () {
      const t = this.life / this.maxLife;
      if (t < 0.2) return (t / 0.2) * this.a;
      if (t > 0.8) return ((1 - t) / 0.2) * this.a;
      return this.a;
    };

    Orb.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;

      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;

      return this.life < this.maxLife;
    };

    Orb.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);

      const alpha = this.alpha();
      ctx.fillStyle = `rgba(190,170,255,${Math.min(alpha * 2.2, 1)})`;
      ctx.fill();
    };

    let streaks = [];
    let orbs = Array.from({ length: 20 }, () => new Orb());

    let t = 0;
    let lastSpawn = 0;
    let spawnInterval = 110;

    function getBgColor() {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      return isDark ? "rgba(0,0,0,0.2)" : "#F8F8E6";
    }

    let raf;

    function loop() {
      raf = requestAnimationFrame(loop);
      t++;

      cx += (mx - cx) * 0.03;
      cy += (my - cy) * 0.03;

      ctx.fillStyle = getBgColor();
      ctx.fillRect(0, 0, W, H);

      const s = Math.min(W, H);

      blob(
        W * (0.63 + 0.04 * Math.sin(t * 0.00055)) + cx * W * 0.07,
        H * (-0.08 + 0.07 * Math.sin(t * 0.00042)) + cy * H * 0.05,
        s * (0.68 + 0.05 * Math.sin(t * 0.0007)),
        "180,160,255",
        0.9
      );

      blob(
        W * (0.13 + 0.05 * Math.sin(t * 0.00068 + 1.4)) + cx * W * 0.04,
        H * (0.15 + 0.07 * Math.sin(t * 0.00088 + 0.7)) + cy * H * 0.035,
        s * (0.27 + 0.03 * Math.sin(t * 0.001)),
        "200,185,255",
        0.7
      );

      if (t - lastSpawn > spawnInterval) {
        streaks.push(new Streak());
        if (Math.random() > 0.45) streaks.push(new Streak());
        lastSpawn = t;
        spawnInterval = 50 + Math.random() * 80;
      }

      streaks = streaks.filter((s) => s.alive);
      streaks.forEach((s) => {
        s.update();
        s.draw();
      });

      orbs = orbs.filter((o) => o.update());
      while (orbs.length < 20) orbs.push(new Orb());
      orbs.forEach((o) => o.draw());
    }

    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
    <div ref={heroRef} className="component__hero--canvas">
      <canvas ref={canvasRef} />
    </div>
    <div className="component__hero--bg">
        <div className="component__hero--glow component__hero--glow-1"></div>
        <div className="component__hero--glow component__hero--glow-2"></div>
        <div className="component__hero--particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
        </div>
    </div>
    </>
  );
}

export default HeroCanvas;