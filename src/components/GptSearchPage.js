import React from 'react'
import GPTSeachInput from './GPTSeachInput'
import { IMG_CDN_BG } from '../utils/Constants'
import GptSearchResult from './GptSearchResult'

const GptSearchPage = () => {
  return (
    
    <div className='bg-gradient-to-r from-black h-[752px] h-screen'>
    <img src={IMG_CDN_BG} alt="bg_logo" className="absolute h-screen w-screen object-cover text-gray-800 -z-10 bg-gradient-to-r from-black" />
      <GPTSeachInput />
      <GptSearchResult />
     </div>
   
  )
}

export default GptSearchPage
