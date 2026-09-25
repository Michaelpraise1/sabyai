"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Platform",
    dropdown: ["AI Workflows", "Command Layer", "Analytics", "Integrations"],
  },
  {
    label: "Solutions",
    dropdown: ["Finance & Compliance", "Field Operations", "Healthcare", "Education", "Logistics"],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
  { label: "Enterprise", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`navbar-glass rounded-full w-full max-w-5xl flex items-center justify-between px-4 h-14 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8C3 5.24 5.24 3 8 3s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" fill="white" />
              <circle cx="8" cy="8" r="2" fill="black" />
            </svg>
          </div>
          <span className="font-bold text-base text-black tracking-tight">Saby</span>
          <span className="text-[10px] font-semibold bg-black text-white px-1.5 py-0.5 rounded-full">AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href || "#"}
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-black rounded-full hover:bg-black/5 transition-all duration-150"
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    className="w-3.5 h-3.5 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {link.dropdown && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-black/5 p-2 z-50">
                  {link.dropdown.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black rounded-full hover:bg-black/5 transition-all duration-150"
          >
            Sign in
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-semibold bg-black text-white rounded-full hover:bg-gray-900 transition-all duration-150 shadow-sm"
          >
            Request demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-black/5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-black/5 p-6 md:hidden z-50">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href || "#"}
                className="flex items-center justify-between py-3 text-base font-medium text-gray-800 hover:text-black border-b border-gray-100 last:border-0"
              >
                {link.label}
              </a>
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <a
              href="#"
              className="text-center py-3 text-sm font-medium text-gray-700 hover:text-black rounded-full border border-gray-200 hover:bg-gray-50 transition"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-center py-3 text-sm font-semibold bg-black text-white rounded-full hover:bg-gray-900 transition"
            >
              Request demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
