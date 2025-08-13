
// FILE: schemas/logo.ts (NEW)
// =======================================================================
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for accessibility. (e.g., "Logo of Google")',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
})
