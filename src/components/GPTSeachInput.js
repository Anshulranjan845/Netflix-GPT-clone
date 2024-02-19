import {FiSearch} from "react-icons/fi"
import AllLang from "../utils/LanguageConstant"
import { useEffect, useRef } from "react"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/Constants"
import { useSelector } from "react-redux"
import React from "react"; 

const GPTSeachInput = () => {

  const inputRef = useRef(null);

  const LangConfig = useSelector(store=>store.Language.LangInitial);

  const SearchMovieResult = ({movie}) => {

    const getSearchedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const Json = await data.json();

      return Json.results;
    }
    useEffect(()=>{
        getSearchedMovies();
    },[]);
  }

  const handleMovieList = async ()=>{
    console.log(inputRef.current.value);

    let gptSearch = "Act as a movie recommendation system and suggest some movies for the query"
    +inputRef.current.value+
    "only give me names of 5 movies , comma seperated like the example result given ahead. Example result:Gadar,Don,Sholey,Dabangg,Race";

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptSearch}],
        model: 'gpt-3.5-turbo',
      })

      

    const SearchedMovies = chatCompletion.choices[0]?.message?.content.split(",");

    const NewMovie = SearchedMovies.map((movie)=>(SearchMovieResult(movie)));

    const MovieResult = await Promise.all(NewMovie);
    
  }
  return (
    <div className='p-[9%] flex justify-center '>
    
    <div className="w-1/2 flex flex-col">
    <form className='bg-black grid grid-cols-12 p-4 m-4 w-full' onSubmit={(e)=>e.preventDefault()}>
    <input ref={inputRef} className="col-span-9 py-4 px-8 rounded-l-md w-full" type="text" placeholder={AllLang[LangConfig].inputWord} />
    <button className="bg-red-700 text-white px-2 py-4 rounded-r-md col-span-3 text-white mx-2 ">
    <FiSearch className="text-2xl ml-4" onClick={handleMovieList}/></button>
 </form>
 </div>
    </div>
  )
}

export default GPTSeachInput
