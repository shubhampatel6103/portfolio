"use client";

import { Collapsible } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const skills = [
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Scala",
    "Java",
    "Dart",
    "React",
    "Next.js",
    "Django",
    "TailwindCSS",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "AI/ML models",
    "Feature Engineering",
    "Data Analysis",
    "Google Cloud Platform",
    "AWS",
    "Docker",
    "Firebase",
    "Vercel",
    "CI/CD Pipelines",
    "Git/GitHub",
    "Linux",
    "Web Scraping",
    "UI/UX",
    "Accessibility",
    "Web Design",
  ];

  return (
    <section id="about" className="w-full max-w-3xl px-16 py-20 bg-black">
      <h2 className="text-teal-500 dark:text-teal-500 text-sm font-bold tracking-widest mb-8 uppercase">
        About
      </h2>

      <div className="space-y-6 text-zinc-400 dark:text-zinc-400 leading-8">
        <p>
          I love building projects that have a positive impact on people's
          lives. My side projects have mostly been focused on implementing
          something that I or someone can use on a daily basis, such as to learn
          something or to solve a problem.
        </p>

        <p>
          I enjoy the thrill of learning and applying them to solve challenges.
          Apart from technolgy, I am deeply interested in sports/outdoor
          activities, reading books, and sketching. From time to time, I learn
          new skills or topics like languages such as French and ASL, cooking,
          history etc.
        </p>

        <div className="pt-2">
          <p className="text-sm font-semibold text-white mb-3">
            Core Skills & Interests
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
