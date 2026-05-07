"use client";

import Image from "next/image";
import { motion } from "motion/react";

function InlineIcon({
  src,
  alt,
  rotate,
}: {
  src: string;
  alt: string;
  rotate: number;
}) {
  return (
    <motion.span
      initial={{ rotate }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="mx-1.5 inline-flex size-7 align-middle drop-shadow-[var(--drop-shadow-sm)] will-change-transform"
    >
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        draggable="false"
        className="size-7"
      />
    </motion.span>
  );
}

function AboutContent() {
  return (
    <div className="flex items-center justify-center text-center text-md font-s leading-[1.7] tracking-normal text-foreground">
      <p>
        Building at the intersection of design
        <InlineIcon src="/icons/icon-design.svg" alt="" rotate={3} />
        and code
        <InlineIcon src="/icons/icon-code.svg" alt="" rotate={-3} />
        . Studying Computational Math 
        <InlineIcon src="/icons/icon-tie.svg" alt="" rotate={-6} />
        at the University of Waterloo
        <InlineIcon src="/icons/icon-goose.svg" alt="" rotate={4} />
      </p>
    </div>
  );
}

export default AboutContent
