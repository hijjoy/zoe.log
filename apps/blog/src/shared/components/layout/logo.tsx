import { Typography } from '@zoelog/ui';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" aria-label="zoe.log 홈으로" className="group inline-flex">
      <Typography
        variant="label"
        weight="medium"
        as="span"
        color="heading"
        className="font-mono transition-colors group-hover:text-ds-primary"
      >
        zoe
      </Typography>
    </Link>
  );
}
