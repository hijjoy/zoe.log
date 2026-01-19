import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export const getRecentPosts = unstable_cache(
  async (take: number) => {
    return db.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take,
      include: {
        postCategories: {
          include: {
            categories: true,
          },
        },
      },
    });
  },
  ['recent-posts'],
  { revalidate: 60 * 60 },
);
