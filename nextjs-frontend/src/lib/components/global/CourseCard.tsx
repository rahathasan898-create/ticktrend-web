
/*
================================================================================
| FILE 2 OF 3: The Course Card Component                                       |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/components/global/CourseCard.tsx    |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create this new file at the path specified above.                         |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor'

export default function CourseCard({ course }: { course: any }) {
  const imageUrl = course.coverImage ? urlFor(course.coverImage)?.url() : null;

  return (
    <Link href={`/vibeschool/${course.slug}`} className="group block">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-md">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {course.description}
        </p>
      </div>
    </Link>
  )
}

