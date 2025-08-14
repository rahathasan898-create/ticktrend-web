// File Location: ./nextjs-frontend/src/app/components/global/Footer.tsx

import Link from 'next/link'
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const Logo = () => (
  <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-slate-900 transition-colors">
    TickTrend
  </Link>
)

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 transition-colors">
    {children}
  </a>
)

export default function Footer() {
  const primaryLinks = [
    { name: 'Feed', href: '/feed' },
    { name: 'PulsePoint', href: '/pulsepoint' },
    { name: 'TrendLab', href: '/trendlab' },
  ]
  const secondaryLinks = [
    { name: 'VibeSchool', href: '/vibeschool' },
    { name: 'Resources', href: '/resources' },
    { name: 'Studio', href: '/studio' },
  ]
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Socials */}
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-slate-600 text-sm max-w-xs">
              The definitive growth platform for the new generation of creators.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <SocialLink href="#"><Twitter className="h-5 w-5" /></SocialLink>
              <SocialLink href="#"><Instagram className="h-5 w-5" /></SocialLink>
              <SocialLink href="#"><Youtube className="h-5 w-5" /></SocialLink>
              <SocialLink href="#"><Linkedin className="h-5 w-5" /></SocialLink>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Primary</h3>
              <ul className="mt-4 space-y-2">
                {primaryLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Learn</h3>
              <ul className="mt-4 space-y-2">
                {secondaryLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500 text-center">
            &copy; {new Date().getFullYear()} TickTrend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
