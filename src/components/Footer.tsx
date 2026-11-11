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
    <footer className="py-10 border-t border-pink-100/60 dark:border-pink-950/40 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span>🌸</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {personal.name}
          </span>
          <span>• Designed with cherry blossom aesthetics</span>
        </div>

        <div>
          © {year} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
