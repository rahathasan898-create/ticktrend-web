// File Path: src/app/pulsepoint/[slug]/page.tsx

import { client } from "@/lib/sanity.client";
import { postBySlugQuery, postPathsQuery } from "@/lib/sanity.queries";
import { SanityPost } from "@/types";
import { notFound } from "next/navigation";
import Post from "@/lib/components/global/Post";
import { Metadata } from "next";
import { SingleSlugPageProps } from "@/types/page-props";

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(postPathsQuery);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: SingleSlugPageProps): Promise<Metadata> {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const post = await client.fetch<SanityPost | null>(postBySlugQuery, { slug: resolvedParams.slug });
  
  if (!post) {
    return {};
  }
  
  return { 
    title: post.title, 
    description: post.excerpt 
  };
}

export default async function PostPage({ params }: SingleSlugPageProps) {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const post = await client.fetch<SanityPost | null>(
    postBySlugQuery, 
    { slug: resolvedParams.slug }, 
    { next: { revalidate: 3600 } }
  );
  
  if (!post) {
    notFound();
  }
  
  return <Post post={post} />;
}