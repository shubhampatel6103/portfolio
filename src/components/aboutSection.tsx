"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const skills = [
    "React",
    "TypeScript",
    "UI/UX",
    "Accessibility",
    "Web Design",
  ];

  return (
    <section id="about" className="w-full max-w-3xl px-16 py-20 bg-black">
      <h2 className="text-cyan-500 dark:text-cyan-400 text-sm font-bold tracking-widest mb-8 uppercase">
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

        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors font-medium mt-4">
            <span>Read {isExpanded ? "less" : "more"} about me</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-6 mt-4">
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
            <div className="pt-4">
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
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
