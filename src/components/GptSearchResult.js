import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSearchResult = () => {
  const {movieName , movieResult} = useSelector(store=>store.GptSearchToggle)
  return (
    <div className='w-full bg-black bg-opacity-85 text-white'>
        {movieName?.map((movie,index)=><MovieList title={movie} movies={movieResult[index]}/>)}
    </div>
  )
}

export default GptSearchResult
