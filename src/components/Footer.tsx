"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { personal } = portfolioData;
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="pt-8 pb-28 border-t border-rose-100/70 dark:border-rose-950/40 text-xs font-mono text-slate-500 dark:text-slate-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          <span>{personal.name}</span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span>Crafted with Next.js & Sakura accents</span>
        </div>

        <div>
          © {year} Alex Rivera. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
