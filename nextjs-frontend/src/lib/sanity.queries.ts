//The Sanity Query
//File Location: ./nextjs-frontend/src/lib/sanity.queries.ts

//This file will hold all the GROQ queries used to fetch data from Sanity.

import { groq } from 'next-sanity'

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    "slug": slug.current,
    author->{
      name,
      "authorImage": image
    },
    publishedAt,
    body,
    excerpt
  }
`

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    mainImage,
    "slug": slug.current,
    author->{
      name
    },
    publishedAt,
    excerpt
  }
`

export const feedQuery = groq`
  *[_type in ["post", "resource", "course"]] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    _type,
    "title": title,
    "slug": slug.current,
    "image": coalesce(mainImage, previewImage, coverImage),
    "excerpt": coalesce(excerpt, description),
    "publishedAt": coalesce(publishedAt, _createdAt),
  }
`

