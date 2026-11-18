"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { FileText, Check, Copy, ArrowUpRight, Shield } from "lucide-react";
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
      {/* Top Metadata Line */}
      <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mb-8">
        <span className="text-rose-500 font-semibold">[00]</span>
        <span>INDEX & BIO</span>
        <span className="text-slate-300 dark:text-slate-700">/</span>
        <span>RALEIGH, NC</span>
        <span className="text-slate-300 dark:text-slate-700">/</span>
        <span className="text-rose-600 dark:text-rose-400">WAKE TECH</span>
      </div>

      {/* Main Identity & Statement */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
          {personal.name} — {personal.headline}
        </h1>

        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          {personal.bio}
        </p>
      </div>

      {/* Interactive Command / Direct Reachout Bar */}
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          onClick={copyEmail}
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-200 hover:border-rose-300 dark:hover:border-rose-900 transition-all cursor-pointer shadow-xs"
        >
          <span className="text-rose-500 font-semibold">$</span>
          <span>{personal.contactEmail}</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500 ml-1" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 ml-1 transition-colors" />
          )}
        </button>

        <a
          href={personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-200 hover:border-rose-300 dark:hover:border-rose-900 transition-all cursor-pointer shadow-xs"
        >
          <GithubIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
          <span>github/{personal.handle}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </a>

        <div className="flex items-center gap-1.5 ml-auto">
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
