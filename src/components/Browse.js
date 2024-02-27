import React from 'react'
import Header from './Header'
import VideoMainContainer from './VideoMainContainer'
import VideoSecondaryContainer from './VideoSecondaryContainer'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'
import useTopRatedDesc from '../Hooks/useTopRatedMovies'
import useUpcomingDesc from '../Hooks/useUpcomingMovies'
import useMovieDesc from '../Hooks/useMovieDesc'
import usePopularDesc from '../Hooks/usePopularMovies'




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

