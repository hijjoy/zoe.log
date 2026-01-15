export const CATEGORY = {
  development: '개발',
  study: '공부',
  review: '회고',
} as const;

export type Category = keyof typeof CATEGORY;

export const MENU_ITEMS = [
  { name: '전체', href: '/posts' },
  ...Object.entries(CATEGORY).map(([key, name]) => ({
    name,
    href: `/posts/${key}`,
  })),
] as const;
