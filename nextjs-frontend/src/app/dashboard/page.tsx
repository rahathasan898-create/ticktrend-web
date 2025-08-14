/*
================================================================================
| FILE 1 OF 2: The Dashboard Page (Updated with Community CTA)                 |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/dashboard/page.tsx                  |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open this existing file.                                                  |
| 2. Replace its contents with the updated code below.                         |
================================================================================
*/

import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { authOptions } from '@/lib/auth' // <-- UPDATE THIS IMPORT
import { MessageSquare, BarChart2, Star } from 'lucide-react'

// A simple placeholder card for dashboard items
const DashboardCard = ({ title, description, href, icon: Icon }: { title: string, description: string, href: string, icon: React.ElementType }) => (
  <Link href={href} className="block p-6 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <Icon className="h-8 w-8 text-blue-600 mb-3" />
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </Link>
)

// A new, more prominent card for the community call-to-action
const CommunityCard = () => (
    <div className="p-6 bg-blue-600 border border-blue-700 rounded-lg shadow-lg text-white col-span-1 md:col-span-2 lg:col-span-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Join the VibeHive Community</h3>
                <p className="mt-2 text-sm text-blue-100">Connect with other creators, share strategies, and get exclusive insights in our members-only Discord server.</p>
            </div>
            <a 
                href="#" // Replace with your actual Discord invite link
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-slate-100 transition-colors flex-shrink-0"
            >
                Join Now
            </a>
        </div>
    </div>
)

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/dashboard')
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back, {session.user?.name}!
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Here's your personalized hub for growth.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Updated Dashboard Cards */}
          <CommunityCard />
          <DashboardCard
            title="Your Stats"
            description="Review your latest performance metrics."
            href="/dashboard/stats"
            icon={BarChart2}
          />
          <DashboardCard
            title="Recommended for You"
            description="Trends and articles tailored to your content."
            href="/feed?filter=recommended"
            icon={Star}
          />
        </div>
      </div>
    </div>
  )
}

