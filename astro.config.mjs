import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const rehypePlugins = [
  'remark-gfm',
  [
    'rehype-plugin-auto-resolve-layout-shift',
    { type: 'maxWidth', maxWidth: 720 },
  ],
  'rehype-plugin-image-native-lazy-loading',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://2023.yamanoku.net',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
    rehypePlugins,
    remarkRehype: {
      footnoteLabel: '脚注',
      footnoteBackLabel: 'コンテンツに戻る',
    },
  },
});
