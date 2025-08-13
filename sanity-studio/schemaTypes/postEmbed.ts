
// =======================================================================
// FILE 20 of 22: schemas/postEmbed.ts
// =======================================================================
import {defineField as defineFieldPostEmbed, defineType as defineTypePostEmbed} from 'sanity'

export default defineTypePostEmbed({
  name: 'postEmbed',
  title: 'Post Embed',
  type: 'object',
  fields: [
    defineFieldPostEmbed({
      name: 'post',
      title: 'Post to Feature',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
