import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='w-full h-16 bg-black flex items-center justify-between'>
        <div className='ml-8'>
            <FaSpotify size={40} color='white'/>
        </div>
        <div className='w-[35%] flex items-center gap-3 justify-center'> 
            <AiFillHome 
            className=" bg-gray-600 rounded-full p-1 "
            size={40} color='white' />
            <div className='w-full flex'>
                
                <input 
                className='w-full h-11 p-2 rounded-3xl bg-gray-600 hover:border-white hover:border-2'
                type="text" 
                placeholder='What do you want to play?'/>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-md m-2 font-bold text-gray-200 hover:text-white'>Sign up</p>
            <p className='text-md m-2 font-bold bg-white p-3 rounded-3xl'>Log In</p>
        </div>
    </div>
  )
}

export default Header