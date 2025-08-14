
/*
================================================================================
| FILE 3 OF 3: The TrendLab Archive Page                                       |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/trendlab/page.tsx                   |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create the folder and file at the path specified above.                   |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import ContentCard from '@/lib/components/global/ContentCard'

// We can create a simple query right here for this page
const trendsQuery = groq`
  *[_type == "trend"] | order(publishedAt desc) {
    _id,
    _type,
    "title": title,
    "slug": slug.current,
    "image": mainImage,
    "excerpt": excerpt,
    "publishedAt": publishedAt,
  }
`

async function getTrends() {
  const trends = await client.fetch(trendsQuery)
  return trends
}

export default async function TrendLabPage() {
  const trends = await getTrends()

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">TrendLab</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            The real-time intelligence hub. We analyze what's viral, why it works, and how you can use it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((item: any) => (
            <ContentCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
