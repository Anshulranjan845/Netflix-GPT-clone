import { addVideoList } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";


 //eslint-disable-next-line
const useTrailerMovies =(movieId)=>{
    const dispatch = useDispatch();

  const TrailerData = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
    const Json = await data.json();
    const FilteredTrailer = Json.results.filter((Trailer)=>Trailer.type === "Trailer");
    const TrailerVideo =FilteredTrailer.length ? FilteredTrailer[0]:Json.results[0];
    dispatch(addVideoList(TrailerVideo));
  }
  useEffect(()=>{
   TrailerData();
  },[])
}

export default useTrailerMovies;