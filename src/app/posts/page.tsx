import NoContent from "@/shared/components/no-content";
import PostCard from "@/domains/post/components/card";
import { prisma } from "@/libs/prisma";
import { Suspense } from "react";

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
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
