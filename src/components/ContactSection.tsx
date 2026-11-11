"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger joyful celebratory confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ffd1dc", "#ffb7c5", "#f43f5e", "#fda4af"],
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-pink-100/60 dark:border-pink-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-bold">
            Connect
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Together
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Have a project in mind, want to discuss an architecture challenge, or just say hello?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Direct Details */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">
                Reach Out Directly
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I’m always excited to exchange ideas regarding distributed architecture, web performance, or modern frontend design.
              </p>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <a
                  href={`mailto:${personal.contactEmail}`}
                  className="flex items-center gap-3 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{personal.contactEmail}</span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{personal.location}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="md:col-span-3">
            <div className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 mx-auto flex items-center justify-center mb-4 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Dispatched!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. I will review your note and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 text-xs text-pink-600 dark:text-pink-400 font-semibold underline underline-offset-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all"
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
                      placeholder="Share a brief overview of your inquiry..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-medium text-sm transition-all shadow-md shadow-pink-500/10 hover:shadow-pink-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
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
