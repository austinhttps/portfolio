"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="stack" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
          <span className="text-rose-500 font-semibold">[05]</span>
          <span>STACK & USES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-10">
          Tools, Languages & Runtimes
        </h2>

        {/* 2-column minimal matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs"
            >
              <h3 className="font-mono text-xs text-rose-600 dark:text-rose-400 font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((s) => (
                  <span
                    key={s.name}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
