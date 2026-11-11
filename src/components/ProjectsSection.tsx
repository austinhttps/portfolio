"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("All");

  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))].slice(0, 6);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm max-w-lg">
              A curated selection of high-concurrency systems, developer tooling, and modern web applications.
            </p>
          </div>

          {/* Filter options */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  filter === tag
                    ? "bg-slate-900 dark:bg-rose-500 text-white"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-800"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="p-7 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs flex flex-col justify-between hover:border-rose-300 dark:hover:border-rose-900/80 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {project.metrics ? (
                    <span className="text-xs font-mono font-medium text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200/60 dark:border-rose-900/60">
                      {project.metrics}
                    </span>
                  ) : (
                    <span />
                  )}

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {tag}
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
