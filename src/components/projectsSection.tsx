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
      className="w-full max-w-3xl px-16 py-16 scroll-mt-16 bg-black"
    >
      <h2 className="text-sm font-semibold tracking-widest text-teal-500 uppercase mb-8">
        Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-3 sm:gap-8 lg:hover:opacity-100 lg:group-hover/list:opacity-50 items-start"
            >
              {/* Project Image/Video */}
              <div className="relative overflow-hidden rounded-lg bg-gray-800 sm:col-span-1 h-40 group">
                {project.videoUrl ? (
                  <>
                    <video
                      src={project.videoUrl}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                      muted
                      autoPlay
                      loop
                      onClick={() => setEnlargedVideoId(project.id)}
                    />
                  </>
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

              {/* Project Content */}
              <div className="sm:col-span-2 space-y-3">
                <div>
                  <h3 className="font-medium leading-snug text-white flex items-center gap-2">
                    {project.title}
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-400 transition-colors"
                    >
                      <ExternalLink className="size-4" />
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

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
          );
        })}
      </div>

      {/* Enlarged Video Modal */}
      {enlargedVideoId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
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
