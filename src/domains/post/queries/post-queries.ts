import { queryOptions } from "@tanstack/react-query";
import { Category } from "../constants";
import { getDetailPost, getPosts } from "./get-posts";

export const postQueries = {
  // 계층 구조용 key
  all: () => ["posts"],
  lists: () => [...postQueries.all(), "list"],
  details: () => [...postQueries.all(), "details"],
  categories: () => [...postQueries.all(), "categories"],

  // 실제 queryOptions를 사용한 쿼리 팩토리
  list: () =>
    queryOptions({
      queryKey: [...postQueries.lists()],
      queryFn: () => getPosts(),
    }),

  detail: (slug: string) =>
    queryOptions({
      queryKey: [...postQueries.details(), slug],
      queryFn: () => getDetailPost(slug),
      enabled: !!slug,
    }),

  category: (category: Category) =>
    queryOptions({
      queryKey: [...postQueries.categories(), category],
      queryFn: () => getPosts(category),
      enabled: !!category,
    }),
};
