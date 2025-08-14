/*
================================================================================
| The Final Homepage Code                                                      |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/page.tsx                            |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open your existing homepage file at the path specified above.             |
| 2. Delete all the default content inside it.                                 |
| 3. Copy and paste the code below into the file.                              |
================================================================================
*/
//ff
"use client";
import Hero from '@/lib/components/homepage/Hero'
import FeatureShowcase from '@/lib/components/homepage/FeatureShowcase'
import Testimonial from '@/lib/components/homepage/Testimonial'
import CtaSection from '@/lib/components/homepage/CtaSection'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeatureShowcase />
      <Testimonial />
      <CtaSection />
    </div>
  )
}
