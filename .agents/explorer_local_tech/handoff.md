# Handoff Report — Local Codebase & Architecture Audit

## 1. Observation

- **Project Configuration and Missing TypeScript Config:**
  - `find_by_name` for `*tsconfig*` in `/home/niko/Proyectos/My portfolio`: No `tsconfig.json` found in root or `src/`. Only internal files inside `node_modules/` exist.
  - `package.json` lines 11–16:
    ```json
    "dependencies": {
      "@fontsource-variable/inter": "^5.3.0",
      "@fontsource-variable/jetbrains-mono": "^5.3.0",
      "astro": "^7.0.6"
    }
    ```
    Neither `typescript` nor `@astrojs/check` is present.
  - `npx astro check` command result:
    ```
    To continue, Astro requires the following dependency to be installed: @astrojs/check.
    Astro will run the following command: npm i @astrojs/check typescript
    ```
- **Security Audit Output (`npm audit`):**
  - Command: `npm audit` returned code 1 with:
    - `astro <=7.2.7` (Critical): Reflected XSS (`GHSA-4g3v-8h47-v7g6`), Remote code execution via AVIF image optimization (`GHSA-26w7-cxv4-gfx2`), Authorization bypass (`GHSA-376h-93r7-7g6f`).
    - `sharp <0.35.4` (High, libheif vulnerabilities)
    - `svgo 4.0.0-4.0.2` (High, executable scripts in SVG)
    - `postcss <=8.5.22` (High, path traversal in sourceMappingURL)
    - `nanoid <=3.3.17` (High), `js-yaml 4.0.0-4.3.1` (High), `smol-toml <=1.7.0` (High), `devalue <5.9.1` (Moderate).
    - Total: 8 vulnerabilities (1 critical, 6 high, 1 moderate).
- **Client Script Bug in Case Studies:**
  - `src/pages/proyectos/[slug].astro` line 85:
    ```astro
    track("case_view", { slug: "{project.slug}", lang: "{lang}" });
    ```
  - `src/pages/en/projects/[slug].astro` line 116:
    ```astro
    track("case_view", { slug: "{project.slug}", lang: "{lang}" });
    ```
  - Compiled output chunk `dist/_astro/_slug_.astro_astro_type_script_index_0_lang.BT1Qw6bp.js` line 1:
    ```javascript
    import{t as e}from"./analytics.B5uTOCCa.js";e(`case_view`,{slug:`{project.slug}`,lang:`{lang}`});
    ```
    Confirms literal string emission without variable interpolation.
- **Root Directory Anomalies:**
  - `git ls-files` output confirms `index.html` (54,731 bytes, 1,799 lines) and `opcion.html` (12,520 bytes, 124 lines) are tracked in Git.
  - Git history (`git log -n 5 --stat -- index.html opcion.html`): `index.html` was committed in `f6672cf` ("feat: mint glassmorphism...") and never updated across sprints 1–6.
  - `CLAUDE.md` line 526: *"Se creó un concepto inicial en `index.html` monolítico. Después debe dividirse en componentes Astro."*
  - `portfolio/` directory contains `public/`, `src/data/`, `src/layouts/`, all empty.
- **Image Assets in `public/projects/`:**
  - `ls -lh public/projects/`:
    `autorreparacion.jpg` (521 KB), `fibog.jpg` (311 KB), `sinpresupuesto.jpg` (190 KB), `indusec.jpg` (153 KB), `piggy.jpg` (103 KB), `boombox.jpg` (79 KB), `kala-chat.jpg` (29 KB), `pawcare.jpg` (26 KB).
  - Grep for `boombox`, `kala`, `pawcare`, `piggy` across `src/`: 0 results found. 4 out of 8 images (~237 KB) are orphaned.
- **Compilation Performance (`npm run build`):**
  - Command: `npm run build` completed in **938 ms**, generating 11 static pages.
  - JavaScript assets in `dist/_astro/`: total < 5 KB. CSS assets: ~64.5 KB.

---

## 2. Logic Chain

1. **Safety and Vulnerability (Observation 1 & 2 → Finding SEC-01):**
   - The installed Astro version `7.0.6` is below the safe threshold (`>7.2.7`), leaving the deployment exposed to RCE in AVIF image processing and Reflected XSS. Updating Astro and patching dependencies via `npm audit fix` is a mandatory security requirement.
2. **Type-Checking Absence (Observation 1 → Finding TYP-01):**
   - Because `tsconfig.json` is missing and `@astrojs/check` + `typescript` are absent, neither developers nor CI/CD can validate types or detect regressions across Astro frontmatters and TS modules. Adding `tsconfig.json` and `@astrojs/check` is essential for codebase integrity.
3. **Broken Analytics Logic (Observation 3 → Finding BUG-01):**
   - Astro script tags without `define:vars` are bundled client-side by Vite. Template string syntax `{project.slug}` inside standard `<script>` is treated as plain string characters, not JSX expressions. This is proven by the compiled bundle emitting `e("case_view",{slug:"{project.slug}",lang:"{lang}"})`.
4. **Dead Code Pollution (Observation 4 → Finding ARC-01):**
   - `index.html` was the monolithic prototype created before decomposing the site into Astro components. Because Astro builds exclusively from `src/pages/index.astro` to `dist/index.html`, the root `index.html` and `opcion.html` are dead code and create ambiguity about which file represents production.
5. **Asset Pipeline Bypassed (Observation 5 → Finding AST-01):**
   - Placing project images in `public/projects/` prevents Astro's build engine from generating optimized WebP/AVIF variants or responsive `srcset` definitions, forcing browsers to download uncompressed 521 KB JPEGs. Additionally, the 4 orphaned images represent 237 KB of unnecessary deployment weight.
6. **Code Duplication & Maintainability (Observations & Report Analysis → Finding MOD-01 & NAV-01):**
   - `src/pages/index.astro` and `src/pages/en.astro` share over 250 lines of duplicate script logic. In addition, the language switcher in `Navbar.astro` forces navigation to `/` or `/en`, discarding the active case study path.

---

## 3. Caveats

- **External runtime behavior:** The audit was conducted locally on the repository files; runtime CDN performance (such as Vercel Edge Network TTFB or real browser Core Web Vitals at `https://nikko.dev`) is investigated by the external audit subagent.
- **Private page `karen.astro`:** While `karen.astro` introduces independent CSS and Google Fonts references, it was explicitly marked as private (`noindex, nofollow`) and kept intact intentionally per commit history.
- **No changes made:** As a read-only investigation, no source code, configuration, or dependency files were altered during this audit.

---

## 4. Conclusion

The local NikkoDev codebase possesses an exceptionally lightweight SSG foundation, with near-instant compile times (< 1s), minimal client JS (< 5 KB), and robust SEO schema integration. However, it requires immediate technical remediation across four axes:
1. **Security**: Upgrade Astro to `>=7.2.8` and run `npm audit fix` to resolve critical RCE and XSS vulnerabilities.
2. **TypeScript & Static Analysis**: Add `tsconfig.json` with strict configuration and install `@astrojs/check` and `typescript`.
3. **Bug Fixes & Maintenance**: Fix the `{project.slug}` string interpolation bug in `[slug].astro`, fix the language switcher redirect on case studies, and remove root legacy artifacts (`index.html`, `opcion.html`, `portfolio/`).
4. **Asset Optimization**: Purge orphaned images (237 KB) and migrate project images to `src/assets/` using Astro's `<Image />` component.

---

## 5. Verification Method

To independently verify all findings and test remediations:

1. **Verify security vulnerabilities:**
   ```bash
   npm audit
   ```
   *Expected output:* Confirms 8 vulnerabilities (1 critical, 6 high, 1 moderate).
2. **Verify missing typecheck tool:**
   ```bash
   npx astro check
   ```
   *Expected output:* Prompts that `@astrojs/check` and `typescript` are missing.
3. **Verify build and analytics bug:**
   ```bash
   npm run build
   grep -rn 'slug:`{project.slug}`' dist/
   ```
   *Expected output:* Matches compiled chunk in `dist/_astro/` showing un-interpolated template literal.
4. **Verify root dead files and orphaned images:**
   ```bash
   git ls-files index.html opcion.html
   ls -lh public/projects/
   grep -rn "boombox\|kala-chat\|pawcare\|piggy" src/
   ```
   *Expected output:* Shows `index.html` and `opcion.html` tracked in Git, and zero occurrences of the 4 orphaned project images in `src/`.
