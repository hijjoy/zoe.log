import { prisma } from "@/libs/prisma";
import Text from "../common/text";
import PostCard from "./card";

export default async function RecentPostList() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <div className="flex flex-col gap-1 sm:mt-20">
      <Text className="text-2xl font-semibold mb-6 sm:mb-2">Recent Posts</Text>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
