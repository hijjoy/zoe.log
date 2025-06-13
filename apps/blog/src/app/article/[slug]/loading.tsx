import PostHeader from '@/domains/post/ui/components/post-detail/post-header';
import MotionOpacity from '@/shared/components/motion-opacity';

export default function Loading() {
  return (
    <MotionOpacity exit={{ opacity: 0, scale: 0.995 }} className="flex h-screen w-full flex-col items-center gap-6 px-4 sm:px-6">
      <PostHeader.Skeleton />

      <div className="flex w-full flex-col gap-6">
        <div className="h-8 w-2/3 rounded-md bg-gray-100 dark:bg-gray-200" />
        <div className="h-5 w-1/2 rounded-md bg-gray-100 dark:bg-gray-200" />
        <div className="h-5 w-3/4 rounded-md bg-gray-100 dark:bg-gray-200" />
        <div className="h-5 w-32 rounded-md bg-gray-100 dark:bg-gray-200" />
      </div>
    </MotionOpacity>
  );
}
