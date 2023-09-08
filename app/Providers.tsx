'use client'

import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  // ハイドレーションエラーの解消
  useEffect(
    () =>
      // ページがマウントされてからレンダリングする
      setMounted(true),
    [],
  )

  if (!mounted) return null

  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers
