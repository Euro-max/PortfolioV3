import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
const Bio = () => {
    const url="https://api.quotable.io/random";
    const[data,SetData]=useState([]);
      useEffect(()=>{
axios.get(url).then((response)=>{SetData(response.data)
    console.log(response.data)
}).catch((err)=>{
    console.log(err.message)
})
      },[])
  return (
    <section className=' text-white pt-[80px] bg-[#222222] mt-[-60px]' id='Bio'>
   <motion.p initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1}}className='text-4xl flex justify-center font-bold mb-[30px] text-white'>Bio</motion.p>
  <motion.div className='text-center' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8, delay:0.2}}>
      <motion.p initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:0.8,delay:0.5}}className='p-3 text-3xl tracking-tighter lg:text-4xl '>Hello, I am Ahmed Wael, Graduated from STEM 6th of October High School for Boys in 2023 ranked 24th nationally,currently studying Communications & Electronics Engineering at CUFE. I started learning CS at 15,and Literally, I was blown away by its potential.I will keep learning and developing scalable solutions to whatever problem I encounter Additionally, I am a Chess Fan and Esports Lover. I peaked at 2000 in Rapid and Blitz, 2100 in Bullet</motion.p>
      
     <motion.blockquote initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:0.8,delay:0.5}}className='p-3 text-2xl tracking-tight lg:text-3xl flex justify-center'>"{data.content}"</motion.blockquote>
     <motion.p initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:0.8,delay:0.5}}className='flex justify-center'>{data.author}</motion.p>
     </motion.div>
    </section>
  )
}

export default Bio
