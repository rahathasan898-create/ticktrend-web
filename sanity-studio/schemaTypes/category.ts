
// =======================================================================
// FILE 2 of 19: schemas/category.ts
// =======================================================================
import {defineField as defineFieldCategory, defineType as defineTypeCategory} from 'sanity'

export default defineTypeCategory({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineFieldCategory({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldCategory({
      name: 'categoryType',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          {title: 'Visibility / Section', value: 'visibility'},
          {title: 'Content Format', value: 'format'},
          {title: 'Topic / Filter', value: 'topic'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineFieldCategory({
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Optional: Use this to create sub-categories.',
    }),
    defineFieldCategory({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'An internal note explaining the purpose of this category.',
    }),
  ],
})
