import { Typography } from '@zoelog/ui';
import { Link } from 'next-view-transitions';
import { getAdjacentPosts } from '@/domains/post/queries';

interface Props {
  slug: string;
}

type Direction = 'prev' | 'next';

const directionMeta: Record<Direction, { label: string; align: string }> = {
  prev: { label: '이전글', align: 'text-left' },
  next: { label: '다음글', align: 'text-right' },
};

export async function PostNavigation({ slug }: Props) {
  const { prevPost, nextPost } = await getAdjacentPosts(slug);

  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav aria-label="게시글 탐색" className="mt-16 grid grid-cols-2 gap-4">
      {prevPost ? (
        <NavigationLink direction="prev" post={prevPost} />
      ) : (
        <div />
      )}
      {nextPost ? (
        <NavigationLink direction="next" post={nextPost} />
      ) : (
        <div />
      )}
    </nav>
  );
}

PostNavigation.Loading = function Loading() {
  return (
    <nav aria-label="게시글 탐색" className="mt-16 grid grid-cols-2 gap-4">
      <div className="h-[88px] animate-pulse rounded-lg bg-ds-surface" />
      <div className="h-[88px] animate-pulse rounded-lg bg-ds-surface" />
    </nav>
  );
};

interface NavigationLinkProps {
  direction: Direction;
  post: { slug: string; title: string };
}

function NavigationLink({ direction, post }: NavigationLinkProps) {
  const { label, align } = directionMeta[direction];

  return (
    <Link
      href={`/article/${post.slug}`}
      className={`group block h-full rounded-lg border border-ds-border-semantic p-4 transition-colors hover:border-ds-primary ${align}`}
    >
      <Typography variant="label" color="secondary">
        {label}
      </Typography>
      <Typography
        variant="body"
        weight="medium"
        as="p"
        className="mt-1 line-clamp-2 transition-colors group-hover:text-ds-primary"
      >
        {post.title}
      </Typography>
    </Link>
  );
}
