'use client'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const router = useRouter()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!searchKeyword) return

      router.push(`/search/${searchKeyword}`)
    },
    [searchKeyword, router],
  )

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button
        disabled={!searchKeyword}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox
