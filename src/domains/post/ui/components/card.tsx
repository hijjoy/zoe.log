import { Post, PostCategory } from "@/types/post";
import Link from "next/link";
import Image from "next/image";
import Categories from "./categories";
import Text from "@/shared/components/text";

interface Props {
  post: Pick<
    Post,
    "slug" | "title" | "description" | "thumbnail" | "createdAt"
  > & {
    postCategories: PostCategory[];
  };
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/article/${post.slug}`} className="group">
      <article className="flex justify-between gap-10 sm:gap-6 sm:items-center">
        <div>
          <Categories
            categories={
              post.postCategories?.map((e) => e.categories.name) ?? []
            }
          />
          <Text className="mb-2 text-xl sm:text-lg font-semibold group-hover:text-main transition-all duration-300 break-keep">
            {post.title}
          </Text>

          {post.description && (
            <Text className="mb-4 text-gray-500 text-sm break-keep">
              {post.description}
            </Text>
          )}

          <time className="text-sm text-gray-400">
            {new Date(post.createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div className="relative w-full max-w-[150px] sm:max-w-[100px] max-h-[120px] aspect-[5/4] rounded-xl overflow-hidden group">
          <Image
            src={post.thumbnail}
            alt={`${post.title} thumbnail`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </article>
    </Link>
  );
}
