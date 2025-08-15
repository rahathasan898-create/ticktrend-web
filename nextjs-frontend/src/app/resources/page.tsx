// File Path: src/app/resources/page.tsx

import { client } from "@/lib/sanity.client";
import { resourcesQuery } from "@/lib/sanity.queries";
import ResourceCard from "@/lib/components/global/ResourceCard";

async function getResources() {
  const resources = await client.fetch(resourcesQuery);
  return resources;
}

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">Resources</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            The Creator Kit. A central library for all downloadable assets, templates, and frameworks.
          </p>
        </div>

        {resources && resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource: any) => (
              <ResourceCard key={resource._id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-slate-700">No resources yet!</h2>
            <p className="mt-2 text-slate-500">Check back soon for the latest downloads.</p>
          </div>
        )}
      </div>
    </div>
  );
}