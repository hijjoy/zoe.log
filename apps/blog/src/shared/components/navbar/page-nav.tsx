import { Link } from 'next-view-transitions';

export default function PageNav() {
  return (
    <nav
      aria-label="page navigation"
      className="flex items-center gap-4 text-ds-body text-sm"
    >
      <ul className="flex items-center gap-4">
        <li>
          <Link
            href="/"
            className="rounded font-semibold transition-all duration-400 hover:text-ds-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2 active:scale-95"
            aria-label="홈으로 이동"
          >
            zoe.log
          </Link>
        </li>
        <UnderlineMenu href="/about" name="about" />
        <UnderlineMenu href="/posts" name="posts" />
      </ul>
    </nav>
  );
}

const UnderlineMenu = ({ href, name }: { href: string; name: string }) => {
  return (
    <li>
      <Link
        href={href}
        aria-label={`${name}으로 이동`}
        className="relative rounded text-ds-secondary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-pg-800 after:transition-transform after:duration-300 after:content-[''] hover:text-ds-body hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2 dark:after:bg-pg-200"
      >
        {name}
      </Link>
    </li>
  );
};
