import { Typography } from '@zoelog/ui';
import Link from 'next/link';
import { GoLink } from 'react-icons/go';

interface Props {
  date: string;
  title: string;
  subTitle?: string;
  description: string;
  link?: string;
}

export default function TimeLineItem({
  date,
  title,
  description,
  subTitle,
  link,
}: Props) {
  return (
    <li className="flex flex-col">
      <div className="relative flex items-center gap-6 border-pg-300 border-l pb-4 pl-4 before:absolute before:top-[20px] before:left-[-5px] before:h-2 before:w-2 before:rounded-full before:border before:border-pg-300 before:bg-white dark:border-pg-500 dark:before:border-pg-500 dark:before:bg-pg-800">
        <Typography variant="label" as="p" className="w-[80px] text-pg-500 md:w-[120px] dark:text-pg-400">
          {date}
        </Typography>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:gap-2">
            <Typography variant="body" weight="semibold" as="h2" className="text-lg dark:text-pg-300">
              {title}
            </Typography>
            <div className="flex items-center gap-2">
              {subTitle && (
                <Typography variant="caption" className="text-pg-500 md:text-sm dark:text-pg-400">
                  {subTitle}
                </Typography>
              )}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-500"
                >
                  <GoLink size={12} aria-label="site link" />
                </Link>
              )}
            </div>
          </div>
          <Typography variant="caption" as="p" className="text-pg-400 md:text-sm dark:text-pg-500">
            {description}
          </Typography>
        </div>
      </div>
    </li>
  );
}
