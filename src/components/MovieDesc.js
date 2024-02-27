import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_OPTIONS } from '../utils/Constants';
import Header from './Header';

const MovieDesc = () => {
    const [movie , setMovie] = useState(null);
    const {id} = useParams();
    console.log(id);
    const TrailerMovie = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', API_OPTIONS);
        const Json = await data.json();
        const FilteredTrailer = Json.results.filter((Trailer)=>Trailer.type === "Trailer");
        const TrailerVideo =FilteredTrailer.length ? FilteredTrailer[0]:Json.results[0];
        console.log(TrailerVideo);
       setMovie(TrailerVideo);
      }
      
      useEffect(()=>{
       TrailerMovie();
      },[id])
      
  return !movie ? <h2 className='bg-black text-3xl  text-white'>Fetching.....</h2> : (
    <div className='absolute w-screen aspect-video bg-gradient-to-r from-black'>
    <div className="absolute top-0 right-[50%] rounded-lg bg-slate-200 p-2 mt-4 text-white bg-opacity-15">
    <Link to="/"><span>Home</span></Link> 
     </div>
    <iframe
        className="w-screen h-max-full aspect-video bg-gradient-to-r from-black" 
        src={"https://www.youtube.com/embed/"+movie?.key+"?&autoplay=1&mute=1&controls=0&si=K34GLD8HCxdGVtKZ"} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
   </iframe>
 
    </div>
  )
}

export default MovieDesc