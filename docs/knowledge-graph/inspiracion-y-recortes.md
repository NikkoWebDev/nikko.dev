# Inspiración y recortes para nikko.dev

Esto es una búsqueda de inspiración y una lista de qué quitar. No es un plan de rediseño.

## 1. Inspiración (Awwwards y referencias relacionadas)

Búsqueda realizada el 6 de noviembre de 2026.

- **Portafolios en Awwwards.** La categoría [Best Portfolio Websites](https://www.awwwards.com/websites/portfolio/) reúne sitios de portafolio premiados. Sirve como punto de partida para ver cómo otros organizan proyectos y contacto.
- **Minimalismo y tipografía grande.** El sitio de [Regina Musi en Awwwards](https://www.awwwards.com/inspiration/about-me-section-regina-musi-portfolio-website) usa diseño plano, mucho aire y tipografía protagonista. Es una referencia para la sección "Sobre mí", que hoy depende de una terminal decorativa.
- **Estética de terminal.** Hay plantillas de portafolio con estilo de terminal, tipografía limpia y texto que se escribe solo ([ejemplo en Lovable](https://lovable.dev/templates/websites/portfolio/terminal-developer-portfolio-website-template)). Nikko ya usa esta idea en Hero y About. Conviene decidir si la terminal es el concepto central o solo un detalle.
- **Diseño limpio.** La categoría [Clean websites en Awwwards](https://www.awwwards.com/websites/clean/) muestra cómo colocar pocos elementos con precisión. Es útil para revisar la densidad actual de las secciones.
- **Interacción y 3D.** Awwwards tiene categorías de [web interactiva](https://www.awwwards.com/websites/web-interactive/?page=5) y de [Three.js](https://www.awwwards.com/websites/three-js/). Son referencias para efectos avanzados. Para un portafolio de desarrollador, es mejor usar estas ideas con moderación, porque pesan en rendimiento y accesibilidad.
- **Guía de contenido.** Un análisis de portafolios de 2026 indica que los mejores sitios responden en pocos segundos qué hace la persona, qué prueba lo demuestra y cómo contratarla ([Colorlib](https://colorlib.com/wp/best-portfolio-websites/)). Hoy el sitio tiene mucho contenido, y esta guía ayuda a decidir qué sube al primer pantallazo.

Las fuentes se consultaron con búsqueda web. Las descripciones son resúmenes propios, no citas textuales.

## 2. Qué eliminar

### Duplicado

| Qué | Dónde | Por qué quitarlo |
| --- | --- | --- |
| Bloque de animaciones (unas 125 líneas de script y style) | `src/pages/index.astro` y `src/pages/en.astro` | Está copiado en ambas portadas. Debe vivir en un solo lugar. |
| Tres fuentes de datos de proyectos | `src/data/projects.ts`, arreglo inline en `Projects.astro` y objeto de texto en `src/pages/en/projects/[slug].astro` | Tienen campos e ids distintos. Basta con una fuente. |
| Preguntas frecuentes | `FAQ.astro` y JSON-LD de `BaseLayout.astro` | Las 6 preguntas y respuestas están escritas dos veces. Conviene generar el JSON-LD desde los mismos datos. |
| Número de WhatsApp | 9 líneas en 7 archivos | Cambiarlo hoy obliga a editar muchos archivos. Debe ir en una constante. |
| Métricas (3s a 0.2s, 13 grupos, 8 proyectos) | `Hero`, `Metrics`, `Experience`, `Impacto` y `translations.ts` | Cada componente tiene su número. Si cambia uno, los demás quedan viejos. |
| Impacto y Projects | `Impacto.astro` y `Projects.astro` | Ambas muestran Reprebot y CEIS con los mismos enlaces y datos. |

### Sin uso o sin sentido

| Qué | Dónde | Por qué quitarlo |
| --- | --- | --- |
| 43 claves de traducción sin uso | `src/data/translations.ts` | Son texto muerto. Basta con eliminarlas. |
| 4 imágenes en `public/projects/` sin referencia | `public/projects/` | Ocupan espacio y no se ven en el sitio. |
| Función `track` que envía eventos | `src/lib/analytics.ts` | Solo llena `window.__nikkoEvents`. Ningún HTML define `data-analytics-endpoint`, así que no envía nada. Quitarla o conectarla a un servicio real. |
| Estado "ONLINE", "EN LÍNEA", "SYNCED" del panel de Hero | `src/components/Hero.astro` | Los valores están fijos en el código, pero parecen datos en vivo. Además, "PostgreSQL" no aparece en el stack de los proyectos, que usa Supabase. Es engañoso si no es real. |
| Afirmación de GSAP en la marquesina | `SkillsMarquee.astro` | GSAP aparece como habilidad, pero no es dependencia del proyecto. Quitarla o usarla de verdad. |
| Texto en español fijo dentro de `/en` | `Footer.astro`, `SkillsMarquee.astro`, aria-label del botón de idioma | Se ve español en la versión en inglés. Pasarlo a `translations.ts`. |

### Revisar antes de decidir

- **Marca "NIKKO" de fondo** en Hero (`hero-ghost`). Es decorativa. Puede seguir si aporta, pero compite con el título.
- **Terminal en Hero y About.** Son dos terminales decorativas. Conviene mantener solo una.
- **Tercer hito de Experience** repite las métricas de Hero. Quitar los números de ahí si ya están en Metrics.

## 3. Pendiente de confirmar

- **Demo de FIBOG.** Tienes razón: `semilleros.nikko.dev` es otro sitio, no parte de nikko.dev. En el grafo, el nodo "Demo FIBOG" está apuntando a esa URL, así que hay que corregirlo. CLAUDE.md indica `semilleros-fibog.vercel.app`. ¿Esa es la URL correcta del proyecto FIBOG, o hay que quitar el enlace? No lo he cambiado hasta que lo confirmes.
- **Grafo.** Cuando confirmes la URL, actualizo `knowledge-graph.md` y `knowledge-graph.json` para que el nodo de FIBOG refleje la decisión.
