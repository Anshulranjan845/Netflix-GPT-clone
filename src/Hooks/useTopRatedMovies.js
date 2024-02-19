import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Constants'
import { addTopRatedMovies } from '../utils/movieSlice'
import { useEffect } from 'react';

const useTopRatedDesc = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const Json = await data.json();
      console.log(Json);
      dispatch(addTopRatedMovies(Json.results));
    }
    useEffect(()=>{
        getTopRatedMovies();
    },[]);
}

export default useTopRatedDesc;
