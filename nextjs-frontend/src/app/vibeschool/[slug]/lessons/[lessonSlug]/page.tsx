// File Path: src/app/vibeschool/[slug]/lessons/[lessonSlug]/page.tsx

import { client } from "@/lib/sanity.client";
import { lessonBySlugsQuery, coursePathsQuery } from "@/lib/sanity.queries";
import { SanityCourse, SanityLesson } from "@/types";
import { notFound } from "next/navigation";
import CourseInteractive from "@/lib/components/vibeschool/CourseInteractive";
import { Metadata } from "next";
import { NestedSlugPageProps } from "@/types/page-props";

type LessonQueryResult = SanityCourse & {
  lesson: SanityLesson;
};

export async function generateStaticParams() {
  const courses = await client.fetch<{ slug: string; lessons: string[] }[]>(coursePathsQuery);
  return courses.flatMap((course) =>
    (course.lessons || []).map((lessonSlug) => ({
      slug: course.slug,
      lessonSlug: lessonSlug,
    }))
  );
}

export async function generateMetadata({ params }: NestedSlugPageProps): Promise<Metadata> {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const data = await client.fetch<LessonQueryResult | null>(lessonBySlugsQuery, { courseSlug: resolvedParams.slug, lessonSlug: resolvedParams.lessonSlug });
  if (!data || !data.lesson) return {};
  return { 
    title: `${data.lesson.title} | ${data.title}`, 
    description: data.lesson.body?.toString().substring(0, 155) || '' 
  };
}

export default async function LessonPage({ params }: NestedSlugPageProps) {
  // FIX: Await the params object to access its resolved properties
  const resolvedParams = await params;
  const data = await client.fetch<LessonQueryResult | null>(
    lessonBySlugsQuery, 
    { courseSlug: resolvedParams.slug, lessonSlug: resolvedParams.lessonSlug }, 
    { next: { revalidate: 3600 } }
  );
  
  if (!data || !data.lesson) {
    notFound();
  }
  
  return <CourseInteractive course={data} lesson={data.lesson} />;
}