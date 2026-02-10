"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigationLinks = ["About", "Experience", "Projects"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="flex justify-center">
        <nav className="w-full max-w-3xl px-6 sm:px-16 py-4 flex items-center justify-between">
          <div className="font-semibold text-white text-lg">Shubham Patel</div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-teal-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-gray-400 hover:text-teal-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden bg-black border-t border-gray-800">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl px-6 py-4 flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-teal-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
