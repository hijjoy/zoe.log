import { Post, PostCategory } from '@/types/post';
import Link from 'next/link';
import Image from 'next/image';
import Categories from './categories';
import Text from '@/shared/components/text';
import { formatDate } from '@/libs/\bformat-date';

interface Props {
  post: Pick<Post, 'slug' | 'title' | 'description' | 'thumbnail' | 'createdAt'> & {
    postCategories: PostCategory[];
  };
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/article/${post.slug}`} className="group">
      <article className="flex justify-between gap-10 sm:items-center sm:gap-6">
        <div>
          <Categories categories={post.postCategories?.map((e) => e.categories.name) ?? []} />
          <Text className="mb-2 break-keep text-xl font-semibold transition-all duration-300 group-hover:text-main sm:text-lg">{post.title}</Text>

          {post.description && <Text className="mb-4 break-keep text-sm text-gray-500">{post.description}</Text>}

          <time className="text-sm text-gray-400">{formatDate(post.createdAt)}</time>
        </div>

        <div className="group relative aspect-[5/4] max-h-[120px] w-full max-w-[150px] overflow-hidden rounded-xl sm:max-w-[100px]">
          <Image src={post.thumbnail} alt={`${post.title} thumbnail`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      </article>
    </Link>
  );
}
