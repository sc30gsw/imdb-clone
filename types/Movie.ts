export type Movie = {
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  backdrop_path: string
  media_type: string
  adult: boolean
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  video_average: number
  vote_count: number
}
