"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const links = [
  // { href: "/", label: "Index" },
  { href: "/", label: "⌘" },
  // { href: "/", label: "𖠿" },
  // { href: "/projects", label: "⌘", ariaLabel: "Projects" },
  { href: "/projects", label: "projects", ariaLabel: "Projects" },
];

const legacyProjectPaths = [
  "/smile",
  "/govi",
  "/frames-on-frames",
  "/history-of-tau",
];

type Theme = "light" | "dark";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/projects") {
    return (
      pathname === "/projects" ||
      pathname.startsWith("/projects/") ||
      legacyProjectPaths.includes(pathname)
    );
  }

  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const hasHydratedTheme = useRef(false);
  const [theme, setTheme] = useState<Theme>("light");

  const isResumePage = pathname === "/resume";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const nextTheme =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);

    const frame = window.requestAnimationFrame(() => {
      setTheme(nextTheme);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!hasHydratedTheme.current) {
      hasHydratedTheme.current = true;
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => {
      return currentTheme === "dark" ? "light" : "dark";
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowRight" && pathname !== "/projects") {
        event.preventDefault();
        router.push("/projects");
      }

      if (event.key === "ArrowLeft" && pathname !== "/") {
        event.preventDefault();
        router.push("/");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname, router]);

  if (isResumePage) {
    return null;
  }

  return (
    <header className="shrink-0 bg-background pt-4 md:pt-8">
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-2 sm:px-4 md:px-6">
        <div className="flex flex-1 items-center">
          <Link
            href="/"
            className="text-sm font-[550] leading-tight tracking-normal outline-none focus:outline-none focus-visible:outline-none"
          >
            Hadeya Ikram
          </Link>
        </div>

        <div className="flex rounded-full bg-nav p-1 text-sm shadow-[var(--shadow-sm)]">
          {links.map((link) => {
            const isActive = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                aria-current={isActive ? "page" : undefined}
                title={link.ariaLabel}
                className={`relative rounded-full px-4 py-2 outline-none transition focus:outline-none focus-visible:outline-none ${
                  isActive
                    ? ""
                    : "text-secondary"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-nav-active shadow-[var(--shadow-xs)]"
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 items-center justify-end">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center text-sm text-secondary outline-none transition hover:text-foreground focus:outline-none focus-visible:outline-none"
          >
            {theme === "dark" ? "☼" : "◐"}
          </button>
        </div>
      </nav>
    </header>
  );
}
