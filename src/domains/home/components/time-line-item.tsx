import Link from "next/link";
import { GoLink } from "react-icons/go";

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
    <div className="flex flex-col ">
      <div className="border-l border-gray-300 flex items-center gap-6  pb-4 pl-4 relative before:absolute before:left-[-5px] before:top-[20px] before:w-2 before:h-2 before:bg-white dark:before:bg-gray-100 before:rounded-full before:border before:border-gray-300">
        <p className="text-sm text-gray-400 w-[120px] sm:w-[80px]">{date}</p>

        <div className="flex flex-col justify-center ">
          <div className="flex  gap-2 sm:gap-0 sm:items-start items-center sm:flex-col">
            <h2 className="text-lg font-semibold ">{title}</h2>
            <div className="flex gap-2 items-center">
              {subTitle && (
                <p className="text-sm text-gray-400 sm:text-xs">{subTitle}</p>
              )}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="hover:text-blue-500 transition-colors"
                >
                  <GoLink size={12} />
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm sm:text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
