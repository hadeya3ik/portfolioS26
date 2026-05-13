"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { type ReactNode } from "react";
import { Footer } from "./footer";

const heading = "text-xs font-[550]";
const subheading = "mt-1 text-base";
const ease = [0.22, 1, 0.36, 1] as const;

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: index * 0.06,
      ease,
    },
  }),
  hover: {
    y: -4,
    scale: 1.01,
    boxShadow: "var(--shadow-sm)",
    transition: {
      duration: 0.28,
      ease,
    },
  },
};

function ProjectCard({
  href,
  title,
  description,
  index,
  children,
}: {
  href: string;
  title: string;
  description: string;
  index: number;
  children: ReactNode;
}) {
  return (
    <motion.article
      custom={index}
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap={{ scale: 0.995 }}
      className="flex-1 rounded-lg border border-border bg-widget p-3 shadow-[var(--shadow-xs)] will-change-transform"
    >
      <Link
        href={href}
        className="block text-foreground outline-none transition-colors duration-300 hover:text-secondary"
      >
        <div className="aspect-video w-full cursor-pointer overflow-hidden rounded-md border border-border bg-subtle">
          {children}
        </div>
        <div className="pt-3">
          <h3 className={heading}>{title}</h3>
          <p className={subheading}>{description}</p>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectsPanel() {
  return (
    <section className="flex w-screen shrink-0 items-start justify-center px-3 pt-4 font-sans text-foreground sm:px-4 sm:pt-6 md:px-8 lg:px-24 lg:pt-8">
      <div className=" grid w-full max-w-5xl">
        <Projects/>
        <Footer />
      </div>
      
    </section>
  );
}

function Projects() {
  return (
    <main className="flex flex-col gap-3 py-4 pb-10 sm:py-6 sm:pb-12 lg:py-8 lg:pb-16">
      {/* <h1 className="text-4xl">Selected Works </h1>
      <hr className="mt-1"/> */}
      <div className="flex flex-col gap-3 md:flex-row">
        <ProjectCard
          href="/govi"
          title="Govi"
          description="Building a Smart Lighting Control System with Next.js"
          index={0}
        >
          <video
            className="h-full w-full origin-bottom scale-[1.05] object-cover"
            src="/videos/Govi.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </ProjectCard>
        <ProjectCard
          href="/history-of-tau"
          title="History of Tau Teaser"
          description="Designing a Narrative Web Experience for Warframes"
          index={1}
        >
          <Image
            src="/images/Loading.png"
            className="h-full w-full select-none object-cover"
            alt="Warframes April Fools Page Thumbnail"
            width={800}
            height={800}
          />
        </ProjectCard>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <ProjectCard
          href="/frames-on-frames"
          title="Frames on Frames"
          description="Launching an Experimental Campaign Page for Warframes"
          index={2}
        >
          <Image
            src="/images/framesOnFrames.jpg"
            className="h-full w-full select-none object-cover"
            alt="Warframes April Fools Page Thumbnail"
            width={800}
            height={800}
          />
        </ProjectCard>
        <ProjectCard
          href="/smile"
          title="Smile"
          description="Revamping a Student Led Brand for a Growing Community"
          index={3}
        >
          <video
            className="h-full w-full object-cover"
            src="/videos/smile.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </ProjectCard>
      </div>
    </main>
  )
}
