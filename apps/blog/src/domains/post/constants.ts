export const CATEGORY = {
  development: '개발',
  study: '공부',
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
    name: '공부',
    href: '/posts/study',
  },
  {
    name: '회고',
    href: '/posts/review',
  },
];
