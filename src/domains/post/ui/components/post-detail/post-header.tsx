import Image from "next/image";
import Text from "@/shared/components/text";
import { Post } from "@/types/post";

export default function PostHeader({ post }: { post: Post }) {
  return (
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
}
