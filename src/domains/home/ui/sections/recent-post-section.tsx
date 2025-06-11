import { getRecentPosts } from "@/domains/post/queries/get-posts";
import PostCard from "@/domains/post/ui/components/card";
import Text from "@/shared/components/text";

export default async function RecentPostSection() {
  const posts = await getRecentPosts(3);

  return (
    <div className="flex flex-col gap-1 sm:mt-20 px-4">
      <Text className="text-sm mb-4 text-gray-600 font-semibold">
        Recent Posts
      </Text>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
