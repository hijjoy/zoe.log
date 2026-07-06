import { Typography } from '@zoelog/ui';
import Link from 'next/link';

const LINKS: Array<{ label: string; href: string }> = [
  { label: 'Archive', href: '/archive' },
  { label: 'About', href: '/about' },
];

export default function Nav() {
  return (
    <nav aria-label="사이트 메뉴" className="flex flex-col items-start gap-1">
      {LINKS.map(({ label, href }) => (
        <Link key={label} href={href}>
          <Typography
            variant="caption"
            as="span"
            color="secondary"
            className="font-mono uppercase tracking-wider transition-colors hover:text-ds-primary"
          >
            {label}
          </Typography>
        </Link>
      ))}
    </nav>
  );
}
