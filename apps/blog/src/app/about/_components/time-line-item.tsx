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
      <div className="relative flex items-center gap-6 border-ds-border-semantic border-l pb-4 pl-4 before:absolute before:top-[20px] before:left-[-5px] before:h-2 before:w-2 before:rounded-full before:border before:border-ds-border-semantic before:bg-ds-background">
        <Typography
          variant="label"
          as="p"
          color="secondary"
          className="w-[80px] md:w-[120px]"
        >
          {date}
        </Typography>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:gap-2">
            <Typography
              variant="heading"
              weight="semibold"
              as="h2"
              color="heading"
            >
              {title}
            </Typography>
            <div className="flex items-center gap-2">
              {subTitle && (
                <Typography variant="caption" color="secondary">
                  {subTitle}
                </Typography>
              )}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ds-secondary transition-colors hover:text-ds-primary"
                >
                  <GoLink size={12} aria-label="site link" />
                </Link>
              )}
            </div>
          </div>
          <Typography variant="caption" as="p" color="secondary">
            {description}
          </Typography>
        </div>
      </div>
    </li>
  );
}
