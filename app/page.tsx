import Results from '@/components/Results'
import type { Movie } from '@/types/Movie'

const fetchMovies = async (genre: string): Promise<Movie[]> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${
        genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
      }?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } },
    )

    const data = await res.json()
    console.log('🚀 ~ file: page.tsx:14 ~ fetchMovies ~ data:', data)

    const results: Movie[] = data.results
    return results
  } catch (err) {
    throw new Error('Failed to fetch data')
  }
}

type HomeProps = {
  searchParams: { genre: string }
}

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending'
  const movies = await fetchMovies(genre)

  return (
    <div>
      <Results results={movies} />
    </div>
  )
}

export default Home
