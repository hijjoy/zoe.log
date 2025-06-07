import ThemeToggle from "@/theme/theme-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex sticky top-0 z-20 justify-between items-center py-4 w-full backdrop-blur-sm">
      <Link
        href="/"
        className="text-lg font-semibold transition-all duration-400 active:scale-95 hover:text-gray-500"
      >
        zoe.log
      </Link>

      <div className="flex gap-3 items-center">
        <div className="flex gap-4 items-center text-gray-600">
          <Link
            href="/about"
            className="relative 
            after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gray-800 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            about
          </Link>
          <Link
            href="/posts"
            className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gray-800 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            posts
          </Link>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
