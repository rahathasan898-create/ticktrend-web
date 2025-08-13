
// =======================================================================
// FILE 16 of 19: schemas/cta.ts
// =======================================================================
import {defineField as defineFieldCta, defineType as defineTypeCta} from 'sanity'

export default defineTypeCta({
  name: 'cta',
  title: 'Call to Action Block',
  type: 'object',
  fields: [
    defineFieldCta({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldCta({
      name: 'subText',
      title: 'Sub-text',
      type: 'text',
      rows: 2,
    }),
    defineFieldCta({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineFieldCta({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    }),
  ],
})
