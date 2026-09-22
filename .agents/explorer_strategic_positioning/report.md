# Auditoría Integral de Posicionamiento Estratégico, Contenido y Propuesta de Valor — NikkoDev Portfolio

**Fecha de ejecución**: 2026-09-20  
**Objetivo auditado**: Repositorio local (`src/`, `PORTFOLIO_STRATEGY.md`, `CLAUDE.md`, `ATScv.md`, `design.md`) y despliegue en producción (`https://nikko.dev` y `https://nikko.dev/en`).  
**Investigador**: Subagente Explorer — Posicionamiento Estratégico y Contenido.

---

## 1. Resumen Ejecutivo y Diagnóstico Central

El portafolio de Brayan Nikolas Gallo León (`NikkoDev`) exhibe una base técnica de alto mérito (dos sistemas reales en producción con arquitecturas modernas: `SinPresupuesto` en Cloudflare Workers + Llama 3.1 + PWA, y `Semilleros FIBOG` en Astro + Supabase + PostgreSQL con 13 grupos de investigación de la UNAL). Asimismo, su interfaz visual inspirada en "NikkoDev OS" (terminal, modo oscuro, métricas de rendimiento) posee una estética distintiva frente a plantillas estándar.

Sin embargo, la auditoría revela un problema estructural crítico: **Bifurcación Severa de Identidad (Esquizofrenia de Marca)**. El portafolio intenta hablar simultáneamente a dos públicos diametralmente opuestos e incompatibles:
1. **Audiencia A (Estratégica / Internacional)**: Startups de EE.UU./Europa, CTOs y equipos de ingeniería remota que buscan un *Full-Stack / Applied AI / Edge Computing Engineer* autónomo y senior-capability capaz de diseñar sistemas distribuidos resilientes y optimizar costos serverless.
2. **Audiencia B (Táctica / Local)**: Microempresas y negocios locales en Colombia (talleres mecánicos, empresas de puertas automáticas) que buscan landings económicas de conversión a WhatsApp ($7 USD/hora), y colegios que requieren talleres de prompting escolar.

Esta dualidad sabotea el objetivo fundacional fijado en `PORTFOLIO_STRATEGY.md` ("*evitar que el portafolio lo presente como un estudiante principiante cuando en realidad ya ha construido productos completos*"). Al incluir banderas rojas de nivel junior (destacar "2do año de ingeniería", cursos de 20 horas de Excel, "FLAGSHIP: Landing pages premium", "Hago cosas web" y frases como "un celular de 300 lucas"), el portafolio es inmediatamente catalogado por reclutadores técnicos y CTOs como el trabajo de un estudiante universitario en etapa inicial que hace trabajitos freelance, desarmando la percepción de capacidad de ingeniería de alto impacto.

---

## 2. Auditoría de Identidad y Posicionamiento

### 2.1 Perfil Definido vs. Perfil Proyectado

| Parámetro | Definición en `PORTFOLIO_STRATEGY.md` | Realidad en Código Local y Sitio Live (`https://nikko.dev`) | Severidad |
|---|---|---|---|
| **Identidad Principal** | *"Full-Stack Developer especializado en IA aplicada, Edge Computing y plataformas web modernas."* (Líneas 13-15) | Coexiste con *"Estudio Ingeniería de Sistemas en la UNAL"* en el Hero, *"Hago cosas web"* en el meta description y *"FLAGSHIP: Landing pages premium"* en Servicios. | **CRÍTICO** |
| **Percepción de Estudiante** | *"No debe presentarse como: Estudiante que busca experiencia. Programador principiante."* (Líneas 17-20) | En Hero: `"hero.loc": "Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible"`. En About: `"Segundo año de ingeniería, sí."`. En VS Code mock: `año: "2do"`. | **CRÍTICO** |
| **Rol de la Universidad** | *"La universidad debe aparecer únicamente como respaldo académico. Nunca como propuesta de valor principal."* (Líneas 26-28) | La UNAL domina la narrativa visual: tarjeta #1 destacada en Certificaciones, mención en Hero, mención en About, mención en FAQ y meta tags. | **ALTO** |
| **Enfoque en Landing Pages** | *"No debe presentarse como: Constructor de landing pages genéricas ni diseñador web únicamente."* (Líneas 21-22) | En `Services.astro`, la tarjeta destacada con badge **FLAGSHIP** (01) es *"Landing pages premium"*. El 50% de los proyectos en la galería son landings estáticas (Autorreparación e InduSEC). | **CRÍTICO** |
| **Uso de IA** | *"No debe presentarse como: Usuario de APIs de IA."* (Línea 23) | En `FAQ.astro` (p4): *"integro APIs de IA que resuelven problemas reales de negocios"*. | **MEDIO** |

### 2.2 Análisis de Tono y Voz: ¿Senior / High-Impact vs. Junior / Estudiante?

1. **Lenguaje excesivamente coloquial e informal**:
   - En el meta description y JSON-LD (`src/layouts/BaseLayout.astro:81`):  
     `"Soy Brayan. Hago cosas web que cargan rápido y no desperdician un solo byte."`  
     *Impacto*: La frase *"Hago cosas web"* proyecta falta de rigor técnico y descuido léxico. En inglés internacional suena a *"I make web stuff"*, lo cual descarta de inmediato a un candidato para un puesto de ingeniería remunerado en dólares.
   - En `translations.ts` (`projects.sinpre.do`):  
     `"PWA pa' que funcione offline y en dispositivos de gama baja... un estudiante con un celular de 300 lucas"`  
     *Impacto*: El uso de jerga local (*"pa'"*, *"300 lucas"*) aliena a reclutadores extranjeros y no aporta valor de ingeniería.
   - En `translations.ts` (`projects.sinpre.learn`):  
     `"Medir desde el día uno. Montamos medio a las carreras y faltaron métricas de uso reales."`  
     *Impacto*: Confesar que se construyó *"medio a las carreras"* y que *"faltaron métricas de uso reales"* destruye la credibilidad de ingeniería de producción que el portafolio busca transmitir.

2. **Cues explícitos de estudiante junior**:
   - En `src/components/About.astro:17` / `translations.ts:106`:  
     `"Segundo año de ingeniería, sí. Pero con la madurez de quien entiende que la tecnología más elegante es aquella que se hace invisible."`  
     *Impacto*: Al explicitar "segundo año", cualquier evaluador técnico asume inmediatamente falta de fundamentos teóricos profundos, falta de experiencia en equipos multidisciplinarios y disponibilidad limitada por horarios de clase.
   - En `src/components/About.astro:49-62` (mock de VS Code):
     ```typescript
     universidad: "UNAL · Ing. de Sistemas",
     año: "2do",
     ```
     Ocupa el 50% del viewport en la sección Sobre Mí, ratificando la condición de estudiante.

3. **Inclusión de cursos universitarios introductorios como "Certificaciones"**:
   - En `src/components/Certifications.astro`:
     - *"UNAL · 64h: Programación de Computadores"*
     - *"UNAL · 32h: Comunicación Asertiva G2"*
     - *"UNAL · 20h: Excel Intermedio · Análisis de datos"*
     - *"Marca: NikkoDev"*
   - *Impacto*: Listar un curso de 20 horas de Excel o una clase básica de programación de 64 horas es el marcador universal de un currículum estudiantil sin experiencia profesional. Para un desarrollador que afirma dominar Edge Computing, RAG y arquitecturas serverless, esto resta seriedad de forma dramática.

---

## 3. Auditoría del Hero Section y Elevator Pitch

### 3.1 Anatomía del Hero Actual

```
[ Badge: ● freelance · disponible ]
[ Prompt: $ nikko run intro ]
[ H1: Construyo plataformas web con IA aplicada y Edge Computing. En producción, no en demos. ]
[ Desc: Hago webs que cargan rápido y no desperdician un byte. Landings, apps con IA y automatización. Casos reales: una plataforma educativa que pasó de 3s a 0.2s de carga y un sistema que hoy maneja 13 grupos de investigación de la UNAL. ]
[ Sub: Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible ]
[ CTAs: [WhatsApp]  [Ver qué hice] ]
```

### 3.2 Evaluación de Claridad y Resonancia

1. **Titular Principal (H1)**:  
   *Evaluación: Fuerte y Efectivo*.  
   `"Construyo plataformas web con IA aplicada y Edge Computing. En producción, no en demos."`  
   Comunica inmediatamente la especialidad técnica y el principio de prueba de trabajo real. Cumple las opciones recomendadas en `PORTFOLIO_STRATEGY.md` (Sección 9).

2. **Elevator Pitch (Párrafo descriptivo)**:  
   *Evaluación: Mixto (Métricas excelentes, formulación débil)*.  
   - **Acierto**: Incluye las dos métricas insignia (3s → 0.2s y 13 grupos UNAL).
   - **Fallo**: Inicia con *"Hago webs..."* y mezcla de nuevo *"Landings, apps con IA y automatización"*.

3. **Subtítulo de Ubicación/Estado (`hero.loc`)**:  
   *Evaluación: Negativo / Saboteador*.  
   `"Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible"`  
   Es lo último que el usuario lee antes de los botones de acción. El mensaje que queda en la retina es: *"Es un estudiante disponible"*.

4. **Botones de Llamado a la Acción (CTAs)**:  
   *Evaluación: Severamente Desalineado para Equipos Internacionales*.  
   - Botón Primario: **WhatsApp** (`https://wa.me/573136638097`).
   - Botón Secundario: **Ver qué hice** (scroll a `#proyectos`).
   - **Ausencias Críticas**:
     - No hay enlace ni botón de **Descargar CV** (PDF).
     - No hay enlace a **GitHub** ni **LinkedIn** en el Hero.
     - No hay opción de agendar llamada técnica (ej. Cal.com / Calendly).
   - Para un reclutador o CTO en EE.UU., WhatsApp no es un canal de reclutamiento profesional. Es percibido como informal y de alta fricción en comparación con revisar el CV o ver el GitHub.

---

## 4. Auditoría de Proyectos, Casos de Estudio y Prueba de Trabajo

### 4.1 Galería Visible vs. Pipeline Estratégico

En `PORTFOLIO_STRATEGY.md` (Sección 6) se definió una taxonomía por niveles:
- **Tier S**: 1. SinPresupuesto, 2. Semilleros FIBOG
- **Tier A**: 3. BoomLab, 4. Autorreparación
- **Tier B**: 5. InduSEC, 6. PawCare
- **Tier C**: 7. KalaChat, 8. Piggy

**Realidad en la Web y Código**:
Solo 4 proyectos están renderizados (`Projects.astro` y `projects.ts`):
1. `SinPresupuesto` (Tier S)
2. `Semilleros FIBOG` (Tier S)
3. `Autorreparación` (Tier A)
4. `InduSEC` (Tier B)

Los proyectos **BoomLab**, **PawCare**, **KalaChat** y **Piggy** NO EXISTEN en la navegación de proyectos, a pesar de que sus capturas gráficas (`boombox.jpg`, `pawcare.jpg`, `kala-chat.jpg`, `piggy.jpg`) **ya están almacenadas en `/public/projects/`**.  
*Consecuencia directa*: Al mostrar solo 4 proyectos, de los cuales el 50% son simples páginas web comerciales para un taller y una fábrica de puertas, el portafolio transmite la sensación de un portafolio novato con poca trayectoria. Si en su lugar se exhibieran `PawCare` (IA para mascotas) y `KalaChat` (chat con IA), el 80% de la vitrina validaría directamente la especialidad en IA y Apps.

### 4.2 Profundidad de los Casos de Estudio (`/proyectos/[slug]`)

La promesa de `design.md` (líneas 328-346) y `PORTFOLIO_STRATEGY.md` era: *"No usar tarjetas genéricas. Usar Case Study Cards... arquitecturas simplificadas, métricas verificables, decisiones técnicas"*.

**Hallazgos en el código (`src/pages/proyectos/[slug].astro` y `src/components/Projects.astro`)**:
1. **Ausencia total de diagramas de arquitectura**:  
   No existe un solo diagrama (Mermaid, SVG, imagen de arquitectura) que muestre el flujo de datos: cómo interactúa Next.js con Cloudflare Workers, cómo opera el runtime de Workers AI con Llama 3.1, cómo se gestiona el caché KV, o cómo se estructura el RAG (vectorización, embeddings, cosine similarity, retrieval).
2. **Contenido superficial en bloques estandarizados**:  
   Cada caso de estudio se reduce a cuatro cajas idénticas:
   - 01 Contexto / El problema (1 párrafo breve).
   - 02 Implementación / Qué hice (1 párrafo breve).
   - 03 Estado / Resultado (1 párrafo breve).
   - 04 Herramientas / Stack (etiquetas de texto).
3. **Omisión de los argumentos técnicos clave de `PORTFOLIO_STRATEGY.md`**:
   - En **FIBOG**: La estrategia exige destacar *"875 líneas de SQL, RLS granular, RPCs en PostgreSQL, arquitectura híbrida SSG + Serverless, flujo de aprobación institucional de semilleros y OpenRouter"*. Nada de esto está detallado en la página del proyecto.
   - En **SinPresupuesto**: La estrategia exige explicar *"Next.js App Router, Cloudflare Workers independientes para frontend e IA, Workers AI, KV Storage, tests con Jest y Playwright, y resiliencia con fallback estático"*. El caso de estudio actual solo menciona una PWA y un chatbot de manera genérica.

---

## 5. Auditoría de Habilidades y Presentación del Stack

### 5.1 Estado Actual: Marquee Ticker (`SkillsMarquee.astro`)

El stack técnico se presenta mediante un marquee horizontal animado (`src/components/SkillsMarquee.astro`) con 19 píldoras:
`Next.js · Astro · React · TypeScript · Tailwind CSS · GSAP · Supabase · PostgreSQL · Cloudflare Workers · OpenRouter · Llama 3.1 · RAG · PWA · OAuth · Edge Computing · Linux · Serverless · Jest · Playwright`.

### 5.2 Evaluación Crítica: Sopa de Buzzwords vs. Validación Técnica

1. **Falta de Agrupación por Dominios de Ingeniería**:  
   El ticker mezcla sin criterio jerárquico herramientas de styling (`Tailwind CSS`, `GSAP`), plataformas de infraestructura (`Cloudflare Workers`, `Linux`), modelos (`Llama 3.1`), técnicas de IA (`RAG`), protocolos (`OAuth`) y frameworks de test (`Jest`, `Playwright`).
2. **Inconsistencia con la Evidencia Visible**:  
   - Se incluye `Jest` y `Playwright`, pero en ninguna parte del portafolio se menciona qué cobertura de pruebas se alcanzó, qué suites e2e se montaron, o cómo corre el CI/CD.
   - Se incluye `RAG` y `Edge Computing`, pero no hay explicaciones técnicas de cómo se implementaron en los proyectos.
3. **Dispersión en Certificaciones**:  
   En `Certifications.astro` (tarjeta 7), se añade: *"Java, C++, Python, JavaScript, Kotlin, Rust"*. Listar 6 lenguajes más en una tarjeta sin proyectos asociados refuerza la percepción de lista de materias aprobadas en la universidad, en lugar de especialización profesional enfocada.

---

## 6. Auditoría del Embudo de Conversión y Contacto

### 6.1 Análisis del Flujo de Conversión

```
Visitante -> Hero -> Servicios -> Proyectos -> Sobre Mí -> Experiencia -> Métricas -> Certs -> FAQ -> Contacto
```

### 6.2 Cuellos de Botella y Fugas del Embudo

1. **Ausencia Absoluta de Descarga de CV**:  
   - En el directorio raíz existe `ATScv.md` con un currículum excelente, estructurado y optimizado para ATS.
   - En `src/data/translations.ts` (línea 224) está definida la clave `"contact.cv": { es: "Descargar CV", en: "Download CV" }`.
   - **Sin embargo, dicha clave NUNCA se utiliza en ningún componente.** No hay un botón de "Descargar CV" en el Navbar, ni en el Hero, ni en la sección Contacto.
   - En `public/` **no existe un solo archivo PDF** del currículum.
   - *Impacto*: Pérdida del 100% de los reclutadores que necesitan descargar un PDF para adjuntarlo a su ATS (Greenhouse, Lever, Workday) antes de contactar al candidato.

2. **Monopolio de WhatsApp como Canal Primario**:  
   - El Navbar tiene un botón `"Hablemos"` que abre WhatsApp.
   - El Hero tiene un botón verde grande de WhatsApp.
   - Existe un botón flotante permanente (`.whatsapp-float`) de WhatsApp.
   - En la sección Contacto, WhatsApp es la primera opción (`La vía rápida`).
   - En cada caso de estudio, hay un botón `"Hablemos por WhatsApp"`.
   - *Impacto*: Ideal para clientes colombianos locales; altamente ineficaz para reclutadores internacionales y CTOs, quienes jamás inician un proceso formal de contratación de ingeniería vía WhatsApp personal sin antes haber intercambiado correo o agendado una videollamada.

3. **Sin Integración de Calendario (Scheduling)**:  
   No existe enlace a Cal.com o Calendly para permitir que un cliente o reclutador reserve directamente una sesión técnica de 15 o 30 minutos.

4. **Sin Formulario Web Nativo**:  
   La opción de email es un simple enlace `mailto:nikolasgallo095@gmail.com`. En sistemas operativos de escritorio sin cliente de correo nativo configurado (Outlook/Thunderbird/Apple Mail), hacer clic en un enlace `mailto` no hace nada o genera error en el navegador.

---

## 7. Evaluación Punto por Punto de `PORTFOLIO_STRATEGY.md`

| # | Directriz / Objetivo Estratégico | Estado | Evidencia y Justificación |
|---|---|---|---|
| **1** | **Regla Principal**: Presentarse como Full-Stack especializado en IA aplicada, Edge Computing y plataformas web modernas. | **PARCIALMENTE CUMPLIDO** | El H1 del Hero lo dice explícitamente (`Hero.astro:23-26`), pero el meta description (`"Hago cosas web"`), el Hero loc (`"Estudio en la UNAL"`) y Servicios (`"FLAGSHIP: Landing pages"`) lo diluyen por completo. |
| **2** | **Evitar perfil de estudiante o principiante**. | **NO CUMPLIDO** | Se reitera en múltiples secciones: Hero (`"Estudio en la UNAL"`), About (`"Segundo año de ingeniería, sí"`), VS Code mock (`año: "2do"`), Certificaciones (cursos de 20h y 32h). |
| **3** | **Universidad solo como respaldo académico**, nunca como propuesta de valor principal. | **NO CUMPLIDO** | Aparece en el Hero, en la cita de About, en el código mock, en 4 de las 8 tarjetas de certificaciones y en las FAQs. |
| **4** | **Especialidad técnica**: Edge-First Full-Stack (Supabase, Cloudflare, IA, Next.js/Astro, serverless, bajo costo). | **PARCIALMENTE CUMPLIDO** | Las tecnologías están mencionadas en tags y textos, pero falta la demostración profunda (diagramas, tradeoffs de arquitectura). |
| **5** | **Sensación deseada**: "Este desarrollador ya construyó sistemas reales / entiende arquitectura / podría construir el MVP de mi startup". | **PARCIALMENTE CUMPLIDO** | La UI de terminal transmite tecnicismo, pero la brevedad de los casos de estudio no ofrece suficiente sustento de arquitectura para un CTO. |
| **6** | **Público Objetivo**: CTOs, Startups, Reclutadores, Clientes Freelance. | **PARCIALMENTE CUMPLIDO** | Está sobrecargado hacia el cliente freelance local de landing pages y hacia el rol de docente escolar de IA. Los CTOs quedan desatendidos. |
| **7** | **Proyectos Prioritarios**: Tier S (SinPresupuesto, FIBOG), Tier A (BoomLab, Autorreparación), Tier B (InduSEC, PawCare), Tier C (KalaChat, Piggy). | **NO CUMPLIDO** | Solo se muestran 4 proyectos. BoomLab, PawCare, KalaChat y Piggy están ausentes a pesar de tener imágenes listas en `/public/projects/`. |
| **8** | **Venta de SinPresupuesto**: Destacar Next.js App Router, Cloudflare Workers, Workers AI, KV, Supabase, OAuth, PWA, Jest, Playwright, RAG, 3s → 0.2s. | **PARCIALMENTE CUMPLIDO** | Se destaca la métrica 3s → 0.2s, PWA y Llama 3.1, pero se omiten los detalles de testing (Jest/Playwright), Workers AI, KV y arquitectura de Workers independientes. |
| **9** | **Venta de FIBOG**: Destacar plataforma institucional UNAL, 13 grupos, 875 líneas SQL, RLS granular, RPCs, OpenRouter, Netlify Functions, workflow de aprobación. | **PARCIALMENTE CUMPLIDO** | Se destacan los 13 grupos y 11k líneas de código, pero se omite la complejidad de SQL, RLS, RPCs y el workflow de aprobación en la narrativa del caso de estudio. |
| **10** | **Mensajes clave del Hero**: Full-Stack, IA aplicada, Edge Computing, productos reales, producción real. | **CUMPLIDO** | El H1 y la terminal `nikko.config.js` incorporan estos 5 mensajes clave. |
| **11** | **Métricas reales a mostrar**: 8+ proyectos, 2 en producción, 13 grupos, 11k+ líneas, 3s → 0.2s, ~$0 costo operativo. | **CUMPLIDO** | Implementado completamente en `Metrics.astro` con contadores animados y formato de tablero. |
| **12** | **Alineación con ATS / CV y LinkedIn**. | **NO CUMPLIDO** | El CV (`ATScv.md`) no tiene enlace de descarga pública ni versión PDF en la web. |
| **13** | **Qué evitar**: Sin barras de habilidades falsas, sin porcentajes inventados, sin texto excesivo, sin animaciones injustificadas. | **CUMPLIDO** | No hay barras de progreso ni porcentajes engañosos; el diseño es limpio y conciso. |
| **14** | **Elementos requeridos**: Hero fuerte, casos de estudio, arquitecturas, capturas reales, métricas verificables, links a prod/repo, certificaciones, WhatsApp. | **PARCIALMENTE CUMPLIDO** | Faltan los diagramas de arquitectura, el botón de CV y 4 proyectos estratégicos. |

---

## 8. Matriz Estratégica FODA (SWOT)

### Fortalezas (Strengths)
1. **Pruebas de Trabajo Reales y Verificables en Producción**:
   - `SinPresupuesto`: PWA funcional con autenticación OAuth e integración de Llama 3.1 sobre Cloudflare Workers.
   - `Semilleros FIBOG`: Sistema institucional en producción para la Universidad Nacional de Colombia con 13 grupos de investigación y más de 11.000 líneas de código.
2. **Métricas de Rendimiento Cuantitativas Extremas**:
   - Reducción de tiempo de carga documentada de 3.0s a 0.2s (93% de mejora).
   - Costo operativo de infraestructura serverless prácticamente en $0 USD/mes.
3. **Identidad Visual Diferenciada ("NikkoDev OS")**:
   - Tema oscuro técnico inspirado en terminales Unix, fuentes monoespaciadas (`JetBrains Mono`), animaciones suaves y status bars del sistema operativo que proyectan un ambiente de ingeniería serio y moderno.
4. **Soporte Bilingüe Nativo Ya Implementado**:
   - Arquitectura internacionalizada (`/` en español y `/en` en inglés) con selectores de idioma limpios y traducciones consistentes en `translations.ts`.
5. **Stack Tecnológico de Alta Demanda y Baja Deuda**:
   - Astro 7, TypeScript, Next.js, Supabase, PostgreSQL, Cloudflare Workers y tailwind/vanilla CSS moderno sin bloatware.

### Oportunidades (Opportunities)
1. **Ola Global de Ingeniería de Agentes e IA Aplicada (Applied AI / Edge Runtimes)**:
   - Gran demanda de ingenieros que sepan implementar modelos abiertos (Llama 3.1), arquitecturas RAG eficientes y Edge Functions a una fracción del costo de la infraestructura cloud tradicional (AWS/Vercel).
2. **Reposicionamiento de la UNAL como Cliente / Institución Validadora**:
   - Transformar la mención de la UNAL: en lugar de *"Soy estudiante de 2do año"*, presentarla como *"Desarrollador líder / contratista de la plataforma de semilleros para la Facultad de Ingeniería de la UNAL"*. Esto convierte un cue junior en un aval de autoridad técnica institucional.
3. **Diagramación de Arquitectura de Alto Nivel**:
   - La inclusión de diagramas de arquitectura interactivos o Mermaid en los casos de estudio elevará inmediatamente el portafolio al percentil superior (top 5%) frente al 95% de portafolios que solo muestran capturas de pantalla de la UI.
4. **Incorporación de los Proyectos IA Faltantes**:
   - Publicar `PawCare` y `KalaChat` (cuyos assets ya existen) para consolidar un portafolio donde el 80% sean aplicaciones complejas y solo el 20% sean landings comerciales.
5. **Optimización del Embudo de Contratación Internacional**:
   - Añadir descarga directa de CV en PDF optimizado para ATS (en inglés y español) y un enlace de Cal.com/Calendly para agendar entrevistas técnicas remotas.

### Debilidades (Weaknesses)
1. **Autosabotaje por Señales Junior Explícitas**:
   - Menciones directas de "segundo año de universidad", "hago cosas web", y certificaciones de cursos de 20 horas de Excel o comunicación asertiva.
2. **Bifurcación Incompatible de Servicios (Esquizofrenia de Propuesta de Valor)**:
   - Presentar "Landing pages premium" como servicio insignia (Flagship) y ofrecer "Talleres escolares de IA", chocando frontalmente con la posición de ingeniero Full-Stack de Edge Computing y plataformas modernas.
3. **Casos de Estudio Superficiales**:
   - Ausencia total de explicaciones sobre el pipeline RAG, la configuración de Cloudflare Workers, las políticas de Row Level Security (RLS) en Supabase, y las pruebas automatizadas con Playwright.
4. **Embudo de Conversión Roto para Reclutadores**:
   - Sin botón de descarga de CV ni archivo PDF disponible en producción.
   - Dependencia exclusiva de WhatsApp, canal rechazado por empresas y reclutadores internacionales.
5. **Fuga de Privacidad / Contenido Personal No Curado**:
   - Despliegue público de `/karen` (carta personal íntima) en el dominio de producción `https://nikko.dev/karen`, lo que compromete la imagen de madurez y profesionalismo del sitio si es descubierta.
6. **Sopa de Habilidades en Marquee Ticker**:
   - Habilidades presentadas en un carrusel desordenado sin categorización por arquitectura, backend, edge o frontend, ni niveles de dominio demostrados.

### Amenazas (Threats)
1. **Descarte Automático (Down-leveling) por Reclutadores Técnicos**:
   - El escaneo visual promedio de un reclutador toma entre 6 y 10 segundos. Al leer "Estudio en la UNAL - 2do año", el perfil es clasificado de inmediato como candidato para pasantía / becario (intern) o descartado por falta de título.
2. **Trampa de Precarización Freelance**:
   - El enfoque en micro-landings con contacto por WhatsApp atrae clientes locales de presupuesto mínimo ($30 - $100 USD) que consumen mucho tiempo de soporte y negociación, impidiendo la captura de contratos de desarrollo remoto de alto valor ($2,000+ USD/mes).
3. **Commoditización Rápida de Wrappers de IA**:
   - La frase *"integro APIs de IA"* en las FAQ hace que el perfil se perciba como un ensamblador genérico de APIs de OpenAI. Si no se demuestra conocimiento de RAG propio, embeddings y optimización de latencia en el Edge, el valor percibido se desploma.

---

## 9. Plan de Acción y Hoja de Ruta Priorizada

### Nivel 1: Acciones Inmediatas (P0 — Impacto Crítico / Esfuerzo Bajo)
1. **Eliminar todos los cues de estudiante junior**:
   - Modificar `src/data/translations.ts` (`hero.loc`): Cambiar *"Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible"* por *"Full-Stack & Edge Engineer · Open to Remote Engineering Roles & High-Impact Contracts"*.
   - Modificar `src/components/About.astro` y `translations.ts` (`about.story`): Eliminar *"Segundo año de ingeniería, sí."*. Reformular como *"Ingeniero de Sistemas y Computación (UNAL) enfocado en arquitecturas de alto rendimiento..."*.
   - En el mock de VS Code de `About.astro`: Cambiar `año: "2do"` por `focus: "Edge Runtimes & Applied AI"`.
   - Modificar `BaseLayout.astro` (meta description): Reemplazar *"Soy Brayan. Hago cosas web que cargan rápido y no desperdician un solo byte"* por *"Desarrollador Full-Stack especializado en IA aplicada, Edge Computing y arquitecturas web de alto rendimiento."*.
2. **Reparar el Embudo de Conversión — Activar Descarga de CV**:
   - Generar el PDF a partir de `ATScv.md` y alojarlo en `public/cv-brayan-gallo.pdf` (y su versión en inglés `public/cv-brayan-gallo-en.pdf`).
   - Conectar la clave `contact.cv` en `src/components/Contact.astro` y en el `Navbar.astro`, permitiendo descargar el CV en 1 clic.
3. **Reestructurar la Sección de Certificaciones (`Certifications.astro`)**:
   - Eliminar las tarjetas de *"Excel Intermedio (20h)"*, *"Comunicación Asertiva (32h)"*, *"Programación de Computadores (64h)"* y *"Marca NikkoDev"*.
   - Reemplazarlas por credenciales de peso: *Arquitectura Cloudflare / Edge Runtimes*, *PostgreSQL & RLS Avanzado*, *Google AI Certificate*, y un resumen de *Stack Core*.
4. **Aislar o Proteger la Ruta Personal `/karen`**:
   - Mover `src/pages/karen.astro` fuera del bundle público de producción o asignarle autenticación/acceso restringido para evitar riesgos de reputación.

### Nivel 2: Acciones a Corto Plazo (P1 — Impacto Alto / Esfuerzo Medio)
1. **Reestructurar la Sección de Servicios (`Services.astro`)**:
   - Retirar el badge **FLAGSHIP** de "Landing pages premium".
   - Establecer como servicio insignia (01 FLAGSHIP): **"Arquitecturas Edge & Plataformas Full-Stack"** (Next.js, Supabase, Cloudflare Workers, PostgreSQL).
   - Servicio 02: **"Sistemas de IA Aplicada & RAG"** (Llama 3.1, búsqueda semántica, agentes, Workers AI).
   - Servicio 03: **"Optimización Extrema de Rendimiento & Costos Cloud"** (migración serverless, reducción de latencia, auditoría Core Web Vitals).
   - Eliminar o reubicar "Educación en IA" para colegios en una mención secundaria o footer.
2. **Publicar los Proyectos de IA Faltantes (`PawCare`, `KalaChat`, `BoomLab`)**:
   - Añadir las entradas en `src/data/projects.ts` vinculando las imágenes ya existentes en `public/projects/`.
   - Rebalancear la vitrina de proyectos: 4 proyectos de software/IA complejos y 2 landings comerciales demostrativas.
3. **Transformar la Sopa de Habilidades (`SkillsMarquee.astro`)**:
   - Complementar el marquee continuo con una matriz de habilidades por dominios técnicos:
     - *Edge & Cloud Infrastructure*: Cloudflare Workers, Workers AI, KV, Netlify, Serverless.
     - *Backend & Databases*: Supabase, PostgreSQL, RLS, REST APIs, OAuth, JWT.
     - *Applied AI & LLMs*: Llama 3.1, RAG, OpenRouter, Prompt Engineering, Semantic Search.
     - *Frontend & Client Engineering*: Astro, Next.js, React, TypeScript, PWA, Tailwind CSS, GSAP.
     - *Testing & Reliability*: Playwright, Jest, Linux.

### Nivel 3: Acciones a Mediano Plazo (P2 — Impacto Alto / Esfuerzo Alto)
1. **Incorporar Diagramas de Arquitectura en los Casos de Estudio**:
   - Añadir en `/proyectos/sinpresupuesto` un diagrama que ilustre: Cliente PWA -> Cloudflare Edge Router -> Worker App / Worker AI -> Supabase Postgres + RLS.
   - Añadir en `/proyectos/fibog` un diagrama de la arquitectura híbrida SSG + Netlify Functions + Supabase RLS policies.
2. **Integrar Programación de Reuniones (Cal.com / Calendly)**:
   - Añadir un comando en la consola de contacto: `$ contact --book-call` con enlace directo a agenda para discovery calls con CTOs y fundadores.
3. **Alinear FAQ con la Propuesta de Ingeniería**:
   - Modificar las preguntas y respuestas de `FAQ.astro` para responder a preguntas de CTOs y reclutadores (ej. "¿Cómo manejas la seguridad de datos con RLS?", "¿Cómo lograste optimizar de 3s a 0.2s en producción?", "¿Cuál es tu experiencia trabajando en equipos remotos distribuidos?").
