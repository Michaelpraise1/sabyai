"use client";

import { useState } from "react";
import Link from "next/link";

const promptExamples = [
  "Flag all compliance risks in the Lagos branch this quarter",
  "Summarize field agent performance for October",
  "Trigger payroll workflow for all part-time staff",
  "Send compliance reminder to all branch managers",
];

const partnerLogos = [
  { name: "WhatsApp", abbr: "WA", color: "#25D366" },
  { name: "Telegram", abbr: "TG", color: "#2AABEE" },
  { name: "Slack", abbr: "SL", color: "#4A154B" },
  { name: "Google Workspace", abbr: "GW", color: "#4285F4" },
  { name: "Zapier", abbr: "ZA", color: "#FF4A00" },
  { name: "HubSpot", abbr: "HS", color: "#FF7A59" },
  { name: "Notion", abbr: "NT", color: "#000000" },
];

export default function Hero() {
  const [activePrompt, setActivePrompt] = useState(0);
  const [inputValue, setInputValue] = useState(promptExamples[0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Ambient gradient blobs — tiptap style */}
      <div
        className="hero-gradient-blob w-[600px] h-[600px] opacity-40 animate-float"
        style={{
          background: "radial-gradient(circle, #86efac, #34d399)",
          top: "-100px",
          left: "-150px",
        }}
      />
      <div
        className="hero-gradient-blob w-[500px] h-[500px] opacity-35 animate-float-slow"
        style={{
          background: "radial-gradient(circle, #fca5a5, #fb923c)",
          top: "50px",
          right: "-100px",
        }}
      />
      <div
        className="hero-gradient-blob w-[400px] h-[400px] opacity-30 animate-float-delayed"
        style={{
          background: "radial-gradient(circle, #c4b5fd, #818cf8)",
          bottom: "100px",
          left: "30%",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          New — Executive intelligence for distributed operations
        </div>

        {/* Headline — tiptap style with black pill word highlight */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black leading-[1.08] tracking-tight mb-6">
          Run an{" "}
          <span className="inline-flex items-center bg-black text-white px-4 py-1 rounded-2xl mx-1 align-middle">
            intelligent
          </span>{" "}
          <br className="hidden sm:block" />
          organization that{" "}
          <em className="font-serif font-normal not-italic" style={{ fontStyle: "italic" }}>
            thinks ahead
          </em>
        </h1>

        <p className="max-w-xl text-lg text-gray-600 leading-relaxed mb-10">
          Saby AI is the command layer for distributed teams — automating workflows, flagging compliance risks, and delivering real-time insights across every branch and department.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-14">
          <Link
            href="/register"
            className="px-6 py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get started free
          </Link>
          <a
            href="#"
            className="px-6 py-3.5 bg-white text-black text-sm font-semibold rounded-full border border-black/10 hover:border-black/20 hover:bg-gray-50 transition-all duration-200 shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch demo
          </a>
        </div>

        {/* AI Command Box */}
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden mb-12">
          {/* Prompt tabs */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100 px-4 pt-3 gap-2">
            {promptExamples.map((p, i) => (
              <button
                key={i}
                onClick={() => { setActivePrompt(i); setInputValue(p); }}
                className={`flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                  activePrompt === i
                    ? "bg-black text-white"
                    : "text-gray-500 hover:text-black hover:bg-gray-100"
                }`}
              >
                Example {i + 1}
              </button>
            ))}
          </div>
          {/* Command input */}
          <div className="flex items-center gap-3 p-4">
            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400"
              placeholder="Ask Saby anything about your operations…"
            />
            <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trusted by */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[9px] font-bold"
                style={{ backgroundColor: logo.color }}
              >
                {logo.abbr}
              </div>
              <span className="text-sm font-semibold text-gray-700">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
