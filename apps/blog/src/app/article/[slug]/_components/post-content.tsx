import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getPostDetail } from '@/domains/post/queries';
import { customComponents } from './custom-mdx';
import { PostNavigation } from './post-navigation';

interface Props {
  slug: string;
}

export default async function PostContent({ slug }: Props) {
  const post = await getPostDetail(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="[&_mark]:break-keep [&_mark]:bg-[#3fd59936] [&_mark]:px-1 [&_mark]:font-bold [&_mark]:text-ds-heading">
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
