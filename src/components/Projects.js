import React from 'react'
import { motion } from 'framer-motion'
import {data} from './data'

const Projects = () => {
  return (
    <section className='min-h-screen  text-black pt-[50px] bg-[#222222] mt-[-16px]' id='Projects'>
        
        <motion.p className='text-4xl flex justify-center font-bold mb-[30px] text-white' initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}}>Projects</motion.p>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 bg-[#222222]'>
     {data?.map((item,index)=>(
          <motion.div key={index} className='group relative overflow-hidden rounded-3xl'
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.5}}
          whileHover={{scale:1.05}}
         >
            {item.image}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100'> 
            <p className='pl-3 dark:text-[#fff] mt-[35px]'>{item.title}</p>
            <p className='pl-3 dark:text-[#fff]'>{item.description}</p>
            <motion.a className='bg-[#e85d04]  flex justify-center mt-[50px] px-4 py-4 rounded-full cursor-pointer' 
            initial={{scale:0}}
            animate={{scale:1}}
            whileHover={{scale:1.2}}
            href={item.href}
            whileTap={{scale:0.9}}
            transition={{type:'spring',stiffness:400 , damping:17}}
            >Check it Out</motion.a>
           
            </div>
           <div className='flex justify-end pr-3 '> 

           </div>
           
            </motion.div>
        ))}
        </div>
        </section>
  )
}

export default Projects
