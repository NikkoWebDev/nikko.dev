import type { UIKey } from "../i18n/ui";
import type { Lang, Localized } from "../i18n/utils";
import { CONTACT } from "./site";

/** Etiqueta técnica: un nombre neutro ("Astro") o uno traducido. */
export type Tag = string | Localized;

export function tagText(tag: Tag, lang: Lang): string {
  return typeof tag === "string" ? tag : tag[lang];
}

/* ── Servicios ── */
export interface Service {
  n: string;
  labelKey: UIKey;
  titleKey: UIKey;
  descKey: UIKey;
  tags: Tag[];
}

export const services: Service[] = [
  {
    n: "01",
    labelKey: "services.label1",
    titleKey: "services.card1.title",
    descKey: "services.card1.desc",
    tags: ["Next.js / Astro", "Cloudflare Edge", "Supabase", "PostgreSQL + RLS"],
  },
  {
    n: "02",
    labelKey: "services.label2",
    titleKey: "services.card2.title",
    descKey: "services.card2.desc",
    tags: ["FastAPI", "Python RAG", "Vector Search", "Webhooks"],
  },
  {
    n: "03",
    labelKey: "services.label3",
    titleKey: "services.card3.title",
    descKey: "services.card3.desc",
    tags: ["Core Web Vitals", { es: "Latencia 0.2s", en: "0.2s latency" }, { es: "Infra a ~$0", en: "~$0 infra" }, "Astro SSG"],
  },
  {
    n: "04",
    labelKey: "services.label4",
    titleKey: "services.card4.title",
    descKey: "services.card4.desc",
    tags: [
      { es: "PWA offline", en: "Offline PWA" },
      { es: "SEO técnico", en: "Technical SEO" },
      { es: "UI interactiva", en: "Interactive UI" },
      { es: "Alta conversión", en: "High conversion" },
    ],
  },
];

/* ── Stack por capas ── */
export interface StackGroup {
  id: string;
  titleKey: UIKey;
  glyph: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  { id: "frontend", titleKey: "stack.group.frontend", glyph: "</>", items: ["Astro", "Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "PWA"] },
  { id: "backend", titleKey: "stack.group.backend", glyph: "{ }", items: ["Supabase", "PostgreSQL", "RLS", "FastAPI", "REST APIs", "OAuth", "JWT"] },
  { id: "ai", titleKey: "stack.group.ai", glyph: "◇", items: ["RAG", "Fine-tuning", "Qwen 3.5 4B", "Llama 3.1", "OpenRouter", "Vector Search", "Prompt Engineering"] },
  { id: "edge", titleKey: "stack.group.edge", glyph: "▲", items: ["Cloudflare Workers", "Vercel", "Linux (Arch / Debian)", "Git · GitHub", "CI/CD", "Docker", "Playwright"] },
  { id: "languages", titleKey: "stack.group.languages", glyph: "λ", items: ["TypeScript", "Python", "SQL", "C++", "Rust"] },
];

/* ── Preguntas frecuentes (la portada y el JSON-LD FAQPage leen esta lista) ── */
export const faqItems: { q: UIKey; a: UIKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
  { q: "faq.q6", a: "faq.a6" },
];

/* ── Métricas: cada una apunta al proyecto (o perfil) que la respalda ── */
export interface Metric {
  id: string;
  value: string;
  /** Si existe, el número se anima de 0 a `to` al entrar en pantalla. */
  count?: { to: number; suffix: string };
  labelKey: UIKey;
  source: { project: string } | { href: string; name: string };
}

export const metrics: Metric[] = [
  { id: "speed", value: "3s → 0.2s", labelKey: "metrics.speed", source: { project: "sinpresupuesto" } },
  { id: "groups", value: "13", count: { to: 13, suffix: "" }, labelKey: "metrics.groups", source: { project: "fibog" } },
  { id: "lines", value: "11k+", count: { to: 11, suffix: "k+" }, labelKey: "metrics.lines", source: { project: "fibog" } },
  { id: "channels", value: "3", count: { to: 3, suffix: "" }, labelKey: "metrics.channels", source: { project: "reprebot" } },
  { id: "cost", value: "~$0", labelKey: "metrics.cost", source: { project: "sinpresupuesto" } },
  { id: "projects", value: "8+", count: { to: 8, suffix: "+" }, labelKey: "metrics.projects", source: { href: CONTACT.github, name: "GitHub" } },
];
