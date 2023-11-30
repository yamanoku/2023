import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = <const>{
  articles: articleCollection,
};
