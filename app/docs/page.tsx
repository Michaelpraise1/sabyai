"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sidebarSections, docArticles } from "./data";

// ─── Feature Cards Data ───
const featureCards = [
  {
    icon: "⚡",
    title: "AI Command Layer",
    slug: "ai-command-layer",
    description: "Natural-language command interface for orchestrating multi-branch operations and intelligent decision-making.",
    badges: ["Core", "AI"],
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    slug: "workflow-automation",
    description: "Build, deploy, and monitor automated workflows across departments with visual pipeline builder.",
    badges: ["Core"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: "🛡️",
    title: "Compliance Engine",
    slug: "compliance-engine",
    description: "Automated audit trails, risk scoring, and regulatory compliance monitoring across all branches.",
    badges: ["Enterprise", "AI"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    slug: "analytics-dashboard",
    description: "Real-time executive analytics with customizable KPIs, forecasting, and anomaly detection.",
    badges: ["Core", "Cloud"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "🌐",
    title: "Multi-Branch Operations",
    slug: "multi-branch-ops",
    description: "Centralized command center for managing distributed teams, branches, and field agents at scale.",
    badges: ["Enterprise"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: "🔗",
    title: "Integrations",
    slug: "integrations",
    description: "Connect with WhatsApp, Slack, Notion, Google Workspace, Zapier, and 50+ enterprise tools.",
    badges: ["Core", "API"],
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
  {
    icon: "📥",
    title: "Data Ingestion",
    slug: "data-ingestion",
    description: "Connect forms, APIs, and storage in minutes with guided setup and production-ready defaults.",
    badges: ["Core", "Cloud"],
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    icon: "👤",
    title: "Field Agent Tools",
    slug: "field-agent-tools",
    description: "Mobile-optimized tools for field teams with offline support, GPS tracking, and task management.",
    badges: ["Mobile", "Enterprise"],
    color: "from-lime-500/20 to-green-500/20",
  },
];

// ─── Quick Links Data ───
const quickLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "API Reference",
    slug: "api-reference",
    description: "Endpoints, authentication, and request examples.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "How-to Guides",
    slug: "how-to-guides",
    description: "Step-by-step playbooks for implementation teams.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Launch Checklist",
    slug: "launch-checklist",
    description: "Pre-launch and post-launch checks for reliability.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Best Practices",
    slug: "best-practices",
    description: "Design, governance, and reporting recommendations.",
  },
];

// ─── Deployment Options ───
const deploymentOptions = [
  {
    icon: "☁️",
    title: "Cloud",
    description: "Fully managed cloud infrastructure tested daily by thousands of organizations worldwide.",
  },
  {
    icon: "🏢",
    title: "Dedicated Cloud",
    description: "Dedicated servers optimized for handling larger organizations and higher operational loads.",
  },
  {
    icon: "🖥️",
    title: "On-Premises",
    description: "Deploy Saby AI using Docker containers on your own servers for maximum data sovereignty.",
  },
];

export default function DocsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Keyboard shortcut for Cmd/Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const searchResults = searchQuery.trim()
    ? Object.values(docArticles).filter(
        (doc) =>
          doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-neutral-900 font-sans">
      {/* ─── Sticky Header ─── */}
      <header className="sticky top-0 w-full z-50 px-3 sm:px-4 py-2">
        <div className="bg-white rounded-t-2xl lg:rounded-full px-4 py-3 flex items-center shadow-[0_1px_3px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] border border-neutral-200/60">
          {/* Logo + Docs branding */}
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8C3 5.24 5.24 3 8 3s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" fill="white" />
                  <circle cx="8" cy="8" r="2" fill="black" />
                </svg>
              </div>
            </Link>
            <Link href="/docs" className="flex items-center gap-1.5">
              <span className="font-bold text-base text-black">Saby</span>
              <span className="text-neutral-400 font-normal text-base">Docs</span>
            </Link>
            <span className="hidden sm:inline-flex items-center text-xs font-semibold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-lg border border-neutral-200/50">
              v2.x
            </span>
            <span className="hidden lg:block text-black/15 select-none mx-1">/</span>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <Link href="/docs" className="px-2.5 py-1.5 text-sm font-semibold text-neutral-900 bg-neutral-100 rounded-lg transition-colors">
                All docs
              </Link>
              <Link href="/docs/quickstart" className="px-2.5 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
                Guides
              </Link>
              <Link href="/docs/api-reference" className="px-2.5 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
                API Reference
              </Link>
              <Link href="/" className="px-2.5 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors flex items-center gap-1">
                Website
                <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </nav>
          </div>

          {/* Right side: Search + Sign up */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-600 bg-neutral-50 hover:bg-neutral-100 rounded-lg border border-neutral-200/80 transition-colors"
            >
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="hidden sm:inline text-xs text-neutral-500">Quick search...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-semibold border border-neutral-200 rounded shadow-sm bg-white text-neutral-500">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/register"
              className="hidden sm:inline-flex px-3.5 py-1.5 text-sm font-semibold bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* ─── Search Modal ─── */}
        {searchOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4 animate-fadeIn"
            onClick={() => setSearchOpen(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl border border-neutral-200 w-full max-w-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-100">
                <svg className="w-5 h-5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles, guides, APIs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-sm outline-none placeholder:text-neutral-400 font-medium"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs font-semibold px-2 py-1 rounded bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                >
                  ESC
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto p-2">
                {searchQuery.trim() === "" ? (
                  <div className="p-4 text-xs text-neutral-400 space-y-2">
                    <p className="font-semibold uppercase tracking-wider text-neutral-400 text-[10px]">Popular Topics</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Quickstart", "AI Command Layer", "Compliance Engine", "API Reference", "Integrations"].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs transition"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="p-8 text-center text-sm text-neutral-400">
                    No results found for &ldquo;{searchQuery}&rdquo;
                  </div>
                ) : (
                  <div className="space-y-1">
                    {searchResults.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/docs/${item.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-neutral-100 transition group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-neutral-900 group-hover:text-violet-600 transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-medium px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-500 border border-neutral-200">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 line-clamp-1">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ─── Mobile Sub-bar for Sidebar Toggle ─── */}
      <div className="block lg:hidden px-3 sm:px-4 pb-1">
        <div className="bg-white px-4 py-2.5 rounded-b-2xl shadow-sm border border-t-0 border-neutral-200/60 flex items-center justify-between">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-black rounded-lg px-2 py-1 hover:bg-neutral-100 transition"
          >
            <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <span>Overview & Documentation Menu</span>
          </button>
        </div>
      </div>

      <div className="max-w-[86rem] mx-auto px-3 sm:px-4 relative flex items-start gap-8">
        {/* ─── Desktop Left Sidebar ─── */}
        <aside className="hidden lg:block flex-none sticky top-[4.5rem] w-64 h-[calc(100vh-5rem)] overflow-y-auto px-2 pt-6 pb-12 self-start scrollbar-thin">
          <nav className="flex flex-col gap-7">
            {sidebarSections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-0.5">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2 pl-2.5">
                  {section.heading}
                </div>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between px-2.5 py-1.5 text-sm rounded-lg transition-colors text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  >
                    <span className="truncate">{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] font-semibold bg-neutral-100 border border-neutral-200 text-neutral-500 px-1.5 py-0.5 rounded select-none">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* ─── Mobile Left Sidebar Overlay ─── */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <aside className="absolute left-0 top-0 bottom-0 w-72 bg-[#F5F5F5] border-r border-neutral-200 overflow-y-auto p-5 pt-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-base text-black">Documentation</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-lg hover:bg-neutral-200 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {sidebarSections.map((section) => (
                  <div key={section.heading} className="flex flex-col gap-0.5">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2 pl-2.5">
                      {section.heading}
                    </div>
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-2 text-sm rounded-lg transition-colors text-neutral-600 hover:text-neutral-900 hover:bg-white"
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-[10px] font-semibold bg-neutral-100 border border-neutral-200 text-neutral-500 px-1.5 py-0.5 rounded">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
            </aside>
          </div>
        )}

        {/* ─── Main Content ─── */}
        <main className="flex-1 min-w-0 px-0 sm:px-2 lg:pr-8 lg:pl-0 self-start">
          <div className="pt-6 pb-16 sm:pb-24 sm:pt-8 lg:pb-32 lg:pt-10">

            {/* Page Header */}
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-violet-600">Documentation Home</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-none tracking-tight max-w-2xl">
                Saby AI Docs
              </h1>
              <p className="mt-4 text-lg text-neutral-500 max-w-2xl leading-relaxed">
                Setup guides, API references, and architecture patterns for teams building with Saby AI. Start with a quickstart or browse by feature.
              </p>
            </header>

            {/* ─── Section 1: Browse by Feature ─── */}
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black leading-tight">Browse by feature</h2>
                <p className="text-base text-neutral-500 mt-3 leading-relaxed max-w-2xl">
                  Review our docs and examples to learn how to incorporate Saby AI&apos;s advanced features into your operations stack.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {featureCards.map((card) => (
                  <Link
                    key={card.title}
                    href={`/docs/${card.slug}`}
                    className="group p-5 bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all border border-neutral-200/60 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top row: icon + badges */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-lg`}>
                          {card.icon}
                        </div>
                        <div className="flex items-center gap-1">
                          {card.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-1.5 py-0.5 text-[11px] leading-tight text-neutral-600 border border-neutral-200 rounded-lg select-none"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Title + desc */}
                      <h3 className="font-semibold text-black leading-snug group-hover:text-violet-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{card.description}</p>
                    </div>
                    {/* Action link */}
                    <div className="flex items-center gap-2 mt-5">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-black bg-neutral-100 group-hover:bg-neutral-200 px-3 py-1.5 rounded-lg transition-colors">
                        Documentation
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ─── Section 2: Quick Links Grid ─── */}
            <section className="mb-16">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={`/docs/${link.slug}`}
                    className="group p-4 bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-violet-300 transition-all flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
                      {link.icon}
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-black group-hover:text-violet-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed flex-1">{link.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* ─── Section 3: Get Started with Templates ─── */}
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black leading-tight">Get started with a template</h2>
                <p className="text-base text-neutral-500 mt-3 leading-relaxed max-w-2xl">
                  Deploy operational dashboards and AI-powered workflows in minutes using our pre-built templates, or build custom solutions from components.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Template card 1 */}
                <Link href="/docs/data-ingestion" className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-neutral-200/60 overflow-hidden transition-all">
                  <div className="h-44 bg-gradient-to-br from-neutral-100 to-neutral-200/50 flex items-center justify-center">
                    <div className="w-64 h-28 bg-white rounded-xl shadow-md border border-neutral-200/60 flex flex-col p-3 gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <div className="flex-1" />
                        <div className="h-2 w-16 bg-neutral-200 rounded" />
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-1.5">
                        <div className="bg-neutral-100 rounded" />
                        <div className="bg-neutral-100 rounded col-span-2" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-black group-hover:text-violet-600 transition-colors">Data Ingestion Quickstart</h3>
                    <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                      Connect forms, APIs, and storage in minutes with guided setup and production-ready defaults.
                    </p>
                  </div>
                </Link>

                {/* Template card 2 */}
                <Link href="/docs/analytics-dashboard" className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-neutral-200/60 overflow-hidden transition-all">
                  <div className="h-44 bg-gradient-to-br from-neutral-100 to-neutral-200/50 flex items-center justify-center">
                    <div className="w-64 h-28 bg-white rounded-xl shadow-md border border-neutral-200/60 flex flex-col p-3 gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <div className="flex-1" />
                        <div className="h-2 w-20 bg-neutral-200 rounded" />
                      </div>
                      <div className="flex-1 grid grid-cols-4 gap-1.5">
                        <div className="bg-violet-100 rounded" />
                        <div className="bg-emerald-100 rounded" />
                        <div className="bg-amber-100 rounded" />
                        <div className="bg-blue-100 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-black group-hover:text-violet-600 transition-colors">Operational Dashboards</h3>
                    <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                      Build role-specific dashboards with templates for finance, compliance, and operational teams.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* ─── Section 4: Deploy or Integrate ─── */}
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black leading-tight">Integrate or deploy Saby Cloud</h2>
                <p className="text-base text-neutral-500 mt-3 leading-relaxed max-w-2xl">
                  Integrate Saby Cloud services into your environment or deploy on-premises. Choose the solution that best fits your performance, management, and scalability requirements.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {deploymentOptions.map((opt) => (
                  <div key={opt.title} className="group">
                    <div className="text-2xl mb-3">{opt.icon}</div>
                    <h3 className="text-base font-bold text-black mb-1.5">{opt.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{opt.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Section 5: Trial CTA Card ─── */}
            <section className="mb-16">
              <div className="relative bg-white rounded-2xl shadow-sm border border-neutral-200/60 overflow-hidden p-8">
                <div className="pointer-events-none select-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-tl from-violet-100 to-emerald-50 opacity-60 blur-2xl" />
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-serif text-black leading-tight">
                    Try every Saby AI feature free for 14 days
                  </h2>
                  <p className="text-base text-neutral-500 mt-2 leading-relaxed max-w-xl">
                    Create a Saby Cloud account, open your command center, and start your trial to test every paid feature.
                  </p>
                  <ul className="mt-5 space-y-2">
                    {[
                      { bold: "14-day trial:", text: "No credit card required" },
                      { bold: "AI features:", text: "Autonomous agents, compliance engine, and command layer" },
                      { bold: "All paid features:", text: "Collaboration, analytics, multi-branch operations, and more" },
                      { bold: "Enterprise connectors:", text: "WhatsApp, Slack, Google Workspace integrations" },
                    ].map((item) => (
                      <li key={item.bold} className="flex items-center gap-2.5 text-sm">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>
                          <strong className="font-semibold text-black">{item.bold}</strong>{" "}
                          <span className="text-neutral-600">{item.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:bg-neutral-100 px-3 py-2 -ml-3 rounded-lg transition-colors"
                    >
                      Start trial
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
