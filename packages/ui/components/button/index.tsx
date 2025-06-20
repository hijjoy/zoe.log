import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { cn } from '../../libs';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva('disabled:cursor-not-allowed text-sm text-gray-500 transition-all duration-300', {
  variants: {
    variant: {
      default: 'my-10 rounded-xl bg-gray-100 px-4 py-2  hover:bg-gray-200 active:scale-95 disabled:bg-gray-100 sm:my-0 sm:mb-4',
      link: 'bg-transparent hover:bg-transparent hover:text-main',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
});

Button.displayName = 'Button';

export { Button };
