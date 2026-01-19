import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';
import { CATEGORY, type Category } from '../constants';

export async function getPosts(category?: Category) {
  const key = ['posts', category ?? 'all'];

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
        select: {
          slug: true,
          title: true,
          description: true,
          thumbnail: true,
          createdAt: true,
          postCategories: {
            include: {
              categories: true,
            },
          },
        },
      });
    },
    key,
    { revalidate: 60 * 60 },
  )();
}
