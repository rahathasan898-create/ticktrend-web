
/*
================================================================================
| FILE 2: TrendLab Single Page                                                 |
| ---                                                                          |
| LOCATION: ./src/app/trendlab/[slug]/page.tsx                                 |
================================================================================
*/

import { client as sanityClient } from '@/lib/sanity.client' // Renamed to avoid conflict
import { trendBySlugQuery } from '@/lib/sanity.queries'
import { PortableTextComponent as SanityPortableText } from '@/lib/components/global/PortableTextComponent' // Renamed to avoid conflict
import NextImage from 'next/image' // Renamed to avoid conflict
import sanityUrlFor from '@/lib/urlFor' // Renamed to avoid conflict

type TrendProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getTrend(slug: string) {
  const trend = await sanityClient.fetch(trendBySlugQuery, { slug })
  return trend
}

export default async function TrendPage({ params }: TrendProps) {
  const trend = await getTrend(params.slug)

  if (!trend) {
    return <div>Trend not found.</div>
  }

  const imageUrl = trend.mainImage ? sanityUrlFor(trend.mainImage)?.url() : null;
  const authorImageUrl = trend.author?.authorImage ? sanityUrlFor(trend.author.authorImage)?.width(40).height(40).url() : null;
  const displayDate = trend.displayDate || trend.publishedAt;
  const wasUpdated = trend.updatedAt && new Date(trend.updatedAt) > new Date(displayDate);

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-base font-semibold leading-7 text-blue-600">Trend Analysis</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{trend.title}</h1>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-8 text-slate-600">
          {trend.author && authorImageUrl && (
            <div className="flex items-center space-x-2">
              <NextImage src={authorImageUrl} alt={trend.author.name} className="rounded-full" width={40} height={40} />
              <span className="font-medium text-slate-800">{trend.author.name}</span>
            </div>
          )}
          {trend.author && displayDate && <span className="hidden md:inline">•</span>}
          {displayDate && (
            <div className="text-sm">
              <span>{new Date(displayDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              {wasUpdated && (<span className="ml-2 text-slate-500">(Updated on {new Date(trend.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })})</span>)}
            </div>
          )}
        </div>
        {imageUrl && (
          <div className="relative w-full aspect-[16/9] mb-8">
            <NextImage src={imageUrl} alt={trend.title} layout="fill" objectFit="cover" className="rounded-xl" />
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          <SanityPortableText value={trend.body} />
        </div>
      </div>
    </article>
  )
}

