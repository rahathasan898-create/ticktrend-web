
// =======================================================================
// FILE 6 of 22: schemas/resource.ts (UPDATED)
// =======================================================================
import {defineField as defineFieldResource, defineType as defineTypeResource} from 'sanity'

export default defineTypeResource({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineFieldResource({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldResource({
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineFieldResource({
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          {title: 'Downloadable File', value: 'download'},
          {title: 'Link to Guide', value: 'link'},
        ],
        layout: 'radio',
      },
      initialValue: 'download',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldResource({
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      description: 'The link to the Canva file, PDF, etc.',
      hidden: ({parent}) => parent?.resourceType !== 'download',
    }),
    defineFieldResource({
      name: 'linkedPost',
      title: 'Link to Guide/Post',
      type: 'reference',
      to: [{type: 'post'}],
      description: 'Select an existing post to link to.',
      hidden: ({parent}) => parent?.resourceType !== 'link',
    }),
    defineFieldResource({
      name: 'body',
      title: 'Description / Body',
      type: 'blockContent',
      description: 'A rich text description for the resource\'s landing page.',
    }),
    defineFieldResource({
      name: 'accessTier',
      title: 'Access Tier',
      type: 'string',
      options: {
        list: ['Public', 'Free Member', 'Premium'],
        layout: 'radio',
      },
      initialValue: 'Free Member',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldResource({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineFieldResource({
      name: 'downloadCount',
      title: 'Download Count',
      type: 'number',
      readOnly: true,
      initialValue: 0,
      hidden: true,
    }),
    defineFieldResource({
      name: 'likeCount',
      title: 'Like Count',
      type: 'number',
      readOnly: true,
      initialValue: 0,
      hidden: true,
    }),
  ],
})