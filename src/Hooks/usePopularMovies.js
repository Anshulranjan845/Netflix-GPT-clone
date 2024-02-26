import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

 //eslint-disable-next-line
const usePopularDesc = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      const Json = await data.json();
      dispatch(addPopularMovies(Json.results));
    }
    useEffect(()=>{
        getPopularMovies();
    },[]);
}

export default usePopularDesc;
