'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Typography } from '@zoelog/ui';
import { Link } from 'next-view-transitions';
import { postQueries } from '@/domains/post/queries/post-queries';
import { formatCategoryLabel } from '@/domains/post/utils/format-category-label';
import { formatEnglishDate } from '@/libs/format-date';
import type { PostListItem } from '@/types/post';

export default function PostList() {
  const { data: posts } = useSuspenseQuery(postQueries.list());

  if (!posts || posts.length === 0) return null;

  return (
    <section aria-label="posts">
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}

interface PostItemProps {
  post: PostListItem;
}

function PostItem({ post }: PostItemProps) {
  const label = formatCategoryLabel(post.postCategories);

  return (
    <Link
      href={`/article/${post.slug}`}
      className="group block border-white/15 border-t px-2 py-4 transition-colors hover:bg-white/5"
    >
      <div className="flex items-baseline justify-between gap-3">
        <Typography
          variant="caption"
          weight="medium"
          as="time"
          className="font-mono text-white tabular-nums"
        >
          {formatEnglishDate(post.createdAt)}
        </Typography>
        {label && (
          <Typography
            variant="caption"
            as="span"
            className="shrink-0 text-white/60 tracking-wide"
          >
            {label}
          </Typography>
        )}
      </div>

      <Typography
        variant="caption"
        weight="medium"
        as="p"
        className="mt-1.5 line-clamp-1 text-white/90 transition-colors group-hover:text-white"
      >
        {post.title}
      </Typography>

      {post.description && (
        <Typography
          variant="caption"
          as="p"
          className="mt-0.5 line-clamp-1 text-white/50"
        >
          {post.description}
        </Typography>
      )}
    </Link>
  );
}
