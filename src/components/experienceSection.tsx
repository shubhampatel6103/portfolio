"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Collapsible } from "@/components/ui/collapsible";
import { useState } from "react";

const experiences = [
  {
    period: "September 2025 — January 2026",
    title: "Data Engineer / Analyst",
    company: "AutoTrader",
    companyUrl: "https://www.autotrader.ca",
    location: "Toronto, ON",
    logoPath: "/experience/autotrader-logo.jpg",
    description:
      "Built and managed end-to-end data pipelines to enable analytics and improve business intelligence outcomes.",
    technologies: ["Python", "SQL", "Analytics"],
    details: [
      "Automated scalable data pipelines using Python and SQL to deliver analytics supporting key business decisions",
      "Processed and transformed large datasets to improve reliability of downstream reporting and performance tracking",
      "Developed data quality checks and validation logic, reducing inconsistencies across analytics outputs",
    ],
  },
  {
    period: "May 2025 — August 2025",
    title: "Undergraduate Research Assistant",
    company: "University of Waterloo",
    companyUrl: "https://uwaterloo.ca",
    logoPath: "/experience/waterloo-logo.jpg",
    location: "Waterloo, ON",
    description:
      "Engineered static analysis tools to identify and prevent compiler-level errors in Scala applications.",
    technologies: ["Scala", "Compiler Analysis", "DAG", "Testing"],
    details: [
      "Developed a Scala compiler analysis feature to detect and prevent global object initialization errors",
      "Designed test suites and debugged core compiler logic, improving robustness of static analysis workflows",
      "Applied graph-based reasoning (e.g., directed acyclic graphs) to ensure correctness and explainability of warnings",
    ],
  },
  {
    period: "January 2025 — April 2025",
    title: "Software Developer",
    company: "Village Wellth",
    companyUrl: "https://www.villagewellth.com",
    logoPath: "/experience/village-wellth-logo.jpg",
    location: "Calgary, AB (Remote)",
    description:
      "Created intelligent financial modeling platform to streamline advisor operations and reduce manual calculation tasks.",
    technologies: [
      "Next.js",
      "TypeScript",
      "SQL",
      "Google Cloud",
      "Gemini API",
    ],
    details: [
      "Built and deployed financial modeling tools using Next.js, TypeScript, SQL, and Google Cloud",
      "Implemented valuation, forecasting, and capital budgeting features, reducing advisor workload by 70%+",
      "Integrated an AI document extraction assistant using Gemini API and Cloud Functions to automate calculations",
      "Designed scalable backend workflows and database structures to support secure client financial data and real-time tool usage",
    ],
  },
  {
    period: "January 2024 — September 2024",
    title: "Software Developer",
    company: "KAT Innovation",
    companyUrl: "https://www.katinnovation.com",
    location: "Montreal, Quebec (Remote)",
    logoPath: "/experience/kat_innovation_logo.jpg",
    description:
      "Built healthcare mobile app with secure connectivity to medical devices and enterprise-grade data privacy features.",
    technologies: ["Dart", "Flutter", "Android Studio", "Figma", "Canva"],
    details: [
      "Researched technologies and tools to find the best solutions for developing an application connecting to KAT Innovation's device",
      "Designed and prototyped the application using Figma and Canva",
      "Implemented the application through Flutter (Dart) and Android Studio including UI/UX, back-end, user authentication, and other applicable features",
      "Architected security aspects of multi-tenancy and privacy of medical data on the app",
    ],
  },
  {
    period: "January 2024 — March 2024",
    title: "Cloud DevOps Engineer",
    company: "Knorket.AI",
    companyUrl: "https://knorket.ai",
    location: "Toronto, ON (Remote)",
    logoPath: "/experience/knorket-ai-logo.webp",
    description:
      "Designed Docker solutions for secure cloud infrastructure assessment and automated compliance monitoring.",
    technologies: ["Docker", "AWS", "Steampipe", "SQL", "DevOps"],
    details: [
      "Evaluated open-source security and DevOps pipeline tools to strengthen internal cloud workflows",
      "Developed a Docker-based integration with Steampipe to query client AWS resources using SQL",
      "Improved infrastructure visibility by enabling faster auditing of cloud configurations and compliance checks",
    ],
  },
  {
    period: "January 2023 — January 2024",
    title: "Web Developer / Project Manager",
    company: "KAT Innovation",
    companyUrl: "https://www.katinnovation.com",
    location: "Montreal, Quebec (Remote)",
    logoPath: "/experience/kat_innovation_logo.jpg",
    description:
      "Led web development team to build, improve, and deploy company website platform with quality oversight.",
    technologies: [
      "HTML",
      "PHP",
      "CSS",
      "Team Leadership",
      "Project Management",
    ],
    details: [
      "Managed a team of web developers to make modifications and add features to the existing website",
      "Coordinated website restructuring and UI/UX improvements across multiple pages and features",
      "Conducted code reviews and ensured adherence to coding standards and best practices",
      "Planned and prioritized development tasks, working with stakeholders to define project requirements",
      "Oversaw testing and deployment processes to ensure quality and stability of releases",
      "Mentored junior developers and facilitated knowledge sharing within the team",
    ],
  },
];

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
              <div className="sm:col-span-2 flex flex-col items-start gap-3">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {exp.period}
                </p>
                {exp.logoPath && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-700 shrink-0">
                    <Image
                      src={exp.logoPath}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
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
                  {exp.location && (
                    <p className="text-xs text-gray-500 mt-1">{exp.location}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <Collapsible
                  isOpen={expandedIndex === index}
                  onToggle={() => toggleExpanded(index)}
                >
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
