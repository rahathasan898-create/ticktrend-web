
/*
================================================================================
| FILE 2 OF 2: Update the Header to Link to the Dashboard                      |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/components/global/Header.tsx        |
|                                                                              |
| NOTE: No changes are needed for this file. It is included here for context.  |
================================================================================
*/

'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const Logo = () => (
  <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-slate-900 transition-colors">
    TickTrend
  </Link>
)

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-slate-600 hover:text-slate-900 transition-colors">
    {children}
  </Link>
)

export default function Header() {
  const { data: session, status } = useSession()

  const navigation = [
    { name: 'Feed', href: '/feed' },
    { name: 'PulsePoint', href: '/pulsepoint' },
    { name: 'TrendLab', href: '/trendlab' },
    { name: 'VibeSchool', href: '/vibeschool' },
    { name: 'Resources', href: '/resources' },
    { name: 'Studio', href: '/studio' },
  ]

  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="h-8 w-32 bg-slate-200 rounded-md animate-pulse" />
            ) : session ? (
              <>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="p-2 rounded-full hover:bg-slate-100"
                >
                   <Image
                    src={session.user?.image || `https://placehold.co/32x32/E2E8F0/475569?text=${session.user?.name?.charAt(0)}`}
                    alt={session.user?.name || 'User'}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => signIn('google')}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={() => signIn('google')}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Sign up free
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-slate-600 hover:bg-slate-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
