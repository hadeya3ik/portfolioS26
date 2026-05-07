import Image from "next/image";

const experiences = [
  {
    company: "Verily",
    role: "Software Engineer",
    year: "2026",
    logo: "/work/verily_logo.jpg",
  },
  {
    company: "Digital Extremes",
    role: "Design Engineer",
    year: "2025",
    logo: "/work/digital_extremes_logo.jpg",
  },
  {
    company: "Government Of Ontario",
    role: "Technical Analyst",
    year: "2023",
    logo: "/work/ontario_ministry_of_transportation_logo.jpg",
  },
  {
    company: "University Of Waterloo",
    role: "Instructional Support Assistant",
    year: "2022",
    logo: "/work/uwaterloo_logo.jpg",
  },
];

export default function Experience() {
  return (
    <div className="space-y-6 py-6">
      {experiences.map((experience) => (
        <div
          key={experience.company}
          className="flex items-center gap-1"
        >
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={64}
            height={64}
            className="size-8 rounded-sm object-cover shadow-[var(--shadow-sm)]"
          />

          <div className="ml-1 min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold leading-tight text-foreground ">
              {experience.company}
            </h3>
            <p className="mt-1 truncate text-xs leading-tight text-foreground">
              {experience.role}
            </p>
          </div>

          {/* <p className="shrink-0 text-xs font-medium text-foreground">
            {experience.year}
          </p> */}
          
        </div>
      ))}
    </div>
  );
}
