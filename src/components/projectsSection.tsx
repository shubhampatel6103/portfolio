"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Bookmark, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const projects = [
  {
    id: "project-1",
    title: "Task Management App",
    description:
      "A full-stack task management application with real-time collaboration features, drag-and-drop interface, and team workspaces.",
    image: "https://via.placeholder.com/230x150?text=Task+Management",
    projectUrl: "https://example.com",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    details: [
      "Built with React and TypeScript for type-safe frontend development",
      "Real-time collaboration using WebSockets",
      "PostgreSQL database with Prisma ORM",
      "Responsive design with Tailwind CSS",
    ],
  },
  {
    id: "project-2",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with cart functionality, payment integration, and inventory management dashboard.",
    image: "https://via.placeholder.com/230x150?text=E-commerce",
    projectUrl: "https://example.com",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redis"],
    details: [
      "Payment processing with Stripe integration",
      "Real-time inventory tracking",
      "Admin dashboard for product management",
      "Redis caching for performance optimization",
    ],
  },
  {
    id: "project-3",
    title: "AI Writing Assistant",
    description:
      "A Chrome extension that uses AI to help users write better emails and documents with grammar suggestions and tone adjustments.",
    image: "https://via.placeholder.com/230x150?text=AI+Writing",
    projectUrl: "https://example.com",
    technologies: [
      "TypeScript",
      "OpenAI API",
      "Chrome Extensions API",
      "React",
    ],
    details: [
      "Chrome extension using Manifest V3",
      "Integration with OpenAI GPT API",
      "Real-time text analysis and suggestions",
      "Tone and style customization options",
    ],
  },
  {
    id: "project-4",
    title: "Portfolio Website Generator",
    description:
      "A tool that generates beautiful portfolio websites from a simple configuration file or JSON data.",
    image: "https://via.placeholder.com/230x150?text=Portfolio",
    projectUrl: "https://example.com",
    technologies: ["Python", "Jinja2", "GitHub Actions", "Netlify"],
    details: [
      "CLI tool for generating static portfolio sites",
      "Support for custom themes and layouts",
      "Automated deployment with GitHub Actions",
      "SEO optimized output",
    ],
  },
];

export default function ProjectsSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section
      id="projects"
      className="w-full max-w-3xl px-16 py-16 scroll-mt-16 bg-black"
    >
      <h2 className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-8">
        Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project) => {
          const isOpen = openItems.includes(project.id);

          return (
            <Collapsible
              key={project.id}
              open={isOpen}
              onOpenChange={() => toggleItem(project.id)}
            >
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-3 sm:gap-8 lg:hover:opacity-100 lg:group-hover/list:opacity-50 items-start">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg bg-gray-800 sm:col-span-1 h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="sm:col-span-2 space-y-3">
                  <div>
                    <h3 className="font-medium leading-snug text-white flex items-center gap-2">
                      {project.title}
                      <Link
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="size-4" />
                      </Link>
                      <button className="text-gray-400 hover:text-cyan-500 transition-colors">
                        <Bookmark className="size-4" />
                      </button>
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <CollapsibleTrigger className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-500 transition-colors cursor-pointer">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-1000 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isOpen
                      ? "Hide technical details"
                      : "View technical details"}
                  </CollapsibleTrigger>

                  <CollapsibleContent className="space-y-2">
                    <ul className="mt-2 space-y-1 text-sm text-gray-400 list-disc pl-4">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </CollapsibleContent>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech) => (
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
            </Collapsible>
          );
        })}
      </div>
    </section>
  );
}
