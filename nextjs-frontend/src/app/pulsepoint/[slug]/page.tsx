// File Path: src/app/pulsepoint/[slug]/page.tsx

import { client } from "@/lib/sanity.client";
import { postBySlugQuery, postPathsQuery } from "@/lib/sanity.queries";
import { SanityPost } from "@/types";
import { notFound } from "next/navigation";
import Post from "@/lib/components/global/Post";
import { Metadata } from "next";

// FIX: Using a reusable interface for page props for better readability.
interface PageProps {
  params: {
    slug: string;
  };
}

// This function generates the static paths for each post at build time.
export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(postPathsQuery);
  return posts.map((post) => ({ slug: post.slug }));
}

// This function generates the metadata for the page head.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
export default async function PostPage({ params }: PageProps) {
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
