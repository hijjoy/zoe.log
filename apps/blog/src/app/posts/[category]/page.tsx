export const revalidate = 1800;

import { CATEGORY, Category } from '@/domains/post/constants';
import { notFound } from 'next/navigation';
import PostsWithCategoryView from '@/domains/post/ui/views/posts-with-category-view';

export async function generateStaticParams() {
  // 카테고리 목록을 빌드 타임에 가져옴
  // TODO:카테고리 스키마 변경후 db에서 가져오는 것으로 수정
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

  return <PostsWithCategoryView category={category} />;
}
