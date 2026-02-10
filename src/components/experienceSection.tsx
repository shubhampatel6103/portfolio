"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Collapsible } from "@/components/ui/collapsible";

const experiences = [
  {
    period: "2024 — Present",
    title: "Software Engineer",
    company: "Tech Corp",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    details: [
      "Led the migration of the design system to a component-based architecture, improving developer velocity by 40%",
      "Implemented accessible components following WCAG 2.1 guidelines",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    period: "Summer 2023",
    title: "Software Engineering Intern",
    company: "Startup Inc",
    companyUrl: "https://example.com",
    description:
      "Developed new features for the company's flagship product. Collaborated with the design team to implement responsive UI components.",
    technologies: ["JavaScript", "Vue.js", "Node.js", "PostgreSQL"],
    details: [
      "Built a real-time notification system serving 10,000+ users",
      "Optimized database queries reducing page load time by 60%",
      "Wrote comprehensive documentation for new API endpoints",
    ],
  },
  {
    period: "Summer 2022",
    title: "Research Assistant",
    company: "University Lab",
    companyUrl: "https://example.com",
    description:
      "Conducted research on machine learning applications in natural language processing. Assisted in publishing papers and presenting findings.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Jupyter"],
    details: [
      "Co-authored a paper on sentiment analysis published in ACL 2023",
      "Developed data preprocessing pipelines for large text corpora",
      "Presented research findings at departmental seminars",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full max-w-3xl px-16 py-16 scroll-mt-16 bg-black"
    >
      <h2 className="text-sm font-semibold tracking-widest text-teal-500 uppercase mb-8">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          return (
            <div
              key={index}
              className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="sm:col-span-2">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {exp.period}
                </p>
              </div>

              <div className="sm:col-span-6 space-y-3">
                <div>
                  <h3 className="font-medium leading-snug text-white">
                    {exp.title} ·{" "}
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="size-3" />
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <Collapsible>
                  <ul className="mt-2 space-y-1 text-sm text-gray-400 list-disc pl-4">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </Collapsible>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
