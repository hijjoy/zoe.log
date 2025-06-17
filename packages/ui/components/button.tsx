import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { cn } from '../libs/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'my-10 rounded-xl bg-gray-100 px-4 py-2 text-sm text-gray-500 transition-all duration-300 hover:bg-gray-200 active:scale-95 sm:my-0 sm:mb-4',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
