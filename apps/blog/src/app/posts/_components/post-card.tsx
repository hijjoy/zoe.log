import { Text } from '@zoelog/ui';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { formatDate } from '@/libs/format-date';
import type { Post, PostCategory } from '@/types/post';
import Categories from './categories';

interface Props {
  post: Pick<
    Post,
    'slug' | 'title' | 'description' | 'thumbnail' | 'createdAt'
  > & {
    postCategories: PostCategory[];
  };
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/article/${post.slug}`} className="group">
      <article
        aria-label="post"
        className="flex items-center justify-between gap-6 md:gap-10"
      >
        <div>
          <Categories
            categories={
              post.postCategories?.map((e) => e.categories.name) ?? []
            }
          />
          <Text className="mb-2 break-keep font-semibold text-lg transition-all duration-300 group-hover:text-main md:text-xl">
            {post.title}
          </Text>

          {post.description && (
            <Text className="mb-4 break-keep text-gray-500 text-sm">
              {post.description}
            </Text>
          )}

          <time className="text-gray-400 text-sm">
            {formatDate(post.createdAt)}
          </time>
        </div>

        <figure className="group relative aspect-[5/4] max-h-[120px] w-full max-w-[100px] overflow-hidden rounded-xl md:max-w-[150px]">
          <Image
            src={post.thumbnail}
            alt={`${post.title} 썸네일`}
            fill
            sizes="(min-width: 640px) 200px, 450px"
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <figcaption className="sr-only">{`${post.title} 썸네일`}</figcaption>
        </figure>
      </article>
    </Link>
  );
}

const PostCardSkeleton = () => {
  return (
    <div className="flex w-full items-center justify-between gap-6 md:gap-10">
      <div className="flex w-full flex-col justify-center">
        <div className="mb-2 h-4 w-10 rounded-md bg-gray-100 dark:bg-gray-200" />
        <div className="mb-2 h-8 w-1/2 rounded-md bg-gray-100 dark:bg-gray-200" />
        <div className="mb-4 h-4 w-3/4 rounded-md bg-gray-100 dark:bg-gray-200" />
        <div className="h-4 w-32 rounded-md bg-gray-100 dark:bg-gray-200" />
      </div>
      <div className="relative aspect-[5/4] max-h-[120px] w-full max-w-[100px] overflow-hidden rounded-xl md:max-w-[150px]">
        <div className="size-full animate-pulse bg-gray-100 dark:bg-gray-200" />
      </div>
    </div>
  );
};

PostCard.Skeleton = PostCardSkeleton;
