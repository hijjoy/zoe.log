'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Typography } from '@zoelog/ui';
import PostCard from '@/app/posts/_components/post-card';
import { postQueries } from '@/domains/post/queries/post-queries';

export default function RecentPosts() {
  const { data: posts } = useSuspenseQuery(postQueries.recent(3));

  if (!posts) return null;

  return (
    <section className="mt-20 flex flex-col gap-1 px-5 md:mt-0">
      <Typography variant="label" weight="semibold" color="body" as="h1" className="mb-4">Recent Posts</Typography>

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
