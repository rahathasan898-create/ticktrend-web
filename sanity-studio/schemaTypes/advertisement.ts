
// =======================================================================
// FILE 18 of 19: schemas/advertisement.ts
// =======================================================================
import {defineField as defineFieldAd, defineType as defineTypeAd} from 'sanity'

export default defineTypeAd({
  name: 'advertisement',
  title: 'Advertisement Block',
  type: 'object',
  fields: [
    defineFieldAd({
      name: 'adType',
      title: 'Ad Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image Banner', value: 'banner'},
          {title: 'Ad Network Code', value: 'code'},
          {title: 'Sponsor Mention', value: 'sponsor'},
        ],
        layout: 'radio',
      },
      initialValue: 'banner',
    }),
    defineFieldAd({
      name: 'adImage',
      title: 'Ad Image / Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => parent?.adType !== 'banner',
    }),
    defineFieldAd({
      name: 'adLink',
      title: 'Ad Link',
      type: 'url',
      description: 'The destination URL when the ad is clicked.',
      hidden: ({parent}) => parent?.adType !== 'banner',
    }),
    defineFieldAd({
      name: 'adCode',
      title: 'Ad Code Snippet',
      type: 'text',
      rows: 4,
      description: 'Optional: For ad networks like Google AdSense, paste the code here.',
      hidden: ({parent}) => parent?.adType !== 'code',
    }),
    defineFieldAd({
      name: 'sponsorText',
      title: 'Sponsor Text',
      type: 'text',
      rows: 2,
      description: 'A short mention, e.g., "This section is brought to you by..."',
      hidden: ({parent}) => parent?.adType !== 'sponsor',
    }),
  ],
})
