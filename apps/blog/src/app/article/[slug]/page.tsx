export const revalidate = 3_600;

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostDetail } from '@/domains/post/queries';
import Comments from './_components/comments';
import PostContent from './_components/post-content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostDetail(slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description ?? undefined,
    alternates: {
      canonical: `/article/${slug}`,
    },
    openGraph: {
      type: 'article',
      publishedTime: new Date(post.createdAt).toISOString(),
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
    <div className="mx-auto min-h-screen max-w-[768px] md:px-5">
      <PostContent slug={slug} />
      <Comments />
    </div>
  );
}
