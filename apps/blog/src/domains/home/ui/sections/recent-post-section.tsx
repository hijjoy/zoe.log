'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Text } from '@zoelog/ui';
import { postQueries } from '@/domains/post/queries/post-queries';
import PostCard from '@/domains/post/ui/components/card';

export default function RecentPostSection() {
  const { data: posts } = useSuspenseQuery(postQueries.recent(3));

  if (!posts) return null;

  return (
    <section className="flex flex-col gap-1 px-4 sm:mt-20">
      <Text asChild className="mb-4 font-semibold text-gray-600 text-sm">
        <h1>Recent Posts</h1>
      </Text>

      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
