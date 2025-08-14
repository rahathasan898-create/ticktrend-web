/*
================================================================================
| The Post Card Component (Updated with Null Check)                            |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/components/global/PostCard.tsx      |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the code below.                                 |
================================================================================
*/

import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor'

export default function PostCard({ post }: { post: any }) {
  // This line checks if an image exists and builds the URL.
  // If post.mainImage is null, imageUrl will also be null.
  const imageUrl = post.mainImage ? urlFor(post.mainImage)?.url() : null;

  return (
    <Link href={`/pulsepoint/${post.slug}`} className="group block">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
        {/*
          This is the critical change. We now check if imageUrl is not null
          before trying to render the Image component.
        */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
          {post.excerpt}
        </p>
        <p className="mt-3 text-xs text-slate-500">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </Link>
  )
}
