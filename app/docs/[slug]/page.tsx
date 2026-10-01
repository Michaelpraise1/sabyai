import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { docArticles } from "../data";
import DocArticleClient from "../DocArticleClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(docArticles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = docArticles[slug];

  if (!article) {
    return {
      title: "Document Not Found — Saby AI Docs",
    };
  }

  return {
    title: `${article.title} — Saby AI Docs`,
    description: article.description,
    openGraph: {
      title: `${article.title} — Saby AI Docs`,
      description: article.description,
      type: "article",
    },
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const article = docArticles[slug];

  if (!article) {
    notFound();
  }

  return <DocArticleClient article={article} />;
}
