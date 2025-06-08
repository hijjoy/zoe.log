import NoContent from "@/shared/components/no-content";
import PostCard from "@/domains/post/components/card";
import { prisma } from "@/libs/prisma";
import { Suspense } from "react";
import { CATEGORY, Category } from "@/domains/post/constants";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    category: Category;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!(category in CATEGORY)) {
    notFound();
  }

  const posts = await prisma.post.findMany({
    where: {
      categories: {
        has: CATEGORY[category],
      },
    },
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

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <Suspense fallback={<div />}>
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Suspense>
  );
}
