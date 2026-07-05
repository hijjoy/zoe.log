import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export interface GetPostsOptions {
  take?: number;
}

export async function getPosts({ take }: GetPostsOptions = {}) {
  const key = ['posts', take ? String(take) : 'unlimited'];

  return unstable_cache(
    async () => {
      return db.post.findMany({
        orderBy: { createdAt: 'desc' },
        take,
        select: {
          slug: true,
          title: true,
          description: true,
          thumbnail: true,
          createdAt: true,
          postCategories: {
            select: {
              categories: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });
    },
    key,
    { revalidate: 60 * 60 },
  )();
}
