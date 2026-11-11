import type { UIKey } from "../i18n/ui";

export const SITE_URL = "https://nikko.dev";
export const BRAND = "NikkoDev";

export const PERSON = {
  name: "Brayan Nikolas Gallo León",
  givenName: "Brayan Nikolas",
  familyName: "Gallo León",
  alias: "NikkoDev",
  initials: "ND",
} as const;

/** Única fuente de los datos de contacto. Cambia aquí y se actualiza todo el sitio. */
export const CONTACT = {
  whatsappNumber: "573136638097",
  whatsappDisplay: "+57 313 663 8097",
  phone: "+57-313-663-8097",
  email: "nikolasgallo095@gmail.com",
  github: "https://github.com/NikkoWebDev",
  githubHandle: "NikkoWebDev",
  linkedin: "https://www.linkedin.com/in/nikolas-gallo-25546b375/",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}`;

/** Enlace de WhatsApp con un mensaje inicial opcional. */
export function whatsappLink(message?: string): string {
  return message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL;
}

export const LOCATION = {
  city: "Bogotá",
  country: "Colombia",
  countryCode: "CO",
  timeZone: "America/Bogota",
  utcLabel: "UTC−5",
} as const;

/** Fecha del build (AAAA-MM-DD). La usan el sitemap, el JSON-LD y el panel del hero. */
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

export interface Section {
  id: string;
  navKey: UIKey;
  inNav: boolean;
}

/** Secciones de la portada en orden. Los ids son los mismos en /es y /en. */
export const SECTIONS: Section[] = [
  { id: "proyectos", navKey: "nav.proyectos", inNav: true },
  { id: "servicios", navKey: "nav.servicios", inNav: true },
  { id: "stack", navKey: "nav.stack", inNav: true },
  { id: "sobre-mi", navKey: "nav.sobre-mi", inNav: true },
  { id: "faq", navKey: "nav.faq", inNav: false },
  { id: "contacto", navKey: "nav.contacto", inNav: true },
];
