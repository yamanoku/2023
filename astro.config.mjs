import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import resolveLayoutShiftPlugin from 'rehype-plugin-auto-resolve-layout-shift'
import lazyloadPlugin from 'rehype-plugin-image-native-lazy-loading';

// https://astro.build/config
export default defineConfig({
  site: 'https://2023.yamanoku.net',
  markdown: {
    syntaxHighlight: 'prism',
    gfm: true,
    rehypePlugins: [
      [resolveLayoutShiftPlugin, { type: 'maxWidth', maxWidth: 900 }],
      lazyloadPlugin,
    ],
    remarkRehype: {
      footnoteLabel: '脚注',
      footnoteBackLabel: 'コンテンツに戻る',
    },
  },
  integrations: [sitemap(), mdx()],
});
