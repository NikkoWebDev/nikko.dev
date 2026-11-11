/**
 * Textos de la interfaz en español e inglés.
 *
 * Cada clave debe tener los dos idiomas. `translate()` (ver utils.ts) lanza un
 * error si falta una clave o un texto, así que una traducción incompleta rompe
 * el build en lugar de mostrar la clave cruda en producción.
 *
 * Los textos de los proyectos viven en src/data/projects.ts.
 */
export const ui = {
  // ── Meta / SEO ──
  "meta.home.title": { es: "NikkoDev | Desarrollo Web, IA y Automatización", en: "NikkoDev | Web Development, AI and Automation" },
  "meta.home.description": {
    es: "Soy Brayan. Hago cosas web que cargan rápido y no desperdician un solo byte. Landing pages, apps con IA y automatización para empresas.",
    en: "Full-Stack Developer specialized in Applied AI, Edge Computing and modern web platforms. Landing pages, AI apps and automation for businesses that want to sell more.",
  },
  "meta.og.description": {
    es: "Desarrollo web con IA: rápido, hermoso y optimizado. Landing pages, apps web y automatización inteligente para empresas.",
    en: "AI-powered web development: fast, beautiful and optimized. Landing pages, web apps and intelligent automation for businesses.",
  },
  "meta.og.alt": { es: "NikkoDev — Desarrollo web con IA: rápido, hermoso y optimizado", en: "NikkoDev — AI-powered web development: fast, beautiful and optimized" },
  "meta.locale": { es: "es_CO", en: "en_US" },
  "meta.jobTitle": { es: "Full-Stack Developer e Integrador de IA", en: "Full-Stack Developer & AI Integrator" },
  "meta.org.description": {
    es: "Edge-First Full-Stack Development. Desarrollo web con IA: rápido, hermoso y optimizado.",
    en: "Edge-First Full-Stack Development. AI-powered web development: fast, beautiful and optimized.",
  },
  "meta.breadcrumb.home": { es: "Inicio", en: "Home" },
  "meta.breadcrumb.projects": { es: "Proyectos", en: "Projects" },

  // ── Accesibilidad y elementos comunes ──
  "a11y.skip": { es: "Saltar al contenido", en: "Skip to content" },
  "a11y.newTab": { es: "se abre en una pestaña nueva", en: "opens in a new tab" },

  // ── Navegación ──
  "nav.label": { es: "Navegación principal", en: "Main navigation" },
  "nav.home": { es: "NikkoDev, inicio", en: "NikkoDev, home" },
  "nav.proyectos": { es: "Proyectos", en: "Projects" },
  "nav.servicios": { es: "Servicios", en: "Services" },
  "nav.stack": { es: "Stack", en: "Stack" },
  "nav.sobre-mi": { es: "Sobre mí", en: "About" },
  "nav.faq": { es: "Preguntas", en: "FAQ" },
  "nav.contacto": { es: "Contacto", en: "Contact" },
  "nav.hablemos": { es: "Hablemos", en: "Let's talk" },
  "nav.menu.open": { es: "Abrir menú", en: "Open menu" },
  "nav.menu.close": { es: "Cerrar menú", en: "Close menu" },
  "nav.menu.title": { es: "Menú", en: "Menu" },
  "lang.switch": { es: "Ver esta página en inglés", en: "View this page in Spanish" },
  "theme.toDark": { es: "Cambiar a tema oscuro", en: "Switch to dark theme" },
  "theme.toLight": { es: "Cambiar a tema claro", en: "Switch to light theme" },
  "theme.label": { es: "Tema", en: "Theme" },

  // ── Paleta de comandos ──
  "palette.open": { es: "Abrir la paleta de comandos", en: "Open the command palette" },
  "palette.title": { es: "Paleta de comandos", en: "Command palette" },
  "palette.placeholder": { es: "Busca una sección, un proyecto o una acción…", en: "Search a section, a project or an action…" },
  "palette.empty": { es: "Sin resultados. Prueba con «proyectos» o «contacto».", en: "No results. Try “projects” or “contact”." },
  "palette.group.nav": { es: "Ir a", en: "Go to" },
  "palette.group.projects": { es: "Casos de estudio", en: "Case studies" },
  "palette.group.actions": { es: "Acciones", en: "Actions" },
  "palette.action.theme": { es: "Cambiar tema claro / oscuro", en: "Toggle light / dark theme" },
  "palette.action.lang": { es: "Cambiar a inglés · English", en: "Switch to Spanish · Español" },
  "palette.action.email": { es: "Copiar el email", en: "Copy the email" },
  "palette.action.whatsapp": { es: "Escribir por WhatsApp", en: "Message on WhatsApp" },
  "palette.action.github": { es: "Abrir GitHub", en: "Open GitHub" },
  "palette.action.linkedin": { es: "Abrir LinkedIn", en: "Open LinkedIn" },
  "palette.action.top": { es: "Volver al inicio de la página", en: "Back to the top of the page" },
  "palette.hint.move": { es: "moverse", en: "move" },
  "palette.hint.run": { es: "abrir", en: "open" },
  "palette.hint.close": { es: "cerrar", en: "close" },

  // ── Avisos ──
  "toast.copied": { es: "Email copiado al portapapeles", en: "Email copied to clipboard" },
  "toast.copyError": { es: "No se pudo copiar. Escríbeme a nikolasgallo095@gmail.com", en: "Couldn't copy. Write to nikolasgallo095@gmail.com" },

  // ── WhatsApp ──
  "wa.float": { es: "Escribir por WhatsApp", en: "Message on WhatsApp" },
  "wa.message": {
    es: "Hola Nikko, vi tu portafolio y quiero contarte sobre un proyecto.",
    en: "Hi Nikko, I saw your portfolio and I'd like to tell you about a project.",
  },

  // ── Hero ──
  "hero.badge": { es: "freelance · disponible", en: "freelance · available" },
  "hero.prompt": { es: "$ nikko run intro", en: "$ nikko run intro" },
  "hero.title.line1": { es: "Construyo plataformas web con IA aplicada y Edge Computing.", en: "I build web platforms with applied AI and Edge Computing." },
  "hero.title.line2": { es: "En producción, no en demos.", en: "In production, not in demos." },
  "hero.desc": {
    es: "Hago webs que cargan rápido y no desperdician un byte. Landings, apps con IA y automatización. Casos reales: una plataforma educativa que pasó de 3s a 0.2s de carga y un sistema que hoy maneja 13 grupos de investigación de la UNAL.",
    en: "I build sites that load fast and don't waste a byte. Landing pages, AI apps and automation. Real cases: an education platform that went from 3s to 0.2s, and a system running 13 research groups at UNAL.",
  },
  "hero.loc": {
    es: "Full-Stack & Applied AI Engineer · Arquitecturas Edge · Bogotá / Remoto",
    en: "Full-Stack & Applied AI Engineer · Edge Architectures · Remote / Worldwide",
  },
  "hero.cta.whatsapp": { es: "Escríbeme por WhatsApp", en: "Message me on WhatsApp" },
  "hero.cta.projects": { es: "Ver qué hice", en: "See what I built" },
  "hero.hint.before": { es: "o pulsa", en: "or press" },
  "hero.hint.after": { es: "para moverte por el sitio", en: "to move around the site" },
  "hero.panel.label": { es: "Panel de sistemas en producción", en: "Production systems panel" },
  "hero.panel.caption": { es: "Sistemas en producción", en: "Systems in production" },
  "hero.panel.time": { es: "Hora en Bogotá", en: "Time in Bogotá" },
  "hero.panel.build": { es: "Último build", en: "Last build" },

  // ── Franja de confianza ──
  "trust.label": { es: "Construido para", en: "Built for" },

  // ── Proyectos ──
  "projects.eyebrow": { es: "// lo que construí", en: "// what I built" },
  "projects.title": { es: "No son screenshots. Son historias reales.", en: "Not screenshots. Real stories." },
  "projects.sub": {
    es: "Cada proyecto tiene un problema, una decisión técnica y un resultado medible. No todo salió perfecto — y eso también importa.",
    en: "Every project has a problem, a technical decision and a measurable result. Not everything went perfect — and that matters too.",
  },
  "projects.case": { es: "Caso de estudio", en: "Case study" },
  "projects.btn.demo": { es: "Ver demo", en: "View demo" },
  "projects.btn.code": { es: "Código", en: "Code" },
  "projects.status": { es: "En producción", en: "In production" },

  // ── Métricas ──
  "metrics.eyebrow": { es: "/ resultados", en: "/ results" },
  "metrics.title": { es: "Resultados que un cliente entiende.", en: "Results a client understands." },
  "metrics.sub": { es: "Números concretos, cada uno con el proyecto que lo respalda.", en: "Concrete numbers, each backed by the project behind it." },
  "metrics.speed": { es: "tiempo de carga (−93%)", en: "load time (−93%)" },
  "metrics.groups": { es: "grupos de investigación gestionados", en: "research groups managed" },
  "metrics.lines": { es: "líneas de código en producción", en: "lines of code in production" },
  "metrics.channels": { es: "canales con IA: WhatsApp, chat y foro", en: "AI channels: WhatsApp, chat and forum" },
  "metrics.cost": { es: "costo mensual de infraestructura", en: "monthly infrastructure cost" },
  "metrics.projects": { es: "proyectos funcionales", en: "functional projects" },
  "metrics.source": { es: "Fuente", en: "Source" },

  // ── Servicios ──
  "services.eyebrow": { es: "/ servicios y arquitectura", en: "/ services & architecture" },
  "services.title": { es: "Ingeniería de software de alto impacto para productos modernos.", en: "High-impact software engineering for modern products." },
  "services.sub": {
    es: "Arquitecturas resilientes, modelos de lenguaje aplicados y rendimiento extremo. Cada milisegundo ahorrado reduce costes de infraestructura y maximiza conversión.",
    en: "Resilient architectures, applied language models, and extreme performance. Every millisecond saved slashes infra costs and maximizes conversion.",
  },
  "services.label1": { es: "Arquitectura", en: "Architecture" },
  "services.card1.title": { es: "Arquitecturas Edge & Plataformas Full-Stack", en: "Edge Architectures & Full-Stack Platforms" },
  "services.card1.desc": {
    es: "Sistemas web serverless con Next.js, Astro, Cloudflare Workers, Supabase y PostgreSQL con RLS. Despliegues globales a costo casi cero y latencia mínima.",
    en: "Serverless web systems with Next.js, Astro, Cloudflare Workers, Supabase, and PostgreSQL with RLS. Global deployments at near-zero cost and minimal latency.",
  },
  "services.label2": { es: "IA aplicada", en: "Applied AI" },
  "services.card2.title": { es: "Sistemas de IA Aplicada & Motores RAG", en: "Applied AI Systems & RAG Engines" },
  "services.card2.desc": {
    es: "Pipelines RAG con FastAPI y Python, búsqueda semántica vectorial, agentes autónomos, streaming de respuestas y webhooks de base de datos para foros y WhatsApp.",
    en: "RAG pipelines with FastAPI & Python, semantic vector search, autonomous agents, response streaming, and database webhooks for forums and WhatsApp.",
  },
  "services.label3": { es: "Rendimiento", en: "Performance" },
  "services.card3.title": { es: "Optimización Extrema & Rendimiento Cloud", en: "Extreme Optimization & Cloud Performance" },
  "services.card3.desc": {
    es: "Auditoría profunda de Core Web Vitals, reducción drástica de tiempos de carga (ej: 3.0s a 0.2s), reducción de bundles JS y arquitectura sin dependencias pesadas.",
    en: "In-depth Core Web Vitals auditing, drastic load time reduction (e.g. 3.0s to 0.2s), JS bundle minimization, and heavy-dependency-free architecture.",
  },
  "services.label4": { es: "Producto", en: "Product" },
  "services.card4.title": { es: "Presencia Digital & Aplicaciones de Alta Conversión", en: "Digital Presence & High-Conversion Web Apps" },
  "services.card4.desc": {
    es: "Plataformas interactivas, PWA offline, SEO técnico avanzado y diseño visual refinado para startups, comunidades e instituciones que buscan excelencia.",
    en: "Interactive platforms, offline PWAs, advanced technical SEO, and refined visual design for startups, communities, and institutions striving for excellence.",
  },
  "services.cta.text": { es: "¿Tu proyecto encaja en alguno? Cuéntamelo y lo aterrizamos.", en: "Does your project fit one of these? Tell me and we'll scope it." },

  // ── Stack ──
  "stack.eyebrow": { es: "/ stack", en: "/ stack" },
  "stack.title": { es: "Las herramientas con las que construyo.", en: "The tools I build with." },
  "stack.sub": { es: "Agrupadas por capa. Sin barras de porcentaje inventadas.", en: "Grouped by layer. No made-up skill bars." },
  "stack.group.frontend": { es: "Frontend", en: "Frontend" },
  "stack.group.backend": { es: "Backend y datos", en: "Backend & data" },
  "stack.group.ai": { es: "IA aplicada", en: "Applied AI" },
  "stack.group.edge": { es: "Edge y DevOps", en: "Edge & DevOps" },
  "stack.group.languages": { es: "Lenguajes", en: "Languages" },

  // ── Sobre mí ──
  "about.eyebrow": { es: "// quién soy", en: "// who I am" },
  "about.title": { es: "Si nos tomamos un café y me preguntas qué hago:", en: "If we grab coffee and you ask what I do:" },
  "about.quote": { es: "La verdadera sofisticación no se ve. Se siente.", en: "True sophistication isn't seen. It's felt." },
  "about.story": {
    es: "Ingeniero de Sistemas y Computación (UNAL) enfocado en arquitecturas web de alto rendimiento, modelos de lenguaje aplicados y sistemas distribuidos. Mi obsesión es la optimización brutal: procesar más con menos recursos y diseñar software resiliente que escale a costo mínimo. Creo en la belleza de lo esencial: cada línea de código es una decisión consciente, cada milisegundo ahorrado un valor real para quien nos elige.",
    en: "Systems and Computing Engineer (UNAL) focused on high-performance web architectures, applied language models, and distributed systems. My obsession is brutal optimization: processing more with fewer resources and designing resilient software that scales at minimal cost. I believe in the beauty of the essential: every line of code is a conscious decision, every millisecond saved delivers real value.",
  },
  "about.card.title": { es: "Perfil", en: "Profile" },
  "about.card.badge": { es: "UNAL · Ing. de Sistemas", en: "UNAL · Systems Eng." },
  "about.spec.specialty": { es: "Especialidad", en: "Specialty" },
  "about.spec.specialty.value": { es: "Edge runtimes e IA aplicada", en: "Edge runtimes & applied AI" },
  "about.spec.focus": { es: "Enfoque", en: "Focus" },
  "about.spec.focus.value": { es: "RAG, microservicios y Cloudflare Workers", en: "RAG, microservices and Cloudflare Workers" },
  "about.spec.daily": { es: "Stack diario", en: "Daily stack" },
  "about.spec.daily.value": { es: "TypeScript, Python, Astro, Next.js, Supabase", en: "TypeScript, Python, Astro, Next.js, Supabase" },
  "about.spec.location": { es: "Ubicación", en: "Location" },
  "about.spec.location.value": { es: "Bogotá, Colombia · remoto", en: "Bogotá, Colombia · remote" },
  "about.spec.languages": { es: "Idiomas", en: "Languages" },
  "about.spec.languages.value": { es: "Español nativo · Inglés B2", en: "Native Spanish · B2 English" },
  "about.timeline.title": { es: "Trayectoria", en: "Track record" },
  "about.edu.title": { es: "Formación", en: "Education" },

  "exp.status.active": { es: "Activo", en: "Active" },
  "exp.status.ongoing": { es: "En curso", en: "Ongoing" },
  "exp.item1.date": { es: "Abril 2026 – Actualidad", en: "Apr 2026 – Present" },
  "exp.item1.title": { es: "Desarrollador Web e Integrador de IA · SinPresupuesto", en: "Web Developer & AI Integrator · SinPresupuesto" },
  "exp.item1.desc": {
    es: "Construí una plataforma educativa con Next.js, Cloudflare Workers y Supabase. Integré un chatbot con Llama 3.1 y RAG, autenticación con Google y Microsoft, y optimicé la carga de 3s a 0.2s. Todo con costo de infraestructura casi cero.",
    en: "Built an educational platform with Next.js, Cloudflare Workers and Supabase. Integrated a Llama 3.1 chatbot with RAG, Google and Microsoft auth, and optimized load from 3s to 0.2s. All with near-zero infrastructure cost.",
  },
  "exp.item2.date": { es: "2025 – Actualidad", en: "2025 – Present" },
  "exp.item2.title": { es: "Full-Stack Developer · Proyectos freelance e institucionales", en: "Full-Stack Developer · Freelance & Institutional Projects" },
  "exp.item2.desc": {
    es: "Semilleros FIBOG para la UNAL (13 grupos de investigación, roles con permisos, búsqueda con IA), landings para empresas reales (Autorreparación, InduSEC) y apps con IA (PawCare, KalaChat). Proyectos variados, resultados concretos.",
    en: "FIBOG for UNAL (13 research groups, permission roles, AI search), real company landings (Autorreparación, InduSEC) and AI apps (PawCare, KalaChat). Varied projects, concrete results.",
  },

  "edu.unal.org": { es: "Universidad Nacional de Colombia", en: "Universidad Nacional de Colombia" },
  "edu.unal.title": { es: "Ingeniería de Sistemas y Computación", en: "Systems and Computing Engineering" },
  "edu.unal.meta": { es: "En curso", en: "In progress" },
  "edu.google.org": { es: "Google", en: "Google" },
  "edu.google.title": { es: "Inteligencia Artificial y Productividad", en: "Artificial Intelligence & Productivity" },
  "edu.google.meta": { es: "Certificado · 2025", en: "Certificate · 2025" },

  "currently.title": { es: "system.log — tail -f /var/log/nikkodev/currently.log", en: "system.log — tail -f /var/log/nikkodev/currently.log" },
  "currently.tag1": { es: "cliente", en: "client" },
  "currently.log1": { es: "Cliente activo: Universidad Nacional de Colombia.", en: "Active client: Universidad Nacional de Colombia." },
  "currently.tag2": { es: "estudio", en: "study" },
  "currently.log2": {
    es: "Estudiando IA aplicada a robótica y ensamblador. Quiero entender qué pasa a nivel de bytes pa' dejar de optimizar por intuición y empezar a hacerlo con conocimiento de causa.",
    en: "Studying AI applied to robotics and assembly. I want to understand what happens at the byte level so I stop optimizing by intuition and start doing it with real knowledge.",
  },
  "currently.tag3": { es: "lab", en: "lab" },
  "currently.log3": {
    es: "Ajustando modelos de lenguaje pa' chatbots empresariales que no cuesten una mensualidad de Netflix por consulta.",
    en: "Tuning language models for business chatbots that don't cost a Netflix subscription per query.",
  },

  // ── FAQ ──
  "faq.eyebrow": { es: "/ preguntas frecuentes", en: "/ faq" },
  "faq.title": { es: "Para clientes que quieren empezar sin complicarse.", en: "For clients who want to get started without hassle." },
  "faq.sub": { es: "¿Otra duda? Escríbeme y te respondo directo.", en: "Something else? Message me and I'll answer directly." },
  "faq.q1": { es: "¿Qué tipo de clientes buscas?", en: "What kind of clients are you looking for?" },
  "faq.a1": {
    es: "Empresas pequeñas, startups, instituciones educativas y negocios que quieran vender más en internet, crear presencia digital o integrar IA en sus procesos. Si tienes un proyecto y no sabes por dónde empezar, podemos hablarlo.",
    en: "Small businesses, startups, educational institutions and anyone who wants to sell more online, build digital presence or integrate AI. If you have a project and don't know where to start, let's talk.",
  },
  "faq.q2": { es: "¿Trabajas remoto?", en: "Do you work remotely?" },
  "faq.a2": {
    es: "Sí, completamente remoto. Por proyecto, por sprint o medio tiempo. También puedo colaborar con equipos existentes.",
    en: "Yes, fully remote. Per project, per sprint or part-time. I can also join existing teams.",
  },
  "faq.q3": { es: "¿Puedes hacer una landing desde cero?", en: "Can you build a landing page from scratch?" },
  "faq.a3": {
    es: "Sí. Copy, diseño, desarrollo, SEO, despliegue e integración con WhatsApp. Todo incluido. Solo necesito saber qué vendes y a quién.",
    en: "Yes. Copy, design, development, SEO, deployment and WhatsApp integration. All included. I just need to know what you sell and who to.",
  },
  "faq.q4": { es: "¿También haces IA?", en: "Do you also do AI?" },
  "faq.a4": {
    es: "Sí. Chatbots, asistentes, automatizaciones, búsqueda inteligente. No vendo humo, integro APIs de IA que resuelven problemas reales de negocios.",
    en: "Yes. Chatbots, assistants, automations, smart search. No hype, I integrate AI APIs that solve real business problems.",
  },
  "faq.q5": { es: "¿Puedes trabajar con empresas pequeñas?", en: "Can you work with small businesses?" },
  "faq.a5": {
    es: "Sí, de hecho ese es mi foco principal. Ayudo a negocios pequeños a tener presencia digital de alta calidad sin presupuestos de agencia.",
    en: "Yes, that's my main focus actually. I help small businesses get high-quality digital presence without agency budgets.",
  },
  "faq.q6": { es: "¿Puedes enseñar IA?", en: "Can you teach AI?" },
  "faq.a6": {
    es: "Sí. Talleres para colegios e instituciones sobre prompting, fundamentos de IA, agentes y usos prácticos. Nada teórico, todo aplicable desde el día uno.",
    en: "Yes. Workshops for schools on prompting, AI fundamentals, agents and practical uses. Nothing theoretical, all applicable from day one.",
  },

  // ── Contacto ──
  "contact.eyebrow": { es: "// contacto", en: "// contact" },
  "contact.title": { es: "¿Tienes un proyecto o una idea?", en: "Got a project or an idea?" },
  "contact.desc": {
    es: "Cuéntame qué quieres construir y te respondo por WhatsApp o por correo.",
    en: "Tell me what you want to build and I'll get back to you on WhatsApp or by email.",
  },
  "contact.available": { es: "Disponible para freelance y trabajo remoto", en: "Available for freelance and remote work" },
  "contact.whatsapp.desc": { es: "La vía rápida", en: "The fast way" },
  "contact.email.desc": { es: "Para propuestas con detalle", en: "For detailed proposals" },
  "contact.github.desc": { es: "El código habla", en: "The code speaks" },
  "contact.linkedin.desc": { es: "Perfil profesional", en: "Professional profile" },
  "contact.copy": { es: "Copiar", en: "Copy" },
  "contact.copyLabel": { es: "Copiar el email al portapapeles", en: "Copy the email to the clipboard" },

  // ── Pie ──
  "footer.role": { es: "Full-Stack & Applied AI Engineer", en: "Full-Stack & Applied AI Engineer" },
  "footer.made": { es: "Hecho con Astro, sin frameworks de UI, desplegado en Vercel.", en: "Built with Astro, no UI frameworks, deployed on Vercel." },
  "footer.nav": { es: "Secciones", en: "Sections" },
  "footer.elsewhere": { es: "En otros lados", en: "Elsewhere" },
  "footer.top": { es: "Volver arriba", en: "Back to top" },
  "footer.palette": { es: "Navega con", en: "Navigate with" },

  // ── Caso de estudio ──
  "case.kicker": { es: "// caso de estudio", en: "// case study" },
  "case.back": { es: "Volver a proyectos", en: "Back to projects" },
  "case.titleSuffix": { es: "Caso de estudio", en: "Case study" },
  "case.facts.type": { es: "Tipo", en: "Type" },
  "case.facts.status": { es: "Estado", en: "Status" },
  "case.facts.result": { es: "Resultado clave", en: "Key result" },
  "case.stack": { es: "Stack", en: "Stack" },
  "case.toc": { es: "En este caso", en: "In this case" },
  "case.problem.label": { es: "El problema", en: "The problem" },
  "case.problem.title": { es: "Contexto", en: "Context" },
  "case.work.label": { es: "Qué hice", en: "What I did" },
  "case.work.title": { es: "Implementación", en: "Implementation" },
  "case.why.label": { es: "Decisiones", en: "Decisions" },
  "case.why.title": { es: "¿Por qué ese stack?", en: "Why that stack?" },
  "case.result.label": { es: "Resultado", en: "Result" },
  "case.result.title": { es: "Dónde está hoy", en: "Where it stands" },
  "case.learn.label": { es: "Retrospectiva", en: "Retrospective" },
  "case.demo": { es: "Ver demo", en: "View demo" },
  "case.repo": { es: "Ver repositorio", en: "View repository" },
  "case.shot": { es: "Captura de", en: "Screenshot of" },
  "case.cta.title": { es: "¿Quieres algo así para tu proyecto?", en: "Want something like this for your project?" },
  "case.cta.text": {
    es: "Cuéntame tu idea y la aterrizamos juntos: alcance, stack y tiempos.",
    en: "Tell me your idea and we'll shape it together: scope, stack and timeline.",
  },
  "case.cta.whatsapp": { es: "Hablemos por WhatsApp", en: "Let's talk on WhatsApp" },
  "case.more": { es: "Más proyectos", en: "More projects" },
  "case.prev": { es: "Anterior", en: "Previous" },
  "case.next": { es: "Siguiente", en: "Next" },

  // ── 404 ──
  "notfound.title": { es: "Ruta no encontrada", en: "Route not found" },
  "notfound.text": { es: "La página que buscas no existe o cambió de lugar.", en: "The page you're looking for doesn't exist or has moved." },
  "notfound.home": { es: "Ir al inicio", en: "Go to the homepage" },
} as const satisfies Record<string, { es: string; en: string }>;

export type UIKey = keyof typeof ui;
