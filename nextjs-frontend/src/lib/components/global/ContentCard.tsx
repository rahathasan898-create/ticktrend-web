
/*
================================================================================
| FILE 2 OF 3: The Content Card Component (Updated with Null Check)            |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/components/global/ContentCard.tsx   |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the robust code below.                          |
================================================================================
*/

import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor'

// A helper function to determine the correct URL path based on content type
const getUrlPath = (item: any) => {
  // If a slug doesn't exist, link to the generic page for that content type
  if (!item.slug) {
    switch (item._type) {
      case 'post': return '/pulsepoint';
      case 'resource': return '/resources';
      case 'course': return '/vibeschool';
      default: return '/';
    }
  }

  switch (item._type) {
    case 'post':
      return `/pulsepoint/${item.slug}`
    case 'resource':
      return `/resources/${item.slug}`
    case 'course':
      return `/vibeschool/${item.slug}`
    default:
      return `/${item.slug}`
  }
}

const getTypeLabel = (type: string) => {
    switch (type) {
        case 'post': return 'Article';
        case 'resource': return 'Resource';
        case 'course': return 'Course';
        default: return 'Content';
    }
}

export default function ContentCard({ item }: { item: any }) {
  const href = getUrlPath(item);
  const imageUrl = item.image ? urlFor(item.image)?.url() : null;

  return (
    <Link href={href} className="group block bg-white p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
      </div>
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            {getTypeLabel(item._type)}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {item.excerpt}
        </p>
      </div>
    </Link>
  )
}

