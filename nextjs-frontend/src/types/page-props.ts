// File Path: src/types/page-props.ts
// This file contains reusable interfaces for Next.js page props.

/**
 * Props for a page with a single dynamic slug parameter.
 * e.g., /blog/[slug]
 */
export interface SingleSlugPageProps {
  params: {
    slug: string;
  };
}

/**
 * Props for a page with nested dynamic slug parameters.
 * e.g., /courses/[slug]/lessons/[lessonSlug]
 */
export interface NestedSlugPageProps {
  params: {
    slug: string;
    lessonSlug: string;
  };
}
