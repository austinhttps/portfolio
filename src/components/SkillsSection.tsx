"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Core Capabilities
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Primary languages, platforms, and tools utilized in architecting robust distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm pb-3 mb-4 border-b border-rose-100/70 dark:border-rose-950/50">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between"
                    >
                      <span>{skill.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/60" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
