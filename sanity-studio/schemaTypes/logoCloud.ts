// FILE: schemas/logoCloud.ts (UPDATED)
// =======================================================================
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logoCloud',
  title: 'Logo Cloud',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Trusted by the world\'s best creators"',
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{type: 'logo'}], // Uses the new, reusable logo type
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Logo Cloud',
      }
    },
  },
})