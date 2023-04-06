import React, {useState} from "react";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedin, FaMailBulk,FaGithubSquare } from 'react-icons/fa'

const NavBar = () =>{

    const [nav, setNav] = useState(false); 
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]  bg-[#ccbdcf]/100'>
            <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:scale-105'>
                            Home
                        </li>
                        </Link>
                        <Link href='/#About'>
                        <li className='ml-10 text-sm uppercase hover:scale-105'>
                            About
                        </li>
                        </Link>
                        <Link href='/' onClick={()=>open('https://github.com/pestana1213')}>
                        <li className='ml-10 text-sm uppercase hover:scale-105'>
                            Projects
                        </li>
                        </Link>
                        <Link href='/#Skills'>
                        <li className='ml-10 text-sm uppercase hover:scale-105'>
                            Skills
                        </li>
                        </Link>
                        <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:scale-105'>
                            Contact
                        </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden p-10 ease-in duration-500'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
                    <div className={nav ?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : '' }>
                        <div className={nav ? 'fixed top-0 w-[60%] sm:w[45%] md:w[30%] h-screen bg-[#110417] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                            <div className='right-0 flex w-full items-center justify-between'>
                                <div onClick={handleNav} className=' rounded-full shadow-sm shadow-gray-400 cursor-pointer'>
                                    <AiOutlineClose />
                                </div> 
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>
                                    João Nogueira
                                </p>
                            </div>
                            <div className='py-4 flex flex-col' onClick={handleNav}>
                                <ul>
                                    <Link href='/' >
                                        <li className='py-4 text-sm'>
                                            Home
                                        </li>
                                    </Link>
                                    <Link href='/' >
                                        <li className='py-4 text-sm'>
                                            Home
                                        </li>
                                    </Link>
                                    <Link href='/#About' >
                                        <li className='py-4 text-sm'>
                                            About
                                        </li>
                                    </Link>
                                    <Link href='/#Skills' >
                                        <li className='py-4 text-sm'>
                                            Skills
                                        </li>
                                    </Link>
                                    <Link href='https://github.com/pestana1213' >
                                        <li className='py-4 text-sm'>
                                            Projects
                                        </li>
                                    </Link>
                                    <Link href='/' >
                                        <li className='py-4 text-sm'>
                                            Contact
                                        </li>
                                    </Link>
                                </ul>
                                <div className='pt-40'>
                                    <p className='tracking-widest text-[#123]'>
                                        Let's connect
                                    </p>
                                    <div className='flex items-center justify-between my-4 w-full sm:w[80%]'>
                                    <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200' onClick={()=>open('https://www.linkedin.com/in/jo%C3%A3o-nogueira-fafe/')}>
                                        <FaLinkedin />
                                    </div>
                                    <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200' onClick={()=>open('https://github.com/pestana1213')}>
                                        <FaGithubSquare />
                                    </div>
                                    <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <FaMailBulk />
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default NavBar