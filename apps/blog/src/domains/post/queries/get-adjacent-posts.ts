import { db } from '@zoelog/db';
import { unstable_cache } from 'next/cache';

export async function getAdjacentPosts(currentSlug: string) {
  const key = ['post', 'adjacent', currentSlug];

  return unstable_cache(
    async () => {
      const [result] = await db.$queryRaw<
        Array<{
          prevSlug: string | null;
          prevTitle: string | null;
          nextSlug: string | null;
          nextTitle: string | null;
        }>
      >`
        WITH "current_post" AS (
          SELECT "createdAt"
          FROM "Post"
          WHERE "slug" = ${currentSlug}
        )
        SELECT
          "prev"."slug" AS "prevSlug",
          "prev"."title" AS "prevTitle",
          "next"."slug" AS "nextSlug",
          "next"."title" AS "nextTitle"
        FROM "current_post"
        LEFT JOIN LATERAL (
          SELECT "slug", "title"
          FROM "Post"
          WHERE "createdAt" < "current_post"."createdAt"
          ORDER BY "createdAt" DESC
          LIMIT 1
        ) AS "prev" ON true
        LEFT JOIN LATERAL (
          SELECT "slug", "title"
          FROM "Post"
          WHERE "createdAt" > "current_post"."createdAt"
          ORDER BY "createdAt" ASC
          LIMIT 1
        ) AS "next" ON true;
      `;

      if (!result) return { prevPost: null, nextPost: null };

      return {
        prevPost:
          result.prevSlug && result.prevTitle
            ? { slug: result.prevSlug, title: result.prevTitle }
            : null,
        nextPost:
          result.nextSlug && result.nextTitle
            ? { slug: result.nextSlug, title: result.nextTitle }
            : null,
      };
    },
    key,
    { revalidate: 60 * 30 },
  )();
}
