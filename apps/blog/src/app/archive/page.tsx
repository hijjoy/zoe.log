import { Typography } from '@zoelog/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/domains/post/queries';
import { formatYearDate } from '@/libs/format-date';
import type { PostListItem } from '@/types/post';

export const metadata: Metadata = {
  title: 'Archive',
};

export default async function ArchivePage() {
  const posts = await getPosts();

  return <ArchiveList posts={posts} />;
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
      className="group grid grid-cols-[6rem_1fr] items-baseline gap-6"
    >
      <Typography
        variant="caption"
        as="time"
        color="secondary"
        className="font-mono tabular-nums"
      >
        {formatYearDate(post.createdAt)}
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
