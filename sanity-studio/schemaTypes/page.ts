
// =======================================================================
// FILE 2 of 3: The updated `page.ts` schema
// This now correctly includes the rich text editor via the new wrapper.
// =======================================================================
import {defineField as defineFieldPage, defineType as defineTypePage} from 'sanity'

export default defineTypePage({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineFieldPage({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldPage({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineFieldPage({
      name: 'body',
      title: 'Page Sections',
      type: 'array',
      of: [
        {type: 'promoSection'},
        {type: 'testimonialSection'},
        {type: 'logoCloud'},
        {type: 'textBlock'}, // Use the new wrapper here
      ],
    }),
  ],
})
