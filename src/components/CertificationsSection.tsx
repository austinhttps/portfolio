"use client";

import React from "react";
import { portfolioData, Certification } from "@/data/portfolio";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
          <span className="text-rose-500 font-semibold">[03]</span>
          <span>ACCREDITATION & VERIFICATIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-10">
          Certifications & Badges
        </h2>

        {/* Tabular Verification Ledger */}
        <div className="divide-y divide-slate-200/80 dark:divide-slate-800/80 border-y border-slate-200/80 dark:border-slate-800/80">
          {certifications.map((cert: Certification) => (
            <div
              key={cert.id}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="flex items-baseline gap-3">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cert.issuer} • Issued {cert.issueDate}
                  </p>
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors self-start sm:self-center"
                >
                  <span>Verify</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
