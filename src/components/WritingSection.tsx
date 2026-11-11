"use client";

import React from "react";
import { portfolioData, BlogPost } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function WritingSection() {
  const { blogPosts } = portfolioData;

  return (
    <section id="writing" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
          <span className="text-rose-500 font-semibold">[04]</span>
          <span>WRITING & CASE STUDIES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-10">
          Articles & Notes
        </h2>

        {/* Clean Editorial Feed */}
        <div className="divide-y divide-slate-200/80 dark:divide-slate-800/80 border-y border-slate-200/80 dark:border-slate-800/80">
          {blogPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="py-6 group flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  <a href={post.url || "#"} className="flex items-center gap-1.5">
                    <span>{post.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                  {post.snippet}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 font-mono text-[11px] shrink-0 self-start sm:self-auto">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
