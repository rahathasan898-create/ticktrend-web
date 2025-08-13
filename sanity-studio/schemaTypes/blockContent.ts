// =======================================================================
// FILE 8 of 22: schemas/blockContent.ts (UPDATED)
// =======================================================================
import {defineType as defineTypeBlock, defineArrayMember} from 'sanity'

export default defineTypeBlock({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineArrayMember({type: 'youtubeEmbed'}),
    defineArrayMember({type: 'tiktokEmbed'}),
    defineArrayMember({type: 'instagramEmbed'}),
    defineArrayMember({type: 'cloudEmbed'}),
    defineArrayMember({type: 'proTip'}),
    defineArrayMember({type: 'keyTakeaways'}),
    defineArrayMember({type: 'toolRecommendation'}),
    defineArrayMember({type: 'cta'}),
    defineArrayMember({type: 'advertisement'}),
    defineArrayMember({type: 'resourceEmbed'}),
    defineArrayMember({type: 'postEmbed'}),
    defineArrayMember({type: 'downloadableFile'}), // NEW
  ],
})
