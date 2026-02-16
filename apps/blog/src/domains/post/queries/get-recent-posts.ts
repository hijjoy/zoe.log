import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export const getRecentPosts = unstable_cache(
  async (take: number) => {
    return db.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take,
      select: {
        id: true,
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
  ['recent-posts'],
  { revalidate: 60 * 60 },
);
