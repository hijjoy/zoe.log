import { Link } from 'next-view-transitions';
import { getAdjacentPosts } from '@/domains/post/queries';

interface Props {
  slug: string;
}

async function PostNavigationComponent({ slug }: Props) {
  const { prevPost, nextPost } = await getAdjacentPosts(slug);

  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav aria-label="게시글 탐색" className="mt-16 grid grid-cols-2 gap-4">
      {prevPost ? (
        <NavigationLink
          slug={prevPost.slug}
          title={prevPost.title}
          label="이전글"
        />
      ) : (
        <div />
      )}
      {nextPost ? (
        <NavigationLink
          slug={nextPost.slug}
          title={nextPost.title}
          label="다음글"
          align="right"
        />
      ) : (
        <div />
      )}
    </nav>
  );
}

interface NavigationLinkProps {
  slug: string;
  title: string;
  label: string;
  align?: 'left' | 'right';
}

function NavigationLink({
  slug,
  title,
  label,
  align = 'left',
}: NavigationLinkProps) {
  return (
    <Link
      href={`/article/${slug}`}
      className={`group block h-full rounded-lg border border-gray-200 p-4 transition-colors hover:border-main dark:border-gray-700 dark:hover:border-main ${align === 'right' ? 'text-right' : ''}`}
    >
      <span className="text-gray-500 text-sm">{label}</span>
      <p className="mt-1 line-clamp-2 font-medium transition-colors group-hover:text-main">
        {title}
      </p>
    </Link>
  );
}

function PostNavigationLoading() {
  return (
    <nav aria-label="게시글 탐색" className="mt-16 grid grid-cols-2 gap-4">
      <div className="h-[88px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-[88px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
    </nav>
  );
}

export const PostNavigation = Object.assign(PostNavigationComponent, {
  Loading: PostNavigationLoading,
});
