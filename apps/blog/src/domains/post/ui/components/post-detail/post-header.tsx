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
        className="aspect-[5/4] h-[250px] w-full rounded-xl object-cover sm:h-[200px]"
      />
      <div className="absolute inset-0 rounded-xl bg-black/30 backdrop-blur-[5px]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-white sm:gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="break-keep text-center font-bold text-2xl sm:text-lg">
            {post.title}
          </h1>
          <Text className="break-keep text-center text-sm text-white sm:text-xs">
            {post.description}
          </Text>
        </div>
        <Text className="break-keep text-center text-gray-200 text-xs dark:text-gray-400">
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
