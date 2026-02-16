import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

const getDetailPostCached = unstable_cache(
  async (slug: string) => {
    return db.post.findUnique({
      where: { slug },
    });
  },
  ['post', 'detail'],
  { revalidate: 60 * 30 },
);

export async function getDetailPost(slug: string) {
  return getDetailPostCached(slug);
}

export const getPostDetailWithCache = getDetailPost;
