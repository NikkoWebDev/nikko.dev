/** Detalles de movimiento y datos en vivo. Todo respeta prefers-reduced-motion. */

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Contadores: [data-count-to] sube de 0 al valor final al entrar en pantalla. Sin JS se ve el valor final. */
export function initCounters(): void {
  const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-to]"));
  if (!counters.length || reduceMotion() || !("IntersectionObserver" in window)) return;

  const animate = (element: HTMLElement) => {
    const to = Number(element.dataset.countTo);
    const suffix = element.dataset.countSuffix ?? "";
    const finalText = element.dataset.countFinal ?? element.textContent ?? "";
    const duration = 1100;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = progress < 1 ? `${Math.round(to * eased)}${suffix}` : finalText;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        animate(entry.target as HTMLElement);
      });
    },
    { threshold: 0.6 },
  );

  counters.forEach((element) => {
    const to = Number(element.dataset.countTo);
    if (!Number.isFinite(to)) return;
    element.dataset.countFinal = element.textContent ?? "";
    // Solo se pone a 0 lo que todavía no se ve, para no producir un salto visible.
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.textContent = `0${element.dataset.countSuffix ?? ""}`;
      observer.observe(element);
    }
  });
}

/** Brillo que sigue al cursor en tarjetas [data-spotlight] (solo puntero fino). */
export function initSpotlight(): void {
  if (reduceMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  let frame = 0;
  let target: HTMLElement | null = null;
  let x = 0;
  let y = 0;
  document.addEventListener(
    "pointermove",
    (event) => {
      const element = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-spotlight]") : null;
      if (!element) return;
      target = element;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${x - rect.left}px`);
        target.style.setProperty("--my", `${y - rect.top}px`);
      });
    },
    { passive: true },
  );
}

/** Relojes <time data-clock data-tz="America/Bogota">: hora local real, actualizada cada minuto. */
export function initClocks(): void {
  const clocks = Array.from(document.querySelectorAll<HTMLElement>("[data-clock]"));
  if (!clocks.length) return;
  const formatters = new Map<string, Intl.DateTimeFormat>();
  const format = (timeZone: string, date: Date) => {
    let formatter = formatters.get(timeZone);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat("es-CO", { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone });
      formatters.set(timeZone, formatter);
    }
    return formatter.format(date);
  };
  const tick = () => {
    const now = new Date();
    clocks.forEach((clock) => {
      clock.textContent = format(clock.dataset.tz ?? "America/Bogota", now);
      clock.setAttribute("datetime", now.toISOString());
    });
  };
  tick();
  window.setTimeout(() => {
    tick();
    window.setInterval(tick, 60_000);
  }, 60_000 - (Date.now() % 60_000));
}

/** Muestra ⌘K en Apple y Ctrl K en el resto. */
export function initShortcutHints(): void {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const platform = nav.userAgentData?.platform ?? navigator.platform ?? navigator.userAgent;
  if (!/mac|iphone|ipad|ipod/i.test(platform)) return;
  document.querySelectorAll<HTMLElement>("[data-kbd-mod]").forEach((element) => {
    element.textContent = "⌘K";
  });
}
