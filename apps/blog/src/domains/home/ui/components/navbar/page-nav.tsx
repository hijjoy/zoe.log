import Link from 'next/link';

export default function PageNav() {
  return (
    <nav
      aria-label="page navigation"
      className="flex items-center gap-4 text-gray-600 text-sm"
    >
      <Link
        href="/"
        className="font-semibold transition-all duration-400 hover:text-main active:scale-95"
      >
        zoe.log
      </Link>
      <UnderlineMenu href="/about" name="about" />
      <UnderlineMenu href="/posts" name="posts" />
    </nav>
  );
}

const UnderlineMenu = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link
      href={href}
      className="relative text-gray-500 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-gray-800 after:transition-transform after:duration-300 after:content-[''] hover:text-gray-600 hover:after:scale-x-100"
    >
      {name}
    </Link>
  );
};
