# Reporte Exhaustivo de Auditoría: Live Production, Network, Security & SEO
**Proyecto**: NikkoDev Portfolio (`https://nikko.dev` / `https://www.nikko.dev`)  
**Fecha de Ejecución**: 2026-09-20  
**Entorno de Auditoría**: Explorer Subagent (`explorer_live_ops`)  
**Base de Referencia**: Repositorio local Astro v7.0.6, `PORTFOLIO_STRATEGY.md`, `vercel.json`  

---

## 1. Resumen Ejecutivo

Se realizó una auditoría técnica 360° en vivo contra el despliegue en producción de NikkoDev en `https://nikko.dev` y `https://www.nikko.dev`, contrastándolo con la configuración local del repositorio.

### Veredicto Global
El sitio web cuenta con un rendimiento de entrega sólido gracias a la red Edge de Vercel y compresión Brotli activa (reducción del 75.7% en payload HTML), TLS 1.3 moderno con certificados vigentes de Let's Encrypt, y una estructura de encabezados HTTP mayoritariamente alineada con las mejores prácticas. Asimismo, se confirmó paridad bit a bit (`MD5: d632154853ea506f5f728a278dc954d8`) entre el build local de Astro (`dist/index.html`) y el HTML servido por Vercel.

Sin embargo, se detectaron **2 fallas críticas** y **3 fallas de severidad alta** que comprometen gravemente el posicionamiento SEO, la indexación en Google, la experiencia de usuario de reclutadores y la percepción estratégica profesional:
1. **Bucle de redirección canónica SEO (Crítico)**: Vercel está configurado con `www.nikko.dev` como dominio primario/canónico, mientras que Astro (`astro.config.mjs`, `BaseLayout.astro`) y `sitemap.xml` tienen hardcodeado `https://nikko.dev`. En consecuencia, la página en `www.nikko.dev` declara que su canónica es `nikko.dev`, pero el servidor responde con una redirección permanente 308 de vuelta a `www.nikko.dev`. Todas las URLs del sitemap sufren este salto.
2. **Enlace roto (HTTP 404) al repositorio del proyecto insignia (Crítico)**: El botón *"Código ↗"* de SinPresupuesto apunta a `https://github.com/SinPresupuesto/SinPre`, el cual devuelve un error HTTP 404 en GitHub.
3. **Bloqueo CSP de tipografías en `/karen` (Alto)**: La política CSP en `vercel.json` (`style-src 'self' 'unsafe-inline'; font-src 'self'`) bloquea las fuentes de Google Fonts requeridas por `/karen.astro`.
4. **Disparidad de posicionamiento vs `PORTFOLIO_STRATEGY.md` (Alto)**: El Hero y la sección "Sobre mí" muestran explícitamente *"Estudio Ingeniería de Sistemas en la UNAL"* y *"año: 2do"*, violando la Regla 1 de `PORTFOLIO_STRATEGY.md` que prohíbe presentarse como estudiante universitario.
5. **Ausencia de página 404 personalizada (Alto)**: Las rutas inexistentes devuelven texto plano crudo sin estilos de Vercel (`NOT_FOUND`).

---

## 2. Matriz Consolidada de Hallazgos por Severidad

| ID | Área | Hallazgo | Severidad | Impacto |
|---|---|---|---|---|
| **H-01** | SEO / Red | Bucle canónico y sitemap apuntando a dominio con redirección 308 | **Crítico** | Desindexación o confusión en Googlebot/Bing, dilución de PageRank |
| **H-02** | UX / Credibilidad | Enlace de repositorio de SinPresupuesto arroja HTTP 404 en GitHub | **Crítico** | Pérdida de credibilidad ante reclutadores y CTOs que auditan código |
| **H-03** | Seguridad / CSP | CSP bloquea Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) en `/karen` | **Alto** | Ruptura visual y tipográfica en la página privada |
| **H-04** | Estrategia / Branding | Mensajes de "Estudiante de 2do año" en Hero y About contradicen `PORTFOLIO_STRATEGY.md` | **Alto** | Percepción de principiante en lugar de Full-Stack / Integrador IA |
| **H-05** | UX / SEO | Ausencia de página de error 404 personalizada (Astro / Vercel) | **Alto** | Rebote inmediato de usuarios por página de texto plano crudo de Vercel |
| **H-06** | Accesibilidad / A11y | Violación de contraste WCAG AA en modo claro (`Contact.astro`) | **Medio** | Textos con contraste 2.43:1 y 2.38:1 (mínimo requerido 4.5:1) |
| **H-07** | SEO / Routing | Inconsistencia de trailing slashes entre enlaces internos (`/`) y sitemap (sin `/`) | **Medio** | Posible contenido duplicado o peticiones innecesarias |
| **H-08** | Rendimiento / CDN | Imágenes de proyectos no optimizadas (~1.2 MB en JPEGs) y sin caché inmutable | **Medio** | Mayor consumo de datos en móviles; falta de formatos AVIF/WebP |
| **H-09** | Seguridad / HTTP | Cabecera HSTS no configurada en `vercel.json` (falta `includeSubDomains; preload`) | **Medio** | No elegible para HSTS Preload List de Chromium |
| **H-10** | Red / Latencia | Doble salto de redirección en tráfico HTTP (`http://nikko.dev` -> 2 hops -> ~1.4s) | **Medio** | Sobrecosto de latencia de 800ms para usuarios que no escriben https |
| **H-11** | Semántica HTML | Ausencia del elemento semántico `<header>` en la estructura del documento | **Bajo** | Lectores de pantalla no reconocen landmark banner principal |
| **H-12** | Rendimiento Web | Falta de etiquetas `<link rel="preload">` para fuentes locales WOFF2 | **Bajo** | FOIT/FOUT en conexiones lentas durante el primer render |
| **H-13** | DNS / Infraestructura | Falta de registros DNS CAA, AAAA (IPv6) y MX huérfano con Zoho TXT | **Bajo** | Falta de restricción de CAs y ausencia de soporte IPv6 nativo |
| **H-14** | Mantenibilidad | Archivos estáticos heredados en raíz (`index.html` de 54KB, `opcion.html`) | **Bajo** | Confusión en el workspace y riesgo de drift en tooling |
| **H-15** | SEO / Schema | Fechas estáticas hardcodeadas (`2026-09-16`) en JSON-LD de todas las páginas | **Bajo** | Falta de frescura dinámica en metadatos Schema.org |

---

## 3. Diagnóstico Detallado por Área

### 3.1. Disponibilidad, Red e Infraestructura

#### A. Resolución DNS e Infraestructura
- **Registrador y DNS Autoritativo**: Spaceship (`launch1.spaceship.net`, `launch2.spaceship.net`).
- **Proveedor de Alojamiento y CDN**: Vercel Edge Network (AWS Anycast AS16509).
- **Direcciones IP**:
  - `nikko.dev` (Apex): `A` -> `216.198.79.1` (Vercel Anycast IP).
  - `www.nikko.dev`: `CNAME` -> `dc489a78254f20ec.vercel-dns-017.com` -> `A` `64.29.17.65`, `216.198.79.65`.
- **Registros TXT**:
  - `zoho-verification=zb64843322.zmverify.zoho.com`
  - `google-site-verification=54h9eUw2fkDZOnIEEwLIQHEYZ6ghkBy_KD9x1Gy6EVE`
- **Registro DMARC**: `_dmarc.nikko.dev` -> `v=DMARC1; p=none;`.
- **Anomalías detectadas**:
  - **Sin registros AAAA (IPv6)**: Ninguno de los dos dominios tiene soporte IPv6 configurado.
  - **Sin registros MX**: A pesar de tener verificación TXT de Zoho Mail, no existen registros MX configurados en el DNS de Spaceship.
  - **Sin registros CAA**: Cualquier entidad certificadora pública puede emitir certificados para `nikko.dev`.

#### B. Análisis de Cadenas de Redirección
Se ejecutó un análisis de trazabilidad HTTP con `curl -I` sobre las 4 variantes de dominio:
1. `http://nikko.dev`:
   ```http
   HTTP/1.0 308 Permanent Redirect
   Location: https://nikko.dev/
   ```
   Seguido inmediatamente por:
   ```http
   HTTP/2 308 
   location: https://www.nikko.dev/
   ```
   **Resultado**: Doble salto de redirección (2 hops) antes de alcanzar el recurso final `200 OK`.
2. `https://nikko.dev`:
   ```http
   HTTP/2 308 
   location: https://www.nikko.dev/
   ```
   **Resultado**: 1 salto de redirección (308).
3. `http://www.nikko.dev`:
   ```http
   HTTP/1.0 308 Permanent Redirect
   Location: https://www.nikko.dev/
   ```
   **Resultado**: 1 salto directo a HTTPS en `www`.
4. `https://www.nikko.dev`:
   ```http
   HTTP/2 200 
   server: Vercel
   x-vercel-cache: HIT
   ```
   **Resultado**: Destino final canónico servido por Vercel.

#### C. Métricas Cuantitativas de Latencia y TTFB (5 muestras por endpoint)
| Métrica | `https://www.nikko.dev` (Directo) | `https://nikko.dev` (308) | `http://nikko.dev` (2 Hops) |
|---|---|---|---|
| **TTFB Mínimo** | 337.6 ms | 426.8 ms | - |
| **TTFB Promedio** | 411.9 ms | 528.7 ms | - |
| **TTFB Mediana** | 389.6 ms | 536.1 ms | - |
| **Tiempo Total (1 intento)** | 479.2 ms | 990.8 ms | 1368.5 ms |
| **Tiempo Total (Promedio)** | 624.4 ms | 1100.2 ms | 1436.2 ms |
| **Sobrecosto de Latencia** | **0 ms (Baseline)** | **+475.8 ms** | **+811.8 ms** |

*Conclusión de Infraestructura*: Los usuarios y motores de búsqueda que visitan `http://nikko.dev` o `https://nikko.dev` sufren una penalización de casi medio segundo a un segundo completo de espera debido a los saltos innecesarios de redirección.

---

### 3.2. SSL/TLS y Seguridad de Transporte

- **Entidad Emisora**: Let's Encrypt Authority (`YR1`).
- **Validez**: 
  - `www.nikko.dev`: Del 06 de agosto de 2026 al 04 de noviembre de 2026 (~45 días restantes, gestión automatizada por Vercel).
  - `nikko.dev`: Del 06 de agosto de 2026 al 04 de noviembre de 2026.
- **Protocolos Soportados**:
  - **TLS 1.3**: Activo y negociado por defecto (`TLS_AES_128_GCM_SHA256`).
  - **TLS 1.2**: Activo como compatibilidad (`ECDHE-RSA-AES128-GCM-SHA256`).
  - **TLS 1.0 / 1.1**: Completamente deshabilitados a nivel de edge (verificado con handshake handshake error: `no protocols available`).
- **Evaluación**: Excelente configuración de cifrado y suites modernas de transporte seguro.

---

### 3.3. Cabeceras HTTP de Seguridad: Producción vs `vercel.json`

Se realizó la comparación exacta entre las cabeceras configuradas localmente en `/home/niko/Proyectos/My portfolio/vercel.json` y las cabeceras reales devueltas por `curl -s -D -`:

| Cabecera HTTP | Valor en `vercel.json` | Valor Real en Producción | Estado |
|---|---|---|---|
| `X-Frame-Options` | `SAMEORIGIN` | `SAMEORIGIN` | Coincide (Protección Clickjacking activa) |
| `X-Content-Type-Options` | `nosniff` | `nosniff` | Coincide (Protección MIME Sniffing activa) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | `strict-origin-when-cross-origin` | Coincide (Protección de privacidad de referrer) |
| `X-XSS-Protection` | `0` | `0` | Coincide (Deshabilita filtro antiguo para evitar bugs) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | `camera=(), microphone=(), geolocation=()` | Coincide (Restricción de APIs del navegador) |
| `Content-Security-Policy` | Ver detalle abajo | Coincide exactamente | **Presenta fallas de bloqueo** en rutas |
| `Strict-Transport-Security` | **No configurado** | `max-age=63072000` | Inyectado por defecto por Vercel; **Falta preload** |
| `Cache-Control` (Páginas) | `public, s-maxage=3600, stale-while-revalidate=86400` | Coincide | Coincide |
| `Cache-Control` (`/_astro/*`) | `public, max-age=31536000, immutable` | Coincide | Coincide |
| `Cache-Control` (Imágenes `/projects/*`) | **No configurado** | `public, s-maxage=3600, stale-while-revalidate=86400` | **Deficiente**: no tiene `max-age` para navegador |

#### Hallazgos Específicos de Seguridad:
1. **Fallo Crítico de CSP en `/karen.astro`**:
   - `vercel.json` define:
     ```
     style-src 'self' 'unsafe-inline'; font-src 'self';
     ```
   - Sin embargo, `/karen.astro` (líneas 13-18) importa:
     ```html
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:...&display=swap" rel="stylesheet" />
     ```
   - Al no incluir `https://fonts.googleapis.com` en `style-src` ni `https://fonts.gstatic.com` en `font-src`, el navegador bloquea las hojas de estilo y las fuentes web de Cormorant Garamond por violación de CSP.
2. **Uso de `'unsafe-inline'` en `script-src`**:
   - Permite ejecución de scripts en línea. Si bien es requerido actualmente por el script síncrono antiteñido (`themeColor`) en `BaseLayout.astro`, se recomienda migrar a directivas con hash SHA-256 o nonces para fortalecer la defensa contra XSS.
3. **Ausencia de directiva de reporte CSP**:
   - No existe `report-uri` ni `report-to`, por lo que las violaciones de CSP en los clientes ocurren silenciosamente sin notificación para el desarrollador.
4. **HSTS incompleto**:
   - Vercel inyecta `max-age=63072000` automáticamente, pero no agrega `includeSubDomains; preload`, impidiendo que el dominio califique para el registro global de precarga de HTTPS en los navegadores.

---

### 3.4. Auditoría de SEO, Metadatos y Rastreo

#### A. Disparidad Crítica: Bucle de Redirección Canónica
En `src/layouts/BaseLayout.astro`:
- Línea 12: `const SITE = "https://nikko.dev";`
- Línea 36: `const canonicalUrl = `${SITE}${pagePath === "/" ? "" : pagePath}`;`
- Esto genera en el HTML servido en `https://www.nikko.dev`:
  ```html
  <link rel="canonical" href="https://nikko.dev">
  <link rel="alternate" hreflang="es" href="https://nikko.dev">
  <link rel="alternate" hreflang="en" href="https://nikko.dev/en">
  <link rel="alternate" hreflang="x-default" href="https://nikko.dev">
  <meta property="og:url" content="https://nikko.dev">
  ```
- **El Conflicto**:
  1. Googlebot rastrea `https://www.nikko.dev`.
  2. Lee el tag `<link rel="canonical" href="https://nikko.dev">`, indicando que la versión autoritativa es `https://nikko.dev`.
  3. Googlebot va a `https://nikko.dev` para indexarla.
  4. El servidor Vercel responde con `308 Permanent Redirect` hacia `https://www.nikko.dev`.
  5. Googlebot detecta un **bucle canónico autorreferencial** (*Canonical Loop*).
  6. **Consecuencia**: Google ignora la etiqueta canónica, reporta advertencias en Google Search Console (*"Página duplicada: el usuario no ha seleccionado ninguna versión canónica"* o *"La página canónica redirige"*), y puede desindexar las URLs secundarias.

#### B. Directivas de Rastreo (`robots.txt` y `sitemap.xml`)
- En `robots.txt`:
  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://nikko.dev/sitemap.xml
  ```
- Al solicitar `https://nikko.dev/robots.txt` o `https://nikko.dev/sitemap.xml`, se devuelve `308 Permanent Redirect` hacia `www.nikko.dev`.
- En `public/sitemap.xml`:
  - Contiene 10 URLs mapeadas (`/`, `/en`, `/proyectos/fibog`, `/en/projects/fibog`, `/proyectos/sinpresupuesto`, etc.).
  - **TODAS** las entradas `<loc>` usan `https://nikko.dev/...`.
  - Cuando los motores de búsqueda procesan el sitemap, el 100% de las URLs enlazadas arrojan código de estado HTTP 308 en lugar de HTTP 200 directo.
- **Inconsistencia de Trailing Slashes**:
  - En `sitemap.xml`: `<loc>https://nikko.dev/proyectos/fibog</loc>` (sin barra final).
  - En `src/components/Projects.astro`: `<a href="/proyectos/fibog/">` (con barra final).
  - En `src/pages/proyectos/[slug].astro`: Canonical declarada sin barra final (`/proyectos/fibog`).
  - Vercel responde 200 a ambas versiones, lo que crea potenciales problemas de contenido duplicado si no se unifica el criterio con `cleanUrls` y redirecciones 301 forzadas.

#### C. Enlace Roto Crítico en Proyecto Insignia
- En `src/components/Projects.astro` (línea 21) y en la versión en inglés `src/pages/en.astro`:
  ```html
  <a href="https://github.com/SinPresupuesto/SinPre" target="_blank" ...>Código ↗</a>
  ```
- Al ejecutar `curl -I https://github.com/SinPresupuesto/SinPre`:
  ```http
  HTTP/2 404 
  server: github.com
  ```
- El repositorio es privado o fue renombrado/eliminado, dejando un enlace roto visible en el proyecto más destacado de la página principal.

#### D. Página de Error 404 Inexistente
- Al solicitar una URL inválida (p.ej. `https://www.nikko.dev/ruta-inexistente`):
  - Respuesta HTTP: `404 Not Found`.
  - `Content-Type: text/plain; charset=utf-8`.
  - Cuerpo: `The page could not be found\n\nNOT_FOUND\niad1::r76zs-...`.
- No existe ningún componente `src/pages/404.astro` ni archivo estático de contingencia, degradando la retención de usuarios y el flujo de navegación ante errores.

#### E. Metadatos Open Graph y Twitter Cards
- `og:title`: `"NikkoDev | Desarrollo Web, IA y Automatización"` (Correcto).
- `og:description`: `"Desarrollo web con IA: rápido, hermoso y optimizado..."` (Correcto, aunque difiere sutilmente del `meta description`).
- `og:image`: `"https://nikko.dev/og-image.png"` (Existe, tamaño 149 KB, dimensiones 1200x630).
- `twitter:card`: `"summary_large_image"` (Correcto).
- `twitter:site` y `twitter:creator`: `"@NikkoWebDev"` (Correcto).
- Fechas Schema.org: Hardcodeadas a `2026-09-16` en `src/layouts/BaseLayout.astro`.

---

### 3.5. Accesibilidad (A11y) y Semántica HTML

#### A. Estructura de Landmarks y Semántica
- Elementos detectados en el DOM renderizado:
  - `<header>`: **0 elementos**. La barra superior de navegación no está envuelta en un elemento `<header role="banner">`.
  - `<nav>`: 3 elementos (Navegación principal, Menú overlay móvil, Enlaces de pie de página).
  - `<main>`: 1 elemento (Correcto).
  - `<footer>`: 1 elemento (Correcto).
  - `<section>`: 9 elementos estructurados con identificadores de anclaje.

#### B. Jerarquía de Encabezados
- H1: 1 elemento (*"Construyo plataformas web con IA aplicada y Edge Computing. En producción, no en demos."*).
- H2: 8 elementos (Secciones principales).
- H3: 19 elementos (Tarjetas de servicios, títulos de proyectos, historial de experiencia, educación).
- H4: 16 elementos (Estructura de problemas, soluciones y aprendizajes en casos de estudio).
- H5/H6: 0 elementos.
- **Evaluación**: Excelente jerarquía secuencial, sin saltos de nivel.

#### C. Accesibilidad de Elementos Interactivos
- **Imágenes**: 4 imágenes de proyectos en el homepage, todas con atributo `alt`.
- **Enlaces**: 38 enlaces analizados, todos cuentan con texto perceptible o `aria-label` descriptivo.
- **Botones**: 3 botones analizados (`themeToggle`, `langToggle`, `mobileToggle`), todos cuentan con `aria-label` y roles apropiados.
- **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">` permite zoom manual sin restricciones arbitrarias (`user-scalable=no` ausente, conforme a WCAG).

#### D. Fallas de Contraste Cromático (WCAG 2.1 AA)
A pesar de que `src/styles/global.css` define tokens accesibles para texto (`--accent-text: #047857` con ratio 5.25:1), se encontraron estilos locales en componentes que omiten estos tokens:
- En `src/components/Contact.astro`:
  - Línea 83: `.section-label { color: var(--green, #00D084); }`
    - Sobre el fondo menta claro (`--bg: #F0FDF6`), el color `#10B981` tiene un ratio de contraste de **2.43:1** (Falla WCAG AA, requiere mínimo 4.5:1).
  - Línea 168: `.cmd-prompt { color: var(--green, #00D084); }`
    - Ratio de contraste **2.43:1** (Falla WCAG AA).
  - Línea 170: `.cmd-args { color: var(--cyan, #58D8FF); }`
    - Sobre fondo claro, `#14B8A6` tiene un ratio de **2.38:1** (Falla WCAG AA).
  - Línea 144: `.contact-cmd` usa `color: var(--muted, #94A3B8)` dentro de `.contact-shell` (fondo translúcido blanco `rgba(255,255,255,0.66)`).
    - El ratio resultante es **2.53:1** (Falla WCAG AA).

---

### 3.6. Consistencia y Paridad de Despliegue

#### A. Verificación de Integridad de Build
- Se comparó el hash MD5 del archivo compilado localmente contra el archivo HTML servido en vivo por Vercel:
  - Hash de `dist/index.html`: `d632154853ea506f5f728a278dc954d8`.
  - Hash de `https://www.nikko.dev/`: `d632154853ea506f5f728a278dc954d8`.
  - Cabecera ETag de Vercel: `"d632154853ea506f5f728a278dc954d8"`.
- **Veredicto**: **Paridad absoluta del 100%**. La versión en producción corresponde con exactitud al último commit de la rama `main` (`7fff3fa`).

#### B. Detección de Archivos Huérfanos en la Raíz
Se identificaron dos archivos HTML estáticos residuales en la raíz del proyecto:
- `/home/niko/Proyectos/My portfolio/index.html` (54,731 bytes, 1,799 líneas).
- `/home/niko/Proyectos/My portfolio/opcion.html` (12,520 bytes).
Estos archivos corresponden a maquetas estáticas previas al desarrollo del proyecto en Astro. Aunque Vercel compila desde `src/pages/` ignorando estos archivos debido a la configuración de Astro, su presencia en la raíz representa deuda técnica y riesgo de confusión en tareas de auditoría y tooling de despliegue.

---

### 3.7. Auditoría de Alineación Estratégica vs `PORTFOLIO_STRATEGY.md`

`PORTFOLIO_STRATEGY.md` establece mandatos taxativos sobre el posicionamiento profesional de Brayan Nikolas Gallo:

> **Regla Principal (Sección 1)**:  
> *"Brayan debe presentarse como: Full-Stack Developer especializado en IA aplicada, Edge Computing y plataformas web modernas.*  
> *No debe presentarse como: Estudiante que busca experiencia, Programador principiante...*  
> *La universidad debe aparecer únicamente como respaldo académico. Nunca como propuesta de valor principal."*  
>  
> **Mensaje Final (Sección 16)**:  
> *"No debe parecer el portafolio de un estudiante. Debe parecer el portafolio de alguien que ya construyó productos reales para usuarios reales."*

#### Contraste con el Contenido en Vivo:
1. **Hero Principal** (`src/components/Hero.astro`, línea 30 en vivo):
   - Texto visible en producción:
     ```html
     <p class="hero-loc">Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible</p>
     ```
   - **Evaluación**: Ubicar la frase *"Estudio Ingeniería de Sistemas en la UNAL"* inmediatamente debajo del titular principal presenta al autor ante reclutadores y clientes primeramente como estudiante en formación, contradiciendo frontalmente el objetivo estratégico.
2. **Ventana de Código "Sobre mí"** (`src/components/About.astro`):
   - Líneas 4 y 5 del editor simulado:
     ```typescript
     universidad: "UNAL · Ing. de Sistemas",
     año: "2do",
     ```
   - En el párrafo descriptivo:
     ```html
     "Segundo año de ingeniería, sí. Pero con la madurez de quien entiende que la tecnología..."
     ```
   - **Evaluación**: Resaltar estar en *"2do año"* activa un sesgo inconsciente en clientes y CTOs ("es apenas un estudiante que cursa primeros semestres"), opacando los logros de nivel senior demostrados en proyectos como FIBOG (11.000 líneas de código, RLS en PostgreSQL, 13 grupos gestionados) y SinPresupuesto (PWA, Edge Workers, Llama 3.1).

---

## 4. Plan de Acción y Hoja de Ruta Priorizada

### Fase 1: Correcciones Críticas Inmediatas (Impacto Máximo / Esfuerzo Mínimo)
1. **Unificar Dominio Primario Canónico**:
   - Decidir entre `https://nikko.dev` o `https://www.nikko.dev` como dominio primario.
   - Si se prefiere `https://nikko.dev` (recomendado para portfolios modernos):
     - Configurar en Vercel Dashboard `nikko.dev` como dominio principal y redirigir `www.nikko.dev` -> `nikko.dev`.
     - O, si se mantiene `www.nikko.dev` como principal en Vercel, actualizar `astro.config.mjs`, `BaseLayout.astro` y `public/sitemap.xml` para que apunten a `https://www.nikko.dev`.
   - Modificar `public/sitemap.xml` y `src/layouts/BaseLayout.astro` para eliminar discrepancias de dominio y trailing slashes.
2. **Reparar Enlace a Repositorio de SinPresupuesto**:
   - En `src/components/Projects.astro` y `src/pages/en.astro`, actualizar el enlace `https://github.com/SinPresupuesto/SinPre` a la URL pública correcta del repositorio (o reemplazarlo por un enlace al showcase/demo si el repositorio permanece privado).

### Fase 2: Correcciones de Seguridad, UX y Posicionamiento (Impacto Alto / Esfuerzo Medio)
3. **Ajustar CSP en `vercel.json`**:
   - Añadir `https://fonts.googleapis.com` a `style-src` y `https://fonts.gstatic.com` a `font-src` para rehabilitar tipografías en `/karen`, o migrar `/karen` a fuentes autoalojadas locales `@fontsource`.
   - Incorporar directiva HSTS completa en `vercel.json`:
     ```json
     { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
     ```
4. **Implementar Página de Error 404 Personalizada**:
   - Crear `src/pages/404.astro` con el diseño OS/Terminal de NikkoDev y botón de regreso a la consola de inicio.
5. **Realinear Copy con `PORTFOLIO_STRATEGY.md`**:
   - En `Hero.astro`: Cambiar *"Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto"* por *"Full-Stack Developer · Especialista en Edge & IA · Bogotá / Remoto"*.
   - En `About.astro`: Mover la formación universitaria a la sección de certificaciones y trayectoria; remover la etiqueta *"año: 2do"*.

### Fase 3: Optimizaciones de Accesibilidad y Rendimiento (Impacto Medio / Esfuerzo Bajo)
6. **Corregir Contraste WCAG en `Contact.astro`**:
   - Reemplazar `var(--green, #00D084)` por `var(--accent-text)` en `.section-label` y `.cmd-prompt`.
   - Reemplazar `var(--cyan, #58D8FF)` por `var(--accent-2-text)` en `.cmd-args`.
   - Reemplazar `var(--muted, #94A3B8)` por `#2D3748` o token de alto contraste dentro del terminal de contacto.
7. **Optimización de Activos de Imagen**:
   - Convertir `sinpresupuesto.jpg`, `fibog.jpg`, `autorreparacion.jpg` e `indusec.jpg` a formatos modernos WebP/AVIF reduciendo el peso global de 1.2 MB a menos de 250 KB.
   - Agregar regla de caché en `vercel.json` para `/projects/(.*)` con `Cache-Control: public, max-age=31536000, immutable`.
8. **Limpieza del Repositorio**:
   - Eliminar los archivos huérfanos `index.html` y `opcion.html` del directorio raíz.
   - Envolver la barra de navegación en un elemento `<header>` para cumplir con la semántica HTML5 landmark banner.

---
*Reporte generado por Explorer Subagent (`explorer_live_ops`) con base en telemetría en vivo y análisis del repositorio local.*
