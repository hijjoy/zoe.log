// Duration constants
export const duration = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
} as const;

// Transition presets
export const transition = {
  fast: `all ${duration.fast}s cubic-bezier(0.4, 0, 0.2, 1)`,
  normal: `all ${duration.normal}s cubic-bezier(0.4, 0, 0.2, 1)`,
  slow: `all ${duration.slow}s cubic-bezier(0.4, 0, 0.2, 1)`,
} as const;

// Spring animations
export const spring = {
  scale: {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  },
  scaleSmall: {
    type: 'spring',
    stiffness: 500,
    damping: 25,
  },
} as const;
