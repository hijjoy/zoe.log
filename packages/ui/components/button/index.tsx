import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../libs';
import type { ButtonProps } from './types';

const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2 rounded-lg',
    'transition-all duration-200 cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outlined: 'border',
        ghost: '',
        text: '',
      },
      size: {
        small: 'h-8 px-3 text-[0.875rem]',
        medium: 'h-10 px-4 text-[1rem]',
        large: 'h-12 px-5 text-[1rem]',
      },
      color: {
        primary: '',
        neutral: '',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // === Primary Solid ===
      { variant: 'solid', color: 'primary', className: 'bg-ds-primary text-white hover:bg-ds-primary-hover' },
      // === Primary Outlined ===
      { variant: 'outlined', color: 'primary', className: 'border-ds-primary text-ds-primary hover:bg-ds-primary/10' },
      // === Primary Ghost ===
      { variant: 'ghost', color: 'primary', className: 'text-ds-primary hover:bg-ds-primary/10' },
      // === Primary Text ===
      { variant: 'text', color: 'primary', className: 'text-ds-primary hover:underline' },

      // === Neutral Solid ===
      { variant: 'solid', color: 'neutral', className: 'bg-pg-700 text-white hover:bg-pg-800 dark:bg-pg-300 dark:text-pg-900 dark:hover:bg-pg-400' },
      // === Neutral Outlined ===
      { variant: 'outlined', color: 'neutral', className: 'border-ds-border-semantic text-ds-heading hover:bg-ds-surface' },
      // === Neutral Ghost ===
      { variant: 'ghost', color: 'neutral', className: 'text-ds-heading hover:bg-ds-surface' },
      // === Neutral Text ===
      { variant: 'text', color: 'neutral', className: 'text-ds-heading hover:underline' },

      // === Icon only sizing (square) ===
      { iconOnly: true, size: 'small', className: 'px-0 w-8' },
      { iconOnly: true, size: 'medium', className: 'px-0 w-10' },
      { iconOnly: true, size: 'large', className: 'px-0 w-12' },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      color: 'primary',
      fullWidth: false,
      iconOnly: false,
    },
  },
);

const spinnerSizeMap = {
  small: 'h-3.5 w-3.5',
  medium: 'h-4 w-4',
  large: 'h-[18px] w-[18px]',
} as const;

function Button({
  variant = 'solid',
  size = 'medium',
  color = 'primary',
  leadingContent,
  trailingContent,
  iconOnly = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  as,
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : (as ?? 'button');
  const isDisabled = disabled || loading;

  return (
    <Component
      className={cn(buttonVariants({ variant, size, color, fullWidth, iconOnly }), className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      {...(loading && { style: { pointerEvents: 'none' as const } })}
      {...props}
    >
      {loading ? (
        <>
          <span className="invisible flex items-center gap-2">
            {leadingContent && <span className="shrink-0">{leadingContent}</span>}
            {children}
            {trailingContent && <span className="shrink-0">{trailingContent}</span>}
          </span>
          <span className="absolute">
            <span
              className={cn(
                'block animate-spin rounded-full border-2 border-current border-t-transparent',
                spinnerSizeMap[size],
              )}
            />
          </span>
        </>
      ) : (
        <>
          {leadingContent && <span className="shrink-0">{leadingContent}</span>}
          {children}
          {trailingContent && <span className="shrink-0">{trailingContent}</span>}
        </>
      )}
    </Component>
  );
}

export { Button };
export type { ButtonProps } from './types';
