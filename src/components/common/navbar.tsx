import ThemeToggle from "@/theme/theme-toggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 py-4 w-full">
      <div className="flex justify-between items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
