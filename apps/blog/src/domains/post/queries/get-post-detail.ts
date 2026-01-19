import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';
import { cache } from 'react';

export async function getDetailPost(slug: string) {
  const key = ['post', 'detail', slug];

  return unstable_cache(
    async () => {
      return db.post.findUnique({
        where: { slug },
      });
    },
    key,
    { revalidate: 60 * 30 },
  )();
}

export const getPostDetailWithCache = cache(async (slug: string) => {
  const post = await getDetailPost(slug);
  return post;
});
