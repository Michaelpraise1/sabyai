"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DocArticle, sidebarSections, docArticles } from "./data";

interface Props {
  article: DocArticle;
}

export default function DocArticleClient({ article }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCodeTab, setActiveCodeTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<"yes" | "no" | null>(null);

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

  // Filter search results
  const searchResults = searchQuery.trim()
    ? Object.values(docArticles).filter(
        (doc) =>
          doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-neutral-900 font-sans">
      {/* ─── Sticky Docs Header ─── */}
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
              <Link
                href="/docs"
                className="px-2.5 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                All docs
              </Link>
              <Link
                href="/docs/quickstart"
                className="px-2.5 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Guides
              </Link>
              <Link
                href="/docs/api-reference"
                className="px-2.5 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                API Reference
              </Link>
              <Link
                href="/"
                className="px-2.5 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors flex items-center gap-1"
              >
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
            <span>Navigation: <span className="text-violet-600">{article.title}</span></span>
          </button>
        </div>
      </div>

      {/* ─── Main 3-Column Layout ─── */}
      <div className="max-w-[86rem] mx-auto px-3 sm:px-4 relative flex items-start gap-8">
        {/* ─── Desktop Left Sidebar ─── */}
        <aside className="hidden lg:block flex-none sticky top-[4.5rem] w-64 h-[calc(100vh-5rem)] overflow-y-auto px-2 pt-6 pb-12 self-start scrollbar-thin">
          <nav className="flex flex-col gap-7">
            {sidebarSections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-0.5">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2 pl-2.5">
                  {section.heading}
                </div>
                {section.links.map((link) => {
                  const isActive = link.slug === article.slug;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`flex items-center justify-between px-2.5 py-1.5 text-sm rounded-lg transition-colors ${
                        isActive
                          ? "bg-white text-violet-600 font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-neutral-200/50"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                      }`}
                    >
                      <span className="truncate">{link.label}</span>
                      {link.badge && (
                        <span className="text-[10px] font-semibold bg-neutral-100 border border-neutral-200 text-neutral-500 px-1.5 py-0.5 rounded select-none">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
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
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg hover:bg-neutral-200 transition"
                >
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
                    {section.links.map((link) => {
                      const isActive = link.slug === article.slug;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-2.5 py-2 text-sm rounded-lg transition-colors ${
                            isActive
                              ? "bg-white text-violet-600 font-semibold shadow-sm"
                              : "text-neutral-600 hover:text-neutral-900 hover:bg-white"
                          }`}
                        >
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="text-[10px] font-semibold bg-neutral-100 border border-neutral-200 text-neutral-500 px-1.5 py-0.5 rounded">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </nav>
            </aside>
          </div>
        )}

        {/* ─── Center Column: Article Content ─── */}
        <main className="flex-1 min-w-0 pt-6 pb-20 sm:pt-8 lg:pb-32">
          {/* Breadcrumb row */}
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-4">
            <Link href="/docs" className="hover:text-black transition">
              Docs
            </Link>
            <span>/</span>
            <span className="text-neutral-600">{article.category}</span>
            <span>/</span>
            <span className="text-violet-600 font-semibold">{article.title}</span>
          </div>

          {/* Title and metadata */}
          <header className="mb-8">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">
                {article.category}
              </span>
              {article.badge && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                  {article.badge}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              {article.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              {article.description}
            </p>
            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-neutral-200/60 text-xs text-neutral-400">
              <span>Updated: {article.lastUpdated}</span>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>
          </header>

          {/* Overview Prose */}
          <div className="prose prose-neutral max-w-none mb-10">
            <p className="text-base text-neutral-700 leading-relaxed font-normal">
              {article.content.overview}
            </p>
          </div>

          {/* Key Bullet Summary if present */}
          {article.content.quickSummary && (
            <div className="bg-white rounded-2xl p-6 mb-10 border border-neutral-200/80 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-600" />
                Key Highlights
              </h3>
              <ul className="space-y-2.5">
                {article.content.quickSummary.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ─── Code Snippets with Tab Switcher ─── */}
          {article.content.codeSnippets && article.content.codeSnippets.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                Code Implementation
              </h2>
              <div className="bg-[#12141a] rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
                {/* Code Tabs Header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-800 bg-[#161820]">
                  <div className="flex items-center gap-1.5">
                    {article.content.codeSnippets.map((snippet, idx) => (
                      <button
                        key={snippet.label}
                        onClick={() => setActiveCodeTab(idx)}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                          activeCodeTab === idx
                            ? "bg-violet-600 text-white shadow-sm"
                            : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                        }`}
                      >
                        {snippet.label}
                      </button>
                    ))}
                  </div>
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyCode(article.content.codeSnippets![activeCodeTab].code)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded-md hover:bg-neutral-800 transition"
                  >
                    {copied ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-emerald-400 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                        </svg>
                        <span>Copy snippet</span>
                      </>
                    )}
                  </button>
                </div>
                {/* Code Content */}
                <pre className="p-4 sm:p-5 overflow-x-auto font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  <code>{article.content.codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>
            </section>
          )}

          {/* ─── Step by Step Section ─── */}
          {article.content.steps && article.content.steps.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Step-by-Step Guide</h2>
              <div className="space-y-6">
                {article.content.steps.map((st) => (
                  <div
                    key={st.step}
                    className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-violet-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                        {st.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-neutral-900 mb-1.5">{st.title}</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4">{st.description}</p>
                        {st.codeSnippet && (
                          <div className="bg-[#12141a] rounded-xl p-3 font-mono text-xs text-neutral-200 overflow-x-auto border border-neutral-800">
                            <code>{st.codeSnippet}</code>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ─── Parameter / Schema Table ─── */}
          {article.content.params && article.content.params.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Parameters & Schema Reference</h2>
              <div className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 text-neutral-500 font-semibold border-b border-neutral-200/80 text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-5 py-3">Parameter / Key</th>
                        <th className="px-5 py-3">Type</th>
                        <th className="px-5 py-3">Requirement</th>
                        <th className="px-5 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {article.content.params.map((p) => (
                        <tr key={p.name} className="hover:bg-neutral-50/60 transition-colors">
                          <td className="px-5 py-3.5 font-mono text-xs font-semibold text-neutral-900">
                            {p.name}
                          </td>
                          <td className="px-5 py-3.5">
                            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200">
                              {p.type}
                            </span>
                          </td>
                          <td className="px-5 py-3.5">
                            {p.required ? (
                              <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                                Required
                              </span>
                            ) : (
                              <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                                Optional
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3.5 text-xs text-neutral-600">
                            {p.description}
                            {p.example && (
                              <div className="mt-1 font-mono text-[11px] text-neutral-400">
                                eg: {p.example}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* ─── Callout Alert ─── */}
          {article.content.callout && (
            <div
              className={`rounded-2xl p-5 mb-12 border flex items-start gap-3.5 ${
                article.content.callout.type === "tip"
                  ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                  : article.content.callout.type === "warning"
                  ? "bg-amber-50/70 border-amber-200 text-amber-950"
                  : "bg-blue-50/70 border-blue-200 text-blue-950"
              }`}
            >
              <div className="text-xl flex-shrink-0 mt-0.5">
                {article.content.callout.type === "tip" && "💡"}
                {article.content.callout.type === "warning" && "⚠️"}
                {article.content.callout.type === "note" && "ℹ️"}
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{article.content.callout.title}</h4>
                <p className="text-sm opacity-90 leading-relaxed">{article.content.callout.message}</p>
              </div>
            </div>
          )}

          {/* ─── FAQ Accordions if present ─── */}
          {article.content.faq && article.content.faq.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {article.content.faq.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border border-neutral-200/80 shadow-sm">
                    <h4 className="text-sm font-bold text-neutral-900 mb-1.5">{item.question}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ─── Bottom Pagination Cards ─── */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-neutral-200/80 mb-12">
            {article.prev ? (
              <Link
                href={`/docs/${article.prev.slug}`}
                className="group p-4 bg-white rounded-xl border border-neutral-200/80 hover:border-violet-300 hover:shadow-md transition-all flex flex-col items-start"
              >
                <span className="text-[11px] font-semibold text-neutral-400 group-hover:text-violet-600 uppercase tracking-wider flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Previous
                </span>
                <span className="mt-1 text-sm font-bold text-neutral-900 group-hover:text-violet-600">
                  {article.prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {article.next && (
              <Link
                href={`/docs/${article.next.slug}`}
                className="group p-4 bg-white rounded-xl border border-neutral-200/80 hover:border-violet-300 hover:shadow-md transition-all flex flex-col items-end sm:ml-auto w-full text-right"
              >
                <span className="text-[11px] font-semibold text-neutral-400 group-hover:text-violet-600 uppercase tracking-wider flex items-center gap-1">
                  Next
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="mt-1 text-sm font-bold text-neutral-900 group-hover:text-violet-600">
                  {article.next.title}
                </span>
              </Link>
            )}
          </div>

          {/* ─── Feedback Widget ─── */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-neutral-900">Was this page helpful?</p>
              <p className="text-xs text-neutral-500 mt-0.5">Let us know how we can improve our documentation.</p>
            </div>
            {feedbackGiven ? (
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Thanks for your feedback!
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFeedbackGiven("yes")}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition flex items-center gap-1.5"
                >
                  👍 Yes
                </button>
                <button
                  onClick={() => setFeedbackGiven("no")}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition flex items-center gap-1.5"
                >
                  👎 No
                </button>
              </div>
            )}
          </div>
        </main>

        {/* ─── Right Sidebar: "On this page" TOC ─── */}
        <aside className="hidden xl:block flex-none sticky top-[4.5rem] w-60 h-[calc(100vh-5rem)] overflow-y-auto pt-6 pb-12 self-start">
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-3">
                On this page
              </h4>
              <nav className="flex flex-col gap-1.5 text-xs">
                {article.toc.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="text-neutral-500 hover:text-neutral-900 transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-violet-500"
                  >
                    {heading.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-neutral-200/60 space-y-3">
              <a
                href="https://github.com/saby-ai/docs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-900 transition"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                Edit this page on GitHub
              </a>
              <Link
                href="/register"
                className="block p-3 rounded-xl bg-neutral-100 hover:bg-neutral-200/80 transition text-xs"
              >
                <span className="font-semibold text-black block mb-0.5">Need custom deployment?</span>
                <span className="text-neutral-500 block">Talk with our operational architects →</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
