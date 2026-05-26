import { Typography } from '@zoelog/ui';

const SOCIALS: Array<{ label: string; href: string }> = [
  { label: 'Github', href: 'https://github.com/hijjoy' },
];

export default function Socials() {
  return (
    <nav aria-label="Socials" className="flex flex-col gap-1">
      {SOCIALS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Typography
            variant="caption"
            as="span"
            color="secondary"
            className="font-mono uppercase tracking-wider transition-colors hover:text-ds-primary"
          >
            {label}
          </Typography>
        </a>
      ))}
    </nav>
  );
}
