import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from '@/app/Providers'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IMDb Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
