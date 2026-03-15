export const revalidate = 3_600;

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostDetailWithCache } from '@/domains/post/queries';
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

  return (
    <>
      <Toc />
      <div className="min-h-screen px-5">
        <PostContent slug={slug} />
        <Comments />
      </div>
    </>
  );
}
