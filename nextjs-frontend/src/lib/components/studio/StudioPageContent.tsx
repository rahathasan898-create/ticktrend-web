/*
================================================================================
| FILE 1 OF 2: The Creator Studio Page Component                               |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/components/studio/StudioPageContent.tsx |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Create the folder and file at the path specified above.                   |
| 2. Copy and paste the code below into this file.                             |
================================================================================
*/

import Link from 'next/link'
import { Check } from 'lucide-react'

const services = [
  'Full-Service Content Management',
  'Strategic Trend Integration',
  'Audience Growth & Engagement',
  'Brand Partnership Outreach',
  'Personalized Performance Analytics',
  'Creative Asset Production',
]

export default function StudioPageContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Creator Studio</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Focus on what you do best: creating. Let our expert team handle the strategy, growth, and management to turn your passion into a professional brand.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">High-Touch Managed Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              We act as your dedicated growth partner, providing the strategic support of a major agency with the focused attention your brand deserves.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex gap-x-3">
                  <Check className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span className="text-base text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact" // Assuming a future contact page
              className="rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

