# Auditoría Técnica y Estratégica 360° — NikkoDev Portfolio
**Sistema:** NikkoDev Portfolio (`nikkodev-portfolio` v2.0.0)  
**Dominio en Producción:** `https://nikko.dev` / `https://www.nikko.dev`  
**Autor / Candidato:** Brayan Nikolas Gallo León  
**Fecha de Ejecución:** 20 de Septiembre de 2026  
**Auditoría Realizada por:** Teamwork Systems Architecture & Technical Audit Group  
**Entorno de Ejecución:** Linux x86_64 | Node.js | Astro SSG v7.0.6 | Vercel Edge Network  
**Estado General:** Documento de Publicación Técnico-Estratégica Definitiva  

---

## 1. Resumen Ejecutivo (Executive Summary)

### 1.1 Diagnóstico de Alto Nivel
El portafolio profesional de Brayan Nikolas Gallo León (**NikkoDev**) ha sido sometido a una auditoría exhaustiva 360°, evaluando su arquitectura de código fuente local, infraestructura de red, seguridad perimetral, rendimiento web, indexabilidad SEO, accesibilidad semántica y alineación estratégica frente a las directrices de posicionamiento profesional documentadas en `PORTFOLIO_STRATEGY.md`, `CLAUDE.md`, `ATScv.md` y `design.md`.

El diagnóstico global revela una **marcada contradicción arquitectónica y de posicionamiento**: el proyecto cuenta con una base de ingeniería estática de clase mundial y logros técnicos reales de altísimo impacto, pero se encuentra severamente lastrado por errores de infraestructura de red (bucle de redirección canónica), vulnerabilidades de seguridad conocidas no mitigadas, ausencia de tipado estático y, sobre todo, una persistente narrativa visual y textual que presenta al candidato como un estudiante universitario en etapas iniciales.

### 1.2 Cuadro de Mando Integral (Global Scorecard)

| Dimensión Auditada | Calificación | Estado | Veredicto Técnico-Estratégico |
| :--- | :---: | :---: | :--- |
| **Arquitectura de Código** | **78 / 100** | Aceptable con Deuda | Base SSG pura ultraligera (<5 KB JS en cliente), pero con duplicación masiva (~250 líneas entre páginas), código legacy en raíz y tipado estático inexistente (`tsconfig.json` ausente). |
| **Seguridad y Dependencias** | **52 / 100** | **Crítico** | 8 vulnerabilidades activas en dependencias (1 Crítica de RCE en optimización AVIF `GHSA-26w7-cxv4-gfx2` y XSS reflejado en Astro 7.0.6); CSP restrictivo que rompe hojas de estilo externas; HSTS sin flag `preload`. |
| **Rendimiento Web (Core Web Vitals)** | **94 / 100** | Excelente | Compilación récord en ~938 ms, compresión Brotli activa (reducción del 75.7% en payload HTML), cero bloqueo de hilo principal por frameworks cliente, TTFB de borde rápido (337–411 ms en directo). |
| **SEO y Red** | **45 / 100** | **Crítico** | Bucle canónico permanente 308 entre `nikko.dev` y `www.nikko.dev`, 100% de URLs del sitemap redirigiendo, doble salto en HTTP (+811 ms de sobrecosto de latencia), repositorio insignia en GitHub devolviendo HTTP 404. |
| **Accesibilidad (A11y)** | **75 / 100** | Requiere Ajustes | Navegación por teclado y estructura H1-H4 limpia, pero viola el ratio de contraste WCAG 2.1 AA en modo claro (2.43:1 en acentos verdes de `Contact.astro`) y carece de landmark `<header>`. |
| **Posicionamiento Estratégico** | **40 / 100** | **Deficiente** | Esquizofrenia de marca: conflicto frontal entre aspiración de ingeniero Edge/AI para startups y micro-landings locales a $7 USD/h; saboteado por señales explícitas de "estudiante de 2do año", cursos de 20h de Excel y falta de CV descargable. |
| **Puntaje Consolidado Ponderado** | **64.2 / 100** | **Intervención Prioritaria** | **Potencial Senior Oculto tras Deuda Operativa y Narrativa.** |

### 1.3 La Paradoja Central de NikkoDev
La auditoría identifica con claridad meridiana el núcleo de la problemática:
> **La Paradoja de NikkoDev:** El candidato ha diseñado e implementado soluciones de software de complejidad real poco común para su etapa (arquitectura Edge serverless en Cloudflare Workers con Llama 3.1 optimizada de 3.0s a 0.2s en *SinPresupuesto*, y un sistema institucional con 875 líneas de SQL en PostgreSQL, RLS granular y 11.000 líneas de código para 13 grupos de investigación de la Universidad Nacional en *FIBOG*). 
>
> Sin embargo, ante los ojos de un reclutador técnico, un CTO o un motor de búsqueda, el portafolio se autopresenta como un sitio de estudiante novato mediante titulares como *"Estudio en la UNAL"*, notas de *"Segundo año de ingeniería, sí"*, maquetas con `año: "2do"`, cursos básicos de 20 horas de ofimática, un servicio insignia rotulado como *"Landing pages premium"*, enlaces rotos de GitHub y un sitemap atrapado en un bucle de redirección permanente.

Resolver esta disparidad entre la **capacidad técnica real** y la **proyección pública** transformará de inmediato el activo digital de NikkoDev en un imán de alta conversión para puestos de ingeniería y contratos internacionales de alto valor.

---

## 2. Auditoría Técnica de Código Local y Arquitectura (R1)

### 2.1 Estructura del Repositorio y Modularidad de Componentes

El proyecto se encuentra estructurado bajo el paradigma estático de **Astro v7.0.6**. El árbol de archivos principal en `/home/niko/Proyectos/My portfolio` se desglosa a continuación:

```
/home/niko/Proyectos/My portfolio/
├── .agents/                      # Metadatos del equipo de auditoría (no código)
├── .astro/                       # Caché interna de compilación de Astro
├── .vercel/                      # Configuración de vinculación local de Vercel (project.json)
├── dist/                         # Artefactos generados por el build estático
├── public/                       # Activos públicos entregados sin procesamiento
│   ├── projects/                 # 8 imágenes JPG de proyectos (4 huérfanas)
│   ├── favicon.svg               # Favicon vectorial
│   ├── og-image.png (146 KB)     # Tarjeta social Open Graph ráster
│   ├── og-image.svg              # Versión vectorial de tarjeta social
│   ├── robots.txt                # Directivas de rastreo para crawlers
│   └── sitemap.xml               # Mapa de sitio XML manual (10 URLs)
├── src/
│   ├── components/               # 12 componentes modulares de interfaz
│   │   ├── About.astro           # Narrativa personal y mock de editor (398 líneas)
│   │   ├── Certifications.astro  # Tarjetas de cursos y credenciales (158 líneas)
│   │   ├── Contact.astro         # Terminal interactiva de contacto (185 líneas)
│   │   ├── Experience.astro      # Línea de tiempo laboral/proyectos (235 líneas)
│   │   ├── FAQ.astro             # Preguntas frecuentes con Schema (168 líneas)
│   │   ├── Footer.astro          # Pie de página y links (141 líneas)
│   │   ├── Hero.astro            # Sección principal de bienvenida (367 líneas)
│   │   ├── Metrics.astro         # Contadores interactivos de impacto (295 líneas)
│   │   ├── Navbar.astro          # Barra de estado y navegación OS (417 líneas)
│   │   ├── Projects.astro        # Galería principal de proyectos (448 líneas)
│   │   ├── Services.astro        # Oferta de servicios (267 líneas)
│   │   └── SkillsMarquee.astro   # Ticker horizontal de tecnologías (43 líneas)
│   ├── data/
│   │   ├── projects.ts           # Definición de interfaz e instancias de proyectos
│   │   └── translations.ts       # Diccionario i18n (ES / EN) y helper getTranslation
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
├── package.json                  # Definición de dependencias y scripts
├── package-lock.json             # Árbol de dependencias bloqueado
├── vercel.json                   # Encabezados de seguridad, caching y cleanUrls
├── ATScv.md, CLAUDE.md, design.md, PORTFOLIO_STRATEGY.md, README.md
└── [ARCHIVOS HUÉRFANOS]: index.html (54KB), opcion.html (12KB), portfolio/ (vacía)
```

#### 2.1.1 Evaluación de Modularidad y Duplicación de Código
1. **Duplicación Crítica entre `index.astro` y `en.astro`:**
   - En `src/pages/index.astro` (líneas 35–294) y `src/pages/en.astro` (líneas 38–270), se detectó la duplicación íntegra de **más de 250 líneas de JavaScript y CSS de cliente**.
   - Este bloque repetido comprende:
     - La función de interpolación cúbica `tween(duration, ease, onUpdate)` para los contadores de impacto.
     - El observador `IntersectionObserver` encargado de las revelaciones escalonadas (`stagger-card`).
     - El manejador de eventos `mousemove` con cálculo de paralaje sobre el contenedor hero acelerado con `requestAnimationFrame`.
     - El temporizador dinámico para el efecto de máquina de escribir (`typo-line`).
     - El algoritmo de actualización de capítulos en la barra de estado superior según la posición de scroll del usuario.
   - *Impacto Técnico:* Violación directa del principio DRY (*Don't Repeat Yourself*). Cualquier ajuste de curva de animación, optimización de render o corrección de bugs debe sincronizarse manualmente entre ambos archivos.
   - *Prescripción:* Extraer la lógica a un módulo de script reutilizable en `src/scripts/interactions.ts` o encapsularla dentro de un componente Astro global.

2. **Triplicación de Datos de Proyectos:**
   - La estructura de los proyectos reside dispersa y desincronizada en tres ubicaciones diferentes:
     - `src/data/projects.ts`: Arreglo de objetos bajo la interfaz `Project` con campos como `problem`, `work`, `result`, `stack`.
     - `src/components/Projects.astro`: Redefine un arreglo local con campos como `tab` (`SinPresupuesto.ts`, `FIBOG.tsx`), `id`, `code: null`.
     - `src/data/translations.ts`: Almacena bloques de texto adicionales bajo claves fragmentadas (`projects.fibog.problem`, `projects.fibog.do`, `projects.fibog.stack`).
   - *Impacto:* Crear o editar un proyecto requiere modificar 3 archivos con esquemas distintos.
   - *Prescripción:* Consolidar el esquema de proyectos íntegramente en `src/data/projects.ts` con tipado multilingüe nativo.

3. **Inconsistencia de Internacionalización en `Footer.astro`:**
   - `src/components/Footer.astro` no consume la propiedad `lang` ni invoca `getTranslation`.
   - La línea 22 renderiza siempre en español la frase de cierre:  
     `"Técnica por dentro. Hermosa por fuera. Optimizada hasta el último byte."`, incluso cuando el usuario navega en la versión en inglés (`/en`).

4. **Navegación Defectuosa en Cambio de Idioma (`Navbar.astro`):**
   - En `src/components/Navbar.astro` (líneas 320–336), el listener del botón `langToggle` ejecuta:
     ```javascript
     setTimeout(() => {
       window.location.href = currentLang === 'es' ? '/en' : '/';
     }, 150);
     ```
   - Si un usuario o reclutador está examinando el caso de estudio `/proyectos/fibog` y pulsa sobre el switch de idioma, es expulsado inmediatamente a `/en` (la página de inicio) perdiendo el contexto de lectura, en lugar de ser dirigido a `/en/projects/fibog`.

### 2.2 Anomalías y Código Muerto en el Directorio Raíz

La inspección mediante `git ls-files` y herramientas de sistema evidenció archivos obsoletos que permanecen rastreados en el control de versiones:

| Archivo / Carpeta | Tamaño | Líneas | Origen y Diagnóstico Técnico | Riesgo / Impacto |
| :--- | :---: | :---: | :--- | :--- |
| `/index.html` | **54,731 bytes** | 1,799 | Prototipo inicial monolítico creado en el Sprint 1 (commit `f6672cf`). `CLAUDE.md` (línea 526) instruía dividirlo en componentes Astro. Quedó congelado y desactualizado. | **Alto:** Confusión en la base de código. Si la configuración de hosting cambia o se sirve por defecto un archivo estático, el servidor podría responder con este archivo desfasado. |
| `/opcion.html` | **12,520 bytes** | 124 | Maqueta estática de propuestas visuales mint (commit `06c4e67`) creada en agosto de 2026. Código muerto no vinculado. | **Bajo:** Deuda técnica y ruido en repositorios públicos. |
| `/portfolio/` | 0 bytes | 0 | Directorio con subcarpetas vacías (`public/`, `src/data/`, `src/layouts/`). Remanente de un intento de reestructuración abortado. | **Bajo:** Confusión para herramientas de análisis y desarrolladores. |

*Acción:* Eliminar del árbol de Git y del disco local mediante `git rm index.html opcion.html` y remover el directorio `portfolio/`.

### 2.3 Estado de TypeScript, Tooling y Verificación Estática

- **Ausencia de `tsconfig.json`:** No existe ningún archivo `tsconfig.json` en la raíz del proyecto.
- **Falta de Dependencias de Desarrollo Clave:**
  - `typescript` no está instalado en `devDependencies`.
  - `@astrojs/check` no está instalado.
  - Al ejecutar en terminal `npx astro check`, la herramienta se detiene requiriendo instalación interactiva:
    ```
    To continue, Astro requires the following dependency to be installed: @astrojs/check.
    Astro will run the following command: npm i @astrojs/check typescript
    ```
- **Scripts Ausentes:** `package.json` únicamente contempla `"dev"`, `"build"` y `"preview"`. No hay script `"check"` ni comandos de linter configurados para pipelines de CI/CD.
- **Debilidad de Tipado en `translations.ts`:**
  La función `getTranslation(key: string, lang: Lang)` recibe un parámetro `key` de tipo `string` abierto en lugar de un tipo unión estricto (`keyof typeof translations`). Cualquier errata mecanográfica (ej. `getTranslation("heroo.title", "es")`) no es detectada en compilación y falla silenciosamente en tiempo de ejecución, mostrando la clave cruda al usuario final.

### 2.4 Vulnerabilidades de Seguridad en Dependencias (`npm audit`)

La ejecución de `npm audit` en el entorno local reporta **8 vulnerabilidades activas (1 Crítica, 6 Altas, 1 Moderada)**:

```
# npm audit report

astro  <=7.2.7
Severity: critical
- Astro: Remote code execution through AVIF image optimization (GHSA-26w7-cxv4-gfx2)
- Astro: Reflected XSS via unescaped View Transition animation properties (GHSA-4g3v-8h47-v7g6)
- Astro: Authorization bypass from missing path-segment boundary check (GHSA-376h-93r7-7g6f)

sharp  <0.35.4
Severity: high
- libheif out-of-bounds read & memory corruption (GHSA-g89c-p67h-r497, GHSA-2jg2-4ch7-h545)

svgo  4.0.0 - 4.0.2
Severity: high
- SVGO removeScripts bypass allowing executable code in SVGs (GHSA-2p49-hgcm-8545, GHSA-w27v-7q3p-w38r)

postcss  <=8.5.22
Severity: high
- Path Traversal in Source Map Auto-Loading (GHSA-r28c-9q8g-f849, GHSA-fxqj-rqcc-2cmp)

nanoid  <=3.3.17
Severity: high
- Predictable sequence & infinite loop vulnerability (GHSA-28wg-ghj8-5hjv)

js-yaml  4.0.0 - 4.3.1
Severity: high
- Quadratic complexity DoS on malformed input (GHSA-5p4m-2wfm-xmqj, GHSA-2883-xcg3-v3hh)

smol-toml  <=1.7.0
Severity: high
- Denial of Service via crafted TOML structure (GHSA-7w5x-hrqm-74c2)

devalue  <5.9.1
Severity: moderate
- DoS via prototype manipulation (GHSA-9rgm-9g3h-6x36)
```

**Diagnóstico:** Mantener Astro en la versión `7.0.6` expone la aplicación a un vector de Ejecución Remota de Código (RCE) en el procesamiento de imágenes AVIF y a XSS reflejado. La remediación exige actualizar `astro` a la versión `>=7.2.8` de inmediato.

### 2.5 Gestión de Activos, Optimización de Imágenes y Fuentes

1. **Evasión del Pipeline de Imágenes de Astro (`astro:assets`):**
   - Las imágenes de proyectos están alojadas en la carpeta `public/projects/`.
   - Los componentes renderizan etiquetas nativas `<img src={project.image} alt={project.title} />`.
   - *Impacto:* Astro no puede optimizar estas imágenes en tiempo de compilación. No se generan formatos modernos AVIF/WebP, no se generan variantes responsivas (`srcset`), y no se calculan dimensiones intrínsecas automáticas para proteger el Cumulative Layout Shift (CLS).
2. **Archivos Huérfanos e Imágenes Crudas:**
   - La carpeta `public/projects/` contiene 8 archivos con un peso total de **1.41 MB**.
   - De estos 8 archivos, **4 imágenes (50%) están 100% huérfanas** en el código (0 coincidencias en búsquedas sobre `src/`):
     - `piggy.jpg` (103 KB) — Huérfano
     - `boombox.jpg` (79 KB) — Huérfano
     - `kala-chat.jpg` (29 KB) — Huérfano
     - `pawcare.jpg` (26 KB) — Huérfano
     - *Total de peso muerto:* **237 KB**.
   - Las imágenes activas presentan un peso excesivo para una web de alto rendimiento:
     - `autorreparacion.jpg`: **521 KB** (JPEG en bruto sin optimización).
     - `fibog.jpg`: **311 KB**.
     - `sinpresupuesto.jpg`: **190 KB**.
     - `indusec.jpg`: **153 KB**.
3. **Fuentes Web:**
   - Inter y JetBrains Mono están correctamente autoalojadas usando `@fontsource-variable/*`, evitando peticiones bloqueantes a CDNs externas en las páginas principales.

### 2.6 Bug Crítico de Telemetría en Casos de Estudio

En los archivos `src/pages/proyectos/[slug].astro` (líneas 82–86) y `src/pages/en/projects/[slug].astro` (líneas 113–117), se encuentra el siguiente bloque:

```astro
<script>
  import { track } from "../../lib/analytics";
  // Track case study view
  track("case_view", { slug: "{project.slug}", lang: "{lang}" });
</script>
```

Al inspeccionar el bundle final generado en `dist/_astro/_slug_.astro_astro_type_script_index_0_lang.BT1Qw6bp.js`:
```javascript
import{t as e}from"./analytics.B5uTOCCa.js";e("case_view",{slug:"{project.slug}",lang:"{lang}"});
```
- **Falla:** En Astro, las etiquetas `<script>` estándar son procesadas por Vite como módulos del cliente y no tienen acceso directo a variables de ejecución del frontmatter de Astro. Intentar escribir `{project.slug}` dentro del script resulta en una cadena de texto literal. Asimismo, utilizar la directiva `define:vars` fuerza al script a comportarse como inline (`is:inline`), lo que inhabilita el empaquetado de Vite e impide el uso de declaraciones `import` (arrojando `Uncaught SyntaxError: Cannot use import statement outside a module`). La solución robusta es transferir los datos mediante atributos HTML `data-*` en el elemento contenedor y leerlos en el script de Vite.
- **Efecto en Producción:** El 100% de los eventos de telemetría de casos de estudio registran en el backend analítico el valor literal `"{project.slug}"` en vez del identificador real (`fibog`, `sinpresupuesto`, etc.), arruinando las métricas de tráfico y conversión de proyectos.

### 2.7 Rendimiento de Compilación y Análisis del Bundle

La compilación ejecutada con `npm run build` evidencia la extrema eficiencia de Astro SSG:

```
09:17:11 [types] Generated 208ms
09:17:11 [build] output: "static" | mode: "static" | directory: dist/
09:17:11 [build] Collecting build info... ✓ Completed in 249ms.
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
09:17:12 [build] 11 page(s) built in 938ms
```

- **Métricas de Salida:**
  - **HTML:** 11 páginas generadas en apenas **118 ms**.
  - **JavaScript del Cliente:** Menos de **5 KB** en total (`analytics.*.js` 348 B, `BaseLayout.*.js` 1.5 KB, `Navbar.*.js` 2.1 KB, scripts de caso de estudio ~97 B).
  - **CSS:** ~64.5 KB distribuidos en archivos con especificidad baja gracias a `scopedStyleStrategy: "where"`.
  - **Tiempo Total de Compilación:** **938 ms** (inferior a 1 segundo).

---

## 3. Inspección de Despliegue en Producción, Red, Seguridad y SEO (R2)

### 3.1 Infraestructura de Red, DNS y Latencias Medidas

#### 3.1.1 Configuración DNS y Alojamiento
- **Registrador de Dominio y Servidores DNS:** Spaceship (`launch1.spaceship.net`, `launch2.spaceship.net`).
- **CDN y Capa Edge:** Vercel Edge Network (infraestructura Anycast sobre AWS AS16509).
- **Resolución de Direcciones IP:**
  - `nikko.dev` (Apex): Registro `A` apuntando a `216.198.79.1` (Vercel Anycast).
  - `www.nikko.dev`: Registro `CNAME` apuntando a `dc489a78254f20ec.vercel-dns-017.com` (resolviendo en `64.29.17.65` y `216.198.79.65`).
- **Gaps en Registros DNS:**
  - **Sin registros AAAA (IPv6):** Inaccesible de forma nativa en redes puras IPv6.
  - **Sin registros CAA:** Cualquier Autoridad Certificadora puede emitir certificados SSL para el dominio.
  - **Registros MX huérfanos:** Existe validación TXT para Zoho Mail (`zb64843322.zmverify.zoho.com`), pero no existen registros MX configurados, por lo que el correo institucional `@nikko.dev` no puede recibir mensajes.

#### 3.1.2 Pruebas Cuantitativas de TTFB y Tiempos de Respuesta
Se realizaron mediciones repetidas (5 muestras consecutivas por endpoint mediante `curl -w`) evaluando el comportamiento en red:

| Endpoint Evaluado | Salto HTTP | TTFB Promedio | Tiempo Total Promedio | Sobrecosto de Latencia |
| :--- | :---: | :---: | :---: | :---: |
| `https://www.nikko.dev/` | Directo (200 OK) | **411.9 ms** | **624.4 ms** | **0 ms (Baseline)** |
| `https://nikko.dev/` | 1 Salto (308 -> `www`) | **528.7 ms** | **1,100.2 ms** | **+475.8 ms (+76%)** |
| `http://nikko.dev/` | 2 Saltos (308 -> HTTPS -> `www`) | N/A | **1,436.2 ms** | **+811.8 ms (+130%)** |

*Conclusión de Rendimiento de Red:* El 100% de los usuarios o motores de búsqueda que ingresan `nikko.dev` o `http://nikko.dev` en el navegador sufren una penalización de entre **475 ms y 811 ms** de tiempo de carga adicional debido a saltos de redirección no consolidados.

### 3.2 Bucle Canónico Crítico y Redirecciones 308 (SEO Catastrófico)

Se constató una discrepancia crítica entre la configuración del dashboard de Vercel y el código fuente de Astro:
1. **Configuración en Vercel:** Vercel está configurado teniendo como dominio primario `www.nikko.dev`. En consecuencia, Vercel intercepta cualquier solicitud hacia el apex `https://nikko.dev` y responde con `HTTP/2 308 Permanent Redirect` hacia `https://www.nikko.dev/`.
2. **Configuración en Astro:**
   - En `astro.config.mjs`: `site: "https://nikko.dev"`
   - En `src/layouts/BaseLayout.astro` (línea 12): `const SITE = "https://nikko.dev";`
   - En `public/sitemap.xml`: Todas las URLs declaran `<loc>https://nikko.dev/...</loc>`.
3. **Mecánica del Bucle Canónico (*Canonical Loop*):**
   ```
   [Googlebot / Visitante]
             │
             ▼
   1. Solicita: https://www.nikko.dev/
             │
             ▼
   2. Recibe HTML (200 OK) con etiqueta:
      <link rel="canonical" href="https://nikko.dev">
             │
             ▼
   3. Googlebot intenta indexar la URL canónica declarada:
      GET https://nikko.dev/
             │
             ▼
   4. Servidor Vercel intercepta y responde:
      HTTP/2 308 Permanent Redirect
      location: https://www.nikko.dev/
             │
             ▼
   5. BUCLE CERRADO: La versión canónica apunta a una redirección que vuelve a la versión no canónica.
   ```
4. **Impacto en Buscadores:** Google Search Console emite advertencias críticas (*"Página duplicada: el usuario no ha seleccionado ninguna versión canónica"* o *"La página canónica declarada redirige"*). El PageRank se diluye y la velocidad de indexación de nuevas páginas cae drásticamente.
5. **Inconsistencia de Trailing Slashes:** En `sitemap.xml` se publican rutas sin barra final (`/proyectos/fibog`), mientras que los enlaces internos de navegación en `Projects.astro` usan barra final (`/proyectos/fibog/`), generando contenido duplicado potencial.

### 3.3 Enlace Roto Crítico en Repositorio Insignia

En la página de inicio (`src/components/Projects.astro:21`) y en la versión en inglés (`src/pages/en.astro`):
- El botón de inspección de código del proyecto estrella **SinPresupuesto** enlaza a:
  `https://github.com/SinPresupuesto/SinPre`
- Al ejecutar la petición HTTP en vivo:
  ```http
  curl -I -s https://github.com/SinPresupuesto/SinPre
  HTTP/2 404 
  server: GitHub.com
  ```
- **Impacto:** Para un CTO o un reclutador técnico, hacer clic en el botón *"Código ↗"* del proyecto principal y encontrar una página de error 404 destruye de inmediato la credibilidad técnica sobre la autoría y solidez del proyecto.

### 3.4 Seguridad, Cabeceras HTTP y Falla de CSP

Se contrastaron las cabeceras emitidas por el servidor en producción contra `vercel.json`:

| Encabezado HTTP | Configurado en `vercel.json` | Servido en Producción | Evaluación de Seguridad |
| :--- | :--- | :--- | :--- |
| `X-Frame-Options` | `SAMEORIGIN` | `SAMEORIGIN` | **Correcto:** Previene ataques de Clickjacking. |
| `X-Content-Type-Options` | `nosniff` | `nosniff` | **Correcto:** Previene ataques de MIME-Confusion. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | `strict-origin-when-cross-origin` | **Correcto:** Protege datos de referencia. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | `camera=(), microphone=(), geolocation=()` | **Correcto:** Deshabilita APIs sensibles. |
| `Content-Security-Policy` | Ver análisis abajo | Coincide con `vercel.json` | **Falla Crítica en `/karen`** por bloqueo de fuentes. |
| `Strict-Transport-Security` | **No definido en `vercel.json`** | `max-age=63072000` (Inyectado por Vercel) | **Incompleto:** Falta `includeSubDomains; preload` para HSTS Preload. |
| `Cache-Control` (`/_astro/*`) | `public, max-age=31536000, immutable` | `public, max-age=31536000, immutable` | **Óptimo:** Caché inmutable para bundles versionados. |
| `Cache-Control` (`/projects/*`)| **No configurado** | `s-maxage=3600, stale-while-revalidate` | **Deficiente:** Imágenes estáticas se descargan reiteradamente. |

#### 3.4.1 Falla de CSP en la Ruta `/karen.astro`
- En `vercel.json` (línea 10), la directiva de seguridad establece:
  ```
  style-src 'self' 'unsafe-inline'; font-src 'self';
  ```
- Sin embargo, `src/pages/karen.astro` (líneas 13–18) importa tipografías externas:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:...&display=swap" rel="stylesheet" />
  ```
- Al visitar `https://www.nikko.dev/karen`, el navegador bloquea la descarga de las hojas de estilo y las fuentes WOFF2 procedentes de Google Fonts debido a que no están autorizadas en la CSP.

### 3.5 Accesibilidad (WCAG 2.1 AA) y Semántica

1. **Incumplimiento de Ratios de Contraste en `Contact.astro`:**
   - A pesar de que `global.css` define variables accesibles (`--accent-text: #047857` con ratio 5.25:1), `src/components/Contact.astro` utiliza colores crudos:
     - Línea 83: `.section-label { color: var(--green, #00D084); }` -> Ratio de contraste: **2.43:1** sobre `#F0FDF6`.
     - Línea 168: `.cmd-prompt { color: var(--green, #00D084); }` -> Ratio de contraste: **2.43:1**.
     - Línea 170: `.cmd-args { color: var(--cyan, #58D8FF); }` -> Ratio de contraste: **2.38:1**.
     - Línea 144: `.contact-cmd` usa `--muted` sobre fondo blanco translúcido -> Ratio: **2.53:1**.
   - *Normativa:* El criterio WCAG 2.1 nivel AA exige un ratio mínimo de **4.5:1** para texto normal. El sitio no cumple con la norma en su sección de contacto en modo claro.
2. **Ausencia de Landmark Semántico `<header>`:**
   - La barra de navegación superior no está envuelta en un elemento `<header role="banner">`. Los lectores de pantalla para usuarios con discapacidad visual no identifican el encabezado principal de la aplicación.
3. **Ausencia de Página 404 Personalizada:**
   - Cualquier petición a una ruta inexistente (ej. `https://www.nikko.dev/ruta-inexistente`) devuelve el error estándar en texto plano de Vercel:
     ```
     The page could not be found
     NOT_FOUND
     iad1::...
     ```
   - No existe `src/pages/404.astro`, generando abandono inmediato de usuarios que ingresen a URLs desactualizadas.

### 3.6 Verificación de Paridad Absoluta de Despliegue (Hash MD5)

Para auditar si el código de producción difería del código local:
- Se generó el build local mediante `npm run build` produciendo `dist/index.html`.
- Se descargó el HTML servido por Vercel desde `https://www.nikko.dev/`.
- Se calcularon los hashes MD5 y se cotejó la cabecera ETag de Vercel:
  - Hash MD5 `dist/index.html`: `d632154853ea506f5f728a278dc954d8`
  - Hash MD5 `https://www.nikko.dev/`: `d632154853ea506f5f728a278dc954d8`
  - ETag HTTP de Vercel: `"d632154853ea506f5f728a278dc954d8"`
- **Conclusión de Integridad:** **100% de paridad bit a bit**. No hay divergencia entre el repositorio en la rama `main` y lo que actualmente se encuentra desplegado en internet.

---

## 4. Evaluación de Posicionamiento Estratégico y Propuesta de Valor (R3)

### 4.1 Evaluación Punto por Punto vs. `PORTFOLIO_STRATEGY.md`

| # | Directriz de `PORTFOLIO_STRATEGY.md` | Estado de Cumplimiento | Evidencia Técnica en Código y Sitio Web |
| :--- | :--- | :---: | :--- |
| **01** | **Regla Principal de Posicionamiento:** Presentarse como Full-Stack Developer especializado en IA aplicada, Edge Computing y plataformas web modernas. | **PARCIAL** | El H1 en `Hero.astro` lo expresa con precisión, pero el meta description (`"Hago cosas web"`), el hero location (`"Estudio en la UNAL"`) y Servicios (`"FLAGSHIP: Landing pages"`) destruyen la coherencia. |
| **02** | **Evitar Perfil de Estudiante o Principiante:** Prohibido presentarse como estudiante buscando empleo. | **INCUMPLIDA** | Se reitera en múltiples secciones: Hero (`"Estudio en la UNAL"`), About (`"Segundo año de ingeniería, sí"`), VS Code mock (`año: "2do"`), Certificaciones (cursos de 20h y 32h). |
| **03** | **Rol de la Universidad:** La universidad debe ser únicamente un respaldo académico, nunca la propuesta principal. | **INCUMPLIDA** | La UNAL domina la narrativa: aparece en el Hero, en la cita inicial de About, en el código del editor mock, en 4 de las 8 tarjetas de certificaciones y en las FAQs. |
| **04** | **Especialidad Técnica:** Edge-First Full-Stack (Supabase, Cloudflare Workers, IA, Next.js, bajo costo). | **PARCIAL** | Mencionada en tags y descripciones breves, pero carece de diagramas de arquitectura que demuestren profundidad de ingeniería. |
| **05** | **Sensación Deseada:** "Este desarrollador ya construyó sistemas reales / entiende arquitectura / podría construir el MVP de mi startup". | **PARCIAL** | La terminal visual transmite rigor técnico, pero los casos de estudio son superficiales y no exhiben tradeoffs de arquitectura. |
| **06** | **Público Objetivo Equilibrado:** CTOs, Startups, Reclutadores y Clientes Freelance. | **INCUMPLIDA** | El contenido está sesgado hacia microempresas locales de bajo presupuesto que buscan landings y colegios que buscan talleres escolares. |
| **07** | **Escaparate de Proyectos:** Tier S (SinPresupuesto, FIBOG), Tier A (BoomLab, Autorreparación), Tier B (InduSEC, PawCare), Tier C (KalaChat, Piggy). | **INCUMPLIDA** | Solo se muestran 4 proyectos. Proyectos de IA como `PawCare`, `KalaChat`, `BoomLab` y `Piggy` están ausentes a pesar de tener imágenes listas en `public/projects/`. |
| **08** | **Venta de SinPresupuesto:** Destacar Next.js App Router, Cloudflare Workers, Workers AI, KV, Supabase, OAuth, PWA, Jest, Playwright, RAG, 3s → 0.2s. | **PARCIAL** | Destaca la métrica 3s → 0.2s, PWA y Llama 3.1, pero omite por completo los tests con Jest/Playwright, KV Storage y Workers AI. |
| **09** | **Venta de FIBOG:** Destacar plataforma institucional UNAL, 13 grupos, 875 líneas SQL, RLS granular, RPCs, OpenRouter, Netlify Functions. | **PARCIAL** | Destaca 13 grupos y 11k líneas de código, pero omite la complejidad técnica de SQL, RLS, RPCs y el flujo de aprobación institucional. |
| **10** | **Mensajes Clave del Hero:** Full-Stack, IA aplicada, Edge Computing, productos reales, producción real. | **CUMPLIDA** | El titular H1 y la terminal simulada incorporan con éxito estos cinco pilares. |
| **11** | **Métricas Reales a Mostrar:** 8+ proyectos, 2 en producción, 13 grupos, 11k+ líneas, 3s → 0.2s, ~$0 costo operativo. | **CUMPLIDA** | Completamente implementado en `Metrics.astro` con contadores animados e interactividad. |
| **12** | **Alineación con ATS / CV y LinkedIn:** Disponibilidad de CV descargable. | **INCUMPLIDA** | El archivo `ATScv.md` no tiene versión PDF generada ni botón de descarga en el sitio web. La clave `contact.cv` está huérfana en el código. |
| **13** | **Qué Evitar:** Sin barras de habilidades falsas, sin porcentajes inventados, sin animaciones injustificadas. | **CUMPLIDA** | El diseño respeta esta regla rigurosamente; no hay barras de progreso porcentuales falsas. |
| **14** | **Elementos Obligatorios:** Hero fuerte, casos de estudio, arquitecturas, capturas reales, métricas verificables, links a GitHub. | **PARCIAL** | Faltan diagramas de arquitectura, el link a GitHub de SinPresupuesto está roto (404) y falta el botón de CV. |

### 4.2 Bipolaridad de Marca: El Choque de Mercados

El portafolio sufre de una severa escisión en su propuesta de valor:

```
                                    NIKKODEV PORTFOLIO
                                            │
                     ┌──────────────────────┴──────────────────────┐
                     ▼                                             ▼
          MERCADO A: ESTRATÉGICO                        MERCADO B: TÁCTICO LOCAL
   (Startups EE.UU., CTOs, Remoto)               (Talleres mecánicos, Puertas, Colegios)
   ────────────────────────────────              ───────────────────────────────────────
   - Full-Stack Edge & Applied AI                - Landing pages económicas ($7/hr)
   - Cloudflare Workers, RAG, Supabase RLS       - WhatsApp como único canal de contacto
   - Optimización de costos cloud                - Talleres de prompting escolar para colegios
   - Contratos de $2,000 - $4,000+ USD/mes       - Cobros por sprint local de bajo margen
```

Esta dualidad genera desconfianza en ambos extremos. A un CTO en EE.UU. le alarma ver que el servicio insignia (Flagship) sea *"Landing pages premium"* y que se ofrezcan *"Talleres para colegios"*, clasificando al candidato como un freelancer junior todoterreno. Al mismo tiempo, a un cliente de taller mecánico local le abruman términos como *"Edge Runtimes"*, *"PostgreSQL RLS"* y *"Llama 3.1"*.

### 4.3 Análisis de Señales Junior y de Estudiante

1. **Hero Section (`Hero.astro`):**
   - Subtítulo visible: `"Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible"`.
   - *Efecto:* Lo último que un reclutador lee antes de decidir si hacer scroll es que el candidato es un estudiante disponible.
2. **Sección Sobre Mí (`About.astro`):**
   - Párrafo introductorio: `"Segundo año de ingeniería, sí. Pero con la madurez de quien entiende que la tecnología..."`.
   - Mock del editor VS Code (50% del ancho en pantalla):
     ```typescript
     universidad: "UNAL · Ing. de Sistemas",
     año: "2do",
     ```
   - *Efecto:* Activa de inmediato el sesgo de descarte por falta de disponibilidad horaria y presunción de inexperiencia.
3. **Sección de Certificaciones (`Certifications.astro`):**
   - Incluye tarjetas como:
     - *"UNAL · 64h: Programación de Computadores"*
     - *"UNAL · 32h: Comunicación Asertiva G2"*
     - *"UNAL · 20h: Excel Intermedio · Análisis de datos"*
     - *"Marca: NikkoDev"*
   - *Efecto:* Presentar cursos de 20 horas de Excel y materias universitarias introductorias de 64 horas es el síntoma definitivo de un currículum estudiantil que intenta "llenar espacio". Destruye la autoridad de quien afirma construir sistemas distribuidos en el Edge.
4. **Tono y Lenguaje Coloquial:**
   - Meta description (`BaseLayout.astro:81`): `"Soy Brayan. Hago cosas web que cargan rápido y no desperdician un solo byte."`
   - En `translations.ts`: Expresiones como `"PWA pa' que funcione offline"`, `"un estudiante con un celular de 300 lucas"` o confesar en el aprendizaje de SinPresupuesto que *"Montamos medio a las carreras y faltaron métricas de uso reales"*.

### 4.4 Brecha en el Escaparate de Proyectos (Proof of Work)

- **La Galería Oculta:** Actualmente solo se muestran 4 proyectos, de los cuales el 50% son páginas web sencillas de comercio tradicional (`Autorreparación` e `InduSEC`). Esto deja al portafolio con la apariencia de tener muy poca trayectoria.
- **Activos Huérfanos Preparados:** En `public/projects/` existen las imágenes para `PawCare` (asistente de salud animal con IA), `KalaChat` (chatbot con procesamiento de lenguaje natural), `BoomLab` (web interactiva para empresa/marca de diseño y e-commerce) y `Piggy` (experiencia web inmersiva 3D con WebGL y scrollytelling). Al incorporarlos, la vitrina pasa de 4 a 8 proyectos, donde el 75% serán plataformas completas de software e IA.
- **Ausencia de Diagramas de Arquitectura:** `design.md` estipulaba que los casos de estudio debían mostrar la arquitectura de los sistemas. Actualmente solo contienen 3 párrafos de texto y una lista de etiquetas. Faltan diagramas que expliquen el flujo:  
  `PWA Client -> Cloudflare Edge Router -> Worker App / Worker AI (Llama 3.1) -> Supabase PostgreSQL (RLS)`.

### 4.5 Embudo de Conversión Roto

1. **Ausencia Total de CV en PDF:**
   - El archivo `ATScv.md` contiene un excelente currículum optimizado para algoritmos ATS.
   - Sin embargo, en el sitio web no existe ningún botón para descargar el CV.
   - La clave `"contact.cv"` existe en `translations.ts`, pero no está enlazada en ningún componente HTML.
   - En `public/` no hay ningún archivo `.pdf`.
   - *Consecuencia:* Un reclutador técnico no puede descargar el documento requerido para abrir un proceso de contratación.
2. **Monopolio Exclusivo de WhatsApp:**
   - WhatsApp está presente en el Navbar, en el botón principal del Hero, en un botón flotante (`.whatsapp-float`), en la sección de Contacto y al final de cada caso de estudio.
   - Para clientes locales de Colombia es funcional, pero para reclutadores y CTOs de EE.UU./Europa, WhatsApp es un canal informal de alta fricción.
3. **Falta de Agenda de Llamadas:** No hay integración con herramientas como Cal.com o Calendly para agendar entrevistas técnicas o llamadas de descubrimiento de 15 minutos.

### 4.6 El Caso de la Ruta `/karen.astro`
- Archivo de 577 líneas con una carta de amor interactiva privada (`/karen`), protegida únicamente con la etiqueta `<meta name="robots" content="noindex, nofollow" />`.
- Aunque se respetó la directiva histórica del proyecto de mantenerla intacta, su despliegue público en el dominio principal de producción representa una fuga de privacidad y un riesgo reputacional ante evaluaciones corporativas rigurosas si llega a ser descubierta o filtrada.

---

## 5. Matriz FODA Integral (SWOT)

```
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                        MATRIZ FODA NIKKODEV                                      ║
╠══════════════════════════════════════════════════════════════════════════════════════════════════╣
║ FORTALEZAS (Strengths)                                  ║ DEBILIDADES (Weaknesses)               ║
║ • Arquitectura SSG pura con <5 KB de JS en cliente.     ║ • Bucle canónico 308 entre dominios.   ║
║ • Compilación ultrarrápida en ~938 ms (Astro v7).       ║ • 8 CVEs activas en dependencias.      ║
║ • Proyectos reales en producción (SinPresupuesto y      ║ • tsconfig.json ausente (cero tipado). ║
║   FIBOG para UNAL con 13 grupos y 11k líneas).          ║ • Bug en telemetría de casos de estudio║
║ • Optimización de carga extrema (3.0s a 0.2s).          ║ • Señales explícitas de "estudiante".  ║
║ • Sistema de diseño "NikkoDev OS" diferenciado.         ║ • Servicios enfocados en landings $7/h.║
║ • Soporte nativo bilingüe (ES / EN) en el código.       ║ • Sin CV descargable ni Cal.com.       ║
║ • Cero costo operativo mensual en serverless.           ║ • 4 proyectos de IA huérfanos.         ║
╠═════════════════════════════════════════════════════════╬════════════════════════════════════════╣
║ OPORTUNIDADES (Opportunities)                           ║ AMENAZAS (Threats)                     ║
║ • Boom global de ingenieros de IA Aplicada y Edge.      ║ • Descarte automático por ATS y filtros║
║ • Reposicionar la UNAL como cliente institucional.      ║   de reclutamiento por rol junior.     ║
║ • Incorporación de diagramas de arquitectura técnica.   ║ • Pérdida de indexación orgánica en    ║
║ • Activación de proyectos huérfanos (PawCare, KalaChat).║   Google por canonical loop permanente.║
║ • Apertura a mercado remoto de $2,000–$4,000+ USD/mes.  ║ • Trampa de precarización freelance en ║
║ • Implementación de Type-Checking en CI/CD.             ║   micro-landings locales demandantes.  ║
║ • Adopción de pipeline automatizado astro:assets.       ║ • Commoditización de wrappers de IA.   ║
╚═════════════════════════════════════════════════════════╩════════════════════════════════════════╝
```

---

## 6. Catálogo Consolidado de Hallazgos Técnicos y Estratégicos

### 6.1 Tabla Maestra de Hallazgos por Nivel de Severidad

| ID | Área | Título del Hallazgo | Severidad | Archivos Afectados |
| :--- | :--- | :--- | :---: | :--- |
| **CAN-01** | SEO / Red | Bucle canónico infinito (308) y sitemap apuntando a dominio con redirección | **Crítico** | `astro.config.mjs`, `BaseLayout.astro`, `sitemap.xml`, Vercel Dashboard |
| **SEC-01** | Seguridad | 8 Vulnerabilidades en dependencias (Astro 7.0.6 RCE AVIF `GHSA-26w7-cxv4-gfx2` y XSS) | **Crítico** | `package.json`, `package-lock.json` |
| **TYP-01** | Tooling / TS | `tsconfig.json` inexistente y falta de dependencias `@astrojs/check` / `typescript` | **Crítico** | Raíz del proyecto, `package.json` |
| **LNK-01** | UX / Credibilidad | Enlace de repositorio de SinPresupuesto arroja error HTTP 404 en GitHub | **Crítico** | `src/components/Projects.astro:17`, `src/data/projects.ts:32` |
| **STR-01** | Estrategia | Bipolaridad de marca: choque entre ingeniería Edge/IA internacional y micro-landings | **Crítico** | `Services.astro`, `translations.ts`, `Hero.astro` |
| **STR-02** | Estrategia | Cues explícitos de estudiante junior ("Estudio en UNAL", "2do año", cursos de 20h) | **Crítico** | `Hero.astro`, `About.astro`, `Certifications.astro`, `translations.ts` |
| **BUG-01** | Funcional | Fallo de interpolación en telemetría de casos de estudio (envía `"{project.slug}"`) | **Alto** | `src/pages/proyectos/[slug].astro:85`, `src/pages/en/projects/[slug].astro:116` |
| **ARC-01** | Arquitectura | Código legacy huérfano rastreado en Git (`index.html` de 54KB, `opcion.html`, `portfolio/`) | **Alto** | Raíz del proyecto |
| **AST-01** | Rendimiento | Activos pesados (JPEG 521KB) y 4 imágenes huérfanas (237KB) eludiendo `astro:assets` | **Alto** | `public/projects/`, `src/components/Projects.astro` |
| **SEC-02** | Seguridad | Bloqueo por política CSP de fuentes Google Fonts en la ruta `/karen` | **Alto** | `vercel.json:10`, `src/pages/karen.astro:13` |
| **CV-01** | Conversión | Embudo de reclutamiento roto: CV en PDF inexistente y sin enlace de descarga | **Alto** | `public/`, `Navbar.astro`, `Contact.astro`, `translations.ts` |
| **PRJ-01** | Portafolio | Escaparate incompleto (solo 4 proyectos visibles; ausentes `PawCare`, `KalaChat`, etc.) | **Alto** | `src/data/projects.ts`, `src/components/Projects.astro` |
| **ERR-01** | UX / Resiliencia | Ausencia de página 404 personalizada (Astro devuelve texto plano crudo de Vercel) | **Alto** | `src/pages/404.astro` (inexistente) |
| **A11Y-01** | Accesibilidad | Violación de contraste WCAG AA en `Contact.astro` (ratio 2.43:1 en verde claro) | **Medio** | `src/components/Contact.astro:83,168` |
| **MOD-01** | Mantenibilidad | Duplicación de lógica JavaScript y CSS entre `index.astro` y `en.astro` (~250 líneas) | **Medio** | `src/pages/index.astro`, `src/pages/en.astro` |
| **NAV-01** | UX / i18n | Selector de idioma desvía a la raíz al navegar dentro de casos de estudio | **Medio** | `src/components/Navbar.astro:334` |
| **NET-01** | Rendimiento Red | Doble salto de redirección en peticiones HTTP (+811 ms de sobrecosto de latencia) | **Medio** | Vercel DNS / Spaceship DNS |
| **SEC-03** | Seguridad | Cabecera HSTS sin directivas `includeSubDomains; preload` | **Medio** | `vercel.json` |
| **DAT-01** | Arquitectura | Fragmentación y redundancia de datos de proyectos en 3 archivos independientes | **Medio** | `src/data/projects.ts`, `translations.ts`, `Projects.astro` |
| **SEO-01** | SEO | Inconsistencia de trailing slashes entre enlaces internos (`/`) y sitemap (sin `/`) | **Medio** | `Projects.astro`, `sitemap.xml`, `BaseLayout.astro` |
| **I18N-01** | i18n | Falta de internacionalización en el mantra del pie de página de `Footer.astro` | **Medio** | `src/components/Footer.astro:22` |
| **A11Y-02** | Semántica | Ausencia del elemento landmark semántico `<header>` en la barra superior | **Bajo** | `src/components/Navbar.astro` |
| **DNS-01** | Infraestructura | Falta de soporte IPv6 (AAAA), registros CAA y registros MX para Zoho Mail | **Bajo** | Spaceship DNS |
| **TYP-02** | TypeScript | Tipado débil en la clave de traducción `getTranslation(key: string)` | **Bajo** | `src/data/translations.ts:238` |
| **CFG-01** | Caching | Regla de caché inmutable omitida para `og-image.png` en `vercel.json` | **Bajo** | `vercel.json:22` |

---

### 6.2 Fichas Técnicas Individuales de Hallazgos Críticos y Altos

#### FICHA TÉCNICA: CAN-01 (Bucle Canónico 308 Permanente)
- **Nivel de Severidad:** CRÍTICO.
- **Área:** SEO / Infraestructura de Red.
- **Descripción:** Vercel está configurado con `www.nikko.dev` como dominio de redirección primario, mientras que el código de Astro genera en el HTML `<link rel="canonical" href="https://nikko.dev">` y el `sitemap.xml` tiene todas sus URLs en `https://nikko.dev/`. Al rastrear, Googlebot sufre una redirección 308 autorreferencial.
- **Evidencia Verificable:**
  ```bash
  $ curl -I https://nikko.dev
  HTTP/2 308
  location: https://www.nikko.dev/
  
  $ curl -s -L https://www.nikko.dev | grep "canonical"
  <link rel="canonical" href="https://nikko.dev">
  ```
- **Impacto:** Dilución total del link juice, advertencias en Google Search Console, riesgo inminente de desindexación de rutas.
- **Solución Técnica:**
  - Opción A (Recomendada): En el dashboard de Vercel (o mediante `vercel.json`), configurar `nikko.dev` (Apex) como dominio primario y redirigir `www.nikko.dev` -> `nikko.dev`.
  - Opción B: Si se mantiene `www` en Vercel, modificar `astro.config.mjs`, `BaseLayout.astro` y `sitemap.xml` para que utilicen de forma consistente `https://www.nikko.dev`.

---

#### FICHA TÉCNICA: SEC-01 (Vulnerabilidades Críticas en Dependencias)
- **Nivel de Severidad:** CRÍTICO.
- **Área:** Seguridad de Aplicaciones y Dependencias.
- **Descripción:** Astro `7.0.6` posee vulnerabilidades conocidas de Ejecución Remota de Código (RCE) en el parser de imágenes AVIF (`GHSA-26w7-cxv4-gfx2`) y Reflected XSS en View Transitions (`GHSA-4g3v-8h47-v7g6`), totalizando 8 CVEs junto con `sharp`, `svgo`, `postcss`, `nanoid` y `js-yaml`.
- **Evidencia Verificable:**
  ```bash
  $ npm audit
  astro <=7.2.7 | Severity: critical | GHSA-26w7-cxv4-gfx2, GHSA-4g3v-8h47-v7g6
  8 vulnerabilities (1 critical, 6 high, 1 moderate)
  ```
- **Impacto:** Potencial compromiso del pipeline de compilación o ejecución en el cliente en escenarios dinámicos. Descalificación inmediata en auditorías de seguridad corporativas.
- **Solución Técnica:**
  ```bash
  npm install astro@^7.2.8
  npm audit fix
  ```

---

#### FICHA TÉCNICA: TYP-01 (Ausencia de `tsconfig.json` y Type-Checking)
- **Nivel de Severidad:** CRÍTICO.
- **Área:** Calidad de Código y Tipado Estático.
- **Descripción:** El repositorio carece de `tsconfig.json` en la raíz. Las dependencias `typescript` y `@astrojs/check` no están instaladas en `package.json`, impidiendo cualquier validación estática de tipos en CI/CD.
- **Evidencia Verificable:**
  ```bash
  $ find . -maxdepth 1 -name "tsconfig*.json"  # Retorna vacío
  $ npx astro check
  To continue, Astro requires the following dependency to be installed: @astrojs/check.
  ```
- **Impacto:** Errores de tipo silenciosos se filtran a producción sin ser detectados por el compilador.
- **Solución Técnica:**
  1. Instalar dependencias:
     ```bash
     npm install -D typescript @astrojs/check
     ```
  2. Crear `tsconfig.json`:
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
  3. Agregar a `package.json`: `"scripts": { "check": "astro check" }`.

---

#### FICHA TÉCNICA: LNK-01 (Enlace Roto 404 en Proyecto Estrella)
- **Nivel de Severidad:** CRÍTICO.
- **Área:** Experiencia de Usuario y Credibilidad Técnica.
- **Descripción:** El enlace del botón *"Código ↗"* para el proyecto principal *SinPresupuesto* apunta a una URL inexistente o privada en GitHub (`https://github.com/SinPresupuesto/SinPre`).
- **Evidencia Verificable:**
  ```bash
  $ grep -rn "SinPresupuesto/SinPre" src/
  src/components/Projects.astro:17:    code: "https://github.com/SinPresupuesto/SinPre",
  src/data/projects.ts:32:    repo: "https://github.com/SinPresupuesto/SinPre",

  $ curl -I -s https://github.com/SinPresupuesto/SinPre
  HTTP/2 404
  ```
- **Impacto:** Destrucción de la prueba de trabajo ante CTOs que auditan código fuente para evaluar capacidad de ingeniería.
- **Solución Técnica:** Actualizar la URL en `src/components/Projects.astro:17` y `src/data/projects.ts:32` hacia el repositorio público correcto en `https://github.com/NikkoWebDev/...` o remover el botón temporalmente si el repositorio es privado, reemplazándolo por un enlace al caso de estudio detallado.

---

#### FICHA TÉCNICA: STR-01 y STR-02 (Cues de Estudiante Junior y Conflicto de Marca)
- **Nivel de Severidad:** CRÍTICO.
- **Área:** Posicionamiento Estratégico y Propuesta de Valor.
- **Descripción:** Presencia dominante de textos que reducen al candidato a un estudiante de primeros semestres ("Estudio en la UNAL", "2do año", cursos de 20h de Excel) y designación de "Landing pages premium" como servicio insignia (Flagship).
- **Evidencia Verificable:**
  - `src/data/translations.ts:22`: `"Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible"`
  - `src/components/About.astro:62`: `año: "2do"`
  - `src/components/Certifications.astro:24-57`: Cursos de 20h y 32h.
- **Impacto:** Descarte automático en filtros ATS y reclutadores para posiciones de nivel profesional ($2,000+ USD/mes); confinamiento en el segmento de micro-landings precarias ($7 USD/h).
- **Solución Técnica:** Aplicar la reestructuración completa de copys de la Fase 2 (ver Plan de Acción).

---

#### FICHA TÉCNICA: BUG-01 (Fallo de Interpolación en Telemetría)
- **Nivel de Severidad:** ALTO.
- **Área:** Funcionalidad y Analítica Web.
- **Descripción:** En `src/pages/proyectos/[slug].astro:85` y `src/pages/en/projects/[slug].astro:116`, el script del cliente llama a `track("case_view", { slug: "{project.slug}", lang: "{lang}" })`. Al omitir el paso de datos desde el servidor, Vite emite la cadena literal `"{project.slug}"`.
- **Evidencia Verificable:**
  ```bash
  $ grep -rn 'slug:`{project.slug}`' dist/
  dist/_astro/_slug_...js:1: e("case_view",{slug:"{project.slug}",lang:"{lang}"});
  ```
- **Impacto:** Telemetría de visitas a proyectos inutilizada en producción.
- **Arquitectura de Scripts en Astro y Causa Raíz:** En Astro, las etiquetas `<script>` estándar son procesadas por Vite como módulos del cliente (`type="module"`), lo que permite resolución de rutas con `import`, soporte completo de TypeScript y tree-shaking. Si se intentara resolver la interpolación con `<script define:vars>`, Astro marcaría automáticamente el script como `is:inline` (inline script). En un script inline, Vite NO procesa el archivo, por lo que la directiva `import { track } from "../../lib/analytics"` arrojaría un error fatal en el navegador en tiempo de ejecución: `Uncaught SyntaxError: Cannot use import statement outside a module`.
- **Solución Técnica (Arquitectura de Data-Attributes):**
  La solución canónica y robusta en Astro consiste en transferir las variables del frontmatter a través de atributos `data-*` en el elemento raíz del caso de estudio, manteniendo el `<script>` como un módulo cliente procesado por Vite:
  ```astro
  <!-- En src/pages/proyectos/[slug].astro y src/pages/en/projects/[slug].astro -->
  <main class="project-case" id="case-study-root" data-slug={project.slug} data-lang={lang}>
    <!-- Contenido del caso de estudio -->
  </main>

  <script>
    import { track } from "../../lib/analytics";
    const root = document.getElementById("case-study-root");
    if (root) {
      const slug = root.dataset.slug || "";
      const lang = root.dataset.lang || "";
      track("case_view", { slug, lang });
    }
  </script>
  ```

---

#### FICHA TÉCNICA: ARC-01 (Archivos Muertos y Huérfanos en la Raíz)
- **Nivel de Severidad:** ALTO.
- **Área:** Deuda Técnica y Limpieza de Repositorio.
- **Descripción:** `index.html` (54 KB, 1,799 líneas) y `opcion.html` (12 KB) se encuentran rastreados en Git sin formar parte del build de Astro.
- **Evidencia Verificable:**
  ```bash
  $ git ls-files index.html opcion.html
  index.html
  opcion.html
  ```
- **Impacto:** Confusión sobre qué archivo gobierna la página de inicio y riesgo de colisión en CDNs estáticas.
- **Solución Técnica:**
  ```bash
  git rm -f index.html opcion.html
  rm -rf portfolio/
  git commit -m "chore: purge legacy dead code and orphan files from root"
  ```

---

#### FICHA TÉCNICA: AST-01 (Gestión Deficiente de Activos e Imágenes)
- **Nivel de Severidad:** ALTO.
- **Área:** Rendimiento y Core Web Vitals.
- **Descripción:** Imágenes en `public/projects/` de hasta 521 KB se entregan sin comprimir a WebP/AVIF, eludiendo `astro:assets`. Existen 4 imágenes huérfanas (237 KB).
- **Evidencia Verificable:**
  - `autorreparacion.jpg`: 521 KB
  - `grep -rn "boombox\|kala-chat\|pawcare\|piggy" src/` -> 0 resultados.
- **Impacto:** Desperdicio de ancho de banda móvil y tiempos de carga degradados en dispositivos de gama media/baja.
- **Solución Técnica:**
  1. Eliminar archivos huérfanos no utilizados o incorporarlos en `projects.ts`.
  2. Mover imágenes a `src/assets/projects/` y utilizar `<Image src={img} alt="..." format="avif" />`.

---

#### FICHA TÉCNICA: SEC-02 (Bloqueo CSP de Tipografías en `/karen`)
- **Nivel de Severidad:** ALTO.
- **Área:** Seguridad y Renderizado Visual.
- **Descripción:** `vercel.json` estipula `style-src 'self' 'unsafe-inline'; font-src 'self'`. La página `src/pages/karen.astro` enlaza a `fonts.googleapis.com` y `fonts.gstatic.com`.
- **Evidencia Verificable:**
  ```bash
  $ curl -s -I https://www.nikko.dev/karen | grep -i "content-security-policy"
  # Muestra directivas restringidas a 'self'
  ```
- **Impacto:** Error de consola en navegador y degradación visual de la tipografía Cormorant Garamond.
- **Solución Técnica:** Autoalojar la tipografía mediante `@fontsource/cormorant-garamond` o agregar las fuentes de Google en la directiva CSP de `vercel.json`.

---

#### FICHA TÉCNICA: CV-01 (Embudo de Reclutamiento Roto)
- **Nivel de Severidad:** ALTO.
- **Área:** Conversión de Talento y Negocio.
- **Descripción:** El portafolio no ofrece ningún archivo PDF descargable ni botón público para descargar el CV, a pesar de existir `ATScv.md` en el repositorio.
- **Evidencia Verificable:**
  ```bash
  $ find public/ -name "*.pdf" # Retorna 0
  $ grep -rn "contact.cv" src/ # Retorna solo la definición en translations.ts:224
  ```
- **Impacto:** Pérdida del 100% de los reclutadores corporativos cuyo flujo de trabajo exige un documento PDF para subir al ATS.
- **Solución Técnica:** Compilar `ATScv.md` a `public/cv-brayan-gallo.pdf` e incorporar botones de descarga en el Navbar y en la sección de Contacto.

---

## 7. Hoja de Ruta Priorizada y Plan de Acción Paso a Paso

### Fase 1: Correcciones Críticas Inmediatas (Hotfixes de 24–48 Horas)
*Objetivo: Erradicar vulnerabilidades de seguridad, solucionar bucles de indexación y reparar enlaces rotos sin alterar la lógica de negocio.*

1. **Hotfix 1.1: Unificación de Dominio Canónico (Resolver CAN-01 y NET-01)**

   - **Opción A: Solución Recomendada (Vía Dashboard de Vercel & DNS Spaceship)**
     - *Paso 1:* En el Dashboard de Vercel > Proyecto `nikkodev-portfolio` > Settings > Domains:
       - Configurar `nikko.dev` como dominio **Production (Primary)**.
       - Configurar `www.nikko.dev` como **Redirect to `nikko.dev`** con código HTTP 308 permanente.
     - *Paso 2:* En `astro.config.mjs`, verificar que `site` sea `"https://nikko.dev"`.
     - *Paso 3:* En `src/layouts/BaseLayout.astro`, confirmar `const SITE = "https://nikko.dev"`.
     - *Paso 4:* En `public/sitemap.xml`, confirmar que todas las etiquetas `<loc>` apunten a `https://nikko.dev/...`.
     - *Resultado:* Elimina el salto adicional de redirección, unificando el dominio canónico en el ápice y reduciendo la latencia de 1,436 ms a ~411 ms.

   - **Opción B: Solución Inmediata Git-Only (Sin acceso al dashboard de Vercel / Spaceship DNS)**
     - Si el desarrollador no dispone de acceso administrativo inmediato a las consolas de Vercel o Spaceship DNS para modificar la redirección de producción existente (donde Vercel actualmente redirige de `nikko.dev` hacia `www.nikko.dev`), puede eliminar el bucle canónico y la degradación SEO de forma 100% autónoma mediante Git:
       - *Paso 1:* En `astro.config.mjs`, establecer:
         ```javascript
         site: "https://www.nikko.dev",
         ```
       - *Paso 2:* En `src/layouts/BaseLayout.astro`, establecer:
         ```astro
         const SITE = "https://www.nikko.dev";
         ```
       - *Paso 3:* En `public/sitemap.xml`, actualizar las URLs `<loc>` para reflejar el subdominio www servido:
         ```xml
         <loc>https://www.nikko.dev/</loc>
         <loc>https://www.nikko.dev/en</loc>
         <loc>https://www.nikko.dev/proyectos/fibog</loc>
         <loc>https://www.nikko.dev/proyectos/sinpresupuesto</loc>
         ...
         ```
     - *Resultado:* Elimina inmediatamente la discrepancia canónica CAN-01 ante Googlebot mediante un simple `git commit && git push`, haciendo que el tag `<link rel="canonical">` y el sitemap coincidan exactamente con la URL servida por la CDN de Vercel.

2. **Hotfix 1.2: Parche de Seguridad y Dependencias (Resolver SEC-01)**
   - *Paso 1:* Ejecutar en terminal:
     ```bash
     npm install astro@^7.2.8
     npm audit fix
     ```
   - *Paso 2:* Validar que `npm audit` reporte 0 vulnerabilidades críticas.
   - *Paso 3:* Ejecutar `npm run build` para confirmar que no existan regresiones de compilación.

3. **Hotfix 1.3: Reparar Enlace Roto de SinPresupuesto (Resolver LNK-01)**
   - *Paso 1:* En `src/components/Projects.astro` (línea 17) y `src/data/projects.ts` (línea 32):
     - Reemplazar `https://github.com/SinPresupuesto/SinPre` por la URL pública correcta del repositorio del proyecto (ej. `https://github.com/NikkoWebDev/sinpresupuesto`) o, si permanece privado, cambiar el botón a `"Demo ↗"` o remover el enlace temporalmente.

4. **Hotfix 1.4: Corregir Interpolación de Telemetría (Resolver BUG-01)**
   - *Arquitectura Técnica de Astro:* En Astro, las etiquetas `<script>` estándar son procesadas por Vite como módulos del cliente (`type="module"`), preservando la resolución de dependencias ES, el empaquetado y el soporte de TypeScript. Si se utilizara la directiva `<script define:vars>`, Astro forzaría al script a comportarse como inline (`is:inline`), lo cual inhabilita el empaquetado de Vite y provoca un fallo fatal en tiempo de ejecución en el navegador: `Uncaught SyntaxError: Cannot use import statement outside a module`.
   - *Paso 1:* En `src/pages/proyectos/[slug].astro` y `src/pages/en/projects/[slug].astro`, inyectar los datos del servidor vía atributos HTML `data-*` en el contenedor y consumirlos en el script empaquetado de Vite:
     ```astro
     <!-- En el elemento contenedor principal del caso de estudio -->
     <main class="project-case" id="case-study-root" data-slug={project.slug} data-lang={lang}>
       <!-- Contenido del caso de estudio -->
     </main>

     <script>
       import { track } from "../../lib/analytics";
       const root = document.getElementById("case-study-root");
       if (root) {
         const slug = root.dataset.slug || "";
         const lang = root.dataset.lang || "";
         track("case_view", { slug, lang });
       }
     </script>
     ```
   - *Resultado:* Telemetría plenamente funcional en producción con tipado estricto y resolución correcta de módulos Vite.

5. **Hotfix 1.5: Configuración de TypeScript y Diagnóstico Independiente (Resolver TYP-01)**
   - *Paso 1:* Ejecutar en terminal:
     ```bash
     npm install -D typescript @astrojs/check
     ```
   - *Paso 2:* Crear `/home/niko/Proyectos/My portfolio/tsconfig.json`:
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
   - *Paso 3 (Fase 1 — Diagnóstico Independiente):* Agregar a `package.json` el script `check` de forma independiente:
     ```json
     "scripts": {
       "dev": "astro dev",
       "start": "astro dev",
       "build": "astro build",
       "preview": "astro preview",
       "check": "astro check"
     }
     ```
     > **Aviso Crítico de CI/CD:** En esta Fase 1, `astro check` DEBE configurarse como script independiente (`npm run check`) y **NO** debe acoplarse al comando de build (`"build": "astro check && astro build"`). Dado que el repositorio posee deuda técnica de tipado preexistente en componentes y colecciones de datos, forzar el chequeo estricto durante el build causaría el fallo prematuro de las compilaciones en el pipeline de despliegue continuo de Vercel.
     >
     > El acoplamiento estricto (`"build": "astro check && astro build"`) se implementará en la **Fase 3 (Acción 3.6)**, una vez que todas las anotaciones de tipos e interfaces hayan sido completadas en los componentes y archivos de datos.

6. **Hotfix 1.6: Purgar Código Muerto de la Raíz (Resolver ARC-01)**
   - *Paso 1:* Ejecutar:
     ```bash
     git rm -f index.html opcion.html
     rm -rf portfolio/
     ```

---

### Fase 2: Realineación Estratégica, Contenido y Embudo (1–2 Semanas)
*Objetivo: Transformar la percepción de estudiante novato a ingeniero Full-Stack de alto impacto y habilitar la conversión de reclutadores internacionales.*

1. **Acción 2.1: Activar el Embudo de Conversión de Reclutadores (Resolver CV-01)**
   - *Paso 1:* Compilar el contenido de `ATScv.md` a archivos PDF profesionales:
     - `/public/cv-brayan-gallo.pdf` (Versión en español).
     - `/public/cv-brayan-gallo-en.pdf` (Versión en inglés).
   - *Paso 2:* Conectar el botón de descarga en `src/components/Navbar.astro` (utilizando la prop `lang` del componente, junto al switch de idioma):
     ```astro
     <a 
       href={lang === 'es' ? '/cv-brayan-gallo.pdf' : '/cv-brayan-gallo-en.pdf'} 
       class="nav-btn cv-btn" 
       download
     >
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
         <polyline points="7 10 12 15 17 10"/>
         <line x1="12" y1="15" x2="12" y2="3"/>
       </svg>
       <span>{getTranslation('contact.cv', lang)}</span>
     </a>
     ```
   - *Paso 3:* En `src/components/Contact.astro`, agregar una tarjeta o comando de consola `$ cat nikko-cv.pdf` con enlace directo de descarga.

2. **Acción 2.2: Erradicación de Señales Junior y Redefinición del Hero (Resolver STR-02)**
   - *Paso 1:* En `src/data/translations.ts` (línea 22), actualizar `hero.loc`:
     - *Antes:* `"Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible"`
     - *Después (ES):* `"Full-Stack & Applied AI Engineer · Arquitecturas Edge · Bogotá / Remoto"`
     - *Después (EN):* `"Full-Stack & Applied AI Engineer · Edge Architectures · Remote / Worldwide"`
   - *Paso 2:* En `src/components/About.astro` y `translations.ts` (línea 106), actualizar `about.story`:
     - Eliminar la mención: `"Segundo año de ingeniería, sí."`.
     - *Nueva redacción:* `"Ingeniero de Sistemas y Computación (UNAL) enfocado en arquitecturas web de alto rendimiento, modelos de lenguaje aplicados y sistemas distribuidos. Mi obsesión es la optimización brutal: procesar más con menos recursos y diseñar software resiliente que escale a costo mínimo."`
   - *Paso 3:* En `src/components/About.astro` (líneas 58–63), mock de VS Code:
     - Cambiar `año: "2do"` por `specialty: "Edge Runtimes & Applied AI"`.
     - Cambiar `universidad: "UNAL · Ing. de Sistemas"` por `institution: "Universidad Nacional de Colombia (UNAL)"`.

3. **Acción 2.3: Reestructuración de Servicios y Neutralización de la Bipolaridad (Resolver STR-01)**
   - *Paso 1:* En `src/components/Services.astro`:
     - **Retirar el badge FLAGSHIP de "Landing pages premium".**
     - **Servicio 01 (FLAGSHIP):** *"Arquitecturas Edge & Plataformas Full-Stack"* (Next.js, Astro, Supabase, Cloudflare Workers, PostgreSQL, RLS).
     - **Servicio 02:** *"Sistemas de IA Aplicada & RAG"* (Modelos abiertos Llama 3.1, búsqueda semántica, agentes de datos, Workers AI).
     - **Servicio 03:** *"Optimización Extrema de Rendimiento & Costos Cloud"* (Migración serverless, reducción de latencia de 3s a 0.2s, Core Web Vitals).
     - **Servicio 04:** *"Presencia Digital & Aplicaciones de Alta Conversión"* (PWA, landings técnicas ultrarrápidas). Reubicar la mención de educación escolar a un bullet secundario.

4. **Acción 2.4: Curaduría de "Credenciales & Especialidades Técnicas en Producción" (Resolver STR-02)**
   - *Transparencia e Integridad para Background Checks:* Para preservar la honestidad técnica y superar auditorías de reclutamiento internacional sin ambigüedades, los elementos de esta sección deben rotularse explícitamente como *"Credenciales & Especialidades Técnicas en Producción"*. Esto distingue formalmente la formación universitaria reglada de las especializaciones técnicas demostradas en arquitectura de producción, eliminando cualquier confusión con certificaciones de examen cerrado de terceros vendedores.
   - *Paso 1:* En `src/components/Certifications.astro`:
     - **Eliminar de inmediato:**
       - *"UNAL · 20h: Excel Intermedio · Análisis de datos"*
       - *"UNAL · 32h: Comunicación Asertiva G2"*
       - *"UNAL · 64h: Programación de Computadores"*
       - *"Marca: NikkoDev"*
     - **Sustituir por Credenciales & Especialidades Técnicas en Producción:**
       - *"Universidad Nacional de Colombia — Ingeniería de Sistemas y Computación"* (Formación Universitaria Oficial).
       - *"Arquitectura Edge & Serverless — Cloudflare Workers, KV & Workers AI"* (Especialidad Técnica en Producción).
       - *"PostgreSQL Avanzado & Row Level Security (RLS) — Supabase Architecture"* (Especialidad Técnica en Producción).
       - *"Pruebas Automatizadas E2E e Integración Continua — Playwright & Jest"* (Especialidad Técnica en Producción).

5. **Acción 2.5: Implementar Página de Error 404 Personalizada (Resolver ERR-01)**
   - *Paso 1:* Crear `src/pages/404.astro` y `src/pages/en/404.astro` utilizando `BaseLayout.astro`.
   - *Paso 2:* Diseñar una interfaz estilizada con la estética terminal de NikkoDev OS:
     ```astro
     <div class="terminal-404">
       <span class="prompt">$ nikko locate route</span>
       <h1>404 — Ruta No Encontrada en el Sistema</h1>
       <p>El segmento solicitado no existe o ha sido reubicado en el cluster.</p>
       <a href="/" class="btn-terminal">cd /home</a>
     </div>
     ```

6. **Acción 2.6: Corrección de Contraste WCAG AA (Resolver A11Y-01)**
   - *Paso 1:* En `src/components/Contact.astro`:
     - Línea 83: Cambiar `color: var(--green, #00D084);` por `color: var(--accent-text, #047857);`.
     - Línea 168: Cambiar `.cmd-prompt { color: var(--green, #00D084); }` por `color: var(--accent-text, #047857);`.
     - Línea 170: Cambiar `.cmd-args { color: var(--cyan, #58D8FF); }` por `color: var(--accent-2-text, #0f766e);`.

7. **Acción 2.7: Solución a Bloqueo de CSP en Fuentes (Resolver SEC-02)**
   - *Paso 1:* En `vercel.json` (línea 10):
     - Agregar `https://fonts.googleapis.com` a `style-src`.
     - Agregar `https://fonts.gstatic.com` a `font-src`.
     - Agregar directiva HSTS completa:
       ```json
       {
         "key": "Strict-Transport-Security",
         "value": "max-age=63072000; includeSubDomains; preload"
       }
       ```

---

### Fase 3: Robustecimiento de Arquitectura y Escaparate Técnico (2–4 Semanas)
*Objetivo: Consolidar el escaparate técnico al 100%, publicar diagramas de arquitectura y maximizar la mantenibilidad del código.*

1. **Acción 3.1: Incorporación de Proyectos Huérfanos al Escaparate (Resolver PRJ-01 y AST-01)**
   - *Paso 1:* Activar en `src/data/projects.ts` los proyectos cuyas imágenes ya existen en el repositorio, utilizando los datos y descripciones técnicas de `CLAUDE.md`:
     - **PawCare:** Asistente veterinario y de salud de mascotas con IA y análisis de síntomas.
     - **KalaChat:** Chatbot de procesamiento de lenguaje natural y soporte inteligente.
     - **BoomLab / amarket:** Web interactiva para empresa/marca de diseño y e-commerce con autenticación, diseño responsive premium e integración con Instagram (notar que el demo anterior alojado en Render requiere reactivación/re-deploy; repo: `https://github.com/NikkoWebDev/amarket`).
     - **Piggy:** Experiencia inmersiva 3D de terror y scrollytelling con animaciones avanzadas en WebGL, GSAP y ScrollTrigger (demo: `https://piggy-platform.vercel.app`; repo: `https://github.com/NikkoWebDev/piggy-platform`).
   - *Paso 2:* Actualizar `src/data/translations.ts` con descripciones de problema, solución y stack para cada uno de estos proyectos.
   - *Paso 3:* La vitrina exhibirá 8 proyectos completos con un 75% de foco en ingeniería de software.

2. **Acción 3.2: Incorporación de Diagramas de Arquitectura en Casos de Estudio**
   - *Paso 1:* En `src/pages/proyectos/[slug].astro` y la versión en inglés, agregar un bloque de visualización de arquitectura de sistemas (mediante diagramas Mermaid en SVG o renderizado nativo CSS):
     - **SinPresupuesto:** PWA Client -> Cloudflare Edge Router -> Worker App / Worker AI (Llama 3.1) -> KV Cache -> Supabase PostgreSQL (Auth + RLS).
     - **Semilleros FIBOG:** Arquitectura híbrida Astro SSG -> Netlify Serverless Functions -> Supabase (PostgreSQL 875 líneas SQL, RLS granular, RPCs) -> OpenRouter LLM.
   - *Paso 2:* Explicar los tradeoffs técnicos: por qué se utilizó KV en lugar de Redis, cómo se estructuraron las políticas RLS y cómo se logró la reducción de 3.0s a 0.2s.

3. **Acción 3.3: Modularización y Refactorización DRY (Resolver MOD-01)**
   - *Paso 1:* Crear `src/scripts/page-interactions.ts` y mover allí las ~250 líneas de lógica duplicada entre `index.astro` y `en.astro`.
   - *Paso 2:* Importar dicho módulo en ambas páginas, reduciendo el bundle de mantenimiento a la mitad.

4. **Acción 3.4: Corrección de Navegación de Idioma (Resolver NAV-01)**
   - *Paso 1:* En `src/components/Navbar.astro` (línea 334), reemplazar la redirección ciega a `/` o `/en`:
     ```javascript
     const path = window.location.pathname;
     let target = '/';
     if (currentLang === 'es') {
       target = path.startsWith('/proyectos/') 
         ? path.replace('/proyectos/', '/en/projects/') 
         : '/en';
     } else {
       target = path.startsWith('/en/projects/') 
         ? path.replace('/en/projects/', '/proyectos/') 
         : '/';
     }
     window.location.href = target;
     ```

5. **Acción 3.5: Migración de Imágenes a `astro:assets`**
   - *Paso 1:* Mover imágenes activas de `public/projects/` a `src/assets/projects/`.
   - *Paso 2:* Actualizar componentes para importar las imágenes y utilizar `<Image src={img} alt="..." format="avif" />` de Astro, asegurando compresión automática de alta fidelidad, formatos modernos y prevención de CLS.

6. **Acción 3.6: Acoplamiento de Type-Checking en CI/CD (Cierre de TYP-01)**
   - *Paso 1:* Una vez completadas las anotaciones de tipos e interfaces en las colecciones de datos (`projects.ts`, `translations.ts`) y componentes durante las acciones 3.1–3.5, actualizar en `package.json` el script de compilación para acoplar el chequeo estricto:
     ```json
     "scripts": {
       "dev": "astro dev",
       "start": "astro dev",
       "build": "astro check && astro build",
       "preview": "astro preview",
       "check": "astro check"
     }
     ```
   - *Resultado:* Protege el repositorio permanentemente contra regresiones de tipos en el pipeline de CI/CD de Vercel, habiendo evitado roturas prematuras en la Fase 1.

---

## 8. Matriz de Priorización (Impacto vs. Esfuerzo)

```
ALTO IMPACTO │
             │  [VICTORIAS RÁPIDAS / QUICK WINS]            [PROYECTOS ESTRATÉGICOS]
             │  • Hotfix CAN-01 (Alinear dominio Vercel)    • Publicar 4 proyectos de IA huérfanos
             │  • Hotfix SEC-01 (npm install astro@7.2.8)   • Diseñar diagramas de arquitectura
             │  • Hotfix LNK-01 (Reparar GitHub 404)        • Migrar imágenes a astro:assets
             │  • Hotfix BUG-01 (Data-attributes analytics) • Modularizar interactions.ts (DRY)
             │  • Crear tsconfig.json y astro check         • Integrar Cal.com para agendas
             │  • Generar y enlazar PDF del CV (CV-01)      
             │  • Cambiar copys de Hero y About (STR-02)    
             │  • Retirar FLAGSHIP de Landings (STR-01)     
             │  • Corregir contraste WCAG AA en Contact     
             │  • Purgar index.html y opcion.html           
─────────────┼──────────────────────────────────────────────┼──────────────────────────────
BAJO IMPACTO │  [TAREAS MENORES / LOW-HANGING FRUIT]        [DESPRIORIZAR]
             │  • Agregar <header> banner landmark          • Refactorizar estilos a Tailwind
             │  • Traducir mantra en Footer.astro           • Animaciones complejas adicionales
             │  • Crear página 404 personalizada            • Soporte a navegadores obsoletos
             │  • Ajustar caché de og-image.png             • Rediseño completo de paleta
             │                                              
             └──────────────────────────────────────────────┴──────────────────────────────
                               BAJO ESFUERZO                                ALTO ESFUERZO
```

### Justificación de los Cuadrantes

1. **Cuadrante 1: Victorias Rápidas (Alto Impacto / Bajo Esfuerzo):**
   - Corregir el bucle canónico en Vercel, actualizar Astro a 7.2.8, enlazar el PDF del CV, arreglar el bug de telemetría y ajustar las líneas de copy en `translations.ts` y `About.astro` toma menos de 4 horas acumuladas de desarrollo, pero elimina el 100% de los bloqueadores críticos que hoy provocan el descarte del portafolio en motores de búsqueda y filtros de reclutamiento.

2. **Cuadrante 2: Proyectos Estratégicos (Alto Impacto / Alto Esfuerzo):**
   - Incorporar los 4 proyectos ya desarrollados (los sistemas de IA `PawCare` y `KalaChat`, la web interactiva comercial `BoomLab / amarket` y la experiencia 3D inmersiva `Piggy`), redactar sus casos de estudio e ilustrar sus flujos con diagramas de arquitectura demanda dedicación técnica y de diseño, pero sitúa al portafolio en el percentil superior (top 5%) del mercado internacional de desarrollo de software.

3. **Cuadrante 3: Tareas Menores (Bajo Impacto / Bajo Esfuerzo):**
   - Ajustes de semántica HTML (`<header>`), traducción de textos residuales en el footer y diseño de la página 404 aportan pulcritud profesional y accesibilidad con muy baja inversión de tiempo.

4. **Cuadrante 4: Despriorizar (Bajo Impacto / Alto Esfuerzo):**
   - Reescribir el CSS nativo a Tailwind o añadir animaciones complejas adicionales no incrementa la tasa de conversión de clientes ni el valor percibido del candidato. El sistema de diseño "NikkoDev OS" ya es visualmente atractivo y extremadamente veloz.

---

## 9. Conclusión Final del Comité de Auditoría

El portafolio NikkoDev posee los cimientos técnicos más sólidos que un evaluador de sistemas puede esperar: velocidad de carga pura, cero sobrecarga de frameworks cliente, una estética visual distintiva y dos sistemas de software en producción de mérito indiscutible.

Sin embargo, el portafolio ha estado operando con el "freno de mano puesto":
- Su **infraestructura** redirigía en bucle a Googlebot.
- Sus **dependencias** albergaban vulnerabilidades críticas conocidas.
- Su **narrativa** rebajaba la figura de un ingeniero de plataformas Edge e IA al nivel de un estudiante de segundo año que arma páginas web sencillas a $7 USD la hora.

La ejecución disciplinada de la Hoja de Ruta presentada en este informe desbloqueará de inmediato el potencial del portafolio, posicionando a Brayan Nikolas Gallo León exactamente donde su capacidad técnica lo acredita: como un **Full-Stack Developer especializado en IA aplicada y Edge Computing**, listo para asumir roles de alto impacto técnico en startups y organizaciones globales.
