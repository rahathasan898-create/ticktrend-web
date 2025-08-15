// File Path: src/lib/sanity.queries.ts
// This is the final, unified set of queries for your entire application.

import { groq } from 'next-sanity';

// --- Page & Feed Queries ---
export const homePageQuery = groq`*[_type == "home"][0]{...}`;
export const feedQuery = groq`*[_type in ["post", "resource", "course"]] | order(coalesce(publishedAt, _createdAt) desc) {
    _id, _type, "title": title, "slug": slug.current, "image": coalesce(mainImage, previewImage, coverImage), "excerpt": coalesce(excerpt, description), "publishedAt": coalesce(publishedAt, _createdAt),
}`;

// --- Post & Trend Queries ---
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) { _id, title, mainImage, "slug": slug.current, author->{name}, publishedAt, excerpt }`;
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] { _id, title, mainImage, "slug": slug.current, author->{name, "authorImage": image}, publishedAt, displayDate, updatedAt, body, excerpt }`;
export const trendBySlugQuery = groq`*[_type == "trend" && slug.current == $slug][0] { _id, title, mainImage, "slug": slug.current, author->{name, "authorImage": image}, publishedAt, displayDate, updatedAt, body, excerpt }`;

// --- Resource Queries ---
export const resourcesQuery = groq`*[_type == "resource"] | order(_createdAt desc) { _id, title, "slug": slug.current, previewImage, resourceType, "excerpt": body }`;
export const resourceBySlugQuery = groq`*[_type == "resource" && slug.current == $slug][0] { _id, title, previewImage, resourceType, downloadLink, "linkedPostUrl": linkedPost->slug.current, body }`;

// --- Course & Lesson Queries ---
export const coursesQuery = groq`*[_type == "course"] | order(_createdAt desc) { _id, title, "slug": slug.current, coverImage, description }`;
export const courseBySlugQuery = groq`*[_type == "course" && slug.current == $slug][0] { _id, title, coverImage, description, body, "lessons": lessons[]->{_id, _type, title, "slug": slug.current, isPreview} }`;
export const lessonBySlugsQuery = groq`*[_type == "course" && slug.current == $courseSlug][0] { "lesson": lessons[]->[slug.current == $lessonSlug][0] { _id, title, body }, title, "slug": slug.current, "lessons": lessons[]->{_id, title, "slug": slug.current} }`;

// --- Path Queries (Essential for Vercel Build) ---
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{"slug": slug.current}`;
export const trendPathsQuery = groq`*[_type == "trend" && defined(slug.current)][]{"slug": slug.current}`;
export const resourcePathsQuery = groq`*[_type == "resource" && defined(slug.current)][]{"slug": slug.current}`;
export const coursePathsQuery = groq`*[_type == "course" && defined(slug.current)]{ "params": { "slug": slug.current, "lessons": lessons[defined(slug.current)][].slug.current } }`;
