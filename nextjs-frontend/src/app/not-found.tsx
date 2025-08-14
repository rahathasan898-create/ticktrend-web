
/*
================================================================================
| FILE 2 OF 2: The Custom 404 Page (with Smart Auto-Redirect)                  |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/not-found.tsx                       |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the code below.                                 |
================================================================================
*/

'use client' // This must be a client component to use hooks

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import GoBackButton from '@/lib/components/global/GoBackButton'

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    // Start a countdown timer
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    // After 3 seconds, perform the smart redirect
    const timeout = setTimeout(() => {
      // Check if there's a meaningful browser history to go back to.
      // We check for length > 2 because a new tab starts with a length of 1.
      if (window.history.length > 2) {
        router.back()
      } else {
        router.push('/')
      }
    }, 3000)

    // Clean up the timers when the component unmounts
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [router])

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Go back home
          </Link>
          <GoBackButton />
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Redirecting in {countdown}...
        </p>
      </div>
    </main>
  )
}
