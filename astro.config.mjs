//todo what is squoosh
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
// import sitemap from "@astrojs/sitemap";

//todo: vimportant for production. make sure to only include the icons that are necessary
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  base: '/',
  output: 'hybrid',
  integrations: [svelte(), mdx(), icon()],
  adapter: cloudflare({
    imageService: 'compile',
  }),
});
