import MotionOpacity from '@/shared/components/motion-opacity';
import React, { Suspense } from 'react';
import Blob from '../components/blob';
import BlogTitle from '../components/blog-title';
import RecentPostSection from '../sections/recent-post-section';

export default function HomeView() {
  return (
    <MotionOpacity className="relative flex min-h-screen flex-col gap-10">
      <div className="relative flex min-h-[450px] overflow-hidden px-4">
        <BlogTitle />
        <Blob />
      </div>

      <Suspense fallback={<div className="h-20" />}>
        <RecentPostSection />
      </Suspense>
    </MotionOpacity>
  );
}
