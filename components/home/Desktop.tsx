"use client";

import Folder from "./Folder";
import Link from "next/link";
import { motion } from "motion/react";

function ResumePdf() {
  return (
    <Link
      href="/resume"
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-24 flex-col items-center gap-2 text-center text-foreground outline-none transition-colors duration-300 hover:text-secondary"
    >
      <motion.div
        initial={{ rotate: -3, y: 0 }}
        whileHover={{ rotate: 0, y: -6 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-20 w-16 rounded-md bg-[#ffffff] shadow-[var(--shadow-sm)] will-change-transform"
      >
        <div className="absolute left-2 top-4 h-1.5 w-10 rounded-full bg-zinc-300" />
        <div className="absolute left-2 top-7 h-1.5 w-12 rounded-full bg-zinc-300" />
        <div className="absolute left-2 top-9 h-1.5 w-11 rounded-full bg-zinc-300" />
        <div className="absolute bottom-2 right-2 h-5 w-8 rounded border border-border">
          <div className="mx-auto mt-1 h-2 w-5 rounded-full border-b border-zinc-300" />
        </div>
      </motion.div>
      <span className="max-w-full truncate pt-2 text-sm font-normal">
        Resume.pdf
      </span>
    </Link>
  );
}

export default function Desktop() {
  return (
    <div className="w-full flex items-center justify-center ">
    <div className="flex w-fit items-end justify-center gap-4 py-1 ">
      <ResumePdf />
      <div className="group flex flex-col items-center gap-1 text-center text-foreground transition-colors duration-300 hover:text-secondary">
        <Folder />
        <span className="max-w-full truncate pt-2 text-sm font-normal">
          Projects
        </span>
      </div>
    </div>
    </div>
  );
}
