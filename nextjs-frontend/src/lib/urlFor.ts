// File Path: src/lib/urlFor.ts
// This file converts Sanity image data into usable URLs.

import { client } from './sanity.client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

/**
 * A robust function to build image URLs from Sanity image data.
 * It checks for a valid source and asset to prevent crashes.
 * @param source - The Sanity image object.
 * @returns An image builder instance or a safe fallback object.
 */
function urlFor(source: any) {
  // --- FIX: Check if the source and its asset reference are valid ---
  if (source && source.asset) {
    return builder.image(source)
  }

  // If the source is invalid, return a fallback object with a placeholder URL.
  // This prevents the app from crashing when an image is missing.
  return {
    url: () => 'https://placehold.co/1200x600/eee/ccc?text=Image+Not+Found',
  }
}

export default urlFor
