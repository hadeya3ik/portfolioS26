import Folder from "./Folder";
import Link from "next/link";

function ResumePdf() {
  return (
    <Link
      href="/resume"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex  w-24 flex-col items-center gap-2 text-center outline-none"
    >
      <div className="relative h-20 w-16 -rotate-3 rounded-md bg-[#ffffff] shadow-[var(--shadow-sm)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-1.5 group-hover:rotate-0">
        <div className="absolute left-2 top-4 h-1.5 w-10 rounded-full bg-zinc-300" />
        <div className="absolute left-2 top-7 h-1.5 w-12 rounded-full bg-zinc-300" />
        <div className="absolute left-2 top-9 h-1.5 w-11 rounded-full bg-zinc-300" />
        <div className="absolute bottom-2 right-2 h-5 w-8 rounded border border-border">
          <div className="mx-auto mt-1 h-2 w-5 rounded-full border-b border-zinc-300" />
        </div>
      </div>
      <span className="max-w-full truncate pt-2 text-sm font-normal text-foreground">
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
      <div className="flex flex-col items-center gap-1 text-center">
        <Folder />
        <span className="max-w-full truncate pt-2 text-sm font-normal text-foreground">
          Projects
        </span>
      </div>
    </div>
    </div>
  );
}
