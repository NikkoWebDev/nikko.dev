// Sitemap generado en el build a partir de src/data/projects.ts, con alternativas hreflang.
import { projects } from "../data/projects";
import { BUILD_DATE } from "../data/site";
import { homePath, projectPath } from "../i18n/utils";
import { absoluteUrl } from "../lib/schema";

interface Entry {
  es: string;
  en: string;
  changefreq: "monthly" | "yearly";
  priority: [number, number];
}

const entries: Entry[] = [
  { es: homePath("es"), en: homePath("en"), changefreq: "monthly", priority: [1, 0.9] },
  ...projects.map((project): Entry => ({ es: projectPath(project.slug, "es"), en: projectPath(project.slug, "en"), changefreq: "yearly", priority: [0.8, 0.7] })),
];

function urlNode(loc: string, entry: Entry, priority: number): string {
  return [
    "  <url>",
    `    <loc>${absoluteUrl(loc)}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="es" href="${absoluteUrl(entry.es)}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl(entry.en)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(entry.es)}" />`,
    `    <lastmod>${BUILD_DATE}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    "  </url>",
  ].join("\n");
}

export function GET(): Response {
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.flatMap((entry) => [urlNode(entry.es, entry, entry.priority[0]), urlNode(entry.en, entry, entry.priority[1])]),
    "</urlset>",
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
