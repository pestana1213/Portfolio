import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2 py-80'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-md tracking-widest text-gray-600'>
                <h2 className='py-4'>
                Skills
                </h2>
            </p>
            <p>
                What I can do
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/java.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        Java
                    </h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/spring.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        Spring Boot
                    </h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/javascript.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        JavaScript
                    </h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/c.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        c
                    </h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/node.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        Node
                    </h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/github1.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        GitHub
                    </h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/react.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        React
                    </h3>
                </div>
            </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/skills/haskell.png'
                      width='64' 
                      height='64' 
                      alt='/' />
                </div>
                <div className='flex flex-col intems-center justify-center'>
                    <h3>
                        Haskell
                    </h3>
                </div>
            </div>
            </div>
            <p>
                And other's
            </p>

            </div>
        </div>
    </div>
  )
}

export default Skills