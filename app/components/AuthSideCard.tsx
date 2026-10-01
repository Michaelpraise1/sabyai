"use client";

import Link from "next/link";

interface AuthSideCardProps {
  mode: "login" | "register";
}

export default function AuthSideCard({ mode }: AuthSideCardProps) {
  const isLogin = mode === "login";

  return (
    <div className="w-full md:w-[45%] lg:w-[42%] flex flex-col justify-stretch items-stretch p-2 sm:p-3">
      <div className="relative flex-1 rounded-[26px] overflow-hidden bg-[#0A0B0E] border border-white/10 flex flex-col justify-between p-6 sm:p-8 md:p-10 text-white min-h-[580px] shadow-2xl">
        {/* Ambient Gradient Mesh Background (recreating Tiptap NoiseCard) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-right vibrant violet/purple glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-60 filter blur-[90px]"
            style={{
              background: "radial-gradient(circle, #7C3AED 0%, #4338CA 50%, transparent 75%)",
            }}
          />
          {/* Bottom-left emerald/cyan aura */}
          <div
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-45 filter blur-[95px]"
            style={{
              background: "radial-gradient(circle, #059669 0%, #0D9488 45%, transparent 70%)",
            }}
          />
          {/* Center warm amber/coral accent */}
          <div
            className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full opacity-35 filter blur-[100px]"
            style={{
              background: "radial-gradient(circle, #EA580C 0%, #D97706 40%, transparent 70%)",
            }}
          />
          {/* Fine grain noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Subtle geometric grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Top Header: Logo + Back to website link */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8C3 5.24 5.24 3 8 3s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" fill="white" />
                <circle cx="8" cy="8" r="2" fill="#0A0B0E" />
              </svg>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">Saby</span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white/90 px-2 py-0.5 rounded-full border border-white/10">
              AI
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors duration-150 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"
          >
            <span>Back to site</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Content Section */}
        <div className="relative z-10 my-auto py-8 max-w-md">
          {isLogin ? (
            /* Login Visual Copy */
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Autonomous Organization Engine
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
                Zero config, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">
                  fully extensible
                </span>{" "}
                command layer.
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Everything great about Saby AI. Now with production-grade compliance, multi-branch tracking, and autonomous workflows ready to scale.
              </p>

              {/* Live Metric Showcase Card */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-white/10 pb-2.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Live System Metric
                  </span>
                  <span className="font-mono text-neutral-300">99.99% Uptime</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div>
                    <p className="text-2xl font-bold text-white tracking-tight">4.8M+</p>
                    <p className="text-xs text-neutral-400">Automated actions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white tracking-tight">&lt; 140ms</p>
                    <p className="text-xs text-neutral-400">Decision latency</p>
                  </div>
                </div>
              </div>

              {/* Customer Quote */}
              <div className="pt-2 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[1px] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#14161D] flex items-center justify-center text-xs font-semibold text-white">
                    SJ
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-200 font-medium italic">
                    &quot;Saby AI reduced our operational escalations by 74% in week one.&quot;
                  </p>
                  <p className="text-[11px] text-neutral-400">Sarah Jenkins · COO, Apex Logistics</p>
                </div>
              </div>
            </div>
          ) : (
            /* Register Visual Copy */
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-indigo-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                14-Day All-Access Trial
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
                Experience everything <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-emerald-300">
                  Saby AI can do.
                </span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Your free trial includes unrestricted access to all enterprise features, intelligent agents, and connectors:
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-sm text-neutral-200">
                {[
                  "Autonomous AI agents & cross-branch workflows",
                  "Automated compliance audit trails & risk detector",
                  "Omnichannel connectors (WhatsApp, Slack, Notion)",
                  "Pro executive analytics & custom command center",
                  "Priority engineer support during your onboarding",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-neutral-300 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span>No credit card or cumbersome setup required. Ready in 2 minutes.</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar: Trust & Security Indicators */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <span>256-bit AES Encryption</span>
        </div>
      </div>
    </div>
  );
}
