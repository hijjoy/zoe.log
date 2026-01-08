import { Suspense } from 'react';
import LoadingSpinner from '@/shared/components/loading-spinner';
import PostList from './_components/post-list';

export default function PostsPage() {
  return (
    <Suspense fallback={<LoadingSpinner delay={300} />}>
      <PostList />
    </Suspense>
  );
}
