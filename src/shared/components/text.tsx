import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/libs/cn";
import { ComponentProps, ReactNode } from "react";

interface TextProps extends ComponentProps<"div"> {
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
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={cn("text-gray-700 break-keep", className)} {...props}>
      {children}
    </Comp>
  );
}
