import Image from 'next/image'
import React from 'react'

import type { Movie } from '@/types/Movie'

const fetchMovie = async (movieId: string): Promise<Movie> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`,
    )

    return await res.json()
  } catch (err) {
    throw new Error('Failed to fetch data')
  }
}

type MoviePageProps = {
  params: { id: string }
}

const MoviePage: React.FC<MoviePageProps> = async ({ params }) => {
  const movieId = params.id
  const movie = await fetchMovie(movieId)
  console.log(
    '🚀 ~ file: page.tsx:25 ~ constMoviePage:React.FC<MoviePageProps>= ~ movie:',
    movie,
  )

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          className="rounded-lg h-full max-w-full"
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          placeholder="empty"
          alt="Movie poster"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title ||
              movie.original_title ||
              movie.name ||
              movie.original_name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
