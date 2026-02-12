import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-gray-800 py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4">
        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition-colors"
              aria-label={social.alt}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {currentYear} Shubham Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
