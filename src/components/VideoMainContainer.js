import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux";
import React from "react"; 


const VideoMainContainer = () => {
  //Math.floor(Math.random() * newList.length)

  const newList = useSelector((store)=>store.movies?.getPopularMovie);
    if(!newList) return;
    const randomList = newList[10];
    if(!randomList) return;
    const {original_title , overview , id} = randomList
   
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} title={original_title}/>
    </div>
  )
}

export default VideoMainContainer
