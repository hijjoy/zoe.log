type DateInput = string | Date;

const parseDate = (input: DateInput): Date | null => {
  const parsed = typeof input === 'string' ? new Date(input) : input;
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const pad2 = (n: number): string => String(n).padStart(2, '0');

export const formatDate = (date: DateInput): string => {
  const parsed = parseDate(date);
  if (!parsed) return 'Invalid date';

  return parsed.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  });
};

export const formatYearDate = (date: DateInput): string => {
  const parsed = parseDate(date);
  if (!parsed) return 'Invalid date';

  return `${parsed.getFullYear()}.${pad2(parsed.getMonth() + 1)}.${pad2(parsed.getDate())}`;
};

export const formatShortDate = (date: DateInput): string => {
  const parsed = parseDate(date);
  if (!parsed) return '--.--';

  return `${pad2(parsed.getMonth() + 1)}.${pad2(parsed.getDate())}`;
};

export const formatEnglishDate = (date: DateInput): string => {
  const parsed = parseDate(date);
  if (!parsed) return 'Invalid date';

  return parsed
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Seoul',
    })
    .replace(/^(\w{3})/, '$1.');
};
