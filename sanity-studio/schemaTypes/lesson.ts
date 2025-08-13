// FILE 5 of 19: schemas/lesson.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Lesson Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPreview',
      title: 'Is this a free preview lesson?',
      type: 'boolean',
      description: 'Tick this box if non-logged-in users can see this lesson.',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'monetization',
      title: 'Monetization',
      type: 'object',
      fields: [
        defineField({
          name: 'isSponsored',
          title: 'Is this lesson sponsored?',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'sponsorName',
          title: 'Sponsor Name',
          type: 'string',
          hidden: ({parent}) => !parent?.isSponsored,
        }),
        defineField({
          name: 'sponsorLink',
          title: 'Sponsor Link',
          type: 'url',
          hidden: ({parent}) => !parent?.isSponsored,
        }),
        defineField({
          name: 'containsAffiliateLinks',
          title: 'Contains affiliate links?',
          type: 'boolean',
          description: 'Tick this to automatically show an affiliate disclosure.',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'viewCount',
      title: 'View Count',
      type: 'number',
      readOnly: true,
      initialValue: 0,
      hidden: true,
    }),
  ],
})