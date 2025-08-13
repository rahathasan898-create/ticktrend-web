
// =======================================================================
// FILE 9 of 19: schemas/youtubeEmbed.ts
// =======================================================================
import {defineField as defineFieldYoutube, defineType as defineTypeYoutube} from 'sanity'

export default defineTypeYoutube({
  name: 'youtubeEmbed',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    defineFieldYoutube({
      name: 'url',
      title: 'YouTube Video URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
