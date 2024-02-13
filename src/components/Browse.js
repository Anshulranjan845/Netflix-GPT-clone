import React from 'react'
import Header from './Header'
import VideoMainContainer from './VideoMainContainer'
import VideoSecondaryContainer from './VideoSecondaryContainer'
import useMovieDesc from '../hooks/useMovieDesc'
import usePopularDesc from '../hooks/usePopularMovies'
import useTopRatedDesc from '../hooks/useTopRatedMovies'
import useUpcomingDesc from '../hooks/useUpcomingMovies'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'



const Browse = () => {
  
  const GptTogglePage = useSelector(store=>store.GptSearchToggle.GptToggle);
  useMovieDesc();
  usePopularDesc();
  useTopRatedDesc();
  useUpcomingDesc();
  return (
    <div>
     <Header/>
     {GptTogglePage ? (<GptSearchPage />)
     :(
     <>
      <VideoMainContainer />
      <VideoSecondaryContainer />
      </>)}
    </div>
  )
}

export default Browse;

