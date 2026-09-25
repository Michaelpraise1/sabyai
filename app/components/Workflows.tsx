"use client";

import { useState } from "react";

const categories = [
  {
    label: "Finance",
    workflows: [
      { name: "Payroll Processing", desc: "Automate multi-tier payroll runs with approval gates and compliance checks" },
      { name: "Expense Approvals", desc: "Route expense claims for manager approval with policy enforcement" },
      { name: "Budget Alerts", desc: "Flag overspend and trigger reallocation workflows automatically" },
      { name: "Financial Reports", desc: "Auto-generate P&L, cashflow, and departmental spend reports" },
    ],
  },
  {
    label: "Compliance",
    workflows: [
      { name: "Regulatory Checklist", desc: "Daily automated compliance checks against local and sector regulations" },
      { name: "Audit Trail Builder", desc: "Capture and archive all operational decisions for audit readiness" },
      { name: "Policy Enforcement", desc: "Detect and flag policy violations in real time across all branches" },
      { name: "KYC/AML Workflows", desc: "Streamlined identity verification and anti-money-laundering processes" },
    ],
  },
  {
    label: "Healthcare",
    workflows: [
      { name: "Patient Record Routing", desc: "Securely route patient data to the right teams on admission" },
      { name: "Staff Scheduling", desc: "Automated shift scheduling with compliance to duty-hour limits" },
      { name: "Incident Reporting", desc: "Structured digital incident capture, escalation, and resolution" },
      { name: "Inventory Reorder", desc: "Medical supply reorder triggers based on threshold monitoring" },
    ],
  },
  {
    label: "Field Ops",
    workflows: [
      { name: "Agent Task Dispatch", desc: "Assign and track field tasks with GPS confirmation" },
      { name: "Inspection Reports", desc: "Mobile-first inspection forms with photo capture and auto-routing" },
      { name: "Route Optimization", desc: "AI-optimized route plans for maximum field agent efficiency" },
      { name: "Real-time Check-in", desc: "Agent geo-tagged check-ins with automated supervisor alerts" },
    ],
  },
  {
    label: "Education",
    workflows: [
      { name: "Enrollment Automation", desc: "End-to-end student enrollment with document collection" },
      { name: "Fee Collection", desc: "Automated fee reminders, receipts, and defaulter escalation" },
      { name: "Staff Appraisals", desc: "Structured teacher performance review workflows" },
      { name: "Exam Management", desc: "Schedule, invigilate, and grade with built-in anti-fraud checks" },
    ],
  },
  {
    label: "Logistics",
    workflows: [
      { name: "Shipment Tracking", desc: "End-to-end visibility into shipment status and ETAs" },
      { name: "Driver Management", desc: "Driver assignment, performance tracking, and compliance monitoring" },
      { name: "Warehouse Ops", desc: "Inventory control, pick-pack workflows, and receiving automation" },
      { name: "Proof of Delivery", desc: "Digital POD capture with signature, photo, and geolocation" },
    ],
  },
];

export default function Workflows() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-4 bg-[#EFEFEF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-3.5 py-1 text-xs font-semibold text-gray-600 bg-white mb-5">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            Prebuilt workflows
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
            Ready-to-deploy workflows
            <br />
            <span className="text-underline-accent">for every industry</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Go live in hours, not months. Saby AI ships with prebuilt workflows for compliance, finance, field execution, and more.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto scrollbar-hide gap-2 justify-center mb-8 pb-1">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                active === i
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-gray-600 hover:text-black border border-black/10 hover:border-black/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Workflow cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories[active].workflows.map((wf) => (
            <div
              key={wf.name}
              className="bg-white rounded-2xl p-6 border border-black/[0.06] card-shadow hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-black/5 group-hover:bg-black transition-colors duration-200 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
              <h3 className="font-bold text-sm text-black mb-2">{wf.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{wf.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 border border-black/10 rounded-full px-5 py-2.5 text-sm font-semibold text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200">
            Browse all workflows
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
