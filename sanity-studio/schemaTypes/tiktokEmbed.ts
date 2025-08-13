
// =======================================================================
// FILE 10 of 19: schemas/tiktokEmbed.ts
// =======================================================================
import {defineField as defineFieldTiktok, defineType as defineTypeTiktok} from 'sanity'

export default defineTypeTiktok({
  name: 'tiktokEmbed',
  title: 'TikTok Embed',
  type: 'object',
  fields: [
    defineFieldTiktok({
      name: 'url',
      title: 'TikTok Video URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
