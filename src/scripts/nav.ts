/** Barra de navegación: estado al hacer scroll, sección activa y menú móvil. */

function onScrollFrame(callback: () => void): void {
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        callback();
      });
    },
    { passive: true },
  );
  callback();
}

function initScrolledState(): void {
  const header = document.querySelector<HTMLElement>("[data-nav]");
  if (!header) return;
  onScrollFrame(() => header.classList.toggle("is-scrolled", window.scrollY > 12));
}

/** Marca con aria-current el enlace de la sección que ocupa el centro de la pantalla. */
function initScrollSpy(): void {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  if (!links.length || !sections.length || !("IntersectionObserver" in window)) return;

  const setCurrent = (id: string) => {
    links.forEach((link) => {
      if (link.dataset.navLink === id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

function initMobileMenu(): void {
  const dialog = document.getElementById("mobileMenu");
  if (!(dialog instanceof HTMLDialogElement)) return;

  document.querySelectorAll<HTMLElement>("[data-menu-open]").forEach((button) => {
    button.addEventListener("click", () => {
      dialog.showModal();
      button.setAttribute("aria-expanded", "true");
    });
  });
  dialog.addEventListener("close", () => {
    document.querySelectorAll<HTMLElement>("[data-menu-open]").forEach((button) => button.setAttribute("aria-expanded", "false"));
  });
  dialog.querySelectorAll<HTMLElement>("[data-menu-close]").forEach((element) => {
    element.addEventListener("click", () => dialog.close());
  });
  // Un clic fuera del panel cae sobre el propio <dialog>: lo cerramos.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

/** El botón flotante de WhatsApp aparece tras el hero y se oculta en la sección de contacto. */
function initFloatingWhatsApp(): void {
  const button = document.querySelector<HTMLElement>("[data-wa-float]");
  if (!button) return;
  const contact = document.getElementById("contacto");
  let pastHero = false;
  let contactVisible = false;
  const render = () => button.classList.toggle("is-visible", pastHero && !contactVisible);

  onScrollFrame(() => {
    pastHero = window.scrollY > window.innerHeight * 0.7;
    render();
  });

  if (contact && "IntersectionObserver" in window) {
    new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        render();
      },
      { threshold: 0.1 },
    ).observe(contact);
  }
}

/** Al cambiar de idioma desde la portada, conserva la sección (#ancla) en la que estaba el visitante. */
function initLanguageLinks(): void {
  document.querySelectorAll<HTMLAnchorElement>("[data-lang-switch]").forEach((link) => {
    link.addEventListener("click", () => {
      const hash = window.location.hash;
      const target = link.getAttribute("href") ?? "";
      if (hash && !target.includes("#") && /^\/(en)?$/.test(target)) link.setAttribute("href", target + hash);
    });
  });
}

export function initNav(): void {
  initScrolledState();
  initScrollSpy();
  initMobileMenu();
  initFloatingWhatsApp();
  initLanguageLinks();
}
