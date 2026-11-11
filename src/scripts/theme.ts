import { track } from "../lib/analytics";

export type Theme = "dark" | "light";

const STORAGE_KEY = "nikkodev-theme";
const THEME_COLORS: Record<Theme, string> = { dark: "#050B0A", light: "#F4FAF7" };

export function getTheme(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function syncToggles(theme: Theme): void {
  document.querySelectorAll<HTMLElement>("[data-theme-toggle]").forEach((button) => {
    const label = theme === "dark" ? button.dataset.labelToLight : button.dataset.labelToDark;
    if (label) {
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    }
  });
}

function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.dataset.theme = theme;
  document.getElementById("themeColor")?.setAttribute("content", THEME_COLORS[theme]);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Navegación privada sin almacenamiento: el tema dura solo esta visita.
  }
  syncToggles(theme);
}

type DocumentWithTransitions = Document & { startViewTransition?: (update: () => void) => unknown };

/** Alterna el tema con un fundido (View Transitions) cuando el navegador lo permite. */
export function toggleTheme(): Theme {
  const next: Theme = getTheme() === "dark" ? "light" : "dark";
  const doc = document as DocumentWithTransitions;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (doc.startViewTransition && !reduceMotion) {
    doc.startViewTransition(() => applyTheme(next));
  } else {
    applyTheme(next);
  }
  track("theme_toggle", { theme: next });
  return next;
}

export function initTheme(): void {
  syncToggles(getTheme());
  document.querySelectorAll<HTMLElement>("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleTheme();
    });
  });
}
