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
    <footer className="py-12 border-t border-rose-100/70 dark:border-rose-950/40 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {personal.name}
          </span>
          <span>• Minimalist engineering portfolio</span>
        </div>

        <div>
          © {year} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
