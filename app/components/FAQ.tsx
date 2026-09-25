"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Saby AI and who is it for?",
    a: "Saby AI is an intelligent operations platform for distributed organizations — companies with multiple branches, field teams, or departments that need centralized control. It's built for operations managers, executives, compliance officers, and field supervisors.",
  },
  {
    q: "How does the AI command layer work?",
    a: "The AI command layer lets you interact with your organization in plain language. You can ask questions like \"What are the top compliance risks this month?\" or trigger workflows by typing commands. Saby AI understands your operational context and executes or surfaces the right information.",
  },
  {
    q: "What integrations does Saby AI support?",
    a: "Saby AI integrates with WhatsApp, Telegram, Slack, Google Workspace, Microsoft 365, Zapier, HubSpot, QuickBooks, Airtable, Notion, and more. We also offer a REST API and webhook support for custom integrations.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most organizations are live within 24–72 hours. We offer prebuilt workflow templates for finance, compliance, field operations, healthcare, education, and logistics — so you don't start from scratch.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Saby AI uses enterprise-grade encryption for data in transit and at rest. We are SOC 2 Type II compliant, offer role-based access controls, and support SSO/SAML for enterprise customers. On-premise deployment is available on our Enterprise plan.",
  },
  {
    q: "Can I customize workflows for my industry?",
    a: "Absolutely. While we offer dozens of prebuilt workflow templates, you can fully customize them or build new ones from scratch using our no-code workflow builder. Enterprise customers get access to custom workflow development support.",
  },
  {
    q: "What support options are available?",
    a: "Starter plans include email support. Pro plans get priority support with faster response times. Business plans come with a dedicated Customer Success Manager. Enterprise plans include custom SLAs, 24/7 support, and an onboarding team.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every paid plan comes with a 14-day free trial. No credit card required to start. You can also book a live demo with our team to see Saby AI in action for your specific use case.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-3.5 py-1 text-xs font-semibold text-gray-600 bg-gray-50 mb-5">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 text-base">
            Everything you need to know about Saby AI.{" "}
            <a href="#" className="text-black font-semibold underline underline-offset-2">
              Reach out
            </a>{" "}
            if you have more questions.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? "border-black/10 bg-gray-50" : "border-black/[0.06] bg-white"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm text-black pr-4">{faq.q}</span>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-200 ${
                    open === i ? "rotate-45 bg-black border-black" : "bg-white"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 ${open === i ? "text-white" : "text-gray-500"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
