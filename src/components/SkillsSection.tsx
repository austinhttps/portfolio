"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Code2, Server, Globe, Cloud } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-pink-500" />;
      case 1:
        return <Globe className="w-5 h-5 text-pink-500" />;
      case 2:
        return <Server className="w-5 h-5 text-pink-500" />;
      default:
        return <Cloud className="w-5 h-5 text-pink-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-pink-100/60 dark:border-pink-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-bold">
            Technical Stack
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Core Capabilities
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm">
            Technologies and frameworks I wield to construct fast, robust, and accessible digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, idx) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-pink-300 dark:hover:border-pink-900/80 transition-all hover:shadow-lg hover:shadow-pink-500/5 backdrop-blur-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 group-hover:border-pink-200 dark:group-hover:border-pink-900/40 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
