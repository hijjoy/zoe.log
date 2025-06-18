'use client';

import { postQueries } from '@/domains/post/queries/post-queries';
import PostCard from '@/domains/post/ui/components/card';
import { Text } from '@zoelog/ui';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function RecentPostSection() {
  const { data: posts } = useSuspenseQuery(postQueries.recent(3));

  if (!posts) return null;

  return (
    <div className="flex flex-col gap-1 px-4 sm:mt-20">
      <Text className="mb-4 text-sm font-semibold text-gray-600">Recent Posts</Text>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
