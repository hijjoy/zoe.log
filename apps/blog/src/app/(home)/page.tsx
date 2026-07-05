import { Typography } from '@zoelog/ui';
import HeroWordmark from './_components/hero-wordmark';
import RecentPosts from './_components/recent-posts';

export default function Home() {
  return (
    <div className="flex flex-col gap-3 md:h-[calc(100dvh-4rem)] md:overflow-hidden">
      <div className="h-[40dvh] overflow-hidden md:h-auto md:min-h-0 md:flex-1">
        <HeroWordmark />
      </div>
      <section
        aria-label="Recent posts"
        className="w-4/5 min-w-0 md:overflow-hidden"
      >
        <MetaRow />
        <RecentPosts />
      </section>
    </div>
  );
}

function MetaRow() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <Typography
        variant="caption"
        as="span"
        color="secondary"
        className="shrink-0 font-mono uppercase tracking-wider"
      >
        Recent posts
      </Typography>
    </div>
  );
}
