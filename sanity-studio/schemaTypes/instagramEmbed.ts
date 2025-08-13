
// =======================================================================
// FILE 11 of 19: schemas/instagramEmbed.ts
// =======================================================================
import {defineField as defineFieldInsta, defineType as defineTypeInsta} from 'sanity'

export default defineTypeInsta({
  name: 'instagramEmbed',
  title: 'Instagram Embed',
  type: 'object',
  fields: [
    defineFieldInsta({
      name: 'url',
      title: 'Instagram Post URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
