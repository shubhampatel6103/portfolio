"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const totalExperiences = experiences.length;

  const scrollToIndex = (
    index: number,
    behavior: ScrollBehavior = "smooth",
  ) => {
    const normalizedIndex = (index + totalExperiences) % totalExperiences;
    const target = cardRefs.current[normalizedIndex];

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior,
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(normalizedIndex);
  };

  const previousExperience = () => {
    scrollToIndex(activeIndex - 1);
  };

  const nextExperience = () => {
    scrollToIndex(activeIndex + 1);
  };

  useEffect(() => {
    scrollToIndex(activeIndex, "auto");
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    let rafId = 0;

    const syncActiveIndexFromScroll = () => {
      const viewportCenter = carousel.scrollLeft + carousel.clientWidth / 2;
      let nearestIndex = activeIndex;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      if (nearestIndex !== activeIndex) {
        setActiveIndex(nearestIndex);
      }
    };

    const onScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(syncActiveIndexFromScroll);
    };

    carousel.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      carousel.removeEventListener("scroll", onScroll);
    };
  }, [activeIndex]);

  return (
    <section
      id="experience"
      className="portfolio-section flex items-center px-6 py-10 md:px-12"
    >
      <div className="motion-fade-up mx-auto w-full max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase">
            Experience
          </h2>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={previousExperience}
              className="rounded-full border border-slate-600 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
              aria-label="Previous experience"
            >
              <ChevronLeft className="size-4" />
            </button>
            <span className="w-16 text-center">
              {activeIndex + 1} / {totalExperiences}
            </span>
            <button
              onClick={nextExperience}
              className="rounded-full border border-slate-600 p-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
              aria-label="Next experience"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          className="perspective-[1000px]"
          aria-label="Experience carousel"
          role="region"
        >
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-3 py-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          >
            {experiences.map((experience, index) => {
              const distance = index - activeIndex;
              const clampedDistance = Math.max(-2, Math.min(2, distance));
              const rotateY = clampedDistance * -14;
              const scale =
                distance === 0 ? 1 : Math.abs(distance) === 1 ? 0.89 : 0.8;
              const opacity =
                distance === 0 ? 1 : Math.abs(distance) === 1 ? 0.58 : 0.32;

              return (
                <article
                  key={experience.title + experience.period}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="motion-fade snap-center shrink-0 w-[93%] md:w-[84%] lg:w-[78%] rounded-2xl border border-slate-700/70 bg-[rgba(16,23,38,0.82)] p-6 sm:p-7 transition-[transform,opacity,border-color] duration-500"
                  style={{
                    opacity,
                    transform: `translateZ(${distance === 0 ? 0 : -64}px) rotateY(${rotateY}deg) scale(${scale})`,
                    borderColor:
                      distance === 0
                        ? "rgba(103, 232, 249, 0.45)"
                        : "rgba(51, 65, 85, 0.7)",
                  }}
                  onClick={() => scrollToIndex(index)}
                >
                  <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                    <div className="space-y-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {experience.period}
                      </p>
                      {experience.logoPath && (
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-700">
                          <Image
                            src={experience.logoPath}
                            alt={`${experience.company} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      {experience.location && (
                        <p className="text-sm text-slate-400">
                          {experience.location}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium leading-snug text-white">
                          {experience.title} ·{" "}
                          <Link
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-cyan-300 hover:underline"
                          >
                            {experience.company}
                            <ExternalLink className="size-3" />
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                          {experience.description}
                        </p>
                      </div>

                      <ul className="hidden list-disc space-y-1 pl-4 text-sm text-slate-300 md:block">
                        {experience.details
                          .slice(0, 4)
                          .map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
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
                </article>
              );
            })}
          </div>

          <div className="mt-3 hidden flex-wrap justify-center gap-2 px-3 md:flex">
            {experiences.map((experience, index) => (
              <button
                key={experience.title + experience.period}
                onClick={() => scrollToIndex(index)}
                className={`rounded-full px-3 py-1 text-xs transition-all duration-300 hover:-translate-y-0.5 ${
                  index === activeIndex
                    ? "bg-cyan-300/20 text-cyan-200"
                    : "bg-slate-700/40 text-slate-300 hover:bg-slate-600/50"
                }`}
              >
                {experience.company}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
