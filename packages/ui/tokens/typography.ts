export const typographyScale = {
  display: { size: '2.5rem', lineHeight: '1.2', defaultTag: 'h1' as const, defaultWeight: 'bold' as const },
  title: { size: '1.75rem', lineHeight: '1.3', defaultTag: 'h2' as const, defaultWeight: 'semibold' as const },
  heading: { size: '1.25rem', lineHeight: '1.4', defaultTag: 'h3' as const, defaultWeight: 'semibold' as const },
  body: { size: '1rem', lineHeight: '1.5', defaultTag: 'p' as const, defaultWeight: 'regular' as const },
  'body-reading': { size: '1rem', lineHeight: '1.8', defaultTag: 'p' as const, defaultWeight: 'regular' as const },
  label: { size: '0.875rem', lineHeight: '1.4', defaultTag: 'span' as const, defaultWeight: 'medium' as const },
  caption: { size: '0.75rem', lineHeight: '1.4', defaultTag: 'span' as const, defaultWeight: 'regular' as const },
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export type TypographyVariant = keyof typeof typographyScale;
export type FontWeight = keyof typeof fontWeight;
