import React from 'react'

import type { Movie } from '@/types/Movie'

type ResultsProps = {
  results: Movie[]
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      {results.map((result: Movie) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  )
}

export default Results
