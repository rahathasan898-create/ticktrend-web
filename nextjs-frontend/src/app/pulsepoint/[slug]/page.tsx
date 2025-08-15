// File Path: src/app/pulsepoint/[slug]/page.tsx

import { client } from "@/lib/sanity.client";
import { postBySlugQuery, postPathsQuery } from "@/lib/sanity.queries";
import { SanityPost } from "@/types";
import { notFound } from "next/navigation";
import Post from "@/lib/components/global/Post";
import { Metadata } from "next";
// FIX: Correctly import the reusable type from its dedicated file.
import { SingleSlugPageProps } from "@/types/page-props";

// This function generates the static paths for each post at build time.
export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(postPathsQuery);
  return posts.map((post) => ({ slug: post.slug }));
}

// This function generates the metadata for the page head.
// FIX: Use the imported SingleSlugPageProps type instead of a local definition.
export async function generateMetadata({ params }: SingleSlugPageProps): Promise<Metadata> {
  const post = await client.fetch<SanityPost | null>(postBySlugQuery, { slug: params.slug });
  
  if (!post) {
    return {};
  }
  
  return { 
    title: post.title, 
    description: post.excerpt 
  };
}

// This is the main component for the page.
// FIX: Use the imported SingleSlugPageProps type instead of a local definition.
export default async function PostPage({ params }: SingleSlugPageProps) {
  const post = await client.fetch<SanityPost | null>(
    postBySlugQuery, 
    { slug: params.slug }, 
    { next: { revalidate: 3600 } } // Revalidate the data every hour
  );
  
  if (!post) {
    notFound();
  }
  
  return <Post post={post} />;
}