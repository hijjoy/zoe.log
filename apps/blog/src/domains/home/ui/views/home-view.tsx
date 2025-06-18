import MotionOpacity from '@/shared/components/motion-opacity';
import Blob from '../components/blob';
import BlogTitle from '../components/blog-title';
import RecentPostSection from '../sections/recent-post-section';
import { getQueryClient } from '@/libs/react-query-client';
import { postQueries } from '@/domains/post/queries/post-queries';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import LoadingSpinner from '@/shared/components/loading-spinner';

export default async function HomeView() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(postQueries.recent(3));

  return (
    <MotionOpacity className="relative flex min-h-screen flex-col gap-10">
      <div className="relative flex min-h-[500px] overflow-hidden px-4">
        <BlogTitle />
        <Blob />
      </div>

      {/* Server Component에서 데이터를 미리 prefetch + dehydrate */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<LoadingSpinner delay={300} />}>
          <RecentPostSection />
        </Suspense>
      </HydrationBoundary>
    </MotionOpacity>
  );
}
