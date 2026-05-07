"use client";

import { motion } from "motion/react";

const links = [
  { label: "GitHub", href: "https://github.com/hadeya3ik", color: "#9fd8a7" },
  { label: "Dribbble", href: "https://dribbble.com/hdyik", color: "#f6a6c9" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hadeyaik/", color: "#9ec9ff" },
]

function Flower({
  label,
  href,
  color,
  index,
}: {
  label: string;
  href: string;
  color: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.96 }}
      className="group flex flex-col items-center gap-2 text-xs font-medium text-foreground outline-none transition-colors duration-300 hover:text-secondary"
    >
      <div className="relative h-18 w-18">
        {Array.from({ length: 8 }).map((_, petal) => (
          <motion.span
            key={petal}
            className="absolute left-1/2 top-1/2 h-7 w-4 origin-bottom rounded-full"
            style={{
              backgroundColor: color,
              rotate: `${petal * 45}deg`,
              translateX: "-50%",
              translateY: "-100%",
            }}
            animate={{ scaleY: [1, 1.08, 1] }}
            transition={{
              duration: 2.4,
              delay: petal * 0.04,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scaleY: 1.25 }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-widget shadow-[var(--shadow-inset-soft)]" />
      </div>
      <span>{label}</span>
    </motion.a>
  );
}

export default function FlowerLinks() {
  return (
    <div className="flex min-h-32 items-center justify-center gap-6">
      {links.map((link, index) => (
        <Flower key={link.label} {...link} index={index} />
      ))}
    </div>
  );
}
