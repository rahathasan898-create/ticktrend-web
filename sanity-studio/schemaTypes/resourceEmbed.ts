// =======================================================================
// FILE 19 of 22: schemas/resourceEmbed.ts
// =======================================================================
import {defineField as defineFieldResourceEmbed, defineType as defineTypeResourceEmbed} from 'sanity'

export default defineTypeResourceEmbed({
  name: 'resourceEmbed',
  title: 'Resource Embed',
  type: 'object',
  fields: [
    defineFieldResourceEmbed({
      name: 'resource',
      title: 'Resource to Feature',
      type: 'reference',
      to: [{type: 'resource'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
