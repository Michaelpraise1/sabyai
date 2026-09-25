import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saby AI — The Intelligence Layer for Distributed Operations",
  description:
    "Saby AI is the command layer that empowers distributed organizations to automate workflows, ensure compliance, and operate at scale — powered by AI.",
  keywords: ["AI operations", "workflow automation", "distributed teams", "compliance", "Saby AI"],
  openGraph: {
    title: "Saby AI — Intelligence for Distributed Operations",
    description:
      "Automate workflows, ensure compliance, and scale field operations with Saby AI's intelligent command layer.",
    type: "website",
    url: "https://saby.ai",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
