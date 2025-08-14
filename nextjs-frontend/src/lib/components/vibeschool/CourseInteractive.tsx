
/*
================================================================================
| FILE 2 OF 3: The Interactive Course Component (Corrected)                    |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/components/vibeschool/CourseInteractive.tsx |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its entire contents with the full, corrected code below.          |
================================================================================
*/

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Lock, PlayCircle, CheckCircle, RefreshCw } from 'lucide-react'

// This is a placeholder for a real API call to fetch user progress
const getMockUserProgress = async (courseId: string) => {
  console.log(`Fetching progress for course: ${courseId}`);
  // In the future, this will be: `await fetch('/api/progress?courseId=...')`
  // For now, we'll simulate a user who has completed the first lesson.
  return ['lesson_id_1']; 
};

export default function CourseInteractive({ course }: { course: any }) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      // FUTURE: Fetch real progress for the logged-in user
      // const progress = await fetchUserProgress(course._id);
      const mockProgress = await getMockUserProgress(course._id);
      setCompletedLessons(mockProgress);
      setIsLoading(false);
    };

    fetchProgress();
  }, [course._id]);

  const handleResetProgress = () => {
    // FUTURE: Make an API call to reset progress in the database
    // await fetch('/api/progress', { method: 'DELETE', body: JSON.stringify({ courseId: course._id }) });
    console.log('Resetting progress...');
    setCompletedLessons([]);
  };

  const firstUncompletedLesson = course.lessons.find(
    (lesson: any) => !completedLessons.includes(lesson._id)
  );

  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-900">Course Content</h2>
        <button onClick={handleResetProgress} className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1">
          <RefreshCw size={12} />
          Reset
        </button>
      </div>

      {firstUncompletedLesson && (
        <Link 
          href={`/vibeschool/${course.slug}/lessons/${firstUncompletedLesson.slug}`}
          className="block w-full text-center px-6 py-3 mb-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          {completedLessons.length > 0 ? 'Resume Course' : 'Start Course'}
        </Link>
      )}

      <ul className="space-y-3">
        {course.lessons && course.lessons.map((lesson: any, index: number) => {
          const isCompleted = completedLessons.includes(lesson._id);
          return (
            <li key={lesson._id}>
              <Link 
                href={`/vibeschool/${course.slug}/lessons/${lesson.slug}`}
                className="flex items-center justify-between p-4 rounded-md bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center">
                  <span className="text-slate-500 font-medium mr-4">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-slate-800 font-medium">{lesson.title}</span>
                </div>
                {isCompleted ? (
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                ) : lesson.isPreview ? (
                  <PlayCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Lock className="h-5 w-5 text-slate-400" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

