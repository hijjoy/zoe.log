import { CATEGORY, Category } from "@/domains/post/constants";
import { notFound } from "next/navigation";
import PostsWithCategoryView from "@/domains/post/ui/views/posts-with-category-view";

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
