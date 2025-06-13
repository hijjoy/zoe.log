export const CATEGORY = {
  development: '개발',
  review: '회고',
} as const;

export type Category = keyof typeof CATEGORY;

export const MENU_ITEMS = [
  {
    name: '전체',
    href: '/posts',
  },
  {
    name: '개발',
    href: '/posts/development',
  },
  {
    name: '회고',
    href: '/posts/review',
  },
];
