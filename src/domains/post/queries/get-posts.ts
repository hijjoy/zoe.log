import { prisma } from '@/libs/prisma';
import { CATEGORY, Category } from '../constants';
import { cache } from 'react';
import { unstable_cache } from 'next/cache';

// 쿼리키를 동적으로 변경해야해서 팩토리 함수 사용
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

      return prisma.post.findMany({
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
    { revalidate: 60 * 60 }, // 1 hour
  )();
}

export const getRecentPosts = unstable_cache(
  async (take: number) => {
    return prisma.post.findMany({
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

// 페이지 재방문시 unstable_cache로 캐시된 데이터 사용
export async function getDetailPost(slug: string) {
  const key = ['post', 'detail', slug];

  return unstable_cache(
    async () => {
      return prisma.post.findUnique({
        where: { slug },
      });
    },
    key,
    { revalidate: 60 * 30 },
  )();
}

// 메타데이터와 실제데이터를 가져오는 부분에서 (SSR) 중복 요청을 방지하기 위해 cache 사용
export const getPostDetailWithCache = cache(async (slug: string) => {
  const post = await getDetailPost(slug);
  return post;
});
