# nikko.dev

Portafolio de **NikkoDev** (Brayan Nikolas Gallo León). Sitio estático hecho con [Astro](https://astro.build), en español (`/`) y en inglés (`/en`), con tema oscuro por defecto y tema claro opcional. Se despliega en Vercel.

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/ en local
npm run check    # comprueba tipos (astro check)
```

## Estructura

```text
src/
├── i18n/         ui.ts (textos de la interfaz) y utils.ts (idioma y rutas)
├── data/         site.ts (contacto, secciones) · projects.ts · content.ts (servicios, stack, FAQ, métricas)
├── lib/          schema.ts (JSON-LD) · analytics.ts
├── scripts/      JavaScript del navegador: tema, navegación, paleta de comandos, efectos
├── styles/       global.css (tokens de color, tipografía y piezas compartidas)
├── components/   secciones y piezas de la portada
│   └── views/    Home.astro y CaseStudy.astro: una vista por tipo de página
├── layouts/      BaseLayout.astro (SEO, JSON-LD, tema, paleta)
└── pages/        index, en, proyectos/[slug], en/projects/[slug], 404, sitemap.xml
```

Las páginas de `pages/` solo eligen el idioma y delegan en una vista, así que español e inglés no duplican código.

## Dónde cambiar cada cosa

| Qué | Dónde |
| --- | --- |
| WhatsApp, email, GitHub, LinkedIn | `src/data/site.ts` |
| Textos de la interfaz (ES y EN) | `src/i18n/ui.ts` |
| Proyectos y casos de estudio | `src/data/projects.ts` |
| Servicios, stack, FAQ y métricas | `src/data/content.ts` |
| Colores, tipografía y espaciado | variables al inicio de `src/styles/global.css` |

## Reglas del proyecto

- **Traducciones completas.** Cada clave de `ui.ts` necesita `es` y `en`. Si falta una, el build falla en lugar de mostrar la clave en pantalla.
- **Un solo lugar por dato.** La FAQ alimenta el HTML y el JSON-LD. Los proyectos alimentan las tarjetas, los casos de estudio, la paleta, el panel del hero y el sitemap. El número de WhatsApp sale de `site.ts`.
- **Las métricas enlazan a su proyecto** (`content.ts`), así que un número se cambia en un solo sitio.
- **La demo es opcional.** Si un proyecto no tiene `links.demo` (como FIBOG), la interfaz no muestra el botón.

## Añadir un proyecto

1. Guarda una captura de `1280×800` en `public/projects/<slug>.jpg` y otra de `640×400` en `public/projects/<slug>-640.jpg`.
2. Añade un objeto a `projects` en `src/data/projects.ts`, con los textos en `es` y `en`.
3. El proyecto aparece en la portada, genera `/proyectos/<slug>` y `/en/projects/<slug>`, y entra en el sitemap y en la paleta de comandos.

La cuadrícula de la portada está pensada para 6 proyectos (uno destacado y cinco normales). Con otro número, revisa `src/components/Projects.astro`.

## Accesibilidad y movimiento

- Enlace «Saltar al contenido», foco visible y navegación completa por teclado.
- Contraste de texto de al menos 4,5:1 en los dos temas.
- Las animaciones de aparición y la barra de progreso usan CSS (`animation-timeline`), sin JavaScript. Con `prefers-reduced-motion` se desactivan.
- `Ctrl/⌘ + K` o `/` abre la paleta de comandos: secciones, casos de estudio, tema, idioma y copiar el email.

## Notas

- **CSP.** `vercel.json` mantiene `'unsafe-inline'` en scripts y estilos, porque el script del tema inicial y los atributos `style` de las animaciones lo necesitan. Quitarlo exige hashes para el script y `inlineStylesheets: "never"`. Hay que validarlo con un build real antes de cambiarlo.
- **Analítica.** `track()` guarda los eventos en `window.__nikkoEvents`. Para enviarlos a un servicio, define `data-analytics-endpoint` en `<html>`; hoy no está definido.
- **Documentos de contexto.** `CLAUDE.md`, `design.md`, `PORTFOLIO_STRATEGY.md`, `ATScv.md` y `ORIGINAL_REQUEST.md` describen marca y estrategia, y no entran en el build. `AUDIT_REPORT.md` describe la estructura anterior al rediseño.
