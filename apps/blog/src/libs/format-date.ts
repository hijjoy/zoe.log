// utils/format-date.ts
export const formatDate = (date: string | Date): string => {
  const parsed = typeof date === 'string' ? new Date(date) : date;

  if (Number.isNaN(parsed.getTime())) return 'Invalid date';

  return parsed.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  });
};

export const formatYearDate = (date: string | Date): string => {
  const parsed = typeof date === 'string' ? new Date(date) : date;

  if (Number.isNaN(parsed.getTime())) return 'Invalid date';

  const yyyy = parsed.getFullYear();
  const mm = String(parsed.getMonth() + 1).padStart(2, '0');
  const dd = String(parsed.getDate()).padStart(2, '0');

  return `${yyyy}.${mm}.${dd}`;
};

export const formatShortDate = (date: string | Date): string => {
  const parsed = typeof date === 'string' ? new Date(date) : date;

  if (Number.isNaN(parsed.getTime())) return '--.--';

  const mm = String(parsed.getMonth() + 1).padStart(2, '0');
  const dd = String(parsed.getDate()).padStart(2, '0');

  return `${mm}.${dd}`;
};

export const formatEnglishDate = (date: string | Date): string => {
  const parsed = typeof date === 'string' ? new Date(date) : date;

  if (Number.isNaN(parsed.getTime())) return 'Invalid date';

  const formatted = parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  });

  return formatted.replace(/^(\w{3})/, '$1.');
};
