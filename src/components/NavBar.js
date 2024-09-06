import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState} from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { motion } from 'framer-motion';
import lol from './Photo.png'
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      };
  return (
    <div className='fixed left-0 right-0 top-2 z-50 backdrop-blur-lg'>
    <div className='pl-3 mx-auto flex justify-between rounded-lg border border-[#222222] h-16 items-center max-w-2xl  px-1  w-full  dark:bg-[#222222] backdrop-blur-lg'>
     <h1 className='w-full text-3xl font-bold text-[#000] dark:bg-[#222222] dark:text-[#fff] backdrop-blur-lg '>
      <Link to="Hero" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>
      <motion.img src={lol} width={66}  alt="logo" className='my-auto cursor-pointer p-0'initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5}}/>
      </Link>
      </h1>
      <ul className='hidden md:flex dark:bg-[#222222] backdrop-blur-md '>
      <li className='p-4 font-bold hover:text-[#e85d04] cursor-pointer text-[#000000] hover:border-b-4 border-[#e85d04] dark:text-[#fff] dark:hover:border-b-4 dark:border-[#c2410c]'>
      <Link to="Bio" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Bio</Link></li>
      
        <li className='p-4 font-bold hover:text-[#e85d04] hover:border-b-4 border-[#e85d04] cursor-pointer text-[#000000] dark:text-[#fff] dark:hover:border-b-4 dark:border-[#c2410c]'><Link to="Skills" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Skills</Link></li>
        <li className='p-4 font-bold hover:text-[#e85d04] cursor-pointer text-[#000000] hover:border-b-4 border-[#e85d04] dark:text-[#fff] dark:hover:border-b-4 dark:border-[#c2410c]'>
      <Link to="Projects" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Projects</Link></li>
           
            <li className='p-4 font-bold hover:text-[#e85d04] cursor-pointer text-[#000000] hover:border-b-4 border-[#e85d04] dark:text-[#fff] dark:hover:border-b-4 dark:border-[#c2410c]'>
      <Link to="Contact" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Contact</Link></li>
      
      </ul>
      <div onClick={handleNav} className='block md:hidden z-100 overflow-hidden '>
          {nav ? <AiOutlineClose size={20} color='white'/> : <AiOutlineMenu size={20} color='white'/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[300px]  border-r border-r-gray-900 bg-[#222222] h-screen ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#fff] m-4'> <Link to="Hero" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Ahmed Wael </Link></h1>
          <li className='p-4 border-b border-gray-600 bg-[#222222]'>
          </li>
          <li className='p-4 border-b border-gray-600 bg-[#222222] text-white'> <Link to="Bio" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Bio</Link></li>
          <li className='p-4 border-b border-gray-600 bg-[#222222] text-white'> <Link to="Projects" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Projects</Link></li>
          <li className='p-4 border-b border-gray-600 bg-[#222222] text-white'> <Link to="Skills" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Skills</Link></li>
          <li className='p-4 bg-[#2222222] text-white'> <Link to="Contact" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>Contact</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default NavBar
