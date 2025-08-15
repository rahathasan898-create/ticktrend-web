// File Path: src/app/vibeschool/[slug]/lessons/[lessonSlug]/page.tsx
import { client } from "@/lib/sanity.client";
import { lessonBySlugsQuery, coursePathsQuery } from "@/lib/sanity.queries";
import { SanityCourse, SanityLesson } from "@/types";
import { notFound } from "next/navigation";
import CourseInteractive from "@/lib/components/vibeschool/CourseInteractive";
import { Metadata } from "next";

type Props = { params: { slug: string; lessonSlug: string } };
// --- FIX: Updated the query result type to include the course _id ---
// NOTE: Ensure your 'lessonBySlugsQuery' in sanity.queries.ts also fetches the course '_id'.
type LessonQueryResult = { 
  lesson: SanityLesson; 
  _id: string; // Course ID
  title: string; // Course Title
  slug: string; // Course Slug
  lessons: { _id: string; title: string; slug: string }[]; 
};

export async function generateStaticParams() {
  const courses = await client.fetch<{ params: { slug: string; lessons: string[] } }[]>(coursePathsQuery);
  return courses.flatMap((c) => (c.params.lessons || []).map((l) => ({ slug: c.params.slug, lessonSlug: l })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await client.fetch<LessonQueryResult | null>(lessonBySlugsQuery, { courseSlug: params.slug, lessonSlug: params.lessonSlug });
  if (!data || !data.lesson) return {};
  return { title: `${data.lesson.title} | ${data.title}`, description: data.lesson.body?.toString().substring(0, 155) || '' };
}

export default async function LessonPage({ params }: Props) {
  const data = await client.fetch<LessonQueryResult | null>(lessonBySlugsQuery, { courseSlug: params.slug, lessonSlug: params.lessonSlug }, { next: { revalidate: 3600 } });
  if (!data || !data.lesson) notFound();
  
  // --- FIX: Construct a complete SanityCourse object to satisfy the type definition ---
  const courseForComponent: SanityCourse = {
    _id: data._id,
    _type: 'course',
    _createdAt: '', // Add dummy value to satisfy type
    _updatedAt: '', // Add dummy value to satisfy type
    _rev: '', // Add dummy value to satisfy type
    title: data.title,
    slug: { current: data.slug, _type: 'slug' },
    lessons: data.lessons.map(l => ({ ...l, _type: 'lesson', slug: { current: l.slug, _type: 'slug' } })) as SanityLesson[],
  };

  return <CourseInteractive course={courseForComponent} lesson={data.lesson} />;
}
