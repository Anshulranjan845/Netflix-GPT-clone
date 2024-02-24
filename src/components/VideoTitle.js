import React from 'react'
import {FaPlay} from "react-icons/fa"; 
import {FiInfo} from "react-icons/fi"; 
import AllLang from '../utils/LanguageConstant';
import { useSelector } from 'react-redux';


const VideoTitle = ({title,overview}) => {
  const LangConfig = useSelector(store=>store.Language.LangInitial);
  return (
    <div className='flex flex-col pb-8 py-[250px] w-1/2 font-sans absolute w-screen aspect-video bg-gradient-to-r from-black'>
  
      <h1 className='font-bold text-6xl text-white my-4 mr-[66%]'>{title}</h1>
      <p className='font-semibold text-sm text-gray-400 w-1/2'>{overview}</p>
      <div className='pt-8 flex flex-row ml-4'>
        <button className='bg-white p-[10px] w-[100px] mr-4 rounded-md bg-opacity-90 hover:bg-opacity-60'>
        <div className='flex flex-row justify-center item-center'>
        <FaPlay className='text-xl'/>
        <span className='ml-2 font-semibold '>{AllLang[LangConfig].Play}</span>
        </div>
        </button>
        <button className='bg-gray-500 w-[120px] rounded-md bg-opacity-70 hover:bg-opacity-40'>
        <div className='flex flex-row justify-center item-center'>
        <FiInfo className='text-white text-xl'/>
        <span className='ml-2 text-sm font-bold text-white'>{AllLang[LangConfig].info}</span></div></button>
      </div>
    </div>
  )
}

export default VideoTitle

