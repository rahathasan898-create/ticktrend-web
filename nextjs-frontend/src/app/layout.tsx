
/*
================================================================================
| FILE 3 OF 4: Update the Root Layout                                          |
| ---                                                                          |
| FILE LOCATION: ./nextjs-frontend/src/app/layout.tsx                          |
|                                                                              |
| INSTRUCTIONS:                                                                |
| 1. Open your existing layout file.                                           |
| 2. Replace its contents with this code. This integrates your custom fonts    |
|    with the necessary Header, Footer, and AuthProvider.                      |
================================================================================
*/

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '../lib/components/global/Header'
import Footer from '../lib/components/global/Footer'
import AuthProvider from '../lib/components/global/AuthProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TickTrend',
  description: 'The definitive growth platform for creators.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

