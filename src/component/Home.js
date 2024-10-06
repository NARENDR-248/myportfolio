import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import hero3 from '../asets/hero3.jpeg'

function Home() {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto text-white mt-5 flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col h-full justify-center mt-20'>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'> am a react developer</h1>
                <p className='text-gray-300 py-4 '>Katty, a seasoned front-end developer with five years of React expertise, recently led a redesign project incorporating React Query, boosting app performance and user satisfaction. Her collaboration with leading organizations like Gartner showcases her commitment to innovation and excellence in web development.

        
                </p>
                <div>
                    <button className=' group text-white text-xl capitalize w-fit px-6 py-4 mt-6 flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-slate-950 rounded-md '>
                        profilio
                        <span className='group-hover:rotate-90 scale-105 duration-200'><FaArrowRight size={25} /></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={hero3} alt='this my imag' className='rounded-3xl mt-5 mx-auto w-4/12 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home