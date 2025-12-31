import NoContent from '@/shared/components/no-content';
import { getPosts } from '../../queries/get-posts';
import PostCard from '../components/card';

export default async function PostSection() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <section aria-label="posts">
      <ul className="grid gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
