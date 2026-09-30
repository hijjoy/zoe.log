import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export const getPostDetail = unstable_cache(
  async (slug: string) => {
    return db.post.findFirst({
      where: { slug, published: true },
    });
  },
  ['post', 'detail'],
  { revalidate: 60 * 30 },
);
