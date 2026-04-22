import { Typography } from '@zoelog/ui';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Typography
          variant="display"
          weight="bold"
          as="h1"
          className="font-meno text-[3rem] text-white leading-[0.95] tracking-tight md:text-[3.75rem]"
        >
          ZOE.log
        </Typography>
        <Typography variant="label" as="p" className="text-white/70 ">
          Hyewon · Frontend Engineer
        </Typography>
      </div>

      <nav aria-label="소개 페이지로 이동" className="flex items-center gap-2">
        <Link
          href="/about"
          className="inline-flex items-center border border-white/25 bg-white/10 px-5 py-1.5 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
