"use client";

import { cn } from "@/libs/cn";
import React, { useEffect, useState } from "react";

type Unit = "character" | "word" | "line";
type Preset = "fade" | "slide";

interface AnimatedTextProps {
  text: string;
  preset?: Preset;
  unit?: Unit;
  as?: React.ElementType;
  className?: string;
  delay?: number;
}

const getAnimationStyle = (preset: Preset, delay: number) => {
  const baseStyle = {
    display: "inline-block",
    opacity: 0,
    animation: `${
      preset === "fade" ? "fadeIn" : "slideIn"
    } 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
    animationDelay: `${delay}s`,
  };

  return baseStyle;
};

export const AnimatedText = ({
  text,
  preset = "fade",
  unit = "character",
  as: Component = "span",
  className,
  delay = 0.05,
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const splitter = {
    character: (txt: string) =>
      txt.split("").map((char) => (char === " " ? "\u00A0" : char)),
    word: (txt: string) =>
      txt.split(/(\s+)/).map((part) => (part.trim() === "" ? "\u00A0" : part)),
    line: (txt: string) => txt.split(/\n/),
  };

  const pieces = splitter[unit](text);

  return (
    <Component
      className={cn(
        "inline-block text-gray-700 font-pretendard text-base",
        className,
        unit === "line" && "whitespace-pre-line"
      )}
    >
      {pieces.map((part, i) => (
        <span key={i} style={getAnimationStyle(preset, i * delay)}>
          {part}
        </span>
      ))}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </Component>
  );
};
