
/*
================================================================================
| FILE 2 OF 2: Update the Image URL Helper                                     |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/urlFor.ts                           |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the code below. This prevents the app from      |
|    crashing if an image is missing.                                          |
================================================================================
*/

import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from './sanity.client'

const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! })

function urlFor(source: any) {
  // If no source is provided, return a placeholder or an empty string
  if (!source) {
    // You can return a placeholder URL here if you want
    // e.g., return 'https://placehold.co/600x400';
    return null;
  }
  return builder.image(source)
}

export default urlFor

