import { Text } from '@zoelog/ui';
import Image from 'next/image';
import { formatDate } from '@/libs/format-date';
import type { Post } from '@/types/post';

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="relative mt-4 mb-16 flex items-center justify-center">
      <Image
        src={post.thumbnail}
        alt=""
        aria-hidden
        width={500}
        height={500}
        priority
        className="aspect-[5/4] h-[200px] w-full rounded-xl object-cover blur-[2px] md:h-[250px]"
      />
      <div className="absolute inset-0 rounded-xl bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-white md:gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="break-keep text-center font-bold text-lg md:text-2xl">
            {post.title}
          </h1>
          <Text className="break-keep text-center text-white text-xs md:text-sm">
            {post.description}
          </Text>
        </div>
        <Text className="break-keep text-center text-gray-200 text-xs dark:text-white">
          {formatDate(post.createdAt)}
        </Text>
      </div>
    </div>
  );
}

const PostHeaderSkeleton = () => {
  return (
    <div className="relative mt-4 mb-16 flex w-full items-center justify-center">
      <div className="aspect-[5/4] h-[250px] w-full animate-pulse rounded-xl bg-gray-100 dark:bg-gray-200" />
    </div>
  );
};

PostHeader.Skeleton = PostHeaderSkeleton;
