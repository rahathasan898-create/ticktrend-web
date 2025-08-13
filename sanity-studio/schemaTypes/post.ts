// =======================================================================
// FILE 1 of 19: schemas/post.ts
// =======================================================================
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
    }),
    defineField({
      name: 'displayDate',
      title: 'Display Date Override',
      type: 'datetime',
      description: 'Optional: If you set this date, it will be shown to visitors instead of the "Published at" date.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short summary of the post for SEO and social media previews.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
    defineField({
      name: 'displayOptions',
      title: 'Display Options',
      type: 'object',
      fields: [
        defineField({
          name: 'showPublishDate',
          title: 'Show Publish Date',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showLastUpdated',
          title: 'Show Last Updated Date',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'monetization',
      title: 'Monetization',
      type: 'object',
      fields: [
        defineField({
          name: 'isSponsored',
          title: 'Is this post sponsored?',
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
    defineField({
      name: 'likeCount',
      title: 'Like Count',
      type: 'number',
      readOnly: true,
      initialValue: 0,
      hidden: true,
    }),
  ],
})
