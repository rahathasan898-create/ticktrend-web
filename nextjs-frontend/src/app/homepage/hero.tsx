// File Location: ./nextjs-frontend/src/app/components/homepage/Hero.tsx

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full bg-slate-50">
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Turn Your Content into a Career
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          TickTrend is the definitive growth platform for the new generation of creators.
          We democratize access to elite-level strategies, real-time trend intelligence,
          and powerful creative tools.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/signup"
            className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg"
          >
            Get Started Free
          </Link>
          <Link
            href="/feed"
            className="px-8 py-3 text-base font-medium text-slate-700 bg-white rounded-md hover:bg-slate-100 transition-colors shadow-lg border border-slate-200"
          >
            Explore the Feed
          </Link>
        </div>
      </div>
    </section>
  )
}
