import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../libs';

const dividerVariants = cva(
  'before:-translate-x-1/2 before:-translate-y-1/2 relative block h-10 border-none before:absolute before:top-1/2 before:left-1/2 before:font-normal before:text-xl before:content-["*_*_*"]',
  {
    variants: {
      variant: {
        default: 'before:text-gray-300',
        muted: 'before:text-second',
      },
      spacing: {
        none: '',
        md: 'my-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      spacing: 'none',
    },
  },
);

interface DividerProps
  extends Omit<React.ComponentPropsWithoutRef<'hr'>, 'children'>,
    VariantProps<typeof dividerVariants> {}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, variant, spacing, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(dividerVariants({ variant, spacing, className }))}
      {...props}
    />
  ),
);

Divider.displayName = 'Divider';

export { Divider, dividerVariants };
