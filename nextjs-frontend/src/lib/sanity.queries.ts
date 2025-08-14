//The Sanity Query
//File Location: ./nextjs-frontend/src/lib/sanity.queries.ts

//This file will hold all the GROQ queries used to fetch data from Sanity.

import { groq } from 'next-sanity'

// --- UPDATE THIS QUERY ---
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
    displayDate,
    updatedAt,
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



// --- UPDATE THIS QUERY ---
// This query now fetches all the date fields for sophisticated display logic.
export const trendBySlugQuery = groq`
  *[_type == "trend" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    "slug": slug.current,
    author->{
      name,
      "authorImage": image
    },
    publishedAt,
    displayDate,
    updatedAt,
    body,
    excerpt
  }
`
// --- ADD THIS NEW QUERY ---
export const coursesQuery = groq`
  *[_type == "course"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    description
  }
`

// --- ADD THIS NEW QUERY ---
export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    coverImage,
    description,
    "lessons": lessons[]->{
      _id,
      _type,
      title,
      "slug": slug.current,
      isPreview
    }
  }
`



// --- ADD THIS NEW QUERY ---
// This powerful query fetches the lesson, its parent course, and all lessons in that course
export const lessonBySlugQuery = groq`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    title,
    body,
    "course": *[_type == "course" && references(^._id)][0] {
      title,
      "slug": slug.current,
      "lessons": lessons[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  }
`

// --- ADD THIS NEW QUERY ---
// This query finds a specific lesson within a specific course
export const lessonBySlugsQuery = groq`
  *[_type == "course" && slug.current == $courseSlug][0] {
    "lesson": lessons[]->[slug.current == $lessonSlug][0] {
      _id,
      title,
      body
    },
    // We also fetch the course and all its lessons for navigation
    title,
    "slug": slug.current,
    "lessons": lessons[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`


// --- ADD THIS NEW QUERY ---
export const resourcesQuery = groq`
  *[_type == "resource"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current, // Assuming you add a slug field to your resource schema
    previewImage,
    resourceType,
    "excerpt": body, // Using the body as an excerpt for the card
  }
`


export const resourceBySlugQuery = groq`
  *[_type == "resource" && slug.current == $slug][0] {
    _id,
    title,
    previewImage,
    resourceType,
    downloadLink,
    "linkedPostUrl": linkedPost->slug.current,
    body
  }
`
