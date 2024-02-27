import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full bg-gray-800 text-gray-400 text-sm '>
       <div className='flex flex-col tracking-tighter'>
       <div className='text-2xl flex justify-evenly p-4'>
       <FaInstagram  />
       <FaGithub />
       <FaTwitter />
       </div>
         
         
       <ul className='p-2 m-4 flex flex-row justify-evenly'>
          <li>Contacts</li>
          <li>Issues</li>
          <li>Other updates</li>
          <li>Licence</li>
          <li>Player</li>
       </ul>
       
       <ul className='p-2 m-4 flex flex-ro justify-evenly'>
       <li>favorites</li>
       <li>Address</li>
       <li>Career</li>
       <li>Developer</li>
       <li>Headquater</li>
    </ul>
    <ul className='p-2 m-4 flex flex-ro justify-around'>
       <li>Language</li>
       <li>Trends</li>
       <li>Upcoming</li>
       <li>Trailer</li>
       <li>T.V</li>
    </ul>
       
       </div>
    </footer>
  )
}

export default Footer