
// =======================================================================
// FILE 17 of 19: schemas/socialLink.ts
// =======================================================================
import {defineField as defineFieldSocial, defineType as defineTypeSocial} from 'sanity'

export default defineTypeSocial({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineFieldSocial({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: ['Twitter', 'LinkedIn', 'Instagram', 'TikTok', 'YouTube'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineFieldSocial({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
