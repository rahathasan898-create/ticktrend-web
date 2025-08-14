/*
================================================================================
| FILE 1 OF 2: The CTA Banner Component                                        |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/components/global/CtaBanner.tsx     |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create this new file at the path specified above.                         |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import Link from 'next/link'

export default function CtaBanner() {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Unlock Your Full Potential</h2>
            <p className="mt-1 text-blue-100">
              Sign up to access exclusive resources, courses, and personalized trend insights.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/signup"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-slate-100 transition-colors"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

