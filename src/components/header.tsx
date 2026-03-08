"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const socialLinks = [
  {
    href: "https://github.com/shubhampatel6103",
    icon: <Github className="h-4 w-4" />,
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/shubham-patel-sbp6103/",
    icon: <Linkedin className="h-4 w-4" />,
    alt: "LinkedIn",
  },
  {
    href: "mailto:sbpatel@uwaterloo.ca",
    icon: <Mail className="h-4 w-4" />,
    alt: "Email",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    let rafId = 0;

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = section.id;
        }
      }

      setActiveSection(closestId);
    };

    const onScrollOrResize = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <>
      <aside className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-72 border-r border-white/10 bg-black/65 backdrop-blur-xl motion-fade-up">
        <div className="flex h-full w-full flex-col px-8 py-10">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">
              Portfolio
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Shubham Patel
            </h1>
          </div>

          <nav className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-300 hover:translate-x-1 ${
                  activeSection === link.id
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span
                  className={`h-px w-6 transition-all ${
                    activeSection === link.id
                      ? "w-10 bg-cyan-300"
                      : "bg-slate-600 group-hover:bg-slate-300"
                  }`}
                />
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-cyan-300"
                  aria-label={social.alt}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              © {currentYear} Shubham Patel
            </p>
          </div>
        </div>
      </aside>

      <button
        className="md:hidden fixed top-4 left-4 z-50 rounded-md border border-white/15 bg-black/70 p-2 text-slate-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm motion-fade">
          <div className="h-full w-72 border-r border-white/10 bg-black px-6 py-16 motion-fade-up">
            <div className="flex h-full flex-col">
              <nav className="flex flex-col gap-3">
                {navigationLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="rounded-md px-3 py-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:bg-cyan-400/10 hover:text-cyan-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.alt}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 transition-colors hover:text-cyan-300"
                      aria-label={social.alt}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  © {currentYear} Shubham Patel
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
