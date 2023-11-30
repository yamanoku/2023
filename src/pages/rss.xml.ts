import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export async function get(context) {
  const posts = await getCollection('articles');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      link: post.slug,
      title: post.data.title,
      pubDate: post.data.date,
    })),
  });
}
