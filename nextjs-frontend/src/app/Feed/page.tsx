

/*
================================================================================
| FILE 3 OF 3: The Feed Page (Updated to Handle No Content)                    |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/feed/page.tsx                       |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the code below.                                 |
================================================================================
*/

import { client } from '@/lib/sanity.client'
import { feedQuery } from '@/lib/sanity.queries'
import ContentCard from '@/lib/components/global/ContentCard'

async function getFeedContent() {
  const content = await client.fetch(feedQuery)
  return content
}

export default async function FeedPage() {
  const feedContent = await getFeedContent()

  return (
    <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900">The Feed</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A curated feed of our latest articles, resources, and strategic insights to keep you ahead of the curve.
            </p>
        </div>

        {/* This is the new check. If there's no content, it shows a message. */}
        {!feedContent || feedContent.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-slate-700">No content yet!</h2>
            <p className="mt-2 text-slate-500">Check back soon for the latest updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedContent.map((item: any) => (
            <ContentCard key={item._id} item={item} />
            ))}
          </div>
        )}
        </div>
    </div>
  )
}
