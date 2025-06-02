"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="cursor-pointer rounded-md border border-button-border-color p-1.5 hover:bg-gray-200 group transition-all duration-500"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="transition-all duration-300 scale-100 dark:hidden group-hover:-rotate-90 size-4" />
      <MoonIcon className="hidden transition-all duration-300 group-hover:rotate-12 dark:block dark:rotate-0 size-4" />
    </button>
  );
}
