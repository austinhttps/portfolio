"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "Overview", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#certifications" },
  { label: "Writing", href: "#writing" },
  { label: "Skills", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme, petalsEnabled, togglePetals } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/New_York",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Center Dock */}
      <nav
        aria-label="Primary"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 dark:border-rose-950/60 shadow-2xl text-white max-w-[95vw] overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center gap-0.5 px-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-slate-900 bg-white font-semibold shadow-xs"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="h-4 w-px bg-slate-700/80 mx-1 shrink-0" />

        <div className="flex items-center gap-1 shrink-0 pr-1">
          {/* Petals toggle */}
          <button
            onClick={togglePetals}
            title={petalsEnabled ? "Disable blossom petals" : "Enable blossom petals"}
            className={`p-1.5 rounded-full text-xs transition-colors cursor-pointer ${
              petalsEnabled
                ? "text-rose-300 bg-rose-500/20"
                : "text-slate-400 hover:text-white"
            }`}
            aria-label="Toggle cherry blossom particles"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle color theme"
            className="p-1.5 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </nav>

      {/* Top Subtle Status Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-rose-100/60 dark:border-rose-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <a
            href="#"
            className="flex items-center gap-2 font-mono font-medium text-slate-900 dark:text-slate-100 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>github.com/{portfolioData.personal.handle}</span>
          </a>

          <div className="hidden sm:flex items-center gap-4 font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Cybersecurity @ Wake Tech</span>
            </span>
            {time && (
              <>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-slate-500 dark:text-slate-400">{time}</span>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
