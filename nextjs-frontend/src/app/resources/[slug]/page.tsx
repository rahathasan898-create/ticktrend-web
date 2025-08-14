
/*
================================================================================
| FILE 3: Resource Single Page                                                 |
| ---                                                                          |
| LOCATION: ./src/app/resources/[slug]/page.tsx                                |
================================================================================
*/

import { client as sanityClientRes } from '@/lib/sanity.client'
import { resourceBySlugQuery } from '@/lib/sanity.queries'
import NextImageRes from 'next/image'
import NextLink from 'next/link'
import sanityUrlForRes from '@/lib/urlFor'
import { PortableTextComponent as SanityPortableTextRes } from '@/lib/components/global/PortableTextComponent'
import { Download, ArrowUpRight } from 'lucide-react'

type ResourceProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getResource(slug: string) {
  const resource = await sanityClientRes.fetch(resourceBySlugQuery, { slug })
  return resource
}

export default async function ResourcePage({ params }: ResourceProps) {
  const resource = await getResource(params.slug)

  if (!resource) {
    return <div>Resource not found.</div>
  }

  const imageUrl = resource.previewImage ? sanityUrlForRes(resource.previewImage)?.url() : null;
  const ctaLink = resource.resourceType === 'download' ? resource.downloadLink : `/pulsepoint/${resource.linkedPostUrl}`;
  const ctaText = resource.resourceType === 'download' ? 'Download Asset' : 'Read the Guide';

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              {imageUrl && (
                <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden shadow-lg">
                  <NextImageRes src={imageUrl} alt={resource.title} layout="fill" objectFit="cover" />
                </div>
              )}
              <NextLink href={ctaLink || '#'} target={resource.resourceType === 'download' ? '_blank' : '_self'} rel={resource.resourceType === 'download' ? 'noopener noreferrer' : ''} className="flex items-center justify-center w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                {resource.resourceType === 'download' ? <Download className="mr-2" size={20} /> : <ArrowUpRight className="mr-2" size={20} />}
                {ctaText}
              </NextLink>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{resource.title}</h1>
            <div className="mt-8 prose prose-lg max-w-none">
              <SanityPortableTextRes value={resource.body} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

