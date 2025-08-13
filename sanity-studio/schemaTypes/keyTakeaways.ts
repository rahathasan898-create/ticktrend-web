
// =======================================================================
// FILE 14 of 19: schemas/keyTakeaways.ts
// =======================================================================
import {defineField as defineFieldKey, defineType as defineTypeKey} from 'sanity'

export default defineTypeKey({
  name: 'keyTakeaways',
  title: 'Key Takeaways Block',
  type: 'object',
  fields: [
    defineFieldKey({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'In This Article',
    }),
    defineFieldKey({
      name: 'takeaways',
      title: 'Takeaways',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
