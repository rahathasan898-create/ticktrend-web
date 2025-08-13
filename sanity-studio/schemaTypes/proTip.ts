
// =======================================================================
// FILE 13 of 19: schemas/proTip.ts
// =======================================================================
import {defineField as defineFieldProTip, defineType as defineTypeProTip} from 'sanity'

export default defineTypeProTip({
  name: 'proTip',
  title: 'Pro Tip Block',
  type: 'object',
  fields: [
    defineFieldProTip({
      name: 'tipText',
      title: 'Tip Text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
