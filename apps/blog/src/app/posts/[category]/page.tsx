import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CATEGORY, type Category } from '@/domains/post/constants';
import LoadingSpinner from '@/shared/components/loading-spinner';
import PostList from '../_components/post-list';

export async function generateStaticParams() {
  return Object.keys(CATEGORY).map((category) => ({
    category,
  }));
}

interface Props {
  params: Promise<{
    category: Category;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!(category in CATEGORY)) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingSpinner delay={300} />}>
      <PostList category={category} />
    </Suspense>
  );
}
