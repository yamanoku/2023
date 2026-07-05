import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  site: 'https://2023.yamanoku.net',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: 'prism',
    processor: unified({
      gfm: true,
      remarkRehype: {
        footnoteLabel: '脚注',
        footnoteBackLabel: 'コンテンツに戻る',
      },
    }),
  },
  integrations: [sitemap(), mdx()],
});
