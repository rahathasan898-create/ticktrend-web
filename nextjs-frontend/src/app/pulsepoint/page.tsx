// File Path: src/app/pulsepoint/[slug]/page.tsx
// This version uses the correct query name and function signature.

import { client } from "@/lib/sanity.client";
import { postBySlugQuery, postPathsQuery } from "@/lib/sanity.queries";
import { SanityPost } from "@/types";
import { notFound } from "next/navigation";
import Post from "@/lib/components/global/Post";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(postPathsQuery);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch<SanityPost | null>(postBySlugQuery, { slug: params.slug });
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const post = await client.fetch<SanityPost | null>(
    postBySlugQuery,
    { slug: params.slug },
    { next: { revalidate: 3600 } }
  );
  if (!post) notFound();
  return <Post post={post} />;
}
