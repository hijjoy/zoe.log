import NoContent from "@/shared/components/no-content";
import PostCard from "@/domains/post/components/card";
import { CATEGORY, Category } from "@/domains/post/constants";
import { notFound } from "next/navigation";
import { getPosts } from "@/domains/post/services/get-posts";

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

  const posts = await getPosts(category);

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
