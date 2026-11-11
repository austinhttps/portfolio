"use client";

import React from "react";
import { portfolioData, Certification } from "@/data/portfolio";
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 border-t border-pink-100/60 dark:border-pink-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-bold">
            Credentials & Validation
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Licenses & Certifications
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Industry accredited verifications in cloud architecture, security, and container orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert: Certification) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-pink-300 dark:hover:border-pink-900/60 transition-all duration-200 hover:shadow-md hover:shadow-pink-500/5 backdrop-blur-xs flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-400/20 text-pink-600 dark:text-pink-400 border border-pink-200/50 dark:border-pink-900/40 shrink-0">
                <Award className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                    {cert.name}
                  </h3>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors shrink-0"
                      title="Verify credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mt-1">
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mt-3">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Issued {cert.issueDate}
                  </span>
                  {cert.credentialId && (
                    <span className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
