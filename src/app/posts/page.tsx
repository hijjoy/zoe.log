import NoContent from "@/shared/components/no-content";
import PostCard from "@/domains/post/components/card";
import { Suspense } from "react";
import { getPosts } from "@/domains/post/services/get-posts";

export default async function PostsPage() {
  const posts = await getPosts();

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
