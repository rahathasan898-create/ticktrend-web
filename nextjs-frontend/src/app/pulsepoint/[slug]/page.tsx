
/*
================================================================================
| FILE 1: PulsePoint Single Page                                               |
| ---                                                                          |
| LOCATION: ./src/app/pulsepoint/[slug]/page.tsx                               |
================================================================================
*/

import { client } from '@/lib/sanity.client'
import { postBySlugQuery } from '@/lib/sanity.queries'
import { PortableTextComponent } from '@/lib/components/global/PortableTextComponent'
import Image from 'next/image'
import urlFor from '@/lib/urlFor'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getPost(slug: string) {
  const post = await client.fetch(postBySlugQuery, { slug })
  return post
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    return <div>Post not found.</div>
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage)?.url() : null;
  const authorImageUrl = post.author?.authorImage ? urlFor(post.author.authorImage)?.width(40).height(40).url() : null;

  const displayDate = post.displayDate || post.publishedAt;
  const wasUpdated = post.updatedAt && new Date(post.updatedAt) > new Date(displayDate);

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{post.title}</h1>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-8 text-slate-600">
          {post.author && authorImageUrl && (
            <div className="flex items-center space-x-2">
              <Image src={authorImageUrl} alt={post.author.name} className="rounded-full" width={40} height={40} />
              <span className="font-medium text-slate-800">{post.author.name}</span>
            </div>
          )}
          {post.author && displayDate && <span className="hidden md:inline">•</span>}
          {displayDate && (
            <div className="text-sm">
              <span>{new Date(displayDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              {wasUpdated && (<span className="ml-2 text-slate-500">(Updated on {new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })})</span>)}
            </div>
          )}
        </div>
        {imageUrl && (
          <div className="relative w-full aspect-[16/9] mb-8">
            <Image src={imageUrl} alt={post.title} layout="fill" objectFit="cover" className="rounded-xl" />
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          <PortableTextComponent value={post.body} />
        </div>
      </div>
    </article>
  )
}

