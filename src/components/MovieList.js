import React from 'react'
import { IMG_MOVIE_URL } from '../utils/Constants'
import MovieCard from './MovieCard';

const MovieList = ({title ,Movies}) => {
    if(!Movies) return;
    const {poster_path} = Movies;
    
  return (
    <div className='py-2 px-4' >
    <h1 className='text-2xl font-semibold text-gray-400'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-hide'>
    <div className='flex'>
      {Movies.map(movie =><MovieCard key={movie.id} posterPath={movie.poster_path} /> )}
    </div>
    </div>
      
      
    </div>
  )
}

export default MovieList
