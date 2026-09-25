const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/mo",
    desc: "Perfect for small teams getting started with operational automation.",
    badge: null,
    cta: "Start free trial",
    ctaStyle: "border border-black/10 text-black hover:bg-black hover:text-white",
    features: [
      "Up to 5 users",
      "3 prebuilt workflows",
      "WhatsApp & Email integration",
      "Basic analytics dashboard",
      "1 branch / location",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    desc: "Ideal for growing organizations that need more power and flexibility.",
    badge: "Most popular",
    cta: "Start free trial",
    ctaStyle: "bg-black text-white hover:bg-gray-900",
    features: [
      "Up to 25 users",
      "Unlimited prebuilt workflows",
      "All channel integrations",
      "Advanced analytics & reports",
      "Up to 10 branches",
      "AI command layer access",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "$149",
    period: "/mo",
    desc: "Built for organizations with complex operations across many locations.",
    badge: null,
    cta: "Start free trial",
    ctaStyle: "border border-black/10 text-black hover:bg-black hover:text-white",
    features: [
      "Up to 100 users",
      "Custom workflow builder",
      "Compliance automation suite",
      "Executive intelligence dashboard",
      "Up to 50 branches",
      "API & webhook access",
      "Dedicated CSM",
      "SLA guarantees",
    ],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored for large enterprises with security, compliance, and scale requirements.",
    badge: null,
    cta: "Contact sales",
    ctaStyle: "border border-black/10 text-black hover:bg-black hover:text-white",
    features: [
      "Unlimited users",
      "Custom integrations",
      "White-label options",
      "On-premise deployment",
      "Unlimited branches",
      "SSO / SAML",
      "Custom SLA & uptime",
      "Enterprise support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-[#EFEFEF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-3.5 py-1 text-xs font-semibold text-gray-600 bg-white mb-5">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            No hidden fees. Start free, scale as you grow. Every plan includes a 14-day trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-black text-white shadow-2xl shadow-black/20 scale-[1.02]"
                  : "bg-white text-black border border-black/[0.06] card-shadow hover:shadow-md"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-bold px-3 py-1 rounded-full border border-black/10 shadow-sm whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${plan.highlight ? "text-gray-400" : "text-gray-400"}`}>
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span className={`text-sm mb-1.5 ${plan.highlight ? "text-gray-400" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Desc */}
              <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                {plan.desc}
              </p>

              {/* CTA */}
              <a
                href="#"
                className={`block text-center py-3 rounded-full text-sm font-semibold transition-all duration-200 mb-6 ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-gray-100"
                    : plan.ctaStyle
                }`}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.highlight ? "bg-white/10" : "bg-black/5"}`} />

              {/* Features */}
              <ul className="flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-green-400" : "text-green-500"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={plan.highlight ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          All prices are in USD. Annual billing saves up to 20%.{" "}
          <a href="#" className="text-black font-medium underline underline-offset-2">
            Compare plans →
          </a>
        </p>
      </div>
    </section>
  );
}
