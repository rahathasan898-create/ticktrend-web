// File Path: src/app/vibeschool/[slug]/lessons/[lessonSlug]/page.tsx

import { client } from "@/lib/sanity.client";
import { lessonBySlugsQuery, coursePathsQuery } from "@/lib/sanity.queries";
import { SanityCourse, SanityLesson } from "@/types";
import { notFound } from "next/navigation";
import CourseInteractive from "@/lib/components/vibeschool/CourseInteractive";
import { Metadata } from "next";
import { NestedSlugPageProps } from "@/types/page-props"; // Assuming you create this file

// Define the expected shape of the result from our Sanity query
type LessonQueryResult = SanityCourse & {
  lesson: SanityLesson;
};

// Generate static paths for all lessons
export async function generateStaticParams() {
  const courses = await client.fetch<{ slug: string; lessons: string[] }[]>(coursePathsQuery);
  return courses.flatMap((course) =>
    (course.lessons || []).map((lessonSlug) => ({
      slug: course.slug,
      lessonSlug: lessonSlug,
    }))
  );
}

// Generate metadata for the lesson page
export async function generateMetadata({ params }: NestedSlugPageProps): Promise<Metadata> {
  const data = await client.fetch<LessonQueryResult | null>(lessonBySlugsQuery, { courseSlug: params.slug, lessonSlug: params.lessonSlug });
  if (!data || !data.lesson) return {};
  return { 
    title: `${data.lesson.title} | ${data.title}`, 
    description: data.lesson.body?.toString().substring(0, 155) || '' 
  };
}

// The main component for the individual lesson page
export default async function LessonPage({ params }: NestedSlugPageProps) {
  const data = await client.fetch<LessonQueryResult | null>(
    lessonBySlugsQuery, 
    { courseSlug: params.slug, lessonSlug: params.lessonSlug }, 
    { next: { revalidate: 3600 } }
  );
  
  if (!data || !data.lesson) {
    notFound();
  }
  
  return <CourseInteractive course={data} lesson={data.lesson} />;
}
