export const CATEGORY = {
  development: '개발',
  fe: 'FE',
  be: 'BE',
} as const;

export type Category = keyof typeof CATEGORY;
