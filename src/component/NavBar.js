import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {
    const [nav,setNav]=useState(false)
    const Lins=[{
        id:1,
        name:"home"
    },
{
    id:2,
    name:"about",

},
{
    id:3,
    name:"exprinece"
}]
  return (
    <div className='flex justify-between items-center h-20 w-full  text-white bg-black fixed'>
        <div>
            <h1 className='text-2xl font-bold ml-3'>Narendra</h1>
        </div>
    
            <ul className='hidden md:flex '>
                
               {
                 Lins.map(({name,id})=>{
                    return(
                        <li key={id} className='px-10 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{name}</li>
                    )
                })
               }
            </ul>
            <div onClick={()=>setNav(!nav)}  className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
             {nav?  <FaTimes size={30}/>:  <FaBars size={30}/>} 
            </div>
            {
                nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                    {
                 Lins.map(({name,id})=>{
                    return(
                        <li key={id} className='px-10 cursor-pointer capitalize font-medium text-3xl text-gray-500 hover:scale-105 duration-200'>{name}</li>
                    )
                })
               }
                </ul>)
            }
            
        
    </div>
  )
}

export default NavBar