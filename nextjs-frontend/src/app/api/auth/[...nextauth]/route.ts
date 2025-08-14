/*
================================================================================
| The Final Auth.js Route Handler                                              |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/api/auth/[...nextauth]/route.ts     |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its entire contents with the code below. This version correctly   |
|    imports the configuration and no longer causes a build error.             |
================================================================================
*/

import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth' // Import from the new config file

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
