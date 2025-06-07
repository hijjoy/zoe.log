import ThemeToggle from "@/theme/theme-toggle";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="flex sticky top-0 z-20 justify-between items-center py-4 w-full backdrop-blur-sm px-4">
      <div className="flex gap-4 items-center text-gray-600 text-sm">
        <Link
          href="/"
          className="font-semibold transition-all duration-400 active:scale-95 hover:text-main"
        >
          zoe.log
        </Link>
        <Link
          href="/about"
          className="relative text-gray-500 hover:text-gray-600 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gray-800 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          about
        </Link>
        <Link
          href="/posts"
          className="hover:text-gray-600 text-gray-500 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gray-800 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          posts
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <Link
          href="https://github.com/hijjoy"
          target="_blank"
          className="rounded-md p-1.5 hover:bg-gray-200 transition-all duration-500"
        >
          <FaGithub />
        </Link>
        <div className="h-4 w-px bg-gray-200" />
        <ThemeToggle />
      </div>
    </header>
  );
}
