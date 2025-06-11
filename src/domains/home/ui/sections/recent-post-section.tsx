import { getRecentPosts } from '@/domains/post/queries/get-posts';
import PostCard from '@/domains/post/ui/components/card';
import Text from '@/shared/components/text';

export default async function RecentPostSection() {
  const posts = await getRecentPosts(3);

  return (
    <div className="flex flex-col gap-1 px-4 sm:mt-20">
      <Text className="mb-4 text-sm font-semibold text-gray-600">Recent Posts</Text>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
