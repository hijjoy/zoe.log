import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { postQueries } from '@/domains/post/queries/post-queries';
import { getQueryClient } from '@/libs/react-query-client';
import LoadingSpinner from '@/shared/components/loading-spinner';
import Blob from './_components/blob';
import BlogTitle from './_components/blog-title';
import RecentPosts from './_components/recent-posts';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(postQueries.recent(3));

  return (
    <div className="relative flex min-h-screen flex-col gap-10">
      <section className="relative flex min-h-[500px] overflow-hidden px-4">
        <BlogTitle />
        <Blob />
      </section>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<LoadingSpinner delay={300} />}>
          <RecentPosts />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
