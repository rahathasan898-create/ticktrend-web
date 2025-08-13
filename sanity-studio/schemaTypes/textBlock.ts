// FILE: schemas/textBlock.ts (UPDATED)
// =======================================================================
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Text',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Text Block',
      }
    },
  },
})