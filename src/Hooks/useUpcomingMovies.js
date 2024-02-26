import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Constants'
import { addUpcomingMovies } from '../utils/movieSlice'
import { useEffect } from 'react';


const useUpcomingDesc = () => {

  //eslint-disable-next-line
    const dispatch = useDispatch();
    const getUpcomingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const Json = await data.json();
      console.log(Json);
      dispatch(addUpcomingMovies(Json.results));
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[]);
}

export default useUpcomingDesc;
