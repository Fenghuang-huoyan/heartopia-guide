import { copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { rehypeTableScroll } from './framework/lib/rehype-table-scroll.js';

function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const folder = fileURLToPath(dir);
        await copyFile(path.join(folder, 'sitemap-0.xml'), path.join(folder, 'sitemap.xml'));
      },
    },
  };
}

// `@site` follows sites/active, a symlink to the game this repo publishes.
export default defineConfig({
  site: 'https://heartopiaguide.wiki',
  trailingSlash: 'never',
  // Guide pages are .mdx. The MDX integration must receive the plugin or
  // those tables stay unwrapped. markdown.rehypePlugins covers .md files a
  // later copy of this template might add. When both are set, @astrojs/mdx
  // uses the integration list, so the plugin is named in each place.
  markdown: {
    rehypePlugins: [rehypeTableScroll],
  },
  integrations: [mdx({ rehypePlugins: [rehypeTableScroll] }), sitemap(), sitemapXmlAlias()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@framework': new URL('./framework', import.meta.url).pathname,
        '@site': new URL('./sites/active', import.meta.url).pathname,
        '@content': new URL('./content/heartopia', import.meta.url).pathname,
      },
    },
  },
});
