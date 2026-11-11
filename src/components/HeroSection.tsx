"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Availability Status */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-rose-200/80 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 text-xs font-medium text-rose-800 dark:text-rose-200 mb-8 backdrop-blur-xs">
        <span className="flex h-1.5 w-1.5 rounded-full bg-rose-500" />
        <span>Available for senior engineering opportunities</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.08]">
        Building scalable distributed systems with precision & craft.
      </h1>

      {/* Subtitle / Value Proposition */}
      <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl px-4 leading-relaxed font-normal">
        Hi, I&apos;m <strong className="font-semibold text-slate-900 dark:text-slate-100">{personal.name}</strong> — {personal.headline} based in {personal.location}.
      </p>

      {/* Bio paragraph */}
      <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl px-4 leading-relaxed">
        {personal.bio}
      </p>

      {/* Actions */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="group px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-600 text-white font-medium text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <span>View Featured Projects</span>
          <ArrowDown className="w-4 h-4 text-slate-300 dark:text-white transition-transform group-hover:translate-y-0.5" />
        </a>

        <a
          href={personal.resumeUrl}
          className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-rose-500" />
          <span>Resume</span>
        </a>
      </div>

      {/* Social Icons Bar */}
      <div className="mt-10 flex items-center gap-4 text-slate-500 dark:text-slate-400">
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors p-2.5 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/40"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors p-2.5 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/40"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          href={personal.socials.email}
          className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors p-2.5 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/40"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
