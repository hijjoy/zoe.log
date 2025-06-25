import { Suspense } from 'react';
import LoadingSpinner from '@/shared/components/loading-spinner';
import PostSection from '../sections/post-section';

export default function PostsView() {
  return (
    <Suspense fallback={<LoadingSpinner delay={300} />}>
      <PostSection />
    </Suspense>
  );
}
