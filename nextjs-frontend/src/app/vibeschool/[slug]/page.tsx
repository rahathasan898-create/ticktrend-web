// File Path: src/app/vibeschool/[slug]/lessons/[lessonSlug]/page.tsx
import { client } from "@/lib/sanity.client";
import { lessonBySlugsQuery, coursePathsQuery } from "@/lib/sanity.queries";
import { SanityCourse, SanityLesson } from "@/types";
import { notFound } from "next/navigation";
import CourseInteractive from "@/lib/components/vibeschool/CourseInteractive";
import { Metadata } from "next";

type Props = { params: { slug: string; lessonSlug: string } };
type LessonQueryResult = { lesson: SanityLesson; _id: string; title: string; slug: string; lessons: { _id: string; title: string; slug: string }[]; };

// --- FIX: This function now correctly generates all lesson paths ---
export async function generateStaticParams() {
  const courses = await client.fetch<{ slug: string; lessons: string[] }[]>(coursePathsQuery);
  
  // Use flatMap to create a single array of all possible lesson paths
  const params = courses.flatMap((course) =>
    (course.lessons || []).map((lessonSlug) => ({
      slug: course.slug,
      lessonSlug: lessonSlug,
    }))
  );

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await client.fetch<LessonQueryResult | null>(lessonBySlugsQuery, { courseSlug: params.slug, lessonSlug: params.lessonSlug });
  if (!data || !data.lesson) return {};
  return { title: `${data.lesson.title} | ${data.title}`, description: data.lesson.body?.toString().substring(0, 155) || '' };
}

export default async function LessonPage({ params }: Props) {
  const data = await client.fetch<LessonQueryResult | null>(lessonBySlugsQuery, { courseSlug: params.slug, lessonSlug: params.lessonSlug }, { next: { revalidate: 3600 } });
  if (!data || !data.lesson) notFound();
  
  const courseForComponent: SanityCourse = {
    _id: data._id,
    _type: 'course',
    _createdAt: '',
    _updatedAt: '',
    _rev: '',
    title: data.title,
    slug: { current: data.slug, _type: 'slug' },
    lessons: data.lessons.map(l => ({ ...l, _type: 'lesson', slug: { current: l.slug, _type: 'slug' } })) as SanityLesson[],
  };

  return <CourseInteractive course={courseForComponent} lesson={data.lesson} />;
}
