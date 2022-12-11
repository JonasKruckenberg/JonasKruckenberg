import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: 'https://jonaskruckenberg.de',
  integrations: [mdx(), sitemap(), critters(), compress()]
});