// FILE: schemas/testimonialSection.ts (UPDATED)
// =======================================================================
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'authorTitle',
      title: 'Author Title / Company',
      type: 'string',
    }),
    defineField({
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'quote',
      subtitle: 'authorName',
      media: 'authorImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
