// utils/format-date.ts
export const formatDate = (date: string | Date): string => {
  const parsed = typeof date === 'string' ? new Date(date) : date;

  if (Number.isNaN(parsed.getTime())) return 'Invalid date';

  return parsed.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
