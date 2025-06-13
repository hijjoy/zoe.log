import MotionOpacity from '@/shared/components/motion-opacity';
import Comments from '../components/post-detail/comments';
import PostDetailSection from '../sections/post-detail-section';

export default async function PostDetailView({ slug }: { slug: string }) {
  return (
    <MotionOpacity
      initial={{ opacity: 0.005, scaleX: 0.992 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen px-4 sm:px-6"
    >
      <PostDetailSection slug={slug} />
      <Comments />
    </MotionOpacity>
  );
}
