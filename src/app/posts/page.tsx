import NoContent from "@/components/common/no-content";
import PostCard from "@/components/posts/card";
import { prisma } from "@/libs/prisma";
import { Suspense } from "react";

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <Suspense fallback={<div />}>
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Suspense>
  );
}
