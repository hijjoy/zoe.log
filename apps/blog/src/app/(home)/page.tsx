import HeroWordmark from './_components/hero-wordmark';
import MetaRow from './_components/meta-row';
import RecentPosts from './_components/recent-posts';

export default function Home() {
  return (
    <div className="flex flex-col gap-3 md:h-[calc(100dvh-4rem)] md:overflow-hidden">
      <div className="h-[40dvh] md:h-auto md:min-h-0 md:flex-1">
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
