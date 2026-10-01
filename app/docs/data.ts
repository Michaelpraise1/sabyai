export interface DocArticle {
  slug: string;
  title: string;
  category: string;
  description: string;
  lastUpdated: string;
  readingTime: string;
  badge?: string;
  toc: { id: string; title: string }[];
  content: {
    overview: string;
    quickSummary?: string[];
    codeSnippets?: {
      label: string;
      language: string;
      code: string;
    }[];
    steps?: {
      step: number;
      title: string;
      description: string;
      codeSnippet?: string;
    }[];
    params?: {
      name: string;
      type: string;
      required: boolean;
      description: string;
      example?: string;
    }[];
    callout?: {
      type: "note" | "tip" | "warning";
      title: string;
      message: string;
    };
    faq?: {
      question: string;
      answer: string;
    }[];
  };
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export const sidebarSections = [
  {
    heading: "Getting Started",
    links: [
      { label: "Overview", href: "/docs/overview", slug: "overview" },
      { label: "Quickstart", href: "/docs/quickstart", slug: "quickstart", badge: "New" },
      { label: "Authentication", href: "/docs/authentication", slug: "authentication" },
      { label: "API Keys", href: "/docs/api-keys", slug: "api-keys" },
    ],
  },
  {
    heading: "Browse by Feature",
    links: [
      { label: "AI Command Layer", href: "/docs/ai-command-layer", slug: "ai-command-layer" },
      { label: "Workflow Automation", href: "/docs/workflow-automation", slug: "workflow-automation" },
      { label: "Compliance Engine", href: "/docs/compliance-engine", slug: "compliance-engine" },
      { label: "Analytics Dashboard", href: "/docs/analytics-dashboard", slug: "analytics-dashboard" },
      { label: "Multi-Branch Ops", href: "/docs/multi-branch-ops", slug: "multi-branch-ops" },
      { label: "Integrations", href: "/docs/integrations", slug: "integrations" },
      { label: "Data Ingestion", href: "/docs/data-ingestion", slug: "data-ingestion" },
      { label: "Field Agent Tools", href: "/docs/field-agent-tools", slug: "field-agent-tools" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "How-to Guides", href: "/docs/how-to-guides", slug: "how-to-guides" },
      { label: "API Reference", href: "/docs/api-reference", slug: "api-reference" },
      { label: "Launch Checklist", href: "/docs/launch-checklist", slug: "launch-checklist" },
      { label: "Best Practices", href: "/docs/best-practices", slug: "best-practices" },
    ],
  },
];

export const docArticles: Record<string, DocArticle> = {
  overview: {
    slug: "overview",
    title: "Saby AI Architecture & Overview",
    category: "Getting Started",
    description: "Understand the core concepts of Saby AI: the command layer, autonomous agents, and distributed operations mesh.",
    lastUpdated: "March 2026",
    readingTime: "4 min read",
    badge: "Core",
    toc: [
      { id: "what-is-saby", title: "What is Saby AI?" },
      { id: "core-pillars", title: "Core Architectural Pillars" },
      { id: "system-topology", title: "System Topology & Distributed Mesh" },
      { id: "getting-started", title: "Next Steps" },
    ],
    content: {
      overview:
        "Saby AI is the unified intelligence layer built specifically for distributed and multi-branch operations. Unlike traditional CRM or ERP systems that silo operational records, Saby connects field data, headquarter guidelines, and edge execution into an automated, AI-governed operating mesh.",
      quickSummary: [
        "Real-time coordination across hundreds of branches and field agents",
        "Natural-language AI command layer with role-based guardrails",
        "Continuous compliance monitoring with immutable audit logging",
        "Native connectors for WhatsApp, Slack, Zapier, and custom REST webhooks",
      ],
      codeSnippets: [
        {
          label: "TypeScript SDK",
          language: "typescript",
          code: `import { SabyClient } from "@saby/sdk";

const saby = new SabyClient({
  apiKey: process.env.SABY_API_KEY!,
  environment: "production",
});

// Query distributed branch status with natural language
const status = await saby.command.execute({
  prompt: "Summarize compliance flags across West Coast branches in the last 24h",
  scope: { region: "us-west" },
});

console.log(status.insights);`,
        },
        {
          label: "cURL",
          language: "bash",
          code: `curl -X POST https://api.saby.ai/v1/commands/execute \\
  -H "Authorization: Bearer saby_live_948a3f81..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Summarize compliance flags across West Coast branches in the last 24h",
    "scope": { "region": "us-west" }
  }'`,
        },
        {
          label: "Python",
          language: "python",
          code: `from saby import SabyClient

client = SabyClient(api_key="saby_live_948a3f81...")

response = client.commands.execute(
    prompt="Summarize compliance flags across West Coast branches in the last 24h",
    scope={"region": "us-west"}
)

print(response.insights)`,
        },
      ],
      callout: {
        type: "tip",
        title: "Enterprise Ready",
        message: "Saby AI can be deployed on Saby Cloud (multi-tenant or dedicated) or self-hosted in air-gapped on-premises environments using Docker & Kubernetes.",
      },
      faq: [
        {
          question: "Can Saby integrate with existing legacy ERPs?",
          answer: "Yes, Saby provides bidirectional webhook pipelines and CSV/database polling connectors for SAP, Salesforce, and custom SQL databases.",
        },
        {
          question: "How does Saby protect proprietary data?",
          answer: "All operational data is encrypted with customer-managed keys (AES-256) at rest and TLS 1.3 in transit. AI prompts never train public foundation models.",
        },
      ],
    },
    next: { slug: "quickstart", title: "Quickstart" },
  },

  quickstart: {
    slug: "quickstart",
    title: "Quickstart: Ingest Data & Trigger AI Agents",
    category: "Getting Started",
    description: "Get up and running with Saby AI in under 5 minutes. Ingest operational telemetry and run your first autonomous command.",
    lastUpdated: "March 2026",
    readingTime: "5 min read",
    badge: "New",
    toc: [
      { id: "prerequisites", title: "Prerequisites" },
      { id: "step-1-install", title: "1. Install the SDK" },
      { id: "step-2-init", title: "2. Initialize Saby Client" },
      { id: "step-3-ingest", title: "3. Ingest Operational Events" },
      { id: "step-4-trigger", title: "4. Trigger Autonomous Action" },
      { id: "verification", title: "Verification & Telemetry" },
    ],
    content: {
      overview:
        "This quickstart will guide you through setting up your first project with Saby AI, authenticating via API tokens, streaming your first branch event, and receiving autonomous AI recommendations.",
      steps: [
        {
          step: 1,
          title: "Install the Saby SDK",
          description: "Install the official client package into your project using npm, pnpm, or yarn.",
          codeSnippet: `npm install @saby/sdk`,
        },
        {
          step: 2,
          title: "Set your API key in environment variables",
          description: "Retrieve your key from the Saby Cloud Console (Settings > API Keys) and configure your local environment.",
          codeSnippet: `export SABY_API_KEY="saby_live_839f91a27e02b3"
export SABY_ORG_ID="org_enterprise_4910"`,
        },
        {
          step: 3,
          title: "Stream an operational event",
          description: "Send branch status or field reports to the Saby Ingestion API. The compliance engine parses records in real-time.",
          codeSnippet: `import { SabyClient } from "@saby/sdk";

const saby = new SabyClient();

await saby.events.send({
  branchId: "branch_082_dallas",
  category: "inventory",
  action: "stock_reconciliation",
  payload: {
    sku: "MED-4912",
    expectedQty: 500,
    countedQty: 488,
    discrepancyRate: 0.024,
  },
});`,
        },
        {
          step: 4,
          title: "Listen for autonomous AI resolution",
          description: "Subscribe to automated action dispatches or approve recommendations generated by the command layer.",
          codeSnippet: `saby.events.on("anomaly.detected", (anomaly) => {
  console.log("AI Flagged Anomaly:", anomaly.summary);
  console.log("Recommended Action:", anomaly.suggestedResolution);
});`,
        },
      ],
      callout: {
        type: "note",
        title: "Test Sandbox Available",
        message: "You can use test credentials (`saby_test_demo123`) to simulate branch streams without affecting production audit logs.",
      },
    },
    prev: { slug: "overview", title: "Overview" },
    next: { slug: "authentication", title: "Authentication" },
  },

  authentication: {
    slug: "authentication",
    title: "Authentication & Authorization",
    category: "Getting Started",
    description: "Learn how to authenticate requests to the Saby AI REST API using Bearer tokens, granular scopes, and SSO integrations.",
    lastUpdated: "March 2026",
    readingTime: "3 min read",
    badge: "Core",
    toc: [
      { id: "bearer-token", title: "Bearer Token Authentication" },
      { id: "api-key-types", title: "Live vs Test Keys" },
      { id: "scopes", title: "Role-Based Scopes" },
      { id: "sso-saml", title: "Enterprise SSO & SAML" },
    ],
    content: {
      overview:
        "Every request to Saby AI APIs must include an Authorization header with a valid API key or session JWT. Unauthenticated requests return a `401 Unauthorized` response.",
      codeSnippets: [
        {
          label: "HTTP Header Example",
          language: "http",
          code: `GET /v1/organizations/me HTTP/1.1
Host: api.saby.ai
Authorization: Bearer saby_live_a1b2c3d4e5f6...
Content-Type: application/json`,
        },
        {
          label: "Node.js",
          language: "javascript",
          code: `const response = await fetch("https://api.saby.ai/v1/branches", {
  headers: {
    "Authorization": \`Bearer \${process.env.SABY_API_KEY}\`,
    "Content-Type": "application/json",
  },
});
const data = await response.json();`,
        },
      ],
      params: [
        {
          name: "saby_live_*",
          type: "string",
          required: true,
          description: "Production key with full access to live operational database.",
          example: "saby_live_948a3f81...",
        },
        {
          name: "saby_test_*",
          type: "string",
          required: false,
          description: "Sandbox key with isolated mock database for CI/CD and staging tests.",
          example: "saby_test_88194a...",
        },
        {
          name: "saby_agent_*",
          type: "string",
          required: false,
          description: "Scoped token assigned to field mobile clients with offline caching rights.",
          example: "saby_agent_m019...",
        },
      ],
      callout: {
        type: "warning",
        title: "Keep Keys Confidential",
        message: "Never commit your live API keys to client-side bundles or public GitHub repositories. Use environment variables or AWS Secrets Manager.",
      },
    },
    prev: { slug: "quickstart", title: "Quickstart" },
    next: { slug: "api-keys", title: "API Keys" },
  },

  "api-keys": {
    slug: "api-keys",
    title: "API Keys & Access Management",
    category: "Getting Started",
    description: "Create, rotate, and manage API keys with granular permissions, IP whitelists, and automatic expiration.",
    lastUpdated: "March 2026",
    readingTime: "4 min read",
    toc: [
      { id: "generating-keys", title: "Generating a Key" },
      { id: "key-rotation", title: "Zero-Downtime Key Rotation" },
      { id: "ip-whitelisting", title: "IP Whitelisting & CIDR" },
      { id: "rate-limits", title: "Rate Limits by Tier" },
    ],
    content: {
      overview:
        "Manage programmatic access to your Saby command center. Keys can be scoped to specific branches, departments, or individual operational workflows.",
      params: [
        {
          name: "name",
          type: "string",
          required: true,
          description: "Human-readable label for identifying the integration.",
          example: "Warehouse IoT Ingestion Pipeline",
        },
        {
          name: "scopes",
          type: "string[]",
          required: true,
          description: "Array of allowed permissions (e.g. `events:write`, `analytics:read`).",
          example: '["events:write", "agents:run"]',
        },
        {
          name: "ip_allowlist",
          type: "string[]",
          required: false,
          description: "Array of allowed IPv4/IPv6 CIDR blocks.",
          example: '["192.168.1.0/24", "10.0.0.1/32"]',
        },
        {
          name: "expires_in_days",
          type: "number",
          required: false,
          description: "Automatic key revocation period (default: 365 days).",
          example: "90",
        },
      ],
      callout: {
        type: "tip",
        title: "Key Rotation Policy",
        message: "Saby supports dual-key overlapping windows so you can rotate keys in production without downtime.",
      },
    },
    prev: { slug: "authentication", title: "Authentication" },
    next: { slug: "ai-command-layer", title: "AI Command Layer" },
  },

  "ai-command-layer": {
    slug: "ai-command-layer",
    title: "AI Command Layer",
    category: "Browse by Feature",
    description: "Natural-language command interface for orchestrating multi-branch operations and intelligent decision-making.",
    lastUpdated: "March 2026",
    readingTime: "6 min read",
    badge: "Core",
    toc: [
      { id: "overview", title: "What is the Command Layer?" },
      { id: "nl-syntax", title: "Natural Language Prompting" },
      { id: "agentic-actions", title: "Agentic Action Execution" },
      { id: "human-in-the-loop", title: "Human-in-the-Loop Safeguards" },
    ],
    content: {
      overview:
        "The AI Command Layer translates natural language instructions from operational leads into validated distributed actions. Whether dispatching maintenance teams, reconciling discrepancies, or drafting regional shift schedules, Saby enforces safety constraints before committing changes.",
      codeSnippets: [
        {
          label: "Execute Command",
          language: "typescript",
          code: `const result = await saby.command.execute({
  prompt: "Flag all branches with inventory variance above 5% and notify regional leads",
  dryRun: false,
  requireApproval: true,
});

console.log("Action Plan ID:", result.planId);
console.log("Impacted Branches:", result.affectedEntities.length);`,
        },
      ],
      steps: [
        {
          step: 1,
          title: "Intent Parsing & Entity Extraction",
          description: "Saby extracts targets, thresholds, and operational constraints from your command.",
        },
        {
          step: 2,
          title: "Safety & Compliance Boundary Check",
          description: "The action plan is cross-checked against organizational compliance policies and permissions.",
        },
        {
          step: 3,
          title: "Execution or Human Approval",
          description: "If the action exceeds standard risk thresholds, it requests approval from designated branch admins.",
        },
      ],
      callout: {
        type: "note",
        title: "Configurable Approval Gates",
        message: "Define custom spend, inventory, or personnel thresholds that require multi-party sign-off via Slack or SMS.",
      },
    },
    prev: { slug: "api-keys", title: "API Keys" },
    next: { slug: "workflow-automation", title: "Workflow Automation" },
  },

  "workflow-automation": {
    slug: "workflow-automation",
    title: "Workflow Automation",
    category: "Browse by Feature",
    description: "Build, deploy, and monitor automated workflows across departments with the visual pipeline builder.",
    lastUpdated: "March 2026",
    readingTime: "5 min read",
    badge: "Core",
    toc: [
      { id: "triggers", title: "Event Triggers" },
      { id: "conditional-logic", title: "Conditional Branches" },
      { id: "ai-nodes", title: "AI Decision Nodes" },
      { id: "monitoring", title: "Live Execution Monitoring" },
    ],
    content: {
      overview:
        "Automate repetitive operational procedures across your distributed enterprise. Combine event listeners, multi-step business logic, automated document parsing, and third-party notifications into reliable DAG pipelines.",
      quickSummary: [
        "Visual drag-and-drop workflow canvas",
        "Deterministic retry logic with exponential backoff",
        "Integrated OCR and structured document extraction",
        "Rollback and compensatory transaction support",
      ],
      callout: {
        type: "tip",
        title: "Pre-Built Templates",
        message: "Start with our ready-to-use templates for Vendor Onboarding, Shift Reconciliation, and Quality Inspection.",
      },
    },
    prev: { slug: "ai-command-layer", title: "AI Command Layer" },
    next: { slug: "compliance-engine", title: "Compliance Engine" },
  },

  "compliance-engine": {
    slug: "compliance-engine",
    title: "Compliance Engine & Audit Trails",
    category: "Browse by Feature",
    description: "Automated audit trails, risk scoring, and regulatory compliance monitoring across all operational branches.",
    lastUpdated: "March 2026",
    readingTime: "5 min read",
    badge: "Enterprise",
    toc: [
      { id: "automated-audits", title: "Automated Audit Trails" },
      { id: "risk-scoring", title: "Dynamic Risk Scoring" },
      { id: "regulatory-frameworks", title: "Supported Frameworks" },
      { id: "exporting-reports", title: "Exporting Formal Reports" },
    ],
    content: {
      overview:
        "The Compliance Engine continuously monitors distributed events, detects policy violations, and records cryptographic audit logs. Maintain readiness for SOC 2 Type II, ISO 27001, HIPAA, and regional labor regulations.",
      codeSnippets: [
        {
          label: "Query Audit Log",
          language: "typescript",
          code: `const auditTrail = await saby.compliance.getAuditLogs({
  branchId: "branch_082_dallas",
  startDate: "2026-03-01T00:00:00Z",
  severity: "high",
});

console.log(\`Found \${auditTrail.total} incidents requiring review.\`);`,
        },
      ],
      callout: {
        type: "warning",
        title: "Immutable Hash Chains",
        message: "Audit logs are written to append-only tamper-evident hash stores. Deleted or modified records produce cryptographic verification alerts.",
      },
    },
    prev: { slug: "workflow-automation", title: "Workflow Automation" },
    next: { slug: "analytics-dashboard", title: "Analytics Dashboard" },
  },

  "analytics-dashboard": {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard & Forecasting",
    category: "Browse by Feature",
    description: "Real-time executive analytics with customizable KPIs, operational forecasting, and anomaly detection.",
    lastUpdated: "March 2026",
    readingTime: "4 min read",
    badge: "Core",
    toc: [
      { id: "real-time-metrics", title: "Real-Time Operational KPIs" },
      { id: "ai-forecasting", title: "Predictive Forecasting" },
      { id: "custom-dashboards", title: "Building Custom Views" },
      { id: "alerts-thresholds", title: "Threshold-Based Alerts" },
    ],
    content: {
      overview:
        "Empower executives and branch supervisors with live visibility into throughput, efficiency, bottlenecks, and financial velocity across all sites.",
      callout: {
        type: "note",
        title: "Sub-Second Ingestion Latency",
        message: "Metrics update within 350ms of event emission from edge devices and point-of-sale terminals.",
      },
    },
    prev: { slug: "compliance-engine", title: "Compliance Engine" },
    next: { slug: "multi-branch-ops", title: "Multi-Branch Ops" },
  },

  "multi-branch-ops": {
    slug: "multi-branch-ops",
    title: "Multi-Branch Operations",
    category: "Browse by Feature",
    description: "Centralized command center for managing distributed teams, regional branches, and field agents at scale.",
    lastUpdated: "March 2026",
    readingTime: "5 min read",
    badge: "Enterprise",
    toc: [
      { id: "hierarchies", title: "Branch Hierarchies & Regions" },
      { id: "field-management", title: "Field Agent Coordination" },
      { id: "localized-policies", title: "Regional Policy Overrides" },
    ],
    content: {
      overview:
        "Organize your organization into regional trees with localized managers, custom currencies, time zones, and compliance mandates, while retaining centralized executive reporting.",
    },
    prev: { slug: "analytics-dashboard", title: "Analytics Dashboard" },
    next: { slug: "integrations", title: "Integrations" },
  },

  integrations: {
    slug: "integrations",
    title: "Integrations & Connectors",
    category: "Browse by Feature",
    description: "Connect with WhatsApp, Slack, Notion, Google Workspace, Zapier, and 50+ enterprise systems.",
    lastUpdated: "March 2026",
    readingTime: "4 min read",
    badge: "API",
    toc: [
      { id: "supported-apps", title: "Supported Connectors" },
      { id: "whatsapp-slack", title: "ChatOps: WhatsApp & Slack" },
      { id: "webhooks", title: "Custom Webhooks" },
      { id: "zapier-make", title: "No-Code Automation" },
    ],
    content: {
      overview:
        "Connect Saby AI directly to communication tools your frontline teams already use every day. Field agents can submit tickets or verify tasks simply by texting a WhatsApp AI bot.",
      codeSnippets: [
        {
          label: "Webhook Registration",
          language: "json",
          code: `{
  "target_url": "https://ops.yourcompany.com/webhooks/saby",
  "events": [
    "compliance.violation",
    "command.approval_required",
    "branch.status_changed"
  ],
  "secret": "whsec_9918a38..."
}`,
        },
      ],
      callout: {
        type: "tip",
        title: "Two-Way ChatOps",
        message: "Supervisors can approve inventory adjustments directly from a Slack interactive message button.",
      },
    },
    prev: { slug: "multi-branch-ops", title: "Multi-Branch Ops" },
    next: { slug: "data-ingestion", title: "Data Ingestion" },
  },

  "data-ingestion": {
    slug: "data-ingestion",
    title: "Data Ingestion Quickstart",
    category: "Browse by Feature",
    description: "Connect forms, APIs, and storage in minutes with guided setup and production-ready defaults.",
    lastUpdated: "March 2026",
    readingTime: "5 min read",
    badge: "Cloud",
    toc: [
      { id: "rest-ingest", title: "REST Ingest API" },
      { id: "batch-upload", title: "Batch CSV / S3 Uploads" },
      { id: "event-validation", title: "JSON Schema Validation" },
    ],
    content: {
      overview:
        "Ingest millions of operational records daily. Saby automatically deduplicates, validates schemas, extracts geo-coordinates, and indexes records for sub-second retrieval.",
    },
    prev: { slug: "integrations", title: "Integrations" },
    next: { slug: "field-agent-tools", title: "Field Agent Tools" },
  },

  "field-agent-tools": {
    slug: "field-agent-tools",
    title: "Field Agent Tools & Mobile Sync",
    category: "Browse by Feature",
    description: "Mobile-optimized tools for field teams with offline support, GPS tracking, and task management.",
    lastUpdated: "March 2026",
    readingTime: "4 min read",
    badge: "Mobile",
    toc: [
      { id: "offline-sync", title: "Offline-First Synchronization" },
      { id: "geolocation", title: "Geofencing & Verification" },
      { id: "mobile-pwa", title: "PWA & Native App Support" },
    ],
    content: {
      overview:
        "Designed for low-connectivity environments such as warehouses, remote construction sites, and agricultural facilities. Tasks and checklist progress sync automatically when connection resumes.",
    },
    prev: { slug: "data-ingestion", title: "Data Ingestion" },
    next: { slug: "how-to-guides", title: "How-to Guides" },
  },

  "how-to-guides": {
    slug: "how-to-guides",
    title: "How-to Guides & Playbooks",
    category: "Resources",
    description: "Step-by-step playbooks for implementation teams and operational architects.",
    lastUpdated: "March 2026",
    readingTime: "7 min read",
    toc: [
      { id: "playbook-1", title: "Setting up a 50-branch retail network" },
      { id: "playbook-2", title: "Automating inventory audits with camera OCR" },
      { id: "playbook-3", title: "Configuring Slack alert escalation chains" },
    ],
    content: {
      overview:
        "Real-world guides curated by Saby solutions engineers. Follow practical walkthroughs from initial tenant provisioning to frontline staff training.",
    },
    prev: { slug: "field-agent-tools", title: "Field Agent Tools" },
    next: { slug: "api-reference", title: "API Reference" },
  },

  "api-reference": {
    slug: "api-reference",
    title: "REST API Reference",
    category: "Resources",
    description: "Complete specification of Saby AI endpoints, parameters, schemas, and error codes.",
    lastUpdated: "March 2026",
    readingTime: "8 min read",
    badge: "v2.x",
    toc: [
      { id: "base-url", title: "Base URL & Versioning" },
      { id: "endpoints-commands", title: "Commands API (`/v1/commands`)" },
      { id: "endpoints-branches", title: "Branches API (`/v1/branches`)" },
      { id: "endpoints-compliance", title: "Compliance API (`/v1/compliance`)" },
      { id: "error-handling", title: "Error Codes & Responses" },
    ],
    content: {
      overview:
        "The Saby REST API is organized around REST resources. All requests require HTTPS, return standard JSON envelopes, and adhere to HTTP status code conventions.",
      params: [
        {
          name: "POST /v1/commands/execute",
          type: "endpoint",
          required: true,
          description: "Runs an AI natural-language operational instruction.",
          example: '{ "prompt": "Audit branch #42" }',
        },
        {
          name: "GET /v1/branches",
          type: "endpoint",
          required: false,
          description: "List all branches with optional region and status filters.",
          example: "?region=us-west&status=active",
        },
        {
          name: "POST /v1/events/batch",
          type: "endpoint",
          required: true,
          description: "Ingest up to 1,000 events in a single HTTP payload.",
          example: '{ "events": [...] }',
        },
        {
          name: "GET /v1/compliance/reports",
          type: "endpoint",
          required: false,
          description: "Download cryptographic audit records and compliance summaries.",
          example: "?period=2026-Q1",
        },
      ],
      codeSnippets: [
        {
          label: "Standard Error Response",
          language: "json",
          code: `{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Too many requests. Limit: 1000 req/min for Tier Enterprise.",
    "retry_after_seconds": 12,
    "request_id": "req_88192a01f"
  }
}`,
        },
      ],
      callout: {
        type: "note",
        title: "OpenAPI Specification",
        message: "You can download our complete OpenAPI 3.1 schema directly at `https://api.saby.ai/openapi.json` for automated client generation.",
      },
    },
    prev: { slug: "how-to-guides", title: "How-to Guides" },
    next: { slug: "launch-checklist", title: "Launch Checklist" },
  },

  "launch-checklist": {
    slug: "launch-checklist",
    title: "Production Launch Checklist",
    category: "Resources",
    description: "Pre-launch and post-launch checklist for reliability, security, and operational readiness.",
    lastUpdated: "March 2026",
    readingTime: "5 min read",
    toc: [
      { id: "security-checklist", title: "1. Security & Access Control" },
      { id: "rate-limits-checklist", title: "2. Redundancy & Failover" },
      { id: "monitoring-checklist", title: "3. Alert Routing & On-Call" },
      { id: "training-checklist", title: "4. Staff Onboarding" },
    ],
    content: {
      overview:
        "Before deploying Saby AI to critical multi-branch operations, ensure all checklist items are signed off by your security and operations leads.",
      quickSummary: [
        "Rotate all development API keys and enable IP CIDR whitelisting",
        "Configure automated Slack/PagerDuty escalation channels",
        "Perform dry-run emergency stop drill for autonomous AI commands",
        "Verify webhook endpoint signature verification (HMAC-SHA256)",
      ],
      callout: {
        type: "tip",
        title: "Dedicated Solutions Architect",
        message: "Enterprise tier customers can request a complimentary pre-launch architecture review with a Saby Solutions Architect.",
      },
    },
    prev: { slug: "api-reference", title: "API Reference" },
    next: { slug: "best-practices", title: "Best Practices" },
  },

  "best-practices": {
    slug: "best-practices",
    title: "Best Practices & Governance",
    category: "Resources",
    description: "Design principles, security guidelines, and reporting recommendations for scalable operations.",
    lastUpdated: "March 2026",
    readingTime: "6 min read",
    toc: [
      { id: "least-privilege", title: "Principle of Least Privilege" },
      { id: "prompt-governance", title: "AI Prompt Governance" },
      { id: "latency-optimization", title: "Minimizing Ingestion Latency" },
      { id: "retention-policies", title: "Data Retention & Archival" },
    ],
    content: {
      overview:
        "Guidelines to ensure high reliability, zero data leakage, and low latency as your operational volume scales from 10 to 10,000 distributed sites.",
      faq: [
        {
          question: "How should we handle offline branch network drops?",
          answer: "Enable local SQLite buffering in the Saby Field Agent SDK. Events queue locally and drain with exponential backoff once upstream connectivity is restored.",
        },
        {
          question: "How do we audit commands executed by AI agents?",
          answer: "Every AI execution logs the prompt text, model version, retrieved context, generated code/action, and the approving user ID into an immutable audit table.",
        },
      ],
      callout: {
        type: "note",
        title: "Zero Trust Architecture",
        message: "Treat every branch node as untrusted. Always enforce mutual TLS and cryptographic signature verification on field payloads.",
      },
    },
    prev: { slug: "launch-checklist", title: "Launch Checklist" },
  },
};
