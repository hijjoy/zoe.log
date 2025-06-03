"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function MotionOpacity({
  children,
  duration = 0.45,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
