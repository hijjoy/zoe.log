import PostCard from '@/domains/post/ui/components/card';
import MotionOpacity from '@/shared/components/motion-opacity';

export default function Loading() {
  return (
    <MotionOpacity className="flex h-screen flex-col items-center gap-6">
      <PostCard.Skeleton />
      {/* <PostCard.Skeleton />
      <PostCard.Skeleton />
      <PostCard.Skeleton /> */}
    </MotionOpacity>
  );
}
