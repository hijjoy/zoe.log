import { getPostDetailWithCache } from '@/domains/post/queries/get-posts';
import PostDetailView from '@/domains/post/ui/views/post-detail-view';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }, parent: ResolvingMetadata): Promise<Metadata> {
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

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <PostDetailView slug={slug} />;
}
