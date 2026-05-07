"use client";

import Image from "next/image";

function InlineIcon({
  src,
  alt,
  rotate,
}: {
  src: string;
  alt: string;
  rotate: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      draggable="false"
      className={`mx-1.5 inline-block size-7 align-middle drop-shadow-[var(--drop-shadow-sm)] transition-transform duration-300 ease-out hover:rotate-0 ${rotate}`}
    />
  );
}

function AboutContent() {
  return (
    <div className="flex items-center justify-center text-center text-md font-s leading-[1.7] tracking-normal text-foreground">
      <p>
        Building at the intersection of design
        <InlineIcon src="/icons/icon-design.svg" alt="" rotate="rotate-3" />
        and code
        <InlineIcon src="/icons/icon-code.svg" alt="" rotate="-rotate-3" />
        . Studying Computational Math 
        <InlineIcon src="/icons/icon-tie.svg" alt="" rotate="-rotate-6" />
        at the University of Waterloo
        <InlineIcon src="/icons/icon-goose.svg" alt="" rotate="rotate-4" />
      </p>
    </div>
  );
}

export default AboutContent
