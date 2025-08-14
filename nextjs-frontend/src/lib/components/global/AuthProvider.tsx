/*
================================================================================
| The Auth Provider Component (This is the missing file)                       |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/components/global/AuthProvider.tsx  |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create this new file at the path specified above.                         |
| 2. Copy and paste the code below into the file.                              |
| 3. Restart your development server (`npm run dev -- --turbo`).               |
================================================================================
*/

'use client' // This must be a client component

import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
