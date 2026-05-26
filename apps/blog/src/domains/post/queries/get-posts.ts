import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';
import { CATEGORY, type Category } from '../constants';

export interface GetPostsOptions {
  category?: Category;
  take?: number;
}

export async function getPosts({ category, take }: GetPostsOptions = {}) {
  const key = ['posts', category ?? 'all', take ? String(take) : 'unlimited'];

  return unstable_cache(
    async () => {
      const whereClause = category
        ? {
            postCategories: {
              some: {
                categories: {
                  name: CATEGORY[category],
                },
              },
            },
          }
        : {};

      return db.post.findMany({
        where: whereClause,
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
