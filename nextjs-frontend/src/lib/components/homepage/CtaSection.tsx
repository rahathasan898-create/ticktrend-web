// File Location: ./nextjs-frontend/src/app/components/homepage/CtaSection.tsx

import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to stop guessing and start growing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Join the next generation of creators and turn your content into a professional brand with TickTrend.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Get started for free
            </Link>
            <Link href="/feed" className="text-base font-semibold leading-6 text-white hover:text-slate-200 transition-colors">
              Explore the feed <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Background decorative elements */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#2563EB" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
