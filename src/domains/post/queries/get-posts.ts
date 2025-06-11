import { prisma } from "@/libs/prisma";
import { CATEGORY, Category } from "../constants";

export async function getPosts(category?: Category) {
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
    orderBy: {
      createdAt: "desc",
    },
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
}

export async function getRecentPosts(take: number) {
  return prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
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
}

export async function getDetailPost(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
  });
}

export async function getPostMeta(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
    select: {
      title: true,
      description: true,
      thumbnail: true,
    },
  });
}
