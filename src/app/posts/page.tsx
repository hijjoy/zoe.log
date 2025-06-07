import NoContent from "@/components/common/no-content";
import PostCard from "@/components/posts/card";
import { prisma } from "@/libs/prisma";

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
    <div className="container px-4 py-8 mx-auto min-h-screen">
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
