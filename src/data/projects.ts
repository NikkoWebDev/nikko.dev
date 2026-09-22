export type Project = {
  slug: string;
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
    title: "CEIS — Consejo Estudiantil de Ingeniería de Sistemas | UNAL",
    image: "/projects/ceis.jpg",
    demo: "https://ceis-unal.com",
    description: "Plataforma institucional del Consejo Estudiantil de Ingeniería de Sistemas y Computación.",
    problem: "La comunidad de Ingeniería de Sistemas carecía de un hub digital centralizado para acceder a la malla curricular interactiva, la gestión de comisiones de trabajo, convocatorias y transparencia de representación estudiantil.",
    work: "Desarrollo de una Single Page Application de alto rendimiento con React, Vite y Tailwind CSS, integrando Supabase para persistencia y backend serverless, sistema de temas claro/oscuro sin parpadeo y navegación fluida.",
    result: "Plataforma institucional oficial en producción en https://ceis-unal.com, conectando a la comunidad estudiantil de la Universidad Nacional de Colombia.",
    stack: ["React", "Vite", "Supabase", "Tailwind CSS", "Malla Curricular", "UNAL"]
  },
  {
    slug: "reprebot",
    title: "Reprebot — Agente de IA Aplicada & RAG para Representación Estudiantil",
    image: "/projects/reprebot.jpg",
    demo: "https://api.nikko.dev/docs",
    description: "Microservicio de IA con arquitectura RAG sobre normativas universitarias y canales automatizados.",
    problem: "Cientos de estudiantes realizaban consultas repetitivas sobre estatutos académicos, trámites de matrícula y normativas en canales dispersos. Los representantes no daban abasto para responder manualmente cada duda.",
    work: "Diseño e implementación de un microservicio en FastAPI y Python con motor RAG (búsqueda semántica vectorial de chunks normativos), respuestas con streaming ultra-rápido, integración de Database Webhooks con Supabase para responder foros automáticamente y conector de WhatsApp.",
    result: "API en producción activa con endpoints de chat streaming, búsqueda vectorial y automatización multi-canal con trazabilidad de fuentes oficiales.",
    stack: ["FastAPI", "Python", "RAG", "Vector Search", "Supabase Webhooks", "WhatsApp Bot"]
  },
  {
    slug: "sinpresupuesto",
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
