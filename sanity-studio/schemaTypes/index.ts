
// =======================================================================
// FILE 3 of 3: The final, corrected `schemas/index.ts` file
// This file now registers the new textBlock schema.
// =======================================================================
// Document types
import post from './post'
import category from './category'
import author from './author'
import course from './course'
import lesson from './lesson'
import resource from './resource'
import page from './page'

// Object types
import blockContent from './blockContent'
import youtubeEmbed from './youtubeEmbed'
import tiktokEmbed from './tiktokEmbed'
import instagramEmbed from './instagramEmbed'
import cloudEmbed from './cloudEmbed'
import proTip from './proTip'
import keyTakeaways from './keyTakeaways'
import toolRecommendation from './toolRecommendation'
import cta from './cta'
import socialLink from './socialLink'
import advertisement from './advertisement'
import resourceEmbed from './resourceEmbed'
import postEmbed from './postEmbed'
import downloadableFile from './downloadableFile'
import promoSection from './promoSection'
import testimonialSection from './testimonialSection'
import logoCloud from './logoCloud'
import textBlock from './textBlock' // Import the new schema
import logo from './logo' 
export const schemaTypes = [
  // Document types
  post,
  category,
  author,
  course,
  lesson,
  resource,
  page,

  // Object types
  blockContent,
  youtubeEmbed,
  tiktokEmbed,
  instagramEmbed,
  cloudEmbed,
  proTip,
  keyTakeaways,
  toolRecommendation,
  cta,
  socialLink,
  advertisement,
  resourceEmbed,
  postEmbed,
  downloadableFile,
  promoSection,
  testimonialSection,
  logoCloud,
  textBlock,
  logo, // Add the new schema to the list
]
