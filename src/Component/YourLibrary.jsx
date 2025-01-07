import React from 'react'
import { VscLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";

const YourLibrary = () => {
  return (
    <>
    <div className='bg-black w-1/3 m-3 h-full rounded-lg'>
        <div className='flex justify-between items-start'>
        <div className='flex items-center '>
            <VscLibrary 
            className='p-2'
            size={50} color='gray'/>
        <p className='font-bold text-lg p-2 text-gray-500 '>Your Library</p>
        </div>
        <div>
        <IoMdAdd
        className='p-2'
        size={50} color='gray'/>
        </div>
        </div>
        <div>
       <div className='bg-[#212121] m-2 rounded-lg p-2'>
       <p className='text-xl text-white m-2 font-bold'>Create Your First playlist</p>
        <p className='text-md text-white m-2'>Its easy ,we'll help you</p>
        <button 
         className=' bg-white m-2 ml-3 font-bold p-2 rounded-2xl'
         >create playlist</button>
       </div>
       <div className='bg-[#212121] m-2 rounded-lg p-2'>
       <p className='text-xl text-white m-2 font-bold'>Lets find some podcasts to follow </p>
        <p className='text-md text-white m-2'>We'll keep you update on new episodes</p>
        <button 
         className=' bg-white m-2 ml-3 font-bold p-2 rounded-2xl'
         >Browse Podcasts</button>
       </div>
       <div className='flex flex-col flex-wrap m-2'>
        <div className='flex'>
        <p className='text-gray-500 font-bold text-sm m-2 hover:text-white'>Legals</p>
        <p className='text-gray-500 font-bold text-sm m-2  hover:text-white'>Safety & Privacy Center</p>
        <p className='text-gray-500 font-bold text-sm m-2  hover:text-white'>Private Policy</p>
        <p className='text-gray-500 font-bold text-sm m-2  hover:text-white'>Cookies</p>
        </div>
        <div className='flex'>
        <p className='text-gray-500 font-bold text-sm m-2  hover:text-white'>Abouts Ads</p>
        <p className='text-gray-500 font-bold text-sm m-2  hover:text-white'>Accessibity</p>
        </div>
        <p className='text-white underline font-bold text-md m-2  hover:text-white'>Cookies</p>
       </div>
       <div className='flex border-[1px] hover:border-[2px] m-3 items-center justify- w-[100px] rounded-3xl hover:scale-105 duration-150'>
        <AiOutlineGlobal
        className='m-2'
        size={25} color='white'/>
        <p className='text-white font-bold text-sm'>English</p>
       </div>
    </div>
    </div>
    
    </>


  )
}

export default YourLibrary