
/*
================================================================================
| FILE 2 OF 3: The Resource Card Component                                     |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/lib/components/global/ResourceCard.tsx  |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create this new file at the path specified above.                         |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor'
import { Download, Link as LinkIcon } from 'lucide-react'

export default function ResourceCard({ resource }: { resource: any }) {
  const imageUrl = resource.previewImage ? urlFor(resource.previewImage)?.url() : null;

  return (
    <Link href={`/resources/${resource.slug}`} className="group block bg-white p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={resource.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
        <div className="absolute top-3 right-3 bg-slate-900/50 text-white p-2 rounded-full backdrop-blur-sm">
          {resource.resourceType === 'download' ? <Download size={16} /> : <LinkIcon size={16} />}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">
          {resource.title}
        </h3>
        {/* We can add an excerpt here if needed in the future */}
      </div>
    </Link>
  )
}

