import { Post } from "@/types/post";
import Link from "next/link";
import Text from "../common/text";
import Image from "next/image";
import Categories from "./categories";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  console.log(post.thumbnail);
  return (
    <Link href={`/posts/${post.id}`} className="group">
      <article className="flex justify-between gap-10">
        <div>
          <Categories categories={post.categories} />
          <Text className="mb-2 text-xl font-semibold group-hover:text-main transition-all duration-300">
            {post.title}
          </Text>

          {post.description && (
            <Text className="mb-4 text-gray-500 text-sm">
              {post.description}
            </Text>
          )}

          <time className="text-sm text-gray-400">
            {new Date(post.createdAt).toLocaleDateString()}
          </time>
        </div>
        {post.thumbnail && (
          <span className="block relative w-full max-w-[150px] rounded-lg overflow-hidden">
            <Image
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              src={post.thumbnail}
              alt={`${post.title} thumbnail`}
              width={150}
              height={120}
            />
          </span>
        )}
      </article>
    </Link>
  );
}
