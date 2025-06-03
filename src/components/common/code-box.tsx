"use client";

import { cn } from "@/libs/cn";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

interface Props {
  code: string;
  className?: string;
}

export default function CodeBlockBox({ code, className }: Props) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn("overflow-x-auto", className)}>
      <pre className="font-mono text-sm leading-relaxed text-gray-800">
        <SyntaxHighlighter
          language="jsx"
          className="rounded-xl"
          style={theme === "dark" ? tomorrow : undefined}
        >
          {code}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
}
