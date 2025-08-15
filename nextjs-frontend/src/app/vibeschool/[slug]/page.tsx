// File Path: src/app/trendlab/[slug]/page.tsx

import { client } from "@/lib/sanity.client";
import { trendBySlugQuery, trendPathsQuery } from "@/lib/sanity.queries";
import { SanityPost } from "@/types";
import { notFound } from "next/navigation";
import Post from "@/lib/components/global/Post";
import { Metadata } from "next";
import { SingleSlugPageProps } from "@/types/page-props";

export async function generateStaticParams() {
  const trends = await client.fetch<{ slug: string }[]>(trendPathsQuery);
  return trends.map((trend) => ({ slug: trend.slug }));
}

export async function generateMetadata({ params }: SingleSlugPageProps): Promise<Metadata> {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const trend = await client.fetch<SanityPost | null>(trendBySlugQuery, { slug: resolvedParams.slug });
  if (!trend) return {};
  return { title: trend.title, description: trend.excerpt };
}

export default async function TrendPage({ params }: SingleSlugPageProps) {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const trend = await client.fetch<SanityPost | null>(
    trendBySlugQuery,
    { slug: resolvedParams.slug },
    { next: { revalidate: 3600 } }
  );
  if (!trend) notFound();
  return <Post post={trend} />;
}