type DateInput = string | Date;

const parseDate = (input: DateInput): Date | null => {
  const parsed = typeof input === 'string' ? new Date(input) : input;
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const pad2 = (n: number): string => String(n).padStart(2, '0');

export const formatYearDate = (date: DateInput): string => {
  const parsed = parseDate(date);
  if (!parsed) return 'Invalid date';

  return `${parsed.getFullYear()}.${pad2(parsed.getMonth() + 1)}.${pad2(parsed.getDate())}`;
};

/** <time dateTime> 속성용 YYYY-MM-DD 포맷 */
export const formatISODate = (date: DateInput): string | undefined => {
  const parsed = parseDate(date);
  if (!parsed) return undefined;

  return `${parsed.getFullYear()}-${pad2(parsed.getMonth() + 1)}-${pad2(parsed.getDate())}`;
};

export const formatShortDate = (date: DateInput): string => {
  const parsed = parseDate(date);
  if (!parsed) return '--.--';

  return `${pad2(parsed.getMonth() + 1)}.${pad2(parsed.getDate())}`;
};
