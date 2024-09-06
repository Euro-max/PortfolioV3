import React, { useState,useEffect } from 'react'
import{useTypewriter,Cursor} from 'react-simple-typewriter'
import Ahmed from './Ahmed.jpeg'
import axios from 'axios'
import { motion } from 'framer-motion'
const Hero = () => {
    const [typo]=useTypewriter({
        words:['Web Dev','Engineer','Chess Fan', 'CUian'],
        loop:{},
        typeSpeed:140,
      })
      const[data,SetData]=useState([]);
      const url="https://api.quotable.io/random";
      useEffect(()=>{
axios.get(url).then((response)=>{SetData(response.data)
    console.log(response.data)
}).catch((err)=>{
    console.log(err.message)
})
      },[])

  return (
    <section className='min-h-screen flex flex-wrap items-center text-white pt-[50px]'id='Hero'>
      <motion.div className='w-full md:w-1/2 pl-[10px]'
      initial={{opacity:0, x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1}}>
      <h2 className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>Ahmed Wael</h2>
      <p className='p-2 text-3xl tracking-tighter lg:text-4xl pl-3'>Hello there! 👋🏻</p>
      <p className='mb-8 p-2 text-3xl '>I am a passionate <br className='md:hidden'/>
        <span className='ml-[15px] mr-[15px] text-6xl text-[#15D6E1] font-bold'>{typo}<span style={{color:'white'}}>
        <Cursor/></span></span>
       
      </p>
      </motion.div>
      <motion.div className='w-full md:w-1/2 lg:p-8' initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
      <div className='flex justify-center'>
        <motion.img src={Ahmed} width={500}  className='rounded-3xl ' alt="Me" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}/>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
