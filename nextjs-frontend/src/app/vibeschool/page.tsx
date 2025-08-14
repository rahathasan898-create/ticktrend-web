
/*
================================================================================
| FILE 3 OF 3: The VibeSchool Archive Page                                     |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/vibeschool/page.tsx                 |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create the folder and file at the path specified above.                   |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import { client } from '@/lib/sanity.client'
import { coursesQuery } from '@/lib/sanity.queries'
import CourseCard from '@/lib/components/global/CourseCard'

async function getCourses() {
  const courses = await client.fetch(coursesQuery)
  return courses
}

export default async function VibeSchoolPage() {
  const courses = await getCourses()

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">VibeSchool</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Your creator university. Comprehensive courses and playbooks that take you from foundational knowledge to advanced skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: any) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}
