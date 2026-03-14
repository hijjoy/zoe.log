import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../libs';
import { typographyScale } from '../../tokens/typography';
import type { TypographyProps } from './types';

const typographyVariants = cva('font-[inherit]', {
  variants: {
    variant: {
      display: 'text-[2.5rem] leading-[1.2]',
      title: 'text-[1.75rem] leading-[1.3]',
      heading: 'text-[1.25rem] leading-[1.4]',
      body: 'text-[1rem] leading-[1.5]',
      'body-reading': 'text-[1rem] leading-[1.8]',
      label: 'text-[0.875rem] leading-[1.4]',
      caption: 'text-[0.75rem] leading-[1.4]',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      heading: 'text-ds-heading',
      body: 'text-ds-body',
      secondary: 'text-ds-secondary',
      primary: 'text-ds-primary',
      inherit: 'text-inherit',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'inherit',
  },
});

function Typography({
  variant = 'body',
  weight,
  color = 'inherit',
  as,
  asChild = false,
  className,
  children,
  ...props
}: TypographyProps) {
  const resolvedWeight = weight ?? typographyScale[variant].defaultWeight;
  const defaultTag = typographyScale[variant].defaultTag;
  const Component = asChild ? Slot : (as ?? defaultTag);

  return (
    <Component
      className={cn(typographyVariants({ variant, weight: resolvedWeight, color }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Typography };
export type { TypographyProps } from './types';
