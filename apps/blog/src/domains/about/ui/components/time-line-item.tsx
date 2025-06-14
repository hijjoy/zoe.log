import Link from 'next/link';
import { GoLink } from 'react-icons/go';

interface Props {
  date: string;
  title: string;
  subTitle?: string;
  description: string;
  link?: string;
}

export default function TimeLineItem({ date, title, description, subTitle, link }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative flex items-center gap-6 border-l border-gray-300 pb-4 pl-4 before:absolute before:left-[-5px] before:top-[20px] before:h-2 before:w-2 before:rounded-full before:border before:border-gray-300 before:bg-white dark:before:bg-gray-100">
        <p className="w-[120px] text-sm text-gray-400 sm:w-[80px]">{date}</p>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 sm:flex-col sm:items-start sm:gap-0">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex items-center gap-2">
              {subTitle && <p className="text-sm text-gray-400 sm:text-xs">{subTitle}</p>}
              {link && (
                <Link href={link} target="_blank" className="transition-colors hover:text-blue-500">
                  <GoLink size={12} />
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-400 sm:text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}
