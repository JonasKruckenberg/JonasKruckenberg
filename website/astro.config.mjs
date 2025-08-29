import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import critters from "astro-critters";
import fs from 'fs';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonaskruckenberg.de',
  integrations: [svelte(), sitemap(), astroImageTools, critters() /*compress()*/],
  markdown: {
    extendDefaultPlugins: true,
    gfm: true,
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: JSON.parse(fs.readFileSync('./code-theme.json', 'utf-8'))
    }
  },
  vite: {
    server: {
      strictPort: true
    }
  }
});