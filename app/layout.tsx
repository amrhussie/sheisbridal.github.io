import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'She Is Bridal | Luxury Bridal Rentals in Nasr City',
  description: 'Elegance Redefined. Discover our curated collection of luxury bridal gowns available for rent in Nasr City, Cairo.',
  keywords: ['bridal', 'wedding dress', 'rental', 'Nasr City', 'Cairo', 'luxury gowns'],
  openGraph: {
    title: 'She Is Bridal | Luxury Bridal Rentals',
    description: 'Elegance Redefined. Discover our curated collection of luxury bridal gowns.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
