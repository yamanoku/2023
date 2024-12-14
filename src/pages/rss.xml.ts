import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export async function GET(context) {
  const posts = (await getCollection('articles')).sort(
    (a, b) => new Date(a.data.date).valueOf() - new Date(b.data.date).valueOf(),
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      link: post.id,
      title: post.data.title,
      pubDate: post.data.date,
    })),
  });
}
