export type Lang = "es" | "en";

export interface TranslationMap {
  [key: string]: { es: string; en: string };
}

export const t: TranslationMap = {
  // Navbar
  "nav.servicios": { es: "Servicios", en: "Services" },
  "nav.proyectos": { es: "Proyectos", en: "Projects" },
  "nav.sobre-mi": { es: "Sobre mí", en: "About" },
  "nav.experiencia": { es: "Experiencia", en: "Experience" },
  "nav.contacto": { es: "Contacto", en: "Contact" },
  "nav.hablemos": { es: "Hablemos", en: "Let's talk" },

  // Hero
  "hero.badge": { es: "freelance · disponible", en: "freelance · available" },
  "hero.prompt": { es: "$ nikko run intro", en: "$ nikko run intro" },
  "hero.title.line1": { es: "Construyo plataformas web con IA aplicada y", en: "I build web platforms with applied AI and" },
  "hero.title.line2": { es: "Edge Computing. En producción, no en demos.", en: "Edge Computing. In production, not in demos." },
  "hero.desc": { es: "Hago webs que cargan rápido y no desperdician un byte. Landings, apps con IA y automatización. Casos reales: una plataforma educativa que pasó de 3s a 0.2s de carga y un sistema que hoy maneja 13 grupos de investigación de la UNAL.", en: "I build sites that load fast and don't waste a byte. Landing pages, AI apps and automation. Real cases: an education platform that went from 3s to 0.2s, and a system running 13 research groups at UNAL." },
  "hero.loc": { es: "Full-Stack & Applied AI Engineer · Arquitecturas Edge · Bogotá / Remoto", en: "Full-Stack & Applied AI Engineer · Edge Architectures · Remote / Worldwide" },
  "hero.cta.whatsapp": { es: "WhatsApp", en: "WhatsApp" },
  "hero.cta.projects": { es: "Ver qué hice", en: "See what I built" },
  "hero.stat.projects": { es: "Proyectos reales", en: "Real projects" },
  "hero.stat.speed": { es: "Carga optimizada", en: "Optimized load" },
  "hero.stat.edge": { es: "Arquitectura ligera", en: "Lightweight architecture" },

  // Hero code snippet (nikko.config.js)
  "hero.code.title": { es: "nikko.config.js", en: "nikko.config.js" },
  "hero.code.name": { es: "Nikolas Gallo", en: "Nikolas Gallo" },
  "hero.code.alias": { es: "Nikko.Dev", en: "Nikko.Dev" },
  "hero.code.role": { es: "Full-Stack · IA · Edge", en: "Full-Stack · AI · Edge" },
  "hero.code.obsession": { es: "cargar rápido", en: "load fast" },
  "hero.code.comment": { es: "construyo lo que necesitas, nada más", en: "build what you need, nothing more" },

  // Terminal / System panel
  "terminal.stack": { es: "Astro, Next.js, Supabase, Cloudflare", en: "Astro, Next.js, Supabase, Cloudflare" },
  "terminal.focus": { es: "negocios, educación, startups", en: "business, education, startups" },
  "terminal.mode": { es: "premium visual + optimización brutal", en: "premium visuals + brutal optimization" },
  "terminal.status": { es: "disponible", en: "available" },
  "system.title": { es: "SYSTEM STATUS", en: "SYSTEM STATUS" },
  "os.label": { es: "Centro de control de un ingeniero especializado en velocidad, SEO, IA y sistemas modernos.", en: "Control center of an engineer specialized in speed, SEO, AI and modern systems." },

  // Services
  "services.eyebrow": { es: "/ servicios y arquitectura", en: "/ services & architecture" },
  "services.title": { es: "Ingeniería de software de alto impacto para productos modernos.", en: "High-impact software engineering for modern products." },
  "services.sub": { es: "Arquitecturas resilientes, modelos de lenguaje aplicados y rendimiento extremo. Cada milisegundo ahorrado reduce costes de infraestructura y maximiza conversión.", en: "Resilient architectures, applied language models, and extreme performance. Every millisecond saved slashes infra costs and maximizes conversion." },
  "services.card1.title": { es: "Arquitecturas Edge & Plataformas Full-Stack", en: "Edge Architectures & Full-Stack Platforms" },
  "services.card1.desc": { es: "Sistemas web serverless con Next.js, Astro, Cloudflare Workers, Supabase y PostgreSQL con RLS. Despliegues globales a costo casi cero y latencia mínima.", en: "Serverless web systems with Next.js, Astro, Cloudflare Workers, Supabase, and PostgreSQL with RLS. Global deployments at near-zero cost and minimal latency." },
  "services.card2.title": { es: "Sistemas de IA Aplicada & Motores RAG", en: "Applied AI Systems & RAG Engines" },
  "services.card2.desc": { es: "Pipelines RAG con FastAPI y Python, búsqueda semántica vectorial, agentes autónomos, streaming de respuestas y webhooks de base de datos para foros y WhatsApp.", en: "RAG pipelines with FastAPI & Python, semantic vector search, autonomous agents, response streaming, and database webhooks for forums and WhatsApp." },
  "services.card3.title": { es: "Optimización Extrema & Rendimiento Cloud", en: "Extreme Optimization & Cloud Performance" },
  "services.card3.desc": { es: "Auditoría profunda de Core Web Vitals, reducción drástica de tiempos de carga (ej: 3.0s a 0.2s), reducción de bundles JS y arquitectura sin dependencias pesadas.", en: "In-depth Core Web Vitals auditing, drastic load time reduction (e.g. 3.0s to 0.2s), JS bundle minimization, and heavy-dependency-free architecture." },
  "services.card4.title": { es: "Presencia Digital & Aplicaciones de Alta Conversión", en: "Digital Presence & High-Conversion Web Apps" },
  "services.card4.desc": { es: "Plataformas interactivas, PWA offline, SEO técnico avanzado y diseño visual refinado para startups, comunidades e instituciones que buscan excelencia.", en: "Interactive platforms, offline PWAs, advanced technical SEO, and refined visual design for startups, communities, and institutions striving for excellence." },

  // Projects
  "projects.eyebrow": { es: "// lo que construí", en: "// what I built" },
  "projects.title": { es: "No son screenshots. Son historias reales.", en: "Not screenshots. Real stories." },
  "projects.sub": { es: "Cada proyecto tiene un problema, una decisión técnica y un resultado medible. No todo salió perfecto — y eso también importa.", en: "Every project has a problem, a technical decision and a measurable result. Not everything went perfect — and that matters too." },
  "projects.btn.site": { es: "Ver sitio", en: "Visit site" },
  "projects.btn.demo": { es: "Ver demo", en: "View demo" },
  "projects.btn.code": { es: "Código", en: "Code" },

  // Impact section (CEIS)
  "impact.eyebrow": { es: "// impacto real", en: "// real impact" },
  "impact.title": { es: "Del campus a producción.", en: "From campus to production." },
  "impact.sub": { es: "El CEIS —Consejo Estudiantil de Ingeniería de Sistemas de la UNAL— corre sobre lo que construyo: plataforma oficial, malla curricular interactiva y un asistente de IA que responde normativa en tres canales.", en: "The CEIS —UNAL's Systems Engineering Student Council— runs on what I build: an official platform, an interactive curriculum explorer, and an AI assistant answering regulations across three channels." },
  "impact.m1.val": { es: "ceis-unal.com", en: "ceis-unal.com" },
  "impact.m1.lbl": { es: "dominio oficial en producción", en: "official domain in production" },
  "impact.m2.val": { es: "3 canales", en: "3 channels" },
  "impact.m2.lbl": { es: "WhatsApp · chat · foro con IA", en: "WhatsApp · chat · forum with AI" },
  "impact.m3.val": { es: "Qwen 3.5 4B", en: "Qwen 3.5 4B" },
  "impact.m3.lbl": { es: "finetune propio para la UNAL", en: "own fine-tune for UNAL" },
  "impact.m4.val": { es: "100%", en: "100%" },
  "impact.m4.lbl": { es: "respuestas con fuentes citadas", en: "answers with cited sources" },
  "impact.cta.ceis": { es: "Ver CEIS", en: "Visit CEIS" },
  "impact.cta.repre": { es: "Probar Reprebot", en: "Try Reprebot" },

  // Project: FIBOG
  "projects.fibog.title": { es: "Semilleros FIBOG — Universidad Nacional de Colombia", en: "Semilleros FIBOG — Universidad Nacional de Colombia" },
  "projects.fibog.tagline": { es: "La facultad no tenía dónde centralizar sus grupos de investigación y semilleros.", en: "The faculty had no place to centralize its research groups and seedbeds." },
  "projects.fibog.problem": { es: "Todo era un reguero de correos, PDFs sueltos y grupos de WhatsApp. No existía nada que sirviera para centralizar la información de semilleros y grupos de investigación.", en: "It was a mess of emails, loose PDFs and WhatsApp groups. There was nothing to centralize information about seedbeds and research groups." },
  "projects.fibog.do": { es: "Construimos una plataforma con <strong>Astro, Supabase y PostgreSQL</strong>. Catálogo de grupos, gestión de roles, formularios de postulación. Lo que antes se resolvía con hilos de correo infinitos ahora se resuelve con un login y un dashboard.", en: "We built a platform with <strong>Astro, Supabase and PostgreSQL</strong>. Group catalog, role management, application forms. What used to be solved with endless email threads now gets solved with a login and a dashboard." },
  "projects.fibog.stack": { es: "Astro porque escupe HTML estático y carga en nada. Supabase porque me da auth, base de datos y storage sin montar un backend desde cero. PostgreSQL porque los datos relacionales de una facultad no se manejan con un JSON suelto.", en: "Astro because it spits out static HTML and loads instantly. Supabase because it gives me auth, database and storage without building a backend from scratch. PostgreSQL because a faculty's relational data isn't handled with a loose JSON file." },
  "projects.fibog.learn": { es: "Es mi proyecto más grande hasta ahora. Y el que más me ha enseñado a <strong>trabajar con gente que no es técnica</strong> y tiene requisitos que cambian cada semana.", en: "It's my biggest project so far. And the one that's taught me the most about <strong>working with non-technical people</strong> whose requirements change every week." },
  "projects.fibog.terminal": { es: "✓ semilleros.nikko.dev · ✓ 13 grupos gestionados · ✓ 11k+ líneas", en: "✓ semilleros.nikko.dev · ✓ 13 groups managed · ✓ 11k+ lines" },

  // Project: CEIS
  "projects.ceis.title": { es: "CEIS — Consejo Estudiantil de Ingeniería de Sistemas | UNAL", en: "CEIS — Systems Engineering Student Council | UNAL" },
  "projects.ceis.tagline": { es: "Plataforma institucional de representación, comisiones y malla curricular interactiva.", en: "Institutional platform for student representation, working commissions and interactive curriculum." },
  "projects.ceis.problem": { es: "Cientos de estudiantes de Ingeniería de Sistemas carecían de un canal centralizado y transparente para consultar su malla curricular, participar en comisiones de trabajo y comunicarse con sus representantes.", en: "Hundreds of Systems Engineering students lacked a centralized, transparent hub to explore their curriculum, join commissions, and communicate with representatives." },
  "projects.ceis.do": { es: "Diseñé y construí una plataforma moderna con <strong>React, Vite, Tailwind CSS y Supabase</strong>. Integra sistema de temas dark/light sin parpadeo, visualizador interactivo de malla curricular y arquitectura modular de comisiones.", en: "Designed and built a modern platform with <strong>React, Vite, Tailwind CSS, and Supabase</strong>. Features zero-flash dark/light theming, an interactive curriculum visualizer, and modular commission management." },
  "projects.ceis.result": { es: "<strong>En producción bajo dominio oficial</strong> (<code>ceis-unal.com</code>), sirviendo como la voz organizada y canal digital oficial de la comunidad de Ingeniería de Sistemas de la UNAL.", en: "<strong>In production under an official domain</strong> (<code>ceis-unal.com</code>), serving as the organized voice and digital hub for the UNAL Systems Engineering community." },
  "projects.ceis.learn": { es: "Desarrollar plataformas para comunidades activas exige priorizar la <strong>accesibilidad, consistencia en diseño y velocidad de carga</strong> desde el primer release.", en: "Building platforms for active student communities requires prioritizing <strong>accessibility, design consistency, and instant loading</strong> from the first release." },
  "projects.ceis.terminal": { es: "✓ ceis-unal.com · ✓ React + Supabase · ✓ En producción", en: "✓ ceis-unal.com · ✓ React + Supabase · ✓ In production" },

  // Project: Reprebot (flagship)
  "projects.reprebot.title": { es: "Reprebot — IA finetuneada para la UNAL", en: "Reprebot — Fine-tuned AI for UNAL" },
  "projects.reprebot.tagline": { es: "Finetune de Qwen 3.5 (4B) para la UNAL, con API propia. Responde normativa en WhatsApp, el chat del CEIS y el foro.", en: "A Qwen 3.5 (4B) fine-tune for UNAL, with its own API. Answers regulations on WhatsApp, the CEIS chat and the forum." },
  "projects.reprebot.problem": { es: "Decenas de dudas repetitivas sobre estatutos académicos, trámites y acuerdos llegaban a diario por WhatsApp y foros sin capacidad humana de responder en tiempo real.", en: "Dozens of repetitive queries about academic statutes, procedures, and bylaws arrived daily via WhatsApp and forums without the capacity to answer in real time." },
  "projects.reprebot.do": { es: "Fine-tune de <strong>Qwen 3.5 (4B) para la normativa UNAL</strong> con motor <strong>RAG</strong> sobre fuentes oficiales, <strong>API propia</strong> con streaming y despliegue multicanal: <strong>WhatsApp, chat del CEIS y foro</strong>. Cada respuesta cita sus fuentes.", en: "A <strong>Qwen 3.5 (4B) fine-tune on UNAL regulations</strong> with a <strong>RAG</strong> engine over official sources, a <strong>dedicated API</strong> with streaming, and multi-channel deployment: <strong>WhatsApp, CEIS chat and forum</strong>. Every answer cites its sources." },
  "projects.reprebot.result": { es: "<strong>Chat en vivo en <code>repre.nikko.dev</code></strong> y API en producción, respondiendo normativa con fuentes citadas en los tres canales del CEIS.", en: "<strong>Live chat at <code>repre.nikko.dev</code></strong> and a production API, answering regulations with cited sources across all three CEIS channels." },
  "projects.reprebot.learn": { es: "En sistemas RAG en producción, el <strong>chunking semántico y la trazabilidad de fuentes</strong> son más determinantes para la precisión que el tamaño del modelo.", en: "In production RAG systems, <strong>semantic chunking and source provenance</strong> matter far more for precision than raw model parameters." },
  "projects.reprebot.terminal": { es: "✓ repre.nikko.dev · ✓ Qwen 3.5 4B FT · ✓ API + 3 canales", en: "✓ repre.nikko.dev · ✓ Qwen 3.5 4B FT · ✓ API + 3 channels" },

  // Project: SinPresupuesto
  "projects.sinpre.title": { es: "SinPresupuesto", en: "SinPresupuesto" },
  "projects.sinpre.tagline": { es: "Estudiantes sin recursos que necesitan material de calidad y no tienen cómo pagarlo ni dónde encontrarlo.", en: "Students without resources who need quality material and can't pay for it or find it." },
  "projects.sinpre.problem": { es: "Fundación que busca reducir la inaccesibilidad a la educación preuniversitaria. El problema real: estudiantes sin recursos que necesitan material de calidad.", en: "A foundation working to reduce lack of access to pre-university education. The real problem: students without resources who need quality material." },
  "projects.sinpre.do": { es: "Implementamos OAuth con Microsoft y Google, <strong>PWA pa' que funcione offline</strong> y en dispositivos de gama baja. La gracia de una PWA aquí no es el hype, es que un estudiante con un celular de 300 lucas y datos limitados pueda estudiar sin señal constante.", en: "We implemented OAuth with Microsoft and Google, a <strong>PWA so it works offline</strong> and on low-end devices. The point of a PWA here isn't hype — it's that a student with an $80 phone and limited data can study without constant signal." },
  "projects.sinpre.result": { es: "Plataforma funcional con <strong>autenticación multicapa</strong>, chatbot con Llama 3.1, y infraestructura Edge que prácticamente no cuesta.", en: "A functional platform with <strong>multi-layer authentication</strong>, Llama 3.1 chatbot, and Edge infrastructure that practically costs nothing." },
  "projects.sinpre.learn": { es: "Medir desde el día uno. Montamos medio a las carreras y <strong>faltaron métricas de uso reales</strong>.", en: "Measure from day one. We built half of it in a rush and <strong>real usage metrics were missing</strong>." },
  "projects.sinpre.terminal": { es: "✓ 3s → 0.2s optimización · ✓ PWA offline · ✓ IA integrada", en: "✓ 3s → 0.2s optimization · ✓ offline PWA · ✓ AI integrated" },

  // Project: Autorreparación
  "projects.autorep.title": { es: "Autorreparación", en: "Autorreparación" },
  "projects.autorep.tagline": { es: "Landing para empresa real. SEO, GSAP, contacto directo por WhatsApp.", en: "Landing for a real business. SEO, GSAP, direct WhatsApp contact." },
  "projects.autorep.problem": { es: "Un negocio de reparación vehicular necesitaba <strong>presencia digital real</strong>. No una tarjeta de presentación, sino algo que apareciera en Google y generara contactos.", en: "A vehicle repair business needed <strong>real digital presence</strong>. Not a business card, but something that showed up on Google and generated contacts." },
  "projects.autorep.do": { es: "Landing en <strong>Astro con GSAP</strong>. SEO técnico, animaciones fluidas, responsive, CTA directo a WhatsApp. Todo optimizado para que cargue rápido en celular — donde la mayoría de clientes buscan.", en: "Landing in <strong>Astro with GSAP</strong>. Technical SEO, smooth animations, responsive, direct CTA to WhatsApp. All optimized to load fast on mobile — where most customers search." },
  "projects.autorep.result": { es: "<strong>Presencia digital funcional</strong> para un negocio que no tenía nada. Carga rápida, SEO básico implementado y contacto directo por WhatsApp.", en: "<strong>Functional digital presence</strong> for a business that had nothing. Fast load, basic SEO implemented and direct WhatsApp contact." },
  "projects.autorep.learn": { es: "Implementaría <strong>analytics desde el día 1</strong> para medir conversiones reales, no solo suponer.", en: "I'd implement <strong>analytics from day 1</strong> to measure real conversions, not just assume." },
  "projects.autorep.terminal": { es: "✓ Cliente real · ✓ SEO implementado · ✓ CTA WhatsApp", en: "✓ Real client · ✓ SEO implemented · ✓ WhatsApp CTA" },

  // Project: InduSEC
  "projects.indusec.title": { es: "InduSEC", en: "InduSEC" },
  "projects.indusec.tagline": { es: "Landing para empresa de puertas automáticas. SEO + diseño responsive.", en: "Landing for an automatic doors company. SEO + responsive design." },
  "projects.indusec.problem": { es: "Empresa de puertas automáticas sin presencia web profesional. Necesitaban algo que <strong>transmitiera confianza</strong> y apareciera en búsquedas locales.", en: "An automatic doors company with no professional web presence. They needed something that <strong>built trust</strong> and showed up in local searches." },
  "projects.indusec.do": { es: "Landing en <strong>Astro</strong> con enfoque en SEO, diseño responsive y presentación comercial limpia. Desarrollo completo individual.", en: "Landing in <strong>Astro</strong> focused on SEO, responsive design and clean commercial presentation. Complete individual development." },
  "projects.indusec.result": { es: "<strong>Sitio live y funcional</strong> para un negocio físico que necesitaba digitalizarse. Simple, rápido, efectivo.", en: "<strong>Live, functional site</strong> for a physical business that needed to go digital. Simple, fast, effective." },
  "projects.indusec.learn": { es: "Agendaría una <strong>revisión de contenido con el cliente</strong> antes del deploy. A veces el copy técnico no conecta con el público real.", en: "I'd schedule a <strong>content review with the client</strong> before deploy. Sometimes technical copy doesn't connect with the actual audience." },
  "projects.indusec.terminal": { es: "✓ Landing live · ✓ Presencia local · ✓ 100% individual", en: "✓ Landing live · ✓ Local presence · ✓ 100% individual" },

  // About
  "about.eyebrow": { es: "// quién soy", en: "// who I am" },
  "about.title": { es: "Si nos tomamos un café y me preguntas qué hago:", en: "If we grab coffee and you ask what I do:" },
  "about.quote": { es: "La verdadera sofisticación no se ve. Se siente.", en: "True sophistication isn't seen. It's felt." },
  "about.story": { es: "Ingeniero de Sistemas y Computación (UNAL) enfocado en arquitecturas web de alto rendimiento, modelos de lenguaje aplicados y sistemas distribuidos. Mi obsesión es la optimización brutal: procesar más con menos recursos y diseñar software resiliente que escale a costo mínimo. Creo en la belleza de lo esencial: cada línea de código es una decisión consciente, cada milisegundo ahorrado un valor real para quien nos elige.", en: "Systems and Computing Engineer (UNAL) focused on high-performance web architectures, applied language models, and distributed systems. My obsession is brutal optimization: processing more with fewer resources and designing resilient software that scales at minimal cost. I believe in the beauty of the essential: every line of code is a conscious decision, every millisecond saved delivers real value." },
  "about.badge.unal": { es: "Universidad Nacional de Colombia · Ingeniería de Sistemas", en: "Universidad Nacional de Colombia · Systems Engineering" },
  "about.highlight1": { es: "Optimización extrema · más con menos", en: "Extreme optimization · more with less" },
  "about.highlight2": { es: "IA aplicada sin quemar presupuesto", en: "Applied AI without burning budget" },
  "about.highlight3": { es: "Proyectos reales, no solo práctica", en: "Real projects, not just practice" },
  "about.highlight4": { es: "Logro técnico: Optimización 3s→0.2s (93% más rápido)", en: "Technical achievement: 3s→0.2s optimization (93% faster)" },

  // About terminal (VS Code snippet)
  "about.terminal.title": { es: "VS Code: ~/nikko/about.ts", en: "VS Code: ~/nikko/about.ts" },
  "about.terminal.sidebar.title": { es: "Explorer", en: "Explorer" },
  "about.terminal.sidebar.active": { es: "about.ts", en: "about.ts" },
  "about.terminal.sidebar.folder": { es: "projects", en: "projects" },
  "about.terminal.sidebar.skills": { es: "skills.json", en: "skills.json" },
  "about.terminal.sidebar.contact": { es: "contact.sh", en: "contact.sh" },
  "about.terminal.prop.name": { es: "nombre", en: "name" },
  "about.terminal.prop.alias": { es: "alias", en: "alias" },
  "about.terminal.prop.university": { es: "universidad", en: "university" },
  "about.terminal.prop.year": { es: "especialidad", en: "specialty" },
  "about.terminal.prop.language": { es: "idioma", en: "language" },
  "about.terminal.prop.values": { es: "valores", en: "values" },
  "about.terminal.val.name": { es: "Brayan Nikolas Gallo León", en: "Brayan Nikolas Gallo León" },
  "about.terminal.val.alias": { es: "NikkoDev", en: "NikkoDev" },
  "about.terminal.val.university": { es: "Universidad Nacional de Colombia", en: "Universidad Nacional de Colombia" },
  "about.terminal.val.year": { es: "Edge Runtimes & Applied AI", en: "Edge Runtimes & Applied AI" },
  "about.terminal.val.language": { es: "ES nativo · EN B2", en: "ES native · EN B2" },
  "about.terminal.val.values": { es: '["optimización", "honestidad", "aprendizaje", "resiliencia"]', en: '["optimization", "honesty", "learning", "resilience"]' },
  "about.terminal.comment1": { es: "// lo que me importa", en: "// what matters to me" },
  "about.terminal.comment2": { es: "// cosas reales que hice", en: "// real things I did" },
  "about.terminal.echo": { es: "Técnica por dentro. Hermosa por fuera.", en: "Technical inside. Beautiful outside." },

  // Currently doing / system log
  "currently.title": { es: "system.log — tail -f /var/log/nikkodev/currently.log", en: "system.log — tail -f /var/log/nikkodev/currently.log" },
  "currently.log1": { es: "Cliente activo: Universidad Nacional de Colombia.", en: "Active client: Universidad Nacional de Colombia." },
  "currently.log2": { es: "Estudiando IA aplicada a robótica y ensamblador. Quiero entender qué pasa a nivel de bytes pa' dejar de optimizar por intuición y empezar a hacerlo con conocimiento de causa.", en: "Studying AI applied to robotics and assembly. I want to understand what happens at the byte level so I stop optimizing by intuition and start doing it with real knowledge." },
  "currently.log3": { es: "Ajustando modelos de lenguaje pa' chatbots empresariales que no cuesten una mensualidad de Netflix por consulta.", en: "Tuning language models for business chatbots that don't cost a Netflix subscription per query." },

  // Experience
  "exp.eyebrow": { es: "/ experiencia", en: "/ experience" },
  "exp.title": { es: "Construyendo productos reales desde el día uno.", en: "Building real products from day one." },
  "exp.item1.date": { es: "Abril 2026 – Actualidad", en: "Apr 2026 – Present" },
  "exp.item1.title": { es: "Desarrollador Web e Integrador de IA · SinPresupuesto", en: "Web Developer & AI Integrator · SinPresupuesto" },
  "exp.item1.desc": { es: "Construí una plataforma educativa con Next.js, Cloudflare Workers y Supabase. Integré un chatbot con Llama 3.1 y RAG, autenticación con Google y Microsoft, y optimicé la carga de 3s a 0.2s. Todo con costo de infraestructura casi cero.", en: "Built an educational platform with Next.js, Cloudflare Workers and Supabase. Integrated a Llama 3.1 chatbot with RAG, Google and Microsoft auth, and optimized load from 3s to 0.2s. All with near-zero infrastructure cost." },
  "exp.item2.date": { es: "2025 – Actualidad", en: "2025 – Present" },
  "exp.item2.title": { es: "Full-Stack Developer · Proyectos freelance e institucionales", en: "Full-Stack Developer · Freelance & Institutional Projects" },
  "exp.item2.desc": { es: "Semilleros FIBOG para la UNAL (13 grupos de investigación, roles con permisos, búsqueda con IA), landings para empresas reales (Autorreparación, InduSEC) y apps con IA (PawCare, KalaChat). Proyectos variados, resultados concretos.", en: "FIBOG for UNAL (13 research groups, permission roles, AI search), real company landings (Autorreparación, InduSEC) and AI apps (PawCare, KalaChat). Varied projects, concrete results." },
  "exp.item3.date": { es: "Logro clave", en: "Key achievement" },
  "exp.item3.title": { es: "Optimización 3s→0.2s · Edge Computing", en: "3s→0.2s Optimization · Edge Computing" },
  "exp.item3.desc": { es: "Reduje el tiempo de carga un 93% con arquitectura Edge y Workers independientes. La infraestructura cuesta prácticamente cero. Así es como deberían funcionar las aplicaciones modernas.", en: "Reduced load time by 93% with Edge architecture and independent Workers. Infrastructure costs practically zero. This is how modern apps should work." },

  // Metrics
  "metrics.eyebrow": { es: "/ resultados", en: "/ results" },
  "metrics.title": { es: "Resultados que un cliente entiende.", en: "Results a client understands." },
  "metrics.projects": { es: "proyectos funcionales", en: "functional projects" },
  "metrics.groups": { es: "grupos FIBOG gestionados", en: "FIBOG groups managed" },
  "metrics.optimization": { es: "optimización de carga", en: "load optimization" },
  "metrics.lines": { es: "líneas de código en FIBOG", en: "lines of code in FIBOG" },
  "metrics.platforms": { es: "plataformas en producción", en: "platforms in production" },
  "metrics.cost": { es: "costo operativo mensual", en: "monthly operating cost" },
  "metrics.exp": { es: "de experiencia acumulada", en: "of accumulated experience" },
  "metrics.english": { es: "inglés escrito/leído", en: "written/read English" },

  // Etiquetas de las métricas (antes hardcodeadas en español dentro de Metrics.astro)
  "metrics.label.projects": { es: "PROYECTOS", en: "PROJECTS" },
  "metrics.label.groups": { es: "GRUPOS", en: "GROUPS" },
  "metrics.label.optimization": { es: "OPTIMIZACIÓN", en: "OPTIMIZATION" },
  "metrics.label.code": { es: "CÓDIGO", en: "CODE" },
  "metrics.label.production": { es: "PRODUCCIÓN", en: "PRODUCTION" },
  "metrics.label.cost": { es: "COSTO", en: "COST" },
  "metrics.label.experience": { es: "EXPERIENCIA", en: "EXPERIENCE" },
  "metrics.label.english": { es: "INGLÉS", en: "ENGLISH" },
  "metrics.gauge": { es: "93% más rápido", en: "93% faster" },

  // Estados de la línea de tiempo (antes hardcodeados en español dentro de Experience.astro)
  "exp.status.active": { es: "● Activo", en: "● Active" },
  "exp.status.ongoing": { es: "● En curso", en: "● Ongoing" },
  "exp.status.featured": { es: "★ Destacado", en: "★ Featured" },

  // Certifications / Technical Specialties
  "certs.eyebrow": { es: "/ credenciales y especialidades", en: "/ credentials & specialties" },
  "certs.title": { es: "Formación académica rigurosa y especialidades en producción.", en: "Rigorous academic foundation and production specialties." },
  "certs.sub": { es: "Formación universitaria en la Universidad Nacional de Colombia y especialización práctica en arquitecturas serverless, bases de datos relacionales avanzadas e IA aplicada.", en: "University education at Universidad Nacional de Colombia and hands-on specialization in serverless architectures, advanced relational databases, and applied AI." },
  "certs.card1.small": { es: "UNAL · Oficial", en: "UNAL · Official" },
  "certs.card1.title": { es: "Ingeniería de Sistemas y Computación", en: "Systems and Computing Engineering" },
  "certs.card2.small": { es: "Producción · Edge", en: "Production · Edge" },
  "certs.card2.title": { es: "Arquitectura Serverless & Cloudflare Workers AI", en: "Serverless Architecture & Cloudflare Workers AI" },
  "certs.card3.small": { es: "Producción · Database", en: "Production · Database" },
  "certs.card3.title": { es: "PostgreSQL Avanzado, Supabase & Row Level Security (RLS)", en: "Advanced PostgreSQL, Supabase & Row Level Security (RLS)" },
  "certs.card4.small": { es: "Producción · IA", en: "Production · AI" },
  "certs.card4.title": { es: "Arquitecturas RAG, Vector Search & FastAPI Microservices", en: "RAG Architectures, Vector Search & FastAPI Microservices" },
  "certs.card5.small": { es: "Google · 2025", en: "Google · 2025" },
  "certs.card5.title": { es: "Inteligencia Artificial y Productividad", en: "Artificial Intelligence & Productivity" },
  "certs.card6.small": { es: "Ingeniería Web", en: "Web Engineering" },
  "certs.card6.title": { es: "Astro SSG, Next.js, TypeScript & Core Web Vitals", en: "Astro SSG, Next.js, TypeScript & Core Web Vitals" },
  "certs.card7.small": { es: "Lenguajes", en: "Languages" },
  "certs.card7.title": { es: "TypeScript, Python, SQL, C++, Rust", en: "TypeScript, Python, SQL, C++, Rust" },
  "certs.card8.small": { es: "Ecosistema", en: "Ecosystem" },
  "certs.card8.title": { es: "Linux Arch/Debian, Git, CI/CD & Docker", en: "Linux Arch/Debian, Git, CI/CD & Docker" },

  // FAQ
  "faq.eyebrow": { es: "/ preguntas frecuentes", en: "/ faq" },
  "faq.title": { es: "Para clientes que quieren empezar sin complicarse.", en: "For clients who want to get started without hassle." },
  "faq.q1": { es: "¿Qué tipo de clientes buscas?", en: "What kind of clients are you looking for?" },
  "faq.a1": { es: "Empresas pequeñas, startups, instituciones educativas y negocios que quieran vender más en internet, crear presencia digital o integrar IA en sus procesos. Si tienes un proyecto y no sabes por dónde empezar, podemos hablarlo.", en: "Small businesses, startups, educational institutions and anyone who wants to sell more online, build digital presence or integrate AI. If you have a project and don't know where to start, let's talk." },
  "faq.q2": { es: "¿Trabajas remoto?", en: "Do you work remotely?" },
  "faq.a2": { es: "Sí, completamente remoto. Por proyecto, por sprint o medio tiempo. También puedo colaborar con equipos existentes.", en: "Yes, fully remote. Per project, per sprint or part-time. I can also join existing teams." },
  "faq.q3": { es: "¿Puedes hacer una landing desde cero?", en: "Can you build a landing page from scratch?" },
  "faq.a3": { es: "Sí. Copy, diseño, desarrollo, SEO, despliegue e integración con WhatsApp. Todo incluido. Solo necesito saber qué vendes y a quién.", en: "Yes. Copy, design, development, SEO, deployment and WhatsApp integration. All included. I just need to know what you sell and who to." },
  "faq.q4": { es: "¿También haces IA?", en: "Do you also do AI?" },
  "faq.a4": { es: "Sí. Chatbots, asistentes, automatizaciones, búsqueda inteligente. No vendo humo, integro APIs de IA que resuelven problemas reales de negocios.", en: "Yes. Chatbots, assistants, automations, smart search. No hype, I integrate AI APIs that solve real business problems." },
  "faq.q5": { es: "¿Puedes trabajar con empresas pequeñas?", en: "Can you work with small businesses?" },
  "faq.a5": { es: "Sí, de hecho ese es mi foco principal. Ayudo a negocios pequeños a tener presencia digital de alta calidad sin presupuestos de agencia.", en: "Yes, that's my main focus actually. I help small businesses get high-quality digital presence without agency budgets." },
  "faq.q6": { es: "¿Puedes enseñar IA?", en: "Can you teach AI?" },
  "faq.a6": { es: "Sí. Talleres para colegios e instituciones sobre prompting, fundamentos de IA, agentes y usos prácticos. Nada teórico, todo aplicable desde el día uno.", en: "Yes. Workshops for schools on prompting, AI fundamentals, agents and practical uses. Nothing theoretical, all applicable from day one." },

  // Contact
  "contact.eyebrow": { es: "// contacto", en: "// contact" },
  "contact.title": { es: "¿Tienes un proyecto o una idea?", en: "Got a project or an idea?" },
  "contact.desc": { es: "¿Listo para crear algo extraordinario? Un mensaje. Una conversación. Un proyecto que hable por ti. La elegancia está en la simplicidad del primer paso.", en: "Ready to create something extraordinary? One message. One conversation. One project that speaks for you. Elegance lies in the simplicity of the first step." },
  "contact.cv": { es: "Descargar CV", en: "Download CV" },
  "contact.shell.header": { es: "nikko@dev:~$ contact --list", en: "nikko@dev:~$ contact --list" },
  "contact.cmd.whatsapp": { es: "whatsapp", en: "whatsapp" },
  "contact.cmd.email": { es: "email", en: "email" },
  "contact.cmd.github": { es: "github", en: "github" },
  "contact.cmd.linkedin": { es: "linkedin", en: "linkedin" },
  "contact.label.whatsapp": { es: "La vía rápida", en: "The fast way" },
  "contact.label.email": { es: "nikolasgallo095@gmail.com", en: "nikolasgallo095@gmail.com" },
  "contact.label.github": { es: "El código habla", en: "The code speaks" },

  // Footer
  "footer.tagline": { es: "Optimizado hasta el último byte.", en: "Optimized to the last byte." },
};

export function getTranslation(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? key;
}
