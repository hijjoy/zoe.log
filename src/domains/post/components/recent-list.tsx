import { prisma } from "@/libs/prisma";
import PostCard from "./card";
import Text from "@/shared/components/text";
import { getRecentPosts } from "../services/get-posts";

export default async function RecentPostList() {
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
