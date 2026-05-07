"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

const photos = [
  "/frame/lilypad_lotus.png",
  "/frame/dragonfly.png",
  "/frame/tomato.png",
  "/frame/lilypad_forest.png",
  "/frame/strawberry.png",
  "/frame/fish.png",
  "/frame/lilypad_3.png",
];

const CARD_WIDTH = 76;
const CARD_HEIGHT = 56;

export default function Photos() {
  const [isHovered, setIsHovered] = useState(false);
  const spread = isHovered ? 56 : 24;

  return (
    <div
      className="relative flex h-32 w-full items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {photos.map((photo, index) => {
        const centerOffset = ((photos.length - 1) * spread) / 2;

        return (
          <motion.div
            key={photo}
            animate={{
              x: index * spread - centerOffset,
              y: isHovered ? 0 : Math.abs(index - 3) * 2,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute rounded-sm border-2 border-background bg-background shadow-[var(--shadow-lg)]"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              zIndex: index,
            }}
          >
            <Image
              src={photo}
              alt=""
              fill
              sizes={`${CARD_WIDTH}px`}
              className="object-cover"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
