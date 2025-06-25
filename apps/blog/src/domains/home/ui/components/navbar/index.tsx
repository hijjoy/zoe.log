import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import PageNav from './page-nav';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between px-4 py-4 backdrop-blur-sm sm:backdrop-blur-none">
      {/* left side */}
      <PageNav />

      {/* right side */}
      <div className="flex items-center gap-2">
        <Link
          href="https://github.com/hijjoy"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-1.5 transition-all duration-500 hover:bg-gray-200"
        >
          <FaGithub className="text-gray-600" />
        </Link>
        <div className="h-4 w-px bg-gray-200" />
        <ThemeToggle />
      </div>
    </header>
  );
}
