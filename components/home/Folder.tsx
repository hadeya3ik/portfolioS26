"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

const projectCards = [
  { src: "/images/smile/Logo.png", alt: "Smile project preview" },
  { src: "/images/framesOnFrames.jpg", alt: "Frames on Frames project preview" },
  { src: "/images/GoviIpadd.png", alt: "Govi project preview" },
  { src: "/images/Loading.png", alt: "Loading project preview" },
];

export default function Folder() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isOpen}
      onClick={() => setIsOpen((current) => !current)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsOpen((current) => !current);
        }
      }}
      className="relative flex w-min items-center justify-center rounded-md"
    >
      <div className="relative flex h-28 w-26 cursor-pointer items-end justify-center">
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-32 w-64 -translate-x-1/2"
          aria-hidden="true"
        />

        <svg
          width="44"
          height="36"
          viewBox="0 0 44 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none relative z-0 h-20 w-22 shrink-0"
        >
          <path
            d="M9.74315 0H3C1.34315 0 0 1.34315 0 3V31.3369C0 33.5596 1.81207 35.356 4.03468 35.3368L40.0347 35.0246C42.2302 35.0056 44 33.2204 44 31.0248V6.03476C44 4.37791 42.6569 3.03476 41 3.03476H17.5594C16.6358 3.0426 15.2114 2.85974 13.9543 1.49724C13 0.463025 12.3394 0.000156737 10.9773 0H9.74315Z"
            fill="url(#folderBackGradient)"
          />
          <defs>
            <linearGradient
              id="folderBackGradient"
              x1="22"
              y1="0"
              x2="22"
              y2="35.3718"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2BBAFD" />
              <stop offset="1" stopColor="#2577F5" />
            </linearGradient>
          </defs>
        </svg>

        {projectCards.map((project, file) => {
          const closedOffsets = [
            { x: 16, y: 46, rotate: -3 },
            { x: 16, y: 48, rotate: -1 },
            { x: 16, y: 50, rotate: 2 },
            { x: 16, y: 48, rotate: 0 },
          ];

          const peekOffsets = [
            { x: 16, y: 36, rotate: -3 },
            { x: 16, y: 36, rotate: -1 },
            { x: 16, y: 36, rotate: 2 },
            { x: 16, y: 36, rotate: 0 },
          ];

          const openOffsets = [
            { x: -56, y: 0, rotate: -13 },
            { x: -18, y: -24, rotate: -4 },
            { x: 42, y: -24, rotate: 8 },
            { x: 90, y: 0, rotate: 14 },
          ];

          const target = isOpen
            ? openOffsets[file]
            : isHovered
              ? peekOffsets[file]
              : closedOffsets[file];

          return (
            <motion.div
              key={project.src}
              animate={target}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-18 overflow-hidden rounded-md border border-[#2a2a2a] bg-background/85 shadow-[var(--shadow-lg)] backdrop-blur-sm"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="72px"
                className="object-cover"
              />
            </motion.div>
          );
        })}

        <svg
          width="44"
          height="36"
          viewBox="0 0 44 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none relative z-20 -ml-22 h-20 w-22 shrink-0"
        >
          <path
            d="M0 8.13281C0 7.58053 0.447715 7.13281 1 7.13281H43C43.5523 7.13281 44 7.58053 44 8.13281V31.3721C44 33.5812 42.2091 35.3721 40 35.3721H4C1.79086 35.3721 0 33.5812 0 31.3721V8.13281Z"
            fill="url(#folderFrontGradient)"
          />
          <defs>
            <linearGradient
              id="folderFrontGradient"
              x1="22.577"
              y1="7.13281"
              x2="22.577"
              y2="35.3721"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2BBAFD" />
              <stop offset="1" stopColor="#2577F5" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 10,
            scale: isOpen ? 1 : 0.96,
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-30 pb-6"
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <Link
            href="/projects"
            onClick={(event) => event.stopPropagation()}
            className="group relative flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-nav px-3 py-1 text-xs font-medium text-[#717171] shadow-[var(--shadow-sm)] transition hover:text-[#000000]"
          >
            {/* <motion.span
              className="absolute inset-1 rounded-full bg-background shadow-[var(--shadow-xs)]"
              initial={{ scale: 0.72, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            /> */}
            <span className="relative z-10">View</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}