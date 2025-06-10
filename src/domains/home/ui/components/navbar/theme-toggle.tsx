"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MotionOpacity from "@/shared/components/motion-opacity";
import { MoonIcon, SunIcon } from "./icon";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      className="cursor-pointer size-[30px] rounded-md p-1.5 hover:bg-gray-200 group transition-all duration-500"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
    >
      {mounted ? (
        <MotionOpacity key={isDark ? "moon" : "sun"}>
          {isDark ? (
            <MoonIcon className="size-4 transition-all duration-300 group-hover:rotate-12 dark:block dark:rotate-0" />
          ) : (
            <SunIcon className="size-4 transition-all duration-300 scale-100 dark:hidden group-hover:-rotate-90" />
          )}
        </MotionOpacity>
      ) : null}
    </button>
  );
}
