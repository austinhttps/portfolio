"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function ContactSection() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Reach out regarding prospective engineering roles, architecture consulting, or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Direct Details */}
          <div className="md:col-span-2">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-3">
                  Direct Inquiries
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Available for full-time senior engineering opportunities, distributed systems advisory, or technical collaborations.
                </p>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <a
                    href={`mailto:${personal.contactEmail}`}
                    className="flex items-center gap-3 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{personal.contactEmail}</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Clean Contact Form */}
          <div className="md:col-span-3">
            <div className="p-7 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 mx-auto flex items-center justify-center mb-4 border border-rose-200 dark:border-rose-900">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. I will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 text-xs text-rose-600 dark:text-rose-400 font-semibold underline underline-offset-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team or project..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-600 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
