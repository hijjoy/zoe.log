"use client";

import { SunIcon, MoonIcon } from "@/app/(home)/_components/icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MotionOpacity from "@/components/common/motion-opacity";

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
      className="cursor-pointer size-[30px] rounded-md border border-button-border-color p-1.5 hover:bg-gray-200 group transition-all duration-500"
      title="Toggle theme"
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
