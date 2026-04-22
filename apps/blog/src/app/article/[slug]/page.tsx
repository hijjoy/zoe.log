export const revalidate = 3_600;

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAdjacentPosts,
  getPostDetailWithCache,
} from '@/domains/post/queries';
import ArticleNavBar from './_components/article-nav-bar';
import Comments from './_components/comments';
import PostContent from './_components/post-content';
import Toc from './_components/toc';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostDetailWithCache(slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description ?? '',
    openGraph: {
      images: [post.thumbnail],
    },
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [post, { prevPost, nextPost }] = await Promise.all([
    getPostDetailWithCache(slug),
    getAdjacentPosts(slug),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Toc />
      <div className="mx-auto min-h-screen max-w-[768px] px-5">
        <ArticleNavBar
          post={post}
          adjacent={{ prev: prevPost, next: nextPost }}
        />
        <PostContent slug={slug} />
        <Comments />
      </div>
    </>
  );
}
