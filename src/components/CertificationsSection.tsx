"use client";

import React from "react";
import { portfolioData, Certification } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Licenses & Certifications
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Professional credentials in cloud infrastructure, Kubernetes engineering, and distributed architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert: Certification) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs flex flex-col justify-between hover:border-rose-300 dark:hover:border-rose-900/80 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                    {cert.name}
                  </h3>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors shrink-0"
                      title="Verify credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mt-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/70">
                <span>Issued {cert.issueDate}</span>
                {cert.credentialId && (
                  <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
