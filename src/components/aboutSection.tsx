"use client";

import { Collapsible } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const skills = [
    "React",
    "TypeScript",
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
          I'm a software engineer passionate about crafting accessible,
          pixel-perfect user interfaces that blend thoughtful design with robust
          engineering. My favorite work lies at the intersection of design and
          development, creating experiences that not only look great but are
          meticulously built for performance and usability.
        </p>

        <p>
          Currently, I'm focused on building products that make a difference.
          I've had the opportunity to work across various settings—from{" "}
          <span className="font-semibold text-white">startups</span> to{" "}
          <span className="font-semibold text-white">research labs</span> to{" "}
          <span className="font-semibold text-white">
            established companies
          </span>
          .
        </p>

        <Collapsible>
          <div className="space-y-4">
            <p>
              Beyond coding, I'm deeply interested in user experience design,
              accessibility standards, and the latest web technologies. I
              believe that great software is a balance between innovation and
              pragmatism, always keeping the end user in mind.
            </p>

            <p>
              When I'm not building digital experiences, you can find me
              exploring new design patterns, contributing to open source
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-2">
              <p className="text-sm font-semibold text-white mb-3">
                Core Skills & Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Collapsible>
      </div>
    </section>
  );
}
