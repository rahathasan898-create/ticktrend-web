/*
================================================================================
| FILE 1 OF 2: The Go Back Button (Client Component)                           |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/components/global/GoBackButton.tsx  |
|                                                                              |
| NOTE: No changes are needed for this file.                                   |
================================================================================
*/

'use client'

import { useRouter } from 'next/navigation'

export default function GoBackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="text-sm font-semibold leading-6 text-slate-900"
    >
      Go back <span aria-hidden="true">→</span>
    </button>
  )
}

