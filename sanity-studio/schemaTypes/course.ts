// FILE 4 of 19: schemas/course.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course (Playbook)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: "A summary of the course's learning outcomes.",
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      description: 'Add and order the content that makes up this course.',
      of: [
        {name: 'lessonReference', title: 'Lesson', type: 'reference', to: [{type: 'lesson'}]},
        {name: 'postReference', title: 'Post', type: 'reference', to: [{type: 'post'}]},
      ],
    }),
    defineField({
      name: 'monetization',
      title: 'Monetization',
      type: 'object',
      fields: [
        defineField({
          name: 'isSponsored',
          title: 'Is this entire course sponsored?',
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
      ],
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