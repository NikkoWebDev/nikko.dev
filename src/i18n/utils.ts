import { ui, type UIKey } from "./ui";

export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

/** Valor con una versión por idioma (textos de proyectos, etiquetas, etc.). */
export type Localized<T = string> = { es: T; en: T };

export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

/**
 * Devuelve el texto de una clave. Lanza un error si falta la clave o el idioma:
 * así una traducción incompleta rompe el build en vez de llegar a producción.
 */
export function translate(key: UIKey, lang: Lang): string {
  const entry = (ui as Record<string, Localized | undefined>)[key];
  if (!entry) throw new Error(`[i18n] Falta la clave "${key}"`);
  const value = entry[lang];
  if (!value) throw new Error(`[i18n] La clave "${key}" no tiene texto en "${lang}"`);
  return value;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey) => translate(key, lang);
}

export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

/* ── Rutas ──
   Español sin prefijo (/, /proyectos/:slug) e inglés bajo /en (/en, /en/projects/:slug).
   Los ids de las secciones son los mismos en ambos idiomas. */

export function homePath(lang: Lang): string {
  return lang === "en" ? "/en" : "/";
}

export function projectPath(slug: string, lang: Lang): string {
  return lang === "en" ? `/en/projects/${slug}` : `/proyectos/${slug}`;
}

export function sectionPath(id: string, lang: Lang): string {
  return `${lang === "en" ? "/en" : "/"}#${id}`;
}

export function normalizePath(pathname: string): string {
  const clean = pathname.replace(/\/index\.html$/, "").replace(/\.html$/, "").replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

export function langFromPath(pathname: string): Lang {
  return /^\/en(\/|$)/.test(normalizePath(pathname)) ? "en" : "es";
}

/** Ruta equivalente en el otro idioma: un caso de estudio lleva a su traducción, el resto a la portada. */
export function alternatePath(pathname: string, to: Lang): string {
  const match = normalizePath(pathname).match(/^\/(?:proyectos|en\/projects)\/([^/]+)$/);
  if (match) return projectPath(match[1], to);
  return homePath(to);
}
