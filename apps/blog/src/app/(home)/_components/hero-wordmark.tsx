'use client';

import { useEffect, useRef } from 'react';

const GLYPHS: Array<{ char: string; weight: number }> = [
  { char: 'Z', weight: 300 },
  { char: 'O', weight: 400 },
  { char: 'E', weight: 200 },
  { char: '.', weight: 400 },
  { char: 'l', weight: 300 },
  { char: 'o', weight: 500 },
  { char: 'g', weight: 300 },
];

const FALLOFF_RADIUS_PX = 120;
const HOVER_WEIGHT_BOOST = 380;
const MAX_FONT_WEIGHT = 700;
const WEIGHT_LERP_RATIO = 0.14;
const SETTLED_EPSILON = 0.5;

const gaussianFalloff = (distancePx: number) =>
  Math.exp(-(distancePx ** 2) / (2 * FALLOFF_RADIUS_PX ** 2));

export default function HeroWordmark() {
  const glyphRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const frameRef = useRef<number | null>(null);
  const weightsRef = useRef(GLYPHS.map((glyph) => glyph.weight));

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const targetWeightOf = (glyph: HTMLSpanElement, baseWeight: number) => {
    const pointer = pointerRef.current;
    if (!pointer) return baseWeight;

    const rect = glyph.getBoundingClientRect();
    const distance = Math.hypot(
      pointer.x - (rect.left + rect.width / 2),
      pointer.y - (rect.top + rect.height / 2),
    );
    return Math.min(
      MAX_FONT_WEIGHT,
      baseWeight + HOVER_WEIGHT_BOOST * gaussianFalloff(distance),
    );
  };

  const stepWeights = () => {
    let settled = true;

    glyphRefs.current.forEach((glyph, index) => {
      if (!glyph) return;
      const target = targetWeightOf(glyph, GLYPHS[index].weight);
      const current = weightsRef.current[index];
      const next = current + (target - current) * WEIGHT_LERP_RATIO;

      weightsRef.current[index] = next;
      glyph.style.fontWeight = next.toFixed(1);
      if (Math.abs(next - target) > SETTLED_EPSILON) settled = false;
    });

    return settled;
  };

  const tick = () => {
    const settled = stepWeights();
    if (settled && pointerRef.current === null) {
      frameRef.current = null;
      return;
    }
    frameRef.current = requestAnimationFrame(tick);
  };

  const startLoop = () => {
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(tick);
    }
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    pointerRef.current = { x: event.clientX, y: event.clientY };
    startLoop();
  };

  const handlePointerLeave = () => {
    pointerRef.current = null;
  };

  return (
    <div
      className="@container relative flex h-full w-full select-none items-center justify-center overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <svg
        aria-hidden="true"
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
        role="img"
        aria-label="ZOE.log"
        className="flex items-baseline whitespace-nowrap pb-[0.2em] font-light text-ds-heading leading-none tracking-[-0.04em]"
        style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(48px, 32cqw, 280px)',
          filter: 'url(#zoe-distort)',
        }}
      >
        {GLYPHS.map(({ char, weight }, index) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: 위치 고정
            key={index}
            ref={(element) => {
              glyphRefs.current[index] = element;
            }}
            className="inline-block will-change-[font-weight]"
            style={{ fontWeight: weight }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
