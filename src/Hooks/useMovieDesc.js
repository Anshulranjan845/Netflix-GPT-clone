import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Constants'
import { addMoviesList } from '../utils/movieSlice'
import { useEffect } from 'react';

const useMovieDesc = () => {
    const dispatch = useDispatch();
    const getMovieDetails = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const Json = await data.json();
      dispatch(addMoviesList(Json.results));
    }
    useEffect(()=>{
      getMovieDetails();
    },[]);
}

export default useMovieDesc;
