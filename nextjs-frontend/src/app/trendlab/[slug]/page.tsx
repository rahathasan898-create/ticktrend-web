// File Path: src/app/trendlab/[slug]/page.tsx
import { client } from "@/lib/sanity.client";
import { trendBySlugQuery, trendPathsQuery } from "@/lib/sanity.queries";
import { SanityPost } from "@/types";
import { notFound } from "next/navigation";
import Post from "@/lib/components/global/Post";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const trends = await client.fetch<{ slug: string }[]>(trendPathsQuery);
  return trends.map((trend) => ({ slug: trend.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const trend = await client.fetch<SanityPost | null>(trendBySlugQuery, { slug: params.slug });
  if (!trend) return {};
  return { title: trend.title, description: trend.excerpt };
}

export default async function TrendPage({ params }: Props) {
  const trend = await client.fetch<SanityPost | null>(trendBySlugQuery, { slug: params.slug }, { next: { revalidate: 3600 } });
  if (!trend) notFound();
  return <Post post={trend} />;
}
