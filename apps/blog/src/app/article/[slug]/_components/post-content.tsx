import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getPostDetailWithCache } from '@/domains/post/queries';
import { customComponents } from './custom-mdx';
import PostHeader from './post-header';
import { PostNavigation } from './post-navigation';

interface Props {
  slug: string;
}

export default async function PostContent({ slug }: Props) {
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
      <Suspense fallback={<PostNavigation.Loading />}>
        <PostNavigation slug={slug} />
      </Suspense>
    </article>
  );
}
