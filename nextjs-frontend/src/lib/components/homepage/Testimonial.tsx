// File Location: ./nextjs-frontend/src/app/components/homepage/Testimonial.tsx

import Image from 'next/image'

// In a real application, you would fetch this data from Sanity.
// For now, we'll hard-code it as requested.
const testimonial = {
  quote:
    "TickTrend is the first platform that feels like it was built by actual creators. The trend analysis is a game-changer and has saved me countless hours of guesswork. It's an indispensable part of my workflow now.",
  author: {
    name: 'Sarah Dole',
    title: 'Full-Time Creator & Course Instructor',
    // FIX: Replaced the hard-coded image path with a placeholder URL
    image: 'https://placehold.co/48x48/E2E8F0/475569?text=SD', 
  },
}

export default function Testimonial() {
  return (
    <section className="w-full bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <figure className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-medium leading-9 text-slate-900 md:text-3xl md:leading-normal">
            <p>"{testimonial.quote}"</p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="flex items-center justify-center">
              <Image
                className="h-12 w-12 rounded-full"
                src={testimonial.author.image}
                alt={`Photo of ${testimonial.author.name}`}
                width={48}
                height={48}
              />
            </div>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-slate-900">{testimonial.author.name}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-slate-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-slate-600">{testimonial.author.title}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}