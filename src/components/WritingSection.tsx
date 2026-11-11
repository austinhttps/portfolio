"use client";

import React from "react";
import { portfolioData, BlogPost } from "@/data/portfolio";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export function WritingSection() {
  const { blogPosts } = portfolioData;

  return (
    <section id="writing" className="py-20 border-t border-pink-100/60 dark:border-pink-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-bold">
              Insights & Articles
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Writing & Blog
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm max-w-lg">
              Notes on cloud systems, frontend engineering, database optimization, and lessons from building software.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="group p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-pink-300 dark:hover:border-pink-900/60 transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/5 backdrop-blur-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {post.snippet}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={post.url || "#"}
                  className="text-xs font-semibold text-pink-600 dark:text-pink-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Read
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
