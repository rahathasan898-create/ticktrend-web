
// =======================================================================
// FILE 12 of 19: schemas/cloudEmbed.ts
// =======================================================================
import {defineField as defineFieldCloud, defineType as defineTypeCloud} from 'sanity'

export default defineTypeCloud({
  name: 'cloudEmbed',
  title: 'Cloud Embed',
  type: 'object',
  fields: [
    defineFieldCloud({
      name: 'assetType',
      title: 'Asset Type',
      type: 'string',
      options: {
        list: ['Image', 'Video', 'Audio'],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineFieldCloud({
      name: 'url',
      title: 'Asset URL',
      type: 'url',
      description: 'The public URL of the cloud-hosted asset.',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldCloud({
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for SEO and accessibility (especially for images).',
    }),
    defineFieldCloud({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
})
