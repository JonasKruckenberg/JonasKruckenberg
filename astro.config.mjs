import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import critters from "astro-critters";
import fs from 'fs'

// https://astro.build/config
export default defineConfig({
  site: 'https://jonaskruckenberg.de',
  integrations: [svelte(), sitemap(), critters(), compress()],
  markdown: {
    shikiConfig: {
      theme: JSON.parse(fs.readFileSync('./code-theme.json', 'utf-8'))
    }
  }
});