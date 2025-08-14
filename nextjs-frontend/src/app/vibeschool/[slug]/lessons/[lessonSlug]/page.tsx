
/*
================================================================================
| FILE 5: VibeSchool Single Lesson Page                                        |
| ---                                                                          |
| LOCATION: ./src/app/vibeschool/[slug]/lessons/[lessonSlug]/page.tsx          |
================================================================================
*/

import { client as sanityClientLesson } from '@/lib/sanity.client'
import { lessonBySlugsQuery } from '@/lib/sanity.queries'
import { PortableTextComponent as SanityPortableTextLesson } from '@/lib/components/global/PortableTextComponent'
import NextLinkLesson from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type LessonProps = {
  params: { slug: string; lessonSlug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getLessonData(courseSlug: string, lessonSlug: string) {
  const data = await sanityClientLesson.fetch(lessonBySlugsQuery, { courseSlug, lessonSlug })
  return data
}

export default async function LessonPage({ params }: LessonProps) {
  const data = await getLessonData(params.slug, params.lessonSlug)

  if (!data || !data.lesson) {
    return <div>Lesson not found.</div>
  }

  const { lesson, lessons: allLessons, slug: courseSlug, title: courseTitle } = data

  const currentLessonIndex = allLessons.findIndex((l: any) => l._id === lesson._id)
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <NextLinkLesson href={`/vibeschool/${courseSlug}`} className="text-sm text-blue-600 hover:underline">
            &larr; Back to {courseTitle}
          </NextLinkLesson>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">{lesson.title}</h1>
          <div className="mt-8 prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md">
            <SanityPortableTextLesson value={lesson.body} />
          </div>
          <div className="mt-12 flex justify-between items-center">
            {prevLesson ? (
              <NextLinkLesson href={`/vibeschool/${courseSlug}/lessons/${prevLesson.slug}`} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                <ArrowLeft size={16} />
                <span>Previous: {prevLesson.title}</span>
              </NextLinkLesson>
            ) : ( <div /> )}
            {nextLesson ? (
              <NextLinkLesson href={`/vibeschool/${courseSlug}/lessons/${nextLesson.slug}`} className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <span>Next: {nextLesson.title}</span>
                <ArrowRight size={16} />
              </NextLinkLesson>
            ) : (
              <NextLinkLesson href={`/vibeschool/${courseSlug}`} className="flex items-center gap-2 text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                <span>Finish Course</span>
              </NextLinkLesson>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
