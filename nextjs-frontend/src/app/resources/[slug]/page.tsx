// File Path: src/app/resources/[slug]/page.tsx

import { client } from "@/lib/sanity.client";
import { resourceBySlugQuery, resourcePathsQuery } from "@/lib/sanity.queries";
import { SanityResource } from "@/types";
import { notFound } from "next/navigation";
import Resource from "@/lib/components/global/Resource";
import { Metadata } from "next";
import { SingleSlugPageProps } from "@/types/page-props";

export async function generateStaticParams() {
  const resources = await client.fetch<{ slug: string }[]>(resourcePathsQuery);
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: SingleSlugPageProps): Promise<Metadata> {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const resource = await client.fetch<SanityResource | null>(resourceBySlugQuery, { slug: resolvedParams.slug });
  if (!resource) return {};
  return { title: resource.title, description: resource.body?.toString().substring(0, 155) || '' };
}

export default async function ResourcePage({ params }: SingleSlugPageProps) {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const resource = await client.fetch<SanityResource | null>(
    resourceBySlugQuery, 
    { slug: resolvedParams.slug }, 
    { next: { revalidate: 3600 } }
  );
  if (!resource) notFound();
  return <Resource resource={resource} />;
}