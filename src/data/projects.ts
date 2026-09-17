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
    demo: "https://semilleros-fibog.vercel.app",
    repo: "https://github.com/NikkoWebDev/FIBOG",
    description: "Plataforma para centralizar grupos de investigación y semilleros.",
    problem: "La facultad no tenía dónde centralizar sus grupos de investigación y semilleros. La información estaba repartida entre correos, PDFs y grupos de WhatsApp.",
    work: "Construimos una plataforma con Astro, Supabase y PostgreSQL: catálogo de grupos, gestión de roles y formularios de postulación.",
    result: "Plataforma en producción con 13 grupos gestionados.",
    stack: ["Astro", "Supabase", "PostgreSQL", "RLS", "Accesibilidad", "UNAL"]
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
