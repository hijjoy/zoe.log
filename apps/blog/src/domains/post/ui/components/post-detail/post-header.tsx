import Image from 'next/image';
import Text from '@/shared/components/text';
import { Post } from '@/types/post';
import { formatDate } from '@/libs/\bformat-date';

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="relative mb-16 mt-4 flex items-center justify-center">
      <Image src={post.thumbnail} alt={post.title} width={500} height={500} className="aspect-[5/4] h-[250px] w-full rounded-xl object-cover sm:h-[200px]" />
      <div className="absolute inset-0 rounded-xl bg-black/30 backdrop-blur-[5px]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white">
        <div>
          <h1 className="break-keep px-4 text-center text-3xl font-bold sm:text-xl">{post.title}</h1>
          <Text className="break-keep px-10 text-center text-white sm:text-sm">{post.description}</Text>
        </div>

        <Text className="absolute bottom-6 break-keep px-2 text-center text-xs text-gray-200 dark:text-gray-700">{formatDate(post.createdAt)}</Text>
      </div>
    </div>
  );
}

const PostHeaderSkeleton = () => {
  return (
    <div className="relative mb-16 mt-4 flex w-full items-center justify-center">
      <div className="aspect-[5/4] h-[250px] w-full animate-pulse rounded-xl bg-gray-100 dark:bg-gray-200" />
    </div>
  );
};

PostHeader.Skeleton = PostHeaderSkeleton;
