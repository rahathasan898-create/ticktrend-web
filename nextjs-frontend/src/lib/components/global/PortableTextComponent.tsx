/*
================================================================================
| The Portable Text Component (Updated with Null Check)                        |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/components/global/PortableTextComponent.tsx |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the code below.                                 |
================================================================================
*/

import { PortableText } from '@portabletext/react'
import urlFor from '@/lib/urlFor'
import Image from 'next/image'

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      // Safely build the image URL. If 'value' is invalid, imageUrl will be null.
      const imageUrl = value ? urlFor(value)?.url() : null;

      // Only render the image if the URL exists.
      if (!imageUrl) {
        return null;
      }

      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Article Image'}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold my-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold my-6">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 my-6 italic text-slate-600">
        {children}
      </blockquote>
    ),
  },
}

export function PortableTextComponent({ value }: { value: any }) {
  return <PortableText value={value} components={portableTextComponents} />
}
