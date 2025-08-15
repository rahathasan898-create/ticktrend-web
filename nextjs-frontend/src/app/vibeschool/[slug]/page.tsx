// File Path: src/app/vibeschool/[slug]/page.tsx

import { client } from "@/lib/sanity.client";
import { courseBySlugQuery, coursePathsQuery } from "@/lib/sanity.queries";
import { SanityCourse } from "@/types";
import { notFound } from "next/navigation";
import Course from "@/lib/components/vibeschool/Course";
import { Metadata } from "next";
import { SingleSlugPageProps } from "@/types/page-props";

export async function generateStaticParams() {
  const courses = await client.fetch<{ slug: string }[]>(coursePathsQuery);
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: SingleSlugPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const course = await client.fetch<SanityCourse | null>(courseBySlugQuery, { slug: resolvedParams.slug });
  if (!course) return {};
  return { title: course.title, description: course.description };
}

export default async function CoursePage({ params }: SingleSlugPageProps) {
  const resolvedParams = await params;
  const course = await client.fetch<SanityCourse | null>(
    courseBySlugQuery, 
    { slug: resolvedParams.slug }, 
    { next: { revalidate: 3600 } }
  );
  if (!course) notFound();
  return <Course course={course} />;
}