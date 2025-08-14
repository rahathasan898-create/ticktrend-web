/*
================================================================================
| FILE 1 OF 2: Update the Sanity Client                                        |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/sanity.client.ts                    |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the code below. This adds a check to ensure     |
|    your Project ID is loaded correctly.                                      |
================================================================================
*/

import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-14'

// A helper function to throw a clear error if the project ID is missing
function createSanityClient(token?: string) {
  if (!projectId) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Did you forget to restart the dev server?')
  }
  if (!dataset) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET. Did you forget to restart the dev server?')
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: token,
  })
}

export const client = createSanityClient()
export const serverClient = createSanityClient(process.env.SANITY_API_TOKEN)

