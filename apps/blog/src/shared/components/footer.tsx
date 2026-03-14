import { Typography } from '@zoelog/ui';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex w-full justify-end px-5 py-8">
      <Typography variant="caption" color="secondary">
        © Powered by{' '}
        <Link
          href="https://github.com/hijjoy"
          className="hover:text-ds-body"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hyewon
        </Link>
      </Typography>
    </footer>
  );
}
