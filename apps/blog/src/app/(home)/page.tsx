import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { postQueries } from '@/domains/post/queries/post-queries';
import { getQueryClient } from '@/libs/react-query-client';
import LoadingSpinner from '@/shared/components/loading-spinner';
import Header from './_components/header';
import PostList from './_components/post-list';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(postQueries.list());

  return (
    <div data-home-page>
      <div
        aria-hidden
        className="fixed inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/seoul-tower.png')" }}
      />

      <aside className="fixed top-4 right-4 left-4 z-10 flex max-h-[calc(100dvh-11rem)] flex-col bg-black/50 backdrop-blur-[2px] md:right-auto md:w-[400px]">
        <div className="shrink-0 px-6 pt-10">
          <Header />
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-8 pb-8">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<LoadingSpinner delay={300} />}>
              <PostList />
            </Suspense>
          </HydrationBoundary>
        </div>
      </aside>

      <div className="fixed right-5 bottom-5 z-20 flex flex-col items-center gap-3 text-white/80 [&>button:hover]:text-white [&>button]:text-white/80">
        <a
          href="https://github.com/hijjoy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-white"
        >
          <FaGithub size={18} />
        </a>
      </div>
    </div>
  );
}
