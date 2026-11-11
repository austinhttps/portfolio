"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ExternalLink, Activity } from "lucide-react";
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
    <section id="projects" className="py-20 border-t border-pink-100/60 dark:border-pink-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-bold">
              Craft & Engineering
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm max-w-lg">
              A curated selection of distributed systems, open-source utilities, and modern web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  filter === tag
                    ? "bg-pink-500 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-950/40 hover:text-pink-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl p-7 bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-pink-300 dark:hover:border-pink-800/80 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 backdrop-blur-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {project.metrics ? (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-950/40 border border-pink-200/60 dark:border-pink-900/60 text-xs font-semibold text-pink-600 dark:text-pink-300">
                      <Activity className="w-3.5 h-3.5" />
                      <span>{project.metrics}</span>
                    </div>
                  ) : (
                    <span />
                  )}

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-colors"
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
                        className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
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
