import MovieList from './MovieList'
import AllLang from '../utils/LanguageConstant';
import { useSelector } from 'react-redux';
import React from "react"; 

const VideoSecondaryContainer = () => {
  const LangConfig = useSelector(store=>store.Language.LangInitial);

  const MovieListRedux = useSelector(store=>store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
      <MovieList title={AllLang[LangConfig].titleNowPlaying} Movies={MovieListRedux.getPlayingMovies} />
      <MovieList title={AllLang[LangConfig].titlePopular} Movies={MovieListRedux.getPopularMovie} />
      <MovieList title={AllLang[LangConfig].titleTopRated} Movies={MovieListRedux.getTopRatedMovie} />
      <MovieList title={AllLang[LangConfig].titleUpcoming} Movies={MovieListRedux.getUpcomingMovie} />
      </div>
    </div>
  )
}

export default VideoSecondaryContainer
