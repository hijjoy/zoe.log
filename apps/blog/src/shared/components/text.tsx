import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/libs/cn';
import { ComponentProps, ReactNode } from 'react';

interface TextProps extends ComponentProps<'div'> {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Text({ asChild, children, className, ...props }: TextProps) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp className={cn('break-keep text-gray-700', className)} {...props}>
      {children}
    </Comp>
  );
}
