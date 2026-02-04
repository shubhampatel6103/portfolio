import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/shubhampatel6103",
    icon: <Github className="w-5 h-5" />,
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/shubham-patel-sbp6103/",
    icon: <Linkedin className="w-5 h-5" />,
    alt: "LinkedIn",
  },
  {
    href: "mailto:sbpatel@uwaterloo.ca",
    icon: <Mail className="w-5 h-5" />,
    alt: "Email",
  },
];

const techStack = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

export default function HeroSection() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-center py-16 px-6 sm:px-16 bg-black pt-24 sm:pt-40">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Hero Content */}
        <div className="w-full space-y-6 order-2 sm:order-1">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Shubham Patel
            </h1>
            <h2 className="text-xl sm:text-2xl text-cyan-500 font-medium">
              Software Engineer
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
            I build accessible, pixel-perfect digital experiences for the web.
            Currently focused on creating polished products that blend
            thoughtful design with robust engineering.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 sm:mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
                aria-label={social.alt}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative order-1 sm:order-2">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
            <Image
              src="/Shubham.jpeg"
              alt="Shubham"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
