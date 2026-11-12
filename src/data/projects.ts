import type { Localized } from "../i18n/utils";

/**
 * Fuente única de los proyectos: tarjetas de la portada, casos de estudio,
 * paleta de comandos, panel del hero, sitemap y JSON-LD salen de aquí.
 *
 * Los campos problem, work, why, result y learn.text admiten HTML en línea
 * (<strong>, <code>). Es contenido propio del repositorio, no de usuarios.
 *
 * Para añadir un proyecto: agrega un objeto a la lista y sus capturas en
 * public/projects/<slug>.jpg (1280×800) y public/projects/<slug>-640.jpg (640×400).
 */
export interface Project {
  slug: string;
  /** Nombre corto para tarjetas y navegación. */
  name: string;
  /** Título largo del caso de estudio. */
  title: Localized;
  kind: Localized;
  /** Resumen para la meta description. */
  summary: Localized;
  tagline: Localized;
  highlight: { value: string; label: Localized };
  problem: Localized;
  work: Localized;
  why?: Localized;
  result: Localized;
  learn: { title: Localized; text: Localized };
  stack: string[];
  image: string;
  imageSmall: string;
  /** Punto de enfoque (object-position) cuando la tarjeta recorta la captura por los lados. */
  focus?: string;
  /** Dominio público, si el proyecto tiene uno enlazable. */
  domain?: string;
  links: { demo?: string; repo?: string };
  client: Localized;
}

const learned: Localized = { es: "Lo que aprendí", en: "What I learned" };
const differently: Localized = { es: "Lo que haría diferente", en: "What I'd do differently" };

export const projects: Project[] = [
  {
    slug: "reprebot",
    name: "Reprebot",
    title: { es: "Reprebot — IA finetuneada para la UNAL", en: "Reprebot — Fine-tuned AI for UNAL" },
    kind: { es: "IA aplicada · UNAL", en: "Applied AI · UNAL" },
    summary: {
      es: "Finetune de Qwen 3.5 (4B) para la UNAL, con API propia y despliegue en WhatsApp, chat y foro del CEIS.",
      en: "Qwen 3.5 (4B) fine-tune for UNAL with its own API, deployed on WhatsApp, CEIS chat and forum.",
    },
    tagline: {
      es: "Finetune de Qwen 3.5 (4B) para la UNAL, con API propia. Responde normativa en WhatsApp, el chat del CEIS y el foro.",
      en: "A Qwen 3.5 (4B) fine-tune for UNAL, with its own API. Answers regulations on WhatsApp, the CEIS chat and the forum.",
    },
    highlight: { value: "Qwen 3.5 4B", label: { es: "finetune propio + RAG con fuentes citadas", en: "own fine-tune + RAG with cited sources" } },
    problem: {
      es: "Decenas de dudas repetitivas sobre estatutos académicos, trámites y acuerdos llegaban a diario por WhatsApp y foros sin capacidad humana de responder en tiempo real.",
      en: "Dozens of repetitive queries about academic statutes, procedures, and bylaws arrived daily via WhatsApp and forums without the capacity to answer in real time.",
    },
    work: {
      es: "Fine-tune de <strong>Qwen 3.5 (4B) para la normativa UNAL</strong> con motor <strong>RAG</strong> sobre fuentes oficiales, <strong>API propia</strong> con streaming y despliegue multicanal: <strong>WhatsApp, chat del CEIS y foro</strong>. Cada respuesta cita sus fuentes.",
      en: "A <strong>Qwen 3.5 (4B) fine-tune on UNAL regulations</strong> with a <strong>RAG</strong> engine over official sources, a <strong>dedicated API</strong> with streaming, and multi-channel deployment: <strong>WhatsApp, CEIS chat and forum</strong>. Every answer cites its sources.",
    },
    result: {
      es: "<strong>Chat en vivo en <code>repre.nikko.dev</code></strong> y API en producción, respondiendo normativa con fuentes citadas en los tres canales del CEIS.",
      en: "<strong>Live chat at <code>repre.nikko.dev</code></strong> and a production API, answering regulations with cited sources across all three CEIS channels.",
    },
    learn: {
      title: learned,
      text: {
        es: "En sistemas RAG en producción, el <strong>chunking semántico y la trazabilidad de fuentes</strong> son más determinantes para la precisión que el tamaño del modelo.",
        en: "In production RAG systems, <strong>semantic chunking and source provenance</strong> matter far more for precision than raw model parameters.",
      },
    },
    stack: ["Qwen 3.5 4B", "Fine-tuning", "RAG", "FastAPI", "WhatsApp", "API"],
    image: "/projects/reprebot.jpg",
    imageSmall: "/projects/reprebot-640.jpg",
    focus: "67% top",
    domain: "repre.nikko.dev",
    links: { demo: "https://repre.nikko.dev/" },
    client: { es: "CEIS · UNAL", en: "CEIS · UNAL" },
  },
  {
    slug: "sinpresupuesto",
    name: "SinPresupuesto",
    title: { es: "SinPresupuesto", en: "SinPresupuesto" },
    kind: { es: "Plataforma educativa · Edge", en: "Education platform · Edge" },
    summary: {
      es: "Plataforma educativa para estudiantes sin recursos.",
      en: "An educational platform for students without resources.",
    },
    tagline: {
      es: "Estudiantes sin recursos que necesitan material de calidad y no tienen cómo pagarlo ni dónde encontrarlo.",
      en: "Students without resources who need quality material and can't pay for it or find it.",
    },
    highlight: { value: "3s → 0.2s", label: { es: "tiempo de carga (−93%)", en: "load time (−93%)" } },
    problem: {
      es: "Fundación que busca reducir la inaccesibilidad a la educación preuniversitaria. El problema real: estudiantes sin recursos que necesitan material de calidad.",
      en: "A foundation working to reduce lack of access to pre-university education. The real problem: students without resources who need quality material.",
    },
    work: {
      es: "Implementamos OAuth con Microsoft y Google, <strong>PWA pa' que funcione offline</strong> y en dispositivos de gama baja. La gracia de una PWA aquí no es el hype, es que un estudiante con un celular de 300 lucas y datos limitados pueda estudiar sin señal constante.",
      en: "We implemented OAuth with Microsoft and Google, a <strong>PWA so it works offline</strong> and on low-end devices. The point of a PWA here isn't hype — it's that a student with an $80 phone and limited data can study without constant signal.",
    },
    result: {
      es: "Plataforma funcional con <strong>autenticación multicapa</strong>, chatbot con Llama 3.1, y infraestructura Edge que prácticamente no cuesta. La carga pasó de <strong>3s a 0.2s</strong>.",
      en: "A functional platform with <strong>multi-layer authentication</strong>, Llama 3.1 chatbot, and Edge infrastructure that practically costs nothing. Load time went from <strong>3s to 0.2s</strong>.",
    },
    learn: {
      title: differently,
      text: {
        es: "Medir desde el día uno. Montamos medio a las carreras y <strong>faltaron métricas de uso reales</strong>.",
        en: "Measure from day one. We built half of it in a rush and <strong>real usage metrics were missing</strong>.",
      },
    },
    stack: ["Next.js", "Cloudflare Workers", "Supabase", "Llama 3.1", "OAuth", "PWA"],
    image: "/projects/sinpresupuesto.jpg",
    imageSmall: "/projects/sinpresupuesto-640.jpg",
    domain: "sinpresupuesto.com",
    links: { demo: "https://sinpresupuesto.com" },
    client: { es: "SinPresupuesto", en: "SinPresupuesto" },
  },
  {
    slug: "fibog",
    name: "FIBOG",
    title: { es: "Semilleros FIBOG — Universidad Nacional de Colombia", en: "FIBOG Seedbeds — Universidad Nacional de Colombia" },
    kind: { es: "Plataforma institucional · UNAL", en: "Institutional platform · UNAL" },
    summary: {
      es: "Plataforma para centralizar grupos de investigación y semilleros.",
      en: "A platform to centralize research groups and seedbeds.",
    },
    tagline: {
      es: "La facultad no tenía dónde centralizar sus grupos de investigación y semilleros.",
      en: "The faculty had no place to centralize its research groups and seedbeds.",
    },
    highlight: { value: "13", label: { es: "grupos de investigación gestionados · 11k+ líneas", en: "research groups managed · 11k+ lines" } },
    problem: {
      es: "Todo era un reguero de correos, PDFs sueltos y grupos de WhatsApp. No existía nada que sirviera para centralizar la información de semilleros y grupos de investigación.",
      en: "It was a mess of emails, loose PDFs and WhatsApp groups. There was nothing to centralize information about seedbeds and research groups.",
    },
    work: {
      es: "Construimos una plataforma con <strong>Astro, Supabase y PostgreSQL</strong>. Catálogo de grupos, gestión de roles, formularios de postulación. Lo que antes se resolvía con hilos de correo infinitos ahora se resuelve con un login y un dashboard.",
      en: "We built a platform with <strong>Astro, Supabase and PostgreSQL</strong>. Group catalog, role management, application forms. What used to be solved with endless email threads now gets solved with a login and a dashboard.",
    },
    why: {
      es: "Astro porque escupe HTML estático y carga en nada. Supabase porque me da auth, base de datos y storage sin montar un backend desde cero. PostgreSQL porque los datos relacionales de una facultad no se manejan con un JSON suelto.",
      en: "Astro because it spits out static HTML and loads instantly. Supabase because it gives me auth, database and storage without building a backend from scratch. PostgreSQL because a faculty's relational data isn't handled with a loose JSON file.",
    },
    result: {
      es: "Plataforma en producción que gestiona <strong>13 grupos de investigación</strong>, con más de 11.000 líneas de código.",
      en: "A production platform managing <strong>13 research groups</strong>, with over 11,000 lines of code.",
    },
    learn: {
      title: learned,
      text: {
        es: "Es mi proyecto más grande hasta ahora. Y el que más me ha enseñado a <strong>trabajar con gente que no es técnica</strong> y tiene requisitos que cambian cada semana.",
        en: "It's my biggest project so far. And the one that's taught me the most about <strong>working with non-technical people</strong> whose requirements change every week.",
      },
    },
    stack: ["Astro", "Supabase", "PostgreSQL", "RLS", "a11y"],
    image: "/projects/fibog.jpg",
    imageSmall: "/projects/fibog-640.jpg",
    links: { repo: "https://github.com/NikkoWebDev/FIBOG" },
    client: { es: "Facultad de Ingeniería · UNAL", en: "Faculty of Engineering · UNAL" },
  },
  {
    slug: "ceis",
    name: "CEIS",
    title: {
      es: "CEIS — Consejo Estudiantil de Ingeniería de Sistemas | UNAL",
      en: "CEIS — Systems Engineering Student Council | UNAL",
    },
    kind: { es: "Plataforma institucional · UNAL", en: "Institutional platform · UNAL" },
    summary: {
      es: "Plataforma institucional del Consejo Estudiantil de Ingeniería de Sistemas y Computación.",
      en: "Official institutional platform for the Systems Engineering Student Council.",
    },
    tagline: {
      es: "Plataforma institucional de representación, comisiones y malla curricular interactiva.",
      en: "Institutional platform for student representation, working commissions and interactive curriculum.",
    },
    highlight: { value: "ceis-unal.com", label: { es: "dominio oficial en producción", en: "official domain in production" } },
    problem: {
      es: "Cientos de estudiantes de Ingeniería de Sistemas carecían de un canal centralizado y transparente para consultar su malla curricular, participar en comisiones de trabajo y comunicarse con sus representantes.",
      en: "Hundreds of Systems Engineering students lacked a centralized, transparent hub to explore their curriculum, join commissions, and communicate with representatives.",
    },
    work: {
      es: "Diseñé y construí una plataforma moderna con <strong>React, Vite, Tailwind CSS y Supabase</strong>. Integra sistema de temas dark/light sin parpadeo, visualizador interactivo de malla curricular y arquitectura modular de comisiones.",
      en: "Designed and built a modern platform with <strong>React, Vite, Tailwind CSS, and Supabase</strong>. Features zero-flash dark/light theming, an interactive curriculum visualizer, and modular commission management.",
    },
    result: {
      es: "<strong>En producción bajo dominio oficial</strong> (<code>ceis-unal.com</code>), sirviendo como la voz organizada y canal digital oficial de la comunidad de Ingeniería de Sistemas de la UNAL.",
      en: "<strong>In production under an official domain</strong> (<code>ceis-unal.com</code>), serving as the organized voice and digital hub for the UNAL Systems Engineering community.",
    },
    learn: {
      title: { es: "Impacto institucional", en: "Institutional impact" },
      text: {
        es: "Desarrollar plataformas para comunidades activas exige priorizar la <strong>accesibilidad, consistencia en diseño y velocidad de carga</strong> desde el primer release.",
        en: "Building platforms for active student communities requires prioritizing <strong>accessibility, design consistency, and instant loading</strong> from the first release.",
      },
    },
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    image: "/projects/ceis.jpg",
    imageSmall: "/projects/ceis-640.jpg",
    domain: "ceis-unal.com",
    links: { demo: "https://ceis-unal.com" },
    client: { es: "CEIS · UNAL", en: "CEIS · UNAL" },
  },
  {
    slug: "autorreparacion",
    name: "Autorreparación",
    title: { es: "Autorreparación", en: "Autorreparación" },
    kind: { es: "Landing para cliente real", en: "Landing for a real client" },
    summary: {
      es: "Landing para una empresa real de reparación vehicular.",
      en: "A landing page for a real vehicle repair business.",
    },
    tagline: {
      es: "Landing para empresa real. SEO, GSAP, contacto directo por WhatsApp.",
      en: "Landing for a real business. SEO, GSAP, direct WhatsApp contact.",
    },
    highlight: { value: "SEO + WhatsApp", label: { es: "presencia en Google y contacto directo", en: "Google presence and direct contact" } },
    problem: {
      es: "Un negocio de reparación vehicular necesitaba <strong>presencia digital real</strong>. No una tarjeta de presentación, sino algo que apareciera en Google y generara contactos.",
      en: "A vehicle repair business needed <strong>real digital presence</strong>. Not a business card, but something that showed up on Google and generated contacts.",
    },
    work: {
      es: "Landing en <strong>Astro con GSAP</strong>. SEO técnico, animaciones fluidas, responsive, CTA directo a WhatsApp. Todo optimizado para que cargue rápido en celular — donde la mayoría de clientes buscan.",
      en: "Landing in <strong>Astro with GSAP</strong>. Technical SEO, smooth animations, responsive, direct CTA to WhatsApp. All optimized to load fast on mobile — where most customers search.",
    },
    result: {
      es: "<strong>Presencia digital funcional</strong> para un negocio que no tenía nada. Carga rápida, SEO básico implementado y contacto directo por WhatsApp.",
      en: "<strong>Functional digital presence</strong> for a business that had nothing. Fast load, basic SEO implemented and direct WhatsApp contact.",
    },
    learn: {
      title: differently,
      text: {
        es: "Implementaría <strong>analytics desde el día 1</strong> para medir conversiones reales, no solo suponer.",
        en: "I'd implement <strong>analytics from day 1</strong> to measure real conversions, not just assume.",
      },
    },
    stack: ["Astro", "GSAP", "SEO", "Responsive"],
    image: "/projects/autorreparacion.jpg",
    imageSmall: "/projects/autorreparacion-640.jpg",
    domain: "autorreparacion.com",
    links: { demo: "https://www.autorreparacion.com" },
    client: { es: "Autorreparación", en: "Autorreparación" },
  },
  {
    slug: "indusec",
    name: "InduSEC",
    title: { es: "InduSEC", en: "InduSEC" },
    kind: { es: "Landing para cliente real", en: "Landing for a real client" },
    summary: {
      es: "Landing para una empresa de puertas automáticas.",
      en: "A landing page for an automatic doors company.",
    },
    tagline: {
      es: "Landing para empresa de puertas automáticas. SEO + diseño responsive.",
      en: "Landing for an automatic doors company. SEO + responsive design.",
    },
    highlight: { value: "100%", label: { es: "diseño y desarrollo individual", en: "designed and built solo, end to end" } },
    problem: {
      es: "Empresa de puertas automáticas sin presencia web profesional. Necesitaban algo que <strong>transmitiera confianza</strong> y apareciera en búsquedas locales.",
      en: "An automatic doors company with no professional web presence. They needed something that <strong>built trust</strong> and showed up in local searches.",
    },
    work: {
      es: "Landing en <strong>Astro</strong> con enfoque en SEO, diseño responsive y presentación comercial limpia. Desarrollo completo individual.",
      en: "Landing in <strong>Astro</strong> focused on SEO, responsive design and clean commercial presentation. Complete individual development.",
    },
    result: {
      es: "<strong>Sitio live y funcional</strong> para un negocio físico que necesitaba digitalizarse. Simple, rápido, efectivo.",
      en: "<strong>Live, functional site</strong> for a physical business that needed to go digital. Simple, fast, effective.",
    },
    learn: {
      title: differently,
      text: {
        es: "Agendaría una <strong>revisión de contenido con el cliente</strong> antes del deploy. A veces el copy técnico no conecta con el público real.",
        en: "I'd schedule a <strong>content review with the client</strong> before deploy. Sometimes technical copy doesn't connect with the actual audience.",
      },
    },
    stack: ["Astro", "SEO", "Responsive"],
    image: "/projects/indusec.jpg",
    imageSmall: "/projects/indusec-640.jpg",
    domain: "puertasindusec.com",
    links: { demo: "https://puertasindusec.com", repo: "https://github.com/NikkoWebDev/induSEC-WEB" },
    client: { es: "InduSEC", en: "InduSEC" },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Clientes e instituciones, sin repetir, en el orden de los proyectos. */
export function clientsFor(lang: "es" | "en"): string[] {
  return Array.from(new Set(projects.map((project) => project.client[lang])));
}
