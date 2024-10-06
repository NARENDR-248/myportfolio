import React from 'react'
import { FaLinkedin,FaInstagram,FaGithub } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'

function SocialLinks() {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul >
            <li className='flex justify-between items-center h-14 w-40 bg-gray-400 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                <a href='#' className='flex justify-center items-center w-full text-white'>
                    <>
                    linkedin <FaLinkedin size={20}/>
                    </>
                </a>
               
            </li>
            <li className='flex justify-between items-center h-14 w-40 bg-gray-400 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                <a href='#' className='flex justify-center items-center w-full text-white'>
                    <>
                    gethub <FaGithub size={20}/>
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center h-14 w-40 bg-gray-400 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                <a href='#' className='flex justify-center items-center w-full text-white'>
                    <>
                    Instagram <FaInstagram size={20}/>
                    </>
                </a>
            </li>
        </ul>


    </div>
  )
}

export default SocialLinks