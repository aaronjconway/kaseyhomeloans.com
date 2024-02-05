//todo what is squoosh
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import icon from "astro-icon";
//todo: vimportant for production. make sure to only include the icons that are necessary
// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [svelte(),
  sitemap(),
  mdx(),
  icon()]
});
