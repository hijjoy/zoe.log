import React from "react";
import { Category } from "../../constants";
import PostCategorySection from "../sections/post-category-section";

interface Props {
  category: Category;
}

export default async function PostsWithCategoryView({ category }: Props) {
  return <PostCategorySection category={category} />;
}
