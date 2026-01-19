import type { Category } from '@/domains/post/constants';
import { getPosts } from '@/domains/post/queries';
import NoContent from '@/shared/components/no-content';
import PostCard from './post-card';

interface Props {
  category?: Category;
}

export default async function PostList({ category }: Props) {
  const posts = await getPosts(category);

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
