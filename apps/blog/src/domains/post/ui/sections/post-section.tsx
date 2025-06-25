import MotionOpacity from '@/shared/components/motion-opacity';
import NoContent from '@/shared/components/no-content';
import { getPosts } from '../../queries/get-posts';
import PostCard from '../components/card';

export default async function PostSection() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post, i) => (
        <MotionOpacity
          key={post.slug}
          transition={{ delay: 0.1 * i, duration: 0.6 }}
          initial={{ opacity: 0.01 * i, scale: 0.95 }}
        >
          <PostCard post={post} />
        </MotionOpacity>
      ))}
    </div>
  );
}
