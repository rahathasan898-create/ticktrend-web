
// =======================================================================
// FILE 3 of 19: schemas/author.ts
// =======================================================================
import {defineField as defineFieldAuthor, defineType as defineTypeAuthor} from 'sanity'

export default defineTypeAuthor({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineFieldAuthor({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldAuthor({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineFieldAuthor({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineFieldAuthor({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    }),
    defineFieldAuthor({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
  ],
})
