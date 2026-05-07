"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { HomePanel } from "@/components/home-panel";
import { ProjectsPanel } from "@/components/projects-panel";

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isSlideRoute = pathname === "/" || pathname === "/projects";
  const isHomeRoute = pathname === "/";
  const x = pathname === "/projects" ? "-100vw" : "0vw";
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [panelHeights, setPanelHeights] = useState({
    home: 0,
    projects: 0,
  });

  useEffect(() => {
    if (!isSlideRoute) return;

    function updateHeights() {
      setPanelHeights({
        home: homeRef.current?.scrollHeight ?? 0,
        projects: projectsRef.current?.scrollHeight ?? 0,
      });
    }

    updateHeights();

    const resizeObserver = new ResizeObserver(updateHeights);

    if (homeRef.current) {
      resizeObserver.observe(homeRef.current);
    }

    if (projectsRef.current) {
      resizeObserver.observe(projectsRef.current);
    }

    window.addEventListener("resize", updateHeights);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeights);
    };
  }, [isSlideRoute]);

  if (!isSlideRoute) {
    return <main className="flex-1 text-foreground">{children}</main>;
  }

  const activeHeight = isHomeRoute ? panelHeights.home : panelHeights.projects;

  return (
    <div
      className="relative overflow-hidden text-foreground"
      style={{
        height: activeHeight || undefined,
        minHeight: isHomeRoute ? "calc(100dvh - 6rem)" : undefined,
      }}
    >
      <motion.main
        animate={{ x }}
        initial={false}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 flex w-[200vw] transform-gpu items-start will-change-transform"
      >
        <div ref={homeRef} className="w-screen shrink-0">
          <HomePanel />
        </div>
        <div ref={projectsRef} className="w-screen shrink-0">
          <ProjectsPanel />
        </div>
      </motion.main>
    </div>
  );
}
