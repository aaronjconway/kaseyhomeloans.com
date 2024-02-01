//todo what is squoosh
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { defineConfig, squooshImageService } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: "/",
  image: {
    service: squooshImageService()
  },
  integrations: [svelte(), sitemap(), mdx(), icon()]
});