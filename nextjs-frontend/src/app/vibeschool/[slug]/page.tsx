
/*
================================================================================
| FILE 3 OF 3: The Single Course Page (Updated to use Client Component)        |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/vibeschool/[slug]/page.tsx          |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the code below.                                 |
================================================================================
*/

import { client } from '@/lib/sanity.client'
import { courseBySlugQuery } from '@/lib/sanity.queries'
import Image from 'next/image'
import urlFor from '@/lib/urlFor'
import CourseInteractive from '@/lib/components/vibeschool/CourseInteractive' // <-- Import the new component

type Props = {
  params: { slug: string }
}

async function getCourse(slug: string) {
  const course = await client.fetch(courseBySlugQuery, { slug })
  return course
}

export default async function CoursePage({ params }: Props) {
  const course = await getCourse(params.slug)

  if (!course) {
    return <div>Course not found.</div>
  }

  const imageUrl = course.coverImage ? urlFor(course.coverImage)?.url() : null

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Course Details */}
          <div className="lg:col-span-2">
            {imageUrl && (
              <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image src={imageUrl} alt={course.title} layout="fill" objectFit="cover" />
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{course.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{course.description}</p>
          </div>

          {/* Right Column: Lesson List is now handled by the interactive component */}
          <div className="lg:col-span-1">
            <CourseInteractive course={course} />
          </div>
        </div>
      </div>
    </div>
  )
}
