"use client";

import { Collapsible } from "@/components/ui/collapsible";

const education = [
  {
    degree: "Bachelor of Computer Science",
    specialization: "Artificial Intelligence",
    school: "University of Waterloo",
    period: "2022 — 2027",
    details: [
      "GPA: 3.9/4.0",
      "Relevant Courses: Data Structures, Algorithms, Machine Learning, Object-oriented Programming",
    ],
  },
  {
    degree: "Bachelor of Business Administration",
    specialization: "Finance",
    school: "Wilfrid Laurier University",
    period: "2022 — 2027",
    details: [
      "GPA: 3.9/4.0",
      "Part of the Laurier Student Investment Fund (LSIF) where I analyze and manage a portfolio of stocks",
      "Relevant Courses: Finance basics, Equity analysis, Derivatives markets",
    ],
  },
];

const awards = [
  {
    name: "President's Gold Scholarship",
    year: "2022 — 2025",
    description:
      "Wilfrid Laurier University - Cumulative GPA 10.5+ and 95%+ high school average",
  },
  {
    name: "Gold Award Highest Academic Standing",
    year: "2022",
    description: "Preston High School - Highest academic standing",
  },
  {
    name: "Nicolls Award",
    year: "2022",
    description: "Preston High School - Excellence in mathematics and physics",
  },
  {
    name: "Principal's Award",
    year: "2022",
    description:
      "Preston High School - Contributions to school development with respect of staff and students",
  },
  {
    name: "The Robin Armstrong Scholarship",
    year: "2022",
    description: "Preston High School - Academic excellence",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="portfolio-section flex items-center px-6 py-10 md:px-12"
    >
      <div className="motion-fade-up mx-auto w-full max-w-5xl">
        <h2 className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Education
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            {education.map((edu, index) => (
              <article
                key={index}
                className="rounded-xl border border-slate-700/70 bg-[rgba(16,23,38,0.75)] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {edu.period}
                </p>
                <h3 className="mt-2 font-medium leading-snug text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-sm leading-relaxed text-slate-300">
                  {edu.specialization}
                </h4>
                <p className="text-sm leading-relaxed text-cyan-300">
                  {edu.school}
                </p>

                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-300">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="rounded-xl border border-slate-700/70 bg-[rgba(16,23,38,0.75)] p-5 transition-transform duration-300 hover:-translate-y-1">
            <div className="lg:hidden">
              <Collapsible header="Awards" defaultOpen>
                <div className="mt-4 max-h-[43vh] space-y-3 overflow-y-auto pr-2">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      className="border-b border-cyan-400/15 pb-3 last:border-b-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-medium text-white">
                            {award.name}
                          </h3>
                          <p className="mt-1 text-sm text-slate-300">
                            {award.description}
                          </p>
                        </div>
                        <p className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-slate-400">
                          {award.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Collapsible>
            </div>

            <div className="hidden lg:block">
              <h3 className="border-b border-cyan-400/15 pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Awards
              </h3>
              <div className="mt-4 space-y-3 pr-2">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="border-b border-cyan-400/15 pb-3 last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{award.name}</h3>
                        <p className="mt-1 text-sm text-slate-300">
                          {award.description}
                        </p>
                      </div>
                      <p className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-slate-400">
                        {award.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
