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
  "hero.badge": { es: "freelance remoto · disponible", en: "remote freelance · available" },
  "hero.prompt": { es: "$ nikko run intro", en: "$ nikko run intro" },
  "hero.title.line1": { es: "Soy Brayan. Hago cosas web que", en: "I'm Brayan. I build web things that" },
  "hero.title.line2": { es: "cargan rápido y no desperdician un solo byte.", en: "load fast and don't waste a single byte." },
  "hero.desc": { es: "Si necesitas transporte, agarras moto. No un carro con techo, vidrios eléctricos y aire acondicionado pa' ir a la tienda de la esquina. Con el software es igual: construyo lo que necesitas, nada más. Sin librerías de 400 kb que nadie usa, sin frameworks inflados porque están de moda.", en: "If you need to get somewhere, you grab a motorcycle. Not a car with a roof, electric windows and air conditioning just to go to the corner store. Software works the same: I build what you need, nothing more. No 400 KB libraries nobody uses, no bloated frameworks just because they're trending." },
  "hero.loc": { es: "Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible", en: "Systems Engineering student at UNAL · Remote work · Available" },
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
  "services.eyebrow": { es: "/ servicios", en: "/ services" },
  "services.title": { es: "Soluciones digitales para negocios que necesitan resultados.", en: "Digital solutions for businesses that need results." },
  "services.sub": { es: "No solo páginas bonitas. Presencia digital que vende, automatización que ahorra tiempo e IA que resuelve problemas reales.", en: "Not just pretty pages. Digital presence that sells, automation that saves time and AI that solves real problems." },
  "services.card1.title": { es: "Landing pages premium", en: "Premium Landing Pages" },
  "services.card1.desc": { es: "Sitios rápidos y visuales diseñados para convertir visitantes en clientes por WhatsApp, formularios o email. SEO, responsive, animaciones suaves y deploy incluido.", en: "Fast, visual sites designed to turn visitors into customers via WhatsApp, forms or email. SEO, responsive, smooth animations and deployment included." },
  "services.card2.title": { es: "Apps web con IA", en: "Web Apps with AI" },
  "services.card2.desc": { es: "Plataformas con login, chatbots inteligentes, APIs de IA y paneles de administración. Ideales para startups que quieren lanzar rapido sin gastar de mas.", en: "Platforms with login, smart chatbots, AI APIs and admin dashboards. Ideal for startups that want to launch fast without overspending." },
  "services.card3.title": { es: "Optimización y automatización", en: "Optimization & Automation" },
  "services.card3.desc": { es: "Paginas lentas? Procesos repetitivos? Mejoro velocidad de carga, conecto herramientas, creo bots y automatizo tareas para que tu negocio ahorre tiempo y dinero.", en: "Slow pages? Repetitive processes? I improve load speed, connect tools, build bots and automate tasks so your business saves time and money." },
  "services.card4.title": { es: "Educación en IA", en: "AI Education" },
  "services.card4.desc": { es: "Talleres para colegios e instituciones sobre inteligencia artificial, prompting, agentes y usos practicos. Sin hype, solo herramientas que funcionan.", en: "Workshops for schools and institutions on artificial intelligence, prompting, agents and practical uses. No hype, just tools that work." },

  // Projects
  "projects.eyebrow": { es: "// lo que construí", en: "// what I built" },
  "projects.title": { es: "No son screenshots. Son historias reales.", en: "Not screenshots. Real stories." },
  "projects.sub": { es: "Cada proyecto tiene un problema, una decisión técnica y un resultado medible. No todo salió perfecto — y eso también importa.", en: "Every project has a problem, a technical decision and a measurable result. Not everything went perfect — and that matters too." },
  "projects.btn.site": { es: "Ver sitio", en: "Visit site" },
  "projects.btn.demo": { es: "Ver demo", en: "View demo" },
  "projects.btn.code": { es: "Código", en: "Code" },

  // Project: FIBOG
  "projects.fibog.title": { es: "Semilleros FIBOG — Universidad Nacional de Colombia", en: "Semilleros FIBOG — Universidad Nacional de Colombia" },
  "projects.fibog.tagline": { es: "La facultad no tenía dónde centralizar sus grupos de investigación y semilleros.", en: "The faculty had no place to centralize its research groups and seedbeds." },
  "projects.fibog.problem": { es: "Todo era un reguero de correos, PDFs sueltos y grupos de WhatsApp. No existía nada que sirviera para centralizar la información de semilleros y grupos de investigación.", en: "It was a mess of emails, loose PDFs and WhatsApp groups. There was nothing to centralize information about seedbeds and research groups." },
  "projects.fibog.do": { es: "Construimos una plataforma con <strong>Astro, Supabase y PostgreSQL</strong>. Catálogo de grupos, gestión de roles, formularios de postulación. Lo que antes se resolvía con hilos de correo infinitos ahora se resuelve con un login y un dashboard.", en: "We built a platform with <strong>Astro, Supabase and PostgreSQL</strong>. Group catalog, role management, application forms. What used to be solved with endless email threads now gets solved with a login and a dashboard." },
  "projects.fibog.stack": { es: "Astro porque escupe HTML estático y carga en nada. Supabase porque me da auth, base de datos y storage sin montar un backend desde cero. PostgreSQL porque los datos relacionales de una facultad no se manejan con un JSON suelto.", en: "Astro because it spits out static HTML and loads instantly. Supabase because it gives me auth, database and storage without building a backend from scratch. PostgreSQL because a faculty's relational data isn't handled with a loose JSON file." },
  "projects.fibog.learn": { es: "Es mi proyecto más grande hasta ahora. Y el que más me ha enseñado a <strong>trabajar con gente que no es técnica</strong> y tiene requisitos que cambian cada semana.", en: "It's my biggest project so far. And the one that's taught me the most about <strong>working with non-technical people</strong> whose requirements change every week." },
  "projects.fibog.terminal": { es: "✓ 13 grupos gestionados · ✓ 11k+ líneas · ✓ en producción", en: "✓ 13 groups managed · ✓ 11k+ lines · ✓ in production" },

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
  "projects.autorep.tagline": { es: "Landing para empresa real. SEO, GSAP, conversiones por WhatsApp.", en: "Landing for a real business. SEO, GSAP, WhatsApp conversions." },
  "projects.autorep.problem": { es: "Un negocio de reparación vehicular necesitaba <strong>presencia digital real</strong>. No una tarjeta de presentación, sino algo que apareciera en Google y generara contactos.", en: "A vehicle repair business needed <strong>real digital presence</strong>. Not a business card, but something that showed up on Google and generated contacts." },
  "projects.autorep.do": { es: "Landing en <strong>Astro con GSAP</strong>. SEO técnico, animaciones fluidas, responsive, CTA directo a WhatsApp. Todo optimizado para que cargue rápido en celular — donde la mayoría de clientes buscan.", en: "Landing in <strong>Astro with GSAP</strong>. Technical SEO, smooth animations, responsive, direct CTA to WhatsApp. All optimized to load fast on mobile — where most customers search." },
  "projects.autorep.result": { es: "<strong>Presencia digital funcional</strong> para un negocio que no tenía nada. Carga rápida, SEO básico implementado, conversiones por WhatsApp.", en: "<strong>Functional digital presence</strong> for a business that had nothing. Fast load, basic SEO implemented, WhatsApp conversions." },
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
  "about.quote": { es: "No construyo cosas bonitas por hobby. Construyo cosas que funcionan porque alguien las necesita.", en: "I don't build pretty things as a hobby. I build things that work because someone needs them." },
  "about.story": { es: "Soy un obsesionado con la velocidad: si tengo 2 GB de RAM, exprimo cada byte. No por deporte, sino porque crecí sabiendo que los recursos no alcanzan y toca hacer más con menos. No me pongo la etiqueta 'full stack' porque queda bonita en LinkedIn: soy backend con frontend sólido e IA aplicada. Si el proyecto necesita animaciones fluidas, uso GSAP y Astro pa' que pese poco y posicione bien; si necesita un chatbot empresarial, meto modelos locales o DeepSeek V3 Flash pa' no quemar presupuesto en tokens. Estoy en segundo año de ingeniería, no tengo 10 años de experiencia, pero sí proyectos reales que usa gente real y la costumbre de no quedarme en lo básico.", en: "I'm obsessed with speed: if I have 2 GB of RAM, I squeeze every byte. Not for sport, but because I grew up knowing resources don't stretch far and you have to do more with less. I don't call myself 'full stack' because it looks good on LinkedIn: I'm backend with solid frontend and applied AI. If a project needs smooth animations, I use GSAP and Astro so it stays light and ranks well; if it needs a business chatbot, I use local models or DeepSeek V3 Flash so I don't burn the budget on tokens. I'm in my second year of engineering, I don't have 10 years of experience, but I do have real projects used by real people and a habit of not staying at the basics." },
  "about.badge.unal": { es: "UNAL · Ingeniería de Sistemas · 2do año", en: "UNAL · Systems Engineering · 2nd year" },
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
  "about.terminal.prop.year": { es: "año", en: "year" },
  "about.terminal.prop.language": { es: "idioma", en: "language" },
  "about.terminal.prop.values": { es: "valores", en: "values" },
  "about.terminal.val.name": { es: "Brayan Nikolas Gallo León", en: "Brayan Nikolas Gallo León" },
  "about.terminal.val.alias": { es: "NikkoDev", en: "NikkoDev" },
  "about.terminal.val.university": { es: "UNAL · Ing. de Sistemas", en: "UNAL · Systems Engineering" },
  "about.terminal.val.year": { es: "2do", en: "2nd" },
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
  "exp.item3.desc": { es: "Reduje el tiempo de carga un 93% con arquitectura Edge y Workers independientes. La infraestructura cuesta prácticamente cero. Asi es como deberian funcionar las aplicaciones modernas.", en: "Reduced load time by 93% with Edge architecture and independent Workers. Infrastructure costs practically zero. This is how modern apps should work." },

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

  // Certifications
  "certs.eyebrow": { es: "/ educación y certificaciones", en: "/ education & certifications" },
  "certs.title": { es: "Base académica, práctica real y aprendizaje constante.", en: "Academic foundation, real practice and constant learning." },
  "certs.sub": { es: "Estudios en la Universidad Nacional de Colombia, cursos certificados y aprendizaje autodidacta en IA, Linux, Astro y desarrollo moderno.", en: "Studies at the National University of Colombia, certified courses and self-taught learning in AI, Linux, Astro and modern development." },
  "certs.card1.small": { es: "UNAL", en: "UNAL" },
  "certs.card1.title": { es: "Ingeniería de Sistemas y Computación", en: "Systems and Computer Engineering" },
  "certs.card2.small": { es: "Google · 2025", en: "Google · 2025" },
  "certs.card2.title": { es: "Inteligencia Artificial y productividad", en: "Artificial Intelligence & Productivity" },
  "certs.card3.small": { es: "UNAL · 64h", en: "UNAL · 64h" },
  "certs.card3.title": { es: "Programación de Computadores", en: "Computer Programming" },
  "certs.card4.small": { es: "UNAL · 32h", en: "UNAL · 32h" },
  "certs.card4.title": { es: "Comunicación Asertiva G2", en: "Assertive Communication G2" },
  "certs.card5.small": { es: "UNAL · 20h", en: "UNAL · 20h" },
  "certs.card5.title": { es: "Excel Intermedio · Análisis de datos", en: "Intermediate Excel · Data Analysis" },
  "certs.card6.small": { es: "Autodidacta", en: "Self-taught" },
  "certs.card6.title": { es: "Linux, Astro, IA, agentes y APIs", en: "Linux, Astro, AI, agents & APIs" },
  "certs.card7.small": { es: "Lenguajes", en: "Languages" },
  "certs.card7.title": { es: "Java, C++, Python, JavaScript, Kotlin, Rust", en: "Java, C++, Python, JavaScript, Kotlin, Rust" },
  "certs.card8.small": { es: "Marca", en: "Brand" },
  "certs.card8.title": { es: "NikkoDev · Web, IA y automatización", en: "NikkoDev · Web, AI & Automation" },

  // FAQ
  "faq.eyebrow": { es: "/ preguntas frecuentes", en: "/ faq" },
  "faq.title": { es: "Para clientes que quieren empezar sin complicarse.", en: "For clients who want to get started without hassle." },
  "faq.q1": { es: "¿Qué tipo de clientes buscas?", en: "What kind of clients are you looking for?" },
  "faq.a1": { es: "Empresas pequeñas, startups, instituciones educativas y negocios que quieran vender más en internet, crear presencia digital o integrar IA en sus procesos. Si tienes un proyecto y no sabes por dónde empezar, podemos hablarlo.", en: "Small businesses, startups, educational institutions and anyone who wants to sell more online, build digital presence or integrate AI. If you have a project and don't know where to start, let's talk." },
  "faq.q2": { es: "¿Trabajas remoto?", en: "Do you work remotely?" },
  "faq.a2": { es: "Sí, completamente remoto. Por proyecto, por sprint o medio tiempo. Tambien puedo colaborar con equipos existentes.", en: "Yes, fully remote. Per project, per sprint or part-time. I can also join existing teams." },
  "faq.q3": { es: "¿Puedes hacer una landing desde cero?", en: "Can you build a landing page from scratch?" },
  "faq.a3": { es: "Sí. Copy, diseño, desarrollo, SEO, despliegue e integración con WhatsApp. Todo incluido. Solo necesito saber qué vendes y a quién.", en: "Yes. Copy, design, development, SEO, deployment and WhatsApp integration. All included. I just need to know what you sell and who to." },
  "faq.q4": { es: "¿También haces IA?", en: "Do you also do AI?" },
  "faq.a4": { es: "Sí. Chatbots, asistentes, automatizaciones, búsqueda inteligente. No vendo humo, integro APIs de IA que resuelven problemas reales de negocios.", en: "Yes. Chatbots, assistants, automations, smart search. No hype, I integrate AI APIs that solve real business problems." },
  "faq.q5": { es: "¿Puedes trabajar con empresas pequeñas?", en: "Can you work with small businesses?" },
  "faq.a5": { es: "Sí, de hecho ese es mi foco principal. Ayudo a negocios pequeños a tener presencia digital de alta calidad sin presupuestos de agencia.", en: "Yes, that's my main focus actually. I help small businesses get high-quality digital presence without agency budgets." },
  "faq.q6": { es: "¿Puedes enseñar IA?", en: "Can you teach AI?" },
  "faq.a6": { es: "Sí. Talleres para colegios e instituciones sobre prompting, fundamentos de IA, agentes y usos prácticos. Nada teorico, todo aplicable desde el día uno.", en: "Yes. Workshops for schools on prompting, AI fundamentals, agents and practical uses. Nothing theoretical, all applicable from day one." },

  // Contact
  "contact.eyebrow": { es: "// contacto", en: "// contact" },
  "contact.title": { es: "¿Tienes un proyecto o una idea?", en: "Got a project or an idea?" },
  "contact.desc": { es: "Escribime al WhatsApp. Sin formularios de cinco campos ni correos que se pierden. Un mensaje y hablamos.", en: "Write me on WhatsApp. No five-field forms or emails that get lost. One message and we talk." },
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
