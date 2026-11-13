/**
 * NikkoDev OS — FX runtime
 * 1. Paleta por sección (cambia --fx-* en <html>, el CSS interpola con @property)
 * 2. Linterna + borde-luz en superficies de vidrio (delegado, decora al primer hover)
 * 3. Fondo vivo: constelación en canvas que reacciona al cursor y al scroll
 * 4. Reveal por IntersectionObserver para páginas sin su propio script
 *
 * Presupuesto: 0 dependencias, ~3 KB min. Todo se apaga con prefers-reduced-motion
 * (la constelación se dibuja una sola vez, estática).
 */

const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ─────────────── 1. Paleta por sección ─────────────── */

const PALETTE_BY_SECTION: Record<string, string> = {
  metricas: "mint",
  proyectos: "cyan",
  impacto: "violet",
  servicios: "amber",
  "sobre-mi": "violet",
  experiencia: "cyan",
  certificaciones: "amber",
  faq: "teal",
  contacto: "mint",
};

function initPalette() {
  if (root.hasAttribute("data-palette-lock")) return;
  const sections = document.querySelectorAll<HTMLElement>("main section");
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const apply = (name: string) => {
    if (root.dataset.palette !== name) root.dataset.palette = name;
  };

  // La línea de lectura es el centro del viewport.
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          apply(PALETTE_BY_SECTION[(entry.target as HTMLElement).id] ?? "mint");
        }
      }
    },
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  );
  sections.forEach((s) => io.observe(s));
}

/* ─────────────── 2. Vidrio: linterna + borde-luz ─────────────── */

const GLASS_SELECTOR =
  ".glass,.card,.about-card,.hero-terminal,.impact-panel,.dash-card,.nav-inner,.editor-window,.serv-card";

function decorate(el: HTMLElement) {
  if (el.querySelector(":scope > .fx-spot")) return;
  if (getComputedStyle(el).position === "static") el.style.position = "relative";
  el.style.isolation = "isolate";
  const spot = document.createElement("span");
  spot.className = "fx-spot";
  spot.setAttribute("aria-hidden", "true");
  el.prepend(spot);
}

function initGlass() {
  if (!finePointer || reduceMotion) return;

  let current: HTMLElement | null = null;
  let frame = 0;
  let px = 0;
  let py = 0;
  let target: HTMLElement | null = null;

  const paint = () => {
    frame = 0;
    if (!target) return;
    const r = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${px - r.left}px`);
    target.style.setProperty("--my", `${py - r.top}px`);
  };

  document.addEventListener(
    "pointermove",
    (e) => {
      const hit = (e.target as Element | null)?.closest<HTMLElement>(GLASS_SELECTOR) ?? null;
      if (hit !== current) {
        current?.classList.remove("fx-lit");
        current = hit;
        if (hit) {
          decorate(hit);
          hit.classList.add("fx-lit");
        }
      }
      if (hit) {
        target = hit;
        px = e.clientX;
        py = e.clientY;
        if (!frame) frame = requestAnimationFrame(paint);
      }
    },
    { passive: true },
  );

  document.addEventListener("pointerleave", () => {
    current?.classList.remove("fx-lit");
    current = null;
  });
}

/* ─────────────── 3. Fondo vivo ─────────────── */

type Node2D = { x: number; y: number; vx: number; vy: number; z: number };

function initBackground() {
  const bg = document.querySelector<HTMLElement>(".fx-bg");
  const canvas = document.getElementById("fxNet") as HTMLCanvasElement | null;
  if (!bg) return;

  // Linterna del grid: una sola variable en el contenedor, no en :root.
  if (finePointer && !reduceMotion) {
    let f = 0;
    let gx = 0;
    let gy = 0;
    window.addEventListener(
      "pointermove",
      (e) => {
        gx = e.clientX;
        gy = e.clientY;
        if (f) return;
        f = requestAnimationFrame(() => {
          f = 0;
          bg.style.setProperty("--px", `${gx}px`);
          bg.style.setProperty("--py", `${gy}px`);
        });
      },
      { passive: true },
    );
  }

  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const mouse = { x: -9999, y: -9999 };
  let w = 0;
  let h = 0;
  let dpr = 1;
  let nodes: Node2D[] = [];
  let scrollY = window.scrollY;
  let color = "#10B981";
  let tick = 0;
  let raf = 0;
  let last = 0;

  const isDark = () => root.classList.contains("dark");
  const LINK = 140;
  const LINK_SQ = LINK * LINK;

  const seed = () => {
    const count = finePointer
      ? Math.max(26, Math.min(64, Math.round((w * h) / 24000)))
      : Math.max(18, Math.min(30, Math.round((w * h) / 30000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      z: 0.4 + Math.random() * 0.9, // profundidad: tamaño y parallax
    }));
  };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
    draw(true);
  };

  const readColor = () => {
    const c = getComputedStyle(root).getPropertyValue("--fx-solid").trim();
    if (c) color = c;
  };

  const draw = (still = false) => {
    ctx.clearRect(0, 0, w, h);
    if (++tick % 24 === 1) readColor();

    const dark = isDark();
    const lineAlpha = dark ? 0.3 : 0.2;
    const dotAlpha = dark ? 0.8 : 0.55;
    const par = scrollY * 0.05;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;

    const px: number[] = [];
    const py: number[] = [];

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!still) {
        // atracción suave al cursor
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 22000) {
          n.vx += dx * 0.000018;
          n.vy += dy * 0.000018;
        }
        n.vx *= 0.995;
        n.vy *= 0.995;
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;
      }
      // parallax de scroll (envuelto para que nunca se vacíe la pantalla)
      let y = (n.y - par * n.z) % h;
      if (y < 0) y += h;
      px.push(n.x);
      py.push(y);
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = px[i] - px[j];
        const dy = py[i] - py[j];
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_SQ) {
          ctx.globalAlpha = (1 - d2 / LINK_SQ) * lineAlpha;
          ctx.beginPath();
          ctx.moveTo(px[i], py[i]);
          ctx.lineTo(px[j], py[j]);
          ctx.stroke();
        }
      }
      // enlaces hacia el cursor
      const mx = mouse.x - px[i];
      const my = mouse.y - py[i];
      const md = mx * mx + my * my;
      if (md < 26000) {
        ctx.globalAlpha = (1 - md / 26000) * (dark ? 0.55 : 0.4);
        ctx.beginPath();
        ctx.moveTo(px[i], py[i]);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = dotAlpha;
    for (let i = 0; i < nodes.length; i++) {
      ctx.beginPath();
      ctx.arc(px[i], py[i], 1.1 + nodes[i].z * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  const loop = (now: number) => {
    raf = requestAnimationFrame(loop);
    if (now - last < 33) return; // ~30 fps: suficiente para un fondo y más barato
    last = now;
    draw();
  };

  const start = () => {
    if (reduceMotion || raf) return;
    raf = requestAnimationFrame(loop);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  let resizeTimer: ReturnType<typeof setTimeout> | undefined;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });
  window.addEventListener("scroll", () => (scrollY = window.scrollY), { passive: true });
  if (finePointer) {
    window.addEventListener(
      "pointermove",
      (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      },
      { passive: true },
    );
    document.addEventListener("pointerleave", () => {
      mouse.x = mouse.y = -9999;
    });
  }
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  resize();
  start();
}

/* ─────────────── 4. Reveal genérico ─────────────── */

function initReveal() {
  const items = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
  if (!items.length) return;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );
  items.forEach((el) => io.observe(el));
}

export function initFx() {
  initPalette();
  initGlass();
  initBackground();
  initReveal();
}
