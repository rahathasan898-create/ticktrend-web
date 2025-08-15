// File Path: src/app/vibeschool/[slug]/page.tsx
import { client } from "@/lib/sanity.client";
import { courseBySlugQuery, coursePathsQuery } from "@/lib/sanity.queries";
import { SanityCourse } from "@/types";
import { notFound } from "next/navigation";
import Course from "@/lib/components/vibeschool/Course";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const courses = await client.fetch<{ params: { slug: string } }[]>(coursePathsQuery);
  return courses.map((course) => ({ slug: course.params.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await client.fetch<SanityCourse | null>(courseBySlugQuery, { slug: params.slug });
  if (!course) return {};
  return { title: course.title, description: course.description };
}

export default async function CoursePage({ params }: Props) {
  const course = await client.fetch<SanityCourse | null>(courseBySlugQuery, { slug: params.slug }, { next: { revalidate: 3600 } });
  if (!course) notFound();
  return <Course course={course} />;
}
