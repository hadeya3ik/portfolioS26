"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/resume") {
    return null;
  }

  return (
    <footer className="flex shrink-0 flex-col items-center gap-2 px-6 py-4 text-center font-sans">
      <p className="text-[12px] text-foreground opacity-80">@{new Date().getFullYear()} hadeyaik.com</p>
      <p className="text-[10px] text-secondary opacity-70">made with ♡</p>
    </footer>
  );
}
