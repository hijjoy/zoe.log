import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getPostDetailWithCache } from '@/domains/post/queries/get-posts';
import { customComponents } from '../components/post-detail/custom_mdx';
import PostHeader from '../components/post-detail/post-header';

interface Props {
  slug: string;
}

export default async function PostDetailSection({ slug }: Props) {
  const post = await getPostDetailWithCache(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article aria-label="post-detail">
      <PostHeader post={post} />
      <MDXRemote
        source={post.content}
        components={customComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </article>
  );
}
