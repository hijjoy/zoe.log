import React from "react";
import { getPosts } from "../../services/get-posts";
import NoContent from "@/shared/components/no-content";
import PostCard from "../components/card";
import { Category } from "../../constants";

interface Props {
  category: Category;
}

export default async function PostsWithCategoryView({ category }: Props) {
  const posts = await getPosts(category);

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
