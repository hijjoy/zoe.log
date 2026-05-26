import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export const getPostDetail = unstable_cache(
  async (slug: string) => {
    return db.post.findUnique({
      where: { slug },
    });
  },
  ['post', 'detail'],
  { revalidate: 60 * 30 },
);
