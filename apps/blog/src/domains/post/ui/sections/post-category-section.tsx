import NoContent from '@/shared/components/no-content';
import { Category } from '../../constants';
import { getPosts } from '../../queries/get-posts';
import PostCard from '../components/card';
import MotionOpacity from '@/shared/components/motion-opacity';

interface Props {
  category: Category;
}

export default async function PostCategorySection({ category }: Props) {
  const posts = await getPosts(category);

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post, i) => (
        <MotionOpacity key={post.slug} transition={{ delay: 0.1 * i, duration: 0.6 }} initial={{ opacity: 0.01 * i, scale: 0.95 }}>
          <PostCard post={post} />
        </MotionOpacity>
      ))}
    </div>
  );
}
