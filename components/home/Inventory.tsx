"use client";

import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Runner,
} from "matter-js";
import { useEffect, useRef, useState } from "react";

const techIcons = [
  { src: "/icons/python.svg", radius: 24 },
  { src: "/icons/react.svg", radius: 28 },
  { src: "/icons/next.svg", radius: 24 },
  { src: "/icons/typescript.svg", radius: 24 },
  { src: "/icons/tailwind.svg", radius: 24 },
  { src: "/icons/figma.svg", radius: 28 },
  { src: "/icons/notion.svg", radius: 24 },
  { src: "/icons/jira.svg", radius: 24 },
  { src: "/icons/claude.svg", radius: 26 },
  { src: "/icons/codex.svg", radius: 24 },
];

type BallView = {
  id: number;
  x: number;
  y: number;
  radius: number;
  icon: string;
};

export default function Inventory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<Body[]>([]);
  const [balls, setBalls] = useState<BallView[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const engine = Engine.create();
    engine.gravity.y = 1.05;

    const runner = Runner.create();
    const mouse = Mouse.create(container);
    const matterMouse = mouse as Mouse & { mousewheel: EventListener };
    container.removeEventListener("wheel", matterMouse.mousewheel);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.18,
        render: { visible: false },
      },
    });

    let frame = 0;
    let walls: Body[] = [];

    function releaseDrag() {
      setIsDragging(false);
      mouse.button = -1;
      (mouseConstraint as unknown as { body: Body | null }).body = null;
      (mouseConstraint.constraint as unknown as { bodyB: Body | null }).bodyB =
        null;
      mouseConstraint.constraint.pointB = { x: 0, y: 0 };
    }

    function setWalls(width: number, height: number) {
      Composite.remove(engine.world, walls);

      const thickness = 80;
      walls = [
        Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, {
          isStatic: true,
        }),
        Bodies.rectangle(-thickness / 2, height / 2, thickness, height * 2, {
          isStatic: true,
        }),
        Bodies.rectangle(width + thickness / 2, height / 2, thickness, height * 2, {
          isStatic: true,
        }),
        Bodies.rectangle(width / 2, -thickness / 2, width, thickness, {
          isStatic: true,
        }),
      ];

      Composite.add(engine.world, walls);
    }

    function createBalls(width: number, height: number) {
      const nextBalls = techIcons.map((icon) => {
        return Bodies.circle(
          32 + Math.random() * Math.max(1, width - 64),
          Math.max(42, height * 0.25) + Math.random() * 40,
          icon.radius,
          {
            restitution: 0.72,
            friction: 0.04,
            frictionAir: 0.012,
            density: 0.002,
          },
        );
      });

      ballsRef.current = nextBalls;
      Composite.add(engine.world, nextBalls);
    }

    function syncViews() {
      setBalls(
        ballsRef.current.map((ball, index) => ({
          id: ball.id,
          x: ball.position.x,
          y: ball.position.y,
          radius: ball.circleRadius ?? 16,
          icon: techIcons[index % techIcons.length].src,
        })),
      );
      frame = requestAnimationFrame(syncViews);
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setWalls(width, height);

      if (ballsRef.current.length === 0) {
        createBalls(width, height);
      } else {
        ballsRef.current.forEach((ball) => {
          Body.setPosition(ball, {
            x: Math.min(Math.max(ball.position.x, ball.circleRadius ?? 16), width),
            y: Math.min(ball.position.y, height - (ball.circleRadius ?? 16)),
          });
        });
      }
    });

    const handleStartDrag = () => setIsDragging(true);
    const handleEndDrag = () => setIsDragging(false);

    resizeObserver.observe(container);
    Composite.add(engine.world, mouseConstraint);
    Events.on(mouseConstraint, "startdrag", handleStartDrag);
    Events.on(mouseConstraint, "enddrag", handleEndDrag);
    container.addEventListener("mouseup", releaseDrag);
    container.addEventListener("mouseleave", releaseDrag);
    container.addEventListener("touchend", releaseDrag);
    container.addEventListener("touchcancel", releaseDrag);
    window.addEventListener("pointerup", releaseDrag);
    window.addEventListener("blur", releaseDrag);
    Runner.run(runner, engine);
    frame = requestAnimationFrame(syncViews);

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("mouseup", releaseDrag);
      container.removeEventListener("mouseleave", releaseDrag);
      container.removeEventListener("touchend", releaseDrag);
      container.removeEventListener("touchcancel", releaseDrag);
      container.removeEventListener("wheel", matterMouse.mousewheel);
      window.removeEventListener("pointerup", releaseDrag);
      window.removeEventListener("blur", releaseDrag);
      Events.off(mouseConstraint, "startdrag", handleStartDrag);
      Events.off(mouseConstraint, "enddrag", handleEndDrag);
      resizeObserver.disconnect();
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative mt-4 h-60 overflow-hidden rounded-md touch-pan-y ${
        isDragging ? "cursor-grabbing" : "cursor-default"
      }`}
    >
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="absolute cursor-grab touch-pan-y select-none bg-contain bg-center bg-no-repeat active:cursor-grabbing"
          style={{
            width: ball.radius * 2,
            height: ball.radius * 2,
            backgroundImage: `url(${ball.icon})`,
            transform: `translate(${ball.x - ball.radius}px, ${
              ball.y - ball.radius
            }px)`,
          }}
        />
      ))}
    </div>
  );
}
