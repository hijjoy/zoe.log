import { queryOptions } from '@tanstack/react-query';
import type { Category } from '../constants';
import { getPostDetail, getPosts } from '.';

export const postQueries = {
  all: () => ['posts'],
  lists: () => [...postQueries.all(), 'list'],
  details: () => [...postQueries.all(), 'details'],
  categories: () => [...postQueries.all(), 'categories'],

  list: () =>
    queryOptions({
      queryKey: [...postQueries.lists()],
      queryFn: () => getPosts(),
    }),

  detail: (slug: string) =>
    queryOptions({
      queryKey: [...postQueries.details(), slug],
      queryFn: () => getPostDetail(slug),
      enabled: !!slug,
    }),

  category: (category: Category) =>
    queryOptions({
      queryKey: [...postQueries.categories(), category],
      queryFn: () => getPosts({ category }),
    }),
};
