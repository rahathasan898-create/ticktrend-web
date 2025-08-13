// FILE 21 of 22: schemas/downloadableFile.ts (NEW)
// =======================================================================
import {defineField as defineFieldDownload, defineType as defineTypeDownload} from 'sanity'

export default defineTypeDownload({
  name: 'downloadableFile',
  title: 'Downloadable File Block',
  type: 'object',
  fields: [
    defineFieldDownload({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Download the Instagram Hooks Checklist PDF"',
    }),
    defineFieldDownload({
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'Upload the PDF or other file here.',
    }),
  ],
})