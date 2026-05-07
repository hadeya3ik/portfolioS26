"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";
import About from "./home/About";
import Desktop from "./home/Desktop";
import Experience from "./home/Experience";
import FlowerLinks from "./home/FlowerLinks";
import Frame from "./home/Frame";
import Inventory from "./home/Inventory";
import { Footer } from "./footer";

type WidgetProps = {
  title?: string;
  className?: string;
  index: number;
  children?: ReactNode;
};

function Widget({ title, className = "", index, children }: WidgetProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 2,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`rounded-lg border border-border bg-widget shadow-[var(--shadow-xs)] ${className}`}
    >
      {title ? (
        <div className="inline-flex rounded-full bg-subtle px-2 py-1 text-xs font-medium uppercase text-foreground">
          {title}
        </div>
      ) : null}
      {children}
    </motion.section>
  );
}


export function HomePanel() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] w-screen shrink-0 flex-col justify-between">
      <section className="flex flex-1 items-center justify-center px-3 py-4 font-sans text-foreground sm:px-4 md:px-8 lg:px-24 lg:py-0">
        <div className="">
          <div className="flex flex-col gap-2 lg:flex-row">
          <div className="flex flex-col items-stretch gap-2 sm:flex-row">
            <div className="order-2 flex flex-1 flex-col gap-2 sm:order-1">
              <Widget title="Inventory" className="p-4" index={0}>
                <Inventory />
              </Widget>
              <Widget title="Desktop" className="p-4 " index={8}>
                <Desktop />
              </Widget>
            </div>
            <div className="order-1 flex flex-2 flex-col gap-2 sm:order-2">
              <Widget className="flex items-center p-4 justify-center" index={1}>
                <About />
              </Widget>
              <Widget className="flex min-h-80 flex-1 overflow-hidden" index={4}>
                <Frame />
              </Widget>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col lg:flex-col flex-1 gap-2  ">
            <Widget title="Experience" className="p-4 flex-1" index={2}>
              <Experience />
            </Widget>
            <Widget title="Links" className="p-4 flex-1 h-min" index={3}>
              <FlowerLinks />
            </Widget>
          </div>
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
}
