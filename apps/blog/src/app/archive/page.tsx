import { Typography } from '@zoelog/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/domains/post/queries';
import { formatISODate, formatYearDate } from '@/libs/format-date';
import type { PostListItem } from '@/types/post';

export const metadata: Metadata = {
  title: 'Archive',
};

export default async function ArchivePage() {
  const posts = await getPosts();

  return (
    <>
      <Typography as="h1" className="sr-only">
        Archive
      </Typography>
      <ArchiveList posts={posts} />
    </>
  );
}

interface ArchiveListProps {
  posts: PostListItem[];
}

function ArchiveList({ posts }: ArchiveListProps) {
  return (
    <ul className="flex flex-col gap-3 py-2">
      {posts.map((post) => (
        <li key={post.slug}>
          <ArchiveItem post={post} />
        </li>
      ))}
    </ul>
  );
}

interface ArchiveItemProps {
  post: PostListItem;
}

function ArchiveItem({ post }: ArchiveItemProps) {
  return (
    <Link
      href={`/article/${post.slug}`}
      className="group grid grid-cols-1 items-baseline gap-6 sm:grid-cols-[6rem_1fr]"
    >
      <Typography
        variant="caption"
        color="secondary"
        className="hidden font-mono tabular-nums sm:block"
        asChild
      >
        <time dateTime={formatISODate(post.createdAt)}>
          {formatYearDate(post.createdAt)}
        </time>
      </Typography>
      <Typography
        variant="label"
        weight="medium"
        as="span"
        color="heading"
        className="truncate transition-colors group-hover:text-ds-primary"
      >
        {post.title}
      </Typography>
    </Link>
  );
}
