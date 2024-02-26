import React from 'react'
import { IMG_MOVIE_URL } from '../utils/Constants'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({title ,Movies}) => {
    if(!Movies) return;
    const {poster_path} = Movies;
    
  return (
    <div className='py-2 px-4' >
    <h1 className='text-2xl font-semibold text-gray-400'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-hide'>
    <div className='flex'>
      {Movies.map(movie =>
        <Link key={movie.id} to={"/movies/"+movie.id}>
        <MovieCard  posterPath={movie.poster_path} />
        </Link> )}
    </div>
    </div>
      
      
    </div>
  )
}

export default MovieList
