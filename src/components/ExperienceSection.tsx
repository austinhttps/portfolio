"use client";

import React from "react";
import { portfolioData, Experience } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-pink-100/60 dark:border-pink-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-bold">
            Journey & Impact
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Proven track record designing production infrastructure and empowering high-velocity engineering teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-pink-200 dark:border-pink-900/60 ml-4 md:ml-32 space-y-12">
          {experience.map((item: Experience) => (
            <div key={item.id} className="relative pl-6 md:pl-8 group">
              {/* Timeline marker / sakura node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-pink-500 group-hover:scale-125 group-hover:bg-pink-400 transition-all duration-300" />

              {/* Date stamp desktop offset */}
              <div className="hidden md:block absolute -left-36 top-1 text-xs font-semibold text-slate-500 dark:text-slate-400 text-right w-28">
                {item.period}
              </div>

              <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-pink-300 dark:hover:border-pink-900/60 transition-all shadow-xs backdrop-blur-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                    {item.company}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4 md:hidden">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-2 mt-2">
                  {item.description.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-pink-400 font-bold mt-1 leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800/60">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-pink-50/60 dark:bg-pink-950/30 text-pink-700 dark:text-pink-300 border border-pink-200/40 dark:border-pink-900/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Block */}
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-rose-400 group-hover:scale-125 group-hover:bg-rose-400 transition-all duration-300" />

              <div className="hidden md:block absolute -left-36 top-1 text-xs font-semibold text-slate-500 dark:text-slate-400 text-right w-28">
                {edu.period}
              </div>

              <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-pink-300 dark:hover:border-pink-900/60 transition-all shadow-xs backdrop-blur-xs">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-pink-600 dark:text-pink-400 mt-0.5">
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
