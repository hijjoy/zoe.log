import type { PostListItem } from '@/types/post';
import { CATEGORY, type Category } from '../constants';

type PostCategory = PostListItem['postCategories'][number]['categories'];

const CATEGORY_SEPARATOR = ' · ';

function resolveCategoryLabel(category: PostCategory): string {
  const key = category.name as Category;
  return CATEGORY[key] ?? category.name;
}

function joinCategoryLabels(labels: string[]): string {
  return labels.join(CATEGORY_SEPARATOR);
}

export function formatCategoryLabel(
  postCategories: PostListItem['postCategories'],
): string | null {
  if (!postCategories.length) return null;

  const labels = postCategories.map(({ categories }) =>
    resolveCategoryLabel(categories),
  );
  return joinCategoryLabels(labels);
}
