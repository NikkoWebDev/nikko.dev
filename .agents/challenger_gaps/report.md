# Reporte de Evaluación Adversarial de Criterios de Aceptación

**Documento Auditado:** `/home/niko/Proyectos/My portfolio/AUDIT_REPORT.md`  
**Referencia de Requerimientos:** `/home/niko/Proyectos/My portfolio/.agents/ORIGINAL_REQUEST.md`  
**Referencia Estratégica:** `/home/niko/Proyectos/My portfolio/PORTFOLIO_STRATEGY.md`  
**Auditor / Rol:** Empirical Challenger & Adversarial Critic  
**Fecha de Evaluación:** 20 de Septiembre de 2026  
**Veredicto Final:** `REQUEST_CHANGES` (Aprobación Condicionada a 3 Correcciones Técnicas en el Plan de Acción)

---

## 1. Resumen Ejecutivo de la Evaluación Adversarial

Se realizó una auditoría adversarial y verificación empírica independiente sobre el documento `AUDIT_REPORT.md` frente a todos y cada uno de los requerimientos (R1, R2, R3, R4) y criterios de aceptación definidos en `ORIGINAL_REQUEST.md`.

### Evaluación General
El documento `AUDIT_REPORT.md` destaca por su **altísimo nivel de detalle, exhaustividad y rigor analítico** (1,004 líneas, 73.3 KB). La inmensa mayoría de sus afirmaciones técnicas, métricas cuantitativas, hallazgos de seguridad y citas textuales fueron verificadas empíricamente y son **100% exactas**:
- Se verificaron las **8 vulnerabilidades en `npm audit`** (incluyendo el RCE en Astro `<=7.2.7` `GHSA-26w7-cxv4-gfx2`).
- Se verificó el **bucle canónico HTTP 308** en vivo (`https://nikko.dev` -> `https://www.nikko.dev` con canonical hacia `https://nikko.dev`).
- Se verificó el **enlace roto HTTP 404** en GitHub hacia el repositorio insignia de *SinPresupuesto* (`https://github.com/SinPresupuesto/SinPre`).
- Se comprobó la **paridad absoluta bit a bit** entre el build local (`dist/index.html`) y el HTML servido en vivo por Vercel (`ETag: "d632154853ea506f5f728a278dc954d8"`).
- Se confirmaron los registros DNS (Spaceship Anycast, ausencia de AAAA, CAA y registros MX para Zoho Mail).
- Se recalcularon matemáticamente los **ratios de contraste WCAG 2.1 AA** en `Contact.astro` (1.94:1 a 2.43:1 vs el mínimo de 4.5:1 requerido).
- Se confirmó la duplicación masiva de código (~250 líneas) entre `index.astro` y `en.astro`, los activos huérfanos (237 KB en 4 imágenes) y el código legacy en la raíz (`index.html` de 54 KB, `opcion.html`, `portfolio/`).

### Por qué el Veredicto es `REQUEST_CHANGES`
A pesar de su excelencia analítica, la auditoría adversarial descubrió **un error técnico invalidante en el código de remediación propuesto** y **un riesgo operativo significativo en la configuración de despliegue**:

1. **Bug en la Solución Propuesta para Hotfix 1.4 / BUG-01 (Error de Compilación / Runtime):**  
   El reporte prescribe utilizar `<script define:vars={{ slug: project.slug, lang }}>` manteniendo adentro un `import { track } from "../../lib/analytics";`. En Astro, colocar `define:vars` en una etiqueta `<script>` la convierte automáticamente en un script en línea (`is:inline`), lo que **desactiva el empaquetado de Vite**. Los scripts en línea en Astro no admiten declaraciones `import` relativas a archivos TypeScript. Si un desarrollador aplica este código tal como está redactado, **la aplicación fallará en el navegador con `SyntaxError: Cannot use import statement outside a module` o error 404 de módulo**, rompiendo la telemetría en producción.

2. **Riesgo Operativo en Hotfix 1.5 / TYP-01 (Ruptura Inminente de Build en CI/CD):**  
   Hotfix 1.5 instruye modificar `package.json` para ejecutar `"build": "astro check && astro build"` de forma inmediata en la Fase 1. En la base de código actual existen tipos abiertos y código JavaScript no tipado en componentes Astro. Introducir `astro check` en el comando `build` de Vercel en la Fase 1 (antes de corregir la deuda de tipos en la Fase 2/3) provocará el **fallo catastrófico del despliegue en producción** si `astro check` detecta advertencias o errores de tipo estrictos.

3. **Omisión de Alternativa Git-Only para Hotfix 1.1 / CAN-01:**  
   El paso a paso de Hotfix 1.1 prescribe como única vía acceder al Dashboard de Vercel (Opción A). Sin embargo, si el desarrollador no cuenta con acceso inmediato a dicho dashboard, existe una solución 100% de código (Opción B: alinear Astro con `https://www.nikko.dev`), que resuelve el bucle canónico en 2 minutos mediante un simple `git push`. Esta opción debe ser incorporada explícitamente en el plan paso a paso.

Una vez subsanados estos 3 puntos en `AUDIT_REPORT.md`, el documento podrá recibir la aprobación definitiva (`APPROVE`).

---

## 2. Cuadro de Verificación de Criterios de Aceptación (`ORIGINAL_REQUEST.md`)

| Criterio de Aceptación / Requerimiento | Estado | Evidencia y Evaluación Adversarial |
| :--- | :---: | :--- |
| **R1. Auditoría de Código Local y Arquitectura Técnica** | **CUMPLIDO** | Sección 2 desglosa el árbol de archivos, dependencias, tooling, modularidad, scripts duplicados (~250 líneas), triplicación de datos de proyectos, legacy files (`index.html`, `opcion.html`), estado de TypeScript y bundle sizes. |
| **R2. Inspección del Despliegue en Internet y Accesibilidad** | **CUMPLIDO** | Sección 3 analiza DNS, latencia cuantificada (TTFB y saltos), bucle canónico 308, enlace roto GitHub 404, headers HTTP de seguridad, falla de CSP en `/karen`, accesibilidad WCAG y paridad bit a bit MD5/ETag. |
| **R3. Evaluación de Posicionamiento Estratégico** | **CUMPLIDO** | Sección 4 evalúa punto por punto las directrices de `PORTFOLIO_STRATEGY.md`, analiza la bipolaridad de marca, desglosa las señales de estudiante novato, la brecha de proyectos huérfanos y el embudo de conversión sin CV en PDF. |
| **R4. Reporte de Diagnóstico Exhaustivo (FODA y Plan de Acción)** | **CUMPLIDO CON OBSERVACIONES** | Documento estructurado con Resumen Ejecutivo, FODA, Catálogo de 20 hallazgos con severidad, Plan de Acción en 3 Fases y Matriz Impacto vs Esfuerzo. *Observación: El código de remediación en Hotfix 1.4 contiene un error técnico que debe corregirse.* |
| **AC 1: Análisis simultáneo de repo local y versión desplegada** | **CUMPLIDO** | Cobertura integral de ambos entornos con correlación cruzada de versiones. |
| **AC 2: Métricas cuantitativas y hallazgos verificables** | **CUMPLIDO** | Incluye benchmarks de latencia en ms, pesos de assets en KB/MB, tiempos de compilación, conteo de líneas y ratios de contraste numéricos. |
| **AC 3: Cabeceras de seguridad y red del dominio en vivo** | **CUMPLIDO** | Evaluación detallada de CSP, HSTS, X-Frame-Options, DNS Anycast, falta de IPv6/CAA/MX. |
| **AC 4: Evaluación punto por punto de `PORTFOLIO_STRATEGY.md`** | **CUMPLIDO** | Tabla completa de 14 directrices evaluadas con estado (`CUMPLIDA`, `PARCIAL`, `INCUMPLIDA`) y evidencia textual y de código. |
| **AC 5: Documento final en Markdown (`AUDIT_REPORT.md`) en raíz** | **CUMPLIDO** | `/home/niko/Proyectos/My portfolio/AUDIT_REPORT.md` (1004 líneas). |
| **AC 6: Secciones explícitas FODA (Fortalezas, Oportunidades, Debilidades, Amenazas)** | **CUMPLIDO** | Sección 5 presenta la matriz FODA completa en formato tabular y visual ASCII. |
| **AC 7: Recomendaciones técnicas concretas paso a paso** | **PARCIALMENTE CUMPLIDO** | Se presentan instrucciones paso a paso detalladas, pero el paso 1.4 contiene un bug técnico en la implementación de Astro. |
| **AC 8: Matriz de prioridad (Impacto vs. Esfuerzo)** | **CUMPLIDO** | Sección 8 contiene la matriz de 4 cuadrantes con justificación analítica individual para cada cuadrante. |

---

## 3. Pruebas Empíricas Realizadas por el Challenger

Para sustentar esta evaluación, el challenger ejecutó personalmente los siguientes arneses y pruebas empíricas en el entorno del proyecto:

### 3.1 Verificación de Dependencias y Seguridad (`npm audit`)
- **Comando Ejecutado:** `npm audit`
- **Resultado:**
  ```text
  8 vulnerabilities (1 moderate, 6 high, 1 critical)
  astro <=7.2.7 | Severity: critical
  - Astro: Remote code execution through AVIF image optimization (GHSA-26w7-cxv4-gfx2)
  - Astro: Reflected XSS via unescaped View Transition animation properties (GHSA-4g3v-8h47-v7g6)
  - Astro: Authorization bypass from missing path-segment boundary check (GHSA-376h-93r7-7g6f)
  ```
- **Conclusión:** Exacto al 100%. El reporte describe con fidelidad las vulnerabilidades activas.

### 3.2 Verificación de Bucle Canónico y Redirección en Producción
- **Comandos Ejecutados:**
  ```bash
  curl -sI https://nikko.dev
  curl -sL https://www.nikko.dev/ | grep -i 'canonical'
  ```
- **Resultado:**
  - `https://nikko.dev` responde: `HTTP/2 308` con `location: https://www.nikko.dev/`
  - `https://www.nikko.dev/` responde: `HTTP/2 200` conteniendo `<link rel="canonical" href="https://nikko.dev">`
- **Conclusión:** Bucle canónico infinito confirmado en vivo.

### 3.3 Verificación de Enlace Roto a SinPresupuesto
- **Comando Ejecutado:** `curl -sI https://github.com/SinPresupuesto/SinPre`
- **Resultado:** `HTTP/2 404`
- **Conclusión:** El enlace estrella en `Projects.astro:17` está efectivamente roto en GitHub.

### 3.4 Verificación de Paridad Local vs Producción
- **Comando Ejecutado:**
  ```bash
  md5sum dist/index.html
  curl -sI https://www.nikko.dev/ | grep -i etag
  ```
- **Resultado:**
  - `dist/index.html`: `d632154853ea506f5f728a278dc954d8`
  - ETag en vivo: `"d632154853ea506f5f728a278dc954d8"`
- **Conclusión:** Paridad 100% idéntica entre código local en `main` y servidor en vivo.

### 3.5 Verificación de Contraste WCAG 2.1 AA
- **Prueba Matemática de Luminancia Relativa (Algoritmo WCAG):**
  - Token `--green` (`#00D084`) sobre fondo claro (`#F0FDF6`): Ratio **1.94:1** (Falla WCAG AA, que exige 4.5:1).
  - Token `--cyan` (`#58D8FF`) sobre fondo claro (`#F0FDF6`): Ratio **1.58:1** (Falla WCAG AA).
  - Token de reemplazo propuesto `--accent-text` (`#047857`) sobre `#F0FDF6`: Ratio **5.25:1** (Cumple WCAG AA > 4.5:1).
- **Conclusión:** El hallazgo A11Y-01 y su propuesta de color en `AUDIT_REPORT.md` son impecables.

---

## 4. Hallazgos Adversariales y Desafíos Técnicos (Gaps Identificados)

### Desafío 1 (CRÍTICO): Error de Remediación en Hotfix 1.4 y Ficha BUG-01

**Ubicación en el Reporte:** Líneas 683–688 y 784–787.  
**Texto Propuesto en `AUDIT_REPORT.md`:**
```astro
<!-- Reemplazar etiqueta de script por -->
<script define:vars={{ slug: project.slug, lang }}>
  import { track } from "../../lib/analytics";
  track("case_view", { slug, lang });
</script>
```

#### Análisis del Fallo Técnico
En la arquitectura del compilador de Astro:
1. La directiva `define:vars` obliga a Astro a tratar la etiqueta `<script>` como un script en línea (`is:inline`), inyectando las variables directamente en el DOM mediante una función envolvente.
2. Como consecuencia directa, **Vite no procesa ni empaqueta este script**.
3. Las declaraciones ES Module con rutas relativas a archivos TypeScript (`import { track } from "../../lib/analytics"`) no pueden ser resueltas por el navegador web en tiempo de ejecución, dado que `../../lib/analytics` no es un recurso estático publicado ni un archivo JavaScript transpilado en el servidor web.
4. El navegador abortará la ejecución arrojando:
   `Uncaught SyntaxError: Cannot use import statement outside a module` (si no tiene `type="module"`) o `HTTP 404 / MIME Error` al intentar resolver el módulo TypeScript en caliente.

#### Solución Correcta y Canónica de Astro
Existen dos formas estándar y robustas en Astro para transferir datos de compilación a scripts de cliente empaquetados por Vite:

**Opción Canónica: Paso de atributos `data-*` al elemento contenedor (Recomendada):**
En el frontmatter y template de `src/pages/proyectos/[slug].astro` y su contraparte en inglés:
```astro
<main class="case-study" id="case-study-root" data-slug={project.slug} data-lang={lang}>
  ...
</main>

<script>
  import { track } from "../../lib/analytics";
  
  const root = document.getElementById("case-study-root");
  if (root?.dataset.slug) {
    track("case_view", { 
      slug: root.dataset.slug, 
      lang: root.dataset.lang || "es" 
    });
  }
</script>
```
*Ventaja:* Mantiene el script procesado y minificado por Vite, con tipado estático completo y cero impacto en CSP de scripts inline.

---

### Desafío 2 (ALTO RIESGO): Peligro de Ruptura de CI/CD en Hotfix 1.5

**Ubicación en el Reporte:** Líneas 808–814.  
**Texto Propuesto en `AUDIT_REPORT.md`:**
```json
"scripts": {
  "check": "astro check",
  "build": "astro check && astro build"
}
```

#### Análisis del Riesgo
En la base de código actual:
1. `src/data/translations.ts` declara `getTranslation(key: string, lang: Lang)` sin validar si `key` existe en el diccionario.
2. Múltiples componentes `.astro` y scripts cliente utilizan variables y manejadores de eventos sin tipado explícito.
3. Si en la **Fase 1 (Hotfixes de 24–48 horas)** se incluye `astro check && astro build` en el script `"build"`, el despliegue automático en Vercel se interrumpirá con código de salida 1 en cuanto el compilador detecte la primera discrepancia de tipos estricta (`astro/tsconfigs/strict`).

#### Solución Recomendada
1. En **Fase 1**, definir únicamente:
   ```json
   "scripts": {
     "check": "astro check"
   }
   ```
2. Ejecutar `npm run check` de forma manual o en un job no bloqueante de CI para auditar los errores de tipo.
3. Encadenar `"build": "astro check && astro build"` únicamente al finalizar la **Fase 3**, una vez que toda la deuda de tipado del código haya sido resuelta y validada.

---

### Desafío 3 (OPERATIVO): Falta de la Alternativa de Código para Hotfix 1.1

**Ubicación en el Reporte:** Líneas 759–766.  
**Texto Actual:** Solo detalla la configuración en el Dashboard de Vercel (Opción A).

#### Análisis Operativo
Si el desarrollador no dispone en el momento de las credenciales de Vercel o la integración requiere aprobación de infraestructura, el bucle canónico puede ser resuelto **inmediatamente mediante un hotfix a nivel de repositorio**:
- Cambiar en `astro.config.mjs`: `site: "https://www.nikko.dev"`
- Cambiar en `src/layouts/BaseLayout.astro`: `const SITE = "https://www.nikko.dev";`
- Cambiar en `public/sitemap.xml`: Reemplazar `https://nikko.dev` por `https://www.nikko.dev`.

Al hacer push a `main`, Vercel despliega en `www.nikko.dev` con etiquetas canónicas apuntando a `https://www.nikko.dev`. Esto **elimina de inmediato el bucle 308 autorreferencial** sin tocar el dashboard de DNS ni Vercel. Esta alternativa debe quedar documentada explícitamente en el paso a paso.

---

## 5. Cambios Concretos Requeridos en `AUDIT_REPORT.md`

Para transformar el veredicto a `APPROVE`, deben aplicarse las siguientes modificaciones puntuales en `AUDIT_REPORT.md`:

1. **En la Sección 6.2 (Ficha Técnica BUG-01, líneas 681–689):**  
   Reemplazar el bloque de `define:vars` por la técnica de lectura de atributos `data-*` en el elemento contenedor DOM.

2. **En la Sección 7 (Fase 1: Hotfix 1.4, líneas 780–789):**  
   Actualizar el Paso 1 para instruir la adición de `data-slug={project.slug} data-lang={lang}` en el elemento `<article>` o `<main>` y leer dichos atributos desde el script empaquetado.

3. **En la Sección 7 (Fase 1: Hotfix 1.5, líneas 808–814):**  
   Modificar el Paso 3 para agregar únicamente `"check": "astro check"` en `package.json`, postergando el encadenamiento a `"build"` para la Fase 3.

4. **En la Sección 7 (Fase 1: Hotfix 1.1, línea 766):**  
   Agregar una nota técnica indicando la "Alternativa Git-Only (Opción B)" para subsanar el bucle canónico en código si no se tiene acceso inmediato al dashboard de Vercel.

---

## 6. Conclusión y Veredicto

El documento `AUDIT_REPORT.md` es una pieza de auditoría técnica sobresaliente que cumple con la totalidad de los objetivos de cobertura exigidos en `ORIGINAL_REQUEST.md`. Los desafíos identificados por este evaluador adversarial no invalidan el diagnóstico, sino que refinan las recetas de ingeniería para garantizar que las correcciones sean 100% efectivas y seguras en producción.

**Veredicto Final:** `REQUEST_CHANGES` (Proceder a corregir los 3 puntos señalados en el Plan de Acción para su aprobación final).
