// File Path: src/app/resources/[slug]/page.tsx
import { client } from "@/lib/sanity.client";
import { resourceBySlugQuery, resourcePathsQuery } from "@/lib/sanity.queries";
import { SanityResource } from "@/types";
import { notFound } from "next/navigation";
import Resource from "@/lib/components/global/Resource";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const resources = await client.fetch<{ slug: string }[]>(resourcePathsQuery);
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resource = await client.fetch<SanityResource | null>(resourceBySlugQuery, { slug: params.slug });
  if (!resource) return {};
  return { title: resource.title, description: resource.body?.toString().substring(0, 155) || '' };
}

export default async function ResourcePage({ params }: Props) {
  const resource = await client.fetch<SanityResource | null>(resourceBySlugQuery, { slug: params.slug }, { next: { revalidate: 3600 } });
  if (!resource) notFound();
  return <Resource resource={resource} />;
}
