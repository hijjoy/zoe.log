import { Typography } from '@zoelog/ui';
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

const GLYPHS: Array<{ char: string; weight: number }> = [
  { char: 'Z', weight: 300 },
  { char: 'O', weight: 400 },
  { char: 'E', weight: 200 },
  { char: '.', weight: 400 },
  { char: 'l', weight: 300 },
  { char: 'o', weight: 500 },
  { char: 'g', weight: 300 },
];

function HeroWordmark() {
  return (
    <div className="@container relative flex h-full w-full select-none items-center justify-center overflow-hidden">
      <svg
        aria-hidden
        className="absolute h-0 w-0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <filter id="zoe-distort" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="2"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              result="distort"
            />
            <feGaussianBlur in="distort" stdDeviation="0.8" />
          </filter>
        </defs>
      </svg>
      <div
        aria-label="ZOE.log"
        className="flex items-baseline whitespace-nowrap pb-[0.2em] font-light text-ds-heading leading-none tracking-[-0.04em]"
        style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(48px, 32cqw, 280px)',
          filter: 'url(#zoe-distort)',
        }}
      >
        {GLYPHS.map(({ char, weight }, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 위치 고정
          <span key={index} style={{ fontWeight: weight }}>
            {char}
          </span>
        ))}
      </div>
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
