import NoContent from "@/shared/components/no-content";
import PostCard from "@/domains/post/components/card";
import { prisma } from "@/libs/prisma";
import { Suspense } from "react";

const CATEGORY_MAPPING = {
  development: "개발",
  review: "회고",
} as const;

type Category = keyof typeof CATEGORY_MAPPING;

interface Props {
  params: {
    category: Category;
  };
}

export default async function CategoryPage({ params }: Props) {
  const posts = await prisma.post.findMany({
    where: {
      categories: {
        has: CATEGORY_MAPPING[params.category],
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
