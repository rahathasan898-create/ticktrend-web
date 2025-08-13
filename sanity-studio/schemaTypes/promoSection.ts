// FILE: schemas/promoSection.ts (UPDATED)
// =======================================================================
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promoSection',
  title: 'Promo Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrowText',
      title: 'Eyebrow Text',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionImage',
      title: 'Section Image',
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
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons (CTAs)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Button Text', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'link', title: 'Button Link', type: 'url', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'style',
              title: 'Style',
              type: 'string',
              options: {list: ['Primary', 'Secondary']},
              initialValue: 'Primary',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: ['Image Left', 'Image Right', 'Image Top'],
        layout: 'radio',
      },
      initialValue: 'Image Left',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: ['Light', 'Dark'],
        layout: 'radio',
      },
      initialValue: 'Light',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eyebrowText',
      media: 'sectionImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Promo Section',
        subtitle: subtitle,
        media: media,
      }
    },
  },
})