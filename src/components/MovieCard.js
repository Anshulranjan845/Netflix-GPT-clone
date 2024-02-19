import React from 'react'
import { IMG_MOVIE_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 pr-2 pt-2'>
    <img alt="poster movie" src={IMG_MOVIE_URL + posterPath} />
    </div>
  )
}

export default MovieCard
