"use client";

import React from "react";
import { portfolioData, Experience } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Engineering leadership, cloud architecture, and product delivery across high-throughput environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-rose-200/90 dark:border-rose-900/50 ml-3 md:ml-28 space-y-12">
          {experience.map((item: Experience) => (
            <div key={item.id} className="relative pl-6 md:pl-8">
              {/* Timeline marker */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-rose-400 ring-4 ring-white dark:ring-slate-950" />

              {/* Date stamp desktop offset */}
              <div className="hidden md:block absolute -left-32 top-1 text-xs font-mono text-slate-500 dark:text-slate-400 text-right w-24">
                {item.period}
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
                    {item.company}
                  </span>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 mb-3 md:hidden">
                  {item.period} • {item.location}
                </div>

                <ul className="space-y-2 mt-3">
                  {item.description.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800/60">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-50/70 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border border-rose-200/50 dark:border-rose-900/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-6 md:pl-8">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-white dark:ring-slate-950" />

              <div className="hidden md:block absolute -left-32 top-1 text-xs font-mono text-slate-500 dark:text-slate-400 text-right w-24">
                {edu.period}
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mt-0.5">
                  {edu.institution}
                </p>
                {edu.details && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
