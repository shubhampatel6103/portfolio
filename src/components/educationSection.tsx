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
      className="w-full max-w-3xl px-16 py-16 scroll-mt-16 bg-black"
    >
      <h2 className="text-sm font-semibold tracking-widest text-teal-500 uppercase mb-8">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="sm:col-span-2">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                {edu.period}
              </p>
            </div>

            <div className="sm:col-span-6 space-y-3">
              <div>
                <h3 className="font-medium leading-snug text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-gray-400 leading-relaxed">
                  {edu.specialization}
                </h4>
                <p className="text-sm text-teal-500 leading-relaxed">
                  {edu.school}
                </p>
              </div>

              <ul className="space-y-1 text-sm text-gray-400 list-disc pl-4">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="mt-4">
          <Collapsible header="AWARDS">
            <div className="space-y-4 mt-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="pb-3 border-b border-teal-700/30 last:border-b-0"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{award.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {award.description}
                      </p>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 whitespace-nowrap">
                      {award.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
