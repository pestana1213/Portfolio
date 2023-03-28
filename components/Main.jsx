import React from 'react'
import {FaLinkedin, FaMailBulk,FaGithubSquare } from 'react-icons/fa'
import {BsPersonVcard} from 'react-icons/bs'

export const Main = () => {

  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-md tracking-widest text-gray-600 hover:scale-105 ease-in duration-200'>
                    Welcome to João's portfolio
                </p>
                <h1 className='py-4 text-gray-500  hover:scale-105 ease-in duration-200'>
                    Hi, I'm
                    <span className='ml-5 text-[#902c2c]  '> 
                        João
                    </span>
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'> 
                    Here you can find more information about me and you and take a look on some Projects
                    that I developed.
                    If you need, feel free to reach me out :)
 
                </p>
                <p>
                    and I love programming. I have a degree in Computer Science taken at university of Minho.
                    I'm currently working at Accenture as a software developer focused in the backend development, but
                    sometimes I help the team in the frontEnd. 
                    
                </p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <FaLinkedin />
                    </div>
                    <div className='rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <FaGithubSquare />
                    </div>
                    <div className='rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <FaMailBulk />
                    </div>
                    <div className='rounded-full shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
                        <BsPersonVcard />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
