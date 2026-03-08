import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import TypingText from "@/components/typingText";

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

const roles = [
  "Software Engineer",
  "AI/ML Developer",
  "Finance Enthusiast",
  "Systems Architect",
  "Data Engineer",
  "Automation Developer",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="portfolio-section flex items-center px-6 pb-10 pt-20 md:px-12 md:pt-12"
    >
      <div className="motion-fade-up mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
        {/* Hero Content */}
        <div className="order-2 w-full space-y-6 sm:order-1">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Shubham Patel
            </h1>
            <TypingText
              words={roles}
              className="text-xl sm:text-2xl text-cyan-300 font-medium h-8"
              speed={50}
              delayBetweenWords={2000}
            />
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            I am a tech enthusiast with a passion for building accessible and
            performant systems to address real-world problems.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 sm:mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
                aria-label={social.alt}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative order-1 sm:order-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-[0_20px_60px_rgba(8,11,18,0.55)]">
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
    </section>
  );
}
