const features = [
  {
    badge: "Core",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "AI Command Layer",
    desc: "One intelligent interface to run your entire organization. Issue commands, receive insights, and automate decisions in plain language.",
    link: "Learn more",
  },
  {
    badge: "Compliance",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Automated Compliance Tracking",
    desc: "Continuously monitor regulatory requirements, flag violations before they escalate, and generate audit-ready reports automatically.",
    link: "Learn more",
  },
  {
    badge: "Finance",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Finance & Payroll Automation",
    desc: "Automate payroll processing, expense approvals, budget tracking, and financial reporting across all branches and departments.",
    link: "Learn more",
  },
  {
    badge: "Field Ops",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Field Operations Management",
    desc: "Track field agents, manage tasks, capture reports from remote locations, and coordinate across multiple sites in real time.",
    link: "Learn more",
  },
  {
    badge: "Analytics",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Executive Intelligence Dashboard",
    desc: "Real-time dashboards giving executives a bird's-eye view of operations, performance trends, and predictive alerts across the organization.",
    link: "Learn more",
  },
  {
    badge: "Multi-channel",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Multi-channel Communication",
    desc: "Reach your team through WhatsApp, Telegram, email, SMS, or in-app — all routed through one unified Saby AI communication hub.",
    link: "Learn more",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 bg-[#EFEFEF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-3.5 py-1 text-xs font-semibold text-gray-600 bg-white mb-5">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            Platform capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
            Every tool your org needs,
            <br />
            <span className="text-underline-accent">in one place</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Saby AI consolidates complex operational workflows into a single, intelligent platform — so nothing slips through the cracks.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-3xl p-7 card-shadow border border-black/[0.04] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group flex flex-col"
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold border border-black/10 rounded-md px-2 py-0.5 text-gray-600 bg-gray-50">
                  {f.badge}
                </span>
              </div>
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-4 text-gray-700 group-hover:bg-black group-hover:text-white transition-all duration-200">
                {f.icon}
              </div>
              {/* Content */}
              <h3 className="text-base font-bold text-black mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{f.desc}</p>
              {/* Link */}
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-2.5 transition-all duration-150"
              >
                {f.link}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
