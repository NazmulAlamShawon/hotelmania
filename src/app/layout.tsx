import type { Metadata } from 'next'
import { Roboto} from 'next/font/google'
import './globals.css'
import Header from "@/components/Header/Header";

const roboto  = Roboto({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'Hotelmania',
  description: 'Discover hotel mania',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>...</title>
      <body className={roboto.className}>
        <main>
          {/* Header */}
          <Header />
        {children}
        {/* Footer */}
        </main>
        
        </body>
    </html>
  )
}
