/** Punto de entrada del JavaScript del sitio. Astro lo empaqueta en un único módulo por página. */
import { track } from "../lib/analytics";
import { initClocks, initCounters, initShortcutHints, initSpotlight } from "./effects";
import { initCopyButtons } from "./feedback";
import { initNav } from "./nav";
import { initPalette } from "./palette";
import { initTheme } from "./theme";

function initAnalytics(): void {
  // Clics delegados: los elementos marcan el evento con data-track="nombre"
  // y propiedades opcionales data-track-prop-<clave>.
  document.addEventListener("click", (event) => {
    const element = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
    const name = element?.getAttribute("data-track");
    if (!element || !name) return;
    const props: Record<string, string> = {};
    for (const attribute of Array.from(element.attributes)) {
      if (attribute.name.startsWith("data-track-prop-")) props[attribute.name.slice("data-track-prop-".length)] = attribute.value;
    }
    track(name, props);
  });

  // Profundidad de scroll: 25/50/75/100 %, una vez cada una.
  const fired = new Set<number>();
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? (window.scrollY / max) * 100 : 100;
        [25, 50, 75, 100].forEach((mark) => {
          if (progress >= mark - 0.5 && !fired.has(mark)) {
            fired.add(mark);
            track(`scroll_${mark}`);
          }
        });
      });
    },
    { passive: true },
  );

  const caseSlug = document.querySelector<HTMLElement>("[data-project-slug]")?.dataset.projectSlug;
  if (caseSlug) track("case_view", { slug: caseSlug });
}

initTheme();
initNav();
initPalette();
initCopyButtons();
initCounters();
initSpotlight();
initClocks();
initShortcutHints();
initAnalytics();
