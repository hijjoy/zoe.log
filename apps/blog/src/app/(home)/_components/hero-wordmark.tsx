const GLYPHS: Array<{ char: string; weight: number }> = [
  { char: 'Z', weight: 300 },
  { char: 'O', weight: 400 },
  { char: 'E', weight: 200 },
  { char: '.', weight: 400 },
  { char: 'l', weight: 300 },
  { char: 'o', weight: 500 },
  { char: 'g', weight: 300 },
];

export default function HeroWordmark() {
  return (
    <div className="@container relative flex h-full w-full select-none items-center justify-center overflow-hidden">
      <svg
        aria-hidden
        className="absolute h-0 w-0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <filter
            id="zoe-distort"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
          >
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
        className="flex items-baseline whitespace-nowrap pb-[0.2em] font-light leading-none tracking-[-0.04em] text-ds-heading"
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
