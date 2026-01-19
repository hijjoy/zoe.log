import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export async function getAdjacentPosts(currentSlug: string) {
  const key = ['post', 'adjacent', currentSlug];

  return unstable_cache(
    async () => {
      const currentPost = await db.post.findUnique({
        where: { slug: currentSlug },
        select: { createdAt: true },
      });

      if (!currentPost) return { prevPost: null, nextPost: null };

      const [prevPost, nextPost] = await Promise.all([
        db.post.findFirst({
          where: { createdAt: { lt: currentPost.createdAt } },
          orderBy: { createdAt: 'desc' },
          select: { slug: true, title: true },
        }),
        db.post.findFirst({
          where: { createdAt: { gt: currentPost.createdAt } },
          orderBy: { createdAt: 'asc' },
          select: { slug: true, title: true },
        }),
      ]);

      return { prevPost, nextPost };
    },
    key,
    { revalidate: 60 * 30 },
  )();
}
