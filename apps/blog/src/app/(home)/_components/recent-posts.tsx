import { Typography } from '@zoelog/ui';
import Link from 'next/link';
import { getPosts } from '@/domains/post/queries';
import { formatCategoryLabel } from '@/domains/post/utils/format-category-label';
import { formatShortDate } from '@/libs/format-date';
import type { PostListItem } from '@/types/post';

export default async function RecentPosts() {
  const posts = await getPosts({ take: 5 });

  if (!posts.length) return null;

  return (
    <ol className="mt-2 flex flex-col">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <RecentPostItem post={post} index={index + 1} />
        </li>
      ))}
    </ol>
  );
}

interface RecentPostItemProps {
  post: PostListItem;
  index: number;
}

function RecentPostItem({ post, index }: RecentPostItemProps) {
  const ordinal = String(index).padStart(2, '0');

  return (
    <Link
      href={`/article/${post.slug}`}
      className="group grid grid-cols-[1.5rem_1fr_auto] items-center gap-2 border-ds-border-semantic border-t py-2 transition-colors last:border-b hover:bg-ds-surface md:grid-cols-[1.75rem_1fr_auto] md:gap-4"
    >
      <Typography
        variant="caption"
        as="span"
        color="secondary"
        className="font-mono tabular-nums"
      >
        {ordinal}
      </Typography>

      <Typography
        variant="label"
        weight="medium"
        as="span"
        color="body"
        className="truncate transition-colors group-hover:text-ds-primary"
      >
        {post.title}
      </Typography>

      <Typography
        variant="caption"
        as="time"
        color="secondary"
        className="font-mono tabular-nums"
      >
        {formatShortDate(post.createdAt)}
      </Typography>
    </Link>
  );
}
