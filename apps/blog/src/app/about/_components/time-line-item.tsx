import { Text } from '@zoelog/ui';
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
      <div className="relative flex items-center gap-6 border-gray-300 border-l pb-4 pl-4 before:absolute before:top-[20px] before:left-[-5px] before:h-2 before:w-2 before:rounded-full before:border before:border-gray-300 before:bg-white dark:before:bg-gray-100">
        <p className="w-[80px] text-gray-400 text-sm md:w-[120px]">{date}</p>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:gap-2">
            <h2 className="font-semibold text-lg">{title}</h2>
            <div className="flex items-center gap-2">
              {subTitle && (
                <Text className="text-gray-400 text-xs md:text-sm">
                  {subTitle}
                </Text>
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
          <p className="text-gray-400 text-xs md:text-sm">{description}</p>
        </div>
      </div>
    </li>
  );
}
