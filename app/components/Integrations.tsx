const integrations = [
  { name: "WhatsApp", color: "#25D366", abbr: "WA", desc: "Two-way messaging with your team" },
  { name: "Telegram", color: "#2AABEE", abbr: "TG", desc: "Bot-powered workflow triggers" },
  { name: "Slack", color: "#4A154B", abbr: "SL", desc: "Notifications and approvals" },
  { name: "Google Workspace", color: "#4285F4", abbr: "GW", desc: "Docs, Sheets, Calendar sync" },
  { name: "Microsoft 365", color: "#D83B01", abbr: "MS", desc: "Teams, Outlook, SharePoint" },
  { name: "Zapier", color: "#FF4A00", abbr: "ZP", desc: "Connect 5,000+ apps" },
  { name: "Webhooks", color: "#6366F1", abbr: "WH", desc: "Custom event triggers" },
  { name: "HubSpot", color: "#FF7A59", abbr: "HS", desc: "CRM and pipeline data" },
  { name: "QuickBooks", color: "#2CA01C", abbr: "QB", desc: "Financial data sync" },
  { name: "Notion", color: "#000000", abbr: "NT", desc: "Knowledge base integration" },
  { name: "Airtable", color: "#FCB400", abbr: "AT", desc: "Database workflow triggers" },
  { name: "REST API", color: "#374151", abbr: "API", desc: "Custom integrations" },
];

export default function Integrations() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-3.5 py-1 text-xs font-semibold text-gray-600 bg-gray-50 mb-5">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Integrations
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Connect every operational
              <br />
              signal in one command layer
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-xs md:text-right leading-relaxed">
            Saby AI plugs into the tools your team already uses — no migration required.
          </p>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group bg-gray-50 hover:bg-white border border-black/[0.06] hover:border-black/10 rounded-2xl p-5 flex items-start gap-3 transition-all duration-200 hover:card-shadow cursor-pointer hover:-translate-y-0.5"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 shadow-sm"
                style={{ backgroundColor: integration.color }}
              >
                {integration.abbr}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-black truncate">{integration.name}</p>
                <p className="text-xs text-gray-400 leading-snug mt-0.5">{integration.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-black/10 rounded-full px-5 py-2.5 text-sm font-semibold text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
          >
            View all integrations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
