import { getDetailPost } from "@/domains/post/services/get-posts";
import MotionOpacity from "@/shared/components/motion-opacity";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";
import PostHeader from "../components/post-detail/post-header";
import { customComponents } from "../components/post-detail/custom_mdx";
import Comments from "../components/post-detail/comments";

export default async function PostDetailView({ slug }: { slug: string }) {
  const post = await getDetailPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <MotionOpacity className="min-h-screen px-4 sm:px-6">
      <PostHeader post={post} />
      <MDXRemote source={post.content} components={customComponents} />
      <div className="mt-16">
        <Comments />
      </div>
    </MotionOpacity>
  );
}
