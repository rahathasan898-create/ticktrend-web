// File Path: src/types/index.ts
// This new file defines the "shape" of your data from Sanity for TypeScript.

import { PortableTextBlock } from "sanity";

// Base interface for all Sanity documents to reduce repetition
interface SanityBase {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Defines the structure of a Post document
export interface SanityPost extends SanityBase {
  title: string;
  slug: { current: string; _type: 'slug' };
  mainImage?: { alt?: string; asset: { _ref: string; _type: 'reference' } };
  author?: { name: string; authorImage?: any };
  publishedAt: string;
  body: PortableTextBlock[];
  excerpt?: string;
}

// Defines the structure of a Resource document
export interface SanityResource extends SanityBase {
  title: string;
  slug: { current: string; _type: 'slug' };
  previewImage?: { alt?: string; asset: { _ref: string; _type: 'reference' } };
  resourceType?: string;
  downloadLink?: string;
  linkedPostUrl?: string;
  body: PortableTextBlock[];
}

// Defines the structure of a Course document
export interface SanityCourse extends SanityBase {
  title: string;
  slug: { current: string; _type: 'slug' };
  coverImage?: { alt?: string; asset: { _ref: string; _type: 'reference' } };
  description?: string;
  lessons: SanityLesson[];
  instructor?: any;
  publishedAt?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
}

// Defines the structure of a Lesson document
export interface SanityLesson extends SanityBase {
  title: string;
  slug: { current: string; _type: 'slug' };
  body: PortableTextBlock[];
  isPreview?: boolean;
  excerpt?: string;
  content?: PortableTextBlock[];
}
