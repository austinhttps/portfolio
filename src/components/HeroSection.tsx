"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Mail, FileText, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";

export function HeroSection() {
  const { personal } = portfolioData;

  const handleConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#ffd1dc", "#f7c5cc", "#ffb7c5", "#ffffff"],
    });
  };

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background glow decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-pink-200/40 via-rose-100/30 to-transparent dark:from-pink-900/15 dark:via-rose-950/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Status Pill */}
      <div
        onClick={handleConfetti}
        className="cursor-pointer group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-200 dark:border-pink-900/60 bg-pink-50/80 dark:bg-pink-950/30 text-xs font-medium text-pink-700 dark:text-pink-300 mb-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-pink-300"
      >
        <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
        <span>Available for new engineering opportunities</span>
        <Sparkles className="w-3.5 h-3.5 text-pink-400 group-hover:rotate-45 transition-transform" />
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl">
        Building scalable systems with{" "}
        <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 bg-clip-text text-transparent underline decoration-pink-300/40 decoration-wavy">
          precision & harmony
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl px-4 leading-relaxed font-normal">
        Hi, I&apos;m <strong className="font-semibold text-slate-800 dark:text-slate-100">{personal.name}</strong>. {personal.headline} based in {personal.location}.
      </p>

      {/* Bio paragraph */}
      <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl px-4">
        {personal.bio}
      </p>

      {/* Primary Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-medium text-sm shadow-md hover:shadow-pink-500/20 shadow-pink-500/10 transition-all flex items-center gap-2"
        >
          Explore Projects
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>

        <a
          href={personal.resumeUrl}
          className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all flex items-center gap-2 backdrop-blur-xs"
        >
          <FileText className="w-4 h-4 text-pink-500" />
          View Resume
        </a>
      </div>

      {/* Social Icons Bar */}
      <div className="mt-10 flex items-center gap-5 text-slate-500 dark:text-slate-400">
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-950/30"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-950/30"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          href={personal.socials.email}
          className="hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-950/30"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
