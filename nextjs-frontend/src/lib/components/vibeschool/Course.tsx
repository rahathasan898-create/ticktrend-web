// File Path: src/lib/components/vibeschool/Course.tsx
// This component renders the overview of a single course.

import { SanityCourse } from "@/types";
import Link from "next/link";
import { PortableTextComponent } from "../global/PortableTextComponent";

type Props = { course: SanityCourse };

export default function Course({ course }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold">{course.title}</h1>
        <p className="text-lg text-gray-600 mt-4">{course.description}</p>
      </header>
      
      {course.body && (
        <div className="prose prose-lg max-w-none mb-12">
          <PortableTextComponent value={course.body} />
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold mb-4">Lessons</h2>
        <ul className="space-y-2">
          {course.lessons?.map((lesson) => (
            <li key={lesson._id}>
              <Link href={`/vibeschool/${course.slug.current}/lessons/${lesson.slug.current}`} className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
