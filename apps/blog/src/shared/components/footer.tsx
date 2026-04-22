'use client';

import { Typography } from '@zoelog/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa6';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer className="mt-8 flex items-end justify-between gap-4 px-5 pb-10">
      <Typography variant="caption" color="secondary" as="span">
        © 2025 zoe.log
      </Typography>

      <div className="flex items-center gap-3">
        <Link
          aria-label="GitHub"
          href="https://github.com/hijjoy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ds-secondary transition-colors hover:text-ds-primary"
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}
