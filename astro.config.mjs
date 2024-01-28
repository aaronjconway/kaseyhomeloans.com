import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import config from "./src/config/config.json";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: squooshImageService()
  },
  integrations: [svelte(), sitemap(),
  //todo: idk If I want to be auto importing? check if only whats needed is imported
  AutoImport({
    imports: []
  }), mdx(), tailwind()],
  markdown: {
    extendDefaultPlugins: true
  }
});