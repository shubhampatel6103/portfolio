"use client";

import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "project-1",
    title: "Mac-a-park",
    description:
      "Mac-A-Park is a real-time smart parking detection system that leverages existing CCTV cameras and computer vision to detect parking slot occupancy. It provides a low-cost, scalable solution for urban areas and large parking facilities, reducing traffic congestion, emissions, and driver frustration.",
    videoUrl: "/projects/mac-a-park-demo.mp4",
    projectUrl: "https://github.com/Yatriba-Rathod/Mac-a-thon-2026",
    technologies: [
      "OpenCV",
      "FastAPI",
      "Google Firebase",
      "MongoDB",
      "NumPy",
      "Python",
      "Render.com",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: null,
  },
  {
    id: "project-2",
    title: "Morse Code Tutor",
    description:
      "Learn morse code letter by letter, practice transmitting as well as receiving morse code. Try the website to learn more.",
    image: "/projects/morse-code.png",
    video: null,
    projectUrl: "https://morse-code-tutor.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export default function ProjectsSection() {
  const [enlargedVideoId, setEnlargedVideoId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="portfolio-section flex items-center px-6 py-10 md:px-12"
    >
      <div className="motion-fade-up mx-auto w-full max-w-5xl">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase mb-7">
          Projects
        </h2>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            return (
              <article
                key={project.id}
                className="rounded-xl border border-slate-700/70 bg-[rgba(16,23,38,0.75)] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 sm:p-5"
              >
                <div className="relative overflow-hidden rounded-lg bg-slate-800 h-40 group">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                      muted
                      autoPlay
                      loop
                      onClick={() => setEnlargedVideoId(project.id)}
                    />
                  ) : (
                    <Image
                      width={300}
                      height={200}
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>

                <div className="mt-4 space-y-3">
                  <h3 className="font-medium leading-snug text-white flex items-center gap-2">
                    {project.title}
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <ExternalLink className="size-4" />
                    </Link>
                  </h3>
                  <p className="max-h-24 overflow-hidden text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 8).map((tech) => (
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
              </article>
            );
          })}
        </div>
      </div>

      {/* Enlarged Video Modal */}
      {enlargedVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 motion-fade"
          onClick={() => setEnlargedVideoId(null)}
        >
          <div
            className="relative w-11/12 h-5/6 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEnlargedVideoId(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="size-8" />
            </button>
            <video
              src={projects.find((p) => p.id === enlargedVideoId)?.videoUrl}
              className="w-full h-full object-contain"
              muted
              autoPlay
              loop
            />
          </div>
        </div>
      )}
    </section>
  );
}
