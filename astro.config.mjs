import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import critters from "astro-critters";
import fs from 'fs'

// https://astro.build/config
export default defineConfig({
  site: 'https://jonaskruckenberg.de',
  integrations: [mdx(), sitemap(), critters(), compress()],
  markdown: {
    shikiConfig: {
      // theme: 'rose-pine-moon'
      // theme: 'github-dark'
      // theme: 'ayu'
      theme: JSON.parse(fs.readFileSync('./code-theme.json', 'utf-8'))
    }
  }
});