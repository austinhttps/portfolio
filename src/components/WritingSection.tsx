"use client";

import React from "react";
import { portfolioData, BlogPost } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export function WritingSection() {
  const { blogPosts } = portfolioData;

  return (
    <section id="writing" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Writing & Insights
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Engineering playbooks on distributed consensus, event-driven pipelines, and database reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs flex flex-col justify-between hover:border-rose-300 dark:hover:border-rose-900/80 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2">
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
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={post.url || "#"}
                  className="group text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
