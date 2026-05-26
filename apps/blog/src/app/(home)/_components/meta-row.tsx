import { Typography } from '@zoelog/ui';
import { Fragment } from 'react';

const ITEMS = ['Recent posts', `${new Date().getFullYear()}`];

export default function MetaRow() {
  return (
    <div className="hidden items-center gap-3 md:flex" aria-hidden>
      {ITEMS.map((item, idx) => (
        <Fragment key={item}>
          <Typography
            variant="caption"
            as="span"
            color="secondary"
            className="shrink-0 font-mono uppercase tracking-wider"
          >
            {item}
          </Typography>
          {idx < ITEMS.length - 1 && (
            <span className="h-px flex-1 bg-ds-border-semantic" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
