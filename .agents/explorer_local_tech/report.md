# Auditoría Técnica Local y de Arquitectura — NikkoDev Portfolio

> **Fecha de ejecución:** 2026-09-20  
> **Entorno de análisis:** Linux (x86_64) | Node.js / NPM | Astro SSG  
> **Ubicación del repositorio:** `/home/niko/Proyectos/My portfolio`  
> **Auditor:** Explorer Subagent — Local Codebase & Architecture Specialist  

---

## Resumen Ejecutivo

El portafolio de NikkoDev (`nikkodev-portfolio` v2.0.0) es un proyecto estático de alto rendimiento construido sobre **Astro 7.0.6**, diseñado con estética de terminal/sistema operativo ("NikkoDev OS") bajo un enfoque *Edge-First*.

La base de código exhibe **fortalezas técnicas sobresalientes**:
- **Cero sobrecarga de frameworks cliente**: No incluye React, Vue ni Svelte en tiempo de ejecución. El bundle de JavaScript despachado al navegador es inferior a **5 KB** en total.
- **Compilación ultra veloz**: La generación de 11 páginas estáticas (`npm run build`) se ejecuta en apenas **~938 ms**.
- **Sistema de diseño ligero y puro**: Estilos escritos íntegramente en CSS nativo moderno con variables de diseño, Glassmorphism, modo claro/oscuro sin parpadeo (FOUC) y soporte para `prefers-reduced-motion`.
- **Excelente arquitectura SEO y metadatos**: Integración profunda de Schema.org JSON-LD multinodo (`Person`, `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage`), Open Graph, Twitter Cards y etiquetas canónicas/hreflang completas.

Sin embargo, la auditoría reveló **hallazgos técnicos críticos y de severidad alta** que deben abordarse antes de considerar la base de código en estado óptimo de producción:
1. **Vulnerabilidades de seguridad críticas en dependencias**: Astro `7.0.6` presenta advisories de **RCE** (Ejecución Remota de Código vía optimización de imágenes AVIF `GHSA-26w7-cxv4-gfx2`) y **Reflected XSS** (`GHSA-4g3v-8h47-v7g6`), sumando un total de 8 vulnerabilidades detectadas por `npm audit` (1 crítica, 6 altas, 1 moderada).
2. **Ausencia total de configuración TypeScript (`tsconfig.json`) y herramientas de tipado**: El archivo `tsconfig.json` no existe en la raíz del proyecto. Tampoco están instalados `@astrojs/check` ni `typescript` en dependencias, haciendo imposible la verificación estática de tipos en CI/CD o pre-commit (`npx astro check` aborta).
3. **Fallo de interpolación en analítica de casos de estudio**: En `src/pages/proyectos/[slug].astro` y `src/pages/en/projects/[slug].astro`, el script del cliente llama a `track("case_view", { slug: "{project.slug}", lang: "{lang}" })`. Al no utilizar `define:vars` ni atributos `data-*`, el compilador emite literalmente la cadena literal `"{project.slug}"`, rompiendo la analítica de vistas de proyectos.
4. **Archivos huérfanos y anomalías en la raíz**: Existen archivos heredados rastreados en Git (`index.html` de 54 KB con 1,799 líneas; `opcion.html` de 12 KB; y una carpeta vacía `portfolio/`) que no participan en el pipeline de Astro y crean confusión y deuda técnica.
5. **Gestión deficiente de activos e imágenes en `public/`**: Las imágenes residen en `public/projects/` en lugar de `src/assets/`, eludiendo el motor de optimización de Astro (`astro:assets`). Imágenes pesadas (hasta 521 KB por archivo JPEG) se entregan sin comprimir a WebP/AVIF, y 4 de las 8 imágenes (237 KB) están completamente huérfanas sin ninguna referencia en el código.

---

## 1. Arquitectura y Modularidad de Componentes

### 1.1 Estructura de Directorios

```
/home/niko/Proyectos/My portfolio/
├── .agents/                      # Metadatos del equipo de auditoría (no código)
├── .astro/                       # Caché interna de Astro
├── .vercel/                      # Configuración de vinculación local de Vercel (project.json)
├── dist/                         # Salida de compilación estática
├── public/                       # Activos estáticos públicos (imágenes, robots, sitemap)
│   ├── projects/                 # 8 imágenes JPG de proyectos (4 huérfanas)
│   ├── favicon.svg
│   ├── og-image.png (146 KB)
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/               # 12 componentes Astro de UI
│   │   ├── About.astro           # 398 líneas
│   │   ├── Certifications.astro  # 158 líneas
│   │   ├── Contact.astro         # 185 líneas
│   │   ├── Experience.astro      # 235 líneas
│   │   ├── FAQ.astro             # 168 líneas
│   │   ├── Footer.astro          # 141 líneas
│   │   ├── Hero.astro            # 367 líneas
│   │   ├── Metrics.astro         # 295 líneas
│   │   ├── Navbar.astro          # 417 líneas
│   │   ├── Projects.astro        # 448 líneas
│   │   ├── Services.astro        # 267 líneas
│   │   └── SkillsMarquee.astro   # 43 líneas
│   ├── data/
│   │   ├── projects.ts           # Definición de interfaz e instancias de proyectos
│   │   └── translations.ts       # Diccionario bilingüe (ES / EN) y helper getTranslation
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout HTML raíz, head SEO, statusbar, scripts globales
│   ├── lib/
│   │   └── analytics.ts          # Módulo de telemetría ligera sin cookies
│   ├── pages/
│   │   ├── en/
│   │   │   └── projects/
│   │   │       └── [slug].astro  # Caso de estudio en inglés
│   │   ├── en.astro              # Home en inglés
│   │   ├── index.astro           # Home en español
│   │   ├── karen.astro           # Página privada personal (noindex, nofollow)
│   │   └── proyectos/
│   │       └── [slug].astro      # Caso de estudio en español
│   └── styles/
│       └── global.css            # Sistema de diseño con tokens CSS y fuentes locales
├── astro.config.mjs              # Configuración base de Astro
├── package.json                  # Dependencias y scripts
├── package-lock.json             # Árbol de dependencias bloqueado
├── vercel.json                   # Headers de seguridad, caching y cleanUrls
├── ATScv.md, CLAUDE.md, design.md, PORTFOLIO_STRATEGY.md, README.md
└── [ANOMALÍAS]: index.html (54KB), opcion.html (12KB), portfolio/
```

### 1.2 Auditoría de Anomalías en la Raíz

| Elemento detectado | Tamaño / Líneas | Rastreado en Git | Diagnóstico y Origen |
| :--- | :--- | :--- | :--- |
| `index.html` | 54,731 bytes (1,799 líneas) | **Sí** (commit `f6672cf`) | **Código muerto / Legacy:** Prototipo monolítico inicial antes de la migración a Astro. Documentado en `CLAUDE.md` línea 526: *"Se creó un concepto inicial en `index.html` monolítico. Después debe dividirse en componentes Astro."* Quedó congelado y desincronizado. Astro no lo utiliza en el build, pero genera confusión y riesgo de ser servido si cambia la configuración de despliegue. |
| `opcion.html` | 12,520 bytes (124 líneas) | **Sí** (commit `06c4e67`) | **Maqueta de diseño abandonada:** Contiene *"NikkoDev — 3 Propuestas Mint Super Innovadoras"* para comparar variantes de diseño en agosto de 2026. No forma parte de la aplicación Astro ni se enlaza desde ninguna parte. |
| `portfolio/` | Directorio (4 subdirs) | No (directorios vacíos) | **Scaffolding fallido:** Contiene `public/`, `src/data/`, `src/layouts/` completamente vacíos. Residuo de una reestructuración de carpetas previa. |
| `.vercel/` | 2 archivos (`project.json`) | No (en `.gitignore`) | **Configuración local válida:** Enlace del CLI de Vercel (`projectId`, `orgId`). Correctamente ignorado por Git. |

### 1.3 Modularidad, Reuso de Código y Acoplamiento

1. **Duplicación masiva entre `index.astro` y `en.astro`:**
   - En `src/pages/index.astro` (líneas 35–294) y `src/pages/en.astro` (líneas 38–270) existen **más de 250 líneas de JavaScript y CSS global idéntico copiado y pegado**:
     - Animación de contadores con interpolación cúbica `tween()`.
     - `IntersectionObserver` para scroll reveal escalonado (`stagger`).
     - Efecto de paralaje del panel hero sobre `mousemove` optimizado con `requestAnimationFrame`.
     - Efecto de escritura `typo-line`.
     - Indicador de capítulos en la barra de estado según el scroll.
   - *Impacto:* Rompe el principio DRY. Cualquier mejora o corrección de bugs en las interacciones debe duplicarse manualmente en ambas páginas. Debe encapsularse en un script cliente reutilizable (`src/scripts/interactions.ts` o componente común).

2. **Fragmentación y triplicación de datos de Proyectos:**
   - La información de los proyectos vive simultáneamente en 3 lugares con esquemas dispares:
     - `src/data/projects.ts`: Array con tipo `Project` (`slug`, `title`, `image`, `demo`, `repo`, `problem`, `work`, `result`, `stack`).
     - `src/components/Projects.astro`: Redefine localmente un array `projects` con `tab` (`SinPresupuesto.ts`, `FIBOG.tsx`, etc.), `id`, `code: null`.
     - `src/data/translations.ts`: Almacena copys adicionales divididos en claves como `projects.fibog.problem`, `projects.fibog.do`, `projects.fibog.stack`.
   - *Impacto:* Agregar un proyecto requiere sincronizar tres archivos manualmente. Debe centralizarse en `src/data/projects.ts` con soporte tipado para campos bilingües.

3. **Navegación rota en el cambio de idioma (`Navbar.astro`):**
   - En `src/components/Navbar.astro` (líneas 320–336), el listener del botón `langToggle` contiene:
     ```javascript
     setTimeout(() => {
       window.location.href = currentLang === 'es' ? '/en' : '/';
     }, 150);
     ```
   - Si un usuario está leyendo el caso de estudio `/proyectos/fibog` y hace clic en `EN`, el script lo redirige a la raíz `/en` en lugar de `/en/projects/fibog`.
   - *Solución requerida:* Detectar rutas de proyectos y alternar entre `/proyectos/[slug]` y `/en/projects/[slug]`.

4. **Inconsistencia de internacionalización en `Footer.astro`:**
   - `src/components/Footer.astro` no acepta la prop `lang` ni consume `getTranslation`.
   - La línea 22 muestra hardcodeado en español: `Técnica por dentro. Hermosa por fuera. Optimizada hasta el último byte.` incluso cuando se renderiza en la versión en inglés (`/en`).

5. **Caso especial: `src/pages/karen.astro`:**
   - Archivo de 577 líneas con estilos y scripts dedicados.
   - Es una página personal/afectiva privada ("para Karen").
   - Cuenta con `<meta name="robots" content="noindex, nofollow" />` y está excluida del menú y del `sitemap.xml`.
   - La preservación de esta página está explícitamente requerida por el historial de commits (`"karen intacta"`).

---

## 2. TypeScript y Calidad de Código

### 2.1 Estado de la Configuración TypeScript

- **`tsconfig.json` inexistente:** No hay ningún archivo de configuración de TypeScript en todo el proyecto.
- **Falta de dependencias de tipado en `package.json`:**
  - `typescript` no está instalado en `devDependencies`.
  - `@astrojs/check` no está instalado.
  - Al ejecutar `npx astro check`, el proceso se detiene requiriendo instalación interactiva:
    ```
    To continue, Astro requires the following dependency to be installed: @astrojs/check.
    Astro will run the following command: npm i @astrojs/check typescript
    ```
- **Sin scripts de verificación:** `package.json` solo define `"dev"`, `"build"` y `"preview"`. No existe script `"check"` ni `"lint"`.

### 2.2 Cobertura de Tipos y Análisis Estático

1. **`src/data/projects.ts`:**
   - Define interfaz `Project` bien tipada con propiedades opcionales (`repo?: string`).
   - `getProject(slug: string)` retorna `Project | undefined`, pero en las páginas de casos de estudio no se valida el valor `undefined` si el slug no coincide (aunque `getStaticPaths` mitiga esto en SSG).
2. **`src/data/translations.ts`:**
   - Define `type Lang = "es" | "en"`.
   - `export interface TranslationMap { [key: string]: { es: string; en: string }; }`
   - La función `getTranslation(key: string, lang: Lang): string` acepta `key: string` genérico. No aprovecha `keyof typeof t`. Si un desarrollador comete una errata en una clave de traducción, TypeScript no lo detecta en compilación y la UI muestra silenciosamente la clave cruda como texto.
3. **`src/lib/analytics.ts`:**
   - Código limpio y fuertemente tipado: define `interface AnalyticsEvent` con `props?: Record<string, string | number | boolean>`, extiende `Window` global para `__nikkoEvents`.

### 2.3 Bug Crítico de Interpolación de Variables en Scripts del Cliente

En `src/pages/proyectos/[slug].astro` (líneas 82–86) y `src/pages/en/projects/[slug].astro` (líneas 113–117):

```astro
<script>
  import { track } from "../../lib/analytics";
  // Vista de caso de estudio al montar
  track("case_view", { slug: "{project.slug}", lang: "{lang}" });
</script>
```

**Verificación en el bundle compilado (`dist/_astro/_slug_...js`):**
```javascript
import{t as e}from"./analytics.B5uTOCCa.js";e("case_view",{slug:"{project.slug}",lang:"{lang}"});
```
- **Causa:** En Astro, las etiquetas `<script>` estándar son procesadas por Vite como módulos del cliente y no tienen acceso a las variables del frontmatter del componente a menos que se use `define:vars={{ slug: project.slug, lang }}` o se lean de atributos HTML `dataset`.
- **Efecto:** Cada visita a un caso de estudio registra literalmente `"{project.slug}"` y `"{lang}"` en la telemetría en lugar del slug real (`fibog`, `sinpresupuesto`, etc.).

---

## 3. Estilos y Gestión de Activos

### 3.1 Framework y Arquitectura de Estilos

- **Ausencia de Tailwind CSS:** A pesar de que `CLAUDE.md` y el JSON-LD de `BaseLayout.astro` mencionan Tailwind, el proyecto **no utiliza Tailwind CSS ni `@astrojs/tailwind`**.
- **Sistema de diseño CSS Puro:** Todo el estilo está implementado mediante `src/styles/global.css` (902 líneas, 20 KB) y bloques `<style>` locales en componentes con `scopedStyleStrategy: "where"` (configurado en `astro.config.mjs`).
- **Tokens de Diseño y Glassmorphism:**
  - Tokens para fondos (`--bg: #F0FDF6`), superficies traslúcidas con `backdrop-filter: blur()`, radios y sombras.
  - Paleta con modo oscuro completo (`:root.dark`) con fondo `#040816` y acentos menta `#34D399`.
  - Inicialización sin parpadeo mediante script sincrónico en el `<head>` de `BaseLayout.astro` que lee `localStorage` y `prefers-color-scheme`.

### 3.2 Hallazgo de Accesibilidad y Contraste de Color (WCAG AA)

- En `src/styles/global.css`, líneas 62–68, se documentó explícitamente la regla de contraste:
  ```css
  /* Los tokens crudos (--green #10B981 = 2.43:1, --cyan #14B8A6 = 2.38:1) se quedan
     para rellenos, bordes y degradados; para TEXTO se usan estos. */
  --accent-text: #047857;
  ```
- Sin embargo, en `src/components/Contact.astro`:
  - Línea 83: `.section-label { color: var(--green, #00D084); }`
  - Línea 168: `.cmd-prompt { color: var(--green, #00D084); }`
- **Diagnóstico:** El uso de `--green` (`#10B981`) o el fallback `#00D084` sobre fondo claro `#F0FDF6` produce un ratio de contraste de **~2.4:1**, violando el criterio WCAG 2.1 AA (mínimo 4.5:1 para texto normal). Debe cambiarse a `var(--accent-text)`.

### 3.3 Gestión de Activos (Imágenes y Fuentes)

#### 3.3.1 Análisis de Fuentes Tipográficas
- Fuentes autoalojadas mediante `@fontsource-variable/inter` y `@fontsource-variable/jetbrains-mono`.
- En `dist/_astro/`, Astro extrae los subsets WOFF2 para latín, cirílico, griego y vietnamita (~300 KB en disco en total).
- Las fuentes se cargan vía CSS con `font-display: swap` implícito de Fontsource.

#### 3.3.2 Imágenes en `public/projects/` vs. Optimización Astro
El directorio `public/projects/` almacena 8 archivos JPG con un peso total de **1.4 MB**:

| Archivo | Tamaño | Estado de Uso en el Código | Diagnóstico |
| :--- | :--- | :--- | :--- |
| `autorreparacion.jpg` | **521 KB** | Activo (Proyecto Autorreparación) | **Crítico:** Imagen no optimizada entregada en bruto al cliente sin WebP/AVIF. |
| `fibog.jpg` | **311 KB** | Activo (Proyecto FIBOG) | **Alto:** Imagen muy pesada para móviles. |
| `sinpresupuesto.jpg` | **190 KB** | Activo (Proyecto SinPresupuesto) | Requiere compresión moderna. |
| `indusec.jpg` | **153 KB** | Activo (Proyecto InduSEC) | Requiere compresión moderna. |
| `piggy.jpg` | **103 KB** | **HUÉRFANO (0 referencias)** | Archivo no utilizado; peso muerto en despliegue. |
| `boombox.jpg` | **79 KB** | **HUÉRFANO (0 referencias)** | Archivo no utilizado; peso muerto en despliegue. |
| `kala-chat.jpg` | **29 KB** | **HUÉRFANO (0 referencias)** | Archivo no utilizado; peso muerto en despliegue. |
| `pawcare.jpg` | **26 KB** | **HUÉRFANO (0 referencias)** | Archivo no utilizado; peso muerto en despliegue. |

**Total de activos huérfanos:** 4 archivos (50% de las imágenes de proyectos) equivalentes a **~237 KB**.  
**Falta de integración con `astro:assets`:** Al residir en `public/`, los componentes usan etiquetas `<img src={project.image} />` nativas. No se aprovecha el pipeline de compilación de Astro para generar tamaños responsivos (`srcset`), compresión WebP/AVIF automática ni dimensiones automáticas contra Cumulative Layout Shift (CLS).

---

## 4. Dependencias y Seguridad

### 4.1 Inspección de `package.json`

```json
{
  "name": "nikkodev-portfolio",
  "type": "module",
  "version": "2.0.0",
  "description": "NikkoDev OS — Edge-First Full-Stack Portfolio",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@fontsource-variable/inter": "^5.3.0",
    "@fontsource-variable/jetbrains-mono": "^5.3.0",
    "astro": "^7.0.6"
  }
}
```

- **Observación:** Lista de dependencias extremadamente austera (lo cual es excelente para la superficie de ataque y velocidad), pero carece de dependencias de desarrollo esenciales (`typescript`, `@astrojs/check`).

### 4.2 Auditoría de Seguridad (`npm audit`)

Se ejecutó `npm audit` arrojando un total de **8 vulnerabilidades (1 crítica, 6 altas, 1 moderada)**:

```
# npm audit report

astro  <=7.2.7
Severity: critical
- Astro: Reflected XSS via unescaped View Transition animation properties (GHSA-4g3v-8h47-v7g6)
- Astro: Remote code execution through AVIF image optimization (GHSA-26w7-cxv4-gfx2)
- Astro: Authorization bypass from missing path-segment boundary check when stripping configured base (GHSA-376h-93r7-7g6f)

sharp  <0.35.4
Severity: high (Vulnerabilidades en libheif: GHSA-g89c-p67h-r497 y GHSA-2jg2-4ch7-h545)

svgo  4.0.0 - 4.0.2
Severity: high (SVGO removeScripts permite scripts ejecutables / XSS: GHSA-2p49-hgcm-8545, GHSA-w27v-7q3p-w38r, GHSA-4vpr-x523-8j87)

postcss  <=8.5.22
Severity: high (Path Traversal en Source Map Auto-Loading: GHSA-r28c-9q8g-f849, GHSA-fxqj-rqcc-2cmp)

nanoid  <=3.3.17
Severity: high (Generadores inseguros pueden ciclar indefinidamente: GHSA-28wg-ghj8-5hjv)

js-yaml  4.0.0 - 4.3.1
Severity: high (Consumo cuadrático de CPU / DoS: GHSA-5p4m-2wfm-xmqj, GHSA-2883-xcg3-v3hh)

smol-toml  <=1.7.0
Severity: high (Denegación de servicio por TOML malformado: GHSA-7w5x-hrqm-74c2)

devalue  <5.9.1
Severity: moderate (DoS vía input malformado: GHSA-9rgm-9g3h-6x36)
```

**Urgencia:** La versión instalada de Astro (`7.0.6`) expone el entorno a vulnerabilidades críticas conocidas. Actualizar Astro a la versión parcheada más reciente es de máxima prioridad.

### 4.3 Configuración de Infraestructura (`astro.config.mjs` y `vercel.json`)

#### `astro.config.mjs`
```javascript
export default defineConfig({
  site: "https://nikko.dev",
  compressHTML: true,
  scopedStyleStrategy: "where",
  build: {
    assets: "_astro",
    inlineStylesheets: "auto",
  },
});
```
- Configuración sólida y concisa. `compressHTML: true` y `scopedStyleStrategy: "where"` garantizan especificidad CSS baja y HTML compacto.
- *Oportunidad de mejora:* Agregar integración oficial `@astrojs/sitemap` para automatizar la regeneración del mapa del sitio.

#### `vercel.json`
- Implementa cabeceras HTTP de seguridad modernas:
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy`: Bien ajustado a `default-src 'self'`, `form-action 'self' https://wa.me`.
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Cache-Control` inmutable para `/_astro/*` (1 año).
- *Detalle detectado en Caching:* La regla para activos públicos:
  ```json
  {
    "source": "/(favicon.svg|og-image.svg|robots.txt|sitemap.xml)",
    "headers": [{ "key": "Cache-Control", "value": "public, max-age=86400" }]
  }
  ```
  Omite `og-image.png` (que pesa 146 KB). Como resultado, `og-image.png` recibe la regla genérica de 1 hora (`s-maxage=3600`) en lugar de caché de 24 horas.

---

## 5. Rendimiento en Tiempo de Compilación y Bundle

### 5.1 Ejecución de `npm run build`

Resultado de ejecución con `astro build`:
```
09:17:11 [types] Generated 208ms
09:17:11 [build] output: "static"
09:17:11 [build] mode: "static"
09:17:11 [build] directory: dist/
09:17:11 [build] Collecting build info...
09:17:11 [build] ✓ Completed in 249ms.
09:17:11 [build] Building static entrypoints...
09:17:12 [vite] ✓ built in 441ms
09:17:12 [vite] ✓ built in 40ms

 generating static routes 
09:17:12   ├─ /en/projects/fibog/index.html (+27ms) 
09:17:12   ├─ /en/projects/sinpresupuesto/index.html (+5ms) 
09:17:12   ├─ /en/projects/autorreparacion/index.html (+5ms) 
09:17:12   ├─ /en/projects/indusec/index.html (+5ms) 
09:17:12   ├─ /en/index.html (+12ms) 
09:17:12   ├─ /karen/index.html (+4ms) 
09:17:12   ├─ /proyectos/fibog/index.html (+5ms) 
09:17:12   ├─ /proyectos/sinpresupuesto/index.html (+4ms) 
09:17:12   ├─ /proyectos/autorreparacion/index.html (+5ms) 
09:17:12   ├─ /proyectos/indusec/index.html (+5ms) 
09:17:12   ├─ /index.html (+8ms) 
09:17:12 ✓ Completed in 118ms.

09:17:12 [build] ✓ Completed in 680ms.
09:17:12 [build] 11 page(s) built in 938ms
09:17:12 [build] Complete!
```

### 5.2 Análisis de Chunks en `dist/`

| Tipo de Recurso | Archivos Generados | Peso Total | Evaluación |
| :--- | :--- | :--- | :--- |
| **HTML** | 11 archivos (`index.html`, `/en`, casos de estudio, etc.) | ~150 KB | Excelente compresión y tiempo de generación (118 ms). |
| **JavaScript** | `analytics.*.js` (348 B), `BaseLayout.*.js` (1.5 KB), `Navbar.*.js` (2.1 KB), `_slug_.*.js` (97 B x2) | **< 5 KB** | **Excepcional.** Prácticamente nula carga de ejecución en el hilo principal del navegador. |
| **CSS** | `Contact.*.css` (31 KB), `Footer.*.css` (28 KB), `karen.*.css` (5.5 KB) | ~64.5 KB | Muy eficiente; combina CSS global y estilos de componentes. |
| **Fuentes (WOFF2)** | 12 variantes de Inter y JetBrains Mono | ~300 KB | Local, sin llamadas externas a Google Fonts (excepto en `karen.astro`). |
| **Imágenes Públicas** | 8 JPGs + OpenGraph PNG/SVG | ~1.6 MB | **Área de mejora principal:** No pasan por compresión en el build. |

---

## 6. Clasificación de Hallazgos por Severidad

### 6.1 Fortalezas Técnicas Destacadas

1. **Arquitectura SSG Pura con Cero Runtime JS Pesado:** El proyecto no traslada el costo de librerías de UI (React/Vue) al usuario final. La totalidad del JavaScript de cliente pesa menos de 5 KB.
2. **Abandono exitoso de dependencias pesadas de animación:** Se reemplazó GSAP por funciones nativas `requestAnimationFrame` y curvas cúbicas CSS (`cubic-bezier`), reduciendo drásticamente el bundle y la complejidad.
3. **SEO Técnico y Metadatos de Primer Nivel:** Grafo completo Schema.org JSON-LD, metadatos OpenGraph/Twitter bilingües y soporte nativo de `hreflang` y `canonicalUrl`.
4. **Respeto a la Privacidad y Directrices Modernas:** Módulo de analítica (`src/lib/analytics.ts`) sin cookies, sin almacenamiento de identificadores personales y con envío mediante `fetch(..., { keepalive: true })`.
5. **Prevención de FOUC en Modo Oscuro/Claro:** Ejecución inline sincrónica previa al render que previene destellos de tema y respeta preferencias del sistema operativo.

---

### 6.2 Matriz de Hallazgos

| ID | Hallazgo | Severidad | Ubicación | Impacto |
| :--- | :--- | :--- | :--- | :--- |
| **SEC-01** | 8 Vulnerabilidades en dependencias (1 Crítica RCE/XSS en Astro `<=7.2.7`) | **Crítico** | `package.json`, `package-lock.json` | Exposición a ejecución remota de código en AVIF y XSS reflejado en transiciones de vista. |
| **TYP-01** | `tsconfig.json` ausente y dependencias `@astrojs/check` / `typescript` no instaladas | **Crítico** | Raíz del proyecto | Imposibilidad de ejecutar type-checking estático (`astro check` falla). Falta de control estricto de tipos. |
| **BUG-01** | Interpolación rota de variables en analítica de casos de estudio | **Alto** | `src/pages/proyectos/[slug].astro:85`, `src/pages/en/projects/[slug].astro:116` | Las visitas a proyectos registran literalmente `"{project.slug}"` en la telemetría en lugar del slug real. |
| **ARC-01** | Archivos legacy y huérfanos en la raíz (`index.html` de 54KB, `opcion.html` de 12KB, carpeta `portfolio/`) | **Alto** | Raíz del proyecto (`index.html`, `opcion.html`, `portfolio/`) | Código muerto rastreado en Git que genera confusión, desincronización y riesgo de despliegue erróneo. |
| **AST-01** | Activos pesados y huérfanos en `public/projects/` eludiendo optimización de Astro | **Alto** | `public/projects/` | 237 KB en 4 imágenes huérfanas; 521 KB en una sola imagen JPG sin compresión WebP/AVIF. |
| **MOD-01** | Duplicación masiva de lógica entre `index.astro` y `en.astro` (~250 líneas) | **Medio** | `src/pages/index.astro`, `src/pages/en.astro` | Violación del principio DRY; dificultad para mantener y corregir scripts de interacción. |
| **NAV-01** | Selector de idioma desvía a la raíz en páginas de casos de estudio | **Medio** | `src/components/Navbar.astro:334` | Mal flujo de usuario: al cambiar de idioma en `/proyectos/fibog` se envía a `/en` en vez de `/en/projects/fibog`. |
| **DAT-01** | Fragmentación y duplicación de datos de proyectos en 3 archivos distintos | **Medio** | `src/data/projects.ts`, `src/data/translations.ts`, `src/components/Projects.astro` | Alto acoplamiento; mantener proyectos requiere editar 3 archivos independientes. |
| **SEO-01** | `sitemap.xml` estático manual en vez de integración `@astrojs/sitemap` | **Medio** | `public/sitemap.xml`, `astro.config.mjs` | Riesgo de desactualización del sitemap cuando se agreguen o modifiquen rutas y proyectos. |
| **I18N-01** | Falta de internacionalización en `Footer.astro` | **Medio** | `src/components/Footer.astro:22` | El mantra del footer se muestra siempre en español en la versión en inglés. |
| **A11Y-01** | Ratio de contraste insuficiente en etiquetas de `Contact.astro` (WCAG AA) | **Bajo** | `src/components/Contact.astro:83,168` | Ratio ~2.4:1 sobre fondo claro violando el estándar de accesibilidad para texto. |
| **DAT-02** | Repetición manual de elementos en `SkillsMarquee.astro` | **Bajo** | `src/components/SkillsMarquee.astro:3-40` | Duplicación manual de 19 etiquetas en el HTML en vez de iterar sobre una lista de datos. |
| **TYP-02** | Tipado laxo en `getTranslation` (`key: string`) | **Bajo** | `src/data/translations.ts:238` | Falta de autocompletado y validación en tiempo de compilación para claves de traducción. |
| **CFG-01** | Caché subóptima para `og-image.png` en `vercel.json` | **Bajo** | `vercel.json:22` | Imagen de 146 KB excluida de la regla de caché de 24 horas. |

---

## 7. Plan de Acción Técnico y Recomendaciones

### Fase 1: Remediaciones Críticas y de Seguridad (Inmediatas)

1. **Actualizar dependencias y mitigar vulnerabilidades:**
   - Ejecutar actualización de Astro a la versión `>=7.2.8` (o la versión parcheada más reciente) para resolver el RCE en AVIF (`GHSA-26w7-cxv4-gfx2`) y el XSS reflejado.
   - Ejecutar `npm audit fix` para actualizar submódulos vulnerables (`sharp`, `svgo`, `postcss`, `nanoid`, `js-yaml`).
2. **Configurar TypeScript y Type-Checking:**
   - Crear `tsconfig.json` en la raíz del proyecto extendiendo la configuración recomendada de Astro:
     ```json
     {
       "extends": "astro/tsconfigs/strict",
       "compilerOptions": {
         "strictNullChecks": true,
         "baseUrl": ".",
         "paths": {
           "@/*": ["src/*"]
         }
       }
     }
     ```
   - Instalar `@astrojs/check` y `typescript` como `devDependencies`.
   - Agregar script en `package.json`: `"check": "astro check"`.
3. **Corregir el bug de analítica en casos de estudio:**
   - En `src/pages/proyectos/[slug].astro` y `src/pages/en/projects/[slug].astro`, inyectar las variables vía `define:vars`:
     ```astro
     <script define:vars={{ slug: project.slug, lang }}>
       import { track } from "../../lib/analytics";
       track("case_view", { slug, lang });
     </script>
     ```
     *O bien* utilizar un atributo `data-slug={project.slug}` en el `<main>` y leerlo desde el script del cliente.

### Fase 2: Limpieza de Deuda Técnica y Estructura (Corto Plazo)

1. **Eliminar archivos huérfanos de la raíz:**
   - Eliminar de Git y del disco: `index.html`, `opcion.html` y la carpeta vacía `portfolio/`.
   - Garantizar que el único punto de entrada sea `src/pages/index.astro`.
2. **Migrar imágenes a `src/assets/` y depurar archivos huérfanos:**
   - Eliminar los 4 JPGs huérfanos en `public/projects/` (`boombox.jpg`, `kala-chat.jpg`, `pawcare.jpg`, `piggy.jpg`), ahorrando 237 KB.
   - Mover las imágenes activas a `src/assets/projects/` y consumirlas mediante el componente `<Image />` de Astro para generar formatos AVIF/WebP automáticos y responsive srcset.
3. **Modularizar scripts de interacción:**
   - Extraer las ~250 líneas comunes entre `index.astro` y `en.astro` a un script modular (ej. `src/scripts/page-interactions.ts`) e importarlo en ambas páginas.

### Fase 3: Mejoras de UX, Accesibilidad y Automatización (Medio Plazo)

1. **Mejorar el selector de idioma en `Navbar.astro`:**
   - Actualizar el script de cambio de idioma para reconocer patrones de URL `/proyectos/[slug]` y dirigir a `/en/projects/[slug]` (y viceversa) en lugar de enviar siempre a `/` o `/en`.
2. **Corregir contraste en `Contact.astro`:**
   - Reemplazar `color: var(--green, #00D084)` por `color: var(--accent-text)` en `.section-label` y `.cmd-prompt`.
3. **Automatizar Sitemap:**
   - Instalar `@astrojs/sitemap` y registrarlo en `astro.config.mjs`, eliminando la necesidad de mantener `public/sitemap.xml` manualmente.
4. **Tipar estrictamente `getTranslation`:**
   - Tipar la clave como `key: keyof typeof t` en `src/data/translations.ts` para habilitar autocompletado y validación de errores en tiempo de compilación.
5. **Ajustar caché en `vercel.json`:**
   - Incluir `og-image.png` en la regla de caché de 24 horas.
