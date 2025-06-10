import Link from "next/link";

export default function PageNav() {
  return (
    <nav
      aria-label="page navigation"
      className="flex gap-4 items-center text-gray-600 text-sm"
    >
      <Link
        href="/"
        className="font-semibold transition-all duration-400 active:scale-95 hover:text-main"
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
      className="relative text-gray-500 hover:text-gray-600 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gray-800 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      {name}
    </Link>
  );
};
