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
      <article className="flex justify-between">
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
          <span className="w-[150px] h-[120px] rounded-lg overflow-hidden">
            <Image
              className="group-hover:scale-110 transition-all duration-500"
              src={post.thumbnail}
              alt={`${post.title} thumbnail`}
              width={150}
              height={100}
            />
          </span>
        )}
      </article>
    </Link>
  );
}
