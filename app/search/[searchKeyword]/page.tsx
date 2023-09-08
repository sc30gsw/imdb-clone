import React from 'react'

import Results from '@/components/Results'
import type { Movie } from '@/types/Movie'

const fetchSearchMovie = async (searchKeyword: string): Promise<Movie[]> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchKeyword}&language=en-US&include_adult=false`,
    )

    const data = await res.json()

    const results: Movie[] = data.results
    return results
  } catch (err) {
    throw new Error('Failed to fetch data')
  }
}

type SearchPageProps = {
  params: { searchKeyword: string }
}

const SearchPage: React.FC<SearchPageProps> = async ({ params }) => {
  const movies = await fetchSearchMovie(params.searchKeyword)

  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6">No movies found</h1>
      )}

      {movies && <Results results={movies} />}
    </div>
  )
}

export default SearchPage
