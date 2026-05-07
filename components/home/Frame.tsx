"use client";
 
import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { type CSSProperties } from "react";
import { motion } from "motion/react";
 
const frameItems = [
  {
    src: "/frame/lilypad_lotus.png",
    alt: "Water lily on lily pad",
    style: { left: "6%", top: "6%", width: "17%" },
  },
  {
    src: "/frame/blueberry.png",
    alt: "Blueberry",
    style: { left: "25%", top: "20%", width: "6%" },
  },
  {
    src: "/frame/dragonfly.png",
    alt: "Dragonfly",
    style: { left: "45%", top: "25%", width: "12%" },
  },
  {
    src: "/frame/tomato.png",
    alt: "Tomato",
    style: { right: "20%", top: "5%", width: "15%" },
  },
  {
    src: "/frame/lilypad.png",
    alt: "Small lily pad",
    style: { right: "23%", top: "27%", width: "8%" },
  },
  {
    src: "/frame/lilypad_neon.png",
    alt: "Lily pad",
    style: { right: "6%", top: "15%", width: "15%" },
  },
  {
    src: "/frame/lilypad_forest.png",
    alt: "Green lily pad",
    style: { left: "7%", bottom: "21%", width: "17%" },
  },
  {
    src: "/frame/button_pink.png",
    alt: "Pink button",
    style: { left: "17%", bottom: "8%", width: "6%" },
  },
  {
    src: "/frame/strawberry.png",
    alt: "Strawberry",
    style: { left: "27%", bottom: "16%", width: "10%" },
  },
  {
    src: "/frame/flower.png",
    alt: "Blue flower",
    style: { left: "46%", bottom: "4%", width: "9%" },
  },
  {
    src: "/frame/fish.png",
    alt: "Fish",
    style: { left: "54%", bottom: "24%", width: "11%" },
  },
  {
    src: "/frame/lilypad_3.png",
    alt: "Lily pads with lotus",
    style: { right: "4%", bottom: "5%", width: "22%" },
  },
];

function Frame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
 
  // Deselect on clicking the container background
  const handleContainerMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === containerRef.current) setSelectedIdx(null);
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);
 
  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-80 w-full flex-1 overflow-hidden rounded-md bg-widget"
      onMouseDown={handleContainerMouseDown}
    >
      <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-md font-[550] tracking-tighter text-foreground sm:text-lg md:text-xl">
        Hadeya Ikram
      </h1>
 
      {frameItems.map((item, i) => (
        <DraggableFrameImage
          key={item.src}
          src={item.src}
          alt={item.alt}
          initialStyle={item.style}
          containerRef={containerRef as React.RefObject<HTMLDivElement>}
          containerSize={containerSize}
          itemIndex={i}
          isSelected={selectedIdx === i}
          onSelect={() => setSelectedIdx(i)}
        />
      ))}
    </div>
  );
}
 
// Parse a clamp() or plain px/% value to a pixel number given a container width
function parseWidth(
  value: string,
  containerWidth: number,
  containerHeight: number
): number {
  const responsiveBasis = Math.min(containerWidth, containerHeight * (4 / 3));
  const clampMatch = value.match(/clamp\(([^,]+),([^,]+),([^)]+)\)/);
  if (clampMatch) {
    const min = parseFloat(clampMatch[1]);
    const preferred = clampMatch[2].trim();
    const max = parseFloat(clampMatch[3]);
    let preferred_px = 0;
    if (preferred.endsWith("vw")) {
      preferred_px = (parseFloat(preferred) / 100) * responsiveBasis;
    } else {
      preferred_px = parseFloat(preferred);
    }
    return Math.min(Math.max(min, preferred_px), max);
  }
  if (value.endsWith("px")) return parseFloat(value);
  if (value.endsWith("%")) return (parseFloat(value) / 100) * responsiveBasis;
  return parseFloat(value) || 100;
}
 
// Convert style (left/right/top/bottom) to pixel x,y from top-left
function resolvePosition(
  style: CSSProperties,
  containerWidth: number,
  containerHeight: number,
  width: number,
  height: number
): { x: number; y: number } {
  let x = 0,
    y = 0;
  if (style.left !== undefined) {
    const v = String(style.left);
    x = v.endsWith("%")
      ? (parseFloat(v) / 100) * containerWidth
      : parseFloat(v);
  } else if (style.right !== undefined) {
    const v = String(style.right);
    const right = v.endsWith("%")
      ? (parseFloat(v) / 100) * containerWidth
      : parseFloat(v);
    x = containerWidth - right - width;
  }
  if (style.top !== undefined) {
    const v = String(style.top);
    y = v.endsWith("%")
      ? (parseFloat(v) / 100) * containerHeight
      : parseFloat(v);
  } else if (style.bottom !== undefined) {
    const v = String(style.bottom);
    const bottom = v.endsWith("%")
      ? (parseFloat(v) / 100) * containerHeight
      : parseFloat(v);
    y = containerHeight - bottom - height;
  }
  return { x, y };
}
 
type Corner = "nw" | "ne" | "se" | "sw";
 
const HANDLE_SIZE = 8;
const MIN_SIZE = 20;
 
function DraggableFrameImage({
  src,
  alt,
  initialStyle,
  containerRef,
  containerSize,
  itemIndex,
  isSelected,
  onSelect,
}: {
  src: string;
  alt: string;
  initialStyle: CSSProperties;
  containerRef: React.RefObject<HTMLDivElement>;
  containerSize: { width: number; height: number };
  itemIndex: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [naturalAspect, setNaturalAspect] = useState(1);
  const aspectRatio = useRef(1);
  const hasUserEdited = useRef(false);
  const previousContainerSize = useRef<{ width: number; height: number } | null>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
 
  useEffect(() => {
    if (!containerSize.width || !containerSize.height) {
      return;
    }

    if (hasUserEdited.current) {
      const previous = previousContainerSize.current;

      if (
        previous &&
        previous.width &&
        previous.height &&
        (previous.width !== containerSize.width ||
          previous.height !== containerSize.height)
      ) {
        const previousBasis = Math.min(previous.width, previous.height * (4 / 3));
        const currentBasis = Math.min(
          containerSize.width,
          containerSize.height * (4 / 3)
        );
        const widthScale = containerSize.width / previous.width;
        const heightScale = containerSize.height / previous.height;
        const sizeScale = currentBasis / previousBasis;

        setPos((current) =>
          current
            ? {
                x: current.x * widthScale,
                y: current.y * heightScale,
              }
            : current
        );
        setSize((current) =>
          current
            ? {
                w: current.w * sizeScale,
                h: current.h * sizeScale,
              }
            : current
        );
      }

      previousContainerSize.current = containerSize;
      return;
    }

    const w = parseWidth(
      String(initialStyle.width ?? "100px"),
      containerSize.width,
      containerSize.height
    );
    const h = w * naturalAspect;
    const { x, y } = resolvePosition(
      initialStyle,
      containerSize.width,
      containerSize.height,
      w,
      h
    );
    setPos({ x, y });
    setSize({ w, h });
    previousContainerSize.current = containerSize;
  }, [containerSize, initialStyle, naturalAspect]);
 
  // Update height after image loads
  const handleImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      const aspect = img.naturalHeight / img.naturalWidth;
      aspectRatio.current = aspect;
      setNaturalAspect(aspect);
    },
    []
  );
 
  // --- DRAG ---
  const dragStart = useRef<{ mx: number; my: number; x: number; y: number } | null>(null);
 
  const onDragMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).dataset.handle) return; // let handles handle
      e.preventDefault();
      onSelect();
      if (!pos) return;
      hasUserEdited.current = true;
      previousContainerSize.current = containerSize;
      dragStart.current = { mx: e.clientX, my: e.clientY, x: pos.x, y: pos.y };
      setIsDragging(true);
 
      const onMove = (ev: MouseEvent) => {
        if (!dragStart.current || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const dx = ev.clientX - dragStart.current.mx;
        const dy = ev.clientY - dragStart.current.my;
        setPos({
          x: Math.max(0, Math.min(dragStart.current.x + dx, containerRect.width - (size?.w ?? 0))),
          y: Math.max(0, Math.min(dragStart.current.y + dy, containerRect.height - (size?.h ?? 0))),
        });
      };
      const onUp = () => {
        dragStart.current = null;
        setIsDragging(false);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [pos, size, containerRef, containerSize, onSelect]
  );
 
  // --- RESIZE ---
  const onResizeMouseDown = useCallback(
    (e: React.MouseEvent, corner: Corner) => {
      e.preventDefault();
      e.stopPropagation();
      onSelect();
      if (!pos || !size) return;
      hasUserEdited.current = true;
      previousContainerSize.current = containerSize;
 
      const startMx = e.clientX;
      const startMy = e.clientY;
      const startPos = { ...pos };
      const startSize = { ...size };
      const aspect = aspectRatio.current;
 
      const onMove = (ev: MouseEvent) => {
        const dx = ev.clientX - startMx;
        const dy = ev.clientY - startMy;
        const widthDelta = corner === "nw" || corner === "sw" ? -dx : dx;
        const heightDelta = corner === "nw" || corner === "ne" ? -dy : dy;
        const heightAsWidthDelta = heightDelta / aspect;
        const dominantDelta =
          Math.abs(widthDelta) > Math.abs(heightAsWidthDelta)
            ? widthDelta
            : heightAsWidthDelta;
        const newW = Math.max(MIN_SIZE, startSize.w + dominantDelta);
        const newH = newW * aspect;
        let newX = startPos.x;
        let newY = startPos.y;
 
        if (corner === "sw") {
          newX = startPos.x + (startSize.w - newW);
        } else if (corner === "ne") {
          newY = startPos.y + (startSize.h - newH);
        } else if (corner === "nw") {
          newX = startPos.x + (startSize.w - newW);
          newY = startPos.y + (startSize.h - newH);
        }
 
        setSize({ w: newW, h: newH });
        setPos({ x: newX, y: newY });
      };
 
      const onUp = () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [pos, size, containerSize, onSelect]
  );

  const onResizeHandleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      onResizeMouseDown(e, e.currentTarget.dataset.corner as Corner);
    },
    [onResizeMouseDown]
  );
 
  if (!pos || !size) return null;
 
  const corners: { id: Corner; cursor: string; x: number; y: number }[] = [
    { id: "nw", cursor: "nwse-resize", x: -HANDLE_SIZE / 2, y: -HANDLE_SIZE / 2 },
    { id: "ne", cursor: "nesw-resize", x: size.w - HANDLE_SIZE / 2, y: -HANDLE_SIZE / 2 },
    { id: "se", cursor: "nwse-resize", x: size.w - HANDLE_SIZE / 2, y: size.h - HANDLE_SIZE / 2 },
    { id: "sw", cursor: "nesw-resize", x: -HANDLE_SIZE / 2, y: size.h - HANDLE_SIZE / 2 },
  ];
 
  return (
    <motion.div
      ref={imgRef}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: 0.25 + itemIndex * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
        userSelect: "none",
        touchAction: "pan-y",
        zIndex: isSelected ? 20 : undefined,
      }}
      onMouseDown={onDragMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isDragging ? "cursor-move" : "cursor-default"}
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        draggable={false}
        onLoad={handleImageLoad}
        style={{ objectFit: "contain", pointerEvents: "none" }}
      />
 
      {/* Selection UI */}
      {(isHovered || isSelected) && (
        <>
          {/* Border */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "1.5px solid #1a73e8",
              borderRadius: 1,
              pointerEvents: "none",
            }}
          />
        </>
      )}
 
      {/* Corner resize handles */}
      {isSelected &&
        corners.map((c) => (
          <div
            key={c.id}
            data-corner={c.id}
            data-handle="resize"
            onMouseDown={onResizeHandleMouseDown}
            style={{
              position: "absolute",
              left: c.x,
              top: c.y,
              width: HANDLE_SIZE,
              height: HANDLE_SIZE,
              background: "#fff",
              border: "1.5px solid #1a73e8",
              borderRadius: 1,
              cursor: c.cursor,
              zIndex: 2,
              boxSizing: "border-box",
            }}
          />
        ))}
    </motion.div>
  );
}
 
export default Frame;
 
