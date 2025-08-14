
/*
================================================================================
| FILE 4: VibeSchool Single Course Page                                        |
| ---                                                                          |
| LOCATION: ./src/app/vibeschool/[slug]/page.tsx                               |
================================================================================
*/

import { client as sanityClientCourse } from '@/lib/sanity.client'
import { courseBySlugQuery } from '@/lib/sanity.queries'
import NextImageCourse from 'next/image'
import sanityUrlForCourse from '@/lib/urlFor'
import CourseInteractive from '@/lib/components/vibeschool/CourseInteractive'

type CourseProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getCourse(slug: string) {
  const course = await sanityClientCourse.fetch(courseBySlugQuery, { slug })
  return course
}

export default async function CoursePage({ params }: CourseProps) {
  const course = await getCourse(params.slug)

  if (!course) {
    return <div>Course not found.</div>
  }

  const imageUrl = course.coverImage ? sanityUrlForCourse(course.coverImage)?.url() : null

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {imageUrl && (
              <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden shadow-lg">
                <NextImageCourse src={imageUrl} alt={course.title} layout="fill" objectFit="cover" />
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{course.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{course.description}</p>
          </div>
          <div className="lg:col-span-1">
            <CourseInteractive course={course} />
          </div>
        </div>
      </div>
    </div>
  )
}
