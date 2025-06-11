import MotionOpacity from '@/shared/components/motion-opacity';
import Comments from '../components/post-detail/comments';
import PostDetailSection from '../sections/post-detail-section';

export default async function PostDetailView({ slug }: { slug: string }) {
  return (
    <MotionOpacity className="min-h-screen px-4 sm:px-6">
      <PostDetailSection slug={slug} />
      <Comments />
    </MotionOpacity>
  );
}
