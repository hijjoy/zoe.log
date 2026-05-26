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
    <svg
      viewBox="0 0 100 65"
      preserveAspectRatio="none"
      aria-label="ZOE.log"
      className="block h-full w-full select-none text-ds-heading"
    >
      <defs>
        <filter
          id="zoe-distort"
          x="-2%"
          y="-2%"
          width="104%"
          height="104%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0.6"
            result="distort"
          />
          <feGaussianBlur in="distort" stdDeviation="0.18" />
        </filter>
      </defs>
      <text
        x="0"
        y="50"
        fill="currentColor"
        fontSize="50"
        textLength="100"
        lengthAdjust="spacingAndGlyphs"
        filter="url(#zoe-distort)"
        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
      >
        {GLYPHS.map(({ char, weight }, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 글자 위치 고정
          <tspan key={index} fontWeight={weight}>
            {char}
          </tspan>
        ))}
      </text>
    </svg>
  );
}
