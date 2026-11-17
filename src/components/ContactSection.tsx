"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Send, Check, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function ContactSection() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setErrorMessage("Contact form is missing NEXT_PUBLIC_WEB3FORMS_KEY in .env.local.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(data.message || "Failed to deliver message. Please try again or email directly.");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again or reach out via email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-rose-100/70 dark:border-rose-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
          <span className="text-rose-500 font-semibold">[06]</span>
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Let&apos;s build something exceptional.
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mb-12">
          Whether you need a senior distributed systems engineer, advice on high-throughput backend architecture, or want to discuss a new product:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Terminal reach-out & coordinates */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs font-mono text-xs">
              <div className="text-rose-500 mb-2">$ cat contact_info.txt</div>
              <div className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <div>Email: {personal.contactEmail}</div>
                <div>Location: {personal.location}</div>
                <div>Status: Open to high-impact challenges</div>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-600 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-600 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right: Direct message box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs">
            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-500 mx-auto flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Message Dispatched
                </h3>
                <p className="text-xs text-slate-500">I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message or project scope..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>
                {errorMessage && (
                  <p className="text-xs text-rose-500 font-mono">
                    {errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-60 dark:bg-rose-500 dark:hover:bg-rose-600 text-white font-mono text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-3 h-3 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
