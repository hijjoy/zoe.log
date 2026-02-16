import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export const getPostSitemapEntries = unstable_cache(
  async () => {
    return db.post.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        slug: true,
        createdAt: true,
      },
    });
  },
  ['post', 'sitemap'],
  { revalidate: 60 * 60 },
);
