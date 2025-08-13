
// =======================================================================
// FILE 15 of 19: schemas/toolRecommendation.ts
// =======================================================================
import {defineField as defineFieldTool, defineType as defineTypeTool} from 'sanity'

export default defineTypeTool({
  name: 'toolRecommendation',
  title: 'Tool Recommendation Block',
  type: 'object',
  fields: [
    defineFieldTool({
      name: 'toolName',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineFieldTool({
      name: 'toolImage',
      title: 'Tool Image/Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineFieldTool({
      name: 'toolDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineFieldTool({
      name: 'toolLink',
      title: 'Link (Affiliate or Standard)',
      type: 'url',
    }),
  ],
})
