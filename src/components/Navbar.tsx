"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certs", href: "#certifications" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme, petalsEnabled, togglePetals } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-pink-100 dark:border-pink-950/40 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group text-slate-800 dark:text-slate-100 font-semibold text-lg tracking-tight"
        >
          <span className="inline-block text-pink-400 group-hover:rotate-12 transition-transform duration-300 text-xl">
            🌸
          </span>
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-rose-400 transition-colors">
            Alex Rivera
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Control Buttons (Theme + Petals) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Petal animation toggle */}
          <button
            onClick={togglePetals}
            title={petalsEnabled ? "Disable blossom petals" : "Enable blossom petals"}
            className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
              petalsEnabled
                ? "bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
            }`}
            aria-label="Toggle cherry blossom petals animation"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Petals</span>
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-pink-100 dark:border-pink-950 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">Blossom Animation</span>
            <button
              onClick={togglePetals}
              className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${
                petalsEnabled
                  ? "bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300"
                  : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {petalsEnabled ? "Enabled" : "Disabled"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
