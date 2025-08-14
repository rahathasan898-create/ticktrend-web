
/*
================================================================================
| FILE 3 OF 3: The PulsePoint Archive Page                                     |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/pulsepoint/page.tsx                 |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create the folder and file at the path specified above.                   |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import { client } from '../../lib/sanity.client'
import { postsQuery } from '../../lib/sanity.queries'
import PostCard from '../../lib/components/global/PostCard'

async function getPosts() {
  const posts = await client.fetch(postsQuery)
  return posts
}

export default async function PulsePointPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">PulsePoint</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          In-depth articles, strategic breakdowns, and evergreen guides to help you master the creator economy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
