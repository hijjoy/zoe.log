import { getDetailPost } from "@/domains/post/queries/get-posts";
import { notFound } from "next/navigation";
import { customComponents } from "../components/post-detail/custom_mdx";
import PostHeader from "../components/post-detail/post-header";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  slug: string;
}

export default async function PostDetailSection({ slug }: Props) {
  const post = await getDetailPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <PostHeader post={post} />
      <MDXRemote source={post.content} components={customComponents} />
    </>
  );
}
