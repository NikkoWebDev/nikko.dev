import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nikko.dev",
  compressHTML: true,
  scopedStyleStrategy: "where",
  build: {
    assets: "_astro",
    inlineStylesheets: "auto",
  },
});
