// Datos estructurados (JSON-LD). BaseLayout añade en todas las páginas
// Person, Organization, WebSite y WebPage; cada vista suma lo suyo.
import { faqItems, stackGroups } from "../data/content";
import type { Project } from "../data/projects";
import { BUILD_DATE, CONTACT, LOCATION, PERSON, SITE_URL } from "../data/site";
import { pick, projectPath, translate, type Lang } from "../i18n/utils";

export type SchemaNode = Record<string, unknown>;

const ref = (fragment: string) => `${SITE_URL}/#${fragment}`;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function personSchema(lang: Lang): SchemaNode {
  return {
    "@type": "Person",
    "@id": ref("person"),
    name: PERSON.name,
    alternateName: PERSON.alias,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    jobTitle: translate("meta.jobTitle", lang),
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/og-image.png`,
    email: `mailto:${CONTACT.email}`,
    sameAs: [CONTACT.github, CONTACT.linkedin],
    knowsAbout: Array.from(new Set(stackGroups.flatMap((group) => group.items))),
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Nacional de Colombia" },
    address: { "@type": "PostalAddress", addressLocality: LOCATION.city, addressCountry: LOCATION.countryCode },
  };
}

export function organizationSchema(lang: Lang): SchemaNode {
  return {
    "@type": "Organization",
    "@id": ref("organization"),
    name: "NikkoDev",
    alternateName: "NikkoDev OS",
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    description: translate("meta.org.description", lang),
    founder: { "@id": ref("person") },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      email: CONTACT.email,
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
      areaServed: LOCATION.countryCode,
    },
    sameAs: [CONTACT.github, CONTACT.linkedin],
  };
}

export function websiteSchema(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": ref("website"),
    name: "NikkoDev",
    url: `${SITE_URL}/`,
    inLanguage: ["es", "en"],
    publisher: { "@id": ref("organization") },
  };
}

export function webPageSchema(page: { url: string; name: string; description: string; lang: Lang }): SchemaNode {
  return {
    "@type": "WebPage",
    "@id": `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: page.lang,
    isPartOf: { "@id": ref("website") },
    about: { "@id": ref("person") },
    dateModified: BUILD_DATE,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(lang: Lang, pageUrl: string): SchemaNode {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: translate(item.q, lang),
      acceptedAnswer: { "@type": "Answer", text: translate(item.a, lang) },
    })),
  };
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, "");

export function caseStudySchema(project: Project, lang: Lang): SchemaNode {
  const url = absoluteUrl(projectPath(project.slug, lang));
  return {
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    name: pick(project.title, lang),
    headline: pick(project.title, lang),
    description: pick(project.summary, lang),
    abstract: stripTags(pick(project.result, lang)),
    url,
    image: absoluteUrl(project.image),
    inLanguage: lang,
    author: { "@id": ref("person") },
    keywords: project.stack.join(", "),
    ...(project.links.demo ? { sameAs: project.links.demo } : {}),
  };
}

/** Une los nodos en un único @graph y lo serializa de forma segura para <script>. */
export function serializeGraph(nodes: SchemaNode[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c");
}
