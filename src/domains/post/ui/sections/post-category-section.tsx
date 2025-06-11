import NoContent from "@/shared/components/no-content";
import { Category } from "../../constants";
import { getPosts } from "../../queries/get-posts";
import PostCard from "../components/card";

interface Props {
  category: Category;
}

export default async function PostCategorySection({ category }: Props) {
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
