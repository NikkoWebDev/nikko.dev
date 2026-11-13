export type Palette = "mint" | "cyan" | "violet" | "amber" | "teal";

type Bilingual = { es: string; en: string };

export type Project = {
  slug: string;
  /** Paleta fija de la página del caso (también tiñe el vidrio y el fondo). */
  palette: Palette;
  /** Tipo de proyecto, mostrado como pill en la cabecera del caso. */
  kind: Bilingual;
  /** Cifras verificables (solo datos reales del proyecto). */
  metrics?: { value: string; label: Bilingual }[];
  title: string;
  image: string;
  demo: string;
  repo?: string;
  description: string;
  problem: string;
  work: string;
  result: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "fibog",
    palette: "mint",
    kind: { es: "Plataforma institucional", en: "Institutional platform" },
    metrics: [
      { value: "13", label: { es: "grupos de investigación gestionados", en: "research groups managed" } },
      { value: "875+", label: { es: "líneas de SQL (RLS + RPC)", en: "lines of SQL (RLS + RPC)" } },
      { value: "11k+", label: { es: "líneas de código", en: "lines of code" } }
    ],
    title: "Semilleros FIBOG — Universidad Nacional de Colombia",
    image: "/projects/fibog.jpg",
    demo: "https://semilleros.nikko.dev",
    repo: "https://github.com/NikkoWebDev/FIBOG",
    description: "Plataforma para centralizar grupos de investigación y semilleros.",
    problem: "La facultad no tenía dónde centralizar sus grupos de investigación y semilleros. La información estaba repartida entre correos, PDFs y grupos de WhatsApp.",
    work: "Construimos una plataforma con Astro, Supabase y PostgreSQL: catálogo de grupos, gestión de roles y formularios de postulación.",
    result: "Plataforma en producción con 13 grupos gestionados.",
    stack: ["Astro", "Supabase", "PostgreSQL", "RLS", "Accesibilidad", "UNAL"]
  },
  {
    slug: "ceis",
    palette: "cyan",
    kind: { es: "Plataforma institucional", en: "Institutional platform" },
    title: "CEIS — Consejo Estudiantil de Ingeniería de Sistemas | UNAL",
    image: "/projects/ceis.jpg",
    demo: "https://ceis-unal.com",
    description: "Plataforma institucional del Consejo Estudiantil de Ingeniería de Sistemas y Computación.",
    problem: "La comunidad de Ingeniería de Sistemas carecía de un hub digital centralizado para acceder a la malla curricular interactiva, la gestión de comisiones de trabajo, convocatorias y transparencia de representación estudiantil.",
    work: "Co-desarrollo, como uno de los dos desarrolladores principales, de una Single Page Application de alto rendimiento con React, Vite y Tailwind CSS, integrando Supabase para persistencia y backend serverless, sistema de temas claro/oscuro sin parpadeo y navegación fluida.",
    result: "Plataforma institucional oficial en producción en https://ceis-unal.com, conectando a la comunidad estudiantil de la Universidad Nacional de Colombia.",
    stack: ["React", "Vite", "Supabase", "Tailwind CSS", "Malla Curricular", "UNAL"]
  },
  {
    slug: "reprebot",
    palette: "violet",
    kind: { es: "IA aplicada · API propia", en: "Applied AI · custom API" },
    metrics: [
      { value: "3", label: { es: "canales: WhatsApp, chat y foro", en: "channels: WhatsApp, chat and forum" } },
      { value: "4B", label: { es: "parámetros, fine-tune sobre normativa UNAL", en: "parameters, fine-tuned on UNAL regulations" } }
    ],
    title: "Reprebot — IA finetuneada para la UNAL",
    image: "/projects/reprebot.jpg",
    demo: "https://repre.nikko.dev/",
    description: "Finetune de Qwen 3.5 (4B) para la UNAL, con API propia y despliegue en WhatsApp, chat y foro del CEIS.",
    problem: "Decenas de dudas repetitivas sobre estatutos académicos, trámites y acuerdos llegaban a diario por WhatsApp y foros sin capacidad humana de responder en tiempo real.",
    work: "Fine-tune de Qwen 3.5 (4B) sobre normativa UNAL con motor RAG de fuentes oficiales, API propia con streaming y despliegue multicanal: WhatsApp, chat del CEIS y foro, con respuestas que citan sus fuentes.",
    result: "Chat en vivo en repre.nikko.dev y API en producción, respondiendo normativa con fuentes citadas en los tres canales del CEIS.",
    stack: ["Qwen 3.5 4B", "Fine-tune UNAL", "FastAPI", "RAG", "WhatsApp", "API"]
  },
  {
    slug: "sinpresupuesto",
    palette: "amber",
    kind: { es: "Plataforma educativa con IA", en: "AI-powered education platform" },
    metrics: [
      { value: "3s → 0.2s", label: { es: "tiempo de carga (93% más rápido)", en: "load time (93% faster)" } },
      { value: "3", label: { es: "métodos de acceso: correo, Google y Microsoft", en: "sign-in methods: email, Google and Microsoft" } }
    ],
    title: "SinPresupuesto",
    image: "/projects/sinpresupuesto.jpg",
    demo: "https://sinpresupuesto.com",
    repo: "https://github.com/SinPresupuesto/SinPre",
    description: "Plataforma educativa para estudiantes sin recursos.",
    problem: "La fundación busca reducir la inaccesibilidad a la educación preuniversitaria para estudiantes que necesitan material de calidad.",
    work: "Implementamos OAuth con Microsoft y Google, una PWA para trabajar offline y un chatbot con Llama 3.1 sobre infraestructura Edge.",
    result: "Plataforma funcional con autenticación multicapa, chatbot con Llama 3.1 e infraestructura Edge.",
    stack: ["Next.js", "Cloudflare Workers", "Supabase", "Llama 3.1", "OAuth", "PWA"]
  },
  {
    slug: "autorreparacion",
    palette: "teal",
    kind: { es: "Landing comercial", en: "Commercial landing page" },
    title: "Autorreparación",
    image: "/projects/autorreparacion.jpg",
    demo: "https://www.autorreparacion.com",
    description: "Landing para una empresa real de reparación vehicular.",
    problem: "Un negocio de reparación vehicular necesitaba presencia digital real: algo que apareciera en Google y generara contactos.",
    work: "Desarrollé una landing en Astro con GSAP, SEO técnico, diseño responsive y un CTA directo a WhatsApp.",
    result: "Presencia digital funcional, SEO básico implementado y conversiones por WhatsApp.",
    stack: ["Astro", "GSAP", "SEO", "Responsive", "Cliente real"]
  },
  {
    slug: "indusec",
    palette: "cyan",
    kind: { es: "Landing empresarial", en: "Business landing page" },
    title: "InduSEC",
    image: "/projects/indusec.jpg",
    demo: "https://puertasindusec.com",
    repo: "https://github.com/NikkoWebDev/induSEC-WEB",
    description: "Landing para una empresa de puertas automáticas.",
    problem: "Una empresa de puertas automáticas no tenía presencia web profesional y necesitaba transmitir confianza en búsquedas locales.",
    work: "Desarrollé una landing en Astro con enfoque en SEO, diseño responsive y una presentación comercial limpia.",
    result: "Sitio live y funcional para un negocio físico que necesitaba digitalizarse.",
    stack: ["Astro", "SEO", "Responsive", "Cliente real"]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
