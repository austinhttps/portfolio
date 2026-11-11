"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Mail, FileText, Check, Copy, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function HeroSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Top Metadata Line (Adam Perlis / JLD2nd style) */}
      <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mb-8">
        <span className="text-rose-500 font-semibold">[00]</span>
        <span>INDEX & BIO</span>
        <span className="text-slate-300 dark:text-slate-700">/</span>
        <span>SEATTLE, WA</span>
      </div>

      {/* Main Identity & Statement */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
          {personal.name} — Full-Stack Engineer & Distributed Systems Architect.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {personal.bio} Currently building high-throughput infrastructure and crafting modern, fast user interfaces inspired by thoughtful engineering and Japanese minimalist design.
        </p>
      </div>

      {/* Interactive Command / Direct Reachout Bar (Adam Perlis terminal prompt + Akash Soti copy pill) */}
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          onClick={copyEmail}
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-200 hover:border-rose-300 dark:hover:border-rose-900 transition-all cursor-pointer shadow-xs"
        >
          <span className="text-rose-500 font-semibold">$</span>
          <span>alex.rivera@example.com</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500 ml-1" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 ml-1 transition-colors" />
          )}
        </button>

        <a
          href={personal.resumeUrl}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-200 hover:border-rose-300 dark:hover:border-rose-900 transition-all cursor-pointer shadow-xs"
        >
          <FileText className="w-3.5 h-3.5 text-rose-500" />
          <span>resume.pdf</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </a>

        <div className="flex items-center gap-1.5 ml-auto">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
