"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/libs/cn";

interface Props extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function MotionOpacity({
  children,
  className,
  initial = { opacity: 0, scale: 0.995 },
  animate = { opacity: 1, scale: 1 },
  transition = { duration: 0.6, ease: "easeInOut" },
  ...rest
}: Props) {
  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
