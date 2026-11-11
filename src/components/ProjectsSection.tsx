"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ArrowUpRight, Layers, Radio } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("All");

  const tags = ["All", "Go", "Next.js", "React", "Kafka", "PostgreSQL"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Index Marker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-rose-500 font-semibold">[01]</span>
              <span>INDEXED WORKS & EXPERIMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected Projects
            </h2>
          </div>

          {/* Interactive filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  filter === t
                    ? "bg-slate-900 dark:bg-rose-500 text-white font-medium"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-rose-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Feed (Adam Perlis "Launched/Building" + Akash Soti detail rows) */}
        <div className="space-y-6">
          {filteredProjects.map((project: Project, index: number) => (
            <div
              key={project.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 hover:border-rose-300 dark:hover:border-rose-900/80 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-2">
                    <span className="text-rose-400 font-semibold">0{index + 1}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{project.featured ? "PRODUCTION LAUNCH" : "OPEN SOURCE"}</span>
                  </span>

                  {project.metrics && (
                    <span className="px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/60">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        aria-label={`GitHub for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                        aria-label={`Demo for ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    #{tag}
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
