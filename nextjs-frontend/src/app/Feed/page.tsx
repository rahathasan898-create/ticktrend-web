
/*
================================================================================
| FILE 3 OF 3: The Feed Page                                                   |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/feed/page.tsx                       |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create the folder and file at the path specified above.                   |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import { client } from '@/lib/sanity.client'
import { feedQuery } from '@/lib/sanity.queries'
import ContentCard from '@/lib/components/global/ContentCard'
import CtaBanner from '@/lib/components/global/CtaBanner' // <-- Import the new component
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedContent.map((item: any) => (
            <ContentCard key={item._id} item={item} />
            ))}
        </div>
        </div>
    </div>
  )
}
