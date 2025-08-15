// File Path: src/app/pulsepoint/[slug]/page.tsx
// This is the complete and verified code for the single post page.

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

// This function generates the static paths for each post at build time.
export async function generateStaticParams() {
  // Fetch only the slugs for all posts
  const posts = await client.fetch<{ slug: string }[]>(postPathsQuery);
  // Map the slugs to the format Next.js expects
  return posts.map((post) => ({ slug: post.slug }));
}

// --- FIX: Changed the function signature to avoid the TypeScript error ---
// This function generates the metadata (like title and description) for the page head.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch<SanityPost | null>(postBySlugQuery, { slug: params.slug });
  
  // If no post is found, return empty metadata.
  if (!post) {
    return {};
  }
  
  return { 
    title: post.title, 
    description: post.excerpt 
  };
}

// --- FIX: Changed the function signature to avoid the TypeScript error ---
// This is the main component for the page.
export default async function PostPage({ params }: Props) {
  // Fetch the full data for the specific post using the slug from the URL.
  const post = await client.fetch<SanityPost | null>(
    postBySlugQuery, 
    { slug: params.slug }, 
    { next: { revalidate: 3600 } } // Revalidate the data every hour
  );
  
  // If no post is found for the given slug, show the 404 page.
  if (!post) {
    notFound();
  }
  
  // If the post is found, render the Post component with the fetched data.
  return <Post post={post} />;
}
