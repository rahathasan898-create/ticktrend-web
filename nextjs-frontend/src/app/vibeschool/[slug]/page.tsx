// File Path: src/app/vibeschool/[slug]/page.tsx

import { client } from "@/lib/sanity.client";
import { courseBySlugQuery, coursePathsQuery } from "@/lib/sanity.queries";
import { SanityCourse } from "@/types";
import { notFound } from "next/navigation";
import Course from "@/lib/components/vibeschool/Course";
import { Metadata } from "next";
import { SingleSlugPageProps } from "@/types/page-props"; // Assuming you create this file

// Generate static paths
export async function generateStaticParams() {
    const courses = await client.fetch<{ slug: string }[]>(coursePathsQuery);
    return courses.map((course) => ({ slug: course.slug }));
}

// Generate metadata
export async function generateMetadata({ params }: SingleSlugPageProps): Promise<Metadata> {
    const course = await client.fetch<SanityCourse | null>(courseBySlugQuery, { slug: params.slug });
    if (!course) return {};
    return { title: course.title, description: course.description };
}

// Page component
export default async function CoursePage({ params }: SingleSlugPageProps) {
    const course = await client.fetch<SanityCourse | null>(
        courseBySlugQuery,
        { slug: params.slug },
        { next: { revalidate: 3600 } }
    );
    if (!course) notFound();
    return <Course course={course} />;
}
