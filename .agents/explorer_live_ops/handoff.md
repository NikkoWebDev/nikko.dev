# Handoff Report: Live Production, Network, Security & SEO Audit

**Agent Working Directory**: `/home/niko/Proyectos/My portfolio/.agents/explorer_live_ops`  
**Target System**: `https://nikko.dev` / `https://www.nikko.dev` vs Local Repository  
**Handoff Type**: Hard (Task Complete)  

---

## 1. Observation

1. **DNS & Edge Infrastructure**:
   - Tool command: Node DNS resolution against `nikko.dev` and `www.nikko.dev`.
     - `nikko.dev A`: `['216.198.79.1']` (Amazon AS16509 / Vercel Edge).
     - `nikko.dev NS`: `['launch2.spaceship.net', 'launch1.spaceship.net']`.
     - `nikko.dev AAAA`: `ENODATA` (Sin soporte IPv6).
     - `nikko.dev MX`: `ENODATA`.
     - `nikko.dev TXT`: `zoho-verification=zb64843322.zmverify.zoho.com`, `google-site-verification=54h9eUw2fkDZOnIEEwLIQHEYZ6ghkBy_KD9x1Gy6EVE`.
     - `www.nikko.dev CNAME`: `['dc489a78254f20ec.vercel-dns-017.com']` -> `['64.29.17.65', '216.198.79.65']`.
2. **Redirect Hops & Latency Overhead**:
   - `curl -I http://nikko.dev` -> `HTTP/1.0 308 Permanent Redirect` to `https://nikko.dev/`.
   - `curl -I https://nikko.dev` -> `HTTP/2 308` to `location: https://www.nikko.dev/`.
   - `curl -I http://www.nikko.dev` -> `HTTP/1.0 308 Permanent Redirect` to `https://www.nikko.dev/`.
   - `curl -I https://www.nikko.dev` -> `HTTP/2 200` (`x-vercel-cache: HIT`).
   - Timings (5-sample average):
     - Direct `https://www.nikko.dev`: TTFB avg `411.9ms`, Total time `512.8ms`.
     - Following `https://nikko.dev`: Total time `1100.2ms` (penalización de +500ms).
     - Following `http://nikko.dev`: Total time `1436.2ms` (penalización de +800ms por doble redirección 308).
3. **Canonical & Sitemap Disparity**:
   - `src/layouts/BaseLayout.astro:12`: `const SITE = "https://nikko.dev";`
   - `src/layouts/BaseLayout.astro:36`: `const canonicalUrl = `${SITE}${pagePath === "/" ? "" : pagePath}`;`
   - HTML servido en `https://www.nikko.dev/`: `<link rel="canonical" href="https://nikko.dev">`.
   - `public/sitemap.xml:5`: `<loc>https://nikko.dev/</loc>`. Todas las 10 entradas usan `https://nikko.dev/...`.
   - Resultado: Al seguir la URL canónica declarada, Vercel responde con `308 Permanent Redirect` hacia `https://www.nikko.dev/`.
4. **Enlace Roto (HTTP 404)**:
   - En `src/components/Projects.astro:21` y `src/pages/en.astro`: enlace a `https://github.com/SinPresupuesto/SinPre`.
   - `curl -I -s -S https://github.com/SinPresupuesto/SinPre` devuelve:
     ```http
     HTTP/2 404
     date: Sun, 20 Sep 2026 14:17:45 GMT
     ```
5. **Políticas de Seguridad HTTP y CSP**:
   - `vercel.json:10`:
     `"Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self' https://wa.me; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https:; connect-src 'self'; upgrade-insecure-requests"`
   - `src/pages/karen.astro:13-18`: Importa hojas de estilo desde `https://fonts.googleapis.com` y fuentes desde `https://fonts.gstatic.com`.
   - Cabeceras de `curl -I https://www.nikko.dev/karen`: `style-src 'self' 'unsafe-inline'` y `font-src 'self'` se aplican, bloqueando activamente los recursos de Google Fonts.
   - `Strict-Transport-Security`: Presente en vivo como `max-age=63072000` (inyectado por Vercel), pero omitido en `vercel.json` y sin directivas `includeSubDomains; preload`.
6. **Manejo de Errores 404**:
   - `curl -s -D - https://www.nikko.dev/ruta-inexistente` devuelve:
     `Content-Type: text/plain; charset=utf-8` y cuerpo plano: `The page could not be found\nNOT_FOUND`.
   - No existe `src/pages/404.astro`.
7. **Accesibilidad y Contraste**:
   - `src/components/Contact.astro:83`: `.section-label { color: var(--green, #00D084); }` -> Ratio de contraste sobre `#F0FDF6`: **2.43:1** (Falla WCAG AA, mínimo 4.5:1).
   - `src/components/Contact.astro:168`: `.cmd-prompt { color: var(--green, #00D084); }` -> **2.43:1**.
   - `src/components/Contact.astro:170`: `.cmd-args { color: var(--cyan, #58D8FF); }` -> **2.38:1**.
   - Landmark `<header>`: 0 elementos en el DOM.
8. **Paridad de Despliegue**:
   - MD5 de `dist/index.html`: `d632154853ea506f5f728a278dc954d8`.
   - MD5 de `curl https://www.nikko.dev/`: `d632154853ea506f5f728a278dc954d8`.
   - ETag en respuesta HTTP: `"d632154853ea506f5f728a278dc954d8"`.
   - Archivos estáticos en raíz: `index.html` (54,731 B, 1,799 líneas) y `opcion.html` (12,520 B) son remanentes antiguos desacoplados del build de Astro.
9. **Desviación de `PORTFOLIO_STRATEGY.md`**:
   - Texto en Hero (`src/components/Hero.astro`): *"Estudio Ingeniería de Sistemas en la UNAL · Trabajo remoto · Estoy disponible"*.
   - Texto en About (`src/components/About.astro`): *"universidad: 'UNAL · Ing. de Sistemas', año: '2do'"* y *"Segundo año de ingeniería, sí"*.

---

## 2. Logic Chain

1. **De la Observación 1 y 2 al Impacto de Red**: Dado que Vercel tiene como dominio primario `www.nikko.dev`, cualquier petición al apex `nikko.dev` es interceptada por el CDN y redirigida con un código 308. Cuando un usuario accede vía `http://nikko.dev`, el primer salto lo envía a `https://nikko.dev/` y el segundo a `https://www.nikko.dev/`, duplicando los handshakes TLS y sumando ~800ms de latencia evitable.
2. **De la Observación 3 al Conflicto Crítico de Indexación**: Al estar configurado Astro con `site: "https://nikko.dev"`, el compilador inyecta etiquetas canónicas y sitemaps apuntando al dominio apex. Esto genera una contradicción directa entre la capa de aplicación (que dice "la página vive en `nikko.dev`") y la capa de red de Vercel (que dice "la página se mudó permanentemente a `www.nikko.dev`"). Esto crea un bucle canónico que desorienta a Googlebot y deteriora el posicionamiento orgánico.
3. **De la Observación 4 al Deterioro de Credibilidad**: En un portafolio técnico cuyo foco es demostrar capacidad técnica real en producción, el proyecto Tier S (*SinPresupuesto*) tiene su enlace de código fuente apuntando a una URL de GitHub que arroja 404, invalidando la verificación técnica por parte de reclutadores y evaluadores.
4. **De la Observación 5 a la Ruptura de `/karen`**: El archivo `vercel.json` aplica cabeceras globales para todas las rutas `/(.*)`. Al restringir `style-src` y `font-src` únicamente a `'self'`, la página `/karen.astro` no puede cargar los estilos y archivos WOFF2 desde `googleapis.com` y `gstatic.com`, fallando silenciosamente en el navegador del cliente.
5. **De la Observación 7 al Incumplimiento de Accesibilidad**: Aunque el sistema de diseño central (`global.css`) creó variables AA como `--accent-text`, componentes individuales como `Contact.astro` utilizaron tokens crudos (`var(--green)`) con ratios inferiores a 2.5:1, violando las pautas de accesibilidad WCAG 2.1 nivel AA.
6. **De la Observación 8 a la Validación de Paridad**: La coincidencia exacta de los hashes MD5 y la cabecera ETag entre el artefacto local compilado y la respuesta del servidor en vivo demuestra que la canalización de CI/CD de Vercel está completamente sincronizada con el repositorio local.
7. **De la Observación 9 a la Pérdida de Valor Estratégico**: `PORTFOLIO_STRATEGY.md` define taxativamente que el portafolio no debe proyectar la imagen de un estudiante principiante. Presentar en primer plano el estado de estudiante de 2do año diluye el impacto de los proyectos en producción y reduce el poder de negociación comercial.

---

## 3. Caveats

- **Limitación de Red Externa**: Las pruebas de latencia y TTFB fueron ejecutadas desde el entorno de ejecución local en Colombia hacia el nodo `iad1` (Washington DC) de Vercel. Las mediciones de TTFB en otras regiones geográficas pueden variar en función de los nodos Edge locales de AWS/Vercel.
- **Acceso al Dashboard de Vercel**: No se cuenta con acceso directo a las credenciales administrativas de la consola de Vercel ni de Spaceship para modificar la configuración de dominios primarios o DNS de forma interactiva; las acciones deben ejecutarse vía archivo de configuración (`vercel.json`) o mediante el panel del registrador.
- **Estado del Repositorio de GitHub**: No fue posible determinar si el repositorio `SinPresupuesto/SinPre` fue renombrado, movido a la cuenta personal de NikkoDev (`NikkoWebDev`) o configurado como privado.

---

## 4. Conclusion

El despliegue en producción de NikkoDev cuenta con una base sólida de entrega estática en el Edge, paridad de build comprobada (100%), cifrado TLS 1.3 robusto y compresión Brotli altamente eficiente. No obstante, existen bloqueadores críticos en la configuración de dominio/canónicas y en enlaces públicos que demandan resolución inmediata:
1. Se debe alinear el dominio primario entre Vercel y Astro para erradicar el bucle canónico y actualizar el sitemap a URLs directas con código HTTP 200.
2. Se debe reparar de inmediato la URL del repositorio de SinPresupuesto (o remover el botón si es código privado).
3. Se deben corregir las directivas CSP en `vercel.json` para no romper `/karen` y habilitar HSTS `preload`.
4. Se deben corregir los selectores CSS de contraste en `Contact.astro` para cumplir WCAG AA.
5. Se debe implementar `src/pages/404.astro` y realinear los textos del Hero y About con `PORTFOLIO_STRATEGY.md`.

---

## 5. Verification Method

Para verificar independientemente todos los hallazgos documentados, ejecutar los siguientes comandos desde la terminal del sistema:

1. **Verificar Bucle Canónico y Redirecciones 308**:
   ```bash
   curl -I https://nikko.dev
   curl -s -L https://www.nikko.dev | grep -E "rel=\"canonical\"|og:url"
   curl -s https://www.nikko.dev/robots.txt
   curl -s https://www.nikko.dev/sitemap.xml | grep "<loc>"
   ```
   *Criterio de validación*: Se confirmará que el servidor redirige `nikko.dev` a `www.nikko.dev` con 308, mientras el HTML y el sitemap declaran `https://nikko.dev`.

2. **Verificar Enlace Roto de GitHub**:
   ```bash
   curl -I https://github.com/SinPresupuesto/SinPre
   ```
   *Criterio de validación*: Comprobar que responde `HTTP/2 404`.

3. **Verificar Violación de CSP en Fuentes**:
   ```bash
   curl -I https://www.nikko.dev/karen | grep -i "content-security-policy"
   ```
   *Criterio de validación*: Confirmar que `style-src` y `font-src` solo permiten `'self'`, excluyendo `fonts.googleapis.com` y `fonts.gstatic.com`.

4. **Verificar Paridad de Build y Hash MD5**:
   ```bash
   npm run build
   curl -s https://www.nikko.dev -o /tmp/live.html
   md5sum dist/index.html /tmp/live.html
   ```
   *Criterio de validación*: Los hashes MD5 deben coincidir idénticamente.

5. **Verificar Ausencia de 404 Personalizado**:
   ```bash
   curl -s -D - https://www.nikko.dev/test-ruta-404-no-existe
   ```
   *Criterio de validación*: Comprobar que devuelve texto plano `The page could not be found NOT_FOUND`.

6. **Condición de Invalidación**:
   Este reporte quedará invalidado una vez que se configure `nikko.dev` como dominio primario en Vercel (o se sincronice `astro.config.mjs` con `www.nikko.dev`), se repare el enlace de GitHub y se despliegue una nueva versión en producción.
