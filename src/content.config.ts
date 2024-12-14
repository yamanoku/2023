import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { articles };
