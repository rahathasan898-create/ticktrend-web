// File Path: src/lib/components/vibeschool/CourseInteractive.tsx
// This component is updated to accept both 'course' and 'lesson' props.

'use client'

import { SanityCourse, SanityLesson } from "@/types";
import Link from "next/link";
import { PortableTextComponent } from "../global/PortableTextComponent";

// --- FIX: Added 'lesson' to the component's props definition ---
type Props = {
    course: SanityCourse;
    lesson: SanityLesson;
}

// --- FIX: Destructure both 'course' and 'lesson' from the props ---
export default function CourseInteractive({ course, lesson }: Props) {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* Sidebar with all lessons */}
            <aside className="w-full lg:w-1/4 p-4 border-r">
                <h2 className="text-xl font-bold mb-4">{course.title}</h2>
                <nav>
                    <ul>
                        {course.lessons?.map((l) => (
                            <li key={l._id}>
                                <Link 
                                    href={`/vibeschool/${course.slug.current}/lessons/${l.slug.current}`}
                                    // Highlight the current lesson
                                    className={`block p-2 rounded-md ${l.slug.current === lesson.slug.current ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                                >
                                    {l.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main content area for the current lesson */}
            <main className="w-full lg:w-3/4 p-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold">{lesson.title}</h1>
                </header>
                <div className="prose prose-lg max-w-none">
                    {lesson.body && <PortableTextComponent value={lesson.body} />}
                </div>
            </main>
        </div>
    )
}
