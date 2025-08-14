
/*
================================================================================
| FILE 3 OF 3: The Resources Archive Page                                      |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/resources/page.tsx                  |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create the folder and file at the path specified above.                   |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import { client } from '@/lib/sanity.client'
import { resourcesQuery } from '@/lib/sanity.queries'
import ResourceCard from '@/lib/components/global/ResourceCard'

async function getResources() {
  const resources = await client.fetch(resourcesQuery)
  return resources
}

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">The Creator Kit</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A central library of all our downloadable assets, including templates, checklists, and frameworks to accelerate your content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource: any) => (
            <ResourceCard key={resource._id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  )
}
