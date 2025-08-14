/*
================================================================================
| FILE 1 OF 3: Create a New Auth Config File (The Fix)                         |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/auth.ts                             |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create this new file. It will be the single source of truth for your      |
|    authentication configuration.                                             |
================================================================================
*/

import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}
