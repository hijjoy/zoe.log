import { prisma } from "@/libs/prisma";
import { CATEGORY, Category } from "../constants";

export async function getPosts(category?: Category) {
  const whereClause = category
    ? {
        categories: {
          has: CATEGORY[category],
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
      categories: true,
    },
  });
}

export async function getDetailPost(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
  });
}
