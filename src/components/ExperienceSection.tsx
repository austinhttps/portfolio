"use client";

import React from "react";
import { portfolioData, Experience } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
          <span className="text-rose-500 font-semibold">[02]</span>
          <span>CHRONOLOGY & IMPACT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-10">
          Work Experience
        </h2>

        {/* Dense, High-Signal Ledger (Akash Soti + Adam Perlis resume layout) */}
        <div className="space-y-8">
          {experience.map((item: Experience) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                    {item.company} <span className="font-normal text-slate-400">/ {item.location}</span>
                  </p>
                </div>

                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {item.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {item.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="text-rose-400 font-mono text-xs mt-0.5">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded bg-rose-50/70 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border border-rose-200/50 dark:border-rose-900/40"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education Row */}
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
            >
              <div>
                <span className="font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </span>
                <span className="text-slate-400"> — {edu.institution}</span>
                {edu.details && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {edu.details}
                  </p>
                )}
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 shrink-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
