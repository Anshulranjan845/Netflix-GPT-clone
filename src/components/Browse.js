import React, { Suspense, lazy } from 'react'
import Header from './Header'
import VideoMainContainer from './VideoMainContainer'
import VideoSecondaryContainer from './VideoSecondaryContainer'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'
import useTopRatedDesc from '../Hooks/useTopRatedMovies'
import useUpcomingDesc from '../Hooks/useUpcomingMovies'
import useMovieDesc from '../Hooks/useMovieDesc'
import usePopularDesc from '../Hooks/usePopularMovies'
import Footer from './Footer'



const GptsearchPage = lazy(()=>import('./GptSearchPage'))
const Browse = () => {
  
  const GptTogglePage = useSelector(store=>store.GptSearchToggle.GptToggle);

    useMovieDesc();
    usePopularDesc();
    useTopRatedDesc();
    useUpcomingDesc();
  
  return (
    <div>
     <Header/>
      {GptTogglePage ? (<Suspense fallback={<h2 className='text-2xl'>Loading .....</h2>}>
        <GptsearchPage />
      </Suspense>)
      :(
      <>
       <VideoMainContainer />
       <VideoSecondaryContainer />
       <Footer />
       </>)}
    </div>
  )
}

export default Browse;

