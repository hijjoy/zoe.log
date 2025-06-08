import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/libs/cn";
import { ComponentProps, ReactNode } from "react";

interface TextProps extends ComponentProps<"p"> {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Text({
  asChild,
  children,
  className,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp className={cn("text-gray-700", className)} {...props}>
      {children}
    </Comp>
  );
}
