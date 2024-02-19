import { useSelector } from "react-redux";
import React from "react"; 
import useTrailerMovies from "../Hooks/useTrailerMovies";


const VideoBackground = ({movieId}) => {

  console.log(movieId);

  const DisplayVideo = useSelector(store=>store.movies?.getTrailerMovie);

  useTrailerMovies(movieId)

  return (
    <div>
    <iframe
       
      className="w-screen aspect-video" 
      src={"https://www.youtube.com/embed/"+DisplayVideo?.key+"?&autoplay=1&mute=1&si=K34GLD8HCxdGVtKZ"} 
      title="YouTube video player"  
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>
    </iframe>
    </div>
  )
}

export default VideoBackground
