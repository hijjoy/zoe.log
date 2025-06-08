import { notFound } from "next/navigation";
import { customComponents } from "@/domains/post/components/custom_mdx";
import { prisma } from "@/libs/prisma";
import Text from "@/shared/components/text";
import { MDXRemote } from "next-mdx-remote/rsc";
import MotionOpacity from "@/shared/components/motion-opacity";
import Comments from "@/domains/post/components/comments";
import Image from "next/image";
import { Post } from "@/types/post";
import { Suspense } from "react";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) {
    return notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <MotionOpacity className="min-h-screen px-4 sm:px-6">
        <HeaderSection post={post} />
        <MDXRemote source={post.content} components={customComponents} />
        <div className="mt-16">
          <Comments />
        </div>
      </MotionOpacity>
    </Suspense>
  );
}

const HeaderSection = ({ post }: { post: Post }) => (
  <div className="flex justify-center items-center mb-16 mt-4 relative">
    <Image
      src={post.thumbnail}
      alt={post.title}
      width={500}
      height={500}
      className="rounded-xl aspect-[5/4] w-full h-[250px] sm:h-[200px] object-cover"
    />
    <div className="absolute inset-0 bg-black/30 backdrop-blur-[5px] rounded-xl" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white">
      <div>
        <h1 className="text-3xl sm:text-xl font-bold break-keep text-center px-4">
          {post.title}
        </h1>
        <Text className="text-white break-keep text-center sm:text-sm px-10">
          {post.description}
        </Text>
      </div>

      <Text className="text-gray-200 dark:text-gray-700 break-keep text-center absolute bottom-6 text-xs px-2">
        {post.createdAt.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>
    </div>
  </div>
);
