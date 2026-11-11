/**
 * Paleta de comandos (⌘K / Ctrl+K o "/").
 * Las opciones las genera CommandPalette.astro en el servidor, en el idioma de
 * la página; aquí solo se filtran, se navegan con el teclado y se ejecutan.
 */
import { track } from "../lib/analytics";
import { copyText } from "./feedback";
import { toggleTheme } from "./theme";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const isTypingTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

export function initPalette(): void {
  const dialog = document.getElementById("cmdk");
  const input = document.getElementById("cmdk-input");
  const list = document.getElementById("cmdk-list");
  const empty = document.getElementById("cmdk-empty");
  if (!(dialog instanceof HTMLDialogElement) || !(input instanceof HTMLInputElement) || !list) return;

  const options = Array.from(list.querySelectorAll<HTMLElement>("[role='option']"));
  const groups = Array.from(list.querySelectorAll<HTMLElement>("[data-cmdk-group]"));
  const labels = new Map(options.map((option) => [option, normalize(option.querySelector(".cmdk-label")?.textContent ?? "")]));
  const haystack = new Map(options.map((option) => [option, normalize(`${option.textContent ?? ""} ${option.dataset.keywords ?? ""}`)]));
  let active: HTMLElement | null = null;

  // Prioriza coincidencias en la etiqueta visible sobre las de palabras clave.
  const score = (option: HTMLElement, terms: string[]) => {
    const label = labels.get(option) ?? "";
    return terms.reduce((total, term) => total + (label.startsWith(term) ? 3 : label.includes(term) ? 2 : 1), 0);
  };

  const visibleOptions = () => options.filter((option) => !option.hidden);

  const setActive = (option: HTMLElement | null, scroll = true) => {
    active?.setAttribute("aria-selected", "false");
    active = option;
    if (!option) {
      input.removeAttribute("aria-activedescendant");
      return;
    }
    option.setAttribute("aria-selected", "true");
    input.setAttribute("aria-activedescendant", option.id);
    if (scroll) option.scrollIntoView({ block: "nearest" });
  };

  const filter = () => {
    const terms = normalize(input.value).split(/\s+/).filter(Boolean);
    options.forEach((option) => {
      const text = haystack.get(option) ?? "";
      option.hidden = !terms.every((term) => text.includes(term));
    });
    groups.forEach((group) => {
      group.hidden = !group.querySelector("[role='option']:not([hidden])");
    });
    const visible = visibleOptions();
    if (empty) empty.hidden = visible.length > 0;
    let best: HTMLElement | null = visible[0] ?? null;
    if (terms.length) {
      let bestScore = -1;
      visible.forEach((option) => {
        const value = score(option, terms);
        if (value > bestScore) {
          bestScore = value;
          best = option;
        }
      });
    }
    setActive(best, terms.length > 0);
  };

  const open = () => {
    if (dialog.open) return;
    input.value = "";
    filter();
    dialog.showModal();
    input.focus();
    list.scrollTop = 0;
    track("palette_open");
  };

  const close = () => {
    if (dialog.open) dialog.close();
  };

  const goToSection = (hash: string) => {
    const target = document.getElementById(hash.slice(1));
    if (!target) {
      window.location.hash = hash;
      return;
    }
    history.pushState(null, "", hash);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };

  const run = (option: HTMLElement) => {
    const { action, href, external } = option.dataset;
    track("palette_run", { id: option.dataset.id ?? "" });
    close();
    if (action === "theme") {
      toggleTheme();
    } else if (action === "copy") {
      void copyText(option.dataset.value ?? "", option.dataset.success ?? "", option.dataset.error ?? "");
    } else if (action === "top") {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    } else if (href && external === "true") {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href && href.startsWith("#")) {
      goToSection(href);
    } else if (href) {
      window.location.assign(href);
    }
  };

  input.addEventListener("input", filter);

  input.addEventListener("keydown", (event) => {
    const visible = visibleOptions();
    if (!visible.length) return;
    const index = active ? visible.indexOf(active) : -1;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive(visible[(index + 1) % visible.length]);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(visible[(index - 1 + visible.length) % visible.length]);
    } else if (event.key === "Home" && event.ctrlKey) {
      event.preventDefault();
      setActive(visible[0]);
    } else if (event.key === "End" && event.ctrlKey) {
      event.preventDefault();
      setActive(visible[visible.length - 1]);
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (active) run(active);
    }
  });

  list.addEventListener("click", (event) => {
    const option = event.target instanceof Element ? event.target.closest<HTMLElement>("[role='option']") : null;
    if (option) run(option);
  });

  list.addEventListener("pointermove", (event) => {
    const option = event.target instanceof Element ? event.target.closest<HTMLElement>("[role='option']") : null;
    if (option && option !== active) setActive(option, false);
  });

  // El <dialog> ocupa toda la pantalla: un clic fuera del panel cae sobre él.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  document.querySelectorAll<HTMLElement>("[data-cmdk-open]").forEach((button) => {
    button.addEventListener("click", open);
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (dialog.open) close();
      else open();
    } else if (event.key === "/" && !dialog.open && !isTypingTarget(event.target)) {
      event.preventDefault();
      open();
    }
  });
}
