import { Slot } from '@radix-ui/react-slot';
import { ComponentProps, forwardRef, ReactNode } from 'react';
import { cn } from '../libs';

interface TextProps extends ComponentProps<'div'> {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

const Text = forwardRef<HTMLDivElement, TextProps>(({ asChild, children, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp ref={ref} className={cn('break-keep text-gray-700', className)} {...props}>
      {children}
    </Comp>
  );
});

Text.displayName = 'Text';

export { Text };
