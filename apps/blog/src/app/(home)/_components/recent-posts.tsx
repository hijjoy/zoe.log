import { Typography } from '@zoelog/ui';
import Link from 'next/link';
import { getPosts } from '@/domains/post/queries';
import { formatShortDate } from '@/libs/format-date';
import type { PostListItem } from '@/types/post';

export default async function RecentPosts() {
  const posts = await getPosts({ take: 5 });

  if (!posts.length) return null;

  return (
    <ol className="mt-2 flex flex-col">
      {posts.map((post) => (
        <li key={post.slug}>
          <RecentPostItem post={post} />
        </li>
      ))}
    </ol>
  );
}

interface RecentPostItemProps {
  post: PostListItem;
}

function RecentPostItem({ post }: RecentPostItemProps) {
  return (
    <Link
      href={`/article/${post.slug}`}
      className="group grid grid-cols-[1fr_auto] items-center gap-2 border-ds-border-semantic border-t py-2 transition-colors last:border-b hover:bg-ds-surface md:gap-4"
    >
      <Typography
        variant="label"
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
