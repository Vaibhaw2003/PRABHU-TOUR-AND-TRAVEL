import type { Metadata, Viewport } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Prabhu Tour & Travel | Premium Car Rental & Tour Packages',
  description: 'Book affordable outstation taxi services and tour packages to Shimla, Manali, Haridwar, Nainital and more. Reliable service with experienced drivers.',
  keywords: 'tour travel, car rental, taxi service, Shimla tour, Manali tour, Haridwar tour, outstation cab, Delhi taxi',
  authors: [{ name: 'Prabhu Tour & Travel' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Prabhu Tour & Travel | Premium Car Rental & Tour Packages',
    description: 'Book affordable outstation taxi services and tour packages to Shimla, Manali, Haridwar, Nainital and more.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B0000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
