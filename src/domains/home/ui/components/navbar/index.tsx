import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./theme-toggle";
import PageNav from "./page-nav";

export default function Navbar() {
  return (
    <header className="flex sticky top-0 z-20 justify-between items-center py-4 w-full backdrop-blur-sm sm:backdrop-blur-none px-4">
      {/* left side */}
      <PageNav />

      {/* right side */}
      <div className="flex gap-2 items-center">
        <Link
          href="https://github.com/hijjoy"
          target="_blank"
          rel="noopener noreferrer"
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
