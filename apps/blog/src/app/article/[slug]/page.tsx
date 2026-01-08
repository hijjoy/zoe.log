export const revalidate = 3_600;

import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostDetailWithCache } from '@/domains/post/queries/get-posts';
import Comments from './_components/comments';
import PostContent from './_components/post-content';
import Toc from './_components/toc';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostDetailWithCache(slug);

  const previousImages = (await parent).openGraph?.images || [];
  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description ?? '',
    openGraph: {
      images: [post.thumbnail, ...previousImages],
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
      <div className="min-h-screen px-4 sm:px-6">
        <PostContent slug={slug} />
        <Comments />
      </div>
    </>
  );
}
